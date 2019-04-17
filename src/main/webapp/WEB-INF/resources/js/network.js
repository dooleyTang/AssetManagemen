/**
 * Created by XiaoXiao on 2017/1/4.
 * 需要jquery的支持
 * 需要public.js
 */

var waiting = {
    inited: false,
    cnt: 0,
    init: function(){
        var waitingDom = $("<div>").addClass("waiting").hide();
        var middleDom = $("<div>").addClass("middle");
        for (var i = 1; i <= 9; i++) {
            middleDom.append("<div></div>");
        }
        $("body").append(waitingDom.append(middleDom));
        setMiddleBlock();
        waiting.inited = true;
    },
    showWaiting: function(){
        if (waiting.inited == false) {
            console.log("waiting init");
            waiting.init();
        }
        console.log("waiting show");
        if (waiting.cnt == 0) {
            $("div.waiting").show();
        }
        waiting.cnt = waiting.cnt + 1;
    },
    hideWaiting: function () {
        console.log("waiting hide");
        waiting.cnt = waiting.cnt - 1;
        if (waiting.cnt == 0) {
            $("div.waiting").hide();
        }
    }
};

var ajax = {
    httpCode: {
        OK: 200,
        timeOut: 202
    },
    errMsg: "网络连接错误，请稍后重试",
    timeoutMsg: "您的会话已经过期，请重新登录",
    defaultOnError: function(errMsg) {
        messageBox.error(errMsg);
    },
    defaultOnTimeout: function() {
        network.login.doLogOut();
        messageBox.error(ajax.timeoutMsg);
        setTimeout(function(){
            network.jump(urls.login.toLogin);
        }, 5000);
    },
    // 基本的ajax方法封装，实现了会话链条的传递
    doAjax: function (options) {
        var onSuccess = options.success;
        var onComplete = options.complete;
        var onError = options.error;

        options.beforeSend = function(xhr) {
            waiting.showWaiting();
        };
        options.success = function(data, status, xhr){
            if (data.code == "timeout") {
                ajax.defaultOnTimeout();
                return;
            }
            if (data.code == ajax.httpCode.OK) {
                if (onSuccess != undefined) {
                    onSuccess(data.body);
                }
            } else {
                ajax.defaultOnError(data.body);
                if (onError != undefined) {
                    onError(data.body);
                }
            }
        };
        options.error = function(xhr, textStatus, errorThrown){
            ajax.defaultOnError(ajax.errMsg);
            if (onError != undefined) {
                onError(ajax.errMsg);
            }
        };
        options.complete = function(event,xhr,options){
            waiting.hideWaiting();
            if (onComplete != undefined) {
                onComplete(event,xhr,options);
            }
        };

        $.ajax(options);
    },
    // 执行get方法 异步请求
    getData: function(url, data, success) {
        ajax.doAjax({
            type: "GET",
            url: url,
            data: data,
            success: success
        });
    },
    // 执行get方法 同步请求
    getSynData: function(url, data, success) {
    	ajax.doAjax({
    		type: "GET",
    		url: url,
    		data: data,
    		async: false,
    		success: success
    	});
    },
    // 执行post方法 异步请求
    postData: function(url, data, success) {
        ajax.doAjax({
            type: "POST",
            url: url,
            data: data,
            success: success
        });
    },
    // 执行post方法 同步请求
    postSynData: function(url, data, success) {
    	ajax.doAjax({
    		type: "POST",
    		url: url,
    		data: data,
    		async: false,
    		success: success
    	});
    }
};

