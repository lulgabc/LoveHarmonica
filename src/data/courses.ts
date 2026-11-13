export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  level: "入门" | "进阶" | "高级" | "欣赏";
  topic: string;
  description: string;
  why: string;
  featured?: boolean;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  teacher: string;
  url: string;
  type: "免费课程" | "免费试听" | "付费课程" | "曲谱工具" | "参考网站" | "播客社区";
  price: "免费" | "免费试听" | "付费";
  level: "入门" | "进阶" | "高级" | "全阶段" | "欣赏";
  lang: "英文" | "中文" | "多语";
  description: string;
  why: string;
  tags: string[];
  featured?: boolean;
}

export interface Channel {
  id: string;
  name: string;
  teacher: string;
  url: string;
  lang: "英文" | "中文";
  style: string;
  level: "入门" | "进阶" | "高级" | "全阶段" | "欣赏";
  description: string;
  why: string;
  featured?: boolean;
}

export const VIDEOS: Video[] = [
  {
    id: "gussow-day1",
    youtubeId: "ki2-tcsELus",
    title: "How To Play Blues Harmonica – Absolute Beginner | Day 1",
    channel: "Gussow's classic blues harmonica videos",
    level: "入门",
    topic: "第一课 · 呼吸与单音",
    description:
      "Adam Gussow 的经典第一课：拿一把 C 调口琴，从站姿、含琴、呼吸、单音开始，直接吹出第一句蓝调。",
    why: "如果你只想先看一支视频，就看这支。它不卖关子，第一分钟就让你发出蓝调的声音。",
    featured: true,
  },
  {
    id: "gussow-shuffle",
    youtubeId: "u3_faQFNczQ",
    title: "fantastic shuffle rhythm for harmonica beginners",
    channel: "Gussow's classic blues harmonica videos",
    level: "入门",
    topic: "节奏 · Shuffle",
    description:
      "把 shuffle 的呼吸、音头、重音和“火车感”拆开示范，适合每天跟练 10 分钟。",
    why: "蓝调口琴首先是节奏乐器。先把这个 shuffle 吹稳，比多学十个 lick 更有用。",
    featured: true,
  },
  {
    id: "tomlin-first",
    youtubeId: "4XlJ4KLcu7U",
    title: "This Should Be Everyone's First Blues Harmonica Lesson",
    channel: "Tomlin Leckie",
    level: "入门",
    topic: "第一课 · 短小完整",
    description:
      "Tomlin 用 6 分钟讲清三件事：怎么含琴、怎么吹出干净单音、怎么用最简单的节奏吹出蓝调味。",
    why: "非常适合完全零基础。看完立刻能练，不会陷入“先学三个月乐理”的泥潭。",
    featured: true,
  },
  {
    id: "tomlin-chug",
    youtubeId: "y4ZeTWVcMnw",
    title: "Chugging Basics: Beginner Blues Harmonica Lesson (C Harmonica) + Free Tab",
    channel: "Tomlin Leckie",
    level: "入门",
    topic: "节奏 · Chugging",
    description:
      "从单音到和弦 chug，再到经典 12 小节伴奏型。附免费 tab，适合和节拍器一起练。",
    why: "学会 chug，你才有能力一个人撑起 12 小节，也才有资格在乐队里“让出空间”。",
  },
  {
    id: "tomlin-12bar",
    youtubeId: "BbJCep7HZ_A",
    title: "Your FIRST 12 Bar Blues on Harmonica",
    channel: "Tomlin Leckie",
    level: "入门",
    topic: "曲式 · 12 小节",
    description:
      "用最简单的方式把 12 小节蓝调拆成 I–IV–V，并示范怎么在每一小节里安排呼吸和句子。",
    why: "12 小节不是考试题，是你可以反复回去的家。越早把它吹成肌肉记忆越好。",
  },
  {
    id: "tomlin-licks",
    youtubeId: "4cOAR5VX5tI",
    title: "7 Easy Blues Harmonica Licks - C Harmonica Lesson + Free harp tab",
    channel: "Tomlin Leckie",
    level: "入门",
    topic: "语汇 · 7 个乐句",
    description:
      "七个真正能用的短乐句，从简单到稍难，全部配 tab，并示范如何放进 12 小节里。",
    why: "不要背 100 个 lick。先把这 7 个吹到不用想，再学怎么把它们拼成一句话。",
  },
  {
    id: "liam-bend",
    youtubeId: "67ZbI4S-hTQ",
    title: "3 EASY Steps to Bending on Harmonica | Beginner Harmonica Lesson",
    channel: "LearnTheHarmonica.com",
    level: "入门",
    topic: "技巧 · 压音入门",
    description:
      "Liam Ward 用三个步骤拆解压音：口型、舌头位置、气流方向。重点讲“不要用力吸”。",
    why: "压音是蓝调口琴的分水岭。这支视频把最常见的错误讲得很清楚，适合第一次尝试。",
  },
  {
    id: "liam-bend-deep",
    youtubeId: "dT7Pkjts7YA",
    title: "How to bend notes on the harmonica (beginner onwards)",
    channel: "LearnTheHarmonica.com",
    level: "进阶",
    topic: "技巧 · 压音系统",
    description:
      "更完整的压音课：哪些孔能压、压多少、如何用调音器检查、如何把压音放进句子里。",
    why: "当你能压响之后，这支视频会告诉你“压得准、压得稳、压得有用”差在哪里。",
  },
  {
    id: "com-first",
    youtubeId: "Zc-EcRFrxcA",
    title: "Beginner Harmonica Lesson #1 (Your Very First Lesson)",
    channel: "Harmonica com",
    level: "入门",
    topic: "第一课 · 单音与含琴",
    description:
      "Luke 的第一课，节奏轻松，重点在嘴唇放松、单音干净和“不要用蛮力”。",
    why: "如果你的口型总是漏气、吹两三个孔一起响，这支视频会帮你回到最基础的感觉。",
  },
  {
    id: "com-blues",
    youtubeId: "DmX_p990A0Y",
    title: "Beginner Blues Harmonica Lesson #1 (Your Very First Blues Lesson)",
    channel: "Harmonica com",
    level: "入门",
    topic: "蓝调 · 第一句",
    description:
      "从 2 孔吸音开始，教你第一句真正像蓝调的句子，并解释为什么这些音“听起来对”。",
    why: "把“蓝调音阶”翻译成几个可以马上吹的音，而不是一张需要背的表。",
  },
  {
    id: "com-scale",
    youtubeId: "JohYv4OBqmA",
    title: "The Blues Scale for Harmonica",
    channel: "Harmonica com",
    level: "进阶",
    topic: "理论 · 蓝调音阶",
    description:
      "在 C 调口琴上找到第二把位的蓝调音阶，并解释 b3、b5、b7 分别在哪些孔。",
    why: "把音阶当成“地图”而不是“爬格子”。知道每个音为什么在那里，solo 才不会像练习曲。",
  },
  {
    id: "ricci-first",
    youtubeId: "Apm_psk7NN0",
    title: "Beginning Harmonica, Lesson #1 (C Harp)",
    channel: "Jason Ricci",
    level: "入门",
    topic: "第一课 · 另一种讲法",
    description:
      "Jason Ricci 的早期入门课，语速快、信息密度高，适合已经看过一两套入门课的人换换耳朵。",
    why: "同一个基础，换一个老师讲，往往能打通你卡住的那一点。",
  },
  {
    id: "ricci-sonnyboy",
    youtubeId: "aGdbQfb5smc",
    title: "Sonny Boy Style Crash Course Harmonica Lesson",
    channel: "Jason Ricci",
    level: "进阶",
    topic: "风格 · Sonny Boy",
    description:
      "用 Sonny Boy Williamson 的语汇讲“少即是多”：短句、留白、音色和节奏的拉力。",
    why: "当你开始堆音符的时候，回来看看 Sonny Boy：真正难的是知道什么时候不吹。",
  },
  {
    id: "shellist-bend",
    youtubeId: "thS6WDlpC0Q",
    title: "5 ways to attack and practice bending on the harmonica",
    channel: "Ronnie Shellist",
    level: "进阶",
    topic: "技巧 · 压音练习法",
    description:
      "五种不同的压音入手方式，帮你找到最适合自己口腔结构的那一种。",
    why: "压音不是只有一种“正确口型”。多试几种路径，往往比死磕一个动作更快。",
  },
  {
    id: "shellist-12bar",
    youtubeId: "c_ozwnGGUIY",
    title: "12 bar Bending/Groove Practice on C harmonica",
    channel: "Ronnie Shellist",
    level: "进阶",
    topic: "练习 · 压音 + 律动",
    description:
      "把压音练习放进 12 小节律动里，而不是孤立地“把音压下去”。",
    why: "技术只有在节奏里才有意义。用这支视频练习“压音不丢拍”。",
  },
  {
    id: "levy-overblow",
    youtubeId: "ttkV2DnYZIg",
    title: "Harmonica Lesson: Learn How to Overblow with Howard Levy",
    channel: "ArtistWorks",
    level: "高级",
    topic: "技巧 · 超吹",
    description:
      "Howard Levy 亲自示范超吹的姿势、气流和听觉目标。短短五分钟，信息量很大。",
    why: "如果你已经能稳定压音，想打开十孔口琴的半音世界，这是最权威的入口之一。",
  },
  {
    id: "levy-bend",
    youtubeId: "zh7mW-zLMr0",
    title: "Harmonica Lesson: An Introduction to Bending with Howard Levy",
    channel: "ArtistWorks",
    level: "进阶",
    topic: "技巧 · 压音的物理",
    description:
      "从“两个簧片如何互动”讲压音，帮助你理解为什么某些音能压、某些音不能。",
    why: "理解原理之后，练习会从“碰运气”变成“有方向”。",
  },
  {
    id: "filip-jazz",
    youtubeId: "DspyJ2MeM8s",
    title: "Harmonica Lesson: How to Play Jazz in 3rd Position on Diatonic Harmonica",
    channel: "Filip Jers Music",
    level: "高级",
    topic: "爵士 · 第三把位",
    description:
      "Filip Jers 用第三把位讲爵士蓝调的音阶、目标和声与句子构造。",
    why: "当 12 小节 blues 已经不够用，第三把位会给你一个更小调、更爵士的颜色。",
  },
  {
    id: "tongue-block",
    youtubeId: "CULKRfgRBXs",
    title: "How To Tongue Block (Beginner Harmonica Lesson on C Blues Harp)",
    channel: "LearnTheHarmonica.com",
    level: "进阶",
    topic: "技巧 · 舌堵",
    description:
      "从舌头位置、单音、八度到舌堵滑音，循序渐进地建立舌堵能力。",
    why: "舌堵不是“高级玩家的炫技”，它直接改变你的音色、和弦与节奏能力。",
  },
  {
    id: "indiara-cm",
    youtubeId: "uIss2Qmmc5k",
    title: "Indiara Sfair & Arthur Sowinski - Improvisation in Cm",
    channel: "Indiara Sfair",
    level: "欣赏",
    topic: "聆听 · 现代蓝调",
    description:
      "一段在 C 小调上的即兴，旋律、音色、呼吸和空间感都非常值得反复听。",
    why: "有时候最好的课不是“教你吹”，而是让你重新想吹。",
  },
];

