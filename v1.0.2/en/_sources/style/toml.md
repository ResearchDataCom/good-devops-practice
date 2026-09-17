# TOML Style Guide

Tom's Obvious Minimal Language (TOML) is a configuration file format
that maps to a hash table.  It's similar to Windows `.ini` files.

## Indentation

TODO

## Section Spacing

Sections within a `.toml` file must be separated by one blank line.
For example:

{lineno-start=1}
```python
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "updoot-inator"
#...
```
