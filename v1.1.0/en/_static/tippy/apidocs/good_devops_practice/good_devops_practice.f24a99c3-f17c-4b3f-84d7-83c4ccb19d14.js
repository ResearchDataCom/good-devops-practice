selector_to_html = {"a[href=\"#good_devops_practice.__app_name__\"]": "<dt class=\"sig sig-object py\" id=\"good_devops_practice.__app_name__\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">good_devops_practice.</span></span><span class=\"sig-name descname\"><span class=\"pre\">__app_name__</span></span></dt><dd><p>\u2018replace(\u2026)\u2019</p></dd>", "a[href=\"#package-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Package Contents<a class=\"headerlink\" href=\"#package-contents\" title=\"Link to this heading\">#</a></h2><h3>Data<a class=\"headerlink\" href=\"#data\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#good_devops_practice.__version__\"]": "<dt class=\"sig sig-object py\" id=\"good_devops_practice.__version__\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">good_devops_practice.</span></span><span class=\"sig-name descname\"><span class=\"pre\">__version__</span></span></dt><dd><p>\u2018version(\u2026)\u2019</p></dd>", "a[href=\"#module-good_devops_practice\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-good_devops_practice\" title=\"good_devops_practice\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">good_devops_practice</span></code></a><a class=\"headerlink\" href=\"#module-good_devops_practice\" title=\"Link to this heading\">#</a></h1><p>A Python package stub for use with python-semantic-release.</p>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#data\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Data<a class=\"headerlink\" href=\"#data\" title=\"Link to this heading\">#</a></h3>"}
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
