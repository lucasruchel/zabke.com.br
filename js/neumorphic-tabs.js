! function(t) {
    t.fn.neumorphicTabs = function() {
        return t(this).each(function() {
            let a = t(this).find(".neumorphic__navigation"),
                i = t(this).find(".neumorphic__content");
            a.append("<div class='tabs--fx'/>");
            let n = a.find(".active").length ? a.find(".active") : a.children().first();
            a.attr("style", `--tab-width: ${n.outerWidth()}px; --tab-position: `);
            let e = a.find(".tabs--fx");

            function s(t) {
                e.height(t.outerHeight()).animate({
                    opacity: 1,
                    left: t.position().left + parseInt(t.css("marginLeft")),
                    width: t.outerWidth()
                })
            }
            s(n), a.children().not("div").each(function(i) {
                0 != i || a.find(".active").length || t(this).addClass("active"), t(this).attr("data-tab", i)
            }), i.children().each(function(i) {
                a.find(".active").attr("data-tab") == i ? t(this).addClass("active") : t(this).hide(), t(this).attr("data-tab", i)
            }), a.children().on("click", function() {
                let n = t(this);
                if (n.hasClass("active") || n.hasClass("tabs--fx")) return !1;
                a.children().each(function() {
                    t(this).addClass("wait-animation")
                }), s(n), a.find(".active").removeClass("active"), n.addClass("active"), i.find(".active").fadeOut().promise().done(function() {
                    i.find(`[data-tab='${n.attr("data-tab")}']`).addClass("active").fadeIn(), a.children().each(function() {
                        t(this).removeClass("wait-animation")
                    })
                })
            })
        }), this
    }
}(jQuery);