/**
 * Created by wangyd on 2018/2/2.
 * 主要配置系统页面上使用的一些常量
 */
var constant = {
	"pageTitle" : function() {
		var titles = document.getElementsByTagName("title");
		for (var i = 0; i < titles.length; i ++) {
			titles[i].innerHTML = "综合考评系统";
		}
	}
};

window.onload = constant.pageTitle();