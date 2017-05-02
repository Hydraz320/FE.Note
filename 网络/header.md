# 头

## 请求头

|Header|解释|示例|
|---|---|---|
|Accept|指定客户端能够接收的内容类型|Accept: text/plain, text/html|
|Accept-Charset|浏览器可以接受的字符编码集。|Accept-Charset: iso-8859-5|
|Accept-Encoding|指定浏览器可以支持的web服务器返回内容压缩编码类型。|Accept-Encoding: compress, gzip|
|Accept-Language|浏览器可接受的语言|Accept-Language: en,zh|
|Cache-Control|指定请求和响应遵循的缓存机制|Cache-Control: no-cache|
|Connection|表示是否需要持久连接。（HTTP 1.1默认进行持久连接）|	Connection: close|
|Cookie|HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。|Cookie: $Version=1; Skin=new;|
|Content-Length|请求的内容长度|Content-Length: 348|
|Content-Type|请求的与实体对应的MIME信息|Content-Type: application/x-www-form-urlencoded|

## 响应头

|Header|解释|示例|
|---|---|---|
|Age|从原始服务器到代理缓存形成的估算时间（以秒计，非负）|Age: 12|
|Cache-Control|告诉所有的缓存机制是否可以缓存及哪种类型|Cache-Control: no-cache|
|Content-Encoding|web服务器支持的返回内容压缩编码类型。|Content-Encoding: gzip|
|Content-Language|响应体的语言|Content-Language: en,zh|
|Content-Length|响应体的长度|	Content-Length: 348|
|Content-Type|返回内容的MIME类型|Content-Type: text/html; charset=utf-8|
|Expires|响应过期的日期和时间|Expires: Thu, 01 Dec 2010 16:00:00 GMT|
|Set-Cookie|设置Http Cookie|Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1|
