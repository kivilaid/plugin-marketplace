# Claude Code Plugin Marketplace

A curated plugin marketplace featuring productivity tools with Git workflow automation, code review agents, and testing capabilities.

## Overview

This marketplace provides production-ready plugins for Claude Code, featuring:

- **Git Workflow Automation** - Streamline commits, PRs, and branch management
- **Code Review Agents** - Thorough code review with best practices analysis
- **Test Generation** - Comprehensive test suite creation for multiple frameworks
- **Validation Hooks** - Automatic syntax validation on file changes
- **MCP Server Examples** - Reference implementation for custom integrations

Perfect for teams wanting to boost productivity with automated workflows and AI-powered code assistance.

## Quick Start

### Add this marketplace to Claude Code

```bash
# Add from GitHub
/plugin marketplace add kivilaid/plugin-marketplace

# Or add locally for development
/plugin marketplace add /path/to/plugin-marketplace
```

### Install the example plugin

```bash
/plugin install example-full-featured@example-marketplace
```

## Available Plugins

### Full-Featured Productivity Plugin

Production-ready plugin with Git automation, code review, testing, and validation capabilities.

**Components:**

- **Commands:**
  - `/clean_gone` - Cleans up git branches marked as [gone]
  - `/commit-push-pr` - Commit, push, and open a PR
  - `/commit` - Create a git commit

- **Agents:**
  - `code-reviewer` - Thorough code review specialist
  - `test-generator` - Comprehensive test suite generator

- **Hooks:**
  - Post-write validation script that checks file syntax

- **MCP Servers:**
  - `example-server` - Demonstrates MCP protocol with example tools

## Repository Structure

```
plugin-marketplace/
├── .claude-plugin/
│   └── marketplace.json          # Marketplace catalog
├── plugins/
│   └── example-full-featured/    # Example plugin
│       ├── plugin.json           # Plugin manifest
│       ├── commands/             # Slash commands
│       │   ├── clean_gone.md
│       │   ├── commit-push-pr.md
│       │   └── commit.md
│       ├── agents/               # Specialized agents
│       │   ├── code-reviewer.md
│       │   └── test-generator.md
│       ├── hooks/                # Event hooks
│       │   ├── hooks.json
│       │   └── validate.sh
│       └── mcp-servers/          # MCP servers
│           └── example-server.js
├── README.md
└── .gitignore
```

## Creating Your Own Marketplace

### 1. Create marketplace configuration

Create `.claude-plugin/marketplace.json`:

```json
{
  "name": "your-marketplace",
  "owner": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "metadata": {
    "description": "Your marketplace description",
    "version": "1.0.0"
  },
  "plugins": [
    {
      "name": "your-plugin",
      "source": "./plugins/your-plugin",
      "description": "Plugin description",
      "version": "1.0.0"
    }
  ]
}
```

### 2. Create your plugins

Each plugin should have a `plugin.json` manifest:

```json
{
  "name": "your-plugin",
  "version": "1.0.0",
  "description": "Plugin description",
  "commands": ["./commands/"],
  "agents": ["./agents/"],
  "hooks": "./hooks/hooks.json",
  "mcpServers": { ... }
}
```

### 3. Add plugin components

- **Commands:** Markdown files with command instructions
- **Agents:** Markdown files with agent system prompts
- **Hooks:** JSON configuration + executable scripts
- **MCP Servers:** Executable servers implementing MCP protocol

### 4. Test locally

```bash
/plugin marketplace add ./your-marketplace
/plugin install your-plugin@your-marketplace
```

### 5. Publish to GitHub

```bash
git init
git add .
git commit -m "Initial marketplace setup"
git remote add origin https://github.com/your-username/your-marketplace.git
git push -u origin main
```

## Plugin Components Guide

### Commands

Create `.md` files in the `commands/` directory:

```markdown
# Command Name

Description of what the command does.

Instructions for Claude on how to execute this command...
```

### Agents

Create `.md` files in the `agents/` directory with specialized system prompts:

```markdown
# Agent Name

You are a specialist in...

## Your responsibilities
...
```

### Hooks

Create `hooks.json` configuration:

```json
{
  "PostToolUse": [
    {
      "matcher": "Write|Edit",
      "hooks": [
        {
          "type": "command",
          "command": "${CLAUDE_PLUGIN_ROOT}/hooks/script.sh"
        }
      ]
    }
  ]
}
```

### MCP Servers

Create executable servers that implement the MCP protocol. See `mcp-servers/example-server.js` for a reference implementation.

## Environment Variables

Plugins can use these environment variables:

- `${CLAUDE_PLUGIN_ROOT}` - Absolute path to the plugin directory
- Custom environment variables defined in `mcpServers` configuration

## Distribution Options

### GitHub (Recommended)

1. Push to GitHub repository
2. Users add with: `/plugin marketplace add owner/repo`

### Other Git Services

Users can add from any git URL:
```bash
/plugin marketplace add https://gitlab.com/user/marketplace.git
```

### Local Development

```bash
/plugin marketplace add /local/path/to/marketplace
```

## Team Configuration

Set up automatic marketplace installation in `.claude/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "team-tools": {
      "source": {
        "source": "github",
        "repo": "your-org/plugin-marketplace"
      }
    }
  }
}
```

## Validation

Validate your marketplace before publishing:

```bash
# Validate plugin structure
claude plugin validate ./plugins/your-plugin

# Test marketplace locally
/plugin marketplace add ./
/plugin install your-plugin@your-marketplace
```

## Resources

- [Plugin Documentation](https://docs.claude.com/en/docs/claude-code/plugins)
- [Plugin Marketplaces Guide](https://docs.claude.com/en/docs/claude-code/plugin-marketplaces)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)

## License

MIT

## Contributing

Contributions welcome! Please feel free to submit issues and pull requests.
