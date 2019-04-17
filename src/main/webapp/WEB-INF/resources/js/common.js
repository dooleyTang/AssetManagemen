
/**
 * Created by XiaoXiao on 2017/1/3.
 * common.js 这个js里面要放一些公共的函数
 */

// 处理class = middle 的块元素
function setMiddleBlock(){
    var middles = $(".middle");
    $.each(middles, function (i, n) {
        var selfHeight = $(n).height();
        var clientHeight = $(window).height();
        var marginTop = Math.round(clientHeight / 2 - selfHeight / 2);
        if (marginTop < 0) {
            marginTop = 0;
        }
        $(n).css("top", marginTop+'px');
    })
}

$(window).resize(function () {
    setMiddleBlock();
});

$(function () {
    setMiddleBlock();
});

// 对Date的扩展，将 Date 转化为指定格式的String
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

// 日期的增减处理
Date.prototype.add = function (dataField, diffValue) {
    switch (dataField) {
        case "yy":
            this.setFullYear(this.getFullYear() + diffValue);
            break;
        case "MM":
            this.setMonth(this.getMonth() + diffValue);
            break;
        case "dd":
            this.setDate(this.getDate() + diffValue);
            break;
        case "hh":
            this.setHours(this.getHours() + diffValue);
            break;
        case "mm":
            this.setMinutes(this.getMinutes() + diffValue);
            break;
        case "ss":
            this.setSeconds(this.getSeconds() + diffValue);
            break;
        default:
    }
    return this;
};

// 获取当前时间的月初
Date.prototype.monthBegin = function () {
    var yy = this.getFullYear();
    var mm = this.getMonth()+1;
    return new Date(yy+"/"+mm+"/01");
};

// 获取当前时间的月末
Date.prototype.monthEnd = function () {
    var yy = this.getFullYear();
    var mm = this.getMonth()+1;
    return (new Date(yy+"/"+mm+"/01")).add("MM", 1).add("dd", -1);
};

// 获取bootstrapTable的查询参数
var commonTools = {
    //将Bootstrap的param打包
    getBootstrapParams: function (params, $form) {
        var formData = undefined;
        if ($form != undefined && $form instanceof jQuery) {
            formData = $form.serializeObject();
        }
        return {
            pageStart : parseInt(params.offset),
            pageSize : parseInt(params.limit),
            pageNo: parseInt(params.offset)/parseInt(params.limit) + 1,
            sort: params.sort,
            order: params.order,
            params: formData
        } ;
    },

    //获取Object的数据
    getObjectData: function(object, field) {
        var fieldArray = field.split(".");
        var childObj = object;
        $.each(fieldArray, function(i, n) {
            childObj = childObj[n];
        });
        return childObj;
    },
    //从后台获取数据并填充select
    getSelectOptionData: function (url, params, $select, valueField, captionField, defaultList) {
        ajax.getData(url, params, function (data) {
            var html = "";
            if (defaultList != undefined && defaultList != null && defaultList instanceof Array) {
                $.each(defaultList, function (i, n) {
                    html += "<option value='"+commonTools.getObjectData(n,valueField)+"'>"+commonTools.getObjectData(n,captionField)+"</option>";
                });
            }
            $.each(data, function (i, n) {
                html += "<option value='"+commonTools.getObjectData(n,valueField)+"'>"+commonTools.getObjectData(n,captionField)+"</option>";
            });
            $select.html(html);
        });
    },
    //从后台获取数据并填充select(同步)
    getSelectSynOptionData: function (url, params, $select, valueField, captionField, defaultList) {
    	ajax.getSynData(url, params, function (data) {
    		var html = "";
    		if (defaultList != undefined && defaultList != null && defaultList instanceof Array) {
    			$.each(defaultList, function (i, n) {
    				html += "<option value='"+commonTools.getObjectData(n,valueField)+"'>"+commonTools.getObjectData(n,captionField)+"</option>";
    			});
    		}
    		$.each(data, function (i, n) {
    			html += "<option value='"+commonTools.getObjectData(n,valueField)+"'>"+commonTools.getObjectData(n,captionField)+"</option>";
    		});
    		$select.html(html);
    	});
    },
    //绑定数据到form表单
    setFormData: function(data, $form) {
        var $inputs = $form.find(":input").not(':button, :submit, :reset');
        $.each($inputs, function (j, m) {
            var $input = $(m);
            var fieldName = $input.attr("name");
            if(fieldName != undefined){
            	var value = commonTools.getObjectData(data, fieldName);
            }
            if (value == undefined) {
                value = "";
            }
            if ($input.is(":text")) {
                $input.val(value);
            } else if ($input.is("select")) {
                $input.val(value);
            } else if ($input.is(":hidden")) {
                $input.val(value);
            }else if ($input.is("textarea")) {
                $input.html(value);
            } else if ($input.is(":checked") || $input.is(":radio")) {
                $input.prop(value == $input.val());
                // 兼容iChcek插件
                if (value == $input.val()) {
                    $input.iCheck("check");
                } else {
                    $input.iCheck("uncheck");
                }
            }
        });
    }
};

