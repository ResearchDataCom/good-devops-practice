selector_to_html = {"a[href=\"#markdown-style-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Markdown Style Guide<a class=\"headerlink\" href=\"#markdown-style-guide\" title=\"Link to this heading\">#</a></h1><p>Follow the\n<a class=\"reference external\" href=\"https://google.github.io/styleguide/docguide/style.html\">Google Markdown style guide</a>,\nbut use a more traditional 70-character line limit.  Use two spaces\nafter sentence-ending punctuation.</p>"}
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
