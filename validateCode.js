/**
 * @validateCode
 * @author Tyrone Yves Chen
 * @version 1.0
 * @description 验证码验证
 * @disclaimer 我只是代码的搬运工，借鉴于网上各位大佬的代码修改后在项目中使用，如有雷同，纯属巧合
 * @PS：汤圆萌萌哒~
 * Param ：
 * validateCodeOptions = {
        len:4,(默认4，可选)
        callbackFn:function (data) {

        }
    },
 validateCodeTestCode = {
        inputValue:"",
        callbackFn:function (data) {

        }
    };
 */

(function (window) {
    var validateCode = function (options) {
        var len = 4;
        this.options = options;
        this.options.len = options.len || len;
        this.init();
    };

    validateCode.prototype.init = function () {
        this.result = this.createCode(this.options.len);
        this.options.callbackFn(this.result);
    };

    validateCode.prototype.createCode = function (len) {
        var seed = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789"]; //创建需要的数据数组
        var idx,i;
        var result = ''; //返回的结果变量
        for (i=0; i<len; i++){ //根据指定的长度
            idx = Math.floor(Math.random()*3); //获得随机数据的整数部分-获取一个随机整数
            result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);//根据随机数获取数据中一个值
        }
        return result; //返回随机结果
    };

    validateCode.prototype.testCode = function (options) {
        var result = this.result,
            inputValue = options.inputValue,
            callbackFn = options.callbackFn;
        if (result == inputValue) callbackFn(true);
        else callbackFn(false)
    };

    window.validateCode = validateCode;
})(window);
