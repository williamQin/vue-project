springboot + vue 前后端分离 笔记

一、 项目前端vuejs环境搭建

    https://segmentfault.com/a/1190000013950461

A. 安装node.js  

    1. 进入Node.js官网：https://nodejs.org/en/，选择下载并安装Node.js。
    2. 安装完毕，在控制台输入node -v 即可查看版本号，验证是否安装成功

B. 安装cnpm

    1.执行命令 npm install -g cnpm --registry=https://registry.npm.taobao.org 安装国内淘宝镜像包，cnpm 命令代替默认的npm命令，增加依赖包加载速度且避免资源限制

C. cnpm安装脚手架vue-cli

    1.在命令行中运行命令 cnpm install -g vue-cli 安装脚手架


D. 构建项目

    1.选择工作目录：E：/vue (路径自定义)
    2.进入该目录，执行vue init webpack demo (demo:表示自定义工程名称)
    3.在项目E：/vue/demo 目录,执行cnpm install 命令， 安装项目所需的依赖包资源

E. 运行项目

    1.在项目E：/vue/demo 目录，执行 npm run dev ，（dev:启动开发环境,其他环境需要自己配置）,访问 http://localhost:8080 就可以看到效果

F. 项目打包
    
    1.在项目E：/vue/demo 目录, 执行 npm run build 进行webpack打包操作，打包完成后，会在项目中新增 dist 文件夹，这是后续生产发布需要操作的步骤


二、 项目前端访问坑收集

A. 前端访问后端接口：跨域问题

    1. 找到项目config下index.js，找到proxyTable，进行跨域配置

    proxyTable: {
      '/api':{
        target:'http://localhost:8001/',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/'
        }
    }

           /api : 表示前端请求接口地址必须已/api开头，才会进入后续配置
          target：表示访问后端目标地址路径
    changeOrigin：表示可以跨域访问（重要）
     pathRewrite: 表示对前端请求接口地址内某（/api）进行替换，例：请求接口为：http://localhost:8001/api/login ,实际会变成 http://localhost:8001/login


B. 前端项目打包与后端项目结合

    1. 找到项目config下index.js ，修改build 节点下assetsPublicPath 内容

    assetsPublicPath: '/'  变成 assetsPublicPath: '/dist/'

    （这样前端打包后，直接将dist文件夹拷贝到spring boot 项目static/下就可以完成页面加载）

    2. 但nginx部署vue前段项目时，这个路径只能写成 assetsPublicPath: '/' ，否则nginx网站会出现css/js 找不到的情况（nginx部署，待验证）


C. 前端全局加载插件，请查看main.js 

    1. axios ，实现axja请求 , 
    2. element-ui，实现页面布局 
    3. qs ，解决vue中post请求以 a=a&b=b 的格式问题 ，与JSON转换区别 （qs：username=admin&password=123 ， json {'username'：'123'，'password'：'123'}） 
    4. router ,实现跳转页面路由配置 , 路由主要实现，请看router节点下index.js 
    5. vuex插件，实现页面传参，全局变量等数据存储
    6. ... 


D. 相关插件

    可以在项目 package.json 文件内，dependencies节点，查看安装的插件及版本 
    
    1.      axios : https://www.kancloud.cn/yunye/axios/234845
    2. element-ui : http://element.eleme.io/#/zh-CN/component/input
    3.      router: https://router.vuejs.org/zh/
    4.         qs : npm install --save axios vue-axios qs 
    5.        vuex: npm install vuex --save
