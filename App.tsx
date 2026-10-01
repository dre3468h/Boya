import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import QuoteCalculator from './components/QuoteCalculator';
import TeamSection from './components/TeamSection';
import SamplePapers from './components/SamplePapers';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Zap, 
  Feather, 
  MessageSquare, 
  X, 
  ZoomIn, 
  Upload, 
  FileText, 
  ShieldCheck, 
  FileCheck 
} from 'lucide-react';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');
  const [darkMode, setDarkMode] = useState(false);
  
  // Image Lightbox State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Quick assessment form state
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteJournal, setQuoteJournal] = useState('');

  // Info Modal State for Footer Links
  const [infoModal, setInfoModal] = useState<{isOpen: boolean, title: string, content: string}>({
    isOpen: false,
    title: '',
    content: ''
  });

  const t = translations[language] || translations.zh;

  // Theme Toggler logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Scroll Animation Logic
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, [currentPage]);

  const handleLogin = (role: UserRole, name: string) => {
    setUser({
      id: 'scholar-' + Math.random().toString(36).substr(2, 9),
      name: name,
      email: 'scholar@university.edu',
      role: role
    });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };
  
  const handleShowInfo = (title: string, content: string) => {
    setInfoModal({ isOpen: true, title, content });
  };

  // Reusable Component for Image Gallery
  const HoverGallery = ({ images }: { images: string[] }) => (
    <div className="grid grid-cols-2 gap-4 h-full content-center">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          onClick={() => setSelectedImage(img)}
          className={`relative group overflow-hidden border border-ink shadow-[4px_4px_0px_0px_var(--color-ink)] bg-paper aspect-square transition-all duration-300 cursor-zoom-in ${idx % 2 === 1 ? 'mt-8' : ''}`}
        >
          <img 
            src={img} 
            alt="Humanities & Social Sciences Research" 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors pointer-events-none"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="bg-paper p-3 border border-ink shadow-lg rounded-full">
              <ZoomIn size={20} className="text-accent" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Hero Section
  const HeroSection = () => (
    <div id="home" className="relative min-h-[92vh] flex items-center bg-paper pt-36 md:pt-44 border-b border-ink overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1]" 
        style={{ backgroundImage: 'linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="col-span-1 lg:col-span-7 reveal active space-y-7 relative">
            
            <div className="inline-flex items-center gap-3 border border-ink bg-surface px-4 py-1.5 shadow-sm relative z-10">
              <div className="w-2 h-2 bg-[#b91c1c] rounded-full animate-pulse"></div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink">{t.hero.est}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-ink leading-[0.95] tracking-tight relative z-10 font-display">
              {t.hero.title_1}<br/>
              <span className="text-[#b91c1c] font-light italic">{t.hero.title_2}</span>
            </h1>
            
            <p className="text-base md:text-xl text-ink-light max-w-2xl leading-relaxed font-normal border-l-4 border-accent pl-6 relative z-10">
              {t.hero.subtitle}
            </p>

            {/* Official Disclaimer Box */}
            <div className="p-6 md:p-7 bg-red-50/70 border-l-4 border-[#b91c1c] text-ink relative z-10 shadow-sm border-t border-r border-b border-red-200">
              <p className="text-xs md:text-sm leading-relaxed text-stone-900 font-medium">
                {t.hero.disclaimer_box}
              </p>
            </div>
            
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 relative z-10">
              <a 
                href="#calculator"
                className="bg-[#b91c1c] text-white px-9 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black transition-all shadow-[4px_4px_0px_0px_var(--color-ink)] flex items-center justify-center gap-3 group"
              >
                <Upload size={17} />
                <span>{t.hero.cta_primary}</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#calculator"
                className="bg-transparent text-ink border border-ink px-9 py-4 font-bold text-sm uppercase tracking-wider hover:bg-surface transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_transparent] hover:shadow-[4px_4px_0px_0px_var(--color-ink)]"
              >
                <span>{t.hero.cta_secondary}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-ink/15 relative z-10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#b91c1c] flex-shrink-0" size={16} />
                <span className="font-bold text-ink-light uppercase">{t.hero.badges.native}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="text-emerald-700 flex-shrink-0" size={16} />
                <span className="font-bold text-ink-light uppercase">{t.hero.badges.cert}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-ink flex-shrink-0" size={16} />
                <span className="font-bold text-ink-light uppercase">{t.hero.badges.formatting}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-accent flex-shrink-0" size={16} />
                <span className="font-bold text-ink-light uppercase">{t.hero.badges.confidential}</span>
              </div>
            </div>
          </div>

          {/* Right Side Assessment Form */}
          <div className="col-span-1 lg:col-span-5 relative reveal active delay-200 mt-8 lg:mt-0">
            <div className="relative z-10 bg-surface p-8 border border-ink shadow-[10px_10px_0px_0px_var(--color-ink)]">
              <div className="flex justify-between items-start mb-6 border-b border-ink pb-4">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-ink uppercase tracking-tight">{t.hero.priority_title}</h3>
                  <p className="text-xs text-[#b91c1c] uppercase tracking-widest font-mono mt-1 font-bold">Target: SSCI / A&HCI / Scopus</p>
                </div>
                <Zap className="text-accent" size={28} />
              </div>
              
              <p className="text-ink-light text-sm leading-relaxed mb-6 font-normal">
                {t.hero.priority_text}
              </p>

              <div className="flex justify-between items-center bg-paper p-3.5 border border-ink mb-6">
                <span className="text-xs font-bold text-ink-light uppercase tracking-widest">{t.hero.capacity}</span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  <span className="text-xs font-bold text-emerald-700 font-mono tracking-wider">{t.hero.full}</span>
                </div>
              </div>

              {/* Instant Request Form */}
              <div className="pt-4 border-t border-ink/20">
                <p className="text-xs font-bold uppercase mb-4 text-ink tracking-wider flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {t.hero.priority_form.title}
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    value={quoteEmail}
                    onChange={(e) => setQuoteEmail(e.target.value)}
                    placeholder={t.hero.priority_form.email}
                    className="w-full bg-paper border border-ink p-3 text-xs focus:outline-none focus:border-accent placeholder-ink-light/50 font-mono"
                  />
                  <input 
                    type="tel" 
                    value={quotePhone}
                    onChange={(e) => setQuotePhone(e.target.value)}
                    placeholder={t.hero.priority_form.phone}
                    className="w-full bg-paper border border-ink p-3 text-xs focus:outline-none focus:border-accent placeholder-ink-light/50 font-mono"
                  />
                  <input 
                    type="text" 
                    value={quoteJournal}
                    onChange={(e) => setQuoteJournal(e.target.value)}
                    placeholder={t.hero.priority_form.target_journal}
                    className="w-full bg-paper border border-ink p-3 text-xs focus:outline-none focus:border-accent placeholder-ink-light/50 font-mono"
                  />
                  <a 
                    href={`https://wa.me/85255849939?text=${encodeURIComponent(`您好，我想諮詢博雅文研人文社科論文國際期刊投稿與編修服務：\n郵箱：${quoteEmail || '未填寫'}\n電話：${quotePhone || '未填寫'}\n目標期刊：${quoteJournal || '尚未選定'}`)}`} 
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block text-center bg-ink text-paper py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#b91c1c] hover:text-white transition-all shadow-sm"
                  >
                    {t.hero.priority_form.submit}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  // Submission Workflow Section
  const SubmissionWorkflowSection = () => (
    <div id="submission" className="bg-surface py-28 md:py-36 border-b border-ink">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-16 reveal">
          <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-3 block">01 / SUBMISSION WORKFLOW</span>
          <h2 className="text-3xl md:text-5xl font-black text-ink uppercase tracking-tight font-display">
            {language === 'en' ? 'SSCI & A&HCI Four-Step Submission Workflow' : '人文社科期刊投稿四部曲'}
          </h2>
          <p className="text-ink-light text-base md:text-lg mt-3 leading-relaxed">
            {language === 'en' 
              ? 'Our dedicated social sciences editorial team manages complex author guidelines and online portals, minimizing desk rejections.'
              : '博雅文研專屬人文社科投稿秘書團隊，打理繁複的 APA / Chicago 引註規範與線上投稿系統，大幅降低 Desk Reject 機率。'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: language === 'en' ? 'Guide for Authors Compliance' : '期刊指引審核與引註校準',
              desc: language === 'en' ? 'Auditing word counts, abstract formatting, table standards, and referencing styles (APA 7th, Chicago 17th, Harvard).' : '嚴格核對 Guide for Authors：字數上限、結構化摘要格式、質性訪談縮排及 APA 7th / Chicago / Harvard 引註體例。'
            },
            {
              step: '02',
              title: language === 'en' ? 'Formatting & Custom Cover Letter' : '全文格式排版與 Cover Letter',
              desc: language === 'en' ? 'Full manuscript formatting and custom Cover Letter drafted to highlight theoretical novelty to the Editor-in-Chief.' : '全篇論文排版並由英美名校社科博士主編量身撰寫直指研究核心創新 (Theoretical Contribution) 的致主編信。'
            },
            {
              step: '03',
              title: language === 'en' ? 'Portal Registration & File Uploads' : '期刊系統註冊與多檔案上傳',
              desc: language === 'en' ? 'Registering author profiles on ScholarOne / Editorial Manager, entering metadata, and uploading title page, blind manuscript, and tables.' : '於 ScholarOne, Editorial Manager 等系統建立作者帳號、填寫分類詮釋資料 (Metadata)、上傳盲審正文、圖表與附錄。'
            },
            {
              step: '04',
              title: language === 'en' ? 'Tracking & Rebuttal Polish (R&R)' : '投稿追蹤與審稿意見答辯',
              desc: language === 'en' ? 'Post-submission monitoring and point-by-point Response to Reviewers rebuttal letter editing during Major/Minor revisions.' : '投稿完成後即時追蹤外審進度；收到 R&R (Major/Minor Revision) 時提供審稿意見逐點答辯信語言潤色與二審把關。'
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-paper p-8 border border-ink shadow-[4px_4px_0px_0px_var(--color-ink)] hover:translate-y-[-4px] transition-all reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl font-black font-display text-accent mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-ink uppercase mb-3 leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-ink-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div id="about" className="min-h-screen bg-paper flex items-center justify-center py-32 md:py-40 px-6 border-b border-ink">
      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="bg-surface p-10 md:p-16 reveal relative border border-ink shadow-xl h-full flex flex-col justify-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#b91c1c]"></div>
          <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-4 block">02 / ABOUT BOYA</span>
          <div className="flex items-center gap-4 mb-8">
            <Feather className="w-10 h-10 text-ink" />
            <h2 className="text-3xl md:text-4xl font-black text-ink uppercase tracking-tight font-display">{t.about.title}</h2>
          </div>
          <div className="space-y-6 text-base md:text-lg text-ink-light leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div className="bg-paper p-6 border-l-4 border-[#b91c1c] my-4 italic text-ink font-serif text-sm md:text-base">
              "{t.about.p3}"
            </div>
            
            {/* Real Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-ink-light/20 mt-6">
              {[
                { num: "18", suffix: "+", label: "Years Experience" },
                { num: "35k", suffix: "+", label: "Social Science Papers" },
                { num: "93.8", suffix: "%", label: "SSCI/A&HCI Acceptance" },
                { num: "100", suffix: "%", label: "Invoice & Grant Support" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-black text-ink font-display">
                    {stat.num}<span className="text-accent text-xl md:text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-ink-light uppercase tracking-wider mt-1 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Gallery */}
        <div className="h-full reveal delay-100 mt-8 lg:mt-0">
          <HoverGallery images={[
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Library / Archives
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // University Seminar
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Paper Editing
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"  // Scholar Graduation
          ]} />
        </div>

      </div>
    </div>
  );

  const ServicesSection = () => (
    <div id="services" className="bg-surface py-32 md:py-40 relative border-b border-ink">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal border-b-2 border-ink pb-6">
          <div className="max-w-2xl">
            <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-3 block">03 / {t.services.catalog}</span>
            <h2 className="text-4xl md:text-5xl font-black text-ink uppercase tracking-tight font-display">
              {t.services.title}
            </h2>
          </div>
          <p className="text-ink-light text-right mt-4 md:mt-0 italic font-serif text-sm">
            {t.services.version}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-ink">
          {t.services.items.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-surface p-8 md:p-10 border-r border-b border-ink hover:bg-paper transition-all duration-300 group cursor-default reveal flex flex-col justify-between"
              style={{transitionDelay: `${idx * 80}ms`}}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xl font-bold text-ink-light font-mono">0{idx + 1}</span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-stone-100 border border-ink px-2 py-0.5 text-ink">
                    {service.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-ink uppercase leading-snug tracking-tight min-h-[2.8rem]">
                  {service.title}
                </h3>
                <p className="text-ink-light mb-8 leading-relaxed text-xs md:text-sm min-h-[5.5rem]">
                  {service.desc}
                </p>
              </div>
              
              <a 
                href="#calculator"
                className="w-full py-3 font-bold text-xs uppercase tracking-widest border border-ink flex items-center justify-center gap-2 transition-all bg-transparent text-ink hover:bg-ink hover:text-paper"
              >
                <span>{service.price}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TestimonialsSection = () => (
    <div id="testimonials" className="bg-surface py-32 md:py-40 relative border-b border-ink">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <div className="flex flex-col mb-16 reveal">
              <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-3 block">04 / SCHOLAR REPUTATION</span>
              <h2 className="text-4xl md:text-5xl font-black text-ink uppercase tracking-tight font-display">{t.testimonials.title}</h2>
              <p className="text-ink-light mt-4 leading-relaxed font-normal text-sm md:text-base">{t.testimonials.desc}</p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { 
                  name: "Prof. Z. H. Lu (盧教授)", 
                  role: "Peking University • School of Government (北京大學政府管理學院)", 
                  text: language === 'en'
                    ? "Our empirical governance paper was commended by the Editor of Governance (SSCI Q1) for natural academic phrasing. Boya's Oxford editorial team captured our institutional insights without losing qualitative nuance."
                    : "我們有關基層數字治理的實證論文經博雅文研牛津社科主編深度編修後，順利通過 Governance (SSCI Q1) 的同行評審。主編信中特別讚揚語言自然嚴謹，完全展現了中國經驗研究的國際對話價值！"
                },
                { 
                  name: "Dr. K. Y. Wong (黃博士)", 
                  role: "The University of Hong Kong • Faculty of Social Sciences (香港大學社會科學學院)", 
                  text: language === 'en'
                    ? "SSCI formatting with Chicago author-date styles and thick qualitative interview quotations is very demanding. Boya managed the entire formatting and ScholarOne portal upload smoothly, covered by our HKU faculty grant."
                    : "SSCI 期刊對芝加哥引註體例與質性訪談引語排版要求極高。博雅文研協助處理全篇格式排版與 ScholarOne 系統代投，替課題組節省了大量繁重行政工作，且完全符合港大研究經費報銷手續。"
                },
                { 
                  name: "Prof. S. Q. Chen (陳研究員)", 
                  role: "CASS / Tsinghua University • Sociology (清華大學社會學系 / 社科院)", 
                  text: language === 'en'
                    ? "During our Major Revision for British Journal of Sociology, Boya polished our 14-page Point-by-point Rebuttal letter with immense academic courtesy. The paper was accepted within three weeks."
                    : "在收到 British Journal of Sociology 的 Major Revision 後，博雅文研主編協助我們潤色了長達14頁的逐點答辯信 (Response to Reviewers)，學術禮貌與論證力度恰到好處，返修後三週內即獲正式錄用！"
                }
              ].map((tr, i) => (
                <div key={i} className="bg-paper p-8 border border-ink relative reveal group hover:shadow-[5px_5px_0px_0px_var(--color-ink)] transition-shadow">
                  <div className="absolute -top-3 -right-3 bg-surface border border-ink p-2 rounded-full z-10">
                    <MessageSquare size={16} className="text-ink" />
                  </div>
                  <div className="flex gap-1 text-accent mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" stroke="none" />)}
                  </div>
                  <p className="text-ink mb-6 leading-relaxed text-sm font-medium">"{tr.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-ink-light/20">
                    <div className="w-9 h-9 bg-ink flex items-center justify-center font-bold text-paper text-xs">
                      {tr.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-ink">{tr.name}</div>
                      <div className="text-[11px] text-ink-light font-mono uppercase">{tr.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sample Papers Component */}
          <div className="h-full reveal delay-200 mt-12 lg:mt-0">
            <div className="sticky top-36">
              <div className="border border-black p-8 bg-white shadow-[6px_6px_0px_0px_var(--color-ink)]">
                <SamplePapers language={language} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const FAQSection = () => (
    <div id="faq" className="bg-surface py-32 md:py-40 border-b border-ink">
      <FAQ language={language} />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-paper font-sans text-ink transition-colors duration-300">
      <Header 
        currentUser={user} 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
        onLogout={handleLogout}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <SubmissionWorkflowSection />
            <AboutSection />
            <ServicesSection />
            <TeamSection language={language} />
            <TestimonialsSection />
            <div id="calculator">
              <QuoteCalculator language={language} />
            </div>
            <FAQSection />
          </>
        )}

        {currentPage === 'disclaimer' && <Disclaimer language={language} />}
        {currentPage === 'dashboard' && user && (
          <div className="pt-28">
            <Dashboard user={user} language={language} />
          </div>
        )}
      </main>

      <Footer language={language} onLinkClick={handleShowInfo} onNavigate={setCurrentPage} />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin} 
        language={language}
      />

      {/* Info Modal */}
      {infoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface border border-ink max-w-2xl w-full p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setInfoModal({ isOpen: false, title: '', content: '' })}
              className="absolute top-4 right-4 p-2 text-ink hover:text-accent border border-ink"
            >
              <X size={18} />
            </button>
            <h3 className="text-2xl font-bold uppercase mb-4 text-ink border-b border-ink pb-3">
              {infoModal.title}
            </h3>
            <div className="text-sm text-ink-light whitespace-pre-line leading-relaxed font-sans space-y-3">
              {infoModal.content}
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Enlarged view" className="object-contain max-h-[85vh] border-2 border-white shadow-2xl" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white p-2 hover:text-accent"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
