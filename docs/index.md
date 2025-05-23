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

This documents Research Data and Communication Technologies' secure
software development standards and practices.

:::

::::

---

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL
NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and
**OPTIONAL** in this document are to be interpreted as described in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

TODO: scope, audience, structure, conventions

---

```{toctree}
:hidden:

charter
contributing
credits
readings
```

```{toctree}
:hidden:
:caption: Version Control

layout
gitignore
atomic
conventional
features
semver
```

```{toctree}
:hidden:
:caption: Release Engineering

linting
testing
sphinx
builds
sbom
packaging
```

```{toctree}
:hidden:
:caption: Infrastructure as Code

secrets
state
environments
monitoring
```


```{toctree}
:hidden:
:caption: Style Guides

Bash <bash>
Docker <docker>
Docker Compose <compose>
GNU Make <makefile>
JavaScript <javascript>
JSON <json>
Markdown <markdown>
OpenTofu <opentofu>
Python <python>
TOML <toml>
YAML <yaml>
```

```{toctree}
:hidden:
:caption: Advanced Topics

apispec
mvc
```
