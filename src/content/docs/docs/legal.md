---
title: Licence and credits
description: The MIT licence, the terms of the data sources Nexus Scholar can query, and the fonts and tools this site is built with.
---

## Licence

Nexus Scholar is free software under the
[MIT licence](https://github.com/nexus-scholar-org/nexus-scholar-harness/blob/main/LICENSE),
copyright 2026 Nexus Scholar Org. It is provided as is, without warranty of any
kind. It is a beta: read the [known limits](../known-limits/) before relying on
it for a published review.

## Data sources and their terms

A search sends your query, and a verification sends your records' identifiers,
to the services below. Each has its own terms of use, which you accept by
using them; Nexus Scholar does not change them, and the maintainer has no
agreement with any of these services. Nexus Scholar queries these five sources
and bioRxiv when a protocol names it; it makes no claim about any other
database. Exports from other databases (Scopus, Web of Science, IEEE Xplore and
others) are imported from the files you download yourself, under the terms of
your own access.

| Source | What it is | Terms and documentation |
| :-- | :-- | :-- |
| OpenAlex | An open index of scholarly works, run by OurResearch. Requires a free API key since 2026-02-13. | [OpenAlex API documentation](https://docs.openalex.org/) · [Terms](https://openalex.org/terms) |
| Crossref | The DOI registration agency's metadata API. Asks clients to identify themselves with a contact email (the "polite pool"). | [REST API documentation](https://www.crossref.org/documentation/retrieve-metadata/rest-api/) · [Terms](https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/) |
| Semantic Scholar | The Allen Institute for AI's academic graph API. | [API](https://www.semanticscholar.org/product/api) · [Terms](https://www.semanticscholar.org/product/api/license) |
| arXiv | The preprint server's API. Asks for no more than one request every three seconds. | [API user manual](https://info.arxiv.org/help/api/user-manual.html) · [Terms of use](https://info.arxiv.org/help/api/tou.html) |
| PubMed (NCBI E-utilities) | The National Library of Medicine's MEDLINE search API. Asks for a tool name and contact email, and limits unkeyed clients to three requests per second. | [E-utilities](https://www.ncbi.nlm.nih.gov/books/NBK25497/) · [Usage policies](https://www.ncbi.nlm.nih.gov/home/about/policies/) |

What is sent to each, and when, is on [Data flow and privacy](../data-flow/).

## This website

Built with [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/), both MIT. The typefaces are
[Literata](https://github.com/googlefonts/literata) (Type Together for Google
Fonts), [Public Sans](https://public-sans.digital.gov/) (the United States
General Services Administration) and
[IBM Plex Mono](https://github.com/IBM/plex) (IBM), all under the SIL Open Font
License 1.1, served from this site. The screenshots are of the app on a test
workspace of thirty records on UAV crop and weed mapping; the records are real
published works whose metadata came from the sources above.

The site loads nothing from any other host, sets no cookies and runs no
analytics.
