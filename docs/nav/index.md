---
layoutClass: m-nav-layout
outline: [1, 2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# Wiki导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
该导航模板来自 [maomao](https://github.com/maomao1996) 版权声明：<https://github.com/maomao1996/vitepress-nav-template>
:::
