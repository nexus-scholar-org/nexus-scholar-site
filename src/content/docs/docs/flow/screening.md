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

When the protocol sets blinding, Prepare shows it read-only. After a few
seconds it says "Batches prepared".

## 2. Agent proposals (optional)

Skip this step to screen on your own. If you run it, a model drafts, for each
record, one answer per criterion with a verbatim quote from the title or
abstract, and the outcome is derived from those answers by the same rule as
your own decisions. The drafts are proposals: they never decide a record, and
they are hidden until you decide unless you change the setting. What is sent,
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

## 5. Publish

1. Type your name under **Approver** and **Save name**. Approvals are recorded
   under it. It is a name typed on this computer, not a verified sign-in.
2. For each batch, click **Show a code in the terminal**, read the code in the
   terminal where the app runs, type it, and approve. The approval is bound to
   the batch's content: a decision changed after approval refuses publication
   with `APPROVAL_CONTENT_CHANGED` until you approve again.
3. When every check passes (every record decided, no open conflicts, every
   decision human, the protocol unchanged), **Publish the screening**.

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
