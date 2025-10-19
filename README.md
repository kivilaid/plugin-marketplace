# Claude Code Plugin Marketplace

A comprehensive Claude Code plugin marketplace with **87 plugins** from 10+ sources, featuring official Anthropic tools, specialized agents, community skills, and workflow automation.

## Quick Stats

- **87 Total Plugins** across development, testing, DevOps, security, data/AI, and more
- **103 Plugin Directories** with commands, agents, hooks, and MCP servers
- **10+ Sources** including Anthropic, wshobson, davila7, obra, and community contributors
- **100+ Specialized Agents** for code review, testing, deployment, security, and documentation
- **44 Custom Tools** extending Claude with domain-specific capabilities

## Plugin Categories

| Category | Count | Key Features |
|----------|-------|--------------|
| **Official Anthropic** | 5 | Agent SDK, PR review, commits, feature dev, security |
| **wshobson Agents** | 64 | Development, testing, DevOps, data/AI, security, docs |
| **davila7 Toolkits** | 10 | Git, Supabase, Next.js, testing, security, AI/ML, DevOps |
| **Community Skills** | 8 | Workflows, productivity, media processing, organization |

## What's Inside

### Development & Testing
- Full-stack development (backend, frontend, mobile, API design)
- TDD workflows, unit testing, E2E automation
- Code review, refactoring, debugging
- Framework migration and modernization

### DevOps & Infrastructure
- CI/CD automation (GitHub Actions, GitLab CI)
- Cloud infrastructure (AWS, Azure, GCP)
- Kubernetes operations and GitOps
- Deployment strategies and monitoring

### Data & AI/ML
- Data engineering and ETL pipelines
- Machine learning operations (MLOps)
- LLM application development
- Quantitative trading and analytics

### Security & Compliance
- SAST analysis and vulnerability scanning
- SOC2, HIPAA, GDPR compliance
- API security and penetration testing
- Security auditing and incident response

### Documentation & Content
- API documentation generation
- Technical writing and tutorials
- SEO optimization and content marketing
- Mermaid diagrams and OpenAPI specs

### Specialized
- Blockchain/Web3 development
- Game development (Unity, Minecraft)
- Payment processing (Stripe, PayPal)
- Accessibility compliance (WCAG)

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

### 1. Add Marketplace

```bash
# Add from GitHub
/plugin marketplace add kivilaid/plugin-marketplace

# Or add locally for development
/plugin marketplace add /path/to/plugin-marketplace
```

### 2. Install Plugins by Use Case

#### Essential Development Tools
```bash
# Official Anthropic plugins
/plugin install commit-commands@ando-marketplace      # Git workflows
/plugin install pr-review-toolkit@ando-marketplace    # PR reviews
/plugin install feature-dev@ando-marketplace          # Feature development
/plugin install security-guidance@ando-marketplace    # Security warnings
```

#### Full-Stack Development
```bash
# davila7 comprehensive toolkits
/plugin install git-workflow@ando-marketplace         # Git automation
/plugin install nextjs-vercel-pro@ando-marketplace    # Next.js + Vercel
/plugin install testing-suite@ando-marketplace        # Testing automation
/plugin install devops-automation@ando-marketplace    # CI/CD + Docker + K8s
```

#### Data & Database
```bash
/plugin install supabase-toolkit@ando-marketplace     # Supabase workflows
/plugin install ai-ml-toolkit@ando-marketplace        # AI/ML development
```

#### Productivity & Documentation
```bash
/plugin install document-skills@ando-marketplace      # Excel, Word, PDF, PPT
/plugin install documentation-generator@ando-marketplace  # API docs + guides
```

