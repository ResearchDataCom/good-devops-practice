selector_to_html = {"a[href=\"#indentation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Indentation<a class=\"headerlink\" href=\"#indentation\" title=\"Link to this heading\">#</a></h2><p>TODO</p>", "a[href=\"#section-spacing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Section Spacing<a class=\"headerlink\" href=\"#section-spacing\" title=\"Link to this heading\">#</a></h2><p>Sections within a <code class=\"docutils literal notranslate\"><span class=\"pre\">.toml</span></code> file must be separated by one blank line.\nFor example:</p>", "a[href=\"#toml-style-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">TOML Style Guide<a class=\"headerlink\" href=\"#toml-style-guide\" title=\"Link to this heading\">#</a></h1><p>Tom\u2019s Obvious Minimal Language (TOML) is a configuration file format\nthat maps to a hash table.  It\u2019s similar to Windows <code class=\"docutils literal notranslate\"><span class=\"pre\">.ini</span></code> files.</p>"}
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