export const CHANNELS: Channel[] = [
  {
    id: "gussow",
    name: "Modern Blues Harmonica",
    teacher: "Adam Gussow",
    url: "https://www.youtube.com/@Modernbluesharmonica",
    lang: "英文",
    style: "Chicago / 传统蓝调",
    level: "全阶段",
    description:
      "YouTube 口琴教学的先驱之一。数百支免费视频，从第一课到风格、历史、设备、访谈都有。",
    why: "把蓝调口琴当作一种文化来教，而不是一套技巧。适合愿意慢慢泡在里面的人。",
    featured: true,
  },
  {
    id: "gussow-classic",
    name: "Gussow's classic blues harmonica videos",
    teacher: "Adam Gussow",
    url: "https://www.youtube.com/@gussowsclassicbluesharmoni2726",
    lang: "英文",
    style: "Chicago / 传统蓝调",
    level: "全阶段",
    description:
      "更短、更聚焦的经典系列，适合按主题搜索：shuffle、bending、train、tongue blocking、12-bar。",
    why: "当你想解决一个具体问题，而不是从头学一遍，这个频道更方便。",
  },
  {
    id: "tomlin",
    name: "Tomlin Leckie",
    teacher: "Tomlin Leckie",
    url: "https://www.youtube.com/@TomlinHarmonica",
    lang: "英文",
    style: "Blues / 系统入门",
    level: "入门",
    description:
      "爱丁堡口琴教师，讲解清楚、节奏友好，免费视频覆盖从第一音到进阶即兴。",
    why: "最适合“完全零基础 + 想按顺序学”的人。先看他的免费库，再决定要不要进付费学校。",
    featured: true,
  },
  {
    id: "liam",
    name: "LearnTheHarmonica.com",
    teacher: "Liam Ward",
    url: "https://www.youtube.com/@learntheharmonica",
    lang: "英文",
    style: "Blues / 多风格",
    level: "全阶段",
    description:
      "免费视频 + 大量免费 tab + 免费资源包，覆盖 blues、bending、tongue blocking、歌曲和器材。",
    why: "课程结构清楚，配套 tab 多，适合自学时“看一支、练一支、查一份谱”。",
    featured: true,
  },
  {
    id: "harmonicacom",
    name: "Harmonica com",
    teacher: "Luke Clebsch / JP Allen",
    url: "https://www.youtube.com/@Harmonicacom",
    lang: "英文",
    style: "Blues / 流行 / 入门",
    level: "入门",
    description:
      "面向初学者的高制作视频，强调 play-along 和“马上能吹”。免费课足够撑过第一个月。",
    why: "如果你容易被枯燥的练习吓退，Luke 的节奏和语气会让你更愿意拿起琴。",
  },
  {
    id: "shellist",
    name: "Ronnie Shellist",
    teacher: "Ronnie Shellist",
    url: "https://www.youtube.com/@Harmonica123",
    lang: "英文",
    style: "Blues / 德州与芝加哥",
    level: "进阶",
    description:
      "蓝调-focused 的教学，强调音色、压音、律动和真实乐队语境。免费课偏中高级。",
    why: "当你想从“会吹”走到“吹得像蓝调”，他的课会逼你面对节奏和音色。",
  },
  {
    id: "ricci",
    name: "Jason Ricci",
    teacher: "Jason Ricci",
    url: "https://www.youtube.com/@JasonRicci",
    lang: "英文",
    style: "现代蓝调 / 即兴",
    level: "高级",
    description:
      "每周免费课，信息密度极高，覆盖音色、即兴、设备、风格、乐句管理和行业经验。",
    why: "适合已经有一定基础、想突破瓶颈的人。他的“Free Friday”系列是宝藏。",
  },
  {
    id: "barrett",
    name: "David Barrett",
    teacher: "David Barrett",
    url: "https://www.youtube.com/@bluesharmonicateacher",
    lang: "英文",
    style: "Blues / 系统教学",
    level: "全阶段",
    description:
      "BluesHarmonica.com 创始人，出版过大量教材。视频偏系统、偏学术，但非常扎实。",
    why: "如果你想认真打基础、学舌堵和位置理论，他的体系值得投入。",
  },
  {
    id: "levy",
    name: "Howard Levy",
    teacher: "Howard Levy",
    url: "https://www.youtube.com/@HowardLevyland",
    lang: "英文",
    style: "爵士 / 超吹 / 多风格",
    level: "高级",
    description:
      "十孔口琴超吹技术的先驱之一，Béla Fleck & the Flecktones 创始成员。",
    why: "当你想把十孔口琴当作完全半音化的乐器，他是绕不开的名字。",
  },
  {
    id: "filip",
    name: "Filip Jers Music",
    teacher: "Filip Jers",
    url: "https://www.youtube.com/@FilipJersMusic",
    lang: "英文",
    style: "爵士 / 瑞典民谣 / 蓝调",
    level: "高级",
    description:
      "瑞典爵士口琴家，演奏与教学都极有品味，内容覆盖第三把位、爵士标准曲和音色。",
    why: "想从 blues 走向 jazz，或者想让自己的句子更“会呼吸”，看他。",
  },
  {
    id: "indiara",
    name: "Indiara Sfair",
    teacher: "Indiara Sfair",
    url: "https://www.youtube.com/@IndiaraSfair",
    lang: "英文",
    style: "现代蓝调 / 巴西音乐",
    level: "欣赏",
    description:
      "巴西口琴家，以极具歌唱性的音色、清音演奏和现代蓝调语汇闻名。",
    why: "不一定要跟着学，单是听她怎么处理一个长音，就够上一课。",
  },
  {
    id: "jonah",
    name: "Jonah Fox - Harmonica Revolution",
    teacher: "Jonah Fox",
    url: "https://www.youtube.com/@HarmonicaRevolution",
    lang: "英文",
    style: "Blues / 入门",
    level: "入门",
    description:
      "短小、友好、节奏快的入门课，适合在碎片时间看一支、练一个动作。",
    why: "如果你需要“今天就能学会一点”的正反馈，他的短视频很合适。",
  },
  {
    id: "wilde",
    name: "Will Wilde",
    teacher: "Will Wilde",
    url: "https://www.youtube.com/@willharmonicawilde",
    lang: "英文",
    style: "Rock / Blues",
    level: "进阶",
    description:
      "英国口琴手，擅长摇滚蓝调和 Wilde 调音，讲解直接、示范有冲击力。",
    why: "想吹得更“野”、更有舞台感，可以从他的音头和效果器思路里偷一点东西。",
  },
  {
    id: "gruenling",
    name: "BadAss Harmonica",
    teacher: "Dennis Gruenling",
    url: "https://www.youtube.com/@BadAssHarmonica",
    lang: "英文",
    style: "Jump Blues / Swing",
    level: "高级",
    description:
      "Dennis Gruenling 的频道，专注 jump blues、swing、舌堵和复古音色。",
    why: "当你想让蓝调“跳起来”，而不是一直慢吞吞地哭，去听他的八度和 swing。",
  },
  {
    id: "zhang",
    name: "蓝调口琴张晓松",
    teacher: "张晓松",
    url: "https://space.bilibili.com/290043892",
    lang: "中文",
    style: "Blues / 中文教学",
    level: "全阶段",
    description:
      "中文蓝调口琴教学的重要入口，B 站有大量免费技巧课、曲子示范和器材内容。",
    why: "如果你更习惯中文讲解，先从张晓松老师的免费视频建立术语和手感。",
    featured: true,
  },
];

