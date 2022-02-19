### 基础常用

#### GET请求和POST请求
```javascript
$.post("/account/submit?type=Deals&orderid=1", {
	id: id,
	orderid: orderid
}, function(data) {
	layer.msg('Successful operation!', {
		icon: 1
	});
	setTimeout(function() { //使用  setTimeout（）方法设定定时2000毫秒
		window.location.reload(); //页面刷新
	}, 1000);
});
$.get("/account/submit?type=<?= $_GET['type'] ?>&setp=key&id=" + id, function(html) {

});
```

#### 延时执行
```javascript
setTimeout(function () {
//代码
}, 500);
```
#### 解析JSON为数组形式
```javascript
var res = JSON.parse(data);
res.url;
res.img;
```

### 字符验证

#### 判断是否为纯数字
```javascript
if(!isNaN(ival)){
 alert(val +"是数字");
} else{
alert(val +"不是数字");
}
```

#### 手机号码验证
```javascript
var phone =$("input[name='phone']").val();
var reg = /^1[0-9]{10}$/;
var flag = reg.test(phone);
if(!flag){
layer.alert('手机号码不正确！');
}
```

#### 邮箱验证
```javascript
var email =$("input[name='email']").val();
var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var flag = reg.test(email);
if(!flag){
layer.alert('邮箱格式不正确！');
}
```

### JS表单处理

#### 表单提交前的校验
```javascript
 <form id="book" action="${ctx}/frontPage/passFlight/GJbookPayValidate" class="plug_form" method="post" onsubmit="return checkMobile()">
 
 </form>
 
 <script>
 function checkMobile(){
 
 if(不想提交){
      return false;
 }else{
     return true;
 }
}
</script>
```

#### JQ获取数组表单内容
```javascript
<input type="text" name="keyword[]" placeholder="关键词" value="">
<input type="text" name="keyword[]" placeholder="关键词" value="">
<input type="text" name="keyword[]" placeholder="关键词" value="">
<input type="text" name="keyword[]" placeholder="关键词" value="">
<input type="text" name="keyword[]" placeholder="关键词" value="">
<input type="text" name="keyword[]" placeholder="关键词" value="">

<script>
var keyword = [];
jQuery("input[name^='keyword']").each(function(i) {
    keyword[i] = jQuery(this).val();
    //alert(jQuery(this).val()); //返回每个值
});
if (keyword == '') {
    layer.msg('关键词不能为空', {
        icon: 2
    });
    return false;
}
</script>
```

#### 设置表单值
```javascript
$("input[name='name']").val(obj.name);
```

#### 获取表单内容
```javascript
$("input[name='name']").val()
```

#### 获取多个下拉选中
```javascript
var tags = new Array();
$.each($("#item_tags").find('option:selected'), function (index, item) {
       tags.push($(item).val());
});
```

#### 获取下拉选中值
```javascript
$("#gid").find('option:selected').val();
//或
$("select[name='region']").val();
```

#### 获取下拉中ID值
```javascript
var yt = document.getElementById("yt").value;
```

#### 获取多选选中值
```javascript
//jquery获取复选框值    
var chk_value =[];//定义一个数组    
$('input[name="interest"]:checked').each(function(){//遍历每一个名字为interest的复选框，其中选中的执行函数    
  chk_value.push($(this).val());//将选中的值添加到数组chk_value中    
});
```

#### 获取单选选中值
```javascript
$(':radio[name="gotype"]:checked').val();
```


#### 读取与设置id中的data
```javascript
$("#plus").data("display"); //读取id=plus 中的 data-display 的值
$("#plus").data("display","asdfasdfaf"); //设置id=plus 中的 data-display 的值
```

#### JQ修改自定义值

```javascript
$("标签类名").attr('aria-selected','改变的值');
```

#### JS获取ID内的表单转为数组并POST
```javascript
        var data=[];
        $("#formhidden").find("input").each(function(i,item){
            var obj=new Object();
            var name=$(this).attr('name');
            var value=$(this).val();
            obj[name]=value;
            data.push(obj);
        })
        $.post("/ajax.php", {data}, function (count) {
            $("#ajaxcount").html(count);
        });
```
### 动态处理

#### 添加和移除CSS样式

有时候需要添加CSS样式和移除CSS样式，如添加display属性，设为隐藏。有时候需要移除display属性。

##### jQuery添加与移除CSS样式
注意：当其中一种不支持时，就尝试另一种：
```javascript
$("#show").removeAttr("style");  //移除
$("#show").attr("style","");  //设置
$('#tab1').css("display","block"); //设置
$("#add").addClass("btn-default"); //添加
```
##### JS添加或移除CSS样式
```javascript
document.getElementById('tab1').style.display="none";//设置样式
document.getElementById("tab1").removeAttribute("style");//移除样式
```


