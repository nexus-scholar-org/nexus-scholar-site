---
title: How the AI is used
description: The agent proposes and the researcher decides. What is built, what is decided, and what is neither.
---

The rule that everything follows from: **the agent proposes and the researcher
decides.** Nothing a model writes is a decision, a published file or a journal
entry. Only the engine writes workspace artifacts and the audit journal, and
only after a human decision.

## What is built (1.1.0b5)

The screening half of the design is built: a proposal store, the rule table,
the validators, the proposal tools of the MCP server, three drivers (your own
Anthropic key, your own Claude through MCP, and Gemini), agent runs with
consent, estimate, cost ceiling and cancel, calibration runs, and the agreement
screen.

- **One structured call per record.** For each record the model answers every
  criterion `yes`, `no` or `not reported`, with a verbatim quote from the title
  or abstract for each answer, and may say it cannot decide. Screening has no
  agent loop: it is high-volume classification, and a single call with a fixed
  schema is cheaper, reproducible and auditable.
- **The outcome is derived in plain code, not by the model.** A versioned rule
  table turns the answers into an outcome: every inclusion criterion yes and no
  exclusion criterion yes gives Include; any exclusion criterion yes, or an
  inclusion criterion no, gives Exclude with that criterion as the reason; any
  not reported, cannot decide, failed check, refusal or truncation gives
  Unclear. A prompt change cannot alter the rule, and a record is never
  resolved to Exclude by default.
- **Plain code checks every proposal.** The quote must appear verbatim in the
  record; the outcome must follow from the answers; the record and protocol
  must be the ones the proposal was made for. A proposal that fails a check
  reaches you as Unclear, needs you.
- **Every proposal records** its model, prompt hash, input hash, protocol
  fingerprint, the checks and their results, and token usage, so a methods
  section can state exactly what the agent saw.
- **Blinding.** The draft is hidden until you decide (the default), and the
  setting is recorded in each decision's provenance.
- **You see every record.** The beta has one mode: the researcher decides every
  record. A setting named "AI-agreed exclusion" exists in the beta but changes
  nothing in the queue; it is only reported in the methods paragraph.

The drafts are not validated. Do not report a recall or accuracy figure for
them from the beta.

## What is decided, not built: the autonomy ladder

On 2026-11-10 the maintainer decided how the agent may earn more autonomy. It
is a design with build order, not a feature of any release.

- **Three rungs.** L0, the researcher decides every record (today). L1, the
  agent's Exclude proposals stand as decisions, and the researcher decides
  every proposed Include, every Unclear, and a random audit sample of the
  agent's excludes. L2, the agent's proposals stand for every record it could
  decide; Unclear still goes to the researcher.
- **A calibration gate unlocks each rung,** measured on the researcher's own
  blind decisions in this review: for L1, at least 100 records compared,
  include recall of 0.95 or more with a 95% confidence lower bound of 0.90, and
  at most two missed includes; for L2, 200 records, 0.98 and 0.95, at most one
  miss, plus a typed acknowledgement at publish time. The gate is one-sided on
  purpose: an agent that excludes a relevant study costs the review a finding.
- **Nothing an agent decides is recorded as a human decision.** An agent
  decision is its own event, `AGENT_ADOPTED`, minted by the engine only,
  carrying the proposal, the mode, the calibration run and the human who set
  the mode. A client can never post one. The methods paragraph states the
  agent's share.
- **A protocol change drops the review back to L0** and invalidates the
  calibration, because the agent was measured against criteria that no longer
  exist. The researcher may override any agent decision at any time.
- **A bounded discovery assistant** may propose synonyms, explain each
  database's translation of the query, and propose the smallest query change
  that would find a missed seed. Each is a proposal the researcher accepts
  verbatim; none decides anything.

The first release of this design would ship L0 and L1; L2 is built only after
a measurement on a real corpus. None of it is in 1.1.0b5.

## What it costs, and who pays

The researcher, on their own key or through their own Claude subscription. The
maintainer runs no hosted proxy and pays for no tokens. The app shows a
token-counted estimate before every run, and a cost ceiling stops the run.
