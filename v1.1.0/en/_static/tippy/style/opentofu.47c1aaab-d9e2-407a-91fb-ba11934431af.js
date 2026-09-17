selector_to_html = {"a[href=\"#standard-module-structure\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Standard Module Structure<a class=\"headerlink\" href=\"#standard-module-structure\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#opentofu-style-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OpenTofu Style Guide<a class=\"headerlink\" href=\"#opentofu-style-guide\" title=\"Link to this heading\">#</a></h1><p>This extends the OpenTofu\n<a class=\"reference external\" href=\"https://opentofu.org/docs/language/syntax/style/\">Style Conventions</a>\nand\n<a class=\"reference external\" href=\"https://opentofu.org/docs/language/modules/develop/structure/\">Standard Module Structure</a>.</p>"}
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
