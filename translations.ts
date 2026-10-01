export type Language = 'zh' | 'cn' | 'en';

export const translations = {
  zh: {
    common: {
      view_details: '查看詳情',
      status: '狀態',
      date: '日期',
      action: '操作',
      close: '關閉'
    },
    topbar: {
      email: 'Email: editorial@boya-academic.org',
      phone: '諮詢專線: +852 55849939',
      hours: '週一至週五 9:00 - 18:00 (支持先付訂金、錄用後付尾款)'
    },
    nav: {
      services: '核心編修',
      submission: '期刊代投',
      about: '關於博雅',
      team: '主編團隊',
      testimonials: '發表成果',
      calculator: '費用試算',
      faq: '常見問題',
      login: '學者中心',
      logout: '登出',
      console: '稿件工作台',
      access: '登入',
      upload_btn: '上傳文稿試算報價'
    },
    hero: {
      est: '專注人文與社會科學 • SSCI / A&HCI 期刊編修與代投',
      title_1: '博雅文研學術編修',
      title_2: '助您的研究登頂國際頂刊',
      subtitle: '專為中國大陸與香港高校學者、社科院研究員及博士生打造。聚焦社會學、公共治理、教育學、傳播學、文史哲及經管領域，由英美名校人文社科母語主編提供選題諮詢、深度潤稿、Cover Letter 撰寫、Target Journal 規範排版及全流程代投代理（錄用才付全額），全方位提高 SSCI / A&HCI 接受率。',
      disclaimer_box: '【學術倫理與出版責任聲明】期刊投稿服務旨在協助學者克服繁雜的語言與行政流程，不替代作者之學術研究責任。博雅文研協助處理期刊格式、投稿信撰寫、投稿系統註冊與多文件上傳等細節；研究資料、學術論證、審稿意見實質答辯及期刊最終錄用決策，仍以作者與期刊編輯部為準。嚴禁代寫，恪守 COPE 國際出版倫理。',
      cta_primary: '上傳論文取得即時報價',
      cta_secondary: '查看社科投稿方案',
      badges: {
        native: '英美社科母語資深主編',
        cert: '國際頂刊認可編修證明',
        formatting: 'APA / Chicago / Harvard 規範',
        confidential: '高規格保密協定 (NDA)'
      },
      priority_title: '快速了解社科投稿通道',
      priority_text: '全新推出全流程投稿代理方案：先收取基礎行政訂金，待期刊正式發出 Accept 錄用通知後再結算全額費用；費用依據目標期刊 JCR 分區階梯調整。',
      capacity: '本週社科代投名額',
      full: '席位開放中',
      priority_form: {
        title: '預約人文社科專屬主編評估',
        email: '高校 / 科研機構專用郵箱',
        phone: '手機號碼 / WhatsApp (+852)',
        target_journal: '目標期刊或意向分區 (如: SSCI Q1)',
        submit: '送出評估需求'
      }
    },
    calculator: {
      title: '人文社科論文編修與代投費用試算',
      subtitle: '收費透明、字數計價，支援「先付訂金、錄用後付尾款」全流程代理保障。',
      single_title: '人文社科英文潤稿試算',
      bulk_title: '國際期刊投稿與代理服務方案',
      labels: {
        words: '文稿預計字數 (Words)',
        subject: '人文社科學科範疇',
        urgency: '交付週期速度',
        service_tier: '潤稿編修等級',
        submission_package: '投稿協助與代理方案'
      },
      options: {
        general: '社會學、人口學與社會工作 (Sociology & Social Work)',
        biomedical: '公共管理、政治學與國際關係 (Public Admin & Politics)',
        engineering: '教育學、高等教育與傳播學 (Education & Communication)',
        tier_standard: '標準學術編修 (文法、修辭、標點、學術措辭精準化)',
        tier_substantive: '深度學術潤稿 (質性深描潤色、論證邏輯重組、消除中式英文)',
        tier_translation: '學術中翻英 + 社科母語主編雙審制',
        normal: '標準速度 (5-7 個工作天)',
        urgent: '加急服務 (3-4 個工作天)',
        super_urgent: '特急專案 (24-48 小時)'
      },
      packages: {
        pkg_conception: '【新服務】論文選題策劃與理論框架諮詢 (Topic Conception & Theoretical Scoping)',
        pkg_full_agent: '【旗艦保障】全流程投稿代理 (先收訂金、錄用才收全額 · 依分區階梯計價)',
        pkg_full: '標準期刊代投套裝 (格式排版 + Cover Letter + 系統代投 + 進度追蹤)',
        pkg_formatting: '單項服務：Target Journal 全文格式排版 (APA 7th, Chicago, MLA, Harvard)',
        pkg_response: '審稿意見回覆信 (Response to Reviewers) 專業答辯與二審潤校'
      },
      result: {
        est_price: '預估服務費用',
        currency: 'HKD / RMB',
        save: '組合方案立減',
        total_value: '服務原價',
        pay_only: '結算特惠價',
        contact_btn: '上傳稿件獲取正式報價單'
      }
    },
    services: {
      title: '人文與社會科學核心服務',
      catalog: 'Humanities & Social Sciences Suite',
      version: '精準學術用語 • 嚴謹理論架構 • 提高 SSCI / A&HCI 錄用率',
      items: [
        {
          title: '論文選題與理論框架諮詢',
          desc: '針對學者研究興趣與田野材料，由英美名校社科主編提供一對一前沿文獻脈絡梳理、SSCI 熱門選題評估及理論分析框架 (Theoretical Framework) 建構指導，確保選題具有國際對話價值。',
          tag: '前沿策劃',
          price: '立即了解'
        },
        {
          title: '全流程投稿代理 (錄用才收全額)',
          desc: '提供全流程代投保障：涵蓋 Guide for Authors 排版、Cover Letter 撰寫、系統代投、外審追蹤及審稿意見答辯。先收取基礎行政訂金，文稿獲期刊正式 Accept 才收取全額尾款，按 JCR 分區階梯定價。',
          tag: '錄用保障',
          price: '立即了解'
        },
        {
          title: '人文社科深度母語潤稿',
          desc: '由文史哲、社會學、政治學、教育學背景之英美母語博士主編進行雙階段審閱。重構段落連貫性 (Cohesion)，消除中式英文 (Chinglish)，強化質性研究敘事力。',
          tag: '核心王牌',
          price: '立即了解'
        },
        {
          title: '審稿意見回覆 (R&R) 答辯潤色',
          desc: '收到 Major / Minor Revision 後，針對同行評審意見提供客氣、嚴謹且有力之逐點答辯信 (Point-by-point Response) 語言潤飾，大幅提升最終 Accept 機率。',
          tag: '返修保駕',
          price: '立即了解'
        }
      ],
      login_view: '查看服務細則'
    },
    team: {
      title: '英美頂尖名校人文社科母語主編',
      subtitle: '博雅文研主編團隊成員均獲牛津、劍橋、哈佛、哥倫比亞、港大等名校人文社科博士學位，長期擔任國際主流 SSCI / A&HCI 期刊審稿人 (Peer Reviewers)。',
      stats: {
        phd: '頂級名校社科博士',
        masters: '學科研究方向精確匹配',
        exp: '平均國際期刊審校經驗'
      },
      members: [
        {
          role: '社會學與公共治理領域資深主編',
          edu: 'PhD in Sociology, Oxford University',
          desc: '長期擔任 American Sociological Review 及 British Journal of Sociology 審稿人，專精中國城鄉流動、基層治理與質性深描方法。',
          tags: ['Sociology', 'Governance', 'Qualitative', 'Oxford']
        },
        {
          role: '教育學與傳播研究學術總監',
          edu: 'PhD in Education & Media, Columbia University',
          desc: '專攻高等教育國際化、跨文化傳播與新媒體實證研究。擅長量化回歸模型論述修飾與結構方程模型 (SEM) 學術表達。',
          tags: ['Education', 'Communication', 'Quantitative', 'Columbia']
        },
        {
          role: '文史哲與文化研究特約主編',
          edu: 'PhD in East Asian Studies, Harvard University',
          desc: '深諳中國近現代史、哲學思想史與跨文化文學批評，精通 Chicago (Notes & Bibliography) 與 MLA 引註規範，擅長典籍英譯與概念提煉。',
          tags: ['History', 'Philosophy', 'Chicago Style', 'Harvard']
        }
      ]
    },
    gallery: {
      title: '國際頂刊發表實績',
      subtitle: 'Successful Acceptance in Top-Tier SSCI & A&HCI Journals'
    },
    testimonials: {
      title: '兩岸三地學者發表見證',
      desc: '博雅文研已協助數千位學者順利在國際人文社科頂刊發表高水平論文（為恪守學術隱私，以下均採匿名呈現）：'
    },
    about: {
      title: '關於博雅文研學術編修',
      p1: '博雅文研 (Boya Academic Editorial) 立足香港、服務兩岸三地，專注於為中國大陸與香港的人文與社會科學學者、智庫研究員及高校博士生，提供高品質的國際期刊選題諮詢、論文潤稿、格式排版與全流程投稿代理服務。',
      p2: '人文社科論文高度倚賴概念推導的細膩度、文獻對話的精確性及質性敘事的感染力。非母語學者往往因「中文思維行文」、「概念轉譯生硬」或「投稿系統繁瑣」而在初審遭遇 Desk Reject。博雅文研首創「社科學科專家初審 + 母語主編二審」制度，助您跨越語言與文化壁壘。',
      p3: '我們嚴格遵循國際出版倫理委員會 (COPE) 守則，堅決反對任何代寫行為，提供先收訂金、錄用才收全額的誠信合作模式。'
    },
    faq: {
      title: '常見問題 Q&A',
      subtitle: '為中國大陸與香港學者解答人文社科投稿常見疑惑',
      items: [
        {
          q: '人文社科論文與理工科編修有何不同？為什麼需要專門的社科主編？',
          a: '人文社科論文（文史哲、社會學、教育、傳播、公管）極度強調概念界定的嚴密性、邏輯推進的層次感以及質性敘事風格，不同於理工科公式化的實驗描述。我們的編輯均為人文社科背景的英美母語學者，熟悉本土經驗材料如何轉化為國際主流學術話語，避免生硬機翻感。'
        },
        {
          q: '全流程投稿代理服務中的「先收訂金、錄用才收全額」是如何具體運作與保障的？',
          a: '我們提供透明誠信的階梯成效保障：委託時僅收取基礎行政訂金（用於前期期刊排版、Cover Letter 撰寫與系統代投等繁瑣作業）；在稿件獲得目標期刊正式錄用 (Accept) 前，作者無需支付後續尾款。尾款金額根據期刊在 JCR 中的分區階梯（Q1 頂刊 / Q2 權威 / Q3-Q4）透明定價。若歷經返修最終未能成功發表，您無需支付任何尾款，最大程度降低學者的投稿風險。'
        },
        {
          q: '發出「英文編修證明 (Certificate of Editing)」需要具備什麼資質認證？期刊如何查驗？',
          a: '國際各大出版社（Elsevier, Springer Nature, Wiley, Taylor & Francis, Sage 等）對編修證明並無單一官方壟斷許可執照，其核心審查標準在於：① 編輯團隊是否由具備 BELS (Board of Editors in the Life Sciences) 認證、名校學科博士或國際頂刊同行審查員 (Peer Reviewer) 等合資格英美母語專家執筆；② 機構是否嚴格遵守 COPE 國際出版倫理守則（杜絕代寫代發）；③ 證明書是否包含專屬防偽驗證碼 (Verification Code)、作者姓名、文章標題及查驗信箱。博雅文研完全具備上述英美母語博士主編資質與獨立查驗系統，所出具之編修證明獲得國際主流社科期刊 100% 認可。'
        },
        {
          q: '「論文選題策劃與理論框架諮詢」適合處於哪個階段的研究者？具體如何進行？',
          a: '非常適合已完成初步調研或握有田野調查、問卷數據，但苦惱於如何將「中國本土經驗」轉譯為「國際主流理論對話框架」的學者與博士生。我們由同領域主編與您梳理近 3-5 年 SSCI 目標期刊的核心爭論焦點，指導您提煉概念（Conceptualization）、建構分析架構，從源頭避免選題陳舊被秒拒 (Desk Reject)。'
        },
        {
          q: '收到期刊的修改意見 (Major / Minor Revision) 後，是否提供後續支援？',
          a: '提供！針對同行評審意見，我們提供審稿意見回覆信 (Response to Reviewers) 的專業論述修飾與學術禮貌把關，並對修改後之正文段落提供特惠二審潤校服務。'
        }
      ]
    },
    auth: {
      login_title: '學者帳戶登入',
      register_title: '註冊學者帳戶',
      role: '請選擇您的身分',
      roles: { client: '高校教師 / 研究員 / 博士生', agent: '課題組 / 機構專案窗口', staff: '特約社科主編' },
      name_ph: '學者姓名 / 職稱',
      email_ph: '機構郵箱或常用電郵',
      pass_ph: '設定登入密碼',
      info_ph: '所屬大學 / 研究所 / 學院 (如: 香港大學社會科學學院)',
      submit_login: '登入工作台',
      submit_reg: '立即註冊',
      switch_login: '已有帳戶？按此登入',
      switch_reg: '未有帳戶？免費註冊'
    },
    dashboard: {
      welcome: '歡迎回來,',
      role_label: {
        customer: 'SSCI / A&HCI 稿件進度監控中心',
        agent: '課題組經費專案管理',
        writer: '特約主編審核平台'
      },
      metrics: {
        active_orders: '在審在編稿件',
        completed_units: '已錄用 / 交付',
        membership: '學者會員等級',
        revenue: '課題統計',
        leads: '諮詢跟進'
      },
      pricing: {
        title: '學者專屬服務專案',
        items: [
          { title: '全流程投稿代理旗艦專案 (先收訂金 · 錄用才付全額)', tag: '成效保障' },
          { title: '論文選題策劃與理論框架建構諮詢', tag: '前沿對話' },
          { title: 'SSCI / A&HCI 質性深描母語深度潤色', tag: '高錄用率' }
        ],
        view_specs: '查看方案詳情'
      },
      agent: {
        title: '課題組 / 學院專案合作平台',
        subtitle: '支持中國大陸 985/211 高校、社科院及香港八大院校課題組批次稿件結算。',
        copy_link: '複製課題組專案連結',
        commission_title: '高校機構合作方案',
        commission_desc: '提供院系統一結算、先付訂金錄用結尾款與全流程投稿代理。',
        tiers: [
          { name: '個別課題組方案', rate: '9折優惠', req: '年稿件 3 篇以上', desc: '指定專屬同領域社科主編，優先排單。' },
          { name: '學院 / 研究所簽約', rate: '85折優惠', req: '年稿件 10 篇以上', desc: '統一季度匯總核銷，提供每期編修質檢報告。' },
          { name: '重點實驗室 / 智庫合約', rate: '8折特惠', req: '長期戰略合約', desc: '專屬綠色通道，提供專人到校英文學術寫作工作坊。' }
        ]
      },
      writer: {
        config_title: '主編學術領域設定',
        tags_label: '擅長領域 (Sociology / PolSci / Education / History)',
        rate_label: '審校報酬基準 (每千字)',
        pool_title: '待審人文社科論文大廳',
        col_subject: '學科領域 / 目標期刊',
        col_type: '編修等級',
        col_payout: '酬勞',
        btn_apply: '領取稿件'
      },
      sample_papers: {
        title: '人文社科潤色成果對比範例 (Before & After)',
        subtitle: '嚴守學者版權隱私，以下為去識別化之真實社科潤稿前後對比與 SSCI/A&HCI 頂刊錄用範本。',
        access_btn: '查看修訂追蹤 (Track Changes)'
      },
      brand_gen: {
        title: '社科投稿信 (Cover Letter) 生成器',
        subtitle: '產生符合 SSCI/A&HCI 目標期刊總編規範之投稿信模板。',
        btn_download: '下載範本'
      },
      tracker: {
        title: '國際社科期刊投稿與編修進度追蹤 (Progress Tracker)',
        subtitle: '即時掌握稿件之選題評估、社科專家初審、英美母語二審、APA/Chicago格式排版、Cover Letter 撰寫與系統代投狀態。',
        filter_all: '全部文稿',
        filter_in_progress: '社科初審 (In Progress)',
        filter_drafting: '母語潤色 (Drafting)',
        filter_review: '排版與查重 (Review)',
        filter_completed: '代投完成 / 交付 (Completed)',
        search_placeholder: '搜尋文稿編號、目標期刊、論文標題或責任主編...',
        col_order_id: '文稿編號',
        col_title: '論文題目與目標期刊',
        col_status: '當前階段',
        col_progress: '整體進度',
        col_deadline: '預計交付日',
        col_writer: '責任社科主編',
        btn_details: '審核節點',
        btn_collapse: '收起節點',
        words_label: '論文總字數',
        turnitin_score: 'Turnitin 原創性查重率',
        last_updated: '最新狀態更新',
        milestones_heading: 'SSCI / A&HCI 投稿五部曲里程碑',
        stage_names: {
          in_progress: '學科範疇審閱與初審 (In Progress)',
          drafting: '英美社科母語專家深度潤稿 (Drafting)',
          review: '引註格式排版與編修證明開立 (Review)',
          completed: '期刊系統代投完成 / 交付 (Completed)'
        },
        actions: {
          contact_writer: '與責任主編研討',
          download_preview: '下載修訂追蹤稿 (Track Changes)',
          request_revision: '回饋作者修改意見'
        },
        no_orders: '目前無符合條件之文稿記錄。'
      }
    },
    footer: {
      desc: '博雅文研 • 專注兩岸三地學者的人文與社會科學學術編修與期刊代投',
      contact: '聯絡博雅文研',
      rights: '© 2026 博雅文研學術編修 (Boya Academic Editorial). 版權所有。',
      links: {
        editing: '人文社科英文潤稿',
        translation: '學術論文中翻英',
        submission: 'SSCI / A&HCI 期刊代投',
        acceptance: '全流程投稿代理與成效保障',
        formatting: 'APA / Chicago / Harvard 排版',
        certificate: '官方英文編修證明資質查驗',
        privacy: '學術隱私與保密協定 (NDA)',
        terms: '出版倫理規範 (COPE) & 退款保障'
      }
    }
  },
  cn: {
    common: {
      view_details: '查看详情',
      status: '状态',
      date: '日期',
      action: '操作',
      close: '关闭'
    },
    topbar: {
      email: 'Email: editorial@boya-academic.org',
      phone: '咨询热线: +852 55849939',
      hours: '周一至周五 9:00 - 18:00 (支持先付定金、录用后结清尾款)'
    },
    nav: {
      services: '核心编修',
      submission: '期刊代投',
      about: '关于博雅',
      team: '主编团队',
      testimonials: '发表成果',
      calculator: '费用测算',
      faq: '常见问题',
      login: '学者中心',
      logout: '退出登录',
      console: '稿件工作台',
      access: '登录',
      upload_btn: '上传文稿测算报价'
    },
    hero: {
      est: '专注人文与社会科学 • SSCI / A&HCI 期刊编修与代投',
      title_1: '博雅文研学术编修',
      title_2: '助您的研究登顶国际顶刊',
      subtitle: '专为中国大陆与香港高校学者、社科院研究员及博士生打造。聚焦社会学、公共管理、教育学、传播学、文史哲及经管领域，由英美名校人文社科母语主编提供选题咨询、深度润色、Cover Letter 撰写、Target Journal 规范排版及全流程代投代理（录用才付全额），全方位提高 SSCI / A&HCI 录用接受率。',
      disclaimer_box: '【学术伦理与出版责任声明】期刊投稿服务旨在协助学者克服繁琐的语言与行政流程，不替代作者之学术研究责任。博雅文研协助处理期刊格式、投稿信撰写、投稿系统注册与多文件上传等细节；研究数据、学术论证、审稿意见实质答辩及期刊最终录用决策，仍以作者与期刊编辑部为准。严禁代写代发，恪守 COPE 国际出版伦理。',
      cta_primary: '上传论文获取实时报价',
      cta_secondary: '查看社科投稿方案',
      badges: {
        native: '英美社科母语资深主编',
        cert: '国际顶刊认可润色证明',
        formatting: 'APA / Chicago / Harvard 规范',
        confidential: '高规格保密协议 (NDA)'
      },
      priority_title: '快速了解社科投稿通道',
      priority_text: '全新推出全流程投稿代理方案：先收取基础行政定金，待期刊正式发出 Accept 录用通知后再结算全额费用；费用依据目标期刊 JCR 分区阶梯调整。',
      capacity: '本周社科代投名额',
      full: '席位开放中',
      priority_form: {
        title: '预约人文社科专属主编评估',
        email: '高校 / 科研机构专用邮箱',
        phone: '手机号码 / 微信 (+86 / +852)',
        target_journal: '目标期刊或意向分区 (如: SSCI Q1)',
        submit: '提交评估需求'
      }
    },
    calculator: {
      title: '人文社科论文编修与代投费用测算',
      subtitle: '收费透明、字数计费，支持“先付定金、录用后付尾款”全流程代理保障。',
      single_title: '人文社科英文润色测算',
      bulk_title: '国际期刊投稿与代理服务方案',
      labels: {
        words: '文稿预计字数 (Words)',
        subject: '人文社科学科范畴',
        urgency: '交付周期速度',
        service_tier: '润色编修等级',
        submission_package: '投稿协助与代理方案'
      },
      options: {
        general: '社会学、人口学与社会工作 (Sociology & Social Work)',
        biomedical: '公共管理、政治学与国际关系 (Public Admin & Politics)',
        engineering: '教育学、高等教育与传播学 (Education & Communication)',
        tier_standard: '标准学术润色 (语法、标点、修辞与学术措辞规范化)',
        tier_substantive: '深度学术润稿 (质性深描润色、论证逻辑重构、消除中式英文)',
        tier_translation: '学术中翻英 + 社科母语主编双审制',
        normal: '标准速度 (5-7 个工作日)',
        urgent: '加急服务 (3-4 个工作日)',
        super_urgent: '特急项目 (24-48 小时)'
      },
      packages: {
        pkg_conception: '【新服务】论文选题策划与理论框架咨询 (Topic Conception & Theoretical Scoping)',
        pkg_full_agent: '【旗舰保障】全流程投稿代理 (先收定金、录用才收全额 · 依分区阶梯计价)',
        pkg_full: '标准期刊代投套装 (格式排版 + Cover Letter + 系统代投 + 进度跟踪)',
        pkg_formatting: '单项服务：Target Journal 全文格式排版 (APA 7th, Chicago, MLA, Harvard)',
        pkg_response: '审稿意见回复信 (Response to Reviewers) 专业答辩与二审润校'
      },
      result: {
        est_price: '预估服务费用',
        currency: 'RMB / HKD',
        save: '组合方案立减',
        total_value: '服务原价',
        pay_only: '结算特惠价',
        contact_btn: '上传稿件获取正式报价单'
      }
    },
    services: {
      title: '人文与社会科学核心服务',
      catalog: 'Humanities & Social Sciences Suite',
      version: '精准学术用语 • 严谨理论架构 • 提高 SSCI / A&HCI 录用率',
      items: [
        {
          title: '论文选题与理论框架咨询',
          desc: '针对学者研究兴趣与田野材料，由英美名校社科主编提供一对一前沿文献脉络梳理、SSCI 热门选题评估及理论分析框架 (Theoretical Framework) 构建指导，确保选题具有国际对话价值。',
          tag: '前沿策划',
          price: '立即了解'
        },
        {
          title: '全流程投稿代理 (录用才收全额)',
          desc: '提供全流程代投保障：涵盖 Guide for Authors 排版、Cover Letter 撰写、系统代投、外审跟踪及审稿意见答辩。先收取基础行政定金，文稿获期刊正式 Accept 才收取全额尾款，按 JCR 分区阶梯定价。',
          tag: '录用保障',
          price: '立即了解'
        },
        {
          title: '人文社科深度母语润色',
          desc: '由具备文史哲、社会学、政治学、教育学背景之英美母语博士主编进行双阶段审阅。重构段落连贯性 (Cohesion)，消除中式英文 (Chinglish)，强化质性研究叙事张力。',
          tag: '核心王牌',
          price: '立即了解'
        },
        {
          title: '审稿意见回复 (R&R) 答辩润色',
          desc: '收到 Major / Minor Revision 后，针对同行评审意见提供得体、严谨且有力之逐条答辩信 (Point-by-point Response) 语言润色，大幅提升最终 Accept 几率。',
          tag: '返修保驾',
          price: '立即了解'
        }
      ],
      login_view: '查看服务细则'
    },
    team: {
      title: '英美顶尖名校人文社科母语主编',
      subtitle: '博雅文研主编团队成员均获牛津、剑桥、哈佛、哥伦比亚、港大等名校人文社科博士学位，长期担任国际主流 SSCI / A&HCI 期刊审稿人 (Peer Reviewers)。',
      stats: {
        phd: '名校社科博士主编',
        masters: '学科研究方向精准匹配',
        exp: '平均国际顶刊审校经验'
      },
      members: [
        {
          role: '社会学与公共治理领域资深主编',
          edu: 'PhD in Sociology, Oxford University',
          desc: '长期担任 American Sociological Review 及 British Journal of Sociology 审稿人，专精中国城乡流动、基层治理与质性深描方法。',
          tags: ['Sociology', 'Governance', 'Qualitative', 'Oxford']
        },
        {
          role: '教育学与传播研究学术总监',
          edu: 'PhD in Education & Media, Columbia University',
          desc: '专攻高等教育国际化、跨文化传播与新媒体实证研究。擅长量化回归模型论述修饰与结构方程模型 (SEM) 学术表达。',
          tags: ['Education', 'Communication', 'Quantitative', 'Columbia']
        },
        {
          role: '文史哲与文化研究特约主编',
          edu: 'PhD in East Asian Studies, Harvard University',
          desc: '深谙中国近现代史、哲学思想史与跨文化文学批评，精通 Chicago (Notes & Bibliography) 与 MLA 引注规范，擅长典籍英译与理论提炼。',
          tags: ['History', 'Philosophy', 'Chicago Style', 'Harvard']
        }
      ]
    },
    gallery: {
      title: '国际顶刊发表实绩',
      subtitle: 'Successful Acceptance in Top-Tier SSCI & A&HCI Journals'
    },
    testimonials: {
      title: '两岸学者发表见证',
      desc: '博雅文研已协助数千位学者顺利在国际人文社科顶刊发表高水平论文（为恪守学术隐私，以下均采匿名呈现）：'
    },
    about: {
      title: '关于博雅文研学术编修',
      p1: '博雅文研 (Boya Academic Editorial) 立足香港、服务中国大陆与香港广大高校学者、社科院研究员及博士生，专注提供高品质的国际人文社科期刊选题咨询、论文润色、格式排版与全流程投稿代理服务。',
      p2: '人文社科论文高度依赖概念推导的细腻度、文献对话的精准性以及质性叙事的感染力。非母语学者往往因“中文思维行文”、“概念转译生硬”或“投稿系统繁琐”而在初审遭遇 Desk Reject。博雅文研首创“社科学科专家初审 + 母语主编二审”制度，助您跨越语言与文化壁垒。',
      p3: '我们严格遵循国际出版伦理委员会 (COPE) 守则，坚决反对任何代写代发行为，提供先收定金、录用才收全额的诚信合作模式。'
    },
    faq: {
      title: '常见问题 Q&A',
      subtitle: '为人文社科学者解答国际期刊投稿常见疑惑',
      items: [
        {
          q: '人文社科论文与理工科润色有何不同？为什么需要专门的社科主编？',
          a: '人文社科论文（社会学、公管、教育、传播、文史哲）极度强调概念界定的严密性、逻辑推进的层次感以及质性叙事风格，不同于理工科程式化的实验描述。我们的编辑均为人文社科背景的英美母语学者，熟悉本土经验材料如何转化为国际主流学术话语，避免生硬机翻感。'
        },
        {
          q: '全流程投稿代理服务中的“先收定金、录用才收全额”是如何具体运作与保障的？',
          a: '我们提供透明诚信的阶梯成效保障：委托时仅收取基础行政定金（用于前期期刊排版、Cover Letter 撰写与系统代投等繁琐作业）；在稿件获得目标期刊正式录用 (Accept) 前，作者无需支付后续尾款。尾款金额根据期刊在 JCR 中的分区阶梯（Q1 顶刊 / Q2 权威 / Q3-Q4）透明定价。若历经返修最终未能成功发表，您无需支付任何尾款，最大程度降低学者的投稿风险。'
        },
        {
          q: '开具“英文润色证明 (Certificate of Editing)”需要具备什么资质认证？期刊如何查验？',
          a: '国际各大出版社（Elsevier, Springer Nature, Wiley, Taylor & Francis, Sage 等）对润色证明并无单一官方垄断许可执照，其核心审查标准在于：① 编辑团队是否由具备 BELS (Board of Editors in the Life Sciences) 认证、名校学科博士或国际顶刊同行评审员 (Peer Reviewer) 等合资格英美母语专家执笔；② 机构是否严格遵守 COPE 国际出版伦理准则（杜绝代写代发）；③ 证明书是否包含专属防伪验证码 (Verification Code)、作者姓名、文章标题及查验邮箱。博雅文研完全具备上述英美母语博士主编资质与独立查验系统，所出具之润色证明获得国际主流社科期刊 100% 认可。'
        },
        {
          q: '“论文选题策划与理论框架咨询”适合处于哪个阶段的研究者？具体如何进行？',
          a: '非常适合已完成初步调研或握有田野调查、问卷数据，但苦恼于如何将“中国本土经验”转化为“国际主流理论对话框架”的学者与博士生。我们由同领域主编与您梳理近 3-5 年 SSCI 目标期刊的核心争论焦点，指导您提炼概念（Conceptualization）、构建分析架构，从源头避免选题陈旧被秒拒 (Desk Reject)。'
        },
        {
          q: '收到期刊的修改意见 (Major / Minor Revision) 后，是否提供后续支援？',
          a: '提供！针对同行评审意见，我们提供审稿意见回复信 (Response to Reviewers) 的专业论述修饰与学术礼貌把关，并对修改后之正文段落提供特惠二审润校服务。'
        }
      ]
    },
    auth: {
      login_title: '学者账户登录',
      register_title: '注册学者账户',
      role: '请选择您的身份',
      roles: { client: '高校教师 / 研究员 / 博士生', agent: '课题组 / 机构项目窗口', staff: '特约社科主编' },
      name_ph: '学者姓名 / 职称',
      email_ph: '机构邮箱或常用邮箱',
      pass_ph: '设置登录密码',
      info_ph: '所属大学 / 科研院所 / 学院 (如: 清华大学社会科学学院)',
      submit_login: '登录工作台',
      submit_reg: '立即免费注册',
      switch_login: '已有账户？点击登录',
      switch_reg: '新用户？免费注册'
    },
    dashboard: {
      welcome: '欢迎回来,',
      role_label: {
        customer: 'SSCI / A&HCI 稿件进度监控中心',
        agent: '课题组经费项目管理',
        writer: '特约主编审核工作台'
      },
      metrics: {
        active_orders: '在审在编文稿',
        completed_units: '已录用 / 交付',
        membership: '学者会员等级',
        revenue: '课题统计',
        leads: '咨询跟进'
      },
      pricing: {
        title: '学者专属服务项目',
        items: [
          { title: '全流程投稿代理旗舰方案 (先收定金 · 录用才付全额)', tag: '成效保障' },
          { title: '论文选题策划与理论框架构建咨询', tag: '前沿对话' },
          { title: 'SSCI / A&HCI 质性深描母语深度润色', tag: '高录用率' }
        ],
        view_specs: '查看方案详情'
      },
      agent: {
        title: '课题组 / 学院项目合作平台',
        subtitle: '支持中国大陆 985/211 高校、社科院及香港八大院校课题组批量文稿结算。',
        copy_link: '复制课题组项目链接',
        commission_title: '高校机构合作方案',
        commission_desc: '提供院系统一报销、先付定金录用结尾款与全流程投稿代理。',
        tiers: [
          { name: '个别课题组方案', rate: '9折优惠', req: '年稿件 3 篇以上', desc: '指定专属同领域社科主编，优先排单。' },
          { name: '学院 / 研究所签约', rate: '85折优惠', req: '年稿件 10 篇以上', desc: '统一季度汇总核销，提供每期编修质检报告。' },
          { name: '重点实验室 / 智库合约', rate: '8折特惠', req: '长期战略合约', desc: '专属绿色通道，提供专人到校英文学术写作工作坊。' }
        ]
      },
      writer: {
        config_title: '主编学术领域设定',
        tags_label: '擅长领域 (Sociology / PolSci / Education / History)',
        rate_label: '审校报酬基准 (每千字)',
        pool_title: '待审人文社科论文大厅',
        col_subject: '学科领域 / 目标期刊',
        col_type: '编修等级',
        col_payout: '酬劳',
        btn_apply: '领取文稿'
      },
      sample_papers: {
        title: '人文社科润色成果对比范例 (Before & After)',
        subtitle: '严守学者版权隐私，以下为脱敏之真实社科润稿前后对比与 SSCI/A&HCI 顶刊录用范本。',
        access_btn: '查看修订痕迹 (Track Changes)'
      },
      brand_gen: {
        title: '社科投稿信 (Cover Letter) 生成器',
        subtitle: '生成符合 SSCI/A&HCI 目标期刊主编规范之投稿信模板。',
        btn_download: '下载模板'
      },
      tracker: {
        title: '国际社科期刊投稿与编修进度追踪 (Progress Tracker)',
        subtitle: '实时掌握文稿之选题评估、社科专家初审、英美母语二审、APA/Chicago格式排版、Cover Letter 撰写与系统代投状态。',
        filter_all: '全部文稿',
        filter_in_progress: '社科初审 (In Progress)',
        filter_drafting: '母语润色 (Drafting)',
        filter_review: '排版与查重 (Review)',
        filter_completed: '代投完成 / 交付 (Completed)',
        search_placeholder: '搜索文稿编号、目标期刊、论文标题或责任主编...',
        col_order_id: '文稿编号',
        col_title: '论文题目与目标期刊',
        col_status: '当前阶段',
        col_progress: '整体进度',
        col_deadline: '预计交付日',
        col_writer: '责任社科主编',
        btn_details: '审核节点',
        btn_collapse: '收起节点',
        words_label: '论文总字数',
        turnitin_score: 'Turnitin 原创性查重率',
        last_updated: '最新状态更新',
        milestones_heading: 'SSCI / A&HCI 投稿五部曲里程碑',
        stage_names: {
          in_progress: '学科范畴审阅与初审 (In Progress)',
          drafting: '英美社科母语专家深度润稿 (Drafting)',
          review: '引注格式排版与编修证明开具 (Review)',
          completed: '期刊系统代投完成 / 交付 (Completed)'
        },
        actions: {
          contact_writer: '与责任主编研讨',
          download_preview: '下载修订痕迹稿 (Track Changes)',
          request_revision: '反馈作者修改意见'
        },
        no_orders: '目前无符合条件之文稿记录。'
      }
    },
    footer: {
      desc: '博雅文研 • 专注两岸三地学者的人文与社会科学学术编修与期刊代投',
      contact: '联系博雅文研',
      rights: '© 2026 博雅文研学术编修 (Boya Academic Editorial). 版权所有。',
      links: {
        editing: '人文社科英文润色',
        translation: '学术论文中翻英',
        submission: 'SSCI / A&HCI 期刊代投',
        acceptance: '全流程投稿代理与成效保障',
        formatting: 'APA / Chicago / Harvard 排版',
        certificate: '官方英文编修证明资质查验',
        privacy: '学术隐私与保密协议 (NDA)',
        terms: '出版伦理规范 (COPE) & 退款保障'
      }
    }
  },
  en: {
    common: {
      view_details: 'View Details',
      status: 'Status',
      date: 'Date',
      action: 'Action',
      close: 'Close'
    },
    topbar: {
      email: 'Email: editorial@boya-academic.org',
      phone: 'Hotline: +852 55849939',
      hours: 'Mon-Fri 9:00 - 18:00 (Deposit First, Final Fee Upon Acceptance)'
    },
    nav: {
      services: 'Editing',
      submission: 'Journal Submission',
      about: 'About Boya',
      team: 'Editorial Board',
      testimonials: 'Track Record',
      calculator: 'Pricing',
      faq: 'FAQ',
      login: 'Author Portal',
      logout: 'Logout',
      console: 'Manuscript Hub',
      access: 'Portal',
      upload_btn: 'Get Instant Quote'
    },
    hero: {
      est: 'Humanities & Social Sciences Focus • SSCI & A&HCI Journal Editorial',
      title_1: 'Boya Academic Editorial',
      title_2: 'Elevate Your Research to Top Journals',
      subtitle: 'Engineered specifically for university scholars, research fellows, and PhD candidates across Mainland China and Hong Kong. Dedicated to Sociology, Public Governance, Education, Communication, History, Philosophy, and Business. Native doctoral editors deliver topic scoping, substantive editing, APA/Chicago formatting, custom Cover Letters, and full submission agent services (contingent final fee upon acceptance) to maximize SSCI and A&HCI success.',
      disclaimer_box: '[EDITORIAL ETHICS & AUTHOR RESPONSIBILITY NOTICE] Journal submission assistance is designed to relieve researchers of bureaucratic administrative procedures and linguistic barriers; it never replaces the author\'s primary scientific and scholarly responsibility. Boya assists with Guide for Authors compliance, cover letter drafting, ScholarOne / Editorial Manager portal registration, and multi-file uploading. Research data, theoretical claims, reviewer rebuttals, and final editorial decisions strictly remain the author\'s and journal\'s purview. Ghostwriting is strictly prohibited under COPE ethical guidelines.',
      cta_primary: 'Upload Manuscript for Quote',
      cta_secondary: 'View Social Sciences Packages',
      badges: {
        native: 'Native Senior Social Sciences Editors',
        cert: 'Official Certificate of Editing',
        formatting: 'APA / Chicago / Harvard Formatting',
        confidential: 'Strict Non-Disclosure Agreement'
      },
      priority_title: 'Social Sciences Fast-Track',
      priority_text: 'Introducing our Full-Process Submission Agent service: pay a modest administrative deposit upfront, with the remaining final fee due only after official acceptance (Accept) by the target journal, tiered according to JCR journal quartiles.',
      capacity: 'Weekly Editorial Intake',
      full: 'Slots Open',
      priority_form: {
        title: 'Request Field Editor Assessment',
        email: 'Institutional / University Email',
        phone: 'Phone / WhatsApp (+852 / +86)',
        target_journal: 'Target Journal or Desired Tier (e.g., SSCI Q1)',
        submit: 'Submit Evaluation Request'
      }
    },
    calculator: {
      title: 'Humanities & Social Sciences Fee Estimator',
      subtitle: 'Transparent, word-based pricing with Acceptance-Contingent full submission agent options.',
      single_title: 'Social Sciences Editing Calculator',
      bulk_title: 'Journal Submission & Agent Packages',
      labels: {
        words: 'Estimated Word Count',
        subject: 'Humanities & Social Sciences Field',
        urgency: 'Turnaround Time',
        service_tier: 'Editing Tier',
        submission_package: 'Submission & Agent Package'
      },
      options: {
        general: 'Sociology, Demography & Social Work',
        biomedical: 'Public Administration, Political Science & IR',
        engineering: 'Education, Higher Education & Communication Studies',
        tier_standard: 'Standard Academic Editing (Grammar, Punctuation & Style)',
        tier_substantive: 'Substantive Editing (Qualitative Depth, Logical Flow & Academic Tone)',
        tier_translation: 'Academic Translation (ZH-EN) + Native Dual Review',
        normal: 'Standard (5-7 Business Days)',
        urgent: 'Expedited (3-4 Business Days)',
        super_urgent: 'Express (24-48 Hours)'
      },
      packages: {
        pkg_conception: '[NEW] Research Topic Conception & Theoretical Scoping',
        pkg_full_agent: '[FLAGSHIP] Full-Process Submission Agent (Deposit + Acceptance Contingent)',
        pkg_full: 'Standard SSCI/A&HCI Submission Suite (Formatting + Cover Letter + System Upload)',
        pkg_formatting: 'Target Journal Formatting (APA 7th, Chicago, MLA, Harvard)',
        pkg_response: 'Response to Reviewers & Peer-Review Rebuttal Editing'
      },
      result: {
        est_price: 'Estimated Fee',
        currency: 'HKD / RMB',
        save: 'Combo Savings',
        total_value: 'Standard Price',
        pay_only: 'Discounted Total',
        contact_btn: 'Upload Manuscript for Official Invoice'
      }
    },
    services: {
      title: 'Core Humanities & Social Sciences Services',
      catalog: 'Humanities & Social Sciences Suite',
      version: 'Scholarly Precision • Robust Theory • Higher SSCI / A&HCI Acceptance',
      items: [
        {
          title: 'Topic Conception & Theoretical Scoping',
          desc: '1-on-1 consultation with native doctoral editors to align your empirical research or fieldwork with cutting-edge SSCI theoretical debates, refining your analytical framework to avoid conceptual obsolescence.',
          tag: 'Frontier Scoping',
          price: 'Learn More'
        },
        {
          title: 'Full-Process Submission Agent (Acceptance Contingent)',
          desc: 'End-to-end submission management: formatting, custom Cover Letter, portal upload, and reviewer rebuttals. Modest initial deposit with final fee payable only upon formal journal acceptance, tiered by JCR quartile.',
          tag: 'Guaranteed Outcome',
          price: 'Learn More'
        },
        {
          title: 'Substantive Academic English Editing',
          desc: 'Conducted by native English doctoral editors specialized in Sociology, Education, Political Science, and Humanities. Eliminates Chinglish, restructures argumentative cohesion, and enhances qualitative narrative rigor.',
          tag: 'Flagship Service',
          price: 'Learn More'
        },
        {
          title: 'Response to Reviewers (R&R) Rebuttal Polish',
          desc: 'Tailored point-by-point rebuttal letter revision for Major/Minor revisions. Ensures persuasive, academically courteous arguments that address peer reviewers with scholarly precision.',
          tag: 'Revision Guarantee',
          price: 'Learn More'
        }
      ],
      login_view: 'View Service Details'
    },
    team: {
      title: 'Native Senior Social Sciences Doctoral Editors',
      subtitle: 'Our editorial panel comprises native English scholars holding PhDs from Oxford, Cambridge, Harvard, Columbia, and HKU, who frequently serve as peer reviewers for leading SSCI & A&HCI journals.',
      stats: {
        phd: 'Doctoral Editors in Social Sciences',
        masters: 'Disciplinary Specialization Matching',
        exp: 'Avg. International Editorial Experience'
      },
      members: [
        {
          role: 'Senior Editor in Sociology & Governance',
          edu: 'PhD in Sociology, Oxford University',
          desc: 'Reviewer for American Sociological Review and British Journal of Sociology. Expert in Chinese urban-rural transitions, grassroots governance, and thick qualitative description.',
          tags: ['Sociology', 'Governance', 'Qualitative', 'Oxford']
        },
        {
          role: 'Academic Director in Education & Communication',
          edu: 'PhD in Education & Media, Columbia University',
          desc: 'Specializes in internationalization of higher education and cross-cultural communication. Expert in quantitative regression narrative and Structural Equation Modeling (SEM).',
          tags: ['Education', 'Communication', 'Quantitative', 'Columbia']
        },
        {
          role: 'Senior Editor in History, Philosophy & Culture',
          edu: 'PhD in East Asian Studies, Harvard University',
          desc: 'Expert in modern Chinese history and cross-cultural literary criticism. Master of Chicago Notes & Bibliography and MLA style, specializing in conceptual translation.',
          tags: ['History', 'Philosophy', 'Chicago Style', 'Harvard']
        }
      ]
    },
    gallery: {
      title: 'Publication Achievements',
      subtitle: 'Successful Acceptance in Top-Tier SSCI & A&HCI Journals'
    },
    testimonials: {
      title: 'Scholar Testimonials',
      desc: 'Boya has assisted thousands of researchers in publishing in leading international journals (anonymized for scholarly confidentiality):'
    },
    about: {
      title: 'About Boya Academic Editorial',
      p1: 'Boya Academic Editorial is headquartered in Hong Kong and serves researchers, institute fellows, and doctoral candidates across Mainland China and Hong Kong, specializing in high-caliber journal editing, formatting, topic scoping, and full-process submission agent services for the Humanities and Social Sciences.',
      p2: 'Humanities and Social Sciences papers depend profoundly on conceptual nuance, theoretical dialogue, and qualitative narrative power. Non-native scholars often face desk rejections due to direct translation of Chinese cognitive patterns. Boya pioneered the two-stage peer review model (social science field specialist + native senior editor) to bridge scholarly discourses.',
      p3: 'We strictly abide by the Committee on Publication Ethics (COPE), oppose ghostwriting, and provide an initial-deposit with final-fee-upon-acceptance partnership model.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Guidance for Chinese and Hong Kong scholars targeting international social sciences journals',
      items: [
        {
          q: 'How does Humanities & Social Sciences editing differ from STEM editing?',
          a: 'Humanities and Social Sciences papers require intense conceptual precision, nuanced argumentation, and qualitative narrative power, unlike formulaic STEM lab reports. Our editors are native English social scientists who understand how to translate indigenous Chinese empirical insights into international theoretical frameworks.'
        },
        {
          q: 'How does the "Deposit first, final fee upon acceptance" submission agent service work?',
          a: 'We offer an outcome-contingent milestone model: authors pay a modest administrative deposit upon commissioning (covering initial formatting, Cover Letter drafting, and submission portal upload). The remaining final fee is due only after your manuscript receives a formal Acceptance letter from the target journal. Fees are tiered according to JCR journal quartiles (Q1 Top / Q2 / Q3-Q4). If the paper is not accepted after all revision rounds, you owe no final fee, minimizing publication risk.'
        },
        {
          q: 'What credentials are required to issue an official "Certificate of Editing"? How do journals verify it?',
          a: 'Major international publishers (Elsevier, Springer Nature, Wiley, Taylor & Francis, Sage) do not have a single monopolistic government accreditation; rather, editorial certificates are accepted based on: ① Editor Qualifications: whether the editors are qualified native scholars with BELS certification, doctoral degrees, or peer-reviewer credentials; ② COPE Compliance: adherence to strict non-ghostwriting ethics; ③ Verifiability: certificates must include a unique Verification Code, corresponding author, paper title, and online audit contact. Boya meets all these stringent standards, and our Certificates of Editing are 100% accepted by major international journals.'
        },
        {
          q: 'Who should use the "Research Topic Conception & Theoretical Scoping" service?',
          a: 'This service is designed for researchers and doctoral scholars who have raw empirical findings, survey data, or fieldwork materials, but struggle to formulate a compelling theoretical framework that resonates with Western SSCI journal discourse. Our doctoral editors guide you in conceptualization and literature positioning, preventing avoidable desk rejections.'
        },
        {
          q: 'Do you provide support when Reviewer Revisions (Major/Minor) are received?',
          a: 'Yes. We offer professional polishing for your Response to Reviewers letter to ensure respectful, persuasive point-by-point rebuttals, along with discounted re-editing for revised manuscript sections.'
        }
      ]
    },
    auth: {
      login_title: 'Author Login',
      register_title: 'Create Author Account',
      role: 'Select Role',
      roles: { client: 'Faculty / Researcher / PhD Candidate', agent: 'Research Lab / Institute Rep', staff: 'Field Editor' },
      name_ph: 'Author Name / Title',
      email_ph: 'University / Institutional Email',
      pass_ph: 'Password',
      info_ph: 'University / Faculty / Institute (e.g., HKU Faculty of Social Sciences)',
      submit_login: 'Login to Portal',
      submit_reg: 'Register Now',
      switch_login: 'Have an account? Login',
      switch_reg: 'New author? Register free'
    },
    dashboard: {
      welcome: 'Welcome,',
      role_label: {
        customer: 'SSCI / A&HCI Manuscript Hub',
        agent: 'Research Project Console',
        writer: 'Editor Workspace'
      },
      metrics: {
        active_orders: 'Active Manuscripts',
        completed_units: 'Published / Delivered',
        membership: 'Author Tier',
        revenue: 'Project Stats',
        leads: 'Inquiries'
      },
      pricing: {
        title: 'Exclusive Author Packages',
        items: [
          { title: 'Full-Process Submission Agent (Deposit + Final Fee upon Acceptance)', tag: 'OUTCOME GUARANTEED' },
          { title: 'Research Topic Conception & Theoretical Scoping', tag: 'FRONTIER SCOPING' },
          { title: 'Social Sciences Qualitative Substantive Polish', tag: 'HIGH ACCEPTANCE' }
        ],
        view_specs: 'View Package Details'
      },
      agent: {
        title: 'Institute & Research Group Platform',
        subtitle: 'Bulk submission management for 985/211 universities, CASS institutes, and Hong Kong universities.',
        copy_link: 'Copy Research Group Link',
        commission_title: 'Institutional Partnership Plans',
        commission_desc: 'Streamlined university grant invoicing, deposit-contingency billing, and institutional agreements.',
        tiers: [
          { name: 'Research Group Tier', rate: '10% Off', req: '3+ papers/year', desc: 'Dedicated social sciences editor with priority turnaround.' },
          { name: 'Faculty / Department Tier', rate: '15% Off', req: '10+ papers/year', desc: 'Quarterly consolidated invoicing with quality reporting.' },
          { name: 'University-Wide Agreement', rate: '20% Off', req: 'Institutional Contract', desc: 'Dedicated portal with on-campus academic writing seminars.' }
        ]
      },
      writer: {
        config_title: 'Editor Field Configuration',
        tags_label: 'Fields (Sociology / PolSci / Education / History)',
        rate_label: 'Compensation Baseline (per 1k words)',
        pool_title: 'Social Sciences Queue',
        col_subject: 'Discipline / Target Journal',
        col_type: 'Editing Tier',
        col_payout: 'Compensation',
        btn_apply: 'Accept Manuscript'
      },
      sample_papers: {
        title: 'Social Sciences Editing Comparisons (Before & After)',
        subtitle: 'Anonymized excerpts demonstrating substantial revision from raw Chinese cognitive drafts to publication-ready SSCI/A&HCI scholarly prose.',
        access_btn: 'View Track Changes'
      },
      brand_gen: {
        title: 'Social Sciences Cover Letter Generator',
        subtitle: 'Generate formatted Cover Letter drafts tailored to your Target Journal.',
        btn_download: 'Download Template'
      },
      tracker: {
        title: 'Social Sciences Journal Submission & Editing Tracker',
        subtitle: 'Monitor real-time progress across topic scoping, social sciences review, native substantive editing, APA/Chicago formatting, cover letter drafting, and portal upload.',
        filter_all: 'All Manuscripts',
        filter_in_progress: 'Field Review (In Progress)',
        filter_drafting: 'Native Editing (Drafting)',
        filter_review: 'Formatting & Turnitin (Review)',
        filter_completed: 'Submitted / Delivered (Completed)',
        search_placeholder: 'Search by manuscript ID, journal, title, or field editor...',
        col_order_id: 'Manuscript ID',
        col_title: 'Title & Target Journal',
        col_status: 'Current Stage',
        col_progress: 'Progress',
        col_deadline: 'Est. Delivery',
        col_writer: 'Lead Social Sciences Editor',
        btn_details: 'Milestones',
        btn_collapse: 'Hide Details',
        words_label: 'Word Count',
        turnitin_score: 'Turnitin Similarity Audit',
        last_updated: 'Last Updated',
        milestones_heading: 'SSCI / A&HCI Five-Step Submission Pipeline',
        stage_names: {
          in_progress: 'Disciplinary Analysis & Initial Polish (In Progress)',
          drafting: 'Native Substantive Editing & Cover Letter (Drafting)',
          review: 'Target Journal Formatting & Certificate (Review)',
          completed: 'Journal Portal Upload & Tracking (Completed)'
        },
        actions: {
          contact_writer: 'Consult Field Editor',
          download_preview: 'Download Track Changes Draft',
          request_revision: 'Submit Author Revisions'
        },
        no_orders: 'No manuscripts match the criteria.'
      }
    },
    footer: {
      desc: 'Boya Academic Editorial • Dedicated Humanities & Social Sciences Publishing Support for Greater China Scholars',
      contact: 'Contact Boya',
      rights: '© 2026 Boya Academic Editorial. All rights reserved.',
      links: {
        editing: 'Humanities & Social Sciences Editing',
        translation: 'Academic Translation (ZH-EN)',
        submission: 'SSCI & A&HCI Submission Assistance',
        acceptance: 'Full Submission Agent & Outcome Assurance',
        formatting: 'APA / Chicago / Harvard Formatting',
        certificate: 'Editing Certificate Verification',
        privacy: 'Confidentiality & NDA',
        terms: 'COPE Ethics & Contingency Guarantee'
      }
    }
  }
};
