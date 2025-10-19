# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a **plugin marketplace** for Claude Code, not a traditional codebase. It contains:

### Statistics
- **87 Total Plugins** in `.claude-plugin/marketplace.json`
- **103 Plugin Directories** in `plugins/` containing commands, agents, hooks, MCP servers, and skills
- **100+ Specialized Agents** for code review, testing, deployment, security, and documentation
- **44 Custom Tools** extending Claude with domain-specific capabilities
- **10+ Sources** from Anthropic, community contributors, and open-source repositories

### Plugin Breakdown by Source

1. **Official Anthropic Plugins (5)** from anthropics/claude-code:
   - agent-sdk-dev, pr-review-toolkit, commit-commands, feature-dev, security-guidance

2. **wshobson Specialized Agents (64)** from wshobson/agents:
   - Comprehensive coverage of development, testing, DevOps, data/AI, security, documentation, and specialized workflows
   - 87 specialized agents and 44 custom tools
   - Categories: Development, Testing, DevOps, Data/AI, Security, Documentation, Operations, Performance, Languages

3. **davila7 Comprehensive Toolkits (10)** from davila7/claude-code-templates:
   - git-workflow, supabase-toolkit, nextjs-vercel-pro, testing-suite, security-pro
   - ai-ml-toolkit, devops-automation, documentation-generator, performance-optimizer, project-management-suite

4. **Community Skills (8 collections)**:
   - **Document Skills (1)**: xlsx, docx, pptx, pdf from Anthropic's skills repository
   - **Example Skills (1)**: Creative, development, and enterprise capabilities
   - **Development Workflow (1)** from obra/superpowers: TDD, git worktrees, branch completion, root cause tracing, brainstorming, systematic debugging (6 skills)
   - **Content & Productivity (1)** from michalparkola/ComposioHQ: Article extraction, YouTube transcripts, research writing, workflow optimization (5 skills)
   - **Media & Data Processing (1)** from ComposioHQ/coffeefuelbump: Video download, image enhancement, CSV analysis, meeting insights (4 skills)
   - **Organization Tools (1)** from ComposioHQ: File management, invoice processing (2 skills)
   - **Engineering Workflows (1)** from mhattingpete: Git operations, code review implementation, test fixing (3 skills)

### Infrastructure Components
- GitHub Actions workflow using Claude Code Action in `.github/workflows/claude.yml`
- MCP server configuration in `.mcp.json` (auto-detected by Claude Code Action)
  - context7: Documentation retrieval
  - playwright: Browser automation

## Architecture

### Marketplace Structure

```
.claude-plugin/marketplace.json   # Catalog of available plugins
plugins/                          # Plugin implementations
  {plugin-name}/
    plugin.json                   # Plugin manifest
    commands/*.md                 # Slash command definitions
    agents/*.md                   # Agent system prompts
    hooks/hooks.json              # Event hook configuration
    hooks/*.sh                    # Hook executables
    mcp-servers/*.js              # MCP server implementations
.mcp.json                         # MCP server config (for CI/CD)
.github/workflows/claude.yml      # Claude Code Action workflow
```

### Skills vs Plugins

This marketplace contains both **plugins** and **skills**:

- **Plugins**: Traditional Claude Code plugins with commands, agents, hooks, and MCP servers (e.g., `example-full-featured`)
- **Skills**: Specialized instruction sets with YAML frontmatter in `SKILL.md` files (e.g., `document-skills`, `example-skills`)

Skills are simpler than full plugins - they're folders containing a `SKILL.md` file with YAML frontmatter and instructions. Claude loads them dynamically to improve performance on specialized tasks.

**Key Difference:**
- Plugins can have commands, agents, hooks, and MCP servers
- Skills are instruction-only (no executable components)
- Skills use `SKILL.md` with frontmatter; plugins use `plugin.json`

### Plugin System Components

1. **Commands** (`commands/*.md`): Markdown files containing instructions for slash commands
   - Front matter defines `allowed-tools` and `description`
   - Body contains instructions and can use `!`git command`` for dynamic context
   - Commands appear as `/command-name` in Claude Code

