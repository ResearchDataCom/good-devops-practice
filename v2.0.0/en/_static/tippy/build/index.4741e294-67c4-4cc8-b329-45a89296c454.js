selector_to_html = {"a[href=\"#continuous-integration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Continuous Integration<a class=\"headerlink\" href=\"#continuous-integration\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<img alt=\"../_images/container-images.svg\" src=\"../_images/container-images.svg\"/>\n<figcaption>\n<p><span class=\"caption-text\">The Container Image Build Process</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