#### 全选-反选-取选
```javascript
<div id="list">
<input type="checkbox" name="ids" id="all" value="1" />
<input type="checkbox" name="ids" id="all" value="2" />
<input type="checkbox" name="ids" id="all" value="3" />
<input type="checkbox" name="ids" id="all" value="4" />
</div>

<input type="button" value="全选/取消" class="btn btn-default" id="all">
<input type="button" value="全选" class="btn btn-default" id="selectAll">
<input type="button" value="全不选" class="btn btn-default" id="unSelect">
<input type="button" value="反选" class="btn btn-default" id="list">

$(function () {
        //全选或全不选
        $("#all").click(function () {
            if (this.checked) {
                $("#list :checkbox").prop("checked", true);
            } else {
                $("#list :checkbox").prop("checked", false);
            }
        });
        //全选  
        $("#selectAll").click(function () {
            $("#list :checkbox,#all").prop("checked", true);
        });
        //全不选
        $("#unSelect").click(function () {
            $("#list :checkbox,#all").prop("checked", false);
        });

        //设置全选复选框
        $("#list :checkbox").click(function () {
            allchk();
        });

    });
```

#### 替换指定ID的内容
```javascript
$('#contents').html("替换ID的内容");
```


#### 获取指定ID内的HTML
```javascript
$('#contents').html();
```

#### 根据ID设置宽度
```javascript
$("#id").css('width','100px');
```

#### 根据id删除元素

```javascript
$( "#div1" ).remove();
```

#### 设置ID内的class
```javascript
$("#plus").attr('class', 'fa fa-plus');
```

### 数据处理

#### 复制内容
##### 单行复制
```javascript
function copyText(text, callback) { // text: 要复制的内容， callback: 回调
        var tag = document.createElement('input');
        tag.setAttribute('id', 'cp_hgz_input');
        tag.value = text;
        document.getElementsByTagName('body')[0].appendChild(tag);
        document.getElementById('cp_hgz_input').select();
        document.execCommand('copy');
        document.getElementById('cp_hgz_input').remove();
        if (callback) {
            callback(text)
        }
    }
function xCopy(info) {
        copyText(info, function () {
            layer.alert('复制成功！快去分享吧！');
        })
    }
```
##### 多行复制

```javascript
    /**
     * 复制到剪切板
     */
    function copyContent() {
      var name = '姓名：' + $('#name').text() + " \n";
      var detail = '详细地址：' + $('#detail').text() + " \n";
      var city = '城市：' + $('#city').text() + " \n";
      var postcode = '邮编：' + $('#postcode').text() + " \n";
      var country = '国家：United Kingdom' + " \n";
      var telephone = '电话：' + $('#telephone').text() + " \n";
      var content = name.concat(detail, city, postcode, country, telephone);
 
      // 使用textarea支持换行，使用input不支持换行
      const textarea = document.createElement('textarea');
      textarea.value = content;
      document.body.appendChild(textarea);
 
      textarea.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        alert(content);
      }
      document.body.removeChild(textarea);
    }
```

#### 字符转换为数组

```javascript
var data = '123,23123,123,123,234,234';
var arr = data.split(',');
```

#### 数组转换为字符
```javascript
var data = ['a','b','c'];
var arr = data.join(',');
```

### JS读取并下载文件
演示：[纸张厚度计算器](//www.renhuali.cn/demo/industry/PaperThicknessCalculator.html)中的保存到本地

代码

```javascript
//另存文件
function saveCode() {
    $.get("PaperThicknessCalculator.hta", function (data) {
        export_raw('纸张厚度计算器.hta', data);
        });
}
function fake_click(obj) {  
    var ev = document.createEvent("MouseEvents");  
    ev.initMouseEvent(  
        "click", true, false, window, 0, 0, 0, 0, 0  
        , false, false, false, false, 0, null  
        );  
    obj.dispatchEvent(ev);  
} 
function export_raw(name, data) {  
    var urlObject = window.URL || window.webkitURL || window;  
  
    var export_blob = new Blob([data]);  
  
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")  
    save_link.href = urlObject.createObjectURL(export_blob);  
    save_link.download = name;  
    fake_click(save_link);  
}  
```

### 重新加载引入的JS文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./jquery-3.3.1.min.js"></script>
 
</head>
<body>
<button onclick="reload()">load</button>
    <script>
        //需要重新加载的js文件列表
        var scriptList=[
            {src:"./test.js",id:"js1"},
            {src:"./test2.js",id:"js2"},
            {src:"./test3.js",id:"js3"}
            ]
        function reload() {
            scriptList.forEach(x=>{
                loadJs(x.src,x.id);
            })
        }
        //重新加载js        
        function loadJs(file,id)
        {
            $("#"+id).remove();
            $("<scri"+"pt >"+"</scr"+"ipt>").attr({id:id,src:file,type:'text/javascript'}).appendTo($('body'));
        }
    </script>
    <script src="./test.js" type="text/javascript" id="js1"></script>
    <script src="./test2.js" type="text/javascript" id="js2"></script>
    <script src="./test3.js" type="text/javascript" id="js3"></script>
</body>
</html>
```

### JS将网页文件设置为窗口工具

演示：[纸张厚度计算器](//www.renhuali.cn/demo/industry/PaperThicknessCalculator.html)中的保存到本地的文件

代码
```javascript
//窗口大小
window.resizeTo(300,290); 
//窗口位置
window.moveTo(screen.availWidth/2,screen.availHeight/2); 
```
