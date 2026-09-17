selector_to_html = {"a[href=\"#version-control\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Version Control<a class=\"headerlink\" href=\"#version-control\" title=\"Link to this heading\">#</a></h1><p>Track changes to versioned project artifacts and supporting materials\nusing <a class=\"reference external\" href=\"https://git-scm.com/\">Git</a>, a free and open source distributed\nversion control system.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<img alt=\"../_images/diverging-branches.svg\" src=\"../_images/diverging-branches.svg\"/>\n<figcaption>\n<p><span class=\"caption-text\">Diverging Branches</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
