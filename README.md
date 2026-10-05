# Kisaki 官网与使用文档

基于 **Vue 3 + TypeScript + VitePress**，包含产品主页、平台下载入口与完整中文使用文档。桌面应用源码位于独立仓库 [AoralsFout/Kisaki](https://github.com/AoralsFout/Kisaki)，本地参考目录为 `E:\Kisaki`。

## 启动

使用 Node.js 22+：

```bash
npm ci
npm run dev
```

打开终端显示的本地地址。文档入口：`/guide/getting-started.html`。

```bash
npm run check    # Vue / TypeScript 类型检查
npm run build    # 类型检查、静态生成、内部链接检查
npm run preview  # 预览构建结果
```

若本机 npm 缓存目录受限，可以使用工作区缓存：`npm ci --cache .npm-cache`。

## 结构

| 路径 | 用途 |
| --- | --- |
| `site/.vitepress/theme/components/` | Vue 主页组件 |
| `site/.vitepress/theme/data.ts` | 特性、平台与项目链接 |
| `site/.vitepress/theme/style.css` | 品牌变量、响应式与深色样式 |
| `site/.vitepress/config.ts` | 导航、侧栏、文档搜索 |
| `site/guide/` | 安装、AI、会话、角色、Live2D、语音、工具、隐私、FAQ |
| `site/development/` | 桌面源码运行、官网开发与部署 |
| `site/public/assets/` | 品牌、角色、SVG 与 WebP 资源 |
| `design-system/MASTER.md` | ui-ux-pro-max 设计约定 |

搜索、文档目录、代码复制、移动导航、深色模式、404 由 VitePress 提供。没有额外路由器或文档渲染器。

## 部署

上传 **`site/.vitepress/dist/`** 内容到静态托管服务。默认适用于根域名。子目录部署前设置 `SITE_BASE`，例如 PowerShell：

```powershell
$env:SITE_BASE = '/Kisaki-website/'
npm run build
```

文档使用 `.html` URL，深层页面不依赖 SPA 回退。完整开发、扩展文档和部署说明见 [官网开发指南](site/development/website.md)。

## 内容维护

用户文档基于本地桌面源码 `0.3.0` 编写。源码版本不等于最新发布版本；安装包、平台架构与角色资源内容以 [GitHub Releases](https://github.com/AoralsFout/Kisaki/releases) 为准。主页保留原有品牌素材，使用项目图标展示角色资源入口。

当前 VitePress 稳定版通过 `overrides` 使用 Vite `^6.4.3`，避免旧传递依赖中的已知漏洞；升级时请复查并运行构建和交互验收。
