$(document).ready(function() {
    $("#markdown-toc > li").each(function() {
        var content = $(this).children(":first").html();
        if (content.indexOf("Annex") == 0) {
            var annexID = content.substring(6, 7)
            var items = $(this).find("li").add(this);

            items.attr("data-annexid", annexID);
            items.addClass("annex");
        }
        if (content.indexOf("Bibliography") == 0) {
            $(this).find("li").add(this).addClass("bibliography");
        }
    });
});