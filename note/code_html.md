### 表单
#### 禁止浏览器从COOKIE获取表单数据与禁止浏览器填充表单
经常碰到填写表单的时候自动填写或者有个列表，其实也没啥。关键的是客户总是把这个锅甩给你，怪你……  
没办法，找了好多办法，暂时能用阻止cookie填充表单  
只需在 input 的增加 autocomplete="off" 完整实例代码：

``` html
<input autocomplete="off" type="text" name="endtime" placeholder="有效日期" value="" >
```
