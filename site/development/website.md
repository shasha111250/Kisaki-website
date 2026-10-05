# 官网开发与部署

官网采用 **Vue 3 + TypeScript + VitePress**。主页是 Vue 单文件组件，文档是 Markdown，构建后得到可独立托管的静态 HTML。无需运行后端。

## 本地启动

使用 Node.js 22 或更新的受支持版本，在官网仓库根目录执行：

```bash
npm ci
npm run dev
```

打开终端显示的地址，通常为 `http://127.0.0.1:5173`。修改 Vue、CSS 或 Markdown 后，开发服务器会更新页面。

## 结构与修改入口

```text
site/
  index.md                       # 引入 Vue 主页
  guide/                         # 用户文档
  development/                   # 开发文档
  public/assets/                 # 静态品牌和角色素材
  .vitepress/
    config.ts                    # 导航、侧栏、搜索与站点配置
    theme/
      index.ts                   # 扩展默认主题
      data.ts                    # 特性、平台、项目链接数据
      style.css                  # 主题变量与响应式样式
      components/
        HomePage.vue             # 主页
        SectionHeading.vue       # 通用章节标题
```

## 新增文档

1. 在 `site/guide/` 创建 Markdown 文件，例如 `new-topic.md`。
2. 用一级标题说明主题，二级与三级标题会自动进入右侧目录。
3. 在 `site/.vitepress/config.ts` 的 sidebar 对应分组增加 `{ text, link }`。
4. 使用相对链接连接其他文档，如 `[角色](./characters)`。
5. 执行构建，修复报告的失效内部链接。

搜索、代码高亮和复制、上一篇/下一篇、移动导航以及深色模式由 VitePress 默认主题提供。不要另外实现这些功能。

搜索按钮可在页面顶部找到，支持键盘快捷键。搜索索引跟随构建生成；新增文档后重新构建即可进入发布站点的索引，不需要第三方搜索服务。

## 修改主页

`HomePage.vue` 使用 `<script setup lang="ts">`。平台、特性和项目链接集中在 `data.ts`；颜色在 `style.css` 的语义变量中维护。

图标使用 `@phosphor-icons/vue`。装饰图标设为 `aria-hidden="true"`。内部资源和绝对站内链接使用 VitePress 的 `withBase()`，兼容部署到子目录。

新增图片放入 `site/public/assets/`，引用路径从 `/assets/` 开始。给图片保留宽高，非首屏资源加 `loading="lazy"`。首屏角色使用压缩 WebP，原始品牌 PNG 保留在素材目录中。

发布前核对桌面源码，不要将 `data.ts` 中的源码版本当作已发布版本。安装包和角色包内容以实际 GitHub Release 为准。

## 构建和预览

```bash
# 独立类型检查
npm run check

# 类型检查 + 静态构建 + 内部链接检查
npm run build

# 预览构建结果
npm run preview
```

构建输出：**`site/.vitepress/dist/`**。只上传这个目录的内容，不要上传源码目录或 `node_modules`。

## 根域名与子目录部署

默认 `base` 为 `/`，适合根域名。配置使用 `.html` 文档 URL，因此常规静态托管无需 SPA 回退即可直接访问深层文档。

例如部署到 GitHub Pages 的 `/Kisaki-website/`，构建前设置环境变量。路径首尾都需要 `/`。

::: code-group

```powershell [PowerShell]
$env:SITE_BASE = '/Kisaki-website/'
npm run build
npm run preview
```

```bash [macOS / Linux]
SITE_BASE=/Kisaki-website/ npm run build
SITE_BASE=/Kisaki-website/ npm run preview
```

:::

部署同一个构建目录到不同前缀时需要重新构建。PowerShell 恢复根域名配置可用 `Remove-Item Env:SITE_BASE`。

GitHub Pages 若使用项目仓库，可按 [VitePress 官方部署指南](https://vitepress.dev/guide/deploy) 配置 Actions：安装依赖，执行构建，上传 `site/.vitepress/dist` 为 Pages artifact，再发布。使用自定义根域名则保持默认 base。

## 维护依赖

锁文件已纳入版本管理，使用 `npm ci` 保持可复现安装。当前使用 VitePress 1.6 稳定版，覆盖其 Vite 依赖为修补版本 `^6.4.3`。升级框架时复查该覆盖是否仍需要，并重新验证类型、构建、搜索及路由。

## 验收页面

检查桌面与 375px 窄屏、浅色与深色、键盘焦点和减少动态效果。测试主页各入口、搜索、文档侧栏、代码复制、浏览器返回，以及直接刷新深层文档地址。
