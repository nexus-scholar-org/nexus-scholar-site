---
title: "Inception: the protocol"
description: Write the review's question, scope and screening criteria in the browser before any search or screening starts.
---

A systematic review starts with a protocol: the question, the scope, and the
inclusion and exclusion criteria that every record will be screened against.
In Nexus Scholar the protocol is written first, and the workspace is created
from it. Screening is bound to the protocol's fingerprint, so a protocol change
is visible in every later step.

## Write the protocol in the app

On **Workspaces**, click **New review**. It opens your drafts; start a new one
or resume one. The steps are:

1. **Scope.** What the review is about: the topic, the years and the languages.
2. **Shape.** The lens (paradigm) and playbook, the unit of analysis, what proof
   a reviewer would accept, what is out of scope, and the research questions.
   The lens the engine leans to and its draft question are shown as drafts;
   nothing is used until you choose it.
3. **Concepts and criteria.** The concepts the search uses and the screening
   criteria, each shown word for word with where it came from. A criterion the
   engine wrote needs your **Accept**; one you typed is accepted by default. A
   rejected criterion is not used.
4. **Review and create.** Nothing is written until you press **Create the
   workspace**. If the folder already holds a workspace, the screen offers to
   replace it and keep a backup; if it has screening decisions, you type the
   workspace's name to confirm.
5. **Done.** The folder and the protocol's fingerprint, and a link to open the
   workspace.

Every save is checked against the draft's last update, so a second tab cannot
overwrite your work without telling you. The screens are in English, French
and Arabic.

## What is not built yet

The step bar also shows **Explore** and **Direction**: a grounded search of a
first pool of papers, from which the engine names schools and topics and
proposes up to three directions for the review. These two steps have no screen
yet. The terminal wizard (`nexus-scholar inception`) and the MCP tools still
have them. See [Known limits](../../known-limits/).

## From the terminal

The same protocol can be written with the guided interview in the terminal:

```bash
nexus-scholar init "Your review title" --dir "<your workspaces folder>/<review-name>"
```

The folder you give becomes the workspace, so give a new folder inside your
workspaces folder, then open it in the app. Add `--scaffold-only` to create a
starting workspace with a placeholder protocol instead of the interview.

## What the workspace holds

A workspace is one folder. After inception it contains `protocol.json`,
`intent.json` and `SCREENING_CRITERIA.md` (the protocol and its criteria),
`project.json` and `INDEX.md` (the workspace's state), and
`audit/journal.jsonl`, the append-only journal that records every later step.
Re-running inception on a folder that already holds a workspace is refused
unless you ask to replace it; the old protocol files are then backed up under
`audit/replaced/`, and the journal names the old fingerprint.
