selector_to_html = {"a[href=\"#design-test-code-and-document-simultaneously\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">5. Design, test, code, and document simultaneously.<a class=\"headerlink\" href=\"#design-test-code-and-document-simultaneously\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#publish-and-deploy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">7. Publish and deploy.<a class=\"headerlink\" href=\"#publish-and-deploy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#get-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Get Started<a class=\"headerlink\" href=\"#get-started\" title=\"Link to this heading\">#</a></h1><h2>1. Prepare your workspace.<a class=\"headerlink\" href=\"#prepare-your-workspace\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#use-a-template\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3. Use a template.<a class=\"headerlink\" href=\"#use-a-template\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#track-changes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">4. Track changes.<a class=\"headerlink\" href=\"#track-changes\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#request-review\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">6. Request review.<a class=\"headerlink\" href=\"#request-review\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#iterate\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">8. Iterate.<a class=\"headerlink\" href=\"#iterate\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#prepare-your-workspace\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">1. Prepare your workspace.<a class=\"headerlink\" href=\"#prepare-your-workspace\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#log-the-request\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">2. Log the request.<a class=\"headerlink\" href=\"#log-the-request\" title=\"Link to this heading\">#</a></h2>"}
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
