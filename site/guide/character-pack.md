# 制作角色包

最容易的方法是在 **设置 → 角色** 中新建角色，用编辑器添加图片和提示词，再导出 `.zip`。需要批量编辑或版本管理时，可以手动制作文件。

## 目录结构

```text
my-companion/
  character.json
  prompt.txt
  images/
    idle.png
    happy.png
```

配置文件使用 UTF-8。`images` 项中的文件名相对于 `images/`，不要填电脑上的绝对路径。

## 最小立绘示例

把下面内容保存为 `character.json`，并准备对应的两张图片：

```json
{
  "id": "my-companion",
  "name": "我的伙伴",
  "description": "一位喜欢和你分享日常的桌面伙伴",
  "version": 2,
  "render": "illustration",
  "poses": ["正立"],
  "emotions": ["待机", "开心"],
  "costumes": ["常服"],
  "images": [
    { "file": "idle.png", "pose": "正立", "costume": "常服", "emotions": ["待机"] },
    { "file": "happy.png", "pose": "正立", "costume": "常服", "emotions": ["开心"] }
  ],
  "voiceLanguage": "zh-CN",
  "textLanguage": "zh-CN"
}
```

| 字段 | 用途 |
| --- | --- |
| `id` | 稳定且唯一的角色标识；建议英文字母、数字、连字符 |
| `name` / `description` | 显示名称与简介 |
| `version` | 当前角色配置格式为 `2`，不是应用版本 |
| `render` | `illustration` 或 `live2d` |
| `poses` / `emotions` / `costumes` | 可用标签，图片中的标签需与之对应 |
| `images` | 文件与姿势、服装、情绪的对应关系 |
| `voiceLanguage` / `textLanguage` | 语音语言与默认显示语言 |
| `voice` / `voiceModel` | 可选，CosyVoice 音色 ID 和对应模型 |

一张图片可对应多个情绪。同一组合有多张图片时，应用可从匹配图片中选择。至少准备一张待机立绘，使用透明背景图片可以让桌面展示更自然。

## 编写人设

在 `prompt.txt` 中写角色提示词，例如：

```text
你是「我的伙伴」，喜欢分享生活中的小事。
使用自然、简短的中文和用户交流。
用户谈到工作时，先认真理解问题，再给出具体建议。
不知道的事坦诚说明，不要编造经历或事实。
```

优先描述身份、语气和回复习惯。提示词不需要 API Key，不要把账号密码写进角色包。加载时优先读取同目录的 `prompt.txt`；编辑器保存提示词也写入这个文件。

## 压缩与验证

1. 检查 `character.json` 是有效 JSON，图片名称和标签一致。
2. 将 `my-companion` 文件夹压缩成 `.zip`。
3. 在应用中导入，检查待机图和各个情绪的显示。
4. 发一条消息检查人设；若配置语音，另行验证声音。
5. 确认后再导出或分享。

应用兼容直接打包文件夹内容，以及带 `<id>/` 顶层目录的两种方式。同名 id 会跳过；调试时可在现有角色编辑器修改，或为测试包使用新的 id。

## 语音与动态模型

- CosyVoice：填写你自己账号可使用的 `voice`，并匹配 `voiceModel`。
- GPT-SoVITS：在角色语音编辑器选择参考音频，填写转录文本和语言，避免分享仅对本机有效的绝对路径。
- Live2D：增加 `live2d` 配置块，详见[Live2D 角色](./live2d)。

结构和字段依据桌面源码 `src/character/loader.ts`、`src/character/characterJson.ts` 与现有角色配置。
