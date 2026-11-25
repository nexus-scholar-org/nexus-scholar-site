---
title: Known limits
description: What the beta 1.1.0b8 cannot do yet.
---

Nexus Scholar is a beta. This page says plainly what it cannot do yet, so that
you can decide whether it fits your review before you start.

## Who it is for

Researchers who screen titles and abstracts for a systematic or scoping review,
alone, on their own computer. You bring RIS exports from the databases you
searched, or PubMed `.nbib` exports. You leave with a published screening, its
PRISMA counts and a draft methods paragraph.

## Limits of 1.1.0b8

- **One reviewer, desktop only.** A second screener, and agreement between two
  people (kappa), are not in the beta. Screening from a phone is not built.
- **Screening is title and abstract.** Since 1.1.0b7 a Charting step records,
  for each kept study, its full-text status, a full-text decision and the
  charting form, which you fill in yourself. Reading a PDF's text is parked.
- **Most of what 1.1.0b7 added was used only on test data.** One real review
  was taken through inception, the harvest and import, deduplication, agent
  drafts, screening and publication, then a first look at Charting and one
  live PDF download. The query workbench, the criteria pilot, citation
  chasing, the open-access look-up from Charting, the charting form and export,
  the declaration of decisions stored from drafts and the MCP assistant have
  not been used on a real review. No live chase was run.
- **The Discovery, Explore and Charting screens have not been tried by a
  second person.**
- **No automated test opens the app in a browser.** The browser test suite was
  removed on 2026-11-23; the component and screen-state tests remain.
- **RIS and PubMed `.nbib` only.** CSV and BibTeX are not imported yet.
- **A search needs your contact e-mail** (`SCHOLAR_MAILTO`), and OpenAlex needs
  `SCHOLAR_OPENALEX_KEY` (required by OpenAlex since 2026-02-13). A browser
  harvest that selects OpenAlex refuses to start without the key.
- **Near-duplicate pairs cannot be reviewed one by one.** Duplicates shows
  counts per rule only.
- **Approval uses a code shown only on your computer:** in the terminal of
  `nexus-scholar ui` (and in a small window when the app can open one), or,
  with the start without a terminal, in a small window only.
- **The approver is a typed name,** not a verified sign-in.
- **AI drafts are optional and not validated.** Do not report a recall or
  accuracy figure for them. The agent's measured thresholds are not decided,
  so drafts stay advisory. The Prepare screen still offers "AI-agreed
  exclusion", then refuses it: every record is seen by the reviewer.
- **The MCP assistant tools were not tried with a real AI client.** There is no
  "Connect an AI assistant" screen; an AI client is connected by hand
  (`nexus-scholar setup-mcp`, or `nexus-scholar-mcp.exe` of the installed app).
- **Publishers refuse automated downloads.** The open-access look-up asks only
  the open-access services and downloads only the PDFs they list. Expect "Not
  retrieved" or a link to open yourself for many studies.
- **Creating the workspace is not bound to the previewed protocol.** A save
  from another tab between Review and Create goes through unseen.
- **A draft cannot be discarded from the browser.**
- **The copy made before a newer version first opens a review** sits beside
  your reviews on the same disk: it is not a backup. It was timed on generated
  data only. 1.1.0b7 and earlier do not check a review's format version, so do
  not go back to them on a review a newer version has written.
- **The Windows installer is not signed,** and it is for Windows only. It was
  not tried on a clean computer, and its wizard pages, its uninstaller and the
  Windows warning were not walked by a person. Installers for macOS and Linux
  are not built yet (coming soon); nothing was tried on macOS, or on Linux with a display.
- **No update notice.** A newer version is not announced inside the app; look
  at the release page.
- **The control window of the start without a terminal is in English only.**
  The French and Arabic wording of the screens added in 1.1.0b7 and 1.1.0b8 was
  not read by a speaker.
- **A real system keychain was not tried by hand;** the tests use a stand-in.
  Changing the reviews folder from the Settings screen was not tried by hand
  either.
- **Faults 2 to 13 of the walk of 1.1.0b7 are not fixed** (listed in
  [`R-1.1.0b7.md`](https://github.com/nexus-scholar-org/nexus-scholar-harness/blob/v1.1.0b7/docs/roadmap/milestones/R-1.1.0b7.md)).
- **Parked, not production:** reading a PDF's text and extraction, labelled so
  in `--help`.
- **Removed:** synthesis, the evidence matrix and the verification checks
  (retraction, open science, conflicts of interest, risk of bias) in 1.1.0b7;
  the citation graph in 1.1.0b8. See the release notes for
  [1.1.0b7](../releases/1-1-0b7/) and [1.1.0b8](../releases/1-1-0b8/).

## What the guarantees are

On the supported paths, accepted artifacts are bound to their parents and
exact content; screening refuses incomplete coverage, duplicate decisions and
unresolved finalisation; proposals, review, approval and publication are
separated. These are bounded engineering guarantees. The audit journal is
append-only by convention, not protection against an administrator rewriting
local files. Valid provenance is not proof that a scientific conclusion is
correct.
