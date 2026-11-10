---
title: Known limits
description: What the beta 1.1.0b6 cannot do yet.
---

Nexus Scholar is a beta. This page says plainly what it cannot do yet, so that
you can decide whether it fits your review before you start.

## Who it is for

Researchers who screen titles and abstracts for a systematic or scoping review,
alone, on their own computer. You bring RIS exports from the databases you
searched, or PubMed `.nbib` exports. You leave with a published screening, its
PRISMA counts and a draft methods paragraph.

## Limits of 1.1.0b6

- **One reviewer.** A second screener, and agreement between two people
  (kappa), are not in the beta.
- **Title and abstract only.** No full-text screening, data extraction or
  synthesis. Unclear records are listed for full text.
- **RIS and PubMed `.nbib` only.** CSV and BibTeX are not imported yet.
- **Approval uses a code shown in the terminal.** Keep the terminal where the
  app runs in view.
- **The approver is a typed name,** not a verified sign-in.
- **AI drafts are optional and not validated.** Do not report a recall or
  accuracy figure for them.
- **The Discovery screens are new and have not been tried by a second
  person.** No live search was run for the release. A search needs
  `SCHOLAR_MAILTO`, and OpenAlex needs `SCHOLAR_OPENALEX_KEY` (required by
  OpenAlex since 2026-02-13); without the key the OpenAlex search stops after
  one page, and the app does not yet refuse the run.
- **A harvest and imported exports cannot be combined in one corpus yet.**
- **PubMed abstract terms search all fields.** A fix is planned.
- **Near-duplicate pairs cannot be reviewed one by one.** Duplicates shows
  counts per rule only.
- **Inception has no Explore or Direction screen.** The browser flow goes
  Scope, Shape, Concepts and criteria, Review, Done.
- **Creating the workspace is not bound to the previewed protocol.** A save
  from another tab between Review and Create goes through unseen.
- **A draft cannot be discarded from the browser.**
- **Reading a workspace across versions is not yet tested.** Finish a
  screening on the version you started it with when you can.
- **Parked, not production:** full-text retrieval and extraction, synthesis,
  the evidence matrix, the citation graph and risk-of-bias trust. The kits are
  in the package and labelled so in `--help`.

## What the guarantees are

On the supported paths, accepted artifacts are bound to their parents and
exact content; screening refuses incomplete coverage, duplicate decisions and
unresolved finalisation; proposals, review, approval and publication are
separated. These are bounded engineering guarantees. The audit journal is
append-only by convention, not protection against an administrator rewriting
local files. Valid provenance is not proof that a scientific conclusion is
correct.
