# Live2D 角色

除了静态立绘，Kisaki 也支持 Live2D 模型，使用 easy-live2d 与 pixi.js v8 渲染。模型的动作与表情会从 `.model3.json` 中自动发现。

## 准备模型文件

保留模型导出的完整目录结构，包括 `.model3.json`、`.moc3`、纹理、物理、动作和表情文件。不要只复制模型入口。

```text
my-live2d/
  character.json
  prompt.txt
  live2d/
    companion/
      companion.model3.json
      companion.moc3
      textures/
      motions/
      expressions/
```

## 配置角色入口

下面示例中的路径和动作组需要按实际模型修改：

```json
{
  "id": "my-live2d",
  "name": "动态伙伴",
  "description": "使用 Live2D 的桌面角色",
  "version": 2,
  "render": "live2d",
  "poses": [],
  "emotions": [],
  "costumes": [],
  "images": [],
  "live2d": {
    "model": "live2d/companion/companion.model3.json",
    "scale": 1,
    "offsetX": 0,
    "offsetY": 0,
    "mouseFollow": true,
    "idleMotionGroup": "Idle",
    "tapMotionGroup": "TapBody"
  },
  "voiceLanguage": "zh-CN",
  "textLanguage": "zh-CN"
}
```

## 调整显示与动作

| 字段 | 说明 |
| --- | --- |
| `model` | 必填，相对于角色根目录的 model3.json 路径 |
| `scale` | 模型显示缩放 |
| `offsetX` / `offsetY` | 显示偏移 |
| `mouseFollow` | 鼠标跟随，默认开启 |
| `idleMotionGroup` | 空闲动作组；缺省使用首个动作组 |
| `tapMotionGroup` | 点击时播放的动作组 |
| `expressions` | 模型表情 ID 到中文说明的映射 |
| `motions` | 动作组名称到中文说明的映射 |

导入后，在角色编辑器预览，调整比例和偏移。动作组名称必须与模型文件中实际名称一致；大小写不同也可能导致找不到。

可以补充说明，帮助 AI 理解表情和动作：

```json
{
  "expressions": { "smile": "开心的微笑" },
  "motions": { "Idle": "自然待机", "TapBody": "被点击时打招呼" }
}
```

将这些字段加入 `live2d` 块，不要替换整个角色配置。AI 可通过 `set_expression` 与 `play_motion` 控制已发现的表情和动作，仍取决于模型的工具调用能力。

## 模型不显示时

检查入口路径、所有引用文件、文件名大小写，以及模型缩放和偏移。查看诊断日志确认是否缺少纹理或模型文件。开发环境还需要仓库中的 `public/Live2dCore/live2dcubismcore.js`。

## 分享模型

分享角色包前确认模型许可允许再分发。Live2D 官方免费示例模型多数禁止再分发，不能直接打包为公开角色资源。Cubism Core 也受 Live2D 专有许可约束。
