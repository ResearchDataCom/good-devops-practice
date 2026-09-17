selector_to_html = {"a[href=\"#level-of-effort\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Level of Effort<a class=\"headerlink\" href=\"#level-of-effort\" title=\"Link to this heading\">#</a></h2><p>A commit <strong>SHOULD</strong> correspond to one and only one Agile task,\nrepresenting at most eight (8) hours of sustained effort.</p>", "a[href=\"#single-unit-of-work\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Single Unit of Work<a class=\"headerlink\" href=\"#single-unit-of-work\" title=\"Link to this heading\">#</a></h2><p>Each commit <strong>MUST</strong> represent one and only one change following the\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Single-responsibility_principle\">single-responsibility principle</a>.</p><p>A commit <strong>MAY</strong> include edits to multiple files, but these edits\n<strong>MUST</strong> share the same reason or purpose.</p>", "a[href=\"#atomic-commits\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Atomic Commits<a class=\"headerlink\" href=\"#atomic-commits\" title=\"Link to this heading\">#</a></h1><p>Commit frequently but with purpose.  This naturally results in clear\nand concise\u2014but not necessarily short\u2014commits that make code\nreviews more efficient.  Refer to\n<a class=\"reference external\" href=\"https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits/\">\u201cMake Atomic Git Commits\u201d</a>\nand <a class=\"reference external\" href=\"https://nrempel.com/blog/atomic-commits/\">\u201cAtomic Commits\u201d</a> for\nadditional guidance.</p>"}
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