//=======================form表单检测部分开始================================>>>>>>>>>>>>>>>>>>>>
var dataValidate = {
    isEmptyString : function (str) {
        return str == undefined || str == "" || str == null;
    },
    isEmail: function (str) {
        var re = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        return re.test(str);
    },
    isInt: function (str) {
        var re = new RegExp("^-?[0-9]+$");
        return re.test(str);
    },
    isFloat: function (str) {
        if (dataValidate.isInt(str)) {
            return true;
        } else {
            var re = new RegExp("^-?[0-9]+\.[0-9]+$");
            return re.test(str);
        }
    }
};

var formValidate = {
    validateInput: function ($input, onMessage) {
        var nullable = $input.attr("data-check-nullable");
        var isInt = $input.attr("data-check-int");
        var isFloat = $input.attr("data-check-float");
        var isEmail = $input.attr("data-check-email");
        var min = $input.attr("data-check-min");
        var max = $input.attr("data-check-max");
        var value = "";
        if ($input.is(":text")) {
            value = $input.val();
        } else if ($input.is("select")) {
            value = $input.val();
        } else if ($input.is("textarea")) {
            value = $input.html();
        }
        if (nullable == "false" && dataValidate.isEmptyString(value) == true) {
            if (onMessage != undefined) onMessage("该项内容不能为空");
            return;
        }
        if (isInt == "true" && value != "" && dataValidate.isInt(value) == false) {
            if (onMessage != undefined) onMessage("格式不正确，请填写整数格式");
            return;
        } else {
            if (min != "" && parseInt(value) < parseInt(min)) {
                if (onMessage != undefined) onMessage("该值不可小于"+min);
                return;
            }
            if (max != "" && parseInt(value) > parseInt(max)) {
                if (onMessage != undefined) onMessage("该值不可大于"+max);
                return;
            }
        }
        if (isFloat == "true" && value != "" && dataValidate.isFloat(value) == false) {
            if (onMessage != undefined) onMessage("格式不正确，请填写数字格式");
            return;
        } else {
            if (min != "" && parseInt(value) < parseFloat(min)) {
                if (onMessage != undefined) onMessage("该值不可小于"+min);
                return;
            }
            if (max != "" && parseInt(value) > parseFloat(max)) {
                if (onMessage != undefined) onMessage("该值不可大于"+max);
                return;
            }
        }
        if (isEmail == "true"&& value != ""  && dataValidate.isEmail(value) == false) {
            if (onMessage != undefined) onMessage("格式不正确，请填写邮箱格式");
            return;
        }
    },

    init: function ($form) {
        var $inputs = $form.find(":input").not(':button, :submit, :reset');
        $.each($inputs, function (j, m) {
            var $input = $(m);
            $input.blur(function () {
                formValidate.validateInput($input, function (msg) {
                    $input.tooltip({placement: "auto top", trigger: "manual", title: msg});
                    $input.tooltip("show");
                });
            });
            $input.focus(function () {
                $input.tooltip("hide");
            });
        });
    },

    clear: function ($form) {
        var $inputs = $form.find(":input").not(':button, :submit, :reset');
        $.each($inputs, function (j, m) {
            $(m).tooltip("hide");
        });
    }
};

//form表达检查输入项是否合法
$(function () {
    var $forms = $("form.form-validate");
    $.each($forms, function (i, n) {
        var $form = $(n);
        formValidate.init($form);
        $form.parents(".modal").on("show.bs.modal", function () {
            formValidate.clear($form);
        });
    });
});

