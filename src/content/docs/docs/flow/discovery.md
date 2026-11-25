---
title: "Discovery: the search"
description: Search the free databases with the query the protocol compiles, and record what each database was asked and what came back.
---

Discovery searches the free databases your protocol selects, among
**OpenAlex, Semantic Scholar, Crossref, arXiv and PubMed**, with the query your
protocol compiles, and records what each database was asked and what came back.
Each run writes a PRISMA-S identification record per database.

<p class="ns-beta"><strong>Beta.</strong> The Discovery screens came in 1.1.0b6 and grew in 1.1.0b7. They have not been tried by a second person. One real review was taken through the harvest, import and deduplication; the query workbench and citation chasing were used only on test data. You can still search in the databases themselves and <a href="../../getting-started/#4-import-your-search-results">import their exports</a>.</p>

## Before you start

Two settings are needed before you start the app; see
[Configuration](../../configuration/):

- **`SCHOLAR_MAILTO`**, your contact email. A search refuses to start without
  it (`MAILTO_NOT_SET`).
- **`SCHOLAR_OPENALEX_KEY`**, a free OpenAlex API key. OpenAlex has required a
  key since 2026-02-13. A browser harvest that selects OpenAlex refuses to
  start without it (`OPENALEX_KEY_NOT_SET`). To search without OpenAlex, leave
  it out of the databases.

Since 1.1.0b8 both can also be set on the **Settings** screen; a value in the
environment or a `.env` file still wins.

## The steps

Open **Discovery** in the header. The entry page says where the search stands,
and the steps are:

1. **Plan.** The exact string each database will receive, and what it cannot
   express. Showing the plan sends nothing. You choose and order the databases
   here; the order sets the sample priority only, never which record
   represents a duplicate group. A size estimate gives a count per database
   and a suggested cap. The query workbench opens here too; **Record this amendment**
   needs a one-sentence reason and lists what the amendment makes stale.
2. **Recall** (optional). Give papers you already know are relevant; the check
   says which databases find them. It never changes the query and never swaps a
   record. Each check is saved in the workspace.
3. **Harvest.** **Start the harvest**. Each database appears as it finishes,
   with the total it reported and how many records it returned. A database that
   stops at the cap reads "at least N". You can set a cap for this run and add a
   note; both are recorded. Cancelling keeps what was fetched and archives the
   run as partial; nothing is built from it. Harvest says when the preparation
   after the search is unfinished, failed or stopped, also after a restart;
   **Finish preparing this corpus** completes it from the saved records without
   searching again.
4. **Import.** The same import screen as for exported files. Since 1.1.0b7 a
   harvest and staged RIS or `.nbib` exports are deduplicated together into one
   corpus, in any order. Imported records are not checked against Crossref or
   OpenAlex and their missing abstracts are not filled in; the Hand-off and the
   methods text say so.
5. **Duplicates.** How many records were merged, by rule (identifier, exact
   title, close title). Pair-by-pair review is not built.
6. **Report.** The PRISMA-S identification per database and a methods paragraph
   you mark as reviewed.
7. **Hand-off.** **Accept this corpus** freezes it, and screening starts from it.
   The accept refuses an unfinished preparation.
8. **Chase** (after the screening is published). Fetches the references and
   the citing papers of your included studies (OpenAlex first, Semantic Scholar
   second), keeps only what is new to the corpus, and sends it to a second
   screening round. The PRISMA report gains a "citation searching" arm. One
   level per run. No live chase has been run yet.

A harvest does not freeze anything by itself; only the hand-off accept does.

## What is recorded

For every database, the run records the query it ran, the total the database
reported, how many records it returned, the cap and whether the cap was hit.
Record ids do not depend on input order. A DOI that matches a different title
is flagged, never swapped. Each merge during deduplication keeps the rule it
was made by.

## Known gaps in the search

- **Default databases.** Since 1.1.0b7 the default is OpenAlex, Semantic
  Scholar, Crossref and arXiv. PubMed is off by default and still selectable;
  a protocol that names its databases runs exactly those. Crossref is not
  ticked for a query that joins two or more concepts, and Plan warns while it
  is.
- **Not built:** pair-by-pair review of near-duplicates, and a per-database
  stop.

## From the terminal

```bash
nexus-scholar run --workspace "<workspace folder>"
```

The terminal run searches, deduplicates, builds the corpus snapshot and accepts
it at the end, so screening is reachable from a fresh run. Citation chasing
runs from the terminal with `nexus-scholar chase run|status|accept`. What the
search sends, and to whom, is in [Data flow and privacy](../../data-flow/).
