---
sd_hide_title: True
---

# Introduction

::::{grid}
:reverse:
:gutter: 3 4 4 4
:margin: 1 2 1 2

:::{grid-item}
:columns: 12 4 4 4

```{image} _static/logo-square.svg
:width: 200px
:class: sd-m-auto
:name: landing-page-logo
```

:::

:::{grid-item}
:columns: 12 8 8 8
:child-align: justify
:class: sd-fs-5

```{rubric} Good DevOps Practice
```

Research Data and Communication Technologies' secure software
development and IT operations discipline enables research at scale.

````{div} sd-d-flex-row

```{button-ref} roadmap
:ref-type: doc
:color: primary
:class: sd-rounded-pill sd-mr-3

Get Started
```

```{button-ref} training
:ref-type: doc
:color: secondary
:class: sd-rounded-pill

Learn More
```

````

:::

::::

---

::::{grid} 1 2 2 3
:gutter: 1 1 1 2

:::{grid-item-card} {octicon}`project;1.5em;sd-mr-1` An Agile Foundation
:columns: 12
:link: agile/index
:link-type: doc

Collaborate with colleagues, customers, and communities.  Focus on
consistent, incremental results.  Plan ahead, but be responsive to
change.

+++

[Learn more »](agile/index)

:::

:::{grid-item-card} {octicon}`git-pull-request;1.5em;sd-mr-1` Versioned, Immutable
:columns: 4
:link: git/index
:link-type: doc

Track changes to software products and system definitions.

+++
[Learn more »](git/index)
:::

:::{grid-item-card} {octicon}`code-review;1.5em;sd-mr-1` Continuous Integration
:columns: 4
:link: build/index
:link-type: doc

Shift left by automating software verification, system validation, and
product packaging.

+++
[Learn more »](build/index)
:::

:::{grid-item-card} {octicon}`cloud;1.5em;sd-mr-1` Continuous Delivery
:columns: 4
:link: deploy/index
:link-type: doc

Shift right with rolling releases that deploy (or update) accredited,
validated capability at the speed of need.

+++
[Learn more »](deploy/index)
:::

::::

---

## Conventions

:::{admonition} Guidance

Interpret the key words **MUST**, **MUST NOT**, **REQUIRED**,
**SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**,
**MAY**, and **OPTIONAL** as described in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

:::

Authoritative guidance using these key words appear in admonitions
titled "Guidance", like above.  An explanation of the rationale for
the rule plus supporting material appears after in separate
paragraphs, like this.  Usually, each rule falls under its own
subheading, which facilitates cross-referencing.  Top-level headings
provide a content summary or a quick reference.

## Scope

This document governs the life cycle of the RDCT Engineering team's
products or services.  It incorporates material from several sources,
including the following:

- [NIST _Secure Software Development Framework_ version 1.1](https://csrc.nist.gov/Projects/ssdf)

- [ISPE _Good Automated Manufacturing Practice_ version 5](https://ispe.org/initiatives/regulatory/what-gamp)

- [FDA _Computer Software Assurance for Production and Quality System Software_](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/computer-software-assurance-production-and-quality-system-software-0)

- [OWASP _DevSecOps Guideline_](https://owasp.org/www-project-devsecops-guideline/)

- [_DevSecOps Playbook_](https://github.com/6mile/DevSecOps-Playbook)

## Audience

Members of the RDCT Engineering team follow these standards and
practices as they develop and operate accredited, validated systems
for government, for research and education, and for commerce.  This is
not limited to pure software development activites and can include,
for example, documentation or system integrations.  This also includes
company (internal) projects, which act as both on-the-job DevOps
training activities and process quality controls.

## Authoring

This document is written using
[MyST Markdown](https://myst-parser.readthedocs.io/), a strict
superset of the
[CommonMark syntax specification](https://spec.commonmark.org/) that
adds features focused on scientific and technical documentation
authoring.  Markdown is specifically designed to be readable across
multiple devices in a variety of formats without requiring an online
Internet connection.  Formatting, collaborative editing, and
publishing follows the same standards and practices described herein.

## Structure

This document contains three major sections.  The frontmatter
describes the RDCT Engineering team's DevOps strategy and links to
relevant third-party training.  The main body of the work provides
instructions covering project management, version control, continuous
integration, and continuous delivery.  Appendices include
supplementary---but still authoritative---guidance for specific tool
chains.

```{toctree}
:hidden:

charter
contributing
credits
roadmap
training
tooling
```

```{toctree}
:hidden:
:caption: Guidance

agile/index
git/index
build/index
deploy/index
```

```{toctree}
:hidden:
:caption: Appendices

style/index
design/index
bibliography
```
