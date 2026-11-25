---
title: Screening
description: Title and abstract screening by one reviewer, with optional AI drafts, batch approval and publication.
---

Screening is where the beta is most complete. You read each record's title and
abstract, answer the protocol's criteria, and the decision follows from your
answers. Every decision is an event written by the engine to the workspace, and
the published screening is bound to the protocol and to the batches you
approved.

## 1. Prepare

Check the settings, then **Prepare batches** → **Prepare now**. The settings
are:

- the batch size (5 to 100 records);
- whether an agent's drafts are hidden until you decide (the default);
- what happens after you decide (show the draft, or move on at once);
- whether you see every record.

When the protocol sets blinding, Prepare shows it read-only. Since 1.1.0b7
blinding and the not-reported rule can be changed from Prepare after the
protocol is signed, as a recorded amendment. After a few seconds it says
"Batches prepared".

**Pilot your criteria first** (since 1.1.0b7, optional) draws 20 to 100
records at random, with a recorded seed. You screen them in Triage; pilot
decisions are kept apart and do not count, and a result screen shows which
criteria decided your exclusions. Before the first batch is approved you can
revise a criterion as a recorded amendment beside the signed protocol; the
methods paragraph lists each amendment. The pilot was used only on test data.

## 2. Agent proposals (optional)

Skip this step to screen on your own. If you run it, a model drafts, for each
record, one answer per criterion with a verbatim quote from the title or
abstract, and the outcome is derived from those answers by the same rule as
your own decisions. The drafts are proposals: they never decide a record, and
they are hidden until you decide unless you change the setting. A run names
its provider, model and cost ceiling; there is no default model. What is sent,
to whom and under which consent is in [Data flow and privacy](../../data-flow/);
the design is in [How the AI is used](../../ai/).

## 3. Triage

Read each record and answer the criteria until the decision is clear. The keys
are **1** yes, **2** no, **3** not reported.

- **Exclude** is ready as soon as one criterion fails, and its reason is taken
  from that criterion, so **E** then **Enter** excludes.
- **Include** is ready when every inclusion criterion is yes.
- **Unclear** (goes to full text) is always possible.

Your decisions are saved as you go. With no agent draft, the next record opens
by itself; with a draft, it shows after your decision and **N** moves on.
Identifiers and record details are under **Details**.

Since 1.1.0b7 the protocol's concepts and query terms are marked in the title
and abstract, and, once the draft is shown, the spans the agent's draft quoted,
tied to their criterion. Two switches turn each kind off. A mark is never
colour alone.

On a desktop at 1024 px and wider, triage is a focus screen: the site header,
step bar and footer give way to one triage bar with progress, the queue
(**J** and **K**), help (**?**) and a way out. The checklist is optional and
starts collapsed: include needs no answers, exclude needs only a reason, and
unanswered criteria are simply not sent.

## 4. Agreement

The agreement screen sets your decisions beside the agent's drafts, counting
only the decisions you made before a draft was revealed. It is only meaningful
if an agent proposed drafts, and the figures are advisory: do not report a
recall or accuracy figure for the drafts from the beta.

If you stored decisions from the agent's drafts without reading each record,
declare them on the screen **Decisions stored from the agent's draft** (since
1.1.0b7), where you can also draw a sample of the adopted exclusions to read.
Declared decisions are left out of Agreement's figures, and the methods
paragraph states how many records you read, how many decisions came from
drafts and what a sample found. The decisions themselves are not changed.

## 5. Publish

1. Type your name under **Approver** and **Save name**. Approvals are recorded
   under it. It is a name typed on this computer, not a verified sign-in.
2. For each batch, click **Show a code in the terminal**, read the code in the
   terminal where the app runs, type it, and approve. The approval is bound to
   the batch's content: a decision changed after approval refuses publication
   with `APPROVAL_CONTENT_CHANGED` until you approve again. Since 1.1.0b7
   **Show the codes for every decided batch** prints one line per batch, and
   you paste them all at once; each approval still binds its own batch. When
   you start the app without a terminal (1.1.0b8), the codes are shown in a
   small window only.
3. When every check passes (every record decided, no open conflicts, every
   decision recorded as the reviewer's, decisions stored from drafts declared,
   the protocol unchanged), **Publish the screening**.

A decision changed after publishing makes the screening read "Published,
decisions since": publish again so the exports match. Then go to
[Export and methods](../export/).

## What is written

Every decision is one event in `literature/screening/events/`, with the record
id, the answers, the outcome, the reason code, the batch binding and the
protocol fingerprint, and the method `HUMAN`. An undo is a superseding event,
never a deletion. The published screening writes `included.json`,
`excluded.json` and the PRISMA screening report, and the journal records the
publication with its fingerprints.
