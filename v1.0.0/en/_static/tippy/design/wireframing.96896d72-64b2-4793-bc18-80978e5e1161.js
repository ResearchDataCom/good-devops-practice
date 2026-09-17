selector_to_html = {"a[href=\"#wireframing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Wireframing<a class=\"headerlink\" href=\"#wireframing\" title=\"Link to this heading\">#</a></h1><p>Create lightweight (low-fidelity) blueprints that visualize\napplication designs or business processes.  Wireframes help developers\nand stakeholders align on requirements by showing the outlines of\nessential product components and features, including product\nnavigation, user interfaces, and interactive elements.</p>"}
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
