---
title: Configuration
description: The environment variables Nexus Scholar reads, which ones a search needs, and where keys are kept.
---

Screening needs no configuration. A search of the free databases, and the
optional AI drafts, read the settings below.

## Environment variables

| Variable | Purpose |
| :-- | :-- |
| `SCHOLAR_MAILTO` | Your contact email, sent to Crossref (in the User-Agent) and NCBI, and still sent to OpenAlex, which no longer uses it. **Required for a live search**: without it a terminal run, a browser harvest and a recall check refuse with `MAILTO_NOT_SET`. |
| `SCHOLAR_OPENALEX_KEY` | A free OpenAlex API key. **OpenAlex has required a key since 2026-02-13.** Without it, OpenAlex requests share a small daily budget with everyone on your network address, and OpenAlex documents that paging past the first page is refused. The app does not yet refuse a run without it. |
| `SCHOLAR_S2_KEY` | A Semantic Scholar API key (optional; without it the shared public pool is used). |
| `NEXUS_WORKSPACES_ROOT` | The folder holding your workspaces for `nexus-scholar ui` (else `Documents/Nexus Scholar/workspaces`). |
| `NEXUS_CONSOLE_TOKEN` | The per-launch token of `nexus-scholar serve` (it prints one if unset). |
| `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `OPENAI_API_KEY` | Provider keys for the optional AI drafts, if you keep them in the environment rather than in the keychain. |
| `NEXUS_RECON_ROOT` | Where the inception reconnaissance cache lives (default `.cache/inception_recon` in the repository checkout). |
| `NEXUS_MCP_CONFIG_HOME` | Where `setup-mcp` writes configuration files. |

## Where to set them

Set them in the terminal before `nexus-scholar ui`, or put them in a `.env`
file in the folder you start the app from:

```text
SCHOLAR_MAILTO=you@university.edu
SCHOLAR_OPENALEX_KEY=...
```

`nexus-scholar init` creates a `.env.example` in the workspace; `doctor` and
`setup-mcp` read `<workspace>/.env` by default.

## Keys for the AI drafts

Provider keys for the optional drafts are stored with the `keys` command, for
example `nexus-scholar keys set anthropic`. They stay in your operating
system's keychain, or in your environment if you put them there. They are never
written to a workspace, a configuration file, the journal or the browser.
`setup-mcp` never copies key values into an MCP configuration: it points the
server command at an env file, and the server loads the keys from it when it
starts.

## Health check

```bash
nexus-scholar doctor --workspace <workspace folder> --exit-code
```

`doctor` reports setup issues, including missing settings for the steps you
have enabled.
