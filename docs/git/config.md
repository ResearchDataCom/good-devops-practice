# Git Client Configuration

Access remote repositories and sign commits with Git, OpenSSH, GnuPG,
and a hardware authentication token.  Create a separate GitHub account
for work, and don't use personal equipment.  Do not store credentials
in unencrypted files, even when using full-disk encryption.

## Recommended Software

:::{admonition} Guidance

Developers **SHOULD** use the latest versions of the listed tools to
track code changes.

:::

- [Git](https://git-scm.com/), the free and open source distributed
  version control system

- [OpenSSH](https://www.openssh.com/), for accessing remote Git
  repositories via the Secure Shell (SSH) protocol

- [GNU Privacy Guard](https://gnupg.org/) (GnuPG, gpg) or
  [GNU Privacy Guard for Windows](https://www.gpg4win.org/) (gpg4win),
  used to log into SSH servers and to digitally sign commits

- [PINEntry](https://github.com/GPGTools/pinentry), a suite of PIN or
  passphrase entry dialogs for GnuPG, including pinentry-mac
  (macOS-only)

- [GNU Make](https://www.gnu.org/software/make/), a general-purpose
  build automation tool

While only the software listed above is supported, developers may,
subject to company or client approval, use complementary tools such as
[edamagit](https://github.com/kahole/edamagit) or
[Magit](https://magit.vc/).

## Multiple GitHub Accounts

:::{admonition} Guidance

Developers **MUST** maintain separate personal and work
[GitHub.com accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts).

:::

GitHub does not provide mechanisms for controlling which SSH keys or
access tokens to can be used to access organizations' private
repositories.

:::{admonition} Guidance

Developers **MUST** store work-related account information and keying
material in company- or client-provided credential vaulting systems
(e.g., a 1Password Business account) or hardware authentication
devices (e.g., a PIV card, a YubiKey).

:::

Storing plaintext keying material on a computer's file system risks a
company or client security breach should the computer be compromised
by a malicious third party.  Malware running as the developer can
access that data even if the underlying file system uses full-disk
encryption.

:::{admonition} Guidance

Developers **MUST NOT** store work-related account information,
credentials, and keying material on personal equipment, in personal
password managers, and the like.

:::

Using personal equipment for work risks a company or a client security
breach.  Developers are not authorized to take those risks on the
company's or its clients' behalf.

## Attributions

:::{admonition} Guidance

Developers **MUST** use their corporate or client identities when
authoring commits.

:::

Set the email address in the Git client to the company- or
client-provided email address.  In most cases, the Git user name can
be one's preferred name, but some clients require using one's full
legal name.  Ask your functional area or task area lead for specific
guidance.  For more information, refer to
["Your Identity" in _Pro Git_ (2nd. ed.)](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_your_identity).

## Digitally Signed Commits

:::{admonition} Guidance

Developers **SHOULD** sign their commits using industry-standard
digital signature methods.  GnuPG with a company- or client-provided
hardware authentication device is **RECOMMENDED**.

:::

The [_YubiKey-Guide_](https://drduh.github.io/YubiKey-Guide/) provides
GnuPG configuration guidance along with YubiKey-specific setup
instructions.  To use a PIV card with GnuPG, use the GnuPG
configuration guidance from the _YubiKey-Guide_ but replace GnuPG's
scdaemon with
[gnupg-pkcs11-scd](https://github.com/alonbl/gnupg-pkcs11-scd).

:::{admonition} Guidance

Developers **MUST NOT** store keying material used to sign commits in
unencrypted files.

:::

Storing plaintext keying material on a computer's file system risks a
company or client security breach should the computer be compromised
by a malicious third party.  Malware running as the developer can
access that data even if the underlying file system uses full-disk
encryption.

## Remote Server Access

:::{admonition} Guidance

Developers **MUST** use industry-standard transport-layer encryption
methods and multi-factor authentication mechanisms to access Git
remote repositories.  SSH with a company- or client-provided hardware
authentication device, integrated with the OpenSSH client via GnuPG,
is **RECOMMENDED**.

:::

Refer to the _YubiKey-Guide_ or the gnupg-pkcs-11 documentation
referenced above for GnuPG configuration guidance.
["Secure Secure Shell"](https://stribika.github.io/2015/01/04/secure-secure-shell.html)
provides general OpenSSH setup instructions.  Answers to
[this question posted on StackOverflow](https://stackoverflow.com/questions/3225862/multiple-github-accounts-ssh-config)
explain how to configure OpenSSH to support multiple GitHub accounts.

:::{admonition} Guidance

Developers **MUST NOT** store credentials used to access Git remote
repositories in unencrypted files.

:::

:::{danger}

As of 2025-06-21, neither the GitHub CLI nor GitHub Desktop encrypt
stored credentials.

:::

Storing plaintext keying material on a computer's file system risks a
company or client security breach should the computer be compromised
by a malicious third party.  Malware running as the developer can
access that data even if the underlying file system uses full-disk
encryption.
