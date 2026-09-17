selector_to_html = {"a[href=\"#boring-registry\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">boring-registry<a class=\"headerlink\" href=\"#boring-registry\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#packaging-and-publishing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Packaging and Publishing<a class=\"headerlink\" href=\"#packaging-and-publishing\" title=\"Link to this heading\">#</a></h1><h2>GitHub Actions<a class=\"headerlink\" href=\"#github-actions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#pypiserver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">pypiserver<a class=\"headerlink\" href=\"#pypiserver\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#github-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">GitHub Actions<a class=\"headerlink\" href=\"#github-actions\" title=\"Link to this heading\">#</a></h2>"}
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
