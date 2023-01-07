1. ##### 使用`createWebHistory`应如何配置nginx：

   [**try_files**](http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files) ：按指定顺序检查文件是否存在，并使用第一个找到的文件进行请求处理；处理在当前上下文中执行。`*file*`文件的路径是根据 [root](http://nginx.org/en/docs/http/ngx_http_core_module.html#root)和[alias](http://nginx.org/en/docs/http/ngx_http_core_module.html#alias)指令从参数构造的 。可以通过在名称末尾指定斜杠来检查目录是否存在，例如“ `$uri/`”。如果未找到任何文件，则会进行内部重定向到 `*uri*`最后一个参数中指定的文件。

```tsx
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
```

```nginx
server
{
  #  listen 监听端口;
  # server_name 域名;
    index index.php index.html index.htm default.php default.htm default.html;
    root 文件路径;
  # ...
  # 在nginx配置转发的时候添加
   location / {
     try_files $uri $uri/ /index.html;
    }
}
```