export const COURSES: Course[] = [
  {
    id: "gussow-beginner-guide",
    title: "Adam Gussow 的初学者路线",
    provider: "ModernBluesHarmonica.com",
    teacher: "Adam Gussow",
    url: "http://www.modernbluesharmonica.com/beginning_harmonica.html",
    type: "免费课程",
    price: "免费",
    level: "入门",
    lang: "英文",
    description:
      "一个老派但极其扎实的免费入门页：先买什么琴、先看哪几支视频、12 小节怎么数、什么时候该找老师。",
    why: "信息不花哨，但每一句都来自几十年的教学经验。适合当作“总目录”。",
    tags: ["入门路线", "12 小节", "免费视频"],
    featured: true,
  },
  {
    id: "tomlin-library",
    title: "Free Harmonica Lessons Library",
    provider: "Tomlin Harmonica Lessons",
    teacher: "Tomlin Leckie",
    url: "https://www.tomlinharmonicalessons.com/free-harmonica-lessons-library",
    type: "免费课程",
    price: "免费",
    level: "全阶段",
    lang: "英文",
    description:
      "按 Complete Beginner / Beginner / Intermediate / Advanced 分级的免费课程库，视频 + 文章 + tab。",
    why: "最适合按顺序刷。先从头到尾看一遍，再挑自己卡住的那一级反复练。",
    tags: ["分级课程", "免费", "系统"],
    featured: true,
  },
  {
    id: "liam-free",
    title: "Free Beginner Harmonica Lessons",
    provider: "LearnTheHarmonica.com",
    teacher: "Liam Ward",
    url: "https://www.learntheharmonica.com/post/free-beginner-harmonica-lessons",
    type: "免费课程",
    price: "免费",
    level: "入门",
    lang: "英文",
    description:
      "从呼吸、音色、节拍、单音到第一首歌的完整免费路径，配大量免费 tab 和资源包。",
    why: "页面本身就是一份“先学什么”的清单，适合不知道下一步该干嘛的时候打开。",
    tags: ["入门", "tab", "免费资源"],
    featured: true,
  },
  {
    id: "com-beginner",
    title: "Harmonica.com 免费初学者课程",
    provider: "Harmonica.com",
    teacher: "Luke Clebsch",
    url: "https://www.harmonica.com/lessons/all/?term=beginner",
    type: "免费课程",
    price: "免费",
    level: "入门",
    lang: "英文",
    description:
      "大量短课，覆盖单音、含琴、节拍、第一首歌、blues 入门和器材。每支都配练习目标。",
    why: "如果你喜欢“今天看一支、今天就会一点”的节奏，从这里开始最轻松。",
    tags: ["短视频", "入门", "play-along"],
  },
  {
    id: "com-blues",
    title: "Blues Harmonica for Beginners",
    provider: "Harmonica.com",
    teacher: "Luke Clebsch",
    url: "https://www.harmonica.com/blues-harmonica-for-beginners/",
    type: "免费课程",
    price: "免费",
    level: "入门",
    lang: "英文",
    description:
      "专门讲 blues 的入门页：第二把位、蓝调音阶、chug、第一段 solo 和练习顺序。",
    why: "比综合入门课更聚焦蓝调。适合已经能吹单音、想直接进入 blues 的人。",
    tags: ["blues", "第二把位", "入门"],
  },
  {
    id: "shellist-free",
    title: "Free Harp Lessons",
    provider: "Harmonica123",
    teacher: "Ronnie Shellist",
    url: "https://www.harmonica123.com/free-lessons",
    type: "免费课程",
    price: "免费",
    level: "进阶",
    lang: "英文",
    description:
      "Ronnie 的免费课合集：12 小节压音、3 孔 shuffle、蓝调即兴、Little Walter / James Cotton 风格。",
    why: "免费内容已经足够让你从“会吹音”走到“会造句”。适合作为第二阶段的主线。",
    tags: ["blues", "压音", "即兴"],
  },
  {
    id: "barrett-plan",
    title: "Beginning Study Plan",
    provider: "BluesHarmonica.com",
    teacher: "David Barrett",
    url: "https://www.bluesharmonica.com/beginning_study_plan",
    type: "免费试听",
    price: "免费试听",
    level: "入门",
    lang: "英文",
    description:
      "David Barrett 的初级学习计划，展示了他如何把舌堵、位置、12 小节和曲目排成一条线。免费可看计划与样课。",
    why: "想认真打基础、又不介意付费的人，可以先看这份计划判断是否适合自己。",
    tags: ["系统", "舌堵", "免费样课"],
  },
  {
    id: "hohner-30",
    title: "Hohner 30 天免费课程",
    provider: "Hohner",
    teacher: "多位认证教师",
    url: "https://jam.hohner.de/freelessons",
    type: "免费试听",
    price: "免费试听",
    level: "入门",
    lang: "多语",
    description:
      "Hohner 官方合作教师平台，提供 30 天免费试听（通常需注册/随 Hohner 口琴购买获取资格），包含 David Barrett、Liam Ward、Yvonnick Prené 等教师。",
    why: "一次可以试多个老师，找到最适合自己耳朵和语言的那一个。",
    tags: ["官方", "试听", "多教师"],
  },
  {
    id: "artistworks-levy",
    title: "Howard Levy Harmonica School",
    provider: "ArtistWorks",
    teacher: "Howard Levy",
    url: "https://artistworks.com/howard-levy",
    type: "免费试听",
    price: "免费试听",
    level: "高级",
    lang: "英文",
    description:
      "660+ 视频、110+ 小时，覆盖 blues、jazz、古典、世界音乐和超吹。可看免费样课。",
    why: "如果你想把十孔口琴推到“完整乐器”的层次，这是最系统的路径之一。",
    tags: ["爵士", "超吹", "高级"],
  },
  {
    id: "tomlin-school",
    title: "Tomlin Harmonica School",
    provider: "Tomlin Harmonica School",
    teacher: "Tomlin Leckie",
    url: "https://www.tomlinharmonicaschool.com/",
    type: "免费试听",
    price: "免费试听",
    level: "全阶段",
    lang: "英文",
    description:
      "按月订阅的系统学校，7 天免费试用。课程从第一音到 advanced intermediate，含 jam tracks、反馈和社区。",
    why: "适合需要“有人告诉我下一步练什么”的人。免费试用足够判断是否合拍。",
    tags: ["系统", "社区", "试用"],
  },
  {
    id: "liam-school",
    title: "LearnTheHarmonica School",
    provider: "LearnTheHarmonica.com",
    teacher: "Liam Ward",
    url: "https://www.learntheharmonica.com/",
    type: "免费试听",
    price: "免费试听",
    level: "全阶段",
    lang: "英文",
    description:
      "20 门 step-by-step 课程、1900+ 视频、200+ jam tracks，14 天免费试用。",
    why: "课程量大、分类细，适合想长期自学、又需要结构和 tab 库的人。",
    tags: ["系统", "jam tracks", "试用"],
  },
  {
    id: "my-harmonica-studio",
    title: "My Harmonica Studio",
    provider: "My Harmonica Studio",
    teacher: "Yvonnick Prené",
    url: "https://www.myharmonicastudio.com/",
    type: "付费课程",
    price: "付费",
    level: "高级",
    lang: "英文",
    description:
      "爵士口琴家 Yvonnick Prené 的课程，专注 jazz、chromatic 与即兴，适合已经跨过 blues 入门的人。",
    why: "如果你最终想吹 jazz standards，而不是只吹 12 小节，这里是一个自然的下一站。",
    tags: ["爵士", "半音阶", "即兴"],
  },
  {
    id: "sonic-junction",
    title: "Sonic Junction — Dennis Gruenling",
    provider: "Sonic Junction",
    teacher: "Dennis Gruenling",
    url: "https://www.sonicjunction.com/",
    type: "付费课程",
    price: "付费",
    level: "高级",
    lang: "英文",
    description:
      "Dennis Gruenling 的 jump blues / swing 口琴课程，重点在舌堵、八度、音色和复古风格。",
    why: "当你想摆脱“只会吹单音旋律”，学会用和弦、八度和 swing 让蓝调跳起来。",
    tags: ["jump blues", "swing", "舌堵"],
  },
  {
    id: "harp-tabs",
    title: "HarpTabs",
    provider: "HarpTabs.com",
    teacher: "社区维护",
    url: "https://harptabs.com/",
    type: "曲谱工具",
    price: "免费",
    level: "全阶段",
    lang: "英文",
    description:
      "自 2004 年运行的口琴 tab 社区，27,000+ 份 diatonic / chromatic / tremolo 谱。",
    why: "找歌、找 riff、找冷门曲目时最有用。注意 tab 质量参差，最好对照录音。",
    tags: ["tab", "曲谱", "社区"],
  },
  {
    id: "liam-tabs",
    title: "Free Harmonica Tabs",
    provider: "LearnTheHarmonica.com",
    teacher: "Liam Ward",
    url: "https://www.learntheharmonica.com/free-harmonica-tabs",
    type: "曲谱工具",
    price: "免费",
    level: "全阶段",
    lang: "英文",
    description:
      "按风格和艺人整理的免费 tab，质量较稳定，很多还配教学视频。",
    why: "想学一首具体的歌，先来这里找；如果没有，再去 HarpTab 或 YouTube 搜。",
    tags: ["tab", "歌曲", "免费"],
  },
  {
    id: "harmonica-com-tabs",
    title: "Harmonica.com Tabs",
    provider: "Harmonica.com",
    teacher: "Luke Clebsch",
    url: "https://www.harmonica.com/songs/tabs",
    type: "曲谱工具",
    price: "免费",
    level: "入门",
    lang: "英文",
    description:
      "面向初学者的热门歌曲 tab，通常配 jam track 和教学视频。",
    why: "选曲偏流行/摇滚，适合在练 blues 之余换换口味、保持兴趣。",
    tags: ["tab", "流行", "入门"],
  },
  {
    id: "pat-missin",
    title: "Pat Missin's Harmonica Site",
    provider: "Pat Missin",
    teacher: "Pat Missin",
    url: "https://www.patmissin.com/",
    type: "参考网站",
    price: "免费",
    level: "全阶段",
    lang: "英文",
    description:
      "口琴历史、调音、维修、改装、型号档案的深度资料库。不是教程，但极其有用。",
    why: "当你想知道“这把琴为什么这样响”“这个调音能不能改”，来这里查。",
    tags: ["历史", "调音", "维修"],
  },
  {
    id: "spah",
    title: "SPAH — Society for the Preservation and Advancement of the Harmonica",
    provider: "SPAH",
    teacher: "社区",
    url: "https://spah.org/",
    type: "播客社区",
    price: "免费",
    level: "全阶段",
    lang: "英文",
    description:
      "口琴界的国际社区与年度大会，连接玩家、教师、制琴师和收藏家。",
    why: "想找老师、找组织、找同好，或者想参加一次口琴节，从这里开始。",
    tags: ["社区", "大会", "资源"],
  },
  {
    id: "happy-hour",
    title: "Happy Hour Harmonica Podcast",
    provider: "Happy Hour Harmonica Podcast",
    teacher: "Neil Warren",
    url: "https://www.harmonicahappyhour.com/",
    type: "播客社区",
    price: "免费",
    level: "全阶段",
    lang: "英文",
    description:
      "长篇口琴访谈播客，嘉宾包括 Jason Ricci、David Barrett、Filip Jers、Dennis Gruenling 等。",
    why: "练琴之外，听他们聊怎么学、怎么活、怎么听，往往比多练一小时更有启发。",
    tags: ["播客", "访谈", "历史"],
  },
  {
    id: "tenholes",
    title: "蓝调口琴网（张晓松）",
    provider: "蓝调口琴网",
    teacher: "张晓松",
    url: "http://www.tenholes.com/",
    type: "免费课程",
    price: "免费",
    level: "全阶段",
    lang: "中文",
    description:
      "中文蓝调口琴的老牌网站，含系统教程、曲谱、伴奏、名家介绍和论坛资料。",
    why: "中文学习者的重要入口。先用免费教程建立术语，再决定是否进付费课程。",
    tags: ["中文", "教程", "曲谱"],
    featured: true,
  },
  {
    id: "kouqinke",
    title: "蓝网口琴课",
    provider: "蓝调口琴网",
    teacher: "张晓松",
    url: "https://www.kouqinke.com/",
    type: "付费课程",
    price: "付费",
    level: "全阶段",
    lang: "中文",
    description:
      "中文系统课：十孔初级 30 关、压音进阶 30 关、高级技巧与半音阶课程，含作业和点评。",
    why: "如果你需要中文讲解 + 作业反馈 + 闯关式结构，这是目前比较完整的选择。",
    tags: ["中文", "系统", "作业点评"],
  },
  {
    id: "bilibili-jdr",
    title: "从零开始自学布鲁斯口琴（JDR 系列）",
    provider: "Bilibili",
    teacher: "吹口琴的水",
    url: "https://www.bilibili.com/video/BV1Z54y1z7bv",
    type: "免费课程",
    price: "免费",
    level: "入门",
    lang: "中文",
    description:
      "10 集免费入门系列：认识口琴、持琴、气息、单音、C 大调音阶、三度模进、低音区压音、一把位/二把位。",
    why: "中文免费入门里结构比较完整的一套，适合配合本站路线图的前 4 周。",
    tags: ["中文", "入门", "免费"],
  },
  {
    id: "bilibili-zhang",
    title: "十孔口琴技巧教学（合集）",
    provider: "Bilibili",
    teacher: "张晓松",
    url: "https://www.bilibili.com/video/BV1iW4y1o7oS",
    type: "免费课程",
    price: "免费",
    level: "进阶",
    lang: "中文",
    description:
      "18 集技巧合集：腹式呼吸、单音、手震音、吐音、滑音、压音趋势、压音滑音、吹气压音、颤音等。",
    why: "当你想系统补齐中文术语和技巧细节，这个合集比零散短视频更靠谱。",
    tags: ["中文", "技巧", "压音"],
  },
  {
    id: "angus",
    title: "藍調口琴入門網上課程",
    provider: "Gloomy Island Blues Festival",
    teacher: "Angus Tang",
    url: "https://bluesharp.thinkific.com/",
    type: "付费课程",
    price: "付费",
    level: "入门",
    lang: "中文",
    description:
      "香港口琴手 Angus Tang 的粤语/中文入门课，含器材、基础技巧、曲目和作业反馈。",
    why: "粤语学习者或多语言学习者可以看看，课程设计偏“从零到能吹一首”。",
    tags: ["中文", "粤语", "入门"],
  },
];

export const FEATURED_CHANNELS = CHANNELS.filter((channel) => channel.featured);
export const FEATURED_VIDEOS = VIDEOS.filter((video) => video.featured);
export const FEATURED_COURSES = COURSES.filter((course) => course.featured);
