# validateCode
验证码验证

##使用示意

1. 引入js文件，例如

``` html
<script src="validateCode.js"></script>
```

2. 使用方法
``` javascript
    validateCode = new window.validateCode({        //初始化
            callbackFn: function (data) {
                vCode.innerText = data;
            }
        });

        validateCode.init();        //重新生成验证码

        validateCode.testCode({     //验证
            inputValue:val,
            callbackFn:function (data) {}
        });
    1.options:配置选项
```

##配置

以下默认配置
``` options
       validateCodeOptions = {
               len:4,       //(默认4，可选)
               callbackFn:function (data) {

               }
           },
           validateCodeTestCode = {
               inputValue:"",
               callbackFn:function (data) {

               }
           }
```

##说明
有问题，欢迎提出