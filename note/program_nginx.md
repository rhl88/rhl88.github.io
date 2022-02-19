### 反向代理
NGINX 反向代理 静态文件404 解决方法  
例如静态文件目录都在 static里，方法如下  
``` c
location ~ /static/.*\.(js|css|gif|jpg|jpeg|png|bmp|swf)$ { 
     proxy_pass https://127.0.0.1:9443;
}
``` csharp
