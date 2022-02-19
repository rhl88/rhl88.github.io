### 表单
#### 禁止浏览器从COOKIE获取表单数据与禁止浏览器填充表单
经常碰到填写表单的时候自动填写或者有个列表，其实也没啥。关键的是客户总是把这个锅甩给你，怪你……  
没办法，找了好多办法，暂时能用阻止cookie填充表单  
只需在 input 的增加 autocomplete="off" 完整实例代码：

``` html
<input autocomplete="off" type="text" name="endtime" placeholder="有效日期" value="" >
```

### A标签

#### 电话
``` html
<a href="tel:400-888-9999">400-888-9999</a>
```

#### 短信
``` html
<a href="sms:10086">发送</a>
```

#### 邮件

##### 启动发送邮件

``` html
<a href="mailto:johndoe@sample.com">发送邮件</a>
```

##### 发送邮添加抄送
收件地址后添加?cc=开头，可添加抄送地址（Android可能存在兼容问题）
``` html
<a href="mailto:a@a.com?cc=b@b.com">点击我发邮件</a>
```

##### 发送邮添加密件抄送
跟着抄送地址后，写上&bcc=,可添加密件抄送地址（Android可能存在兼容问题）
``` html
<a href="mailto:a@a.com?cc=b@b.com&bcc=c@c.com">点击我发邮件</a>
```
##### 发送邮多个收件人
包含多个收件人、抄送、密件抄送人，用分号(;)隔开多个邮件人的地址
``` html
<a href="mailto:a@a.com;b@b.com">点击我发邮件</a>
```
##### 发送邮包含主题
包含主题，用?subject=
``` html
<a href="mailto:a@a.com?subject=邮件主题">点击我发邮件</a>
```

##### 发送邮包含内容
包含内容，用?body=;如内容包含文本，使用%0A给文本换行,%20空格
``` html
<a href="mailto:a@a.com?body=邮件主题内容%0A期待您的到来">点击我发邮件</a>
```


##### 发送邮内容包含链接
内容包含链接，含http(s)://等的文本自动转化为链接
``` html
<a href="mailto:a@a.com?body=http://www.baidu.com">点击我发邮件</a>
```

##### 发送邮内容包含图片
内容包含图片（PC不支持）
``` html
<a href="mailto:a@a.com?body=<img src='images/1.jpg' />">点击我发邮件</a>
```

##### 完整示例
``` html
<a href="mailto:a@a.com;b@b.com?cc=c@c.com&bcc=d@d.com&subject=[邮件主题]&body=哈哈哈哈%0A%0Ahttp://www.baidu.com%0A%0A<img src='images/1.jpg' />">点击我发邮件</a>
```
