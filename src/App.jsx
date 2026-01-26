import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [lang, setLang] = useState('zh')
  const [showLangPrompt, setShowLangPrompt] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showTrainingModal, setShowTrainingModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [isContactClosing, setIsContactClosing] = useState(false)
  const [confirmStage, setConfirmStage] = useState('verify')
  const [confirmCountdown, setConfirmCountdown] = useState(3)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    role: '',
    demand: '',
    name: '',
    phone: '',
    email: '',
    note: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const assetBase = import.meta.env.BASE_URL
  const asset = (path) => `${assetBase}${path.replace(/^\//, '')}`
  const content = {
    zh: {
      brand: '中帆云联',
      navLinks: ['效率', '客户与痛点', '优势', '培训', '对比'],
      contactCta: '联系我们',
      langToggle: 'EN',
      hero: {
        badge: '以AI探索未知，以定制重塑传统',
        title: '效率提升 78%',
        desc:
          '中帆云联（上海）科技有限公司致力于以人工智能（AI）和软件定制化双轮驱动，赋能企业智能化转型与数字化重塑。',
      },
      heroCard: {
        title: '核心业务',
        desc:
          'AI创新与应用工作室 + 数字引擎工作室，为客户提供从战略咨询到方案落地的全栈式服务。',
        metrics: ['品质保障', '技术赋能'],
      },
      trusted: '面向的客户群体：',
      infoModal: {
        title: '中帆云联（上海）科技有限公司公司简介',
        introTitle: '公司简介',
        introParas: [
          '中帆云联（上海）科技有限公司，英文名Zonfine Cloud Tech (Shanghai) Co., Ltd.，是一家致力于以人工智能（AI）和软件定制化双轮驱动，赋能企业智能化转型与数字化重塑的创新型科技企业。',
          '我们以“以AI探索未知，以定制重塑传统”为使命，融合前沿技术视野与深度工程能力，为客户提供从战略咨询到方案落地的全栈式服务，涵盖技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广、软件开发、人工智能基础软件开发、软件外包服务、计算机系统服务、基于云平台的业务外包服务、信息技术咨询服务等多个领域。',
          '我们的核心团队由具备国际视野和顶尖互联网公司经验的资深成员组成，致力于将前沿工程能力与创新产品思维相结合，把每一次技术变革转化为客户可持续的竞争优势，成为企业在AI新时代浪潮中值得信赖的领航伙伴。',
        ],
        founderTitle: '创始团队介绍',
        founderParas: [
          '创始团队成员来自腾讯、TikTok、亚马逊等全球知名科技企业，拥有深厚的工程实践与产品化经验。',
          '团队长期深耕游戏开发、广告系统与人工智能等方向，擅长从0到1快速搭建高并发、高可用的工程平台与产品体系。',
          '在亲历并推动多次行业变革后，我们洞察到AI与实时交互技术的成熟正拓展软件服务边界，期待以工程实践与创新产品思维服务更广泛的行业与企业。',
        ],
        studiosTitle: '核心业务部门',
        studios: [
          {
            title: 'Zon.AI Studio | AI创新与应用工作室',
            desc: '作为中帆云联旗下专注于前沿AI探索的核心部门，我们致力于将智能化为现实的驱动力。工作室聚焦智能体（Agent）开发与 “AI+”场景融合，提供从前瞻性解决方案设计到可落地原型孵化的全流程创新服务，助力客户在新浪潮中抢占智能先机。',
            image: asset('assets/zonai.png'),
            alt: 'Zon.AI Studio',
          },
          {
            title: '数字引擎工作室 (Digital Engine Studio, DES)',
            desc: 'DES是我们为企业数字化转型提供深度定制的核心工程部门。我们以如加密算法般精密可靠、安全隐秘的匠心，为客户构建稳健、可扩展的专属数字系统。提供涵盖咨询、开发、交付与维护的一站式转型解决方案，是您值得托付的数字基石与成长引擎。',
            image: asset('assets/des.png'),
            alt: 'Digital Engine Studio',
          },
        ],
        logoRowAlt: 'Zonfine logos',
      },
      customers: [
        {
          title: '传统企业',
          desc: '急需数字化转型与流程再造，期望以稳健路径实现业务升级。',
        },
        {
          title: '央国企及组织机构',
          desc: '在安全合规的框架下，体验高质量的定制化服务交付。',
        },
        {
          title: '创业团队或项目',
          desc: '以AI提效为核心，快速验证业务模型与产品价值。',
        },
        {
          title: '学生及个人',
          desc: '个性化探索方向，技术栈充电与能力跃迁。',
        },
      ],
      value: {
        title: '我们破解了智能化转型难题。',
        subtitle: '融合前沿技术视野与深度工程能力，为客户提供全栈式AI与定制化服务。',
        cards: [
          {
            title: 'AI创新驱动',
            text: '专注于智能体（Agent）开发与"AI+"场景融合，引领智能化新浪潮。',
          },
          {
            title: '深度定制开发',
            text: '以匠心构建稳健、可扩展的专属数字系统，成就企业核心竞争力。',
          },
          {
            title: '全栈式服务',
            text: '从战略咨询到方案落地，提供涵盖咨询、开发、交付与维护的一站式解决方案。',
          },
          {
            title: '技术赋能',
            text: '将前沿工程能力转化为客户可持续的竞争优势，成为AI新时代的领航伙伴。',
          },
        ],
      },
      features: [
        {
          title: 'AI创新与应用',
          text: 'Zon.AI Studio专注于智能体开发与AI+场景融合，提供从解决方案设计到原型孵化的全流程创新服务。',
        },
        {
          title: '数字引擎定制',
          text: 'Digital Engine Studio以精密匠心构建专属数字系统，提供咨询、开发、交付与维护的一站式转型解决方案。',
        },
        {
          title: '技术咨询服务',
          text: '融合国际视野与顶尖工程经验，为企业提供战略咨询与技术方案设计。',
        },
        {
          title: '智能化转型',
          text: '助力企业将前沿技术转化为可持续竞争优势，成为AI新时代的领航伙伴。',
        },
      ],
      mapAlt: '地图占位图',
      bigPicture: {
        title: '探索未知，重塑传统',
        subtitle:
          '中帆云联融合前沿AI技术与深度工程能力，将智能化创新转化为企业可持续发展的强大驱动力。',
        points: ['AI助力企业提效', '定制化重塑传统业务', '技术驱动业务+方式创新', '赋能企业数字化转型'],
        cta: '了解更多',
      },
      training: {
        title: '技术人才培养',
        subtitle: '我们坚信技术人才的培养是推动行业前进的根本。为对技术充满热情的在校生及转码人才，提供体系化的技术培训计划。',
        requirements: {
          title: '技术培训报名要求',
          items: [
            '计算机相关专业在校生 / 有一些基础的其他专业同学 / 转码选手',
            '具备良好的编程基础与强烈的学习能力',
            '熟练掌握至少一门主流编程语言（如Python、Java、JavaScript等）及相关开发工具',
            '有项目实践经验者优先'
          ]
        },
        directions: {
          title: '可提供的实习/培训方向',
          items: ['AI工程', '数据开发', '软件开发', '游戏开发', '交互设计']
        }
      },
      trainingModal: {
        title: '可提供的计算机辅导方向（实习生培养计划）',
        intro: [
          '我们坚信技术人才的培养是推动行业前进的根本。为此，我们为对技术充满热情的在校生及转码人才，设计了体系化的实习生培养计划，提供一线实战机会与资深导师指导。',
        ],
        requirementsTitle: '实习生报名要求：',
        requirements: [
          '计算机相关专业在校生 / 有一些基础的其他专业同学 / 转码选手',
          '具备良好的编程基础与强烈的学习能力',
          '熟练掌握至少一门主流编程语言（如Python、Java、JavaScript等）及相关开发工具',
          '有项目实践经验者优先',
        ],
        directionsTitle: '可提供的实习方向与工作内容：',
        directions: [
          {
            title: '方向一：AI工程',
            bullets: [
              '参与AI应用项目的研发与部署，如智能对话系统（Chatbot）、代码生成与辅助工具等。',
              '协助完成模型训练、微调、评估及性能优化，支持算法到工程的落地实现。',
              '参与数据标注、特征工程、实验跟踪及相关技术文档的整理。',
              '配合进行AI服务接口开发、系统集成及效果评测。',
            ],
            cases: [
              {
                title: '项目案例一：智能金融法规合规助手 (RAG-Chatbot)',
                intro: '项目简介：我们为一家证券公司交付了一套智能法规合规问答系统。该系统接入了超过1000份实时更新的金融监管文件、内部合规手册和历年案例，为合规人员、业务部门提供7x24小时秒级响应的精准问答服务，将传统人工查阅效率提升超过300%，并成为新员工培训的核心工具。',
                sections: [
                  {
                    title: '项目核心内容及难点：',
                    items: [
                      '复杂文档的理解与结构化：金融监管文档结构复杂且更新频繁，我们开发智能文档解析器，自动识别章节、条款与表格，构建知识图谱。',
                      '高精度、可溯源的检索生成：采用 LangChain 多级检索链，结合 OpenAI Embedding 语义检索与 Elasticsearch 关键词检索，从 Pinecone 召回片段，再由 GPT-4 生成答案并高亮出处。',
                      '合规性约束与幻觉控制：通过提示词工程与“事实性校验”后处理模块，强制模型仅依据上下文作答，实现工业级“零幻觉”。',
                    ],
                  },
                  {
                    title: '项目技术栈：',
                    items: [
                      '框架：LangChain',
                      '大模型：GPT-4 API，部分模块微调 Llama 2',
                      '向量数据库：Pinecone',
                      '传统检索/数据库：Elasticsearch，PostgreSQL',
                      '数据处理：Apache Tika，SpaCy',
                      '部署：Kubernetes on AWS；前端为内部 Vue.js 管理后台',
                    ],
                  },
                  {
                    title: '项目亮点：',
                    items: [
                      '精准溯源：每个回答可追溯至原文第几章第几条，满足审计与合规要求。',
                      '动态知识更新：新规发布后24小时内完成解析、向量化并入库。',
                      '成本与性能优化：优化检索策略，将95%的查询限定在3个知识块内，API调用成本下降70%。',
                    ],
                  },
                ],
                images: [asset('assets/case1.png')],
              },
              {
                title: '项目案例二：游戏宣发素材智能生成平台 (Game Ad Creative AI Studio)',
                intro: '项目简介：为知名手游发行商打造AIGC宣发素材平台，运营人员上传角色立绘、LOGO及风格词，60秒内生成多张高质量广告创意图，效率提升10倍以上。',
                sections: [
                  {
                    title: '项目核心内容及难点：',
                    items: [
                      '游戏风格高度还原与角色一致：采用 Nano Banana 的高效 LoRA 微调服务训练专属角色模型，确保100%形象还原。',
                      '可控创意组合与批量生产：通过智能工作流引擎编排图像理解、文生图/图生图与后处理Agent，实现全流程自动化。',
                      '适应宣发快节奏：支持模板化与自由创作模式，“一次生成，多尺寸适配”。',
                    ],
                  },
                  {
                    title: '项目技术栈：',
                    items: [
                      '核心AI引擎：Nano Banana AI Agent Platform',
                      '微调模型：Stable Diffusion + LoRA',
                      '后端：Python (FastAPI) + 异步任务队列',
                      '前端：React 管理后台',
                      '云服务：Nano Banana，AWS S3',
                    ],
                  },
                  {
                    title: '项目亮点：',
                    items: [
                      '专精游戏垂直领域：解决角色一致性与风格化难题。',
                      '多Agent编排实战：构建分析—生成—后处理完整自动化管线。',
                      '商业转化直接：广告CTR平均提升超过15%。',
                    ],
                  },
                ],
                images: [asset('assets/case2.png'), asset('assets/case3.png'), asset('assets/case4.png'), asset('assets/case5.png')],
              },
            ],
          },
          {
            title: '方向二：数据开发',
            bullets: [
              '参与数据清洗、处理与ETL流程开发，协助构建和维护数据仓库与数据集市。',
              '运用数据分析与挖掘方法，支持业务数据洞察、报表开发与可视化呈现。',
              '协助大数据相关技术（如Hadoop、Spark、Flink等）的调研、开发与调优。',
              '参与数据质量监控、数据治理及数据服务接口的开发与维护工作。',
            ],
            cases: [
              {
                title: '项目案例一：实时金融风控与用户画像向量化数据平台',
                intro: '项目简介：为金融科技公司交付新一代实时数据平台，重构风控与精准营销底层数据架构，实现毫秒级反欺诈决策与个性化推荐特征生产。',
                sections: [
                  {
                    title: '项目核心内容与难点：',
                    items: [
                      '构建高可靠、低延迟实时数据流水线：Kafka统一总线 + Flink清洗标准化 + Hudi数据湖。',
                      '实时特征计算与复杂事件检测：窗口聚合、Flink CEP识别高风险模式，特征写入Kafka与Hudi。',
                      '行为序列向量化：Spark训练Word2Vec，Flink实时聚合会话向量，写入Milvus向量库。',
                      '统一特征服务：Redis在线特征、Hudi离线特征，统一API提供<50ms查询。',
                    ],
                  },
                  {
                    title: '项目技术栈：',
                    items: [
                      '流计算：Apache Flink',
                      '批处理与训练：Apache Spark',
                      '消息队列：Apache Kafka',
                      '向量数据库：Milvus',
                      '在线存储：Redis',
                      '数据湖：Apache Hudi',
                      '调度：Apache Airflow',
                      '资源协调：Hadoop YARN',
                    ],
                  },
                  {
                    title: '项目亮点：',
                    items: [
                      '生产级Pipeline落地能力：端到端覆盖数据接入、实时计算、AI向量化与特征服务。',
                      '流批一体实践：Flink实时+Spark离线，通过Hudi实现融合。',
                      'AI向量融合传统特征：提升风控与营销模型的复杂模式识别能力。',
                    ],
                  },
                ],
                images: [asset('assets/case6.png')],
              },
            ],
          },
          {
            title: '方向三：软件开发',
            bullets: [
              '全栈开发：参与业务系统前后端功能开发与维护，协助完成接口设计与功能模块实现。',
              '数据库开发：进行数据库相关开发与优化，协助提升系统数据处理与访问性能。',
              '质量保障：编写并执行测试用例，协助定位和修复代码缺陷，优化系统运行效率。',
            ],
            cases: [
              {
                title: '项目案例一：智慧物流一体化运营管理平台',
                intro: '项目简介：为区域物流公司打造数字化运营中枢，替代手工台账与多系统并行，实现订单到结算的全链路线上化与可视化。',
                sections: [
                  {
                    title: '项目核心内容与模块：',
                    items: [
                      '全栈业务功能开发：订单、调度、在途跟踪、财务对账一体化。',
                      '数据库设计与性能优化：索引策略、SQL优化、缓存与历史归档。',
                      '质量保障与系统效能：自动化测试、性能监控与智能运维。',
                      '智能客服Agent集成：轻量RAG架构，语义检索生成精准回复。',
                    ],
                  },
                  {
                    title: '项目技术栈与部署：',
                    items: [
                      '前端：React.js 18 + Ant Design Pro + Umi.js + ECharts',
                      '后端：Python 3.10 + FastAPI + SQLAlchemy + Pydantic',
                      '数据库：MySQL 8.0 + Redis 6.2',
                      'AI组件：LangChain + BGE Embedding + 通义千问API',
                      '部署：Docker + 阿里云ECS + Jenkins + SLS/ARMS',
                    ],
                  },
                  {
                    title: '项目亮点：',
                    items: [
                      '深度贴合物流场景，功能直击核心痛点。',
                      '“数据驱动”的性能优化实践，保障大数据量下稳定运行。',
                      '“AI赋能”提升运营效率，客服咨询量下降40%。',
                    ],
                  },
                ],
                images: [asset('assets/case7.png'), asset('assets/case8.png')],
              },
            ],
          },
          {
            title: '方向四：游戏开发',
            bullets: [
              '参与游戏客户端/服务端功能开发，协助实现账号、道具、活动等游戏逻辑模块。',
              '协助优化数据存储与访问方案，支持高并发场景下的系统稳定性。',
              '配合完成前后端功能联调与界面交互测试，协助资源管理与功能整合。',
            ],
            cases: [
              {
                title: '项目案例一：休闲放置类手游《勇者冒险日记》全栈开发',
                intro: '项目简介：独立开发并上线休闲放置类手游，完整实现账号、道具、离线收益、任务系统等核心玩法。',
                sections: [
                  {
                    title: '项目核心内容与职责：',
                    items: [
                      '客户端开发（Unity）：UGUI搭建界面，放置玩法逻辑实现。',
                      '服务端功能开发：Go单体架构，账号与玩法逻辑处理。',
                      '数据存储与优化：MySQL存储核心数据，Redis缓存配置表。',
                    ],
                  },
                  {
                    title: '项目技术栈：',
                    items: [
                      '客户端：Unity 2021, C#, UGUI',
                      '服务端：Go (Gin), MySQL, Redis',
                      '部署：腾讯云CVM + Nginx',
                    ],
                  },
                  {
                    title: '项目亮点：',
                    items: [
                      '全栈开发体验，覆盖客户端到服务端再到数据库设计。',
                      '专注基础与稳定性，确保玩家在线体验稳定。',
                      '工业级流程体验：Git、基础部署与线上问题排查。',
                    ],
                  },
                ],
                images: [asset('assets/case9.png')],
              },
            ],
          },
          {
            title: '方向五：人机交互与创意计算',
            bullets: [
              '人机交互（HCI）：参与交互框架与原型设计、用户测试与方案迭代。',
              '信息体验设计（IXD）：负责复杂数据可视化设计，优化信息架构与呈现逻辑。',
              '创意计算：探索AI生成内容与实时渲染技术的原型落地。',
            ],
            cases: [
              {
                title: '项目案例一：企业运营智能问答与叙事可视化平台',
                intro: '项目简介：为战略分析部门打造“Insight Pilot”智能数据探索平台，实现自然语言提问与叙事化可视化报告。',
                sections: [
                  {
                    title: '项目核心内容与职责：',
                    items: [
                      'HCI设计：对话式分析交互框架与个性化探索引导。',
                      'IXD设计：叙事化图表引擎与关键洞察高亮。',
                      '创意计算：Canvas/WebGL动态渲染 + LLM生成叙事。',
                    ],
                  },
                  {
                    title: '项目技术栈：',
                    items: [
                      '前端：React 18 + TypeScript + D3.js + Three.js/Framer Motion + Konva',
                      '后端：Python FastAPI',
                      'AI核心：LangChain + GPT-4 / Llama 3 + Sentence Transformers',
                      '数据与缓存：PostgreSQL + Redis',
                    ],
                  },
                  {
                    title: '项目亮点：',
                      items: [
                      '“对话即分析”的交互范式，降低数据理解门槛。',
                      '“让数据讲故事”的动态叙事呈现。',
                      'LLM + 可视化 + 交互三大前沿融合。',
                    ],
                  },
                ],
                images: [asset('assets/case10.png')],
              },
              {
                title: '项目案例二：“NutriSnap”智能视觉点餐与饮食分析交互原型设计',
                intro: '项目简介：探索“视觉即界面”的点餐模式，完成高保真交互原型设计，验证拍照-确认-细化的自然交互流程。',
                sections: [
                  {
                    title: '项目核心交互流程与设计亮点：',
                    items: [
                      '直觉化视觉任务流：以摄像头为入口，简化为“拍摄-确认-细化”。',
                      'AI识别的混合主动交互：提供候选确认与可展开信息卡片。',
                      '微交互反馈：缩放动效与数值滚动建立即时反馈。',
                    ],
                  },
                  {
                    title: '项目产出与验证：',
                    items: [
                      '高保真Figma原型，40+界面与完整交互动效。',
                      '15名用户测试迭代，任务完成率提升至98%。',
                      '同步构建设计系统，为技术落地奠定基础。',
                    ],
                  },
                  {
                    title: '项目亮点：',
                    items: [
                      '前瞻性交互范式探索，具备创新性与前瞻性。',
                      '完整的HCI方法论演练。',
                      '从概念到可落地方案的完整设计能力展示。',
                    ],
                  },
                ],
                images: [asset('assets/case11.png')],
              },
            ],
          },
        ],
        joinTitle: '加入我们，您将获得：',
        joinBullets: [
          '深度参与真实商业项目，积累宝贵的实战经验。',
          '获得来自腾讯、字节跳动、亚马逊等大厂背景导师的一对一指导。',
          '在敏捷、开放、极客的团队文化中快速成长。',
          '表现优异者将获得正式工作机会。',
        ],
        closing: '云上同行，帆启新程。',
      },
      compare: {
        title: '为什么选择 中帆云联？',
        subtitle:
          '我们以AI与定制化双轮驱动，为企业提供真正赋能的智能化转型解决方案。',
        headers: ['中帆云联', '传统开发商', 'AI初创公司'],
        rows: [
          ['AI+定制化双轮驱动', '仅提供定制开发', '仅专注AI应用'],
          ['全栈式服务覆盖', '技术开发为主', '应用层解决方案'],
          ['国际化视野与经验', '本地化服务', '技术导向为主'],
          ['战略咨询到落地', '开发交付为主', '概念验证阶段'],
        ],
      },
      testimonial: {
        quote: '中帆云联的AI创新与定制开发能力帮助我们快速实现了智能化转型，技术团队的专业程度和执行力让人印象深刻。',
        author: '某制造企业——数字化负责人',
      },
      contact: {
        title: '联系我们',
        subtitle:
          '让我们一起探讨如何通过AI创新与定制开发，赋能您的企业智能化转型。',
        primary: '了解详情',
        secondary: '联系我们',
      },
    },
    en: {
      brand: 'Zonfine Cloud',
      navLinks: ['Efficiency', 'Customers & Pain Points', 'Advantages', 'Training', 'Comparison'],
      contactCta: 'Contact Us',
      langToggle: '中文',
      hero: {
        badge: 'Exploring the Unknown, Reshaping Tradition',
        title: '78% Efficiency Improvement',
        desc:
          'Zonfine Cloud Tech (Shanghai) Co., Ltd. empowers enterprise intelligent transformation and digital reshaping through AI and custom software.',
      },
      heroCard: {
        title: 'Core Business',
        desc:
          'Zon.AI Studio + Digital Engine Studio provide full-stack services from strategic consulting to solution implementation.',
        metrics: ['Quality Assurance', 'Technology Empowerment'],
      },
      trusted: 'Target Customer:',
      infoModal: {
        title: 'Zonfine Cloud Tech (Shanghai) Co., Ltd. Company Profile',
        introTitle: 'Company Overview',
        introParas: [
          'Zonfine Cloud Tech (Shanghai) Co., Ltd. is an innovative technology company dedicated to empowering enterprise intelligent transformation and digital reshaping through dual engines of AI and customized software.',
          'Guided by our mission “Exploring the Unknown with AI, Reshaping Tradition with Customization,” we combine cutting-edge technology vision with deep engineering capabilities to deliver full-stack services from strategic consulting to solution implementation. Our scope includes technical services, software development, AI foundational software, outsourcing services, computer systems services, cloud-based business outsourcing, and IT consulting.',
          'Our core team brings global perspective and experience from leading internet companies, blending advanced engineering expertise with product innovation to turn every technology shift into sustainable competitive advantages for our clients.',
        ],
        founderTitle: 'Founding Team',
        founderParas: [
          'The founding team includes members with experience at Tencent, TikTok, Amazon, and other global technology leaders, with strong engineering and product delivery capabilities.',
          'We have long focused on game development, advertising systems, and AI, and are skilled at building high-concurrency, highly available platforms and product systems from 0 to 1.',
          'After participating in multiple industry transformations, we recognized how AI and real-time interaction technologies are expanding software service boundaries, and we aim to bring top-tier engineering practice and product thinking to more industries.',
        ],
        studiosTitle: 'Core Business Divisions',
        studios: [
          {
            title: 'Zon.AI Studio | AI Innovation & Application',
            desc: 'Zon.AI Studio focuses on Agent development and “AI+” scenario integration, offering end-to-end innovation services from forward-looking solution design to actionable prototype incubation, enabling clients to seize the lead in the new era of intelligence.',
            image: asset('assets/zonai.png'),
            alt: 'Zon.AI Studio',
          },
          {
            title: 'Digital Engine Studio (DES)',
            desc: 'DES is our core engineering division for deeply customized digital transformation. With craftsmanship as precise and reliable as an encryption algorithm, we build robust, scalable digital systems and provide one-stop transformation solutions from consultation and development to delivery and maintenance.',
            image: asset('assets/des.png'),
            alt: 'Digital Engine Studio',
          },
        ],
        logoRowAlt: 'Zonfine logos',
      },
      customers: [
        {
          title: 'Traditional Enterprises',
          desc: 'Urgently need digital transformation and process upgrades with a steady, reliable path forward.',
        },
        {
          title: 'State-Owned Enterprises & Institutions',
          desc: 'Experience customized services within secure, compliant governance frameworks.',
        },
        {
          title: 'Startup Teams or Projects',
          desc: 'Leverage AI-driven efficiency to validate product value faster.',
        },
        {
          title: 'Students & Individuals',
          desc: 'Personalized exploration with technical upskilling and stack building.',
        },
      ],
      value: {
        title: 'We solve intelligent transformation challenges.',
        subtitle: 'Combining cutting-edge technology vision with deep engineering capabilities to provide full-stack AI and customization services.',
        cards: [
          {
            title: 'AI Innovation Driven',
            text: 'Specializing in Agent development and "AI+" scenario integration, leading the new wave of intelligence.',
          },
          {
            title: 'Deep Custom Development',
            text: 'Building robust, scalable proprietary digital systems with craftsmanship, achieving core enterprise competitiveness.',
          },
          {
            title: 'Full-Stack Services',
            text: 'Providing one-stop solutions covering consultation, development, delivery, and maintenance from strategy to implementation.',
          },
          {
            title: 'Technology Empowerment',
            text: 'Transforming cutting-edge engineering capabilities into sustainable competitive advantages for clients.',
          },
        ],
      },
      features: [
        {
          title: 'AI Innovation & Application',
          text: 'Zon.AI Studio specializes in Agent development and AI+ scenario integration, providing end-to-end innovation services from solution design to prototype incubation.',
        },
        {
          title: 'Digital Engine Customization',
          text: 'Digital Engine Studio builds proprietary digital systems with precision craftsmanship, offering one-stop transformation solutions from consultation to maintenance.',
        },
        {
          title: 'Technology Consulting Services',
          text: 'Combining international vision and top-tier engineering experience to provide strategic consulting and technical solution design.',
        },
        {
          title: 'Intelligent Transformation',
          text: 'Helping enterprises transform cutting-edge technology into sustainable competitive advantages, becoming trusted navigation partners in the AI era.',
        },
      ],
      mapAlt: 'Map placeholder',
      bigPicture: {
        title: 'Explore the Unknown, Reshape Tradition',
        subtitle:
          'Zonfine Cloud Tech combines cutting-edge AI technology with deep engineering capabilities, transforming intelligent innovation into powerful drivers for sustainable enterprise development.',
        points: [
          'AI Empowers Enterprise Efficiency',
          'Customized Reshaping of Traditional Business',
          'Technology Drives Business + Method Innovation',
          'Empowers Enterprise Digital Transformation',
        ],
        cta: 'Discover More',
      },
      training: {
        title: 'Technical Talent Development',
        subtitle: 'We believe that cultivating technical talent is fundamental to advancing the industry. We provide systematic technical training programs for students and career changers passionate about technology.',
        requirements: {
          title: 'Technical Training Application Requirements',
          items: [
            'Computer science students / Students from other majors with basic knowledge / Career changers',
            'Strong programming foundation and learning ability',
            'Proficiency in at least one mainstream programming language (Python, Java, JavaScript, etc.) and related development tools',
            'Priority given to those with project experience'
          ]
        },
        directions: {
          title: 'Available Training Directions',
          items: ['AI Engineering', 'Data Development', 'Software Development', 'Game Development', 'Interaction Design']
        }
      },
      trainingModal: {
        title: 'Computer Coaching Tracks (Internship Program)',
        intro: [
          'We believe technical talent development drives industry progress. For students and career changers passionate about technology, we designed a structured internship program with real-world project experience and mentorship.',
        ],
        requirementsTitle: 'Internship Requirements:',
        requirements: [
          'CS students / Non-CS students with basics / Career changers',
          'Solid programming foundation and strong learning ability',
          'Proficient in at least one mainstream language (Python, Java, JavaScript, etc.) and tools',
          'Project experience is a plus',
        ],
        directionsTitle: 'Tracks & Responsibilities:',
        directions: [
          {
            title: 'Track 1: AI Engineering',
            bullets: [
              'Participate in AI application development and deployment such as chatbots and code assistants.',
              'Assist model training, fine-tuning, evaluation, and performance optimization.',
              'Support data labeling, feature engineering, experiment tracking, and documentation.',
              'Help build AI service APIs, integration, and evaluation.',
            ],
            cases: [
              {
                title: 'Case 1: Financial Compliance RAG Chatbot',
                intro: 'Delivered an intelligent regulatory Q&A system for a securities firm, integrating 1,000+ live regulatory documents. It offers 24/7 instant answers and improved lookup efficiency by 300%.',
                sections: [
                  {
                    title: 'Key challenges:',
                    items: [
                      'Complex document parsing and structuring with knowledge graph extraction.',
                      'High-precision, traceable retrieval with LangChain + embeddings + keyword search.',
                      'Strict hallucination control via prompt design and factual verification.',
                    ],
                  },
                  {
                    title: 'Tech stack:',
                    items: [
                      'LangChain, GPT-4 (partial Llama 2 fine-tuning)',
                      'Pinecone, Elasticsearch, PostgreSQL',
                      'Apache Tika, SpaCy',
                      'Kubernetes on AWS, internal Vue.js console',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      'Source-traceable answers for audit compliance.',
                      '24-hour automated knowledge updates.',
                      '70% API cost reduction by optimizing retrieval.',
                    ],
                  },
                ],
                images: [asset('assets/case1.png')],
              },
              {
                title: 'Case 2: Game Ad Creative AI Studio',
                intro: 'Built an AIGC ad-creative platform for a mobile game publisher, generating multi-format creatives in 60 seconds with 10x efficiency gains.',
                sections: [
                  {
                    title: 'Key challenges:',
                    items: [
                      'Character consistency via Nano Banana LoRA fine-tuning.',
                      'Automated multi-agent workflow for analysis, generation, and post-processing.',
                      'Template + free-form modes with multi-size adaptation.',
                    ],
                  },
                  {
                    title: 'Tech stack:',
                    items: [
                      'Nano Banana AI Agent Platform, Stable Diffusion + LoRA',
                      'FastAPI + async task queue',
                      'React admin console, AWS S3',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      'Vertical specialization for game creatives.',
                      'Multi-agent orchestration pipeline.',
                      'CTR uplift of 15%+.',
                    ],
                  },
                ],
                images: [asset('assets/case2.png'), asset('assets/case3.png'), asset('assets/case4.png'), asset('assets/case5.png')],
              },
            ],
          },
          {
            title: 'Track 2: Data Development',
            bullets: [
              'Build ETL pipelines, data warehouses, and data marts.',
              'Support insights, reporting, and visualization.',
              'Assist big data research and tuning (Hadoop/Spark/Flink).',
              'Maintain data quality and data service APIs.',
            ],
            cases: [
              {
                title: 'Case 1: Real-time Risk Control & User Vector Platform',
                intro: 'Delivered a real-time data platform for a fintech company, enabling millisecond fraud detection and personalization features.',
                sections: [
                  {
                    title: 'Key challenges:',
                    items: [
                      'Kafka + Flink cleaning + Hudi lakehouse for reliable pipelines.',
                      'Flink CEP for complex event detection and real-time feature computation.',
                      'Behavior vectorization with Spark Word2Vec and Milvus storage.',
                      'Unified feature services with Redis online + Hudi offline storage.',
                    ],
                  },
                  {
                    title: 'Tech stack:',
                    items: [
                      'Flink, Spark, Kafka, Milvus, Redis, Hudi, Airflow, YARN',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      'End-to-end production pipeline delivery.',
                      'Streaming + batch unified architecture.',
                      'Enhanced fraud detection and marketing models.',
                    ],
                  },
                ],
                images: [asset('assets/case6.png')],
              },
            ],
          },
          {
            title: 'Track 3: Software Development',
            bullets: [
              'Full-stack development across frontend and backend modules.',
              'Database optimization and system performance tuning.',
              'Quality assurance via testing and defect resolution.',
            ],
            cases: [
              {
                title: 'Case 1: Smart Logistics Operations Platform',
                intro: 'Built a digital operations hub for a logistics company covering order, dispatch, tracking, and settlement.',
                sections: [
                  {
                    title: 'Key modules:',
                    items: [
                      'Order and dispatch management, real-time tracking, and reconciliation.',
                      'Indexing, SQL optimization, caching, and archival strategies.',
                      'Automation testing, monitoring, and intelligent ops.',
                      'Embedded customer-support agent via lightweight RAG.',
                    ],
                  },
                  {
                    title: 'Tech stack:',
                    items: [
                      'React + Ant Design Pro + Umi + ECharts',
                      'Python 3.10 + FastAPI + SQLAlchemy',
                      'MySQL + Redis; LangChain + Embeddings + LLM',
                      'Docker + ECS + Jenkins + observability stack',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      'Scenario-driven design for logistics pain points.',
                      'Data-driven performance optimization.',
                      'AI-powered support reducing inquiry calls by 40%.',
                    ],
                  },
                ],
                images: [asset('assets/case7.png'), asset('assets/case8.png')],
              },
            ],
          },
          {
            title: 'Track 4: Game Development',
            bullets: [
              'Client/server gameplay feature development.',
              'Data storage optimization for high concurrency.',
              'Integration testing and asset management.',
            ],
            cases: [
              {
                title: 'Case 1: Idle Mobile Game “Adventurer’s Diary”',
                intro: 'Independently built and launched an idle mobile game with full account, inventory, and quest systems.',
                sections: [
                  {
                    title: 'Responsibilities:',
                    items: [
                      'Unity UGUI interface and idle gameplay logic.',
                      'Go backend for accounts and gameplay services.',
                      'MySQL storage with Redis caching.',
                    ],
                  },
                  {
                    title: 'Tech stack:',
                    items: [
                      'Unity 2021, C#, Go (Gin), MySQL, Redis, Nginx',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      'Full-stack delivery from client to server.',
                      'Stable architecture focused on reliability.',
                      'Exposure to Git and production operations.',
                    ],
                  },
                ],
                images: [asset('assets/case9.png')],
              },
            ],
          },
          {
            title: 'Track 5: HCI & Creative Computing',
            bullets: [
              'Design interaction frameworks, prototypes, and user tests.',
              'Data visualization and information architecture design.',
              'AI-generated content and real-time rendering prototypes.',
            ],
            cases: [
              {
                title: 'Case 1: Insight Pilot Narrative Analytics Platform',
                intro: 'Delivered an interactive platform enabling natural-language queries to generate narrative reports with dynamic charts.',
                sections: [
                  {
                    title: 'Key responsibilities:',
                    items: [
                      'Conversational analytics UX and personalized discovery.',
                      'Narrative visualization engine and key insight highlighting.',
                      'Canvas/WebGL motion + LLM narrative generation.',
                    ],
                  },
                  {
                    title: 'Tech stack:',
                    items: [
                      'React + TypeScript + D3.js + Three.js/Framer Motion + Konva',
                      'FastAPI, LangChain, GPT-4/Llama 3, Sentence Transformers',
                      'PostgreSQL + Redis',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      '“Conversation as analysis” interaction paradigm.',
                      'Data storytelling with dynamic narration.',
                      'Fusion of LLM + visualization + interaction.',
                    ],
                  },
                ],
                images: [asset('assets/case10.png')],
              },
              {
                title: 'Case 2: “NutriSnap” Vision-based Ordering Prototype',
                intro: 'Explored a “vision-first” ordering experience through high-fidelity interactive prototyping.',
                sections: [
                  {
                    title: 'Design highlights:',
                    items: [
                      'Camera-first task flow with progressive disclosure.',
                      'AI recognition confirmation and expandable info cards.',
                      'Micro-interactions with real-time feedback.',
                    ],
                  },
                  {
                    title: 'Deliverables & validation:',
                    items: [
                      '40+ screens high-fidelity Figma prototype.',
                      '15-user testing, completion rate up to 98%.',
                      'Design system for consistent implementation.',
                    ],
                  },
                  {
                    title: 'Highlights:',
                    items: [
                      'Forward-looking interaction paradigm exploration.',
                      'Full HCI methodology practice.',
                      'Bridging concept to implementable product design.',
                    ],
                  },
                ],
                images: [asset('assets/case11.png')],
              },
            ],
          },
        ],
        joinTitle: 'What you will gain:',
        joinBullets: [
          'Hands-on experience in real business projects.',
          '1-on-1 mentorship from leaders with big-tech backgrounds.',
          'Grow rapidly in an agile, open, and geeky culture.',
          'Outstanding interns may receive full-time offers.',
        ],
        closing: 'Sail Together on the Cloud, Chart New Horizons.',
      },
      compare: {
        title: 'Why Choose Zonfine Cloud Tech?',
        subtitle:
          'We drive enterprise intelligent transformation with dual engines of AI and customization, providing truly empowering solutions.',
        headers: ['Zonfine Cloud Tech', 'Traditional Developers', 'AI Startups'],
        rows: [
          ['AI + Customization Dual Engine', 'Only Custom Development', 'Only AI Applications'],
          ['Full-Stack Service Coverage', 'Mainly Technical Development', 'Application Layer Solutions'],
          ['International Vision & Experience', 'Localized Services', 'Mainly Technology-Oriented'],
          ['Strategy to Implementation', 'Mainly Development & Delivery', 'Proof of Concept Stage'],
        ],
      },
      testimonial: {
        quote:
          'Zonfine Cloud Tech\'s AI innovation and custom development capabilities helped us achieve rapid intelligent transformation. The professionalism and execution of their technical team are impressive.',
        author: 'Digital Transformation Director — A Manufacturing Company',
      },
      contact: {
        title: 'Contact Us',
        subtitle:
          'Let\'s explore how AI innovation and custom development can empower your enterprise\'s intelligent transformation.',
        primary: 'Learn More',
        secondary: 'Contact Us',
      },
    },
  }
  const copy = content[lang]
  const roleOptionsByLang = {
    zh: ['学生', '个人', '企业', '政府机构或组织'],
    en: ['Student', 'Individual', 'Enterprise', 'Government/Organization'],
  }
  const demandOptionsByLang = {
    zh: [
      '业务咨询-一般问题',
      '业务咨询-合作畅谈',
      '技术服务-定制化软件',
      '技术服务-数字化转型',
      '技术服务-AI升级',
      '技术服务-技术培训及实践',
    ],
    en: [
      'Business - General Inquiry',
      'Business - Partnership',
      'Tech Service - Custom Software',
      'Tech Service - Digital Transformation',
      'Tech Service - AI Upgrade',
      'Tech Service - Training & Practice',
    ],
  }
  const formText = lang === 'zh'
    ? {
      title: '联系我们',
      roleLabel: '您的角色？',
      roleOptions: roleOptionsByLang.zh,
      selectPlaceholder: '请选择',
      demandLabel: '您的需求？',
      demandOptions: demandOptionsByLang.zh,
      nameLabel: '怎么称呼您？',
      namePlaceholder: 'X先生或Y女士',
      phoneLabel: '手机',
      emailLabel: '邮箱',
      contactPlaceholder: '至少填一个',
      noteLabel: '补充说明',
      notePlaceholder: '选填，最多300字',
      contactInfo: '*您同样可以直接通过邮件的方式联系我们：zonfinecloudtech@outlook.com',
      submit: '提交',
      confirmTitle: '请检查信息是否正确',
      confirmButton: '确认',
      successMessage: '已成功提交，请静待佳音。',
      submitError: '提交失败，请稍后再试。',
      errors: {
        role: '请选择您的角色',
        demand: '请选择您的需求',
        name: '请填写称呼',
        contact: '请至少填写手机或邮箱',
      },
    }
    : {
      title: 'Contact Us',
      roleLabel: 'Your role',
      roleOptions: roleOptionsByLang.en,
      selectPlaceholder: 'Please select',
      demandLabel: 'Your request',
      demandOptions: demandOptionsByLang.en,
      nameLabel: 'How should we address you?',
      namePlaceholder: 'Mr. X or Ms. Y',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      contactPlaceholder: 'Provide at least one',
      noteLabel: 'Additional notes',
      notePlaceholder: 'Optional, up to 300 chars',
      contactInfo: '*You can also contact us directly via email: zonfinecloudtech@outlook.com',
      submit: 'Submit',
      confirmTitle: 'Please verify your information',
      confirmButton: 'Confirm',
      successMessage: 'Submitted successfully. Please wait for our response.',
      submitError: 'Submission failed. Please try again later.',
      errors: {
        role: 'Please select your role',
        demand: 'Please select your request',
        name: 'Please enter a name',
        contact: 'Please provide phone or email',
      },
    }

  useEffect(() => {
    const storedLang = localStorage.getItem('zonfine_lang')
    if (storedLang === 'zh' || storedLang === 'en') {
      setLang(storedLang)
      setShowLangPrompt(false)
    } else {
      setShowLangPrompt(true)
    }
  }, [])

  const handleLangChoice = (nextLang) => {
    setLang(nextLang)
    localStorage.setItem('zonfine_lang', nextLang)
    setShowLangPrompt(false)
  }

  useEffect(() => {
    if (!showConfirmModal || confirmStage !== 'verify') return
    setConfirmCountdown(3)
    const interval = setInterval(() => {
      setConfirmCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [showConfirmModal])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 50

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleFormChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.role) errors.role = formText.errors.role
    if (!formData.demand) errors.demand = formText.errors.demand
    if (!formData.name.trim()) errors.name = formText.errors.name
    if (!formData.phone.trim() && !formData.email.trim()) errors.contact = formText.errors.contact
    return errors
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return
    setConfirmStage('verify')
    setShowConfirmModal(true)
  }

  const normalizeRole = (value) => {
    const map = {
      学生: 'student',
      个人: 'individual',
      企业: 'enterprise',
      政府机构或组织: 'government',
      Student: 'student',
      Individual: 'individual',
      Enterprise: 'enterprise',
      'Government/Organization': 'government',
    }
    if (!value) return ''
    return map[value] || String(value).toLowerCase()
  }

  const normalizeRequest = (value) => {
    if (!value) return ''
    if (demandOptionsByLang.en.includes(value)) return value
    const index = demandOptionsByLang.zh.indexOf(value)
    if (index !== -1) return demandOptionsByLang.en[index]
    return value
  }

  const handleConfirmSubmit = async () => {
    if (confirmStage === 'verify') {
      setSubmitError('')
      const payload = {
        role: normalizeRole(formData.role),
        request: normalizeRequest(formData.demand),
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        notes: formData.note.trim(),
      }
      try {
        const response = await fetch('https://1grvudx1hi.execute-api.cn-northwest-1.amazonaws.com.cn/contactUs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      } catch (error) {
        console.error('Contact submission failed', error)
        setSubmitError(formText.submitError)
        return
      }
      setConfirmStage('success')
      setIsContactClosing(true)
      setTimeout(() => {
        setShowContactModal(false)
        setIsContactClosing(false)
      }, 300)
      return
    }
    setShowConfirmModal(false)
    setFormData({ role: '', demand: '', name: '', phone: '', email: '', note: '' })
    setFormErrors({})
  }

  const handleConfirmClose = () => {
    setSubmitError('')
    setShowConfirmModal(false)
    setSubmitError('')
  }

  return (
    <>
      {showLangPrompt && (
        <div className="lang-modal" role="dialog" aria-modal="true">
          <div className="lang-modal-card">
            <button
              className="lang-modal-close"
              type="button"
              onClick={() => handleLangChoice('zh')}
              aria-label="Close and keep Chinese"
            >
              ×
            </button>
            <h3>是否切换至英文？</h3>
            <p>Would you like to switch to English?</p>
            <div className="lang-modal-actions">
              <button
                className="button"
                type="button"
                onClick={() => handleLangChoice('en')}
              >
                是的 | Yes
              </button>
              <button
                className="button secondary"
                type="button"
                onClick={() => handleLangChoice('zh')}
              >
                不 | No
              </button>
            </div>
          </div>
        </div>
      )}
      {showInfoModal && (
        <div className="info-modal" role="dialog" aria-modal="true">
          <div className="info-modal-card">
            <div className="info-modal-header">
              <button
                className="info-modal-close"
                type="button"
                onClick={() => setShowInfoModal(false)}
                aria-label="Close company profile"
              >
                ×
              </button>
              <h3>{copy.infoModal.title}</h3>
              <div className="info-modal-logos" aria-label={copy.infoModal.logoRowAlt}>
                <img src={asset('assets/zonfine_logo.png')} alt="Zonfine Logo" />
                <img src={asset('assets/zonfine_logo_sub.png')} alt="Zonfine Logo Sub" />
              </div>
            </div>
            <div className="info-modal-body">
              <div className="info-modal-section">
                <h4>{copy.infoModal.introTitle}</h4>
                {copy.infoModal.introParas.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <div className="info-modal-section">
                <h4>{copy.infoModal.founderTitle}</h4>
                {copy.infoModal.founderParas.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <div className="info-modal-section">
                <h4>{copy.infoModal.studiosTitle}</h4>
                {copy.infoModal.studios.map((studio) => (
                  <div key={studio.title} className="info-modal-studio">
                    <h5>{studio.title}</h5>
                    <p>{studio.desc}</p>
                    <img src={studio.image} alt={studio.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {showTrainingModal && (
        <div className="info-modal" role="dialog" aria-modal="true">
          <div className="info-modal-card">
            <div className="info-modal-header">
              <button
                className="info-modal-close"
                type="button"
                onClick={() => setShowTrainingModal(false)}
                aria-label="Close training details"
              >
                ×
              </button>
              <h3>{copy.trainingModal.title}</h3>
            </div>
            <div className="info-modal-body">
              <div className="info-modal-section">
                {copy.trainingModal.intro.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <div className="info-modal-section">
                <h4>{copy.trainingModal.requirementsTitle}</h4>
                <ul className="info-list">
                  {copy.trainingModal.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="info-modal-section">
                <h4>{copy.trainingModal.directionsTitle}</h4>
                {copy.trainingModal.directions.map((direction) => (
                  <div key={direction.title} className="training-direction">
                    <h5>{direction.title}</h5>
                    <ul className="info-list">
                      {direction.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {direction.cases.map((caseItem) => (
                      <div key={caseItem.title} className="training-case">
                        <h6>{caseItem.title}</h6>
                        <p className="case-intro">{caseItem.intro}</p>
                        {caseItem.sections.map((section) => (
                          <div key={section.title} className="case-section">
                            <strong>{section.title}</strong>
                            <ul className="info-list">
                              {section.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {caseItem.images?.length > 0 && (
                          <div className="case-images">
                            {caseItem.images.map((src, index) => (
                              <img
                                key={`${caseItem.title}-${src}-${index}`}
                                src={src}
                                alt={`${caseItem.title} ${index + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="info-modal-section">
                <h4>{copy.trainingModal.joinTitle}</h4>
                <ul className="info-list">
                  {copy.trainingModal.joinBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="training-closing">{copy.trainingModal.closing}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showContactModal && (
        <div
          className={`contact-modal${isContactClosing ? ' closing' : ''}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="contact-modal-card">
            <button
              className="contact-modal-close"
              type="button"
              onClick={() => setShowContactModal(false)}
              aria-label="Close contact form"
            >
              ×
            </button>
            <h3>{formText.title}</h3>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-grid">
                <label className="form-field">
                  <span>{formText.roleLabel}</span>
                  <select value={formData.role} onChange={handleFormChange('role')}>
                    <option value="">{formText.selectPlaceholder}</option>
                    {formText.roleOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {formErrors.role && <small className="field-error">{formErrors.role}</small>}
                </label>
                <label className="form-field">
                  <span>{formText.demandLabel}</span>
                  <select value={formData.demand} onChange={handleFormChange('demand')}>
                    <option value="">{formText.selectPlaceholder}</option>
                    {formText.demandOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {formErrors.demand && <small className="field-error">{formErrors.demand}</small>}
                </label>
                <label className="form-field">
                  <span>{formText.nameLabel}</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleFormChange('name')}
                    placeholder={formText.namePlaceholder}
                  />
                  {formErrors.name && <small className="field-error">{formErrors.name}</small>}
                </label>
                <label className="form-field">
                  <span>{formText.phoneLabel}</span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleFormChange('phone')}
                    placeholder={formText.contactPlaceholder}
                  />
                </label>
                <label className="form-field">
                  <span>{formText.emailLabel}</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange('email')}
                    placeholder={formText.contactPlaceholder}
                  />
                </label>
                {formErrors.contact && (
                  <div className="form-field full-width">
                    <small className="field-error">{formErrors.contact}</small>
                  </div>
                )}
                <label className="form-field full-width">
                  <span>{formText.noteLabel}</span>
                  <textarea
                    value={formData.note}
                    onChange={handleFormChange('note')}
                    placeholder={formText.notePlaceholder}
                    maxLength={300}
                  />
                </label>
                <div className="form-field full-width">
                  <small className="contact-info">
                    {formText.contactInfo}
                  </small>
                </div>
              </div>
              <div className="form-actions">
                <button className="button" type="submit">{formText.submit}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showConfirmModal && (
        <div className="confirm-modal" role="dialog" aria-modal="true">
          <div className="confirm-modal-card">
            <button
              className="confirm-modal-close"
              type="button"
              onClick={handleConfirmClose}
              aria-label="Close"
            >
              ×
            </button>
            {confirmStage === 'verify' ? (
              <>
                <h4>{formText.confirmTitle}</h4>
                <ul className="confirm-list">
                  <li>1. {formText.roleLabel}：{formData.role || '-'}</li>
                  <li>2. {formText.demandLabel}：{formData.demand || '-'}</li>
                  <li>3. {formText.nameLabel}：{formData.name || '-'}</li>
                  <li>
                    4. {formText.phoneLabel}/{formText.emailLabel}：
                    {[formData.phone, formData.email].filter(Boolean).join(' / ') || '-'}
                  </li>
                </ul>
                <button
                  className="button secondary"
                  type="button"
                  disabled={confirmCountdown > 0}
                  onClick={handleConfirmSubmit}
                >
                  {confirmCountdown > 0
                    ? `${formText.confirmButton} (${confirmCountdown}s)`
                    : formText.confirmButton}
                </button>
                {submitError && (
                  <p className="field-error" role="alert">{submitError}</p>
                )}
              </>
            ) : (
              <>
                <h4>{formText.successMessage}</h4>
                <button
                  className="button"
                  type="button"
                  onClick={handleConfirmSubmit}
                >
                  {formText.confirmButton}
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <header className="nav">
        <div className="container nav-inner">
          <div className="nav-logo">
            <img src={asset('assets/3d_logo.png')} alt="Zonfine Logo" />
            {copy.brand}
          </div>
          <nav className="nav-links">
            {copy.navLinks.map((item, index) => {
              const sectionIds = ['top', 'customers', 'advantages', 'training', 'comparison']
              return (
                <button
                  key={item}
                  className="nav-link"
                  onClick={() => scrollToSection(sectionIds[index])}
                >
                  {item}
                </button>
              )
            })}
            <button
              className="lang-toggle"
              type="button"
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              aria-label="Toggle language"
            >
              {copy.langToggle}
            </button>
          </nav>
          <button
            className="nav-cta"
            type="button"
            onClick={() => setShowContactModal(true)}
          >
            {copy.contactCta}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div>
              <span className="badge">{copy.hero.badge}</span>
              <h1 className="hero-title">{copy.hero.title}</h1>
              <p className="hero-subtitle">{copy.hero.desc}</p>
              <div className="progress">
                <div className="progress-bar">
                  <span className="progress-dot"></span>
                  <span className="progress-dot"></span>
                  <span className="progress-dot active"></span>
                </div>
                <div className="progress-steps">
                  <span>2024</span>
                  <span>2025</span>
                  <span className="active">2026</span>
                </div>
              </div>
            </div>
            <div className="card hero-card">
              <h3>{copy.heroCard.title}</h3>
              <p>{copy.heroCard.desc}</p>
              <div className="hero-metrics">
                <div>
                  <strong>300+</strong>
                  <span>{copy.heroCard.metrics[0]}</span>
                </div>
                <div>
                  <strong>21</strong>
                  <span>{copy.heroCard.metrics[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <div className="container">
            <h2 className="section-title">{copy.trusted}</h2>
            <div className="trusted-logos">
              {copy.customers.map((customer) => (
                <div key={customer.title} className="customer-card">
                  <h4 className="customer-title">{customer.title}</h4>
                  <p className="customer-desc">{customer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="value">
          <div className="container">
            <h2 className="section-title">{copy.value.title}</h2>
            <p className="section-subtitle">{copy.value.subtitle}</p>
            <div className="card-grid">
              {copy.value.cards.map((card) => (
                <div key={card.title} className="card">
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container features">
            <div className="feature-list">
              {copy.features.map((item) => (
                <div key={item.title} className="feature-item">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="map-wrap">
              <img src={asset('assets/map-placeholder.svg')} alt={copy.mapAlt} />
            </div>
          </div>
        </section>

        <section className="big-picture" id="advantages">
          <div className="container">
            <div className="big-picture-grid">
              <div className="big-picture-content">
                <h2 className="section-title">{copy.bigPicture.title}</h2>
                <p className="section-subtitle">{copy.bigPicture.subtitle}</p>
                <div className="point-list">
                  {copy.bigPicture.points.map((point, index) => (
                    <div key={point} className="point">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>{point}</div>
                    </div>
                  ))}
                </div>
                <button
                  className="button"
                  type="button"
                  onClick={() => setShowInfoModal(true)}
                >
                  {copy.bigPicture.cta}
                </button>
              </div>
              <div className="big-picture-logo">
                <img src={asset('assets/zonfine_logo_sub.png')} alt="中帆云联 Logo" />
                <img src={asset('assets/3d_logo.png')} alt="中帆云联 3D Logo" />
              </div>
            </div>
          </div>
        </section>

        <section id="training">
          <div className="container">
            <h2 className="section-title">{copy.training.title}</h2>
            <p className="section-subtitle">{copy.training.subtitle}</p>
            
            <div className="training-content">
              <div className="training-requirements">
                <h3>{copy.training.requirements.title}</h3>
                <ul>
                  {copy.training.requirements.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="training-directions">
                <h3>{copy.training.directions.title}</h3>
                <div className="direction-tags">
                  {copy.training.directions.items.map((direction, index) => (
                    <span key={index} className="direction-tag">{direction}</span>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="button"
              type="button"
              onClick={() => setShowTrainingModal(true)}
            >
              {copy.bigPicture.cta}
            </button>
          </div>
        </section>

        <section id="comparison">
          <div className="container">
            <h2 className="section-title">{copy.compare.title}</h2>
            <p className="section-subtitle">{copy.compare.subtitle}</p>
            <div className="comparison">
              <table>
                <thead>
                  <tr>
                    {copy.compare.headers.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.compare.rows.map((row) => (
                    <tr key={row[0]}>
                      <td>
                        <span className="check">✓</span>
                        {' '}
                        {row[0]}
                      </td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="testimonial">
              <blockquote>“{copy.testimonial.quote}”</blockquote>
              <cite>{copy.testimonial.author}</cite>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2 className="section-title">{copy.contact.title}</h2>
            <p className="section-subtitle">{copy.contact.subtitle}</p>
            <div className="button-row">
              <button
                className="button"
                type="button"
                onClick={() => setShowInfoModal(true)}
              >
                {copy.contact.primary}
              </button>
              <button
                className="button secondary"
                type="button"
                onClick={() => setShowContactModal(true)}
              >
                {copy.contact.secondary}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App