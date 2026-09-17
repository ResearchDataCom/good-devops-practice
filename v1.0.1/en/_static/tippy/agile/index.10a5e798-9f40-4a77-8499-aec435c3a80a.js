selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<img alt=\"../_images/project-management.svg\" src=\"../_images/project-management.svg\"/>\n<figcaption>\n<p><span class=\"caption-text\">The Project Life Cycle</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n<div class=\"legend\">\n<p>Cadenced agile ceremonies work like a reduction drive\u2014represented\nhere using belts\u2014with annual contract awards or strategic plans\npropelling quarterly program increments (SAFe), semi-monthly sprints\n(scrum), and daily tasks (kanban).  Agile projects end only when\nproduct development and service operation cease.</p>\n</div>\n</figcaption>\n</figure>", "a[href=\"#project-management\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Project Management<a class=\"headerlink\" href=\"#project-management\" title=\"Link to this heading\">#</a></h1><p>Agile project management methodologies, including\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Kanban_(development)#\">Kanban</a>,\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Scrum_(software_development)#\">Scrum</a>, and\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Scaled_Agile_Framework#\">SAFe</a>, facilitate the incremental\ndelivery of complex products or services with indeterminate (or\nchanging) requirements by shortening and interleaving enterprise\nperformance life cycle phases.</p>"}
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
