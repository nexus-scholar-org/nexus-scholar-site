---
title: Configuration
description: The environment variables Nexus Scholar reads, which ones a search needs, and where keys are kept.
---

Screening needs no configuration. A search of the free databases, and the
optional AI drafts, read the settings below.

## Environment variables

| Variable | Purpose |
| :-- | :-- |
| `SCHOLAR_MAILTO` | Your contact email, sent in the User-Agent header to every database you search, and as `email` to PubMed (NCBI). OpenAlex no longer reads it. **Required for a live search**: without it a terminal run, a browser harvest and a recall check refuse with `MAILTO_NOT_SET`. The open-access look-up sends it to Unpaywall and refuses without it, and each PDF download sends it, in the same header, to the website that holds the PDF. |
| `SCHOLAR_OPENALEX_KEY` | A free OpenAlex API key. **OpenAlex has required a key since 2026-02-13.** A browser harvest that includes OpenAlex refuses with `OPENALEX_KEY_NOT_SET` until it is set. Without it, a terminal `run` still sends OpenAlex keyless requests, which share a small daily budget with everyone on your network address; paging past the first page is refused, and the OpenAlex leg then fails. The open-access look-up asks OpenAlex only with this key. |
| `SCHOLAR_S2_KEY` | A Semantic Scholar API key (optional; without it the shared public pool is used). |
| `NEXUS_WORKSPACES_ROOT` | The folder holding your workspaces for `nexus-scholar ui` (else `Documents/Nexus Scholar/workspaces`). |
| `NEXUS_CONSOLE_TOKEN` | The per-launch token of `nexus-scholar serve` (it prints one if unset). |
| `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `OPENAI_API_KEY` | Provider keys for the optional AI drafts, if you keep them in the environment rather than in the keychain. |
| `NEXUS_RECON_ROOT` | Where the inception reconnaissance cache lives (default `.cache/inception_recon` in the repository checkout). |
| `NEXUS_MCP_CONFIG_HOME` | Where `setup-mcp` writes configuration files. |

## Where to set them

Since 1.1.0b8 the **Settings** screen (linked from every screen's header and
from Workspaces) holds your contact e-mail, the OpenAlex and Semantic Scholar
keys, three optional AI keys, and the folder where your reviews are kept. On
the Windows installer's first start, **Set up Nexus Scholar** asks for the same;
nothing there is needed to open a review, and a search needs the e-mail.

A value set in the environment or in a `.env` file still wins over the screen,
and the screen says where the value comes from. Set them in the terminal before
`nexus-scholar ui`, or put them in a `.env` file in the folder you start the
app from (for the start without a terminal, in the settings folder,
`%APPDATA%\Nexus Scholar` on Windows):

```text
SCHOLAR_MAILTO=you@university.edu
SCHOLAR_OPENALEX_KEY=...
```

`nexus-scholar init` creates a `.env.example` in the workspace; `doctor` and
`setup-mcp` read `<workspace>/.env` by default.

## Keys for the AI drafts

Provider keys for the optional drafts are stored on the Settings screen or with
the `keys` command, for example `nexus-scholar keys set anthropic`. They stay
in your operating system's keychain, or in your environment if you put them
there. A key in an environment variable is used before one in the keychain;
`nexus-scholar keys status` says which one is in use. The keychain needs the
`ai` extra on a `uv` or `pip` install
(`uv tool install --force "nexus-scholar[ai]>=1.1.0b8"`); the Windows
installer includes it. Without it, or where no keychain can be used, the
Settings screen asks before it keeps a key in a file only you can read. Keys
are never written to a workspace, the journal or the browser.
`setup-mcp` never copies key values into an MCP configuration: it points the
server command at an env file, and the server loads the keys from it when it
starts.

## Health check

```bash
nexus-scholar doctor --workspace <workspace folder> --exit-code
```

`doctor` reports setup issues, including missing settings for the steps you
have enabled.
