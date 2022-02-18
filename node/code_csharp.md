### 正则判断是否为数字

``` csharp
var erpNoID= "aaaaa";
Regex regex = new Regex("[^0-9]");

if(!regex.IsMatch(erpNoID)){
//是数字
}else{
//不是数字
}

``` 

### 字符串替换
``` csharp
var test = "j_795_1104_000003_致我们单纯的小美好_一二八九_32P_2份";
test=test.Replace("份","个");
```
结果为：`j_795_1104_000003_致我们单纯的小美好_一二八九_32P_2个`

### 正则替换特殊字符

``` csharp
var data ="GD-104-21123111258_转曲-t250g-d-1f_5张-2021年12月31日160427";

var test = Regex.Replace(data, "[ \\[ \\] \\^ \\-_*×――(^)$%~!@#$…&%￥—+=<>《》!！??？:：•`·、。，；,.;"‘’“”-]", "_").ToUpper();

``` 
结果为：`GD10421123111258转曲T250GD1F5张2021年12月31日160427`