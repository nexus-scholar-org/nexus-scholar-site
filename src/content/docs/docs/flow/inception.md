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
2. **Explore** (since 1.1.0b7). Searches a first sample of papers per database
   you choose, with a keyword query derived from your topic without AI, shown
   per database and editable. A database that returned nothing says "0
   results". Synonyms from the sample are accepted one by one; papers you
   anchor become recall seeds.
3. **Direction** (since 1.1.0b7). Offers directions drawn from phrases in at
   least two papers of that sample.
4. **Shape.** The lens (paradigm) and playbook, the unit of analysis, what proof
   a reviewer would accept, what is out of scope, the research questions and
   the planned number of records. The lens the engine leans to and its draft
   question are shown as drafts; nothing is used until you choose it.
5. **Concepts and criteria.** The concepts the search uses and the screening
   criteria, each shown word for word with where it came from. A criterion the
   engine wrote needs your **Accept**; one you typed is accepted by default. A
   rejected criterion is not used. Since 1.1.0b7 this step also holds:
   - the **query workbench**: **Count** shows, per database, the exact string
     sent, its total and the count with each concept dropped; a seed check
     says whether your known papers can test the query. Every button says how
     many requests it sends; nothing is counted while you type;
   - **how you will screen:** when to see the agent's draft, and what a draft
     does when the abstract does not report a criterion. No choice is
     preselected, and Review and Create refuse until you choose. Five wording
     checks flag criteria that mirror or contradict each other, hold several
     tests or need the full text.
6. **Review and create.** Nothing is written until you press **Create the
   workspace**. If the folder already holds a workspace, the screen offers to
   replace it and keep a backup; if it has screening decisions, you type the
   workspace's name to confirm.
7. **Done.** The folder and the protocol's fingerprint, and a link to open the
   workspace.

Every save is checked against the draft's last update, so a second tab cannot
overwrite your work without telling you. The screens are in English, French
and Arabic; the French and Arabic wording of the screens added in 1.1.0b7 was
not read by a speaker.

Explore and Direction send your topic to the databases, so they need
`SCHOLAR_MAILTO` (and, for OpenAlex, `SCHOLAR_OPENALEX_KEY`); see
[Configuration](../../configuration/).

Since 1.1.0b7 a Checks panel runs about 50 fixed checks (no AI) on Inception and
Discovery, and suggestions wait for you to Apply, Edit or Reject them. You can also
**Start from an existing review**, from a workspace's protocol or a protocol
file. These steps were used on one real review; the query workbench only on
test data. See [Known limits](../../known-limits/).

## From the terminal

The same protocol can be written with the guided interview in the terminal:

```bash
nexus-scholar init "Your review title" --dir "<your workspaces folder>/<review-name>"
```

The folder you give becomes the workspace, so give a new folder inside your
workspaces folder, then open it in the app. Add `--scaffold-only` to create a
starting workspace with a placeholder protocol instead of the interview. Since
1.1.0b7 the not-reported rule has no default for a new review: `init` and
`inception` take `--not-reported unclear|decisive_first|exclude`, and a
scripted interview without it is refused.

## What the workspace holds

A workspace is one folder. After inception it contains `protocol.json`,
`intent.json` and `SCREENING_CRITERIA.md` (the protocol and its criteria),
`project.json` and `INDEX.md` (the workspace's state), and
`audit/journal.jsonl`, the append-only journal that records every later step.
Re-running inception on a folder that already holds a workspace is refused
unless you ask to replace it; the old protocol files are then backed up under
`audit/replaced/`, and the journal names the old fingerprint.