// 为Bootstrat_Table封装column的formatter函数
var bootstrapFormatter = {
    booleanFormatter: function (value, row, index) {
        if (value == 1 || value == true) {
            return "是";
        } else {
            return "否";
        }
    },
    trueFormatter: function (value, row, index) {
    	if (value == "true") {
    		return "是";
    	}
    },
    statusFormatter: function (value, row, index) {
        if (value == 1 || value == true) {
            return "启用";
        } else {
            return "停用";
        }
    },
    operateFormatter: function (value, row, index) {
    	if (value == 1 || value == true) {
    		return '<button class="btn" type="button" style="padding:2px 6px;" onclick="updateStatus(\''+row.id+'\',\''+0+'\')">停用</button>';
    	} else {
    		return '<button class="btn btn-success" type="button" style="padding:2px 6px;" onclick="updateStatus(\''+row.id+'\',\''+1+'\')">启用</button>';
    	}
    },
    operateFormatter2: function (value, row, index) {
    	/*return [
				'<span><button onclick="updateordel(\''+row.id+'\',\''+row.subsetName+'\',\''+0+'\')" class="btn btn-default btn-sm rightSize detailBtn" type="button"><i class="fa fa-edit margin-r-5"></i> 修改</button>&nbsp;'
				+'<button onclick="updateordel(\''+row.id+'\',\''+row.subsetName+'\',\''+1+'\')" class="btn btn-default btn-sm rightSize detailBtn" type="button"><i class="fa fa-remove margin-r-5"></i> 删除</button></span>', ]
				.join('');*/
    	return [
				'<span style="text-align: center;display:block;"><a href="javascript:void(0)" onclick="updateordel(\''+row.id+'\',\''+row.subsetName+'\',\''+0+'\')" >修改</a>&nbsp;<a href="javascript:void(0)" onclick="updateordel(\''+row.id+'\',\''+row.subsetName+'\',\''+1+'\')" >删除</a></span>', ]
				.join('');
    },
    operateFormatter3: function (value, row, index) {
    	return [
    	        '<a href="javascript:void(0)" onclick="turnReferenceCode(\''+row.id+'\')" >'+row.subsetName+'</a>', ]
    	.join('');
    },
    isNormalFormatter: function (value, row, index) {
    	if (value == 1 || value == true) {
    		return "正常";
    	} else {
    		return "异常";
    	}
    },
    isSuccessFormatter: function (value, row, index) {
    	if (value == 1 || value == true) {
    		return "成功";
    	} else {
    		return "失败";
    	}
    },
    auditStatusFormatter: function (value, row, index) {
    	if (value == 1) {
    		return "审批通过";
    	}else if(value == 2){
    		return "审批不通过";
    	} else {
    		return "未审批";
    	}
    },
    dbTypeFormatter : function(value ,row,index) {
    	if (value == 1) {
    		return "MySQL";
    	} else if (value == 2) {
    		return "SQL Server";
    	} else {
    		return "Oracle";
    	}
    },
    dateShortFormatter: function (value, row, index) {
        if (value != null) {
            return new Date(value).Format("yyyy-MM-dd");
        }

    },
    dateLongFormatter: function (value, row, index) {
        if (value != null) {
            return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
        }
    },
    rowNumFormatter: function (value, row, index) {
    	return index+1;
    },
    nullAbleFormatter: function (value, row, index) {
    	if (value == 'Y') {
    		return "是";
    	}else {
    		return "否";
    	}
    },
    dataMonitorFormatter: function (value, row, index) {
    	if (value == '1') {
    		return "<span class=\"label label-danger\">异常</span>";
    	}else {
    		return "<span class=\"label label-success\">正常</span>";
    	}
    },
    showPicFormatter: function (value, row, index) {
    	if (value != null) {
    		return "<a href='javascript:void(0);' onclick=\"showPic('"+value+ "')\">查看</a>";
    	}
    }
};

//提示框再封装一层，免得以后要换
var messageBox = {
    error: function (msg) {
        Lobibox.notify("error",{title: "错误", msg:msg});
    },
    success: function (msg) {
        Lobibox.notify("success",{title: "恭喜", msg:msg});
    },
    warning: function (msg) {
        Lobibox.notify("warning",{title: "警告", msg:msg});
    },
    info: function (msg) {
        Lobibox.notify("info",{title: "提示", msg:msg});
    },
    confirm: function (msg, onOK, onCencel) {
        Lobibox.confirm({
            title: "请确认",
            msg: msg,
            buttons: {
                ok: {
                    "class": "btn btn-success",
                    closeOnClick: true
                },
                cancel: {
                    "class": "btn btn-default",
                    closeOnClick: true
                }
            },
            callback: function ($this, type) {
                if (type === "ok") {
                    onOK();
                } else if (type == "cancel"){
                    onCancel();
                }
            }
        });
    }


};



