selector_to_html = {"a[href=\"#github-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">GitHub Actions<a class=\"headerlink\" href=\"#github-actions\" title=\"Link to this heading\">#</a></h1><p><a class=\"reference external\" href=\"https://www.wiz.io/blog/github-actions-security-guide\">https://www.wiz.io/blog/github-actions-security-guide</a></p><p><a class=\"github reference external\" href=\"https://github.com/santrancisco/pmw\">santrancisco/pmw</a></p>"}
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
