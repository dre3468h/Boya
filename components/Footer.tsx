import React from 'react';
import { Mail, ArrowUpRight, Phone, Clock, ShieldCheck, FileCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
    language?: Language;
    onLinkClick: (title: string, content: string) => void;
    onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ language = 'zh', onLinkClick }) => {
  const t = translations[language].footer;
  const links = t.links;

  const getContent = (key: string) => {
    if (key === links.privacy) {
      if (language === 'cn') {
        return `**学术隐私与保密协议政策 (NDA & Confidentiality)**\n\n1. **严格保密承诺**：博雅文研全体在职员工与外籍同行评审主编均签署具有法律约束力的保密协议 (NDA)。\n\n2. **传输加密**：本平台采用企业级 SSL 256-bit 加密技术，确保您的未公开科研论点、田野调查数据与量化实证模型绝无外泄风险。\n\n3. **非公开原则**：未经作者书面授权，任何文稿草稿绝不会被用于范例展示、商业宣传或透露予第三方机构。\n\n4. **数据销毁政策**：文稿交付并完成确认后 60 天内，系统可应作者要求彻底清除备份文档，保障您的学术著作权。`;
      }
      return language === 'zh' 
        ? `**學術隱私與保密協定政策 (NDA & Confidentiality)**\n\n1. **嚴格保密承諾**：博雅文研全體在職員工與外籍同行評審主編均簽署具有法律效力之保密合約 (NDA)。\n\n2. **傳輸加密**：本平台採用企業級 SSL 256-bit 加密技術，確保您的未公開科研論點、田野調查數據與量化實證模型絕無外洩風險。\n\n3. **非公開原則**：未經作者書面授權，任何文稿草案絕不會被用於示範、商業宣傳或透露予第三方機構。\n\n4. **資料銷毀政策**：文稿交付並完成確認後 60 天內，系統可應作者要求徹底清除備份文檔，保障您的學術著作權。`
        : `**Confidentiality & Non-Disclosure Policy (NDA)**\n\n1. **Strict Confidentiality**: All Boya internal staff and native editors sign legally binding Non-Disclosure Agreements (NDAs).\n\n2. **Transmission Security**: We employ enterprise 256-bit SSL encryption to ensure that field interview data, econometric models, and theoretical drafts remain secure.\n\n3. **Non-Disclosure**: Unpublished manuscripts will never be disclosed to third parties or used for promotional purposes without written consent.\n\n4. **Data Retention**: Files are permanently purged from secure servers upon author request post-delivery to protect intellectual property.`;
    }
    
    if (key === links.terms) {
      if (language === 'cn') {
        return `**服务条款与出版伦理规范 (COPE Guidelines & Terms)**\n\n1. **服务本质**：博雅文研提供人文社科学术语言润色、引注规范排版、投稿信撰写与投稿行政协助。严守国际出版伦理委员会 (COPE) 准则，绝不提供代写代发、数据捏造或学术造假。\n\n2. **责任界定**：投稿服务旨在协助学者克服繁琐的行政流程与语言障碍。论文思想创新、论证严谨性与期刊最终录用决策，以作者与期刊编辑部为准。\n\n3. **正规结算与收据**：提供正规咨询与技术服务合同及明细收据（可载明：学术语言润色、投稿技术咨询），支持多币种结算、企业银行电汇、信用卡及主流移动支付。\n\n4. **二审修润政策**：若期刊同行评审提出语言修改意见，可附带 Reviewer 批注与修订单，享受优惠返修或免费复核。`;
      }
      return language === 'zh'
        ? `**服務條款與出版倫理規範 (COPE Guidelines & Terms)**\n\n1. **服務本質**：博雅文研提供人文社科學術語言潤稿、引註規範排版、投稿信撰寫與投稿行政協助。嚴守國際出版倫理委員會 (COPE) 準則，絕不提供代寫代發、數據捏造或學術造假。\n\n2. **責任界定**：投稿服務旨在協助學者克服繁雜的行政流程與語言障礙。論文思想創新、論證嚴謹性與期刊最終錄用決策，以作者與期刊編輯部為準。\n\n3. **正規結算與收據**：提供正規諮詢與技術服務合約及明細收據（可載明：學術語言編修、投稿技術諮詢），支持多幣種結算、企業銀行電匯、信用卡及主流行動支付。\n\n4. **二審修潤政策**：若期刊同行評審提出語言修改意見，可附帶 Reviewer 批註與修訂單，享受優惠返修或免費複核。`
        : `**Terms of Service & Publication Ethics (COPE)**\n\n1. **Scope of Service**: Boya provides scholarly language editing, citation formatting (APA, Chicago, Harvard), cover letter drafting, and submission logistics. Strictly compliant with COPE standards; no ghostwriting or fraudulent practices.\n\n2. **Limitation of Liability**: Submission support assists with administrative execution and formatting. Scientific integrity and acceptance decisions remain with the author and journal.\n\n3. **Payment & Billing Receipts**: Official service agreements and detailed transaction receipts provided. Supports multi-currency settlement, corporate bank wire transfers, credit cards, and major online payment gateways.\n\n4. **Revision Policy**: Discounted or complimentary re-editing support for Reviewer revisions on previously edited sections.`;
    }

    if (key === links.certificate) {
      if (language === 'cn') {
        return `**官方学术英文润色证明 (Certificate of Editing)**\n\n博雅文研为每一篇完成母语润稿之人文社科论文出具带有唯一查验编码的官方《学术英文润色证明》。\n\n• 载明论文标题、第一作者及通讯作者所属高校\n• 证实文稿已由英美名校人文社科母语主编完成双阶段学术审阅\n• 获得 Routledge, Taylor & Francis, Springer Nature, Wiley, Sage, Elsevier 等国际人文社科主流出版社全面认可。\n\n查验真伪请联系: editorial@boya-academic.org`;
      }
      return language === 'zh'
        ? `**官方學術英文編修證明 (Certificate of Editing)**\n\n博雅文研為每一篇完成母語潤稿之人文社科論文出具帶有唯一查驗編碼的官方《學術英文編修證明》。\n\n• 載明論文標題、第一作者及通訊作者所屬高校\n• 證實文稿已由英美名校人文社科母語主編完成雙階段學術審閱\n• 獲得 Routledge, Taylor & Francis, Springer Nature, Wiley, Sage, Elsevier 等國際人文社科主流出版社全面認可。\n\n查驗真偽請聯絡: editorial@boya-academic.org`
        : `**Official Certificate of Editing**\n\nEvery manuscript proofread by Boya receives an official Certificate of Editing with a unique verification code.\n\n• Specifies manuscript title, corresponding author, and institutional affiliation\n• Confirms two-stage proofreading by native social sciences doctoral editors\n• Accepted by premier social sciences and humanities publishers worldwide.\n\nVerification inquiries: editorial@boya-academic.org`;
    }

    if (language === 'cn') {
      return `关于 ${key} 的详细信息：\n\n博雅文研提供专业人文与社会科学国际顶刊英文润色、引注规范排版与投稿行政代办服务。请联系学术项目专员获取详细说明。\n\nEmail: editorial@boya-academic.org\n电话 / 微信 / WhatsApp: +852 55849939\n服务时间: 周一至周五 9:00 - 18:00 (支持对公转账与发票开具)`;
    }
    if (language === 'zh') {
      return `關於 ${key} 的詳細資訊：\n\n博雅文研提供專業人文與社會科學國際頂刊英文潤稿、引註規範排版與投稿行政代辦服務。請聯繫學術專案專員獲取詳細說明。\n\nEmail: editorial@boya-academic.org\n電話 / WhatsApp: +852 55849939\n服務時間: 週一至週五 9:00 - 18:00 (支持大學經費報銷與發票開立)`;
    }
    return `Detailed information regarding ${key}:\n\nBoya Academic Editorial specializes in Humanities & Social Sciences manuscript editing and submission assistance. Contact our editorial relations team:\n\nEmail: editorial@boya-academic.org\nTel / WhatsApp: +852 55849939\nHours: Mon-Fri 9:00 - 18:00`;
  };

  const brandDisplayName = language === 'cn'
    ? '博雅文研学术编修'
    : language === 'zh'
    ? '博雅文研學術編修'
    : 'BOYA ACADEMIC EDITORIAL';

  return (
    <footer className="bg-surface text-ink pt-20 pb-10 border-t border-ink">
      <div className="max-w-[1920px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-ink text-paper flex items-center justify-center font-serif font-black text-xl border border-ink">
                B
              </div>
              <h3 className="text-xl font-black tracking-tight text-ink uppercase font-display">
                {brandDisplayName}
              </h3>
            </div>
            <p className="text-xs text-ink-light mb-6 leading-relaxed max-w-xs font-normal">
              {t.desc}<br/>
              專為中國大陸與香港高校學者、社科院研究員及博士生打造的國際期刊專業潤修與代投機構。
            </p>
            <div className="space-y-2 text-xs font-mono text-ink-light mb-6">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-accent" />
                <a href="mailto:editorial@boya-academic.org" className="hover:text-ink">editorial@boya-academic.org</a>
              </div>
              <div className="flex items-center gap-2 font-bold text-ink">
                <Phone size={13} className="text-[#b91c1c]" />
                <a href="tel:+85255849939" className="hover:text-[#b91c1c]">+852 55849939 (WhatsApp / 專線)</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-accent" />
                <span>週一至週五 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-ink-light border-b border-ink-light/20 pb-2 inline-block">
              {language === 'en' ? 'Core Services' : '核心學術服務'}
            </h4>
            <ul className="space-y-3 text-xs font-bold text-ink">
              <li>
                <button onClick={() => onLinkClick(links.editing, getContent(links.editing))} className="hover:text-accent transition-colors flex items-center group text-left">
                  {links.editing} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(links.submission, getContent(links.submission))} className="hover:text-accent transition-colors flex items-center group text-left">
                  {links.submission} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(links.translation, getContent(links.translation))} className="hover:text-accent transition-colors flex items-center group text-left">
                  {links.translation} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(links.acceptance, getContent(links.acceptance))} className="hover:text-accent transition-colors flex items-center group text-left">
                  {links.acceptance} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Guidelines */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-ink-light border-b border-ink-light/20 pb-2 inline-block">
              {language === 'en' ? 'Standards & Verification' : '規範與驗證'}
            </h4>
            <ul className="space-y-3 text-xs font-bold text-ink">
              <li>
                <button onClick={() => onLinkClick(links.formatting, getContent(links.formatting))} className="hover:text-accent transition-colors text-left">
                  {links.formatting}
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(links.certificate, getContent(links.certificate))} className="hover:text-accent transition-colors text-left flex items-center gap-1">
                  <FileCheck size={12} className="text-emerald-700" />
                  <span>{links.certificate}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(links.privacy, getContent(links.privacy))} className="hover:text-accent transition-colors text-left flex items-center gap-1">
                  <ShieldCheck size={12} className="text-accent" />
                  <span>{links.privacy}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(links.terms, getContent(links.terms))} className="hover:text-accent transition-colors text-left">
                  {links.terms}
                </button>
              </li>
            </ul>
          </div>

          {/* Payment & Settlement Guarantee */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-ink-light border-b border-ink-light/20 pb-2 inline-block">
              {language === 'en' ? 'Payment & Settlement Guarantee' : (language === 'cn' ? '支付结算与成效保障' : '支付結算與成效保障')}
            </h4>
            <p className="text-xs text-ink-light leading-relaxed mb-4">
              {language === 'en'
                ? 'Providing official service agreements and receipts. Full submission agent features upfront administrative deposit + final payment only upon official acceptance.'
                : (language === 'cn'
                  ? '提供正规学术咨询与技术服务合同及明细收据，支持公对公电汇、国际信用卡、微信/支付宝多币种结算，严格落实“先付定金、录用才收全额”成效保障机制。'
                  : '提供正規學術諮詢與技術服務合約及明細收據，支持公對公電匯、國際信用卡、微信/支付寶多幣種結算，嚴格落實「先付訂金、錄用才收全額」成效保障機制。')}
            </p>
            <a 
              href="mailto:editorial@boya-academic.org?subject=Service%20Contract%20and%20Receipt%20Inquiry"
              className="inline-block px-4 py-2 border border-ink text-[11px] font-bold uppercase tracking-wider bg-paper hover:bg-ink hover:text-paper transition-all"
            >
              {language === 'en' ? 'Inquire Service Agreement' : (language === 'cn' ? '咨询服务合同与收据' : '諮詢服務合約與收據')}
            </a>
          </div>
        </div>

        {/* Highlighted Disclaimer Banner */}
        <div className="p-4 bg-paper border border-ink mb-12 text-xs leading-relaxed text-stone-700">
          <strong className="text-ink">【學術誠信與出版責任聲明】</strong>
          期刊投稿服務旨在協助學者克服繁雜的語言與行政流程，不替代作者之學術研究責任。博雅文研協助處理期刊格式、投稿信撰寫、投稿系統註冊與多文件上傳等細節；研究資料、學術論證、審稿意見實質答辯及期刊最終錄用決策，仍以作者與期刊編輯部為準。嚴禁代寫，恪守 COPE 國際出版倫理。
        </div>
        
        <div className="border-t border-ink-light/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-wider text-ink-light font-mono">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <button onClick={() => onLinkClick(links.privacy, getContent(links.privacy))} className="hover:text-ink">
              {links.privacy}
            </button>
            <button onClick={() => onLinkClick(links.terms, getContent(links.terms))} className="hover:text-ink">
              {links.terms}
            </button>
            <button 
              onClick={() => onLinkClick(language === 'en' ? 'COPE Ethics & Grant Invoicing' : '出版倫理守則 (COPE) & 報銷指引', getContent(links.terms))} 
              className="hover:text-ink font-bold text-[#b91c1c]"
            >
              {language === 'en' ? 'COPE Ethics Statement' : '出版倫理守則 (COPE)'}
            </button>
          </div>
          <span className="italic">Boya Academic Editorial • Dedicated to Global Dissemination of Chinese Humanities & Social Sciences</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
