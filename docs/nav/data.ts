import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '村内大佬篇 - 正面事迹',
    items: [


      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%9B%A3.svg',
        title: '阿参传',
        desc: '阿参终于来到自己梦寐以求的名人堂',
        link: '/fool/article/ashen',
      },

      {
        icon: 'https://avatars.githubusercontent.com/u/98224449?v=4',
        title: '无色树枝传奇的一生',
        desc: '想不到小破球也有背刺的一天',
        link: '/fool/article/wuse',
      },

    ],
  },
  {
    title: '村内傻逼篇 - 负面报道',
    items:[
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%8C%8F.svg',
        title: '抽象魔怔地球传',
        desc: '看不顺就骂~讲不过就摇人炸~禁言踢群就是神权~我们有盒武器！谁也打败不了我们~',
        link: '/fool/article/earth',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%BA.svg',
        title: '2人传',
        desc: '双主角模式|唯一有当事人本人参与编写（?）|傻狼自己的糗事',
        link: '/fool/article/二人传',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%92.svg',
        title: 'XSDE传',
        desc: '尽出馊主意',
        link: '/fool/article/XSDE',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%E2%98%9D%EF%B8%8F.svg',
        title: 'zAilyn传',
        desc: '听我说，把服务器的模组删掉，换我推荐的这个，好！',
        link: '/fool/article/zAilyn',
      },

            {
        icon: 'https://www.emojiall.com/images/120/joypixels/0033-20e3.png',
        title: '三人传',
        desc: '来自上古时期的久远资料',
        link: '/fool/article/三人传',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%BB.svg',
        title: '杨小闹传奇',
        desc: '想不出骚话',
        link: '/fool/article/杨小闹传奇',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%BB.svg',
        title: '苦练准心的空谷',
        desc: '想不出骚话',
        link: '/fool/article/苦练准心的空谷',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%94%93.svg',
        title: '19事件',
        desc: '大型纪录片《弱密码传奇》持续播出',
        link: '/fool/article/19事件',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '新人大赏',
        desc: '弱智新人迷惑发言大全',
        link: '/fool/article/弱智新人大赏',
      },
            {
        icon: 'https://zh.minecraft.wiki/images/TNT_JE3_BE2.png?d0206',
        title: '1·23攻击事件',
        desc: '又一个炸服的，但时间更长',
        link: '/fool/article/1·23事件',
      },
      // {
      //   icon: '/others/Microsoft/微软.png',
      //   title: 'Microsoft',
      //   desc: '躺尸小孩也配自称微软？！',
      //   link: '/fool/article/ms',
      // },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%9A%85.svg',
        title: 'mcxiaolulu传',
        desc: 'MTR圈子抽象小孩',
        link: '/fool/article/mcxiaolulu',
      },
    ]
  },
  {
    title: '村外篇（在别的群或朋友听说的看到的，与本服无关哈~）',
    items: [
      {
        icon: 'https://www.mcbbs.co/template/mcbbs_v2/images/logo.png',
        title: '皇权论坛传奇',
        desc: '最炫MC风',
        link: '/fool/article/mcbbs',
      },
      {
        icon: 'https://www.emojiall.com/images/240/microsoft-teams/1f3a9.png',
        title: '“猫” 叔 传 奇',
        desc: '后门插件大王',
        link: '/fool/article/土皇帝喵',
      },
      {
        icon: 'https://www.emojiall.com/images/60/htc/1f35a.png',
        title: '版主米饭传',
        desc: '你游开发圈真是群英荟萃呀',
        link: '/fool/article/版主米饭传',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%A6%85.svg',
        title: '嘿鹰传',
        desc: '不是黑影！不是黑影！',
        link: '/fool/article/嘿鹰',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%A7%A8.svg',
        title: 'pankuler传',
        desc: '之前Minebbs群看到的',
        link: '/fool/article/pankuler传',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%94%81.svg',
        title: '伪乐子WIKI',
        desc: '我觉得你抄袭了我',
        link: '/fool/article/lezi2',
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
        title: 'Chem创造10w线程毁灭服务器（外链）',
        desc: '用chem用的',
        link: 'https://docs.qq.com/doc/DRGxGV0pZRklwcU9H',
      },
      {
        icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.zOBkqmN4CgZ_yagT1_yswwAAAA?rs=1&pid=ImgDetMain',
        title: '还是汉化大佬',
        desc: '拉取请求把build.yml“汉化”了，是故意的还是不小心的🔫',
        link: 'https://github.com/Perfare/Zygisk-Il2CppDumper/pull/169',
      },
      {
        icon: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.NtrAAeKWYOvFfAY6dYon0AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        title: '枕木小传',
        desc: '别人转发的，看到挺有意思的',
        link: '/fool/article/枕木',
      },
      {
        icon: '',
        title: '张俊涵攻击MTR服务器',
        desc: '',
        link: '/fool/article/zyh',
      },
      {
        icon: '/others/钻石蛋/哔哩哔哩头像.jpg',
        title: 'DiamondEgg',
        desc: '',
        link: '/fool/article/diamondegg',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%9A%85.svg',
        title: 'MTR论坛三人转',
        desc: '逛BBS的意外收获',
        link: '/fool/article/MTR三人转',
      },
      // {    数  据  删  除
      //   icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%8E%A9.svg',
      //   title: '河源刘文勇事件',
      //   desc: '本站唯一记录现实案件的??||听说其中有人是腐竹亲戚',
      //   link: '/fool/article/刘文勇事件',
      // },

      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%92%A9.svg',
        title: 'winshiftprsc传奇',
        desc: '嘴臭生物又污染你BLBL了',
        link: 'https://space.bilibili.com/340810466/dynamic',
      },

      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%8D%88.svg',
        title: '真·大瓜',
        desc: '大瓜！速看，马上撤回',
        link: '/fool/article/真大瓜',
      },
      {
        icon: '',
        title: '太岁老人笑传',
        desc: '大懒得评价',
        link: '/fool/article/太岁老人',
      },
      {
        icon: '',
        title: '微篇：二胡传',
        desc: '我可是大闲人',
        link: '/fool/article/二胡传',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%93%A6%EF%B8%8F.svg',
        title: 'XXS扬言开盒全网',
        desc: '快点🤓赶紧的',
        link: '/fool/article/XXS全网开盒',
      },
      {
        icon: '/others/一鸣超人/头像.jpg',
        title: '一鸣焯壬传',
        desc: 'WPLACE超级熊孩子',
        link: '/fool/article/一鸣超人传',
      },
      {
        icon: '/others/WPLACE/群头像.png',
        title: '“互助群”传奇',
        desc: '神权这一块',
        link: '/fool/article/wplace',
      },
      {
        icon: '',
        title: 'BPLZ传',
        desc: 'WPLACE又一个超级熊孩子',
        link: 'http://earthvillage.top/BPLZ/',
      },
    ],
  },
  {
    title: '福瑞专区',
    items: [
      {
        icon: '',
        title: '新二人传',
        desc: '论“滑稽”与“Doge”的重要性',
        link: '/fool/article/RoyalLion'
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%90%85.svg',
        title: '野虎传奇',
        desc: '虎哥威武',
        link: '/fool/article/huzi',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%A6%81.svg',
        title: '凯安大佬传',
        desc: 'PVP大佬の自豪',
        link: '/fool/article/kion',
      },
      {
        icon: '',
        title: '霄汉传',
        desc: '所以说，福瑞控野狗多',
        link: '/fool/article/霄汉',
      },
    ],
  },
  {
    title: '西普特别区',
    items: [
      {
        icon: 'https://www.emojiall.com/images/120/joypixels/0030.png',
        title: '零氪小西普传',
        desc: '',
        link: '/fool/article/零氪小西普'
      },
      {
        icon: '/others/接BOSS/头像.jpg',
        title: '代打哥传',
        desc: '🎮️',
        link: '/fool/article/代打哥',
      },
      {
        icon: '/others/＇/头像.jpg',
        title: '代打哥二号',
        desc: '一天内居然有两个素材',
        link: '/fool/article/代打哥二号',
      },
      {
        icon: 'https://www.emojiall.com/images/120/joypixels/0032-20e3.png',
        title: '二人转',
        desc: '双主角模式',
        link: '/fool/article/西普二人转',
      },
      {
        icon: '/others/增肌减脂/头像.jpg',
        title: '增肌减脂传',
        desc: '不可描述',
        link: '/fool/article/增肌减脂',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%E2%98%81%EF%B8%8F.svg',
        title: '小懒懒传',
        desc: '逆天云玩家',
        link: '/fool/article/小懒懒',
      },
      {
        icon: '/others/赵宇/头像.jpg',
        title: '赵宇',
        desc: '本人在线时长还没有代打的久',
        link: '/fool/article/赵宇',
      },
    ],
  },
  {
    title: '？？？',
    items: [
      {
        icon: 'https://cdn-0.emojis.wiki/emoji-pics/apple/taiwan-apple.png',
        title: '反动者',
        desc: '赖清德版《孤勇者》改编翻唱',
        link: '/fool/article/taiwan'
      },
      {
        icon: 'https://cdn-0.emojis.wiki/emoji-pics/apple/taiwan-apple.png',
        title: '《东亚孤岛生态观察》',
        desc: '台湾外来及变异物种泛滥实录',
        link: '/fool/article/台湾特色生物'
      },
      {
        icon: 'https://i0.hdslb.com/bfs/face/member/noface.jpg',
        title: '哔哩哔哩的“黑幕”',
        desc: '建党节视频也封？阿B相思了',
        link: '/fool/article/bilibili',
      },
      {
        icon: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f1ef_1f1f5/emoji.svg',
        title: 'YB-Neri传',
        desc: '小日本的狗',
        link: '/fool/article/YB-Neri',
      },
      {
        icon: '/others/4399/图标.gif',
        title: '4399传',
        desc: '神权这一块',
        link: '/fool/article/4399',
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
        link: 'https://github.com/MinecraftEarthVillage/fool/issues',
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
