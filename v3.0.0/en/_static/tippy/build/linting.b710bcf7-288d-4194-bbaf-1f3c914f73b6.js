selector_to_html = {"a[href=\"../git/workflow.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Feature Branch Workflow<a class=\"headerlink\" href=\"#feature-branch-workflow\" title=\"Link to this heading\">#</a></h1><p>Encapsulate development work in dedicated, temporary branches of a Git\nrepository.  The main branch of the repository only contains\nknown-good source code or configuration files, and the head of the\nmain branch always matches the latest release or live deployment.</p>", "a[href=\"#recommended-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Recommended Software<a class=\"headerlink\" href=\"#recommended-software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#linting\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Linting<a class=\"headerlink\" href=\"#linting\" title=\"Link to this heading\">#</a></h1><p>Automate <a class=\"reference internal\" href=\"../style/index.html\"><span class=\"doc std std-doc\">code formatting</span></a> and static code analysis.\nIntegrate linting into the <a class=\"reference internal\" href=\"../git/workflow.html\"><span class=\"doc std std-doc\">feature branch workflow</span></a>.</p><p>Dryer lint traps capture waste fibers shed by laundry instead of\nletting them dirty our homes.\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Lint_(software)\">Linters</a> are computer\nprograms that capture stylistic mistakes or code quality problems\ninstead of letting them dirty our code.  Linters perform\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Static_program_analysis\">static code analysis</a>\nthat flags stylistic mistakes, programming errors, design defects, and\nsuspicious constructs in source code.</p>", "a[href=\"../style/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Style Guides<a class=\"headerlink\" href=\"#style-guides\" title=\"Link to this heading\">#</a></h1><p>A common style makes code reviews easier by minimizing spurious code\ndifferences.</p>"}
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
