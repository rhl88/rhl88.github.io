### 基本语法
参考示范： https://www.robvanderwoude.com/htaexamples.php  
参考学习： https://www.cnblogs.com/nutix/p/5135642.html  
#### APPLICATION

[微软官方文档](https://docs.microsoft.com/en-us/previous-versions/ms536495(v=vs.85))

`<HTA:Application>` 标签说明

| 属性      | 说明 | 其它       |
| ------------ | ---- | ---------- |
| Applicationname      |   设置HTA的名称   |      |
| SingleInstance |   设置此应用程序是否同时只能运行一次，默认值为 no。   | no:多次 yes:一次 |
| WindowState |   设置窗口的初始大小，默认值为 normal。   | normal 默认大小<br>minmize 最小化 <br>maximize 最大化 |
| Borde | 设置窗口边框类型，默认值为 thick 。 | thick 指定窗口为粗边框<br>dialog window 指定窗口为对话框<br>none 指定窗口无边框<br>thin 指定窗口为窄边框（固定窗口大小） |
| border |  | 可选参数 thick、thin |
| BorderStyle | 设置窗口的边框格式，默认值为 normal 。 | normal 普通边框 <br>complex 凹凸格式组合边框 <br>raised 凸出的3D边框 <br>static 3D边框 <br>sunken 凹进的3D边框 |
| Caption | 设置窗口是否显示标题栏或标题，默认值为 yes | no:不显示 yes:显示 |
| MaximizeButton | 设置是否在窗口中显示最大化按钮，默认值为 yes。 | no:不显示 yes:显示 |
| MinimizeButton | 设置是否在窗口中显示最小化按钮，默认值为 yes。 | no:不显示 yes:显示 |
| SysMenu | 设置是否在窗口中显示系统菜单，默认值为 yes。 | no:不显示 yes:显示 |
| ShowInTaskBar | 设置是否在任务栏中显示此应用程序，默认值为 yes。 | no:不显示 yes:显示 |
| Icon | 设置应用程序在标题栏、任务栏的图标。 | no:不显示 yes:显示 |
| Version | 设置应用程序的版本，默认值为空。 |  |
| scroll | 设置滚动条，默认值为 yes。 | no:不显示 yes:显示 |
| contextmenu | 设置是否在窗口中显示文本菜单，默认值为 yes。（右键） | no:不显示 yes:显示 |
| selection | 设置是否在窗口中选择，默认值为 yes。 |  |

示范代码： 
``` hta
<HTA:APPLICATION 
	ID="ADSITest"
	VERSION="0.20 Beta"
	Applicationname="Test Tool"
	SYSMENU="yes"
	MAXIMIZEBUTTON="yes"
	MINIMIZEBUTTON="yes"
	BORDER="thin"
	INNERBORDER="no"
	SCROLL="auto"
	SingleInstance="yes"
	WindowState="maximize"
>
```
#### VBScript
`<script language="VBScript">` 说明
##### 设置窗口大小
宽：410 高450
``` VBScript
<script language="VBScript">window.resizeTo(410,450)</script>
```

##### 设置显示位置
通过计算显示

``` VBScript
<script language="VBScript">
window.moveTo(screen.availWidth/2,screen.availHeight/2);
</script>
```

##### 动态更新标题信息
标题栏会动态显示 `新的标题 - 2022年2月26日 星期六 9:17:21`

``` VBScript
<script language="VBScript">

    Sub Title
Document.title = "新的标题 - " & FormatDateTime(Now, 1) & " " & WeekdayName(WeekDay(now)) & " " & FormatDateTime(Now, 3)
    End Sub
 
Title:setInterval "Title()",500
</script>
```
