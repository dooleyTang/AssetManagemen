/**
 * Created by XiaoXiao on 2017/1/5.
 * 记录所有的公共变量
 */
var projectName =  "/zhkp";

var publicData = {
    urls: {
        mainten: {
        	login:{
        		checkLogin: projectName + "/login/checkLogin",
        	},
            systemMenu: {
                getYunWeiMenu: projectName + "/mainten/systemMenu/getYunWeiMenu",
                getFuWuMenu: projectName + "/mainten/systemMenu/getFuWuMenu",
                getFenXiMenu: projectName + "/mainten/systemMenu/getFenXiMenu",
                toMenu: projectName + "/mainten/systemMenu/toMenu",
                getTopMenu: projectName + "/mainten/systemMenu/getTopMenu",
                getPage: projectName + "/mainten/systemMenu/getPage",
                getTreeGrid: projectName + "/mainten/systemMenu/getTreeGrid",
                add: projectName + "/mainten/systemMenu/add",
                edt: projectName + "/mainten/systemMenu/edt",
                del: projectName + "/mainten/systemMenu/del"
            },
            logAudit: {
            	getSystemLogPage: projectName + "/mainten/logAudit/getSystemLogPage",
            },
            systemUser:{
                getUserPage: projectName + "/mainten/systemUser/getUserPage",
                getUserRole: projectName + "/mainten/systemUser/getUserRole",
                setUserRole: projectName + "/mainten/systemUser/setUserRole",
                setInterfaceRole: projectName + "/mainten/systemUser/setInterfaceRole",
                setDbRole: projectName + "/mainten/systemUser/setDbRole",
                setTableRole: projectName + "/mainten/systemUser/setTableRole",
                addUser: projectName + "/mainten/systemUser/addUser",
                delUser: projectName + "/mainten/systemUser/delUser",
                edtUser: projectName + "/mainten/systemUser/edtUser",
                updateUserStatus: projectName + "/mainten/systemUser/updateUserStatus",
                changePassWord: projectName + "/mainten/systemUser/changePassWord",
            },
            systemRole:{
            	getRolePage: projectName + "/mainten/systemRole/getRolePage",
            	add: projectName + "/mainten/systemRole/add",
                edt: projectName + "/mainten/systemRole/edt",
                del: projectName + "/mainten/systemRole/del",
                getRoleMenu: projectName + "/mainten/systemRole/getRoleMenu",
                setRoleMenu: projectName + "/mainten/systemRole/setRoleMenu",
                getRoleGrid: projectName + "/mainten/systemRole/getRoleGrid",
                getRoleInterface: projectName + "/mainten/systemRole/getRoleInterface",
                getDbRole: projectName + "/mainten/systemRole/getDbRole",
                getTableRole: projectName + "/mainten/systemRole/getTableRole",
                updateRoleStatus: projectName + "/mainten/systemRole/updateRoleStatus"
            },
            teachingQuality:{
            	getStudentEvaluation: projectName + "/mainten/teachingQuality/getStudentEvaluation",
            	getDeptTeacherList: projectName + "/mainten/teachingQuality/getDeptTeacherList?timeStamp=" + new Date().getTime(),
            	getNextDeptTeacher: projectName + "/mainten/teachingQuality/getNextDeptTeacher?timeStamp=" + new Date().getTime(),
            	importTemplate: projectName + "/mainten/teachingQuality/importTemplate",
            	import: projectName + "/mainten/teachingQuality/import",
            	export: projectName + "/mainten/teachingQuality/export",
            	getGZGFPage: projectName + "/mainten/teachingQuality/getGZGFPage",
            },
            onlineCourse:{
            	getOnlineCoursePage: projectName + "/mainten/onlineCourse/getOnlineCoursePage",
            	getShOnlineCoursePage: projectName + "/mainten/onlineCourse/getShOnlineCoursePage",
            	del: projectName + "/mainten/onlineCourse/del",
            	add: projectName + "/mainten/onlineCourse/add",
            	edt: projectName + "/mainten/onlineCourse/edt"
            }, 
            teachingsubject:{
            	getTeachingSubjectPage: projectName + "/mainten/teachingsubject/getTeachingSubjectPage",
            	getShTeachingSubjectPage: projectName + "/mainten/teachingsubject/getShTeachingSubjectPage",
            	del: projectName + "/mainten/teachingsubject/del",
            	add: projectName + "/mainten/teachingsubject/add",
            	edt: projectName + "/mainten/teachingsubject/edt"
            },
            achievement:{
            	getAchievementPage: projectName + "/mainten/achievement/getAchievementPage",
            	getShAchievementPage: projectName + "/mainten/achievement/getShAchievementPage",
            	del: projectName + "/mainten/achievement/del",
            	add: projectName + "/mainten/achievement/add",
            	edt: projectName + "/mainten/achievement/edt"
            },
            jglw:{
            	getJglWTable: projectName + "/mainten/jglw/getJglWTable",
            	getShJglWTable: projectName + "/mainten/jglw/getShJglWTable",
            	del: projectName + "/mainten/jglw/del",
            	add: projectName + "/mainten/jglw/add",
            	edt: projectName + "/mainten/jglw/edt",
              	sh: projectName + "/mainten/jglw/sh",
            	getShJgLw: projectName + "/mainten/jglw/getShJgLw",
            	upload: projectName + "/mainten/jglw/upload",
            	upload: projectName + "/mainten/jglw/upload",
            },

            jxpbhj:{
            	getJxPbHjPage: projectName + "/mainten/jxpbhj/getJxPbHjPage",
            	getShJxPbHjPage: projectName + "/mainten/jxpbhj/getShJxPbHjPage",
            	del: projectName + "/mainten/jxpbhj/del",
            	add: projectName + "/mainten/jxpbhj/add",
            	edt: projectName + "/mainten/jxpbhj/edt"
            },
            cbjc:{
            	getCbJcTable: projectName + "/mainten/cbjc/getCbJcTable",
            	getShCbJcTable: projectName + "/mainten/cbjc/getShCbJcTable",
            	del: projectName + "/mainten/cbjc/del",
            	add: projectName + "/mainten/cbjc/add",
            	edt: projectName + "/mainten/cbjc/edt"
            },
            xbjc:{
            	getXbJcTable: projectName + "/mainten/xbjc/getXbJcTable",
            	getShXbJcTable: projectName + "/mainten/xbjc/getShXbJcTable",
            	del: projectName + "/mainten/xbjc/del",
            	add: projectName + "/mainten/xbjc/add",
            	edt: projectName + "/mainten/xbjc/edt"
            },
            workSpecs:{
            	add: projectName + "/mainten/workspecs/add",
            	edt: projectName + "/mainten/workspecs/edt",
            	del: projectName + "/mainten/workspecs/del"
            },
            cxcy:{
            	getCxCyPage: projectName + "/mainten/cxcy/getCxCyPage",
            	getShCxCyPage: projectName + "/mainten/cxcy/getShCxCyPage",
            	add: projectName + "/mainten/cxcy/add",
            	edt: projectName + "/mainten/cxcy/edt",
            	del: projectName + "/mainten/cxcy/del"
            },
            guideStudent:{
            	getGuideStudentPage: projectName + "/mainten/guideStudent/getGuideStudentPage",
            	getShGuideStudentPage: projectName + "/mainten/guideStudent/getShGuideStudentPage",
            	del: projectName + "/mainten/guideStudent/del",
            	add: projectName + "/mainten/guideStudent/add",
            	edt: projectName + "/mainten/guideStudent/edt"
            },
            kcjs:{
            	getKcJsPage: projectName + "/mainten/kcjs/getKcJsPage",
            	getShKcJsPage: projectName + "/mainten/kcjs/getShKcJsPage",
            	del: projectName + "/mainten/kcjs/del",
            	add: projectName + "/mainten/kcjs/add",
            	edt: projectName + "/mainten/kcjs/edt"
            },
            zyjs:{
            	getZyJsPage: projectName + "/mainten/zyjs/getZyJsPage",
            	getShZyJsPage: projectName + "/mainten/zyjs/getShZyJsPage",
            	del: projectName + "/mainten/zyjs/del",
            	add: projectName + "/mainten/zyjs/add",
            	edt: projectName + "/mainten/zyjs/edt"
            },
            sysxjd:{
            	getSySxJdPage: projectName + "/mainten/sysxjd/getSySxJdPage",
            	getShSySxJdPage: projectName + "/mainten/sysxjd/getShSySxJdPage",
            	del: projectName + "/mainten/sysxjd/del",
            	add: projectName + "/mainten/sysxjd/add",
            	edt: projectName + "/mainten/sysxjd/edt"
            },
            sdpc:{
            	getSdPcPage: projectName + "/mainten/sdpc/getSdPcPage",
            	getShSdPcPage: projectName + "/mainten/sdpc/getShSdPcPage",
            	del: projectName + "/mainten/sdpc/del",
            	add: projectName + "/mainten/sdpc/add",
            	edt: projectName + "/mainten/sdpc/edt"
          
            },
            ZfPm:{
            	getZfPm: projectName + "/mainten/ZfPm/getZfPm",
            }
            
        }
    }
};