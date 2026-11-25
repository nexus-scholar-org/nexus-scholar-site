---
title: Getting started
description: Install Nexus Scholar and screen your first review, from nothing to a published screening with an exported reference list.
---

This guide takes you from nothing to a published screening with an exported
reference list. It takes about 15 minutes, plus the time you spend screening.
Everything runs on your computer. No account or API key is needed to screen.

<p class="ns-beta">This guide is for the beta, version <strong>1.1.0b8</strong>. To check the version you have, run <code>nexus-scholar --version</code>. The <a href="../known-limits/">known limits</a> say what the beta cannot do yet.</p>

The commands are the same on Windows (PowerShell), macOS and Linux unless a
step says otherwise.

There are two ways to install. On any system, install with `uv` (steps 1 and
2). On Windows you can instead run an installer that needs no Python and no
terminal; see [On Windows, the installer](#on-windows-the-installer) below.

## 1. Install uv (once)

[uv](https://docs.astral.sh/uv/getting-started/installation/) installs and runs
Python for you, including Python itself. Install it, close and reopen your
terminal, then check it:

```bash
uv --version
```

## 2. Install Nexus Scholar

```bash
uv tool install "nexus-scholar>=1.1.0b8"
```

The version in the command is needed while Nexus Scholar is in beta: it lets uv
take a beta of Nexus Scholar without taking betas of anything else. Do not use
`--prerelease allow`: it also takes development releases of other packages, and
one of them stops the app from starting. Check the install:

```bash
nexus-scholar --version
```

It should print `nexus-scholar 1.1.0b8`. You can now run `nexus-scholar` from
any folder. If you use pip instead of uv: `pip install "nexus-scholar>=1.1.0b8"`.

### On Windows, the installer

On Windows you can skip steps 1 and 2: download
`NexusScholar-1.1.0b8-setup.exe` from the
[release page](https://github.com/nexus-scholar-org/nexus-scholar-harness/releases/tag/v1.1.0b8),
run it, then start Nexus Scholar from the Start menu. It needs no Python, no
terminal and no administrator password. The first start opens a short setup
screen for your contact e-mail and keys; nothing there is needed to open a
review. The rest of this guide is the same, except that approval codes appear
in a small window, not in a terminal.

Before you choose it, know that:

- **It is not signed.** Windows may show "Windows protected your PC"; choose
  "More info", then "Run anyway", only if you downloaded the file from the
  release page above.
- **It is for Windows only.** On macOS and Linux, install with `uv` or `pip`.
- **It is new.** It was built and tried on GitHub's Windows runner and on one
  developer PC. It was not tried on a clean computer, and its wizard pages, its
  uninstaller and the Windows warning were not walked by a person.

Uninstalling removes the program, never a review. See the
[1.1.0b8 release notes](../releases/1-1-0b8/).

## 3. Start the app and create a workspace

```bash
nexus-scholar ui
```

Your browser opens on **Workspaces**. Each review is one folder; by default they
live in `Documents/Nexus Scholar/workspaces` (choose another folder with
`nexus-scholar ui --root <folder>`). Keep the terminal open: the app runs there,
and it is where approval codes appear later. Stop the app with **Ctrl+C**.

Click **New workspace**, type your review's title, and create it. Then open it.

A workspace made this way has a placeholder protocol, shown as a draft. It is
enough to try the app. For a real review, write your question and your
inclusion and exclusion criteria first with **New review**, the guided flow
described in [Inception](../flow/inception/).

## 4. Import your search results

Export your search results as **RIS** from each database you searched (Scopus,
Web of Science, IEEE Xplore, or a reference manager such as Zotero). From
**PubMed**, use *Send to → Citation manager*: the `.nbib` file it downloads is
imported as it is. Then open the **Import** step in the app:

1. **Add a database file.** Choose the RIS or `.nbib` file and type the
   database's name. Under **Search details** you can add the date you searched
   and the exact search string. Both are optional, and both are what PRISMA
   asks you to report. A database you exported in parts: add each part under
   the same name, and the parts are added up.
2. **Check the counts.** The app shows the records found in each database, the
   duplicates it will remove (same DOI, or the same title, first author and
   year one year either way) and the studies left to screen. These are the
   numbers for your PRISMA flow diagram.
3. **Accept and freeze the corpus** on the **Hand-off** step of Discovery.
   Screening starts from it, so after this no database can be added or
   removed.

Each file is copied unchanged into the workspace, and every step is recorded in
its audit journal. The same import is one command from the terminal:
`nexus-scholar accept-corpus --workspace "<workspace folder>" --ris "Scopus=<scopus>.ris" --ris "Web of Science=<wos>.ris"`.

Instead of importing exports, you can search the free databases from the app:
open **Discovery** in the header. It needs your contact e-mail and, for
OpenAlex, a free API key; see [Discovery](../flow/discovery/). Since 1.1.0b7 a
search and imported exports can be combined in one corpus, in any order.

## 5. Screen

Go to **Screening**. The steps are across the top:

1. **Prepare.** Check the settings, then **Prepare batches** → **Prepare now**.
   The settings are the batch size (5 to 100 records), whether an agent's drafts
   are hidden until you decide, what happens after you decide, and whether you
   see every record. After a few seconds it says "Batches prepared".
2. **Agent proposals** (optional). Skip it to screen on your own.
3. **Triage.** Read each record and answer the criteria until the decision is
   clear (keys **1** yes, **2** no, **3** not reported). Exclude is ready as soon
   as one criterion fails, and its reason is taken from that criterion, so
   **E** then **Enter** excludes. Include is ready when every inclusion
   criterion is yes. Unclear (goes to full text) is always possible. Your
   decisions are saved as you go.
4. **Agreement.** Only meaningful if an agent proposed drafts.
5. **Publish.** Type your name under **Approver** and **Save name**. Approvals
   are recorded under it; it is a name typed on this computer, not a verified
   sign-in. Click **Show the codes for every decided batch**, read the codes in
   the terminal where the app runs (or in the small window it opens), paste
   them, and approve. When every check passes, **Publish the screening**.

A decision changed after publishing makes the screening read "Published,
decisions since": publish again so the exports match. The details are in
[Screening](../flow/screening/).

## 6. Export and write your methods

After publishing, **Export and methods** appears on the screening home and on
Publish. Download a RIS file (included and unclear records) for Zotero, EndNote
or Mendeley, or a CSV with every record, its decision and its reason. **Copy
paragraph** gives a methods paragraph with your PRISMA counts, the databases
and dates you searched, and how AI drafts were used. It is a draft written from
your workspace files: check every number before you use it. See
[Export and methods](../flow/export/).

## Where your work lives

Everything is in the workspace folder: your records, your decisions, the
published lists and the PRISMA report, and `audit/journal.jsonl`, the
append-only record of every step. Back it up like any other research data.
What leaves your computer, and when, is listed in
[Data flow and privacy](../data-flow/).

## Updating

```bash
uv tool install --force "nexus-scholar>=1.1.0b8"
```

Then check `nexus-scholar --version`. With the Windows installer, run the newer
`setup.exe` instead.

Since 1.1.0b8 each review has a format version. The first time a newer version
opens a review, it saves a copy of the whole review first, PDFs included, as a
zip under `.nexus-copies/` in your reviews folder; the five newest copies are
kept. The copy is on the same disk, so it is not a backup. 1.1.0b7 and earlier
do not check the format, so do not go back to them on a review a newer version
has written. How to restore a copy is in the user guide,
["The copy made before an update"](https://github.com/nexus-scholar-org/nexus-scholar-harness/blob/v1.1.0b8/docs/nexus_scholar_user_guide.md#the-copy-made-before-an-update).
During the beta, finish a screening on the version you started it with when
you can.

## Troubleshooting

| What you see | What to do |
| :-- | :-- |
| `nexus-scholar` is not found | Run `uv tool update-shell`, then open a new terminal. |
| `uv tool install` says no version matches, or installs 1.0.0 | Keep the version in the command: `"nexus-scholar>=1.1.0b8"` (the beta is a pre-release). |
| The app stops at start with `No module named 'httpcore'` | It was installed with `--prerelease allow`. Reinstall: `uv tool install --force "nexus-scholar>=1.1.0b8"`. |
| "No accepted corpus" (`SNAPSHOT_NOT_ACCEPTED`) | Import and accept your search results (step 4). |
| `MAILTO_NOT_SET` before a search | Save your e-mail on the **Settings** screen (it applies at once), or set `SCHOLAR_MAILTO` as in [Configuration](../configuration/) and start the app again. |
| `OPENALEX_KEY_NOT_SET` before a search | Save the OpenAlex key on the **Settings** screen, or set `SCHOLAR_OPENALEX_KEY` as in [Configuration](../configuration/) and start the app again; or leave OpenAlex out of the run. |
| `VERIFIED_EXISTS` when adding an export | `literature/verified.json` holds records that no search and no import of this app made, so the app does not know where they came from. Accept them as they are, or remove the file to import exports instead. After a search in the app, exports can be added: the Hand-off accept combines both. |
| "Made with a newer version of Nexus Scholar" | A newer version has written this review in a format this version cannot read. Install that version or a later one to continue. |
| "No records in this file" (`SOURCE_NOT_RIS`) | Export the results as RIS (`.ris` or `.txt`) from the database, or as `.nbib` from PubMed, not as CSV or BibTeX. |
| "File too large" (`SOURCE_TOO_LARGE`) | Export in parts of under 50 MB and add each part under the same database name. |
| `OPERATOR_CONTEXT_MISSING` when approving | Save your name under **Approver** on the Publish screen, then ask for a new code. |
| `APPROVAL_CONTENT_CHANGED` when publishing | A decision changed after the last approval. Approve the last batch again (a new code), then publish. |
| A card with a code in capitals | The card says what happened and the next step; the code is what to quote if you ask for help. |
| The browser did not open | Start with `nexus-scholar ui --no-browser` and open the one-time link it prints. |

## Tell us what happened

The most useful thing you can send is a screen recording, or a written note, of
your first 15 minutes: where you hesitated, what you expected, what surprised
you. With it, send the version (`nexus-scholar --version`), any code shown on a
card, and, if something went wrong in a workspace, two of its files:
`audit/journal.jsonl` and `literature/screening/MANIFEST.json`. Those two files
hold the steps you took, your review's title and questions, and the batch list,
not your records' titles or abstracts. Report as an
[issue on GitHub](https://github.com/nexus-scholar-org/nexus-scholar-harness/issues).
