"""Configure Sphinx.

Some neat tricks not referenced elsewhere:

- <inv:myst:std:doc#syntax/cross-referencing Add
  cross-references to source code and third-party documentation using
  either Markdown links or Intersphinx references.>

- <inv:sphinx:std:doc#usage/extensions/autodoc Document module data
  members or class attributes by using doc comments (`#: ` instead of
  `# `) immediately before a variable/attribute definition or by
  adding a docstring immediately after it.>

"""

import json
import os
import sys
from importlib.machinery import SourceFileLoader
from pathlib import Path

import sphinx_book_theme
from rinoh.flowable import DummyFlowable, Flowable
from rinoh.frontend.rst import DocutilsBodyNode


class RinohPassthroughTextElement(DocutilsBodyNode):
    """PassthroughTextElement translator class.

    This facilitates support for <inv:sphinx-design:std:doc#cards> by
    rinohtype.  Refer to
    [brechtm/rinohtype#201](https://github.com/brechtm/rinohtype/issues/201)
    for more information.

    """

    node_name = "PassthroughTextElement"
    """rinohtype assumes that docutils node classes have lowercase
    names, which gets overridden here.

    """

    def build_flowable(self) -> Flowable:
        """Do not render this text element.

        Refer to
        {py:class}`sphinx_design.shared.PassthroughTextElement` for
        more information.

        """
        return DummyFlowable()


# Enable builds from outside the docs directory.
_srcpath = (Path(__file__).parent / ".." / "src").absolute()
sys.path.insert(0, str(_srcpath))

# Purge old imports just in case.
_removals = [_mod for _mod in sys.modules if "good_devops_practice" in _mod]
for _mod in _removals:
    del sys.modules[_mod]

# Configure Sphinx from dynamically loaded project metadata.
_metadata = SourceFileLoader(
    "good_devops_practice", str(_srcpath / "good_devops_practice" / "__init__.py")
).load_module()

project = "Good DevOps Practice"
"""The project name."""

release = _metadata.__version__
"""The full version number, including the patch level (X.Y.Z)."""

version = ".".join(_metadata.__version__.split(".")[0:2])
"""The short version number (X.Y)."""

author = "Research Data and Communication Technologies Benefit Corporation"
"""Credits for this version."""

copyright = "2025"
"""The years over which the work was done."""

extensions = [
    "myst_parser",
    "sphinx.ext.githubpages",
    "sphinx.ext.intersphinx",
    "sphinx_copybutton",
    "sphinx_design",
    "sphinx_pyscript",
    "sphinx_tippy",
    "sphinx_togglebutton",
    "sphinxcontrib.bibtex",
    "sphinxcontrib.cairosvgconverter",
    "sphinxext.opengraph",
    "sphinxext.rediraffe",
]
"""This documentation uses several Sphinx extensions.

<inv:myst-parser:std:doc#index myst-parser>
: Render Markdown in documentation and docstrings.

<inv:sphinx:std:doc#usage/extensions/githubpages sphinx.ext.githubpages>
: Publish HTML documentation in GitHub Pages.

<inv:sphinx:std:doc#usage/extensions/intersphinx sphinx.ext.intersphinx>
: Link to other projects' documentation.

<inv:copybutton:std:doc#index sphinx-copybutton>
: Add a `copy` button to code blocks.

<inv:sphinx-design:std:doc#index sphinx-design>
: Provide screen-size responsive web components.

<inv:sphinx-pyscript:std:doc#index sphinx-pyscript>
: Use PyScript in built documentation.

<inv:sphinx-tippy:std:doc#index sphinx-tippy>
: Add rich hints (tooltips) to built documentation.

<inv:togglebutton:std:doc#index sphinx-togglebutton>
: Add collapsable admonitions (notes, warnings, etc.) to built
  documentation.

<inv:sphbibtex:std:doc#index sphinxcontrib-bibtex>
: Allow BibTeX citations to be inserted into documentation generated
  by Sphinx via a bibliography directive, along with `cite:p` and
  `cite:t` roles.

[sphinxcontrib.cairosvgconverter](https://pypi.org/project/sphinxcontrib-svg2pdfconverter/)
: Convert SVG diagrams to PDF for output formats that do not support
  SVG natively.

<inv:opengraph:std:doc#index sphinxext-opengraph>
: Turn web pages into Open Graph objects.

<inv:rediraffe:std:doc#index sphinxext-rediraffe>
: Fix broken internal links due to deleted/renamed pages.

"""

