## 志愿参考前端开发文档

### 项目使用

```shell
$ npm install
$ npm run dev
$ npm run build
```

### 项目的目录结构如下

├── build/ # webpack配置文件 
│ └── … 
├── config/ 
│ ├── index.js # 主要项目配置 
│ └── … 
├── src/ 
│ ├── main.js # 应用入口文件 
│ ├── api/ # 异步请求接口文件 
│ ├── components/ # ui组件 
│ │ └── common/ # 公用组件
│ │ └── … 
│ ├── filter/ # 过滤器配置文件
│ ├── images/ # 图片
│ ├── router/ # 路由配置文件
│ ├── store/ # vuex状态管理文件
│ │ └── index.js  # 全局公用属性（缓存属性）
│ │ └── action.js  # 异步请求
│ │ └── getters.js  # 公用计算属性
│ │ └── mutation.js  # 数据设置
│ ├── styles/ # ui组件 
│ │ └── iview-theme.less  # iview全局配置样式
│ │ └── main.less  # 系统样式表
│ │ └── … 
│ └── views / # 系统全部页面
│   └── bkmsg / # 收集用户信息以及修改院校、专业、批次
│   └── buy / # 购买相关页面
│   └── tzy / # 院校优先、专业优先页面
│   └── zhylist / # 志愿列表及详细
│   └── cpresult # 测评结果
│   └── usermsg # 用户信息
├── static/ # 纯静态资源（直接复制） 文件夹不能删除否则会报错
├── test/ 
│ └── unit/ # 单元测试 
│ │ ├── specs/ # 测试spec文件 
│ │ ├── index.js # 测试构建条目文件 
│ │ └── karma.conf.js # 测试跑步者配置文件 
│ └── e2e/ # e2e测试 
│ │ ├── specs/ # 测试spec文件 
│ │ ├── custom-assertions/ # e2e测试的自定义断言 
│ │ ├── runner.js # 测试跑步脚本 
│ │ └── nightwatch.conf.js # 测试跑步者配置文件 
├── .babelrc # babel 配置 
├── .postcssrc.js # postcss 配置 
├── .eslintrc.js # eslint 配置 
├── .editorconfig # editor 配置 
├── index.html # index.html模板 
└── package.json # 构建脚本和依赖关系