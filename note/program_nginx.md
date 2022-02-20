### 反向代理

#### 反向代理静态文件404解决方法  
例如静态文件目录都在 static里，方法如下  
``` c
location ~ /static/.*\.(js|css|gif|jpg|jpeg|png|bmp|swf)$ { 
     proxy_pass https://127.0.0.1:9443;
}
```
