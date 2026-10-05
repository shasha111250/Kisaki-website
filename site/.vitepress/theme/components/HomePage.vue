<script setup lang="ts">
import { withBase } from 'vitepress'
import { PhArrowUpRight, PhArrowRight, PhDownloadSimple, PhBookOpen, PhCheck, PhSparkle, PhGithubLogo, PhShieldCheck } from '@phosphor-icons/vue'
import SectionHeading from './SectionHeading.vue'
import { features, platforms, project, steps } from '../data'
</script>

<template>
  <main class="kisaki-home">
    <section class="hero page-width" aria-labelledby="hero-title">
      <div class="hero-copy">
        <a :href="project.repository" class="hero-badge" target="_blank" rel="noopener noreferrer">
          <span class="status-dot" aria-hidden="true"></span> 开源的 AI 桌面伙伴 <PhArrowUpRight :size="14" aria-hidden="true" />
        </a>
        <h1 id="hero-title">你的桌面，<br />多一个<span class="accent">会聊天<br class="desktop-break" />的伙伴。</span></h1>
        <p class="hero-description">工作间隙的一句闲聊，深夜的一声回应。<br />让 Kisaki 带着自己的性格与声音，陪在你的桌面上。</p>
        <div class="hero-actions">
          <a :href="withBase('/#download')" class="action primary"><PhDownloadSimple :size="20" aria-hidden="true" /> 获取 Kisaki</a>
          <a :href="withBase('/guide/getting-started.html')" class="action secondary"><PhBookOpen :size="20" aria-hidden="true" /> 从这里开始</a>
        </div>
        <div class="hero-platforms" aria-label="支持的平台">
          <span v-for="platform in platforms" :key="platform.name"><img :src="withBase(`/assets/icons/${platform.icon}.svg`)" alt="" width="16" height="16" />{{ platform.name }}</span>
          <span class="platform-divider" aria-hidden="true"></span><span>免费 · MIT 开源</span>
        </div>
      </div>
      <div class="hero-stage" aria-label="Kisaki 角色展示，聊天内容为示意">
        <div class="stage-grid" aria-hidden="true"></div>
        <span class="stage-label"><span class="status-dot" aria-hidden="true"></span> 你的桌面小伙伴</span>
        <div class="stage-orbit" aria-hidden="true"></div>
        <div class="stage-spark spark-one" aria-hidden="true"><PhSparkle :size="30" weight="fill" /></div>
        <div class="stage-spark spark-two" aria-hidden="true"><PhSparkle :size="18" weight="fill" /></div>
        <img :src="withBase('/assets/images/kisaki_alpha.webp')" class="hero-character" alt="穿着紫色校服的 Kisaki 卡通角色" width="640" height="640" fetchpriority="high" />
        <div class="chat-preview">
          <div class="chat-avatar"><img :src="withBase('/assets/images/kisaki_alpha.webp')" width="40" height="40" alt="" /></div>
          <div><span class="chat-name">Kisaki <span>对话示意</span></span><p>今天也辛苦啦。要不要聊一会儿？</p></div>
          <span class="chat-wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        </div>
        <span class="stage-footnote">一点陪伴，让日常不一样。</span>
      </div>
    </section>

    <div class="tech-strip page-width">
      <span>轻巧的外表，认真的内核</span>
      <div v-for="tech in [{ icon: 'Tauri', name: 'Tauri 2' }, { icon: 'Vue', name: 'Vue 3' }, { icon: 'TypeScript', name: 'TypeScript' }, { icon: 'pinia', name: 'Pinia' }]" :key="tech.name">
        <img :src="withBase(`/assets/icons/${tech.icon}.svg`)" width="21" height="21" alt="" /><strong>{{ tech.name }}</strong>
      </div>
    </div>

    <section id="features" class="section page-width" aria-label="核心特性">
      <SectionHeading label="不止于陪伴 / FEATURES" title="小小的伙伴，也有大大的本领。" description="从聊聊日常，到帮你处理一点小事。按照你的习惯，慢慢认识她。" />
      <div class="feature-grid">
        <a v-for="(feature, index) in features" :key="feature.label" :href="withBase(`${feature.link}.html`)" class="feature-card">
          <div class="feature-top"><span class="feature-icon"><component :is="feature.icon" :size="25" aria-hidden="true" /></span><span class="feature-number">0{{ index + 1 }}</span></div>
          <span class="feature-label">{{ feature.label }}</span>
          <h3>{{ feature.title }}</h3><p>{{ feature.description }}</p>
          <span class="text-link">了解如何使用 <PhArrowUpRight :size="17" aria-hidden="true" /></span>
        </a>
      </div>
    </section>

    <section id="characters" class="character-section section" aria-label="角色与个性化">
      <div class="page-width character-layout">
        <div class="character-art">
          <span class="character-art-label">MEET YOUR COMPANION</span>
          <img :src="withBase('/assets/characters/kisaki-screenshot.png')" alt="Kisaki 校服立绘" width="801" height="1540" loading="lazy" />
          <span class="character-nameplate">Kisaki <small>你的第一位桌面伙伴</small></span>
        </div>
        <div class="character-copy">
          <span class="eyebrow">你的伙伴 / CHARACTERS</span>
          <h2>相同的桌面，<br />不同的心动。</h2>
          <p>从 Kisaki 开始，认识一个有自己性格的伙伴。也可以把喜欢的立绘、声音和人设组合起来，让陪伴更合你的心意。</p>
          <div class="character-tags"><span>多种表情</span><span>校服 / 常服</span><span>独立人设</span><span>支持 Live2D</span></div>
          <ul class="check-list"><li><PhCheck :size="18" aria-hidden="true" /> 用 .zip 角色包一键导入和导出</li><li><PhCheck :size="18" aria-hidden="true" /> 为角色选择声音与回复语言</li><li><PhCheck :size="18" aria-hidden="true" /> 在角色编辑器中调整外观与设定</li></ul>
          <a :href="withBase('/guide/characters.html')" class="action secondary">认识角色系统 <PhArrowRight :size="18" aria-hidden="true" /></a>
          <a :href="withBase('/guide/character-pack.html')" class="character-guide-link">想做自己的角色？查看制作指南 <PhArrowUpRight :size="16" aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section id="download" class="section page-width" aria-label="下载 Kisaki">
      <SectionHeading label="让陪伴开始 / DOWNLOAD" title="给桌面留一个她的位置。" description="选择你的系统，前往 GitHub Releases 获取安装包。版本与可用架构以发布页为准。" />
      <div class="download-grid">
        <article v-for="platform in platforms" :key="platform.name" class="download-card">
          <img :src="withBase(`/assets/icons/${platform.icon}.svg`)" width="32" height="32" alt="" loading="lazy" />
          <h3>{{ platform.name }}</h3><span class="package-format">{{ platform.format }}</span><p>{{ platform.detail }}</p>
          <a :href="project.releases" target="_blank" rel="noopener noreferrer" class="action secondary">查看 {{ platform.name }} 安装包 <PhArrowUpRight :size="17" aria-hidden="true" /></a>
        </article>
      </div>
      <div class="resource-row">
        <div class="resource-icon"><img :src="withBase('/assets/images/kisaki_icon.webp')" width="52" height="52" alt="Kisaki 项目图标" loading="lazy" /></div>
        <div class="resource-copy"><h3>Kisaki 角色资源</h3><p>安装应用后还需要导入角色。请在发布页查看 characters.zip 的实际内容。</p></div>
        <a :href="project.releases" class="text-link" target="_blank" rel="noopener noreferrer">获取角色包 <PhArrowUpRight :size="18" aria-hidden="true" /></a>
      </div>
      <p class="download-note"><PhShieldCheck :size="18" aria-hidden="true" /> 本地保存角色与会话；AI、语音及搜索会连接你配置的服务。<a :href="withBase('/guide/privacy.html')">了解数据流向</a></p>
    </section>

    <section class="getting-started section page-width" aria-label="快速上手">
      <div class="start-intro"><span class="eyebrow">三步，就能见面 / GET STARTED</span><h2>第一句「你好」，<br />从这里开始。</h2><a :href="withBase('/guide/getting-started.html')" class="text-link">阅读完整使用文档 <PhArrowRight :size="18" aria-hidden="true" /></a></div>
      <div class="start-steps"><a v-for="(step, index) in steps" :key="step.title" :href="withBase(`${step.link}.html`)" class="start-step"><span>0{{ index + 1 }}</span><div><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div><PhArrowUpRight :size="20" aria-hidden="true" /></a></div>
    </section>

    <section class="closing page-width" aria-label="参与开源项目"><PhGithubLogo :size="30" aria-hidden="true" /><div><h2>一起，让这个小伙伴更好。</h2><p>查看源码、分享想法，或提交你的第一个贡献。</p></div><a :href="project.repository" target="_blank" rel="noopener noreferrer" class="action secondary">在 GitHub 见 <PhArrowUpRight :size="18" aria-hidden="true" /></a></section>
  </main>
</template>
