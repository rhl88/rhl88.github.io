### 读取并下载文件
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


### 将网页文件设置为窗口工具

演示：[纸张厚度计算器](//www.renhuali.cn/demo/industry/PaperThicknessCalculator.html)中的保存到本地的文件

代码
```javascript
//窗口大小
window.resizeTo(300,290); 
//窗口位置
window.moveTo(screen.availWidth/2,screen.availHeight/2); 
```
