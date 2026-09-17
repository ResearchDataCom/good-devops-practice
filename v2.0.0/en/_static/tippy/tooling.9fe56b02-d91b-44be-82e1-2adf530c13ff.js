selector_to_html = {"a[href=\"#integrated-development-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Integrated Development Environment<a class=\"headerlink\" href=\"#integrated-development-environment\" title=\"Link to this heading\">#</a></h2><p>This is intentionally left up to the developer.</p>", "a[href=\"#data-transformation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Data Transformation<a class=\"headerlink\" href=\"#data-transformation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#miscellaneous\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Miscellaneous<a class=\"headerlink\" href=\"#miscellaneous\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#identity\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Identity<a class=\"headerlink\" href=\"#identity\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#cloud\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Cloud<a class=\"headerlink\" href=\"#cloud\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#information-security\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Information Security<a class=\"headerlink\" href=\"#information-security\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#common-tools\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Common Tools<a class=\"headerlink\" href=\"#common-tools\" title=\"Link to this heading\">#</a></h1><h2>Integrated Development Environment<a class=\"headerlink\" href=\"#integrated-development-environment\" title=\"Link to this heading\">#</a></h2><p>This is intentionally left up to the developer.</p>"}
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
