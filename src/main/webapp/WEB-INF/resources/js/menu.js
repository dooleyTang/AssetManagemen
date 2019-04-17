function menuManagerBuilder() {
    var url;
    var menuData;

    // 设定frame自适应窗口高度
    var setFrame = function () {
        var windowHeight = $(window).height();
        var headerHight = $(".headeri-yw").height();
        $("iframe").height(windowHeight - headerHight - 0 + 'px');
    };

    // 点击父菜单的时候切换子菜单 menuId 父菜单id   childMenuId 子菜单id
    var loadChileMenu = function (menuId, childMenuId) {
        var $MenuChild = $(".menu-child-yw > ul[data-menu-id="+childMenuId+"]");
        var $MenuParent = $(".menu-yw > ul.abc > li[data-menu-id="+menuId+"]");
        $MenuChild.show();
        $(".menu-child-yw > ul[data-menu-id]").not($MenuChild).hide();
        var offLeft = $MenuParent.offset().left;
        var childWidth = $MenuChild.width();
        var windowWidth = $(window).width();
        var childRight = windowWidth - offLeft - childWidth + 30;
        if (childRight < 0) childRight = 0;
        $MenuChild.css("margin-right", childRight + "px");
    };

    var setParentClick = function () {
        $(".menu-yw > ul.abc > li").click(function () {
            var menuId = $(this).attr("data-menu-id");
            var childMenuId = $(this).attr("data-child-menu-id");
            var $menuChild = $(".menu-child-yw");
            if (childMenuId == "") {
                $menuChild.fadeOut(400, setFrame);
            } else {
                $menuChild.hide(0);
                $menuChild.fadeIn(400);
                loadChileMenu(menuId, childMenuId);
                setFrame();
            }
            $(".menu-yw > ul.abc > li.active").removeClass("active");
            $(".menu-yw > ul.abc > li[data-menu-id="+menuId+"]").addClass("active");
            if(!"active" == $(".menu-yw > ul.abc > li:first").attr("class")){
            	$(".menu-child-yw > ul:visible > li:first > a").click();
            }
        });
    };

    var setChildClick = function () {
        $(".menu-child-yw > ul > li").click(function () {
            var childMenuId = $(this).attr("data-menu-id");
            $(".menu-child-yw > ul > li.active").removeClass("active");
            $(".menu-child-yw > ul > li[data-menu-id="+childMenuId+"]").addClass("active");
        });

        $(".menu-child-yw > ul > li > a").click(function () {
            var childMenuUrl = $(this).attr("data-menu-url");
            $("iframe").attr("src", projectName+childMenuUrl);
        });
    };

    return function(operate, options) {
        if (operate == "setFrame") {
            setFrame();
        } else if (operate == "load") {
            url = options.url;
            ajax.getData(url, {}, function (data) {
                menuData = data;

                var html1 = "";
                var html2 = "";
                $.each(data, function (i, n) {
                    if (n.menuLevel == 1) {
                        html1 +=
                            "<li data-menu-id='"+n.id+"' data-child-menu-id='"+n.id+"'>" +
                            "   <a><i class='fa "+n.menuIcon+"'></i>"+n.menuCaption+"</a>" +
                            "</li>";
                        html2 +=
                            "<ul data-menu-id='"+n.id+"'>";
                        $.each(data, function (j, m) {
                            if (m.menuLevel == 2 && m.parentId == n.id) {
                                html2 +=
                                    "<li data-menu-id='"+m.id+"'>" +
                                    "   <a href='javascript:void(0);' data-menu-url='"+m.menuUrl+"'>" +
                                    "       <i class='margin-r-5 fa "+m.menuIcon+"'></i>"+m.menuCaption+
                                    "   </a>" +
                                    "</li>";
                            }
                        });
                        html2 += "</ul>";
                    }
                });
                $(".menu-yw > ul.abc").html(html1);
                $(".menu-child-yw").html(html2);

                setParentClick();
                setChildClick();

                $(".menu-yw > ul.abc > li:first").click();
                $(".menu-child-yw > ul:visible > li:first").click();
                $(".menu-child-yw > ul:visible > li:first > a").click();
            });
        } else if (operate == "getData") {
            return menuData;
        } else if (operate == "hide") {
            if ($(".headeri-yw").hasClass("mini-yw") == false) {
                $(".headeri-yw").addClass("mini-yw");
                $("iframe").height($("iframe").height() + 80 + "px");
            }
        } else if (operate = "show") {
            if ($(".headeri-yw").hasClass("mini-yw") == true) {
                $(".headeri-yw").removeClass("mini-yw");
                $("iframe").height($("iframe").height() - 80 + "px");
            }
        }
    }
}

$(function () {
    var menuManager = menuManagerBuilder();

    $(window).resize(function () {
        menuManager("setFrame");
    });

    menuManager("setFrame");

    menuManager("load", {url: publicData.urls.mainten.systemMenu.getYunWeiMenu});

    //菜单自动隐藏部分------------------------------->>>>>>>>>>>>>>> BEGIN
/*    var timeOutId = setTimeout(function () {
        menuManager("hide");
    }, 5000);

    $(".menu-child").mouseenter(function () {
        menuManager("show");
    });

    $(".menu-child, header, .menu-child *, header *").mouseenter(function () {
        clearTimeout(timeOutId);
        console.info("clearTimeout");
    });

    $(".menu-child, header").mouseleave(function () {
        timeOutId = setTimeout(function () {
            menuManager("hide");
        }, 2000);
    });*/
    //菜单自动隐藏部分------------------------------->>>>>>>>>>>>>>> BEGIN

});

