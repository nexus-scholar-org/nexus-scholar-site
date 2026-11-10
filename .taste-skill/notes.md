# Notes: Nexus Scholar site

## Inventory (what belongs to this subject and no competitor)
1. The workspace is a folder on disk: protocol.json, literature/, audit/journal.jsonl (append-only).
2. Every event has an id and a sha256 fingerprint (protocol fingerprint, batch sha256, generation fingerprint).
3. The brand line: "Every number has a source." Anchor ochre reserved for provenance.
4. The decision is derived by plain code from criterion answers: exclude when one criterion fails (its code is the reason), include when every inclusion criterion is yes, unclear otherwise (not reported goes to full text).
5. The approval code shown in the terminal where the app runs; the approver is a typed name.
6. The golden run, 2026-11-06: 30 records identified, 0 duplicates, 30 screened, 16 excluded, 8 included, 6 unclear; journal of 120 events ending in SCREENING_PUBLISH_COMPLETED.
7. Five free databases: OpenAlex (key required since 2026-02-13), Semantic Scholar, Crossref, arXiv, PubMed. A PRISMA-S record per run. "at least N" when a cap is hit.
8. Refusal codes in capitals: MAILTO_NOT_SET, SOURCE_NOT_RIS, VERIFIED_EXISTS, APPROVAL_CONTENT_CHANGED.
9. Beta 1.1.0b5, one reviewer, title and abstract only, RIS and .nbib only. MIT. PyPI package nexus-scholar.
10. Nothing leaves the machine unless the researcher starts a search or an AI run; the app listens on 127.0.0.1 only; no account, no telemetry.
11. The methods paragraph is written from the workspace files; "check every number before you use it".
12. Printed things of its world: the PRISMA flow diagram, the RIS export, the methods section.

## Argument (claims and proof)
1. A systematic review tool whose workspace is a folder on your computer.       -> hero: a working triage record that mints a journal event in front of you
2. Three phases, each with a real screen: write the protocol, search, screen.    -> one real screenshot per phase (how-it-works, call and response)
3. Every number has a source: the audit journal of a real run.                   -> the journal table, real events from the golden run (proof)
4. What it is not, and what leaves your computer.                                -> the honesty list (list)
5. Install it, it is a beta.                                                     -> the Workspaces screen already open, the two commands (cta)
6. Docs, GitHub, PyPI, MIT, data sources.                                        -> footer tiles

## Idea
On this page, the workspace's own audit journal (the event the engine writes for each decision, with its fingerprint) becomes the hero fragment: you screen one real record from the golden run, and the page appends the event line it would write.
Competitor test: Rayyan or Covidence could show a screening card; neither has a journal line with an event id and a protocol fingerprint on your own disk. Passes.

## The live thing
The hero triage fragment: answer the real criteria of the golden protocol with 1 / 2 / 3 keys or clicks; the decision is derived by the same rule table as the product (exclude on the first failed criterion with its code; include when every inclusion criterion is yes; unclear otherwise), and a journal line appears with method HUMAN, the decision, the reason code, and the sha256 of the criteria text on the page computed in the browser (SubtleCrypto). Plain fallback: the criteria list and a sample event line are in the HTML.

## Direction
product-performs, seed 458691617. Redraws: proof -> proof-recognition-table (no logos exist; the proof is the real journal, which is a table); cta -> cta-first-step-already-open (no email form; the first step is the Workspaces screen and the install command). App style: not dealt; the fragments mirror the product's real interface (brand book, apps/research-ui).
Hero: dark field in the brand's ink, split by tone; navigation kept (Docs, GitHub, PyPI), against the blueprint, because the site has a docs section the page must reach.

## Copy deck
Nav: Nexus Scholar | Docs · GitHub · PyPI · [theme]
H1: Screen your review on your own computer.   (38 chars; phone break after "review")
Support: Nexus Scholar is a free systematic-review tool. Your workspace is a folder on your disk, every decision is a line in its audit journal, and nothing is sent anywhere unless you start a search or an AI run.
Primary: Install the beta  (links to #install)  Secondary: Read the docs
Beta line (small): Beta 1.1.0b5. One reviewer, title and abstract screening.

H2 (how-it-works): Three steps, three screens
First, write the protocol. ... (Inception) screenshot
Then, search five free databases. ... (Discovery, next beta) screenshot
Then, screen titles and abstracts. ... (Screening) screenshot, breaks out wide

H2 (proof): Every number has a source
Intro: The audit journal of a real run: 30 records of a UAV crop and weed mapping review, screened and published on 6 November 2026 in 120 events. Table: time, event, written by, what.

H2 (list): What it is, and is not
Groups: In the beta / Not yet / What leaves your computer

H2 (cta/install): Start a workspace
Closing line: Two commands.  Then the Workspaces screen.

Footer tiles: statement (Every number has a source. MIT licence), navigation, data sources tile, contact tile (GitHub issues), wordmark tile, accent tile "Read the docs".
