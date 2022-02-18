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