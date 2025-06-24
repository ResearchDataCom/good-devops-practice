"""Configure Sphinx.

Some neat tricks not referenced elsewhere:

- <inv:myst-markdown:std:doc#syntax/cross-referencing Add
  cross-references to source code and third-party documentation.>

- <inv:sphinx:std:doc#usage/extensions/autodoc Document module data
  members or class attributes by using doc comments (`#: ` instead of
  `# `) immediately before a variable/attribute definition or by
  adding a docstring immediately after it.>

"""

import sphinx_book_theme

project = "Good DevOps Practice"
author = "Research Data and Communication Technologies Benefit Corporation"
copyright = "2024"

#: This project uses Sphinx extensions:
#:
#: - <inv:myst-parser:std:doc#index to render Markdown in
#:   documentation and docstrings>;
#:
#: - <inv:sphinx:std:doc#usage/extensions/intersphinx to link to other
#:   projects' documentation>;
#:
#: - <inv:sphinx-copybutton:std:doc#index to add a "copy" button to
#:   code blocks>;
#:
#: - <inv:sphinx-pyscript:std:doc#index to use PyScript in built
#:   documentation>;
#:
#: - <inv:sphinx-tippy:std:doc#index to add rich hints (tooltips) to
#:   built documentation>;
#:
#: - <inv:sphinx-togglebutton:std:doc#index to add collapsable
#:   admonitions (notes, warnings, etc.) to built documentation>;
#:
#: - to render SVG diagrams (sphinxcontrib-svg2pdfconverter);
#:
#: - <inv:sphinxext-opengraph:std:doc#index to turn web pages into
#:   Open Graph objects>;
#:
#: - <inv:sphinxext-rediraffe:std:doc#index to fix broken internal
#:   links due to deleted/renamed pages>;
#:
#: - and <inv:sphinx-multiversion:std:doc#index to build versioned
#:   documentation>.
extensions = [
    "autodoc2",
    "myst_parser",
    "sphinx.ext.intersphinx",
    "sphinx.ext.viewcode",
    "sphinx_copybutton",
    "sphinx_design",
    "sphinx_multiversion",
    "sphinx_pyscript",
    "sphinx_tippy",
    "sphinx_togglebutton",
    "sphinxcontrib.cairosvgconverter",
    "sphinxext.opengraph",
    "sphinxext.rediraffe",
]

nitpicky = True
suppress_warnings = ["myst.strikethrough"]
locale_dirs = ["_locales"]
templates_path = ["_templates"]
exclude_patterns = [".*", "Thumbs.db", ".DS_Store"]

#: This documentation uses the <inv:sphinx-book-theme:std:doc#index
#: Sphinx Book Theme>.
html_theme = "sphinx_book_theme"
html_theme_path = [sphinx_book_theme.get_html_theme_path()]
html_theme_options = {
    "home_page_in_toc": True,
    "repository_url": "https://github.com/ResearchDataCom/good-devops-practice",
    "repository_branch": "main",
    "path_to_docs": "docs",
    "use_repository_button": True,
    "use_edit_page_button": True,
    "use_issues_button": True,
}
html_favicon = "_static/favicon-32x32.png"
html_static_path = ["_static"]
html_sidebars = {
    "**": [
        "navbar-logo.html",
        "icon-links.html",
        "search-button-field.html",
        "sbt-sidebar-nav.html",
        # "versioning.html",
    ]
}

#: <inv:sphobjinv:std:doc#cli/suggest Use the `sphobjinv suggest`
#: command to find intersphinx references using the documentation URL>,
#: e.g., `sphobjinv suggest -u
#: https://sphobjinv.readthedocs.io/en/latest/cli/suggest.html suggest`.
intersphinx_mapping = {
    "myst-parser": ("https://myst-parser.readthedocs.io/en/latest/", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
    "sphinx-book-theme": ("https://sphinx-book-theme.readthedocs.io/en/stable/", None),
    "sphinx-copybutton": ("https://sphinx-copybutton.readthedocs.io/en/latest/", None),
    "sphinx-multiversion": (
        "https://sphinx-contrib.github.io/multiversion/main/",
        None,
    ),
    "sphinx-pyscript": ("https://sphinx-pyscript.readthedocs.io/en/latest/", None),
    "sphinx-tippy": ("https://sphinx-tippy.readthedocs.io/en/latest/", None),
    "sphinx-togglebutton": (
        "https://sphinx-togglebutton.readthedocs.io/en/latest/",
        None,
    ),
    "sphinxext-opengraph": (
        "https://sphinxext-opengraph.readthedocs.io/en/latest/",
        None,
    ),
    "sphinxext-rediraffe": (
        "https://sphinxext-rediraffe.readthedocs.io/en/latest/",
        None,
    ),
    "sphobjinv": ("https://sphobjinv.readthedocs.io/en/latest/", None),
}

#: Refer to the MyST-Parser documentation for more information about
#: its <inv:myst-parser:std:label#syntax/extensions Markdown syntax
#: extensions>.
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
myst_dmath_double_inline = True
myst_enable_checkboxes = True
myst_footnote_transition = True
myst_heading_anchors = 2

# TODO: sphinx-multi-version configuration reference
smv_branch_whitelist = None
