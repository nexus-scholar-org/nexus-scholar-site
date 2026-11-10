---
title: Contributing
description: How to set up a source checkout, run the test gate, and open a pull request.
---

Nexus Scholar is developed in the open at
[nexus-scholar-org/nexus-scholar-harness](https://github.com/nexus-scholar-org/nexus-scholar-harness)
under the MIT licence. The harness and its seven kits (protocol, search, PDF,
RAG, graph, agent, verify) are one Python package, `nexus-scholar`, with the
browser app beside it.

## The fork and pull-request rule

Every change lands through a fork and a pull request to the canonical
repository. Feature branches are never pushed to the canonical repository
directly; only its `main` branch and release tags are, and only by the
maintainer. A pre-push hook in the repository enforces this once enabled with
`git config core.hooksPath scripts/hooks`.

1. Fork the repository and branch from `main`.
2. Make the change, with its tests.
3. Run the test gate (below) and the lint.
4. Push the branch to your fork and open a pull request against `main`.

The maintainer approves every contract decision and every merge. Contract
changes (the typed models and schemas that bind workspaces, screening and
artifacts) need an architecture decision, regenerated schemas and golden
fixtures, a negative regression test, and an independent review; adapter
inconvenience never authorises weakening the contract.

## Set up a source checkout

You need Git, [uv](https://docs.astral.sh/uv/) and Node.js 22.

```bash
git clone https://github.com/nexus-scholar-org/nexus-scholar-harness.git
cd nexus-scholar-harness
uv sync --extra dev
```

`uv sync --extra dev` installs the harness, all seven kits (editable, from
`src/`), every command-line tool and the test tools. Heavy backends are
opt-in extras: `--extra pdf`, `--extra rag`, `--extra extract`, or
`--extra all`. The full test suite needs `--extra dev --extra pdf --extra rag`.
Run everything through the project environment with `uv run ...`; never rely
on a system Python.

The browser app lives in `apps/research-ui`:

```bash
npm --prefix apps/research-ui ci
npm --prefix apps/research-ui run build:export
```

## The test gate

Tests are tiered so that a change runs only the checks that cover it. The
selector prints the commands for what changed:

```bash
uv run python scripts/select_test_gate.py --changed main --stage inner
```

The stages are `inner` while editing (skips the slow tests), `checkpoint` at a
task boundary, and `pr` before a pull request (the full suite once, in
parallel). The suite refuses any network connection unless
`NEXUS_ALLOW_NETWORK=1` is set, so it runs offline. Lint with
`uv run ruff check scripts/` and, for the real-bug classes on the source,
`uv run ruff check src/ --select F821,F811,F823,F632,F7,B023,B006,E9`.

Before touching contract-related code, check that the frozen contract baseline
is current:

```bash
uv run python scripts/generate_contract_baseline.py --check
```

A failure is baseline drift; never regenerate merely to bless unexplained
changes.

## Where to start reading

- `AGENTS.md` and `docs/architecture/DEVELOPER_COMPASS.md` in the repository:
  the hard invariants and the required validation.
- `docs/roadmap/production-plan.md`: the current mission and the milestones.
- `docs/decisions.md`: the decisions taken, with their dates.

For feedback rather than code, [open an issue](https://github.com/nexus-scholar-org/nexus-scholar-harness/issues)
with your research task, environment and the unclear or failing step.

## This website

The site's source is at
[nexus-scholar-org/nexus-scholar-site](https://github.com/nexus-scholar-org/nexus-scholar-site).
It is a static Astro site; `npm ci && npm run build` builds it, and a push to
`main` deploys it to GitHub Pages. Every page has an "Edit page" link.
