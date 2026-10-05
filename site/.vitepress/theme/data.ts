import { PhChatCircleDots, PhWaveform, PhPalette, PhMagicWand, PhChats, PhGlobeHemisphereWest } from '@phosphor-icons/vue'

export const project = {
  repository: 'https://github.com/AoralsFout/Kisaki',
  releases: 'https://github.com/AoralsFout/Kisaki/releases',
  // 桌面应用源码版本；不将其当作已发布版本。
  sourceVersion: '0.3.0'
}

export const features = [
  { icon: PhChatCircleDots, title: '想聊什么，都可以', label: 'AI 对话', description: '接入 OpenAI 兼容服务，自选模型与地址。角色带着自己的人设，回应你的每一句话。', link: '/guide/ai' },
  { icon: PhWaveform, title: '让回应有声音', label: '语音合成', description: '支持云端 CosyVoice 与本地 GPT-SoVITS，为你的伙伴选择适合的声音。', link: '/guide/voice' },
  { icon: PhPalette, title: '陪伴，有你的样子', label: '角色系统', description: '立绘或 Live2D，表情、动作与服装。导入角色包，也可以创造自己的伙伴。', link: '/guide/characters' },
  { icon: PhMagicWand, title: '多一点小帮手的能力', label: '工具调用', description: '切换表情、查询信息、读取工作区。在你的授权下，让对话连接实际任务。', link: '/guide/tools' },
  { icon: PhChats, title: '每个话题，都有位置', label: '会话管理', description: '创建和切换多个会话，保留聊天历史。让日常闲聊与认真工作各有空间。', link: '/guide/conversation' },
  { icon: PhGlobeHemisphereWest, title: '用熟悉的语言相处', label: '语言设置', description: '分别设置界面、回复显示与角色语音的语言，找到最舒服的交流方式。', link: '/guide/voice' }
]

export const platforms = [
  { name: 'Windows', icon: 'Windows', format: '.exe / .msi', detail: '按 Release 选择对应架构' },
  { name: 'macOS', icon: 'Macos', format: '.dmg', detail: '按 Release 选择 Intel / Apple Silicon' },
  { name: 'Linux', icon: 'Linux', format: '.deb / .AppImage', detail: '按 Release 选择对应发行包' }
]

export const steps = [
  { title: '安装 Kisaki', text: '选择对应系统的安装包。', link: '/guide/getting-started' },
  { title: '连接 AI', text: '填入服务地址、Key 与模型。', link: '/guide/ai' },
  { title: '迎接你的伙伴', text: '导入角色，开始第一段对话。', link: '/guide/characters' }
]
