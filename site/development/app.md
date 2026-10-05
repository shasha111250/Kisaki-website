# 从源码运行应用

这里介绍桌面应用 `Kisaki`，官网本身的开发见[官网开发与部署](./website)。安装版用户无需安装开发工具。

## 准备环境

- Node.js：按当前桌面仓库依赖要求选择版本；本地源码 README 标注 18+。
- Rust 工具链。
- 对应系统的 Tauri 原生编译依赖。
- 一项可用的 AI 服务，以及角色文件。

系统依赖请参照 [Tauri 官方前置要求](https://v2.tauri.app/start/prerequisites/) 与桌面仓库 README。Windows、macOS、Linux 的编译条件不同。

## 克隆和运行

```bash
git clone https://github.com/AoralsFout/Kisaki.git
cd Kisaki
npm install
npm run tauri dev
```

如果已有本地源码（例如 `E:\Kisaki`），直接在该目录执行安装与运行命令。

首次运行后，仍需配置 AI。开发环境从项目根目录 `characters/` 加载角色；安装版从用户数据目录加载。

::: warning 只启动 Vite 不等于运行桌宠
`npm run dev` 只启动前端开发服务器。角色文件、凭据、窗口与本地工具依赖 Tauri 原生能力，完整验证请用 `npm run tauri dev`。
:::

## 构建与检查

```bash
# 运行应用测试
npm test

# 检查前端类型并构建
npm run build

# 构建桌面安装包
npm run tauri build

# 打包发布名单内的角色
npm run pack:characters
```

角色打包输出到 `dist-packs/characters.zip`，名单由 `characters/release-allowlist.json` 控制。正式发布还应执行仓库提供的发布检查流程。

## Linux

源码 README 提供 Debian/Ubuntu 依赖示例：

```bash
sudo apt install libwebkit2gtk-4.1-dev libgtk-3-dev librsvg2-dev \
  libayatana-appindicator3-dev libxdo-dev libssl-dev build-essential \
  pkg-config libclang-dev libxcb1-dev libxrandr-dev libdbus-1-dev \
  libpipewire-0.3-dev libwayland-dev libegl-dev
```

不同发行版需使用其对应包名。X11 支持全局光标相关的穿透功能，Wayland 存在协议限制；屏幕观察也可能受环境限制。

## 源码结构

| 目录 | 内容 |
| --- | --- |
| `src/components/` | Vue 界面与设置页面 |
| `src/application/` | 对话、角色、语音和工具应用逻辑 |
| `src/infrastructure/` | Tauri 与服务适配 |
| `src-tauri/` | Rust 原生后端、窗口和系统集成 |
| `characters/` | 开发角色 |

领域词与架构约定请阅读桌面仓库的 `CONTEXT.md`、`AGENTS.md` 和 `docs/adr/`。
