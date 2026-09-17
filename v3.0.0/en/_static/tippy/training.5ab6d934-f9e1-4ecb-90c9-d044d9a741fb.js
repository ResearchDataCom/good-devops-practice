selector_to_html = {"a[href=\"#training-materials\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Training Materials<a class=\"headerlink\" href=\"#training-materials\" title=\"Link to this heading\">#</a></h1><p>This is a curated list of related reading materials, free training,\nworkshops, and similar resources, with an emphasis on cloud\ninfrastructure in clinical research settings.</p>", "a[href=\"#information-security\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Information Security<a class=\"headerlink\" href=\"#information-security\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#programming\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Programming<a class=\"headerlink\" href=\"#programming\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#miscellaneous\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Miscellaneous<a class=\"headerlink\" href=\"#miscellaneous\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#foundations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Foundations<a class=\"headerlink\" href=\"#foundations\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#cloud-computing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Cloud Computing<a class=\"headerlink\" href=\"#cloud-computing\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#project-management\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Project Management<a class=\"headerlink\" href=\"#project-management\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#test-driven-development\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Test-driven Development<a class=\"headerlink\" href=\"#test-driven-development\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#version-control\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Version Control<a class=\"headerlink\" href=\"#version-control\" title=\"Link to this heading\">#</a></h2>"}
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