intersphinx_mapping = {
    "black": ("https://black.readthedocs.io/en/stable/", None),
    "myst-parser": ("https://myst-parser.readthedocs.io/en/latest/", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
    "book-theme": ("https://sphinx-book-theme.readthedocs.io/en/stable/", None),
    "pydata-theme": ("https://pydata-sphinx-theme.readthedocs.io/en/latest/", None),
    "copybutton": ("https://sphinx-copybutton.readthedocs.io/en/latest/", None),
    "sphbibtex": ("https://sphinxcontrib-bibtex.readthedocs.io/en/latest/", None),
    "sphinx-design": ("https://sphinx-design.readthedocs.io/en/latest/", None),
    "sphinx-pyscript": ("https://sphinx-pyscript.readthedocs.io/en/latest/", None),
    "sphinx-tippy": ("https://sphinx-tippy.readthedocs.io/en/latest/", None),
    "togglebutton": ("https://sphinx-togglebutton.readthedocs.io/en/latest/", None),
    "opengraph": ("https://sphinxext-opengraph.readthedocs.io/en/latest/", None),
    "rediraffe": ("https://sphinxext-rediraffe.readthedocs.io/en/latest/", None),
    "sphobjinv": ("https://sphobjinv.readthedocs.io/en/latest/", None),
}
"""Cross-reference other Sphinx documentation project.s

Use the <inv:sphobjinv:std:doc#cli/suggest `sphobjinv suggest`>
command to find intersphinx references using the documentation URL,
e.g., `sphobjinv suggest -u
https://sphobjinv.readthedocs.io/en/latest/cli/suggest.html suggest`.

"""

nitpicky = True

suppress_warnings = ["myst.strikethrough"]

locale_dirs = ["_locales"]

templates_path = ["_templates"]
"""These directories contain documentation templates.

Paths are relative to this file's parent directory.

"""

exclude_patterns = [".*", "Thumbs.db", ".DS_Store"]
"""Ignore these files/folders when sourcing content."""

myst_enable_extensions = [
    "amsmath",
    "attrs_block",
    "attrs_inline",
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "linkify",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]
"""Enable all MyST parser extensions.

For more information, refer to
<inv:myst-parser:std:label#syntax/extensions the documentation>.

"""

myst_dmath_double_inline = True

myst_enable_checkboxes = True

myst_footnote_transition = True

myst_heading_anchors = 2

bibtex_bibfiles = ["refs.bib"]
"""[BibTeX](http://www.bibtex.org/) citations."""

html_theme = "sphinx_book_theme"
"""Use the Sphinx Book Theme template for web content."""

html_theme_path = [sphinx_book_theme.get_html_theme_path()]

html_theme_options = {
    "home_page_in_toc": True,
    "repository_url": "https://github.com/ResearchDataCom/good-devops-practice",
    "path_to_docs": "docs",
    "use_edit_page_button": True,
    "use_repository_button": True,
    "use_issues_button": True,
    "use_fullscreen_button": True,
}
"""Configure web content generation.

<inv:book-theme:std:doc#sections/sidebar-primary home_page_in_toc>
: Add the home page to the table of contents.

<inv:book-theme:std:doc#components/source-files repository_url,
path_to_docs, use_edit_page_button, use_repository_button,
use_issues_button>
: Link to doc sources and include buttons for suggesting edits or
  creating new issues.

<inv:book-theme:std:doc#reference use_fullscreen_button>
: Add a button to show the site full screen.

"""

html_title = f"{project} v{release}"
"""The title for HTML documentation;
cf. <inv:sphinx:std:confval/html_title>.

"""

html_favicon = "_static/favicon-32x32.png"

html_static_path = ["_static"]

html_sidebars = {
    "**": [
        "navbar-logo.html",
        "icon-links.html",
        "search-button-field.html",
        "sbt-sidebar-nav.html",
        "versions.html",
    ]
}

try:
    _versions = json.load(
        (Path(__file__).parent / ".." / "build" / "versions.json").open()
    )
except Exception:
    _versions = {"latest": ["en"]}
html_context = {
    "current_version": os.environ.get("CURRENT_VERSION", "latest"),
    "current_language": os.environ.get("CURRENT_LANGUAGE", "en"),
    "versions": _versions,
}

rinoh_documents = [{"doc": "index", "target": "manual"}]
"""Configure rinohtype's Sphinx builder."""