2. **Agents** (`agents/*.md`): Specialized agent system prompts
   - Markdown files with system prompt instructions
   - Invoked via Task tool with subagent_type matching filename
   - Examples: code-reviewer, test-generator

3. **Hooks** (`hooks/hooks.json`): Event-driven automation
   - `PostToolUse` hooks trigger after tool usage (e.g., Write, Edit)
   - Can execute shell scripts with `${CLAUDE_PLUGIN_ROOT}` variable
   - Example: validate.sh runs syntax checks after file changes

4. **MCP Servers** (`mcp-servers/*.js`): Model Context Protocol servers
   - Node.js executables implementing MCP protocol
   - Extend Claude with custom tools
   - Environment variables configured in plugin.json

### MCP Configuration

The `.mcp.json` file configures remote MCP servers for CI/CD:

- **context7**: Documentation retrieval server at `https://mcp.context7.com/mcp`
- **playwright**: Browser automation server at `https://playwright-mcp.ando-kivilaid.workers.dev/mcp`

MCP tools must be explicitly allowed in workflow `claude_args`:
```yaml
--allowedTools mcp__context7__resolve-library-id mcp__context7__get-library-docs mcp__playwright__*
```

## Development Workflow

### Testing Plugins Locally

```bash
# Add marketplace to Claude Code
/plugin marketplace add /Users/ando/github/plugin-marketplace

# Install plugin from local marketplace
/plugin install example-full-featured@ando-marketplace

# Test slash commands
/commit
/commit-push-pr
/clean_gone

# Uninstall for testing changes
/plugin uninstall example-full-featured
```

### Validating Plugin Structure

No automated validation tools currently exist. Manual validation:
1. Ensure `plugin.json` has required fields: name, version, description
2. Verify commands/agents are valid markdown with proper front matter
3. Test hooks execute without errors
4. Confirm MCP servers implement protocol correctly

### GitHub Actions Workflow

The `.github/workflows/claude.yml` workflow:
- Triggers on `@AndoAI` mentions in issues/PRs/comments
- Runs Claude Code Action with OAuth token
- Auto-detects `.mcp.json` for MCP server configuration
- Allows specific MCP tools via `--allowedTools` in `claude_args`
- Uses custom bot name "AndoAI" instead of default "claude[bot]"

## Key Implementation Details

### Environment Variables in Plugins

- `${CLAUDE_PLUGIN_ROOT}`: Absolute path to the plugin directory
- Custom env vars defined in `plugin.json` → `mcpServers` → `env`

### Command Front Matter Syntax

Commands use YAML front matter with special fields:
```markdown
---
allowed-tools: Bash(git add:*), Bash(git status:*)
description: Brief description
---
```

### Dynamic Context in Commands

Use `!`command`` syntax to inject command output into prompts:
```markdown
- Current git status: !`git status`
- Recent commits: !`git log --oneline -10`
```

### Hook Matchers

Hooks use regex-style matchers for tool names:
- `"Write|Edit"` matches Write OR Edit tools
- Supports `{{file_path}}` template variable for hook arguments

## Common Tasks

### Adding a New Plugin

1. Create directory: `plugins/{plugin-name}/`
2. Create `plugin.json` manifest
3. Add plugin entry to `.claude-plugin/marketplace.json`
4. Add components (commands/agents/hooks/mcp-servers) as needed
5. Test locally before committing

### Modifying MCP Configuration

1. Edit `.mcp.json` to add/modify servers
2. Update workflow `claude_args` to allow new MCP tools
3. Test in CI/CD by triggering workflow with `@AndoAI`

### Updating Workflow Permissions

The workflow requires specific GitHub permissions:
- `contents: write` - For creating commits/branches
- `pull-requests: write` - For PR operations
- `issues: write` - For issue comments
- `id-token: write` - For OIDC authentication
- `actions: read` - For reading CI results

## Important Constraints

- Plugin names must be unique within marketplace
- MCP server names in `.mcp.json` must match tool prefixes (`mcp__{name}__tool`)
- Hooks cannot modify Claude's response, only validate/notify
- Commands should avoid complex logic - delegate to tools/agents
- Slash commands cannot have spaces in their names
