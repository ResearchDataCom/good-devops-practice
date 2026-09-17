selector_to_html = {"a[href=\"#the-daily-stand-up-meeting\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">The Daily Stand-up Meeting<a class=\"headerlink\" href=\"#the-daily-stand-up-meeting\" title=\"Link to this heading\">#</a></h2><p>The team meets briefly each morning:</p>", "a[href=\"#no-unplanned-work\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">No Unplanned Work<a class=\"headerlink\" href=\"#no-unplanned-work\" title=\"Link to this heading\">#</a></h2><p>Which service management, project management, or issue tracking tool\nthe team uses depends on the customer.</p>", "a[href=\"#the-task-board\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">The Task Board<a class=\"headerlink\" href=\"#the-task-board\" title=\"Link to this heading\">#</a></h1><p><a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Kanban_(development)#\">Kanban</a>, from the Japanese word for\n<em>signboard</em> and inspired by Toyota\u2019s lean manufacturing system of the\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Kanban#\">same name</a>, tracks work visually from start to finish.\nKanban implementations can be as simple as sticky notes on a\nwhiteboard.  For example, the following illustrates how Kyle Lewis\nmanaged a security incident response team using Google Jamboard, with\ntask cards moving from left to right.</p>"}
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
