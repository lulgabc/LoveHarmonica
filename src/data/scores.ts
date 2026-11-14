export type ScoreLevel = "入门" | "进阶" | "高级";

export type ScoreCategory =
  | "基础训练"
  | "音阶与琶音"
  | "压音专项"
  | "节奏与舌堵"
  | "蓝调乐句"
  | "12 小节练习曲"
  | "旋律与视奏"
  | "爵士蓝调";

export type ScorePosition = "1st" | "2nd" | "3rd" | "12th";

export interface ScoreToken {
  hole: number;
  dir: "blow" | "draw";
  bend: number;
  beats: number;
  rest?: boolean;
}

export interface Score {
  id: string;
  slug: string;
  title: string;
  category: ScoreCategory;
  level: ScoreLevel;
  key: string;
  harp: string;
  position: ScorePosition;
  meter: "4/4" | "3/4" | "12/8";
  bars: number;
  tempo: number;
  techniques: string[];
  description: string;
  tips: string;
  source: "original" | "traditional";
  featured?: boolean;
  tokens: ScoreToken[];
}

export const SCORES: Score[] = [
  {
    "id": "s001",
    "slug": "s001",
    "title": "长音呼吸 · 基本型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 64,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音都吹满 4 拍，先不要换气；听音尾是否稳定。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s002",
    "slug": "s002",
    "title": "长音呼吸 · 长短型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 68,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音都吹满 4 拍，先不要换气；听音尾是否稳定。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s003",
    "slug": "s003",
    "title": "长音呼吸 · 留白型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 60,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音都吹满 4 拍，先不要换气；听音尾是否稳定。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s004",
    "slug": "s004",
    "title": "单音巡航 · 基本型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 66,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "换孔时只移动琴，不要移动头；保持口型不变。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s005",
    "slug": "s005",
    "title": "单音巡航 · 长短型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 70,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "换孔时只移动琴，不要移动头；保持口型不变。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s006",
    "slug": "s006",
    "title": "单音巡航 · 留白型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 62,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "换孔时只移动琴，不要移动头；保持口型不变。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s007",
    "slug": "s007",
    "title": "低音区散步 · 基本型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 68,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "低音区容易不自觉压音；保持口腔放松，让音色明亮。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 1,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 1,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 1,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s008",
    "slug": "s008",
    "title": "低音区散步 · 长短型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "低音区容易不自觉压音；保持口腔放松，让音色明亮。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 1,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 1,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 1,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s009",
    "slug": "s009",
    "title": "低音区散步 · 留白型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 64,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "低音区容易不自觉压音；保持口腔放松，让音色明亮。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 1,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 1,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 1,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s010",
    "slug": "s010",
    "title": "中音区散步 · 基本型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 70,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "把每个音吹成同样大小；不要因为换孔而改变音量。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s011",
    "slug": "s011",
    "title": "中音区散步 · 长短型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 74,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "把每个音吹成同样大小；不要因为换孔而改变音量。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s012",
    "slug": "s012",
    "title": "中音区散步 · 留白型",
    "category": "基础训练",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 66,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "把每个音吹成同样大小；不要因为换孔而改变音量。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s013",
    "slug": "s013",
    "title": "高音区散步 · 基本型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "高音区用更细、更集中的气流；不要用喉咙挤。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s014",
    "slug": "s014",
    "title": "高音区散步 · 长短型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 76,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "高音区用更细、更集中的气流；不要用喉咙挤。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s015",
    "slug": "s015",
    "title": "高音区散步 · 留白型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 68,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "高音区用更细、更集中的气流；不要用喉咙挤。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s016",
    "slug": "s016",
    "title": "压音前的准备 · 基本型",
    "category": "基础训练",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 74,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "先吹准每个原音，再尝试压音；不要把“压音”当成默认动作。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s017",
    "slug": "s017",
    "title": "压音前的准备 · 长短型",
    "category": "基础训练",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "先吹准每个原音，再尝试压音；不要把“压音”当成默认动作。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s018",
    "slug": "s018",
    "title": "压音前的准备 · 留白型",
    "category": "基础训练",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 70,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "先吹准每个原音，再尝试压音；不要把“压音”当成默认动作。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s019",
    "slug": "s019",
    "title": "换孔练习 · 基本型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 76,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "跨孔时用手腕带动琴，保持气息连续；先慢后快。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s020",
    "slug": "s020",
    "title": "换孔练习 · 长短型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 80,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "跨孔时用手腕带动琴，保持气息连续；先慢后快。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s021",
    "slug": "s021",
    "title": "换孔练习 · 留白型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 72,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "跨孔时用手腕带动琴，保持气息连续；先慢后快。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s022",
    "slug": "s022",
    "title": "音头与吐音 · 基本型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音都用轻轻的“tu”开始；不要用喉咙截断气流。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s023",
    "slug": "s023",
    "title": "音头与吐音 · 长短型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 82,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音都用轻轻的“tu”开始；不要用喉咙截断气流。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s024",
    "slug": "s024",
    "title": "音头与吐音 · 留白型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 74,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音都用轻轻的“tu”开始；不要用喉咙截断气流。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s025",
    "slug": "s025",
    "title": "渐强渐弱 · 基本型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 80,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音前半拍渐强、后半拍渐弱；保持音高不变。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s026",
    "slug": "s026",
    "title": "渐强渐弱 · 长短型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音前半拍渐强、后半拍渐弱；保持音高不变。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s027",
    "slug": "s027",
    "title": "渐强渐弱 · 留白型",
    "category": "基础训练",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 76,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "每个音前半拍渐强、后半拍渐弱；保持音高不变。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s028",
    "slug": "s028",
    "title": "乐句呼吸 · 基本型",
    "category": "基础训练",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 82,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音时值均匀，先求稳定。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "把 8 个音分成两句；句尾留半拍，像说话一样换气。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s029",
    "slug": "s029",
    "title": "乐句呼吸 · 长短型",
    "category": "基础训练",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 86,
    "techniques": [
      "长音",
      "呼吸",
      "单音"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。长—短交替，练习气息分配与音头。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "把 8 个音分成两句；句尾留半拍，像说话一样换气。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s030",
    "slug": "s030",
    "title": "乐句呼吸 · 留白型",
    "category": "基础训练",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 78,
    "techniques": [
      "长音",
      "呼吸",
      "留白"
    ],
    "description": "一条 2–4 小节的单音与呼吸练习。每个音后留一拍，练习句尾和呼吸。 适合每天热身，也适合在练压音前校准口型。",
    "tips": "把 8 个音分成两句；句尾留半拍，像说话一样换气。 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s031",
    "slug": "s031",
    "title": "C 大调上行 · 基本型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 70,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "注意 7 孔：-7 是 B，7 是 C；不要把两个音吹混。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s032",
    "slug": "s032",
    "title": "C 大调上行 · 长短型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 74,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "注意 7 孔：-7 是 B，7 是 C；不要把两个音吹混。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s033",
    "slug": "s033",
    "title": "C 大调上行 · 留白型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 66,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "注意 7 孔：-7 是 B，7 是 C；不要把两个音吹混。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s034",
    "slug": "s034",
    "title": "C 大调下行 · 基本型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "下行时容易越吹越快；用节拍器把每个音压住。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s035",
    "slug": "s035",
    "title": "C 大调下行 · 长短型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 76,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "下行时容易越吹越快；用节拍器把每个音压住。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s036",
    "slug": "s036",
    "title": "C 大调下行 · 留白型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 68,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "下行时容易越吹越快；用节拍器把每个音压住。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s037",
    "slug": "s037",
    "title": "C 大调上下行 · 基本型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 74,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "先上行、再下行；把最高音当成句子的“屋顶”。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s038",
    "slug": "s038",
    "title": "C 大调上下行 · 长短型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "先上行、再下行；把最高音当成句子的“屋顶”。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s039",
    "slug": "s039",
    "title": "C 大调上下行 · 留白型",
    "category": "音阶与琶音",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 70,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "先上行、再下行；把最高音当成句子的“屋顶”。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s040",
    "slug": "s040",
    "title": "G Mixolydian 上行 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 76,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "-3'' 是 A，-3 是 B；先把全音压音吹准，再加速。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s041",
    "slug": "s041",
    "title": "G Mixolydian 上行 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 80,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "-3'' 是 A，-3 是 B；先把全音压音吹准，再加速。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s042",
    "slug": "s042",
    "title": "G Mixolydian 上行 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 72,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "-3'' 是 A，-3 是 B；先把全音压音吹准，再加速。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s043",
    "slug": "s043",
    "title": "G Mixolydian 下行 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "下行时保持每个音的“落点”；不要在压音上滑过去。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s044",
    "slug": "s044",
    "title": "G Mixolydian 下行 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 82,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "下行时保持每个音的“落点”；不要在压音上滑过去。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s045",
    "slug": "s045",
    "title": "G Mixolydian 下行 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 74,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "下行时保持每个音的“落点”；不要在压音上滑过去。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s046",
    "slug": "s046",
    "title": "G 蓝调音阶 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 80,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "b3、b5、b7 是蓝调的味道；先把这三个音吹稳。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s047",
    "slug": "s047",
    "title": "G 蓝调音阶 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "b3、b5、b7 是蓝调的味道；先把这三个音吹稳。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s048",
    "slug": "s048",
    "title": "G 蓝调音阶 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 76,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "b3、b5、b7 是蓝调的味道；先把这三个音吹稳。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s049",
    "slug": "s049",
    "title": "G7 琶音 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 82,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "G7 = G B D F；把 3 度（B）和 b7（F）当成目标音。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s050",
    "slug": "s050",
    "title": "G7 琶音 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 86,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "G7 = G B D F；把 3 度（B）和 b7（F）当成目标音。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s051",
    "slug": "s051",
    "title": "G7 琶音 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 78,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "G7 = G B D F；把 3 度（B）和 b7（F）当成目标音。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s052",
    "slug": "s052",
    "title": "C7 琶音 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "C7 = C E G Bb；-3' 是 Bb，注意它和 B 的区别。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s053",
    "slug": "s053",
    "title": "C7 琶音 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 88,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "C7 = C E G Bb；-3' 是 Bb，注意它和 B 的区别。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s054",
    "slug": "s054",
    "title": "C7 琶音 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 80,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "C7 = C E G Bb；-3' 是 Bb，注意它和 B 的区别。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s055",
    "slug": "s055",
    "title": "Dm7 琶音 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 86,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "Dm7 = D F A C；第三把位的“家”在 -4。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s056",
    "slug": "s056",
    "title": "Dm7 琶音 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 90,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "Dm7 = D F A C；第三把位的“家”在 -4。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s057",
    "slug": "s057",
    "title": "Dm7 琶音 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 82,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "Dm7 = D F A C；第三把位的“家”在 -4。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s058",
    "slug": "s058",
    "title": "蓝调五声模进 · 基本型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 88,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用基本型节奏，让你在换孔时仍然保持拍子。",
    "tips": "把五声音阶拆成 2–3 个音的动机，再模进；不要一口气爬完。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s059",
    "slug": "s059",
    "title": "蓝调五声模进 · 长短型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 92,
    "techniques": [
      "音阶",
      "换孔",
      "节奏"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用长短型节奏，让你在换孔时仍然保持拍子。",
    "tips": "把五声音阶拆成 2–3 个音的动机，再模进；不要一口气爬完。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s060",
    "slug": "s060",
    "title": "蓝调五声模进 · 留白型",
    "category": "音阶与琶音",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 84,
    "techniques": [
      "音阶",
      "换孔",
      "留白"
    ],
    "description": "把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用留白型节奏，让你在换孔时仍然保持拍子。",
    "tips": "把五声音阶拆成 2–3 个音的动机，再模进；不要一口气爬完。 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s061",
    "slug": "s061",
    "title": "2 孔压音 · 半音 · 基本型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 54,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "G → F#；先吹准 G，再把舌头抬高一点点，不要用力吸。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s062",
    "slug": "s062",
    "title": "2 孔压音 · 半音 · 长短型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 58,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "G → F#；先吹准 G，再把舌头抬高一点点，不要用力吸。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s063",
    "slug": "s063",
    "title": "2 孔压音 · 半音 · 留白型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 50,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "G → F#；先吹准 G，再把舌头抬高一点点，不要用力吸。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s064",
    "slug": "s064",
    "title": "2 孔压音 · 全音 · 基本型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 56,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "G → F；全音压音需要更窄的口腔，先接受音色变暗。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      }
    ]
  },
  {
    "id": "s065",
    "slug": "s065",
    "title": "2 孔压音 · 全音 · 长短型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 60,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "G → F；全音压音需要更窄的口腔，先接受音色变暗。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s066",
    "slug": "s066",
    "title": "2 孔压音 · 全音 · 留白型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 52,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "G → F；全音压音需要更窄的口腔，先接受音色变暗。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s067",
    "slug": "s067",
    "title": "3 孔压音 · 半音 · 基本型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 58,
    "techniques": [
      "压音",
      "3孔",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "B → Bb；这是第二把位的 b3，也是蓝调最核心的“哭腔”。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s068",
    "slug": "s068",
    "title": "3 孔压音 · 半音 · 长短型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 62,
    "techniques": [
      "压音",
      "3孔",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "B → Bb；这是第二把位的 b3，也是蓝调最核心的“哭腔”。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s069",
    "slug": "s069",
    "title": "3 孔压音 · 半音 · 留白型",
    "category": "压音专项",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 54,
    "techniques": [
      "压音",
      "3孔",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "B → Bb；这是第二把位的 b3，也是蓝调最核心的“哭腔”。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s070",
    "slug": "s070",
    "title": "3 孔压音 · 全音 · 基本型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 60,
    "techniques": [
      "压音",
      "3孔",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "B → A；先稳定半音，再尝试全音；不要用喉咙硬挤。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      }
    ]
  },
  {
    "id": "s071",
    "slug": "s071",
    "title": "3 孔压音 · 全音 · 长短型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 64,
    "techniques": [
      "压音",
      "3孔",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "B → A；先稳定半音，再尝试全音；不要用喉咙硬挤。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s072",
    "slug": "s072",
    "title": "3 孔压音 · 全音 · 留白型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 56,
    "techniques": [
      "压音",
      "3孔",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "B → A；先稳定半音，再尝试全音；不要用喉咙硬挤。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s073",
    "slug": "s073",
    "title": "4 孔压音 · b5 · 基本型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 62,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "D → Db；b5 是蓝调里最有张力的音，适合放在句尾。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s074",
    "slug": "s074",
    "title": "4 孔压音 · b5 · 长短型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 66,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "D → Db；b5 是蓝调里最有张力的音，适合放在句尾。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s075",
    "slug": "s075",
    "title": "4 孔压音 · b5 · 留白型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 58,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "D → Db；b5 是蓝调里最有张力的音，适合放在句尾。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s076",
    "slug": "s076",
    "title": "5 孔压音 · 半音 · 基本型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 64,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "F → E；这个音在 C7 和弦上特别有用。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s077",
    "slug": "s077",
    "title": "5 孔压音 · 半音 · 长短型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 68,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "F → E；这个音在 C7 和弦上特别有用。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s078",
    "slug": "s078",
    "title": "5 孔压音 · 半音 · 留白型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 60,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "F → E；这个音在 C7 和弦上特别有用。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s079",
    "slug": "s079",
    "title": "6 孔压音 · 半音 · 基本型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 66,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "A → Ab；高音区压音要更集中、更轻。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s080",
    "slug": "s080",
    "title": "6 孔压音 · 半音 · 长短型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 70,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "A → Ab；高音区压音要更集中、更轻。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s081",
    "slug": "s081",
    "title": "6 孔压音 · 半音 · 留白型",
    "category": "压音专项",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 62,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "A → Ab；高音区压音要更集中、更轻。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s082",
    "slug": "s082",
    "title": "7 孔吹气压音 · 基本型",
    "category": "压音专项",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 68,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "C → B；吹气压音要收细气流，不要吹得更猛。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s083",
    "slug": "s083",
    "title": "7 孔吹气压音 · 长短型",
    "category": "压音专项",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "C → B；吹气压音要收细气流，不要吹得更猛。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s084",
    "slug": "s084",
    "title": "7 孔吹气压音 · 留白型",
    "category": "压音专项",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 64,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "C → B；吹气压音要收细气流，不要吹得更猛。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s085",
    "slug": "s085",
    "title": "10 孔吹气压音 · 基本型",
    "category": "压音专项",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 70,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "C → B → Bb；10 孔可以压两个半音，先练半音。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s086",
    "slug": "s086",
    "title": "10 孔吹气压音 · 长短型",
    "category": "压音专项",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 74,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "C → B → Bb；10 孔可以压两个半音，先练半音。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 2,
        "beats": 1.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 2,
        "beats": 0.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s087",
    "slug": "s087",
    "title": "10 孔吹气压音 · 留白型",
    "category": "压音专项",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 66,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "C → B → Bb；10 孔可以压两个半音，先练半音。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 10,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s088",
    "slug": "s088",
    "title": "压音乐句 · 基本型",
    "category": "压音专项",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "把压音放进句子里，而不是孤立地“压下去”；注意落点和留白。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s089",
    "slug": "s089",
    "title": "压音乐句 · 长短型",
    "category": "压音专项",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 76,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "把压音放进句子里，而不是孤立地“压下去”；注意落点和留白。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s090",
    "slug": "s090",
    "title": "压音乐句 · 留白型",
    "category": "压音专项",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 68,
    "techniques": [
      "压音",
      "音准",
      "气息"
    ],
    "description": "压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。",
    "tips": "把压音放进句子里，而不是孤立地“压下去”；注意落点和留白。 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s091",
    "slug": "s091",
    "title": "Shuffle 基本型 · 基本型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Shuffle 基本型拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "1 & 3 拍低音、2 & 4 拍和弦感；先把脚踩稳。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s092",
    "slug": "s092",
    "title": "Shuffle 基本型 · 长短型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 76,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Shuffle 基本型拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "1 & 3 拍低音、2 & 4 拍和弦感；先把脚踩稳。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s093",
    "slug": "s093",
    "title": "Shuffle 基本型 · 留白型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 68,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Shuffle 基本型拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "1 & 3 拍低音、2 & 4 拍和弦感；先把脚踩稳。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s094",
    "slug": "s094",
    "title": "Shuffle 问答 · 基本型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 75,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Shuffle 问答拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "前 4 个音问，后 4 个音答；答句要更短、更轻。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s095",
    "slug": "s095",
    "title": "Shuffle 问答 · 长短型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 79,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Shuffle 问答拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "前 4 个音问，后 4 个音答；答句要更短、更轻。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s096",
    "slug": "s096",
    "title": "Shuffle 问答 · 留白型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 71,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Shuffle 问答拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "前 4 个音问，后 4 个音答；答句要更短、更轻。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s097",
    "slug": "s097",
    "title": "Chug 1 & 3 · 基本型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Chug 1 & 3拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "低音在 1、3 拍，和弦感在 2、4 拍；音头要短。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s098",
    "slug": "s098",
    "title": "Chug 1 & 3 · 长短型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 82,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Chug 1 & 3拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "低音在 1、3 拍，和弦感在 2、4 拍；音头要短。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s099",
    "slug": "s099",
    "title": "Chug 1 & 3 · 留白型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 74,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Chug 1 & 3拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "低音在 1、3 拍，和弦感在 2、4 拍；音头要短。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s100",
    "slug": "s100",
    "title": "Chug 2 & 4 · 基本型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 81,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Chug 2 & 4拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "把重音放在 2、4 拍；感受“后面推着走”。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s101",
    "slug": "s101",
    "title": "Chug 2 & 4 · 长短型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 85,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Chug 2 & 4拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "把重音放在 2、4 拍；感受“后面推着走”。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s102",
    "slug": "s102",
    "title": "Chug 2 & 4 · 留白型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 77,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Chug 2 & 4拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "把重音放在 2、4 拍；感受“后面推着走”。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s103",
    "slug": "s103",
    "title": "Train 八分 · 基本型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Train 八分拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "像火车轮子一样均匀；用舌头轻轻说“ta”。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s104",
    "slug": "s104",
    "title": "Train 八分 · 长短型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 88,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Train 八分拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "像火车轮子一样均匀；用舌头轻轻说“ta”。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s105",
    "slug": "s105",
    "title": "Train 八分 · 留白型",
    "category": "节奏与舌堵",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 80,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Train 八分拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "像火车轮子一样均匀；用舌头轻轻说“ta”。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s106",
    "slug": "s106",
    "title": "Train 切分 · 基本型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 87,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Train 切分拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "切分不是抢拍；把弱拍吹得轻一点，但不要拖。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s107",
    "slug": "s107",
    "title": "Train 切分 · 长短型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 91,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Train 切分拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "切分不是抢拍；把弱拍吹得轻一点，但不要拖。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s108",
    "slug": "s108",
    "title": "Train 切分 · 留白型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 83,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把Train 切分拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "切分不是抢拍；把弱拍吹得轻一点，但不要拖。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s109",
    "slug": "s109",
    "title": "三连音感觉 · 基本型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 90,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把三连音感觉拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "三连音要均匀；先数“1-2-3”再吹。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s110",
    "slug": "s110",
    "title": "三连音感觉 · 长短型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 94,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把三连音感觉拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "三连音要均匀；先数“1-2-3”再吹。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s111",
    "slug": "s111",
    "title": "三连音感觉 · 留白型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 86,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把三连音感觉拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "三连音要均匀；先数“1-2-3”再吹。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s112",
    "slug": "s112",
    "title": "吐音与断句 · 基本型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 93,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把吐音与断句拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "每个音都用“tu”开始；不要用喉咙把音切断。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s113",
    "slug": "s113",
    "title": "吐音与断句 · 长短型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 97,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把吐音与断句拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "每个音都用“tu”开始；不要用喉咙把音切断。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s114",
    "slug": "s114",
    "title": "吐音与断句 · 留白型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 89,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把吐音与断句拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "每个音都用“tu”开始；不要用喉咙把音切断。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s115",
    "slug": "s115",
    "title": "弱起与留白 · 基本型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 96,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把弱起与留白拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "句尾留白；不要为了填满拍子而多吹。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s116",
    "slug": "s116",
    "title": "弱起与留白 · 长短型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 100,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把弱起与留白拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "句尾留白；不要为了填满拍子而多吹。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s117",
    "slug": "s117",
    "title": "弱起与留白 · 留白型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 92,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把弱起与留白拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "句尾留白；不要为了填满拍子而多吹。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s118",
    "slug": "s118",
    "title": "12/8 律动 · 基本型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 99,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把12/8 律动拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "12/8 是“三个一组”的律动；先用手打三连音。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s119",
    "slug": "s119",
    "title": "12/8 律动 · 长短型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 103,
    "techniques": [
      "节奏",
      "Shuffle",
      "Chug"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把12/8 律动拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "12/8 是“三个一组”的律动；先用手打三连音。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s120",
    "slug": "s120",
    "title": "12/8 律动 · 留白型",
    "category": "节奏与舌堵",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 95,
    "techniques": [
      "节奏",
      "Shuffle",
      "留白"
    ],
    "description": "蓝调口琴首先是节奏乐器。这条练习把12/8 律动拆成可跟节拍器的短型；先数出声，再吹。",
    "tips": "12/8 是“三个一组”的律动；先用手打三连音。 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s121",
    "slug": "s121",
    "title": "G 蓝调 · 问答 · 基本型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 62,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "前 4 个音问、后 4 个音答；答句落在 -5 或 -2。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s122",
    "slug": "s122",
    "title": "G 蓝调 · 问答 · 长短型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 66,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "前 4 个音问、后 4 个音答；答句落在 -5 或 -2。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s123",
    "slug": "s123",
    "title": "G 蓝调 · 问答 · 留白型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 58,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "前 4 个音问、后 4 个音答；答句落在 -5 或 -2。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s124",
    "slug": "s124",
    "title": "G 蓝调 · 下行 · 基本型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 65,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "下行时保持音头清楚；不要越吹越快。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s125",
    "slug": "s125",
    "title": "G 蓝调 · 下行 · 长短型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 69,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "下行时保持音头清楚；不要越吹越快。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s126",
    "slug": "s126",
    "title": "G 蓝调 · 下行 · 留白型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 61,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "下行时保持音头清楚；不要越吹越快。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s127",
    "slug": "s127",
    "title": "G 蓝调 · 上行 · 基本型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 68,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "把 b3、b5、b7 当成三个路标；不要只是爬音阶。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s128",
    "slug": "s128",
    "title": "G 蓝调 · 上行 · 长短型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 72,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "把 b3、b5、b7 当成三个路标；不要只是爬音阶。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s129",
    "slug": "s129",
    "title": "G 蓝调 · 上行 · 留白型",
    "category": "蓝调乐句",
    "level": "入门",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 64,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "把 b3、b5、b7 当成三个路标；不要只是爬音阶。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s130",
    "slug": "s130",
    "title": "G 蓝调 · 转折 · 基本型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 71,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "在第 5–6 小节（C7）用这条；落点放在 E 或 Bb。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s131",
    "slug": "s131",
    "title": "G 蓝调 · 转折 · 长短型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 75,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "在第 5–6 小节（C7）用这条；落点放在 E 或 Bb。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s132",
    "slug": "s132",
    "title": "G 蓝调 · 转折 · 留白型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 67,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "在第 5–6 小节（C7）用这条；落点放在 E 或 Bb。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s133",
    "slug": "s133",
    "title": "G 蓝调 · Turnaround · 基本型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 74,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "放在第 11–12 小节；最后一个 -2 要站稳。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s134",
    "slug": "s134",
    "title": "G 蓝调 · Turnaround · 长短型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "放在第 11–12 小节；最后一个 -2 要站稳。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s135",
    "slug": "s135",
    "title": "G 蓝调 · Turnaround · 留白型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 70,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "放在第 11–12 小节；最后一个 -2 要站稳。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s136",
    "slug": "s136",
    "title": "G 蓝调 · Slow · 基本型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 77,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "慢速时每个音都要有音头；不要用滑音把句子糊在一起。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s137",
    "slug": "s137",
    "title": "G 蓝调 · Slow · 长短型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 81,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "慢速时每个音都要有音头；不要用滑音把句子糊在一起。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s138",
    "slug": "s138",
    "title": "G 蓝调 · Slow · 留白型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 73,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "慢速时每个音都要有音头；不要用滑音把句子糊在一起。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s139",
    "slug": "s139",
    "title": "G 蓝调 · Call & Response · 基本型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 80,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "问句重复两次，答句只出现一次；让听众记住动机。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s140",
    "slug": "s140",
    "title": "G 蓝调 · Call & Response · 长短型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "问句重复两次，答句只出现一次；让听众记住动机。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s141",
    "slug": "s141",
    "title": "G 蓝调 · Call & Response · 留白型",
    "category": "蓝调乐句",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 76,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "问句重复两次，答句只出现一次；让听众记住动机。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s142",
    "slug": "s142",
    "title": "D 小调 · 第三把位 · 基本型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 83,
    "techniques": [
      "蓝调",
      "乐句",
      "第三把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "第三把位的 home 在 -4；不要用第二把位的习惯去吹。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s143",
    "slug": "s143",
    "title": "D 小调 · 第三把位 · 长短型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 87,
    "techniques": [
      "蓝调",
      "乐句",
      "第三把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "第三把位的 home 在 -4；不要用第二把位的习惯去吹。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s144",
    "slug": "s144",
    "title": "D 小调 · 第三把位 · 留白型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 79,
    "techniques": [
      "蓝调",
      "乐句",
      "第三把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "第三把位的 home 在 -4；不要用第二把位的习惯去吹。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s145",
    "slug": "s145",
    "title": "G 蓝调 · 高音 · 基本型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 86,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "高音区要更细的气流；不要把音量吹爆。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s146",
    "slug": "s146",
    "title": "G 蓝调 · 高音 · 长短型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 90,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "高音区要更细的气流；不要把音量吹爆。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s147",
    "slug": "s147",
    "title": "G 蓝调 · 高音 · 留白型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 82,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "高音区要更细的气流；不要把音量吹爆。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s148",
    "slug": "s148",
    "title": "G 蓝调 · 混合 · 基本型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 89,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用基本型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "把低音、压音和高音串成一句话；注意句子方向。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s149",
    "slug": "s149",
    "title": "G 蓝调 · 混合 · 长短型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 93,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用长短型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "把低音、压音和高音串成一句话；注意句子方向。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s150",
    "slug": "s150",
    "title": "G 蓝调 · 混合 · 留白型",
    "category": "蓝调乐句",
    "level": "高级",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 4,
    "tempo": 85,
    "techniques": [
      "蓝调",
      "乐句",
      "第二把位"
    ],
    "description": "一条可以放进 12 小节的短句。先用留白型节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。",
    "tips": "把低音、压音和高音串成一句话；注意句子方向。 先唱一遍，再吹；录音时只录这一句，反复听落点。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s151",
    "slug": "s151",
    "title": "Slow Blues in G 01",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 50,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s152",
    "slug": "s152",
    "title": "Slow Blues in G 02",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 52,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s153",
    "slug": "s153",
    "title": "Slow Blues in G 03",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 54,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s154",
    "slug": "s154",
    "title": "Slow Blues in G 04",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 56,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s155",
    "slug": "s155",
    "title": "Slow Blues in G 05",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 58,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s156",
    "slug": "s156",
    "title": "Slow Blues in G 06",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 60,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s157",
    "slug": "s157",
    "title": "Slow Blues in G 07",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 62,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s158",
    "slug": "s158",
    "title": "Slow Blues in G 08",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 64,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s159",
    "slug": "s159",
    "title": "Slow Blues in G 09",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 66,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 2,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s160",
    "slug": "s160",
    "title": "Slow Blues in G 10",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 68,
    "techniques": [
      "12小节",
      "Slow Blues",
      "留白"
    ],
    "description": "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
    "tips": "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      }
    ]
  },
  {
    "id": "s161",
    "slug": "s161",
    "title": "Shuffle Blues in G 01",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 88,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s162",
    "slug": "s162",
    "title": "Shuffle Blues in G 02",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 91,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s163",
    "slug": "s163",
    "title": "Shuffle Blues in G 03",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 94,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s164",
    "slug": "s164",
    "title": "Shuffle Blues in G 04",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 97,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s165",
    "slug": "s165",
    "title": "Shuffle Blues in G 05",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 100,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s166",
    "slug": "s166",
    "title": "Shuffle Blues in G 06",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 103,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s167",
    "slug": "s167",
    "title": "Shuffle Blues in G 07",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 106,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s168",
    "slug": "s168",
    "title": "Shuffle Blues in G 08",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 109,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s169",
    "slug": "s169",
    "title": "Shuffle Blues in G 09",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 112,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s170",
    "slug": "s170",
    "title": "Shuffle Blues in G 10",
    "category": "12 小节练习曲",
    "level": "进阶",
    "key": "G",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 115,
    "techniques": [
      "12小节",
      "Shuffle",
      "Chug"
    ],
    "description": "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
    "tips": "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s171",
    "slug": "s171",
    "title": "Minor Blues in D 01",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 68,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s172",
    "slug": "s172",
    "title": "Minor Blues in D 02",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 71,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s173",
    "slug": "s173",
    "title": "Minor Blues in D 03",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 74,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s174",
    "slug": "s174",
    "title": "Minor Blues in D 04",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 77,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s175",
    "slug": "s175",
    "title": "Minor Blues in D 05",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 80,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s176",
    "slug": "s176",
    "title": "Minor Blues in D 06",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 83,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s177",
    "slug": "s177",
    "title": "Minor Blues in D 07",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 86,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s178",
    "slug": "s178",
    "title": "Minor Blues in D 08",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 89,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s179",
    "slug": "s179",
    "title": "Minor Blues in D 09",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 92,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s180",
    "slug": "s180",
    "title": "Minor Blues in D 10",
    "category": "12 小节练习曲",
    "level": "高级",
    "key": "D",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 12,
    "tempo": 95,
    "techniques": [
      "12小节",
      "Minor Blues",
      "第三把位"
    ],
    "description": "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
    "tips": "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s181",
    "slug": "s181",
    "title": "Amazing Grace · 奇异恩典",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 72,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": true,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 4
      }
    ]
  },
  {
    "id": "s182",
    "slug": "s182",
    "title": "Oh! Susanna · 哦，苏珊娜",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 92,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 1,
        "rest": true
      }
    ]
  },
  {
    "id": "s183",
    "slug": "s183",
    "title": "Camptown Races · 坎普敦赛马",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 100,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s184",
    "slug": "s184",
    "title": "When the Saints Go Marching In · 当圣徒齐步前进",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 100,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s185",
    "slug": "s185",
    "title": "Auld Lang Syne · 友谊地久天长",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 80,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s186",
    "slug": "s186",
    "title": "Home on the Range · 牧场上的家",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 84,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s187",
    "slug": "s187",
    "title": "Red River Valley · 红河谷",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 84,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s188",
    "slug": "s188",
    "title": "This Little Light of Mine · 这小小光芒",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 96,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s189",
    "slug": "s189",
    "title": "Kum Ba Yah · 来吧，主",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 76,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s190",
    "slug": "s190",
    "title": "Swing Low, Sweet Chariot · 轻摇，甜马车",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 72,
    "techniques": [
      "旋律",
      "视奏",
      "传统曲调"
    ],
    "description": "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
    "tips": "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
    "source": "traditional",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s191",
    "slug": "s191",
    "title": "Prairie Sunrise · 草原日出",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 72,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s192",
    "slug": "s192",
    "title": "Delta Lullaby · 三角洲摇篮曲",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 60,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 4
      }
    ]
  },
  {
    "id": "s193",
    "slug": "s193",
    "title": "Blue Ridge Waltz · 蓝岭华尔兹",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 4,
    "tempo": 84,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 0,
        "dir": "blow",
        "bend": 0,
        "beats": 3,
        "rest": true
      }
    ]
  },
  {
    "id": "s194",
    "slug": "s194",
    "title": "Bayou Evening · 河口傍晚",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 66,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s195",
    "slug": "s195",
    "title": "Railroad Moon · 铁路上的月亮",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 92,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 10,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s196",
    "slug": "s196",
    "title": "Cotton Field Morning · 棉田清晨",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 76,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s197",
    "slug": "s197",
    "title": "Riverboat Shuffle · 河船摇摆",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 100,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s198",
    "slug": "s198",
    "title": "Sunday Porch · 星期天门廊",
    "category": "旋律与视奏",
    "level": "入门",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 68,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s199",
    "slug": "s199",
    "title": "Old Depot · 老车站",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 72,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s200",
    "slug": "s200",
    "title": "Long Way Home · 回家的长路",
    "category": "旋律与视奏",
    "level": "进阶",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 64,
    "techniques": [
      "旋律",
      "视奏",
      "原创"
    ],
    "description": "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
    "tips": "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 2
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 2
      }
    ]
  },
  {
    "id": "s201",
    "slug": "s201",
    "title": "ii–V in C · Dm7 → G7 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 78,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": true,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s202",
    "slug": "s202",
    "title": "ii–V in C · Dm7 → G7 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s203",
    "slug": "s203",
    "title": "V–I in C · G7 → Cmaj7 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 80,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s204",
    "slug": "s204",
    "title": "V–I in C · G7 → Cmaj7 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 86,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s205",
    "slug": "s205",
    "title": "Cmaj7 琶音 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 82,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s206",
    "slug": "s206",
    "title": "Cmaj7 琶音 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 88,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s207",
    "slug": "s207",
    "title": "Dm7 琶音 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 84,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s208",
    "slug": "s208",
    "title": "Dm7 琶音 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 90,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s209",
    "slug": "s209",
    "title": "ii–V–I 连句 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 86,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s210",
    "slug": "s210",
    "title": "ii–V–I 连句 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 3,
    "tempo": 92,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 9,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 9,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s211",
    "slug": "s211",
    "title": "半音接近 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 88,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s212",
    "slug": "s212",
    "title": "半音接近 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 94,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s213",
    "slug": "s213",
    "title": "G 蓝调爵士 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 90,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s214",
    "slug": "s214",
    "title": "G 蓝调爵士 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "2nd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 96,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s215",
    "slug": "s215",
    "title": "D 小调爵士 · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 92,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s216",
    "slug": "s216",
    "title": "D 小调爵士 · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "3rd",
    "meter": "4/4",
    "bars": 2,
    "tempo": 98,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 8,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 8,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s217",
    "slug": "s217",
    "title": "C 大调 bebop · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 94,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s218",
    "slug": "s218",
    "title": "C 大调 bebop · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 100,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 5,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 7,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  },
  {
    "id": "s219",
    "slug": "s219",
    "title": "G7 altered · Straight",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 96,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 1
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 1
      }
    ]
  },
  {
    "id": "s220",
    "slug": "s220",
    "title": "G7 altered · Swing",
    "category": "爵士蓝调",
    "level": "高级",
    "key": "C",
    "harp": "C",
    "position": "1st",
    "meter": "4/4",
    "bars": 2,
    "tempo": 102,
    "techniques": [
      "爵士",
      "琶音",
      "和声"
    ],
    "description": "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
    "tips": "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
    "source": "original",
    "featured": false,
    "tokens": [
      {
        "hole": 2,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 3,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "blow",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 1,
        "beats": 0.5
      },
      {
        "hole": 4,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 5,
        "dir": "draw",
        "bend": 0,
        "beats": 0.5
      },
      {
        "hole": 6,
        "dir": "draw",
        "bend": 0,
        "beats": 1.5
      },
      {
        "hole": 7,
        "dir": "blow",
        "bend": 0,
        "beats": 0.5
      }
    ]
  }
];
