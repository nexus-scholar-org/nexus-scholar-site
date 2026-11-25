---
title: Data flow and privacy
description: Every place where data leaves your computer, what is sent, and to whom.
---

Nexus Scholar runs on your computer. Your workspaces are folders on your disk,
the app and its engine run as one process that listens only on this computer
(`127.0.0.1`), and nothing is sent anywhere unless you start one of the actions
below. There is no account, no telemetry, no analytics and no automatic update
check. The app's pages load nothing from the internet: fonts and scripts are
bundled. A browser test checked this until the browser test suite was removed
on 2026-11-23 (1.1.0b7); no automated test checks it now.

This page lists every place where data leaves the machine, what is sent, and to
whom. It was checked against the code on 2026-11-10, for the beta 1.1.0b6. The
rows added for 1.1.0b7 (Explore and Direction, the counts, citation chasing and
the open-access look-up), the contact e-mail and the keys kept by the Settings
screen were checked against the code of 1.1.0b8 on 2026-11-25. The lines on the
MCP assistant tools come from the release notes.

## Importing and screening: nothing

The import path that screening starts from (the Import screen, or
`nexus-scholar accept-corpus` on a file you exported) sends nothing. Screening,
approval, publication and export send nothing.

## Screening with an AI model (optional)

Screening never needs an AI model. If you run **agent proposals**, the engine
sends, for each record in the run, the record's **title, abstract and
publication year** and your protocol's **screening criteria** to the provider
you chose, and stores the model's draft in the workspace. Your decisions,
notes, names and the rest of the workspace are not sent.

| Provider | Where it goes | Key |
| :-- | :-- | :-- |
| Anthropic | `api.anthropic.com`, or the host in `ANTHROPIC_BASE_URL` if you set it | your own, from `nexus-scholar keys set anthropic` |
| OpenAI-compatible | the base URL you type on the Agent proposals screen (it can be a model on your own computer) | your own, if the endpoint needs one |
| Google Gemini | `generativelanguage.googleapis.com` | your own, from `nexus-scholar keys set gemini` |

- Nothing is sent until you tick **consent** for that provider. The consent
  (provider, model, prompt fingerprint, date and the sentence above) is written
  to the workspace and to the audit journal.
- Keys stay in your operating system's keychain, or in your environment. They
  are never written to a workspace, the journal or the browser. Since 1.1.0b8
  the Settings screen also keeps keys in the keychain; where no keychain can be
  used, it asks before it keeps a key in a file only you can read.
- What the provider does with the data is governed by **your** agreement with
  it (for example, whether it keeps or trains on API inputs). Check those terms
  before you consent, especially for unpublished or confidential records.
- A cost ceiling you set stops the run; the estimate comes from a dated price
  table, not from the provider.

## Screening with your own Claude (MCP, optional)

If you connect Claude Desktop or Claude Code to the `scholar-agent` MCP server,
your Claude reads records from the workspace through the server's tools and
submits drafts through it. The record text then goes to Anthropic **through
your Claude app, under your Claude account's terms**, not through Nexus
Scholar. The MCP server itself runs on your computer and holds no key. The
Windows installer of 1.1.0b8 ships the same server as `nexus-scholar-mcp.exe`.

Since 1.1.0b7 the server also has five `nexus_assistant_*` tools that let your
AI client read drafts and workspaces and propose changes. What they
read goes to your AI client's provider in the same way. They have not been
tried with a real AI client.

## Searching and checking the literature (optional)

These run only when you start them, and send **your search terms or the
identifiers of your records** (DOIs, titles), never your decisions:

| Action | Where you start it | Sent to |
| :-- | :-- | :-- |
| Search (a harvest) | Discovery, **Start the harvest**; `nexus-scholar run` | The databases your protocol selects among OpenAlex, Semantic Scholar, Crossref, arXiv and PubMed (NCBI E-utilities); bioRxiv only when the protocol names it |
| Plan (dry run) | Discovery, **Plan** | Nothing: the strings are translated on your computer |
| Recall check | Discovery, **Recall** | The protocol query, to the protocol's databases; then each seed's identifier to Crossref and OpenAlex for a title check |
| Abstract hydration and DOI verification, after a harvest | Part of the same run | Record DOIs (and arXiv ids) to Semantic Scholar, OpenAlex and Crossref |
| Inception: Explore and Direction (a first sample of papers per database) | The Explore and Direction screens (1.1.0b7); the terminal wizard and the MCP tools | Your topic as a keyword query, or the query as you edited it, to the databases you choose; a narrower search sends a direction's label |
| Counts: the query workbench and the size estimate (1.1.0b7) | Inception step 5 and Plan (**Count**); Plan and Harvest (size estimate) | The query, to the databases you count; for the seed check, your known papers' DOIs to OpenAlex (only with `SCHOLAR_OPENALEX_KEY`). Each button says how many requests it sends |
| Citation chasing (1.1.0b7) | Discovery, **Chase**; `nexus-scholar chase run` | Each included study's identifier (its DOI, OpenAlex id or Semantic Scholar id), to OpenAlex first and Semantic Scholar second, to fetch its references and citing papers |
| Open-access look-up and download (1.1.0b7) | Charting, **Look up open-access copies**; `scholar-pdf download` and `ingest` | Your studies' DOIs and your contact e-mail to Unpaywall; the DOIs to OpenAlex only with `SCHOLAR_OPENALEX_KEY`; from Charting, the arXiv id of a study with no DOI to arXiv; then the PDF fetched from a location those services list as open access. Each download request names your contact e-mail in its User-Agent header to the website that holds the PDF (a publisher or a repository) and to any site it redirects to |

With every search request the engine also sends who is asking: your contact
e-mail (`SCHOLAR_MAILTO`) in the User-Agent header to every provider and as
`email` to PubMed. Citation chasing, the look-ups and PDF downloads carry the
same header, so the address also reaches Unpaywall and the websites PDFs are
downloaded from. The engine also sends your OpenAlex key, to OpenAlex only, when set; your Semantic
Scholar key, to Semantic Scholar only, when set. Responses are cached on your
disk under `.cache/` unless `SCHOLAR_HTTP_CACHE` is off.

The citation graph and the verification checks (retraction, open science,
conflicts of interest, risk of bias), which also sent record identifiers, were
removed in 1.1.0b7 and 1.1.0b8.

## Phones (not yet)

Screening from a phone on your local network is a later milestone. When it
arrives it will stay on your network, and this page will say what it serves.

## This website

This site is static. It sets no cookies, runs no analytics and loads no
third-party script or font; everything it shows is served from the same host.
Your choice of light or dark theme is kept in your browser's local storage and
goes nowhere.
