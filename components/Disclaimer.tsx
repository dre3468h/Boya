import React from 'react';
import { ShieldAlert, Info, AlertTriangle, FileCheck, Lock, Award } from 'lucide-react';
import { Language } from '../translations';

interface DisclaimerProps {
  language: Language;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ language }) => {
  const content = {
    zh: {
      title: '學術出版倫理與課題經費報銷規範',
      subtitle: 'COMMITTEE ON PUBLICATION ETHICS (COPE) & RESEARCH GRANT INVOICING',
      notice_box: {
        headline: '【學術誠信與出版責任聲明】',
        text: '期刊投稿服務旨在協助學者克服繁雜的語言與行政流程，不替代作者之學術研究責任。博雅文研協助處理期刊格式 (APA 7th, Chicago, MLA, Harvard 等)、投稿信 (Cover Letter) 撰寫、期刊線上投稿系統 (ScholarOne, Editorial Manager 等) 註冊與文件上傳等行政與語言相關細節；論文研究數據、學術發現、作者資訊、審稿意見實質答辯及期刊最終錄用決策，仍以作者與期刊編輯部為準。嚴禁代寫，恪守 COPE 國際出版倫理。'
      },
      sections: [
        {
          title: '學術誠信與反代寫守則',
          icon: <ShieldAlert size={24} />,
          text: '博雅文研學術編修嚴格恪守國際出版倫理委員會 (COPE) 規範。我們專注於人文社科學術英文用語潤飾、質性敘事修辭、論證邏輯梳理及投稿行政協助，絕不提供代寫、數據捏造 (Fabrication) 或竄改 (Falsification) 等任何危害學術誠信之違法行為。作者需對自身研究之原創性與學術真實性負完全法律與學術責任。'
        },
        {
          title: '課題經費報銷與發票開立說明',
          icon: <FileCheck size={24} />,
          text: '博雅文研完全支援中國大陸高校（985/211、雙一流院校）、社科院各研究所及香港各大學 (HKU, CUHK, HKUST 等) 科研課題經費報銷。可開立增值稅普通發票或專用發票（開票類目可開「學術編修費」、「論文翻譯費」、「諮詢服務費」等），支援公對公轉賬、公務卡及香港大學採購卡 (P-Card) 支付。'
        },
        {
          title: '智慧財產權與著作權歸屬',
          icon: <Award size={24} />,
          text: '文稿之所有智慧財產權、專利權及著作權均百分之百歸作者全權所有。博雅文研編輯團隊對客戶文稿僅進行語言編修與格式優化，不主張任何論文作者署名權 (Authorship) 或版權份額。'
        },
        {
          title: '保密協定 (NDA) 與資料安全',
          icon: <Lock size={24} />,
          text: '我們深知科研成果之機密性。博雅文研全體在職員工與英美名校同行評審主編均已簽署具有法律效力之嚴格保密合約 (NDA)。所有文稿傳輸與儲存均採用企業級 SSL 256-bit 加密防護，保證絕不將未發表的調研數據、訪談逐字稿或理論構想外洩予第三方。'
        },
        {
          title: '服務範圍與責任限制',
          icon: <AlertTriangle size={24} />,
          text: 'SSCI / A&HCI 期刊是否接受發表取決於該期刊編輯部及獨立同行評審員 (Peer Reviewers) 對研究創新性、方法論及學術價值的客觀評判。博雅文研所提供之編修與投稿協助旨在消除語言與排版瑕疵、提高審查效率與期刊錄用率，但在法律上不作期刊 100% 保證刊登之承諾。'
        }
      ]
    },
    cn: {
      title: '学术出版伦理与课题经费报销规范',
      subtitle: 'COMMITTEE ON PUBLICATION ETHICS (COPE) & RESEARCH GRANT INVOICING',
      notice_box: {
        headline: '【学术诚信与出版责任声明】',
        text: '期刊投稿服务旨在协助学者克服繁琐的语言与行政流程，不替代作者之学术研究责任。博雅文研协助处理期刊格式 (APA 7th, Chicago, MLA, Harvard 等)、投稿信 (Cover Letter) 撰写、期刊线上投稿系统 (ScholarOne, Editorial Manager 等) 注册与文件上传等行政与语言相关细节；论文研究数据、学术发现、作者信息、审稿意见实质答辩及期刊最终录用决策，仍以作者与期刊编辑部为准。严禁代写代发，恪守 COPE 国际出版伦理。'
      },
      sections: [
        {
          title: '学术诚信与反代写守则',
          icon: <ShieldAlert size={24} />,
          text: '博雅文研学术编修严格恪守国际出版伦理委员会 (COPE) 规范。我们专注于人文社科学术英文用语润饰、质性叙事修辞、论证逻辑梳理及投稿行政协助，绝不提供代写代发、数据捏造 (Fabrication) 或篡改 (Falsification) 等任何危害学术诚信之行为。作者需对自身研究之原创性与学术真实性负完全法律与学术责任。'
        },
        {
          title: '课题经费报销与发票开具说明',
          icon: <FileCheck size={24} />,
          text: '博雅文研完全支持中国大陆高校（985/211、双一流院校）、社科院各研究所及香港各大学科研课题经费报销。可开具增值税普通发票或专用发票（开票类目可开“学术编修费”、“论文翻译费”、“学术咨询费”等），支持公对公转账、公务卡及香港大学采购卡 (P-Card) 支付。'
        },
        {
          title: '知识产权与著作权归属',
          icon: <Award size={24} />,
          text: '文稿之所有知识产权及著作权均百分之百归作者全权所有。博雅文研编辑团队对客户文稿仅进行语言润色与格式优化，不主张任何论文作者署名权 (Authorship) 或版权份额。'
        },
        {
          title: '保密协议 (NDA) 与数据安全',
          icon: <Lock size={24} />,
          text: '我们深知科研成果之机密性。博雅文研全体在职员工与英美名校同行评审主编均已签署具有法律效力之严格保密协议 (NDA)。所有文稿传输与存储均采用企业级 SSL 256-bit 加密防护，保证绝不将未发表的调研数据、田野访谈逐字稿或理论构想外泄予第三方。'
        },
        {
          title: '服务范围与责任限制',
          icon: <AlertTriangle size={24} />,
          text: 'SSCI / A&HCI 期刊是否接受发表取决于该期刊编辑部及独立同行评审员 (Peer Reviewers) 对研究创新性、方法论及学术价值的客观评判。博雅文研所提供之编修与投稿协助旨在消除语言与排版瑕疵、提高审查效率与期刊录用率，但在法律上不作期刊 100% 保证刊发之承诺。'
        }
      ]
    },
    en: {
      title: 'Publication Ethics & University Grant Invoicing Policies',
      subtitle: 'COMMITTEE ON PUBLICATION ETHICS (COPE) & RESEARCH GRANT INVOICING',
      notice_box: {
        headline: '[EDITORIAL ETHICS & AUTHOR RESPONSIBILITY NOTICE]',
        text: 'Journal submission assistance is designed to relieve researchers of bureaucratic administrative procedures and linguistic barriers; it never replaces the author\'s primary scientific and scholarly responsibility. Boya assists with Guide for Authors compliance, cover letter drafting, ScholarOne / Editorial Manager portal registration, and multi-file uploading. Research data, theoretical claims, reviewer rebuttals, and final editorial decisions strictly remain the author\'s and journal\'s purview. Ghostwriting is strictly prohibited under COPE ethical guidelines.'
      },
      sections: [
        {
          title: 'Academic Integrity & Non-Ghostwriting Commitment',
          icon: <ShieldAlert size={24} />,
          text: 'Boya Academic Editorial strictly abides by the Committee on Publication Ethics (COPE). We specialize in academic English editing, citation formatting (APA, Chicago, Harvard), and submission logistics. We strictly oppose ghostwriting, paper mills, data fabrication, or academic misconduct. Authors remain solely responsible for the scholarly originality of their manuscripts.'
        },
        {
          title: 'University Research Grant Invoicing & VAT Compliance',
          icon: <FileCheck size={24} />,
          text: 'We provide full invoicing support for Chinese university grants (NSSFC, Ministry of Education) and Hong Kong RGC (GRF/ECS) funds. We issue official VAT invoices (fapiao) under categories such as "Academic Editing" and "Academic Translation", supporting corporate bank wire transfers, university Purchasing Cards (P-Cards), and institutional billing agreements.'
        },
        {
          title: 'Intellectual Property & Complete Author Ownership',
          icon: <Award size={24} />,
          text: 'All intellectual property, copyrights, and theoretical contributions belong 100% exclusively to the author. Our editors refine language, syntax, and formatting without claiming any authorship rights or copyright shares over your intellectual work.'
        },
        {
          title: 'Strict Confidentiality & Non-Disclosure Agreements (NDA)',
          icon: <Lock size={24} />,
          text: 'We understand the proprietary nature of social sciences fieldwork and theoretical manuscripts. All Boya employees and native doctoral editors are legally bound by strict Non-Disclosure Agreements. Transmitted files are protected by enterprise 256-bit SSL encryption.'
        },
        {
          title: 'Limitation of Liability & Publication Decisions',
          icon: <AlertTriangle size={24} />,
          text: 'Publication decisions depend exclusively on the independent judgment of the journal\'s editorial board and peer reviewers regarding scientific novelty and methodology. While our editing eliminates avoidable desk rejections and maximizes acceptance rates, we do not make legal guarantees of publication.'
        }
      ]
    }
  };

  const t = content[language] || content.zh;

  return (
    <div className="min-h-screen bg-paper py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-surface border border-ink shadow-[8px_8px_0px_0px_var(--color-ink)] p-8 md:p-14 animate-fade-in">
        <div className="border-b border-ink pb-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3 bg-stone-100 border border-ink px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest text-ink">
            <Info size={14} className="text-accent" />
            <span>COPE Academic Ethics & Grant Invoicing</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-ink mb-3 font-display">{t.title}</h1>
          <p className="text-ink-light font-mono text-xs uppercase tracking-widest">{t.subtitle}</p>
        </div>

        {/* Featured Callout Box */}
        <div className="mb-10 p-6 md:p-8 bg-red-50/70 border-l-4 border-[#b91c1c] text-ink">
          <h2 className="text-base md:text-lg font-bold text-[#b91c1c] mb-2 tracking-tight">
            {t.notice_box.headline}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-stone-800 font-medium">
            {t.notice_box.text}
          </p>
        </div>

        <div className="space-y-10">
          {t.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 border border-ink/15 bg-paper/50">
              <div className="flex-shrink-0 text-accent mt-1">
                {section.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-ink uppercase mb-2 tracking-tight">{section.title}</h3>
                <p className="text-ink-light leading-relaxed text-sm md:text-base text-justify">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-ink flex flex-col sm:flex-row justify-between items-center text-xs text-ink-light font-mono gap-4">
          <p>Boya Academic Editorial • Ethics & Invoicing Division</p>
          <p>Hotline: +852 55849939 | editorial@boya-academic.org</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
