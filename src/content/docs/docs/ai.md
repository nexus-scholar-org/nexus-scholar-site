---
title: How the AI is used
description: The agent proposes and the researcher decides. What is built, what is decided, and what is neither.
---

The rule that everything follows from: **the agent proposes and the researcher
decides.** Nothing a model writes is a decision, a published file or a journal
entry. Only the engine writes workspace artifacts and the audit journal, and
only after a human decision.

## What is built (1.1.0b8)

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
  record. Since 1.1.0b7 the mode "AI-agreed exclusion" is refused when you save
  it; the Prepare screen still offers it and then shows the refusal.
- **A run names its provider, model and cost ceiling.** Since 1.1.0b7 an agent
  run or a calibration is refused without all three, and there is no default
  model. A blank ceiling means no ceiling.
- **Decisions stored from drafts are declared.** Since 1.1.0b7, if you stored
  decisions from the agent's drafts without reading each record, you declare
  them on their own screen and can draw a sample of the adopted exclusions to
  read. Declared decisions are left out of the agreement figures, and the
  methods paragraph states how many records you read, how many decisions came
  from drafts and what a sample found.
- **Quoted spans are highlighted.** Once a draft is shown, Triage marks the
  spans of the title and abstract that the draft quoted, tied to their
  criterion.
- **An assistant and a critic over MCP.** Since 1.1.0b7 five
  `nexus_assistant_*` tools let an AI client read drafts and workspaces,
  propose changes and report findings, which appear as suggestions and check
  rows. No tool searches, accepts, decides or publishes. They were not yet
  tried with a real AI client.

The drafts are not validated, and the agent's measured thresholds are not
decided. Do not report a recall or accuracy figure for them from the beta.

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
a measurement on a real corpus. None of it is in 1.1.0b8.

## What it costs, and who pays

The researcher, on their own key or through their own Claude subscription. The
maintainer runs no hosted proxy and pays for no tokens. The app shows a
token-counted estimate before every run, and a cost ceiling stops the run.
