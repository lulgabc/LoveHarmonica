export interface BasicsChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  read: string;
}

export const BASICS_CHAPTERS: BasicsChapter[] = [
  {
    id: "instrument",
    number: "01",
    title: "认识这件乐器",
    subtitle: "类型、构造、调性与第一把琴",
    description:
      "十孔、半音阶、复音到底有什么区别？一把口琴由哪些部分组成？第一把琴该买什么调、什么型号、多少钱？这一章把“买琴”变成一件有依据的事。",
    tags: ["选琴", "构造", "调性", "保养"],
    href: "/basics/instrument/",
    read: "12 分钟",
  },
  {
    id: "first-notes",
    number: "02",
    title: "第一口呼吸",
    subtitle: "持琴、含琴、单音与读 tab",
    description:
      "从怎么拿琴、怎么含、怎么呼吸开始，建立干净单音。你会学到唇含与舌堵的区别、腹式呼吸、长音练习，以及如何读懂 -2、-3'、4 这样的 tab。",
    tags: ["持琴", "单音", "呼吸", "tab"],
    href: "/basics/first-notes/",
    read: "14 分钟",
  },
  {
    id: "positions",
    number: "03",
    title: "把位与调性",
    subtitle: "Cross Harp、12 个把位与选琴表",
    description:
      "为什么 C 调口琴能吹 G 调蓝调？第二把位、第三把位、第十二把位分别在什么场合用？一张表解决“我该买哪把琴、吹哪个调”。",
    tags: ["第二把位", "Cross Harp", "选琴", "12 调"],
    href: "/basics/positions/",
    read: "11 分钟",
  },
  {
    id: "bending",
    number: "04",
    title: "压音与超吹",
    subtitle: "蓝调口琴的灵魂技巧",
    description:
      "哪些孔能压、能压多少、为什么压不响？从 2 孔吸音到 3 孔全音压音，再到超吹/超吸，这一章把“哭腔”拆成可以练的步骤。",
    tags: ["压音", "超吹", "blue notes", "调音器"],
    href: "/basics/bending/",
    read: "16 分钟",
  },
  {
    id: "rhythm",
    number: "05",
    title: "节奏、Chug 与舌堵",
    subtitle: "蓝调口琴首先是一件节奏乐器",
    description:
      "Shuffle、12 小节、chug、train、舌堵、八度、slap：这一章讲清楚“一个人怎么撑起一支乐队”，以及为什么节奏比音阶更重要。",
    tags: ["shuffle", "12 小节", "chug", "舌堵"],
    href: "/basics/rhythm/",
    read: "15 分钟",
  },
  {
    id: "theory",
    number: "06",
    title: "蓝调理论与即兴",
    subtitle: "音阶、和弦、目标音与句子",
    description:
      "蓝调音阶、Mixolydian、Dorian、I–IV–V、chord tone、call & response。不会让你变成理论家，但会让你知道自己在吹什么。",
    tags: ["音阶", "和声", "即兴", "phrasing"],
    href: "/basics/theory/",
    read: "17 分钟",
  },
  {
    id: "tone",
    number: "07",
    title: "音色与电声",
    subtitle: "从清音到 Chicago 失真",
    description:
      "手型、聚音、vibrato、growl、麦克风、音箱、反馈控制。Chicago 口琴的声音不是“效果器”，而是一整套呼吸与空间的配合。",
    tags: ["音色", "麦克风", "音箱", "Chicago"],
    href: "/basics/tone/",
    read: "14 分钟",
  },
  {
    id: "gear",
    number: "08",
    title: "器材、选购与维护",
    subtitle: "琴、麦、音箱、配件与保养",
    description:
      "从第一把 C 琴到第二把 A 琴，从 Green Bullet 到小电子管音箱，从清洁到换簧。把钱花在真正影响声音和手感的地方。",
    tags: ["器材", "选购", "维护", "预算"],
    href: "/basics/gear/",
    read: "13 分钟",
  },
  {
    id: "history",
    number: "09",
    title: "蓝调口琴小史",
    subtitle: "从德国工厂到 Chicago 的夜晚",
    description:
      "1820 年代的欧洲、1857 年的 Hohner、1896 年的 Marine Band、1920 年代的 race records、1940 年代的电声革命，以及今天的 YouTube 课堂。",
    tags: ["历史", "Hohner", "Chicago", "流派"],
    href: "/basics/history/",
    read: "12 分钟",
  },
  {
    id: "glossary",
    number: "10",
    title: "术语与速查",
    subtitle: "60+ 个蓝调口琴关键词",
    description:
      "压音、超吹、把位、chug、turnaround、Green Bullet……按类别浏览或直接搜索，随时查，不用翻整本站。",
    tags: ["术语", "速查", "搜索"],
    href: "/basics/glossary/",
    read: "工具页",
  },
];
