---
title: "Discovery: the search"
description: Search the free databases with the query the protocol compiles, and record what each database was asked and what came back.
---

Discovery searches the free databases your protocol selects, among
**OpenAlex, Semantic Scholar, Crossref, arXiv and PubMed**, with the query your
protocol compiles, and records what each database was asked and what came back.
Each run writes a PRISMA-S identification record per database.

<p class="ns-beta"><strong>Not in 1.1.0b5.</strong> The Discovery screens are on the development branch and come with the next beta. In 1.1.0b5 the same search runs from the terminal with <code>nexus-scholar run</code>, or you search in the databases themselves and <a href="../../getting-started/#4-import-your-search-results">import their exports</a>.</p>

## Before you start

Two settings are needed before you start the app; see
[Configuration](../../configuration/):

- **`SCHOLAR_MAILTO`**, your contact email. A search refuses to start without
  it (`MAILTO_NOT_SET`).
- **`SCHOLAR_OPENALEX_KEY`**, a free OpenAlex API key. OpenAlex has required a
  key since 2026-02-13. Without it, OpenAlex shares a small daily budget with
  everyone on your network address, and paging past the first page is refused.

## The steps

Open **Discovery** in the header. The entry page says where the search stands,
and the steps are:

1. **Plan.** The exact string each database will receive, and what it cannot
   express. This is a dry run: nothing is sent.
2. **Recall** (optional). Give papers you already know are relevant; the check
   says which databases find them. It never changes the query and never swaps a
   record. Each check is saved in the workspace.
3. **Harvest.** **Start the harvest**. Each database appears as it finishes,
   with the total it reported and how many records it returned. A database that
   stops at the cap reads "at least N". You can set a cap for this run and add a
   note; both are recorded. Cancelling keeps what was fetched and archives the
   run as partial; nothing is built from it.
4. **Import.** The same import screen as for exported files. For now a corpus is
   either a harvest or imported exports, not both: add exports before the first
   harvest, or harvest and skip this step.
5. **Duplicates.** How many records were merged, by rule (identifier, exact
   title, close title). Pair-by-pair review is not built.
6. **Report.** The PRISMA-S identification per database and a methods paragraph
   you mark as reviewed.
7. **Hand-off.** **Accept this corpus** freezes it, and screening starts from it.

A harvest does not freeze anything by itself; only the hand-off accept does.

## What is recorded

For every database, the run records the query it ran, the total the database
reported, how many records it returned, the cap and whether the cap was hit.
Record ids do not depend on input order. A DOI that matches a different title
is flagged, never swapped. Each merge during deduplication keeps the rule it
was made by.

## From the terminal

```bash
nexus-scholar run --workspace "<workspace folder>"
```

The terminal run searches, deduplicates, builds the corpus snapshot and accepts
it at the end, so screening is reachable from a fresh run. What the search
sends, and to whom, is in [Data flow and privacy](../../data-flow/).
