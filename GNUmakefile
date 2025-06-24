# Prepare these translations.
TRANSLATIONS=


# Search a colon-separated list of directories for one of the given
# programs, returning the first match.
pathsearch = \
$(or \
	$(firstword \
		$(foreach a, $(2), \
			$(wildcard $(addsuffix /$(a), $(subst :, , $(1)))))), \
	$(3))


# Search the Python virtual environment and the executable search path
# for the programs in the listed order, returning the first match.
venvsearch = \
$(if $(call pathsearch,.venv/bin,$(1)), \
	. .venv/bin/activate; $(1), \
	$(call pathsearch,$(PATH),$(1),exit 1; echo $(1)))


# Develop using the latest available supported version of Python.
PYTHON = \
$(call pathsearch,$(PATH),python3.12 python3.11 python3.10,exit 1; echo python3)
PYTHON_VERSION = \
$(shell $(PYTHON) -c "import sys;print('{}.{}'.format(*sys.version_info[:2]))")


# Use these tools from the development environment, if available.
PRE_COMMIT  = $(call venvsearch,pre-commit)
PYTEST      = $(call venvsearch,pytest)
SPHINXBUILD = $(call venvsearch,sphinx-build)
SPHINXINTL  = $(call venvsearch,sphinx-intl)
SPHINXMULTI = $(call venvsearch,sphinx-multiversion)
TOMLQ       = $(call venvsearch,tomlq)
YQ          = $(call venvsearch,yq)


# Use these settings when developing on Debian/Ubuntu.
APT_GET = apt-get -o Debug::pkgProblemResolver=yes -y --no-install-recommends
DEBIAN_BUILD_DEPS = \
	build-essential \


# Get the package name.
PYPACKAGE_NAME = \
$(shell $(TOMLQ) -r '.tool.setuptools."package-dir"|keys[0]' pyproject.toml)


# Recursively list code, content, and test articles (as well as
# related work in progress).
SOURCEISH=$(or $(shell git ls-tree --full-tree --name-only -r HEAD src tests))
UNTRACKED=$(or $(shell git ls-files --others --exclude-standard src tests))


# Enumerate translation targets.
LOCALES = $(foreach l,$(TRANSLATIONS),docs/_locales/$(l))


# List in-use pre-commit hooks.
PRE_COMMIT_HOOKS = \
$(addprefix .git/hooks/, \
	$(shell \
		$(YQ) -r ".repos[].hooks[].stages[]" .pre-commit-config.yaml \
			2>/dev/null \
		| sort -u \
	) \
	pre-commit \
)


# When adding an alias for a build artifact, add it to this list; cf.
# https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html.
# Sort the list alphabetically.
.PHONY: \
	clean \
	dist \
	distclean \
	docs \
	gettext \
	html \
	lint \
	locale \
	locales \
	pre-commit \
	setup \
	venv \


# Install build dependencies for local development.
build-deps:
	$(eval uname = $(or $(shell uname)))
	$(if $(filter Darwin, $(uname)), \
		(which port > /dev/null || echo warning: MacPorts not installed) \
		&& (which act > /dev/null || sudo port -N install act) \
		&& (which actionlint > /dev/null || sudo port -N install actionlint) \
		&& (which cairo-sphinx > /dev/null || sudo port -N install cairo libffi) \
		&& (which jq > /dev/null || sudo port -N install jq) \
		&& (which python3.12 > /dev/null || sudo port -N install python312) \
		&& (which shellcheck > /dev/null || sudo port -N install shellcheck) \
	)
	$(if $(uname), \
		$(if $(filter 0, $(or $(shell id -u))),, \
			@echo You must be root to perform this action.; exit 1))
	$(if $(filter Linux, $(uname)), \
		$(eval distro = $(or $(shell lsb_release -is))) \
	)
	$(if $(filter Debian Ubuntu, $(distro)), \
		sed -i '/deb-src/s/^# //' /etc/apt/sources.list \
		&& apt-get update \
		&& (which cairo-sphinx > /dev/null || ($(APT_GET) install cairo python3-dev libffi)) \
		&& (which jq > /dev/null || ($(APT_GET) install jq)) \
		&& (which python3.12 > /dev/null \
			|| (add-apt-repository -y ppa:deadsnakes/ppa \
				&& $(APT_GET) install python3.12-full \
				&& curl https://bootstrap.pypa.io/get-pip.py \
					| python3.12 -)))


# Create the development environment.
venv .venv:
	$(PYTHON) -m venv .venv
	. .venv/bin/activate; python -m pip install -U pip-with-requires-python
	. .venv/bin/activate; python -m pip install -U pip setuptools


# Set up the development environment.
setup $(PYPACKAGE_NAME).egg-info: pyproject.toml .venv
	. .venv/bin/activate; python -m pip install -e .[dev,test]


# Install the pre-commit hooks.
pre-commit: $(PRE_COMMIT_HOOKS)
.git/hooks/%: .pre-commit-config.yaml $(PYPACKAGE_NAME).egg-info
	$(PRE_COMMIT) validate-config
	$(PRE_COMMIT) validate-manifest
	$(PRE_COMMIT) install --install-hooks --hook-type $*


# Run the linter (including unstaged changes).
lint: $(PRE_COMMIT_HOOKS)
	$(PRE_COMMIT) run --show-diff-on-failure --all-files


# Generate the documentation.
gettext build/gettext: | $(PYPACKAGE_NAME).egg-info
	$(SPHINXBUILD) -b gettext -n docs build $(SPHINXOPTS)
	touch build/gettext

locale locales: $(LOCALES)
docs/_locales/%: build/gettext | $(PYPACKAGE_NAME).egg-info
	mkdir -p $@
	$(SPHINXINTL) -c docs/conf.py update -p build -l $*
	touch $@

docs: $(LOCALES) | $(PYPACKAGE_NAME).egg-info
	$(foreach l,en $(TRANSLATIONS), \
		$(SPHINXMULTI) -D language="$(l)" docs build/html/$(l))
	env LATEST_VERSION=`git describe --tag --abbrev=0` \
		envsubst < docs/.index.html > build/html/index.html


# Build the distribution.
dist: .coverage
	. .venv/bin/activate; python -m build
	. .venv/bin/activate; twine check dist/*

distclean:
	rm -rf dist


# Remove build artifacts and reset the development environment.
clean:
	rm -rf build .coverage dist .pytest_cache .venv* docs/apidocs \
		docs/_locales/en $(PRE_COMMIT_HOOKS)
	find . -type d -name __pycache__ -print | xargs rm -rf
	find . -type d -name \*.egg-info -print | xargs rm -rf


# This could remove packages other that the ones listed, so keep any
# confirmation prompts (requires local administrator rights).
clean-deps:
	$(if $(uname), \
		$(if $(filter 0, $(or $(shell id -u))),, \
			@echo You must be root to perform this action.; exit 1))
	echo Not implemented.; exit 1