#### Browse All Plugins
See the [Complete Plugin List](#available-plugins) below for all 87 plugins organized by category.

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

### Development Workflow Skills

**Professional development workflow skills** from obra/superpowers repository.

Collection of battle-tested development practices for TDD, git workflows, debugging, brainstorming, and root cause analysis.

**Skills:**
- **test-driven-development** - Rigorous TDD methodology with the iron law: write the test first, watch it fail, write minimal code to pass
- **using-git-worktrees** - Advanced git worktree usage for managing multiple branches simultaneously
- **finishing-a-development-branch** - Comprehensive checklist and workflow for completing development branches
- **root-cause-tracing** - Systematic methodology for tracing bugs and issues to their root causes
- **brainstorming** - Structured brainstorming techniques for problem-solving and idea generation
- **systematic-debugging** - Methodical debugging approaches with strategies for isolating and fixing issues

### Content & Productivity Skills

**Content creation and productivity tools** from michalparkola/tapestry-skills and ComposioHQ/awesome-claude-skills.

Skills for content extraction, research, writing, and workflow optimization.

**Skills:**
- **article-extractor** - Extract and summarize articles from web URLs with structured output
- **youtube-transcript** - Download and process YouTube video transcripts for analysis
- **content-research-writer** - Research-driven content writing with source verification and citations
- **tapestry** - Workflow optimization and task management methodology
- **ship-learn-next** - Iterative development workflow: ship quickly, learn from feedback, iterate

### Media & Data Processing Tools

**Media and data analysis tools** from ComposioHQ/awesome-claude-skills and coffeefuelbump.

Tools for video processing, image enhancement, CSV analysis, and meeting insights.

**Skills:**
- **video-downloader** - Download videos from various platforms with format options
- **image-enhancer** - Enhance image quality with AI-powered improvements
- **csv-data-summarizer** - Analyze and summarize CSV data with statistical insights
- **meeting-insights-analyzer** - Extract key insights and action items from meeting transcripts

### Organization Tools

**Organization and automation tools** from ComposioHQ/awesome-claude-skills.

Tools for file management and invoice processing automation.

**Skills:**
- **file-organizer** - Automatically organize files based on type, date, and content
- **invoice-organizer** - Process and organize invoices with data extraction

### Engineering Workflow Tools

**Engineering workflow automation** from mhattingpete/claude-skills-marketplace.

Tools for git operations, code review implementation, and test fixing.

**Skills:**
- **git-pushing** - Automated git push workflows with validation and checks
- **review-implementing** - Implement code review feedback systematically
- **test-fixing** - Debug and fix failing tests with systematic approaches

### wshobson Specialized Agents (64 plugins)

**Production-ready workflow orchestration** from wshobson/agents with 64 focused plugins, 87 specialized agents, and 44 tools.

Comprehensive collection covering every aspect of modern software development, from API development to game programming.

**Categories include:**
- **Development**: API scaffolding, backend development, frontend/mobile, full-stack orchestration, web scripting
- **Testing & Quality**: Unit testing, TDD workflows, performance testing, code review, comprehensive review
- **DevOps & Infrastructure**: CI/CD automation, cloud infrastructure, Kubernetes operations, deployment strategies
- **Data & AI**: Data engineering, machine learning ops, LLM application development, quantitative trading
- **Security**: Backend API security, security compliance, security scanning, incident response
- **Documentation**: Code documentation, documentation generation, technical writing
- **Debugging**: Debugging toolkit, error debugging, distributed debugging, error diagnostics
- **Specialized**: Blockchain/Web3, game development, ARM Cortex microcontrollers, payment processing, SEO optimization

### davila7 Comprehensive Toolkits (10 plugins)

**Ready-to-use templates** from davila7/claude-code-templates organized by workflow with commands, agents, and MCP integrations.

Professional-grade toolkits for modern development stacks.

**Toolkits:**

1. **git-workflow** - Git workflow automation with feature, release, and hotfix commands plus git flow manager agent
2. **supabase-toolkit** - Complete Supabase workflow with backup management, data exploration, migration assistance, performance optimization, and data engineering agents
3. **nextjs-vercel-pro** - Next.js and Vercel development toolkit with scaffolding, component generation, API testing, performance audits, and deployment optimization
4. **testing-suite** - Comprehensive testing with E2E setup, test generation, coverage analysis, visual testing, load testing, and QA automation engineers
5. **security-pro** - Enterprise security with auditing, vulnerability scanning, dependency audits, and specialized security agents (auditor, penetration tester, compliance specialist, incident responder)
6. **ai-ml-toolkit** - AI and Machine Learning development suite with specialized agents (AI engineer, ML engineer, NLP engineer, computer vision engineer, MLOps engineer)
7. **devops-automation** - DevOps suite with CI/CD pipeline setup, Docker Compose, Kubernetes deployment, monitoring, and infrastructure agents
8. **documentation-generator** - Automated documentation with API docs, Docusaurus setup, user guides, changelogs, and technical writing agents
9. **performance-optimizer** - Performance optimization with bundle analysis, caching, image optimization, lazy loading, and performance engineering agents
10. **project-management-suite** - Project management with sprint planning, roadmaps, task breakdowns, estimates, standups, retrospectives, and product strategist agents

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
