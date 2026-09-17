selector_to_html = {"a[href=\"https://doi.org/10.6028/NIST.SP.800-218\"]": "\n<div>\n    <h3>Secure Software Development Framework (SSDF) version 1.1 :</h3>\n    \n    <p><b>Authors:</b> Murugiah Souppaya, Karen Scarfone, Donna Dodson</p>\n    \n    <p><b>Publisher:</b> National Institute of Standards and Technology (U.S.)</p>\n    <p><b>Published:</b> 2022-1-31</p>\n</div>", "a[href=\"#bibliography\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Bibliography<a class=\"headerlink\" href=\"#bibliography\" title=\"Link to this heading\">#</a></h1>"}
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
