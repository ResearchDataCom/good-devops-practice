selector_to_html = {"a[href=\"#effort-estimation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Effort Estimation<a class=\"headerlink\" href=\"#effort-estimation\" title=\"Link to this heading\">#</a></h2><p>Level-of-effort estimates scale following the\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Fibonacci_sequence#\">Fibonacci sequence</a>, with thirteen (13)\npoints representing approximately two (2) work weeks total effort.\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/The_Mythical_Man-Month#\">Work cannot always be parallelized</a>, so\nconsider refactoring user stories larger than twenty-one (21) points\ninto smaller, more managable collections of work.  Ideally, the\nproject team can complete a user story in one or two sprints\u2014a\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/elapsed_real_time#\">calendar month</a> at most.</p>", "a[href=\"#id1\"]": "<table class=\"table\" id=\"id1\">\n<caption><span class=\"caption-text\">Normalizing Story Points</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this table\">#</a></caption>\n<thead>\n<tr class=\"row-odd\"><th class=\"head\"><p>Work Amount</p></th>\n<th class=\"head\"><p>Story Points</p></th>\n<th class=\"head\"><p>Equivalent Activities</p></th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"row-even\"><td><p>1 day</p></td>\n<td><p>1 point</p></td>\n<td><p>incident, task, commit</p></td>\n</tr>\n<tr class=\"row-odd\"><td><p>2 weeks</p></td>\n<td><p>13 points</p></td>\n<td><p>story, pull request</p></td>\n</tr>\n<tr class=\"row-even\"><td><p>3 months</p></td>\n<td><p>55 points</p></td>\n<td><p>feature, release</p></td>\n</tr>\n</tbody>\n</table>", "a[href=\"#sprint-planning-and-review\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sprint Planning and Review<a class=\"headerlink\" href=\"#sprint-planning-and-review\" title=\"Link to this heading\">#</a></h1><h2>Effort Estimation<a class=\"headerlink\" href=\"#effort-estimation\" title=\"Link to this heading\">#</a></h2><p>Level-of-effort estimates scale following the\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Fibonacci_sequence#\">Fibonacci sequence</a>, with thirteen (13)\npoints representing approximately two (2) work weeks total effort.\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/The_Mythical_Man-Month#\">Work cannot always be parallelized</a>, so\nconsider refactoring user stories larger than twenty-one (21) points\ninto smaller, more managable collections of work.  Ideally, the\nproject team can complete a user story in one or two sprints\u2014a\n<a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/elapsed_real_time#\">calendar month</a> at most.</p>"}
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
