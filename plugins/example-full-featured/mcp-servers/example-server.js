#!/usr/bin/env node

/**
 * Example MCP Server
 *
 * This is a minimal example of an MCP (Model Context Protocol) server
 * that demonstrates the basic structure and capabilities.
 *
 * For production MCP servers, consider using the official MCP SDK:
 * - TypeScript: @modelcontextprotocol/sdk
 * - Python: mcp
 */

const readline = require('readline');

// Create readline interface for JSON-RPC communication
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Available tools
const tools = [
  {
    name: 'get_example_data',
    description: 'Retrieves example data for demonstration purposes',
    inputSchema: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key to retrieve data for'
        }
      },
      required: ['key']
    }
  },
  {
    name: 'format_text',
    description: 'Formats text in various styles',
    inputSchema: {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          description: 'The text to format'
        },
        style: {
          type: 'string',
          enum: ['uppercase', 'lowercase', 'title', 'reverse'],
          description: 'The formatting style to apply'
        }
      },
      required: ['text', 'style']
    }
  }
];

// Example data store
const exampleData = {
  'user': { name: 'Claude', role: 'AI Assistant' },
  'version': { number: '1.0.0', release: '2024-01-01' },
  'status': { system: 'operational', uptime: '99.9%' }
};

// Tool implementations
function getExampleData(key) {
  if (exampleData[key]) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(exampleData[key], null, 2)
        }
      ]
    };
  }
  return {
    content: [
      {
        type: 'text',
        text: `No data found for key: ${key}`
      }
    ],
    isError: true
  };
}

function formatText(text, style) {
  let formatted;
  switch (style) {
    case 'uppercase':
      formatted = text.toUpperCase();
      break;
    case 'lowercase':
      formatted = text.toLowerCase();
      break;
    case 'title':
      formatted = text.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
      break;
    case 'reverse':
      formatted = text.split('').reverse().join('');
      break;
    default:
      formatted = text;
  }

  return {
    content: [
      {
        type: 'text',
        text: formatted
      }
    ]
  };
}

// Handle JSON-RPC messages
function handleMessage(message) {
  try {
    const request = JSON.parse(message);
    let response;

    switch (request.method) {
      case 'initialize':
        response = {
          jsonrpc: '2.0',
          id: request.id,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: {}
            },
            serverInfo: {
              name: 'example-server',
              version: '1.0.0'
            }
          }
        };
        break;

      case 'tools/list':
        response = {
          jsonrpc: '2.0',
          id: request.id,
          result: {
            tools: tools
          }
        };
        break;

      case 'tools/call':
        const { name, arguments: args } = request.params;
        let result;

        if (name === 'get_example_data') {
          result = getExampleData(args.key);
        } else if (name === 'format_text') {
          result = formatText(args.text, args.style);
        } else {
          result = {
            content: [{ type: 'text', text: `Unknown tool: ${name}` }],
            isError: true
          };
        }

        response = {
          jsonrpc: '2.0',
          id: request.id,
          result: result
        };
        break;

      default:
        response = {
          jsonrpc: '2.0',
          id: request.id,
          error: {
            code: -32601,
            message: `Method not found: ${request.method}`
          }
        };
    }

    console.log(JSON.stringify(response));
  } catch (error) {
    console.error('Error processing message:', error);
    const errorResponse = {
      jsonrpc: '2.0',
      id: null,
      error: {
        code: -32700,
        message: 'Parse error'
      }
    };
    console.log(JSON.stringify(errorResponse));
  }
}

// Listen for messages
rl.on('line', (line) => {
  if (line.trim()) {
    handleMessage(line);
  }
});

// Handle process termination
process.on('SIGINT', () => {
  process.exit(0);
});

process.on('SIGTERM', () => {
  process.exit(0);
});
