import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '村内篇',
    items: [
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%8C%8F.svg',
        title: '抽象魔怔地球传',
        desc: '看不顺就骂~讲不过就摇人炸~禁言踢群就是神权~我们有盒武器！谁也打败不了我们~',
        link: '/article/earth',
      },
            {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%BA.svg',
        title: '2人传',
        desc: '双主角模式|唯一有当事人本人参与编写（?）|傻狼自己的糗事',
        link: '/article/二人传',
      },
       {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%92.svg',
        title: 'XSDE传',
        desc: '尽出馊主意',
        link: '/article/XSDE',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%E2%98%9D%EF%B8%8F.svg',
        title: 'zAilyn传',
        desc: '听我说，把服务器的模组删掉，换我推荐的这个，好！',
        link: '/article/zAilyn',
      },
    ],
  },
  {
    title: '村外篇',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/microsoft-teams/1f3a9.png',
        title: '土皇帝喵',
        desc: '后门插件大王',
        link: '/article/土皇帝喵',
      },
      {
        icon: 'https://www.emojiall.com/images/60/htc/1f35a.png',
        title: '版主米饭传',
        desc: '懒得写desc',
        link: '/article/版主米饭传',
      },
     {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%A7%A8.svg',
        title: 'pankuler传',
        desc: '究极地图炮',
        link: '/article/pankuler传',
      },

      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%91%91.svg',
        title: '皇权论坛传奇',
        desc: '最炫MC风',
        link: 'https://map.earthvillage.top/MCBBS.mp4',
      },
    ],
  },
  {
    title: '其他人的瓜',
    items: [
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: 'tinksp管理an',
        desc: '剽窃开源配置倒卖',
        link: '/article/tinksp管理an',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '圣经-新约-无极福音第 114 章',
        desc: '想不出骚话',
        link: 'https://docs.qq.com/document/DQ2pEblBZQXNIdlFD',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: 'E5-5950x瓜',
        desc: '这篇文档已经坠机了😭',
        link: 'https://docs.qq.com/doc/DSlVLdWF5b0NUZVpI',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '因Chem引起的一场笑话',
        desc: '这篇文档也坠机了😭😭',
        link: 'https://shimo.im/docs/wV3VVVeYwYsMWK3y',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '牛战士狂战录',
        desc: '这篇文档也坠机了😭😭',
        link: 'https://docs.qq.com/doc/DQUVXUW9hQ2hSS1dB',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '小鱼鱼大蛇蛇',
        desc: '想不出骚话',
        link: 'https://docs.qq.com/doc/DTHlxdXp6bUNVYkNj',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '哦传',
        desc: '用gpt用的',
        link: 'https://docs.qq.com/doc/DQ1dmdktBdWhBWVlK',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: 'Chem创造10w线程毁灭服务器',
        desc: '用chem用的',
        link: 'https://docs.qq.com/doc/DRGxGV0pZRklwcU9H',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '还是汉化大佬',
        desc: '提pr把build.yml“汉化”了，是故意的还是不小心的🔫',
        link: 'https://github.com/Perfare/Zygisk-Il2CppDumper/pull/169',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '时之殇传',
        desc: '还得是mi',
        link: 'https://docs.qq.com/doc/DQ09UV0hXZGxqR0ha',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: 'kali大肘子',
        desc: 'B站刷到的视频',
        link: 'https://www.bilibili.com/video/BV1uZ421r7a2',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%8D%88.svg',
        title: '真·大瓜',
        desc: '大瓜！速看，马上撤回',
        link: '/article/真大瓜',
      },
    ],
  },
  {
    title: '联系',
    items: [
      {
        icon: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png',
        title: '星探',
        desc: '投稿新星',
        link: 'https://github.com/MinecraftEarthVillage/lezi/issues',
      },
      {
        icon: 'https://ts1.cn.mm.bing.net/th/id/R-C.21a7297de5dcf6dfcafd6186a44d4e12?rik=Z41hPPPlzrNReA&riu=http%3a%2f%2fwiki.connect.qq.com%2fwp-content%2fuploads%2f2013%2f10%2f02_qq_logo_ver-682x1024.png&ehk=JbdByiSyS9R67ZomaeCVJwqZWyOOgzN0hLQ7iFO77eo%3d&risl=&pid=ImgRaw&r=0',
        title: 'QQ交流群',
        desc: '欢♂迎来到咱的兽群!',
        link: 'https://map.earthvillage.top/qqun.html',
      },
    ],
  },
]
