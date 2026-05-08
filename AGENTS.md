# 世界杯百科网站项目

## 项目概述

这是一个使用纯 HTML/CSS 实现的静态网站，用于介绍 FIFA 世界杯。网站符合 Google AdSense 政策要求，包含完整的隐私政策页面。

## 技术栈

- **前端框架**：原生 HTML5 + CSS3
- **无外部依赖**：纯静态页面，CDN-free
- **字体**：系统字体栈（无需加载外部字体）
- **图片**：纯 CSS 生成的图标和渐变背景

## 文件结构

```
/workspace/projects/
├── index.html           # 主页面 - 世界杯百科
├── privacy.html         # 隐私政策页面
├── styles/
│   └── main.css         # 样式表
├── .coze               # 项目配置
└── .gitignore
```

## 页面内容

### 主页面 (index.html)

- **英雄横幅**：展示世界杯主题和数据统计
- **世界杯历史**：起源与发展、全球影响力
- **历届冠军**：1930-2022年世界杯冠军列表
- **著名球场**：卢塞尔、马拉卡纳、温布利等
- **传奇纪录**：进球、出场、最年轻进球等纪录
- **关于我们**：网站介绍和联系信息

### 隐私政策页面 (privacy.html)

- 信息收集与使用
- Cookies 和追踪技术
- Google AdSense 与广告
- 第三方链接
- 儿童隐私
- 数据安全
- 联系我们

## Google AdSense 合规要点

1. ✅ **实质性内容**：页面包含 6 个内容区块，总计超过 300 行 HTML
2. ✅ **清晰的导航结构**：固定导航栏、锚点链接、面包屑
3. ✅ **隐私政策链接**：所有页面都包含指向 `/privacy.html` 的链接
4. ✅ **Cookie 说明**：隐私政策中详细说明了 Cookie 使用
5. ✅ **Google AdSense 披露**：明确说明使用 Google AdSense
6. ✅ **退出机制**：提供退出个性化广告的链接
7. ✅ **联系信息**：提供电子邮件联系方式
8. ✅ **HTTPS**：部署在 HTTPS 环境中

### 广告位设置

页面中预留了 6 个广告位容器（`<div class="ad-container">`），每个都包含 AdSense 代码注释占位符。

**使用说明**：
1. 注册 Google AdSense 账号
2. 获取您的 `publisher ID` (ca-pub-XXXXXXXX)
3. 创建广告位，获取 `ad slot ID`
4. 替换 `index.html` 中的注释代码为实际 AdSense 代码

## 性能优化

- 纯 CSS 动画，无 JavaScript 依赖
- 系统字体栈，无字体加载延迟
- CSS 变量实现主题一致性
- 响应式设计，支持移动端

## 测试命令

```bash
# 检查服务运行
curl -I -s --max-time 3 http://localhost:5000

# 检查页面内容
curl -s http://localhost:5000 | grep -E 'privacy|Google AdSense'

# 检查隐私政策页面
curl -s http://localhost:5000/privacy.html | grep -E 'Cookies|儿童|联系我们'
```

## 部署

网站部署在 5000 端口，由静态文件服务器提供访问。
