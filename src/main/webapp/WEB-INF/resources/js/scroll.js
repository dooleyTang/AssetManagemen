$.fn.extend({
    scrollOnce:function(onScrollOnce){
        var scrollTime = undefined;
        var scrollTopOld = 0;
        $(this).scroll(function(){
            scrollTime = new Date();
        });
        setInterval(function(){
            if (scrollTime != undefined && new Date() - scrollTime > 200) {
                scrollTime = undefined;
                onScrollOnce(scrollTopOld, $(this).scrollTop());
                scrollTopOld = $(this).scrollTop();
            }
        }, 50);
    },
    scrollEnd: function(onScrollEnd){
        $(this).scrollOnce(function(){
            var scrollTop = $(document).scrollTop();
            var windowHeight = $(window).height();
            var documentHeight = $(document).height();
            if (scrollTop + windowHeight == documentHeight) {
                onScrollEnd();
            }
        });
    }
});



