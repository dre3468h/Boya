import React, { useState, useEffect } from 'react';
import { Calculator, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface QuoteCalculatorProps {
  language: Language;
}

const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ language }) => {
  const t = translations[language].calculator;

  // Editing Calculator State
  const [words, setWords] = useState(6000);
  const [subject, setSubject] = useState('general');
  const [tier, setTier] = useState('tier_substantive');
  const [urgency, setUrgency] = useState('normal');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Journal Submission Package State
  const [selectedPackage, setSelectedPackage] = useState('pkg_full');
  const [includeEditingCombo, setIncludeEditingCombo] = useState(true);
  const [packageOriginalPrice, setPackageOriginalPrice] = useState(0);
  const [packageDiscount, setPackageDiscount] = useState(0);
  const [packageFinalPrice, setPackageFinalPrice] = useState(0);

  // Rates in HKD (1 HKD ≈ 0.92 RMB)
  // Standard Editing: ~HK$ 0.55 - 0.65 / word (約 ¥0.50 - 0.60)
  // Substantive Editing: ~HK$ 0.75 - 0.85 / word (約 ¥0.70 - 0.78)
  // Translation + Dual Review: ~HK$ 1.10 - 1.30 / word
  useEffect(() => {
    let baseWordRate = 0.75;
    if (tier === 'tier_standard') baseWordRate = 0.55;
    if (tier === 'tier_substantive') baseWordRate = 0.75;
    if (tier === 'tier_translation') baseWordRate = 1.15;

    // Disciplinary depth factor
    if (subject === 'general') baseWordRate *= 1.05; // Sociology qualitative depth
    if (subject === 'biomedical') baseWordRate *= 1.1; // Governance / IR political terminology

    // Urgency surcharge
    if (urgency === 'urgent') baseWordRate *= 1.3;
    if (urgency === 'super_urgent') baseWordRate *= 1.6;

    const price = Math.round(words * baseWordRate);
    setEstimatedPrice(price);

    // Submission Package Rates in HKD
    let pkgBase = 4800;
    if (selectedPackage === 'pkg_full_agent') pkgBase = 4500; // Administrative deposit
    if (selectedPackage === 'pkg_conception') pkgBase = 3200; // Topic Scoping
    if (selectedPackage === 'pkg_full') pkgBase = 4800;
    if (selectedPackage === 'pkg_formatting') pkgBase = 1800;
    if (selectedPackage === 'pkg_response') pkgBase = 2800;

    const discountRate = includeEditingCombo ? 0.15 : 0;
    const discount = Math.round(pkgBase * discountRate);

    setPackageOriginalPrice(pkgBase);
    setPackageDiscount(discount);
    setPackageFinalPrice(pkgBase - discount);
  }, [words, subject, tier, urgency, selectedPackage, includeEditingCombo]);

  const currencySymbol = language === 'cn' ? 'RMB / HK$' : 'HK$ / RMB';

  return (
    <div id="calculator" className="bg-paper py-32 md:py-40 px-6 md:px-12 border-t border-ink">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center reveal active">
          <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-4 block">05 / PRICING & INVOICING</span>
          <h2 className="text-4xl md:text-6xl font-black text-ink uppercase mb-4 tracking-tight font-display">{t.title}</h2>
          <p className="text-ink-light uppercase tracking-widest max-w-2xl mx-auto text-xs md:text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card 1: Social Sciences Editing Calculator */}
          <div className="bg-surface border border-ink p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--color-ink)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-ink-light/20 pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-ink text-paper p-3">
                    <Calculator size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold uppercase text-ink">{t.single_title}</h3>
                    <p className="text-xs text-accent font-mono uppercase tracking-wider">SSCI / A&HCI Native Proofreading</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-stone-100 border border-ink px-2.5 py-1 text-ink font-bold">
                  {language === 'en' ? 'Certificate & Invoice' : '含編修證明與發票'}
                </span>
              </div>

              <div className="space-y-6">
                {/* Word Count Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase text-ink-light">
                      {t.labels.words}: <span className="font-mono text-ink font-bold text-sm">{words.toLocaleString()} words</span>
                    </label>
                    <span className="text-[11px] font-mono text-stone-500">SSCI Standard Length: 6,000 - 10,000w</span>
                  </div>
                  <input 
                    type="range" 
                    min="2000" 
                    max="16000" 
                    step="250" 
                    value={words} 
                    onChange={(e) => setWords(parseInt(e.target.value))}
                    className="w-full h-2 bg-ink-light/20 appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-[10px] text-ink-light mt-1 font-mono">
                    <span>2,000w</span>
                    <span>6,000w (典型SSCI)</span>
                    <span>10,000w</span>
                    <span>16,000w+</span>
                  </div>
                </div>

                {/* Service Tier Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.service_tier}</label>
                  <select 
                    value={tier} 
                    onChange={(e) => setTier(e.target.value)}
                    className="w-full p-3 bg-paper border border-ink focus:border-accent outline-none text-xs md:text-sm font-medium text-ink"
                  >
                    <option value="tier_substantive">{t.options.tier_substantive}</option>
                    <option value="tier_standard">{t.options.tier_standard}</option>
                    <option value="tier_translation">{t.options.tier_translation}</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Discipline in Humanities & Social Sciences */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.subject}</label>
                    <select 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 bg-paper border border-ink focus:border-accent outline-none text-xs md:text-sm font-medium text-ink"
                    >
                      <option value="general">{t.options.general}</option>
                      <option value="biomedical">{t.options.biomedical}</option>
                      <option value="engineering">{t.options.engineering}</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.urgency}</label>
                    <select 
                      value={urgency} 
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full p-3 bg-paper border border-ink focus:border-accent outline-none text-xs md:text-sm font-medium text-ink"
                    >
                      <option value="normal">{t.options.normal}</option>
                      <option value="urgent">{t.options.urgent}</option>
                      <option value="super_urgent">{t.options.super_urgent}</option>
                    </select>
                  </div>
                </div>

                {/* Academic Value Props */}
                <div className="p-3 bg-stone-50 border border-ink/20 text-xs text-stone-700 space-y-1.5 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-700" />
                    <span>{language === 'en' ? 'Native Social Sciences PhD Dual Review' : (language === 'cn' ? '英美名校人文社科博士主编双阶段二审' : '英美名校人文社科博士主編雙階段二審')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-700" />
                    <span>{language === 'en' ? 'Official Service Agreements & Detailed Invoicing Receipts' : (language === 'cn' ? '提供正规技术服务合同与明细收据，支持多币种结算' : '提供正規技術服務合約與明細收據，支持多幣種結算')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-700" />
                    <span>{language === 'en' ? 'Official Certificate of Editing Recognized by Springer/Taylor/Routledge' : (language === 'cn' ? '随稿附赠国际期刊认可之《学术英文润色证明》' : '隨稿附贈國際期刊認可之《學術英文編修證明》')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ink-light/20">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-xs uppercase font-bold text-ink-light tracking-widest">{t.result.est_price}</span>
                <div className="text-right">
                  <span className="text-3xl md:text-4xl font-black text-ink font-display">
                    {currencySymbol} {estimatedPrice.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono block mt-0.5">
                    ({Math.round(estimatedPrice / words * 100) / 100} / word)
                  </span>
                </div>
              </div>

              <a 
                href={`https://wa.me/85255849939?text=${encodeURIComponent(`您好，我想諮詢博雅文研人文社科論文編修服務：\n預計字數：${words} 字\n學科方向：${subject}\n潤稿等級：${tier}\n預估費用約：HKD ${estimatedPrice} (約 RMB ${Math.round(estimatedPrice * 0.92)})`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-ink text-paper py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.result.contact_btn}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Card 2: Journal Submission Support Suite */}
          <div className="bg-surface border border-ink p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--color-ink)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-ink-light/20 pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#b91c1c] text-white p-3">
                    <ShoppingBag size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold uppercase text-ink">{t.bulk_title}</h3>
                    <p className="text-xs text-[#b91c1c] font-mono uppercase tracking-wider">SSCI / A&HCI Full Submission Suite</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-red-100 text-red-900 border border-red-300 px-2.5 py-1 font-bold">
                  Editing Combo -15%
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.submission_package}</label>
                  <div className="space-y-2.5">
                    {[
                      { 
                        id: 'pkg_full_agent', 
                        name: t.packages.pkg_full_agent, 
                        desc: language === 'en' 
                          ? 'Flagship: Low upfront deposit for formatting and submission; full fee due ONLY upon official acceptance (Accept), tiered by JCR journal quartiles.'
                          : (language === 'cn'
                            ? '【旗舰保障】先收基础排版与系统代投定金，正式录用 Accept 才收全额尾款；按 JCR 期刊分区阶梯定价，不录用不收尾款。'
                            : '【旗艦保障】先收基礎排版與系統代投訂金，正式錄用 Accept 才收全額尾款；按 JCR 期刊分區階梯定價，不錄用不收尾款。')
                      },
                      { 
                        id: 'pkg_conception', 
                        name: t.packages.pkg_conception, 
                        desc: language === 'en'
                          ? '1-on-1 consultation with native doctoral editor to review recent 3-5 years SSCI debates and construct theoretical analytical frameworks.'
                          : (language === 'cn'
                            ? '由英美名校社科主编梳理近3年 SSCI 核心文献，指导概念提炼与分析框架建构，从源头避免选题陈旧 Desk Reject。'
                            : '由英美名校社科主編梳理近3年 SSCI 核心文獻，指導概念提煉與分析框架建構，從源頭避免選題陳舊 Desk Reject。')
                      },
                      { 
                        id: 'pkg_full', 
                        name: t.packages.pkg_full, 
                        desc: language === 'en'
                          ? 'Guide for Authors formatting, custom Cover Letter, ScholarOne / Editorial Manager submission, and portal tracking.'
                          : (language === 'cn'
                            ? '涵盖 APA/Chicago 引注排版、Cover Letter 撰写、ScholarOne 系统代投、档案上传与进度追踪。'
                            : '涵蓋 APA/Chicago 引註排版、Cover Letter 撰寫、ScholarOne 系統代投、檔案上傳與進度追蹤。')
                      },
                      { 
                        id: 'pkg_formatting', 
                        name: t.packages.pkg_formatting, 
                        desc: language === 'en'
                          ? 'Target journal formatting (APA 7th, Chicago, MLA, Harvard), qualitative block quotes indent, reference cross-checking.'
                          : (language === 'cn'
                            ? '针对 Target Journal Guide for Authors 严格排版（字号、页边距、访谈引文缩进、参考文献交叉核对）。'
                            : '針對 Target Journal Guide for Authors 嚴格排版（字型、邊距、訪談引文縮排、參考文獻交叉核對）。')
                      },
                      { 
                        id: 'pkg_response', 
                        name: t.packages.pkg_response, 
                        desc: language === 'en'
                          ? 'Professional linguistic and academic tone refinement for Point-by-point Response to Reviewers during R&R revisions.'
                          : (language === 'cn'
                            ? '针对同行评审意见 (Major/Minor Revision) 提供逐点答辩信 (Point-by-point Response) 语言润色与二审把关。'
                            : '針對同行評審意見 (Major/Minor Revision) 提供逐點答辯信 (Point-by-point Response) 語言潤色與二審把關。')
                      }
                    ].map(pkg => (
                      <div 
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`p-3.5 border cursor-pointer transition-all ${
                          selectedPackage === pkg.id 
                            ? 'border-black bg-stone-100 shadow-[2px_2px_0px_0px_#000000]' 
                            : 'border-stone-200 hover:border-black bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-ink">{pkg.name}</span>
                          <span className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${selectedPackage === pkg.id ? 'border-black bg-black' : 'border-stone-400'}`}>
                            {selectedPackage === pkg.id && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-1 leading-normal">{pkg.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Combo Checkbox */}
                <div 
                  onClick={() => setIncludeEditingCombo(!includeEditingCombo)}
                  className="flex items-center justify-between p-3.5 bg-stone-50 border border-ink/20 cursor-pointer hover:bg-stone-100 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox" 
                      checked={includeEditingCombo} 
                      onChange={() => {}} 
                      className="accent-[#b91c1c] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="text-xs font-bold text-ink block">
                        {language === 'en' ? 'Combine with English Editing for 15% Off' : '搭配英文編修享有 85 折優惠 (Editing Combo)'}
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono">
                        {language === 'en' ? 'Instant deduction when ordering editing and submission together' : '同時委託學術潤稿與投稿服務立即折抵'}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5">
                    -15% OFF
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ink-light/20">
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-xs text-ink-light font-mono">
                  <span>{t.result.total_value}</span>
                  <span className="line-through">{currencySymbol} {packageOriginalPrice.toLocaleString()}</span>
                </div>
                {includeEditingCombo && (
                  <div className="flex justify-between text-xs text-red-600 font-mono font-bold">
                    <span>{t.result.save} (15%)</span>
                    <span>- {currencySymbol} {packageDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-2 border-t border-stone-200">
                  <span className="text-xs uppercase font-bold text-ink tracking-widest">{t.result.pay_only}</span>
                  <span className="text-3xl md:text-4xl font-black text-black font-display">
                    {currencySymbol} {packageFinalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <a 
                href={`https://wa.me/85255849939?text=${encodeURIComponent(`您好，我想諮詢博雅文研 SSCI/A&HCI 期刊代投服務：\n選定方案：${selectedPackage}\n搭配編修優惠：${includeEditingCombo ? '是 (享15%折扣)' : '否'}\n預算約：HKD ${packageFinalPrice} (約 RMB ${Math.round(packageFinalPrice * 0.92)})`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#b91c1c] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{language === 'en' ? 'Book Journal Submission Package' : '預約社科期刊代投專案'}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-stone-500 font-mono max-w-3xl mx-auto leading-relaxed border-t border-ink/15 pt-6">
          <p>
            * 試算費用支援人民幣 (RMB / 增值稅專票開具與公對公匯款)、港幣 (HKD / P-Card採購卡)、美元 (USD / Wire Transfer)。
            博雅文研嚴格遵守 COPE 國際出版倫理，絕不替代作者承擔研究責任或代寫論文。
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;
