selector_to_html = {"a[href=\"#git-client-configuration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Git Client Configuration<a class=\"headerlink\" href=\"#git-client-configuration\" title=\"Link to this heading\">#</a></h1><p>Access remote repositories and sign commits with Git, OpenSSH, GnuPG,\nand a hardware authentication token.  Create a separate GitHub account\nfor work, and don\u2019t use personal equipment.  Do not store credentials\nin unencrypted files, even when using full-disk encryption.</p>", "a[href=\"#remote-server-access\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Remote Server Access<a class=\"headerlink\" href=\"#remote-server-access\" title=\"Link to this heading\">#</a></h2><p>Refer to the <em>YubiKey-Guide</em> or the gnupg-pkcs-11 documentation\nreferenced above for GnuPG configuration guidance.\n<a class=\"reference external\" href=\"https://stribika.github.io/2015/01/04/secure-secure-shell.html\">\u201cSecure Secure Shell\u201d</a>\nprovides general OpenSSH setup instructions.  Answers to\n<a class=\"reference external\" href=\"https://stackoverflow.com/questions/3225862/multiple-github-accounts-ssh-config\">this question posted on StackOverflow</a>\nexplain how to configure OpenSSH to support multiple GitHub accounts.</p>", "a[href=\"#recommended-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Recommended Software<a class=\"headerlink\" href=\"#recommended-software\" title=\"Link to this heading\">#</a></h2><p>While only the software listed above is supported, developers may,\nsubject to company or client approval, use complementary tools such as\n<a class=\"reference external\" href=\"https://github.com/kahole/edamagit\">edamagit</a> or\n<a class=\"reference external\" href=\"https://magit.vc/\">Magit</a>.</p>", "a[href=\"#attributions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Attributions<a class=\"headerlink\" href=\"#attributions\" title=\"Link to this heading\">#</a></h2><p>Set the email address in the Git client to the company- or\nclient-provided email address.  In most cases, the Git user name can\nbe one\u2019s preferred name, but some clients require using one\u2019s full\nlegal name.  Ask your functional area or task area lead for specific\nguidance.  For more information, refer to\n<a class=\"reference external\" href=\"https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_your_identity\">\u201cYour Identity\u201d in <em>Pro Git</em> (2nd. ed.)</a>.</p>", "a[href=\"#multiple-github-accounts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multiple GitHub Accounts<a class=\"headerlink\" href=\"#multiple-github-accounts\" title=\"Link to this heading\">#</a></h2><p>GitHub does not provide mechanisms for controlling which SSH keys or\naccess tokens to can be used to access organizations\u2019 private\nrepositories.</p>", "a[href=\"#digitally-signed-commits\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Digitally Signed Commits<a class=\"headerlink\" href=\"#digitally-signed-commits\" title=\"Link to this heading\">#</a></h2><p>The <a class=\"reference external\" href=\"https://drduh.github.io/YubiKey-Guide/\"><em>YubiKey-Guide</em></a> provides\nGnuPG configuration guidance along with YubiKey-specific setup\ninstructions.  To use a PIV card with GnuPG, use the GnuPG\nconfiguration guidance from the <em>YubiKey-Guide</em> but replace GnuPG\u2019s\nscdaemon with\n<a class=\"reference external\" href=\"https://github.com/alonbl/gnupg-pkcs11-scd\">gnupg-pkcs11-scd</a>.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
