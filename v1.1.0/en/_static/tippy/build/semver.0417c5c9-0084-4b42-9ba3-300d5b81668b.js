selector_to_html = {"a[href=\"#id1\"]": "<table class=\"table table-center\" id=\"id1\">\n<caption><span class=\"caption-text\">Commit History Drives Version Numbering</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head text-left\"><p>Commit Message</p></th>\n<th class=\"head\"><p>Old Version</p></th>\n<th class=\"head\"><p>New Version</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td class=\"text-left\"><p>feat!: automate database migrations</p></td>\n<td><p>3.2.1</p></td>\n<td><p>4.0.0</p></td>\n</tr>\n<tr class=\"row-odd\"><td class=\"text-left\"><p>feat: init/update database at startup</p></td>\n<td><p>4.0.0</p></td>\n<td><p>4.1.0</p></td>\n</tr>\n<tr class=\"row-even\"><td class=\"text-left\"><p>fix: make system state fields optional</p></td>\n<td><p>4.1.0</p></td>\n<td><p>4.1.1</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#semantic-versioning\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Semantic Versioning<a class=\"headerlink\" href=\"#semantic-versioning\" title=\"Link to this heading\">#</a></h1><h2>The Starting Version Number, the First Commit, and the Initial Release<a class=\"headerlink\" href=\"#the-starting-version-number-the-first-commit-and-the-initial-release\" title=\"Link to this heading\">#</a></h2><p>Further development prior to the initial release can include\nadditional breaking changes, new features, or fixes, which naturally\nleads to the initial release being version <code class=\"docutils literal notranslate\"><span class=\"pre\">1.0.0</span></code>.</p>", "a[href=\"#the-starting-version-number-the-first-commit-and-the-initial-release\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">The Starting Version Number, the First Commit, and the Initial Release<a class=\"headerlink\" href=\"#the-starting-version-number-the-first-commit-and-the-initial-release\" title=\"Link to this heading\">#</a></h2><p>Further development prior to the initial release can include\nadditional breaking changes, new features, or fixes, which naturally\nleads to the initial release being version <code class=\"docutils literal notranslate\"><span class=\"pre\">1.0.0</span></code>.</p>"}
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
