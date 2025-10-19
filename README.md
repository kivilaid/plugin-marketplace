# Claude Code Plugin Marketplace

A curated plugin marketplace featuring productivity tools, document processing skills, creative capabilities, and development workflows with Git automation, code review agents, and testing.

## Overview

This marketplace provides production-ready plugins and skills for Claude Code, featuring:

- **Official Anthropic Plugins** - Agent SDK development, PR review toolkit, commit workflows, feature development, and security guidance
- **Document Processing** - Create and edit Excel, Word, PowerPoint, and PDF files
- **Creative & Design** - Generate algorithmic art, canvas designs, and Slack GIFs
- **Development Tools** - MCP server building, web app testing, and artifact creation
- **Git Workflow Automation** - Streamline commits, PRs, and branch management
- **Code Review Agents** - Comprehensive PR review with specialized agents for comments, tests, errors, types, quality, and simplification
- **Test Generation** - Comprehensive test suite creation for multiple frameworks
- **Enterprise Skills** - Internal communications, brand guidelines, and theme styling
- **Security Features** - Automatic security warnings for common vulnerabilities and unsafe patterns
- **Validation Hooks** - Automatic syntax validation on file changes
- **MCP Server Examples** - Reference implementation for custom integrations
- **Browser Automation** - Playwright MCP integration for web testing and automation

Perfect for teams and individuals wanting to boost productivity with automated workflows, AI-powered code assistance, official Anthropic tooling, and specialized skills.

## MCP Server Integration

This repository demonstrates MCP (Model Context Protocol) server integration with two remote servers:

### Context7 - Documentation Retrieval
- **URL**: `https://mcp.context7.com/mcp`
- **Purpose**: Retrieve latest documentation for any library or framework
- **Tools**: `resolve-library-id`, `get-library-docs`

### Playwright - Browser Automation
- **URL**: `https://playwright-mcp.ando-kivilaid.workers.dev/mcp`
- **Purpose**: Web browser automation and testing
- **Tools**: `browser_navigate`, `browser_snapshot`, `browser_take_screenshot`, `browser_click`, `browser_type`, `browser_evaluate`, `browser_wait_for`

Configuration is managed in `.mcp.json` at the repository root, which is automatically detected by Claude Code Action workflows.

## Quick Start

### Add this marketplace to Claude Code

```bash
# Add from GitHub
/plugin marketplace add kivilaid/plugin-marketplace

# Or add locally for development
/plugin marketplace add /path/to/plugin-marketplace
```

### Install plugins

```bash
# Install document processing skills
/plugin install document-skills@example-marketplace

# Install example skills collection
/plugin install example-skills@example-marketplace

# Install full-featured productivity plugin
/plugin install example-full-featured@example-marketplace

# Install Anthropic official plugins
/plugin install agent-sdk-dev@example-marketplace
/plugin install pr-review-toolkit@example-marketplace
/plugin install commit-commands@example-marketplace
/plugin install feature-dev@example-marketplace
/plugin install security-guidance@example-marketplace
```

## Available Plugins

### Document Skills

**Collection of document processing suite** including Excel, Word, PowerPoint, and PDF capabilities.

**Includes:**
- **xlsx** - Create, edit, and analyze Excel spreadsheets with support for formulas, formatting, data analysis, and visualization
- **docx** - Create, edit, and analyze Word documents with support for tracked changes, comments, formatting preservation, and text extraction
- **pptx** - Create, edit, and analyze PowerPoint presentations with support for layouts, templates, charts, and automated slide generation
- **pdf** - Comprehensive PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms

**Note:** These document skills are source-available (see THIRD_PARTY_NOTICES.md) and are point-in-time snapshots for reference.

### Example Skills

**Collection of example skills** demonstrating various capabilities including skill creation, MCP building, visual design, algorithmic art, internal communications, web testing, artifact building, Slack GIFs, and theme styling.

**Creative & Design:**
- **algorithmic-art** - Create generative art using p5.js with seeded randomness, flow fields, and particle systems
- **canvas-design** - Design beautiful visual art in .png and .pdf formats using design philosophies
- **slack-gif-creator** - Create animated GIFs optimized for Slack's size constraints
- **theme-factory** - Style artifacts with 10 pre-set professional themes or generate custom themes on-the-fly

**Development & Technical:**
- **artifacts-builder** - Build complex claude.ai HTML artifacts using React, Tailwind CSS, and shadcn/ui components
- **mcp-builder** - Guide for creating high-quality MCP servers to integrate external APIs and services
- **webapp-testing** - Test local web applications using Playwright for UI verification and debugging

**Enterprise & Communication:**
- **brand-guidelines** - Apply Anthropic's official brand colors and typography to artifacts
- **internal-comms** - Write internal communications like status reports, newsletters, and FAQs

**Meta Skills:**
- **skill-creator** - Guide for creating effective skills that extend Claude's capabilities

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

### Agent SDK Development

**Official Anthropic plugin** for working with the Claude Agent SDK.

Development kit with specialized agents and commands for creating, testing, and deploying Claude Agent SDK applications in Python and TypeScript.

**Components:**
- **Commands:**
  - `/new-sdk-app` - Create and setup a new Claude Agent SDK application

- **Agents:**
  - `agent-sdk-verifier-py` - Verify Python Agent SDK applications follow best practices
  - `agent-sdk-verifier-ts` - Verify TypeScript Agent SDK applications follow best practices

### PR Review Toolkit

**Official Anthropic plugin** with comprehensive PR review capabilities.

Collection of specialized review agents that focus on different aspects of code quality, each providing deep analysis in their domain.

**Agents:**
- `comment-review` - Review and improve code comments and documentation
- `test-review` - Analyze test coverage and quality
- `error-handling-review` - Evaluate error handling patterns and robustness
- `type-design-review` - Review type definitions and type safety
- `code-quality-review` - Assess overall code quality and maintainability
- `code-simplification-review` - Suggest simplifications and refactorings

### Commit Commands

**Official Anthropic plugin** for streamlined git workflows.

Commands for git commit workflows including intelligent commit message generation, push operations, and PR creation.

**Commands:**
- `/commit` - Create a git commit with smart message generation
- `/commit-push-pr` - Commit, push, and open a PR in one command
- `/clean_gone` - Clean up branches marked as [gone]

### Feature Development

**Comprehensive feature development workflow** with specialized agents for the full development lifecycle.

Multi-stage development workflow with agents for exploration, design, implementation, and review.

**Agents:**
- `explore` - Codebase exploration and understanding
- `architect` - Architecture design and planning
- `quality-reviewer` - Code quality and design review

### Security Guidance

**Official Anthropic plugin** for security-aware development.

Security reminder hook that automatically warns about potential security issues when editing files, including command injection, XSS, SQL injection, and other unsafe patterns.

**Features:**
- Automatic security warnings for common vulnerabilities
- Pattern detection for unsafe code practices
- Guidance on secure coding practices
- Post-edit hooks for real-time feedback

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
