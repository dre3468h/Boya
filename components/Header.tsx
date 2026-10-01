import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { Menu, X, UserCircle, LogIn, Moon, Sun, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeaderProps {
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentUser, 
  onOpenAuth, 
  onLogout, 
  onNavigate, 
  currentPage,
  language,
  setLanguage,
  darkMode,
  toggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Ticker Logic
  const [tickerIndex, setTickerIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const tickerMap: Record<Language, string[]> = {
    zh: [
      "英美頂尖名校社科母語主編 • 提高 SSCI / A&HCI 期刊錄用率",
      "專注人文社科論文 • APA / Chicago / Harvard 規範全文格式排版",
      "全套期刊代投服務 • Cover Letter 撰寫 • ScholarOne 系統代辦",
      "全流程投稿代理保障 • 先收訂金、錄用才收全額 • 恪守 COPE 出版倫理"
    ],
    cn: [
      "英美顶尖名校社科母语主编 • 提高 SSCI / A&HCI 期刊录用率",
      "专注人文社科论文 • APA / Chicago / Harvard 规范全文格式排版",
      "全套期刊代投服务 • Cover Letter 撰写 • ScholarOne 系统代办",
      "全流程投稿代理保障 • 先收定金、录用才收全额 • 恪守 COPE 出版伦理"
    ],
    en: [
      "Native Social Sciences Doctoral Editors • Boost SSCI & A&HCI Acceptance",
      "Specialized in Humanities & Social Sciences • APA, Chicago & Harvard Styles",
      "End-to-End Submission Management: Custom Cover Letter & Portal Upload",
      "Full-Process Submission Agent: Low Deposit, Final Fee Due Only Upon Official Acceptance"
    ]
  };

  const tickerMessages = tickerMap[language] || tickerMap.zh;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      if (currentPage === 'home') {
        const sections = ['home', 'submission', 'services', 'team', 'testimonials', 'calculator', 'faq'];
        let current = 'home';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            if (scrollY >= (element.offsetTop - 180)) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
        setFade(true); 
      }, 500); 
    }, 4500); 

    return () => clearInterval(interval);
  }, [tickerMessages.length]);

  const tNav = translations[language].nav;
  const tTop = translations[language].topbar;

  const navItems = [
    { label: tNav.submission, value: 'submission' },
    { label: tNav.services, value: 'services' },
    { label: tNav.team, value: 'team' },
    { label: tNav.testimonials, value: 'testimonials' },
    { label: tNav.calculator, value: 'calculator' },
    { label: tNav.faq, value: 'faq' },
  ];

  const handleNavClick = (value: string) => {
    if (value === 'dashboard' || value === 'disclaimer') {
      onNavigate(value);
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          scrollToSection(value);
        }, 100);
      } else {
        scrollToSection(value);
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth'
      });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const brandDisplayName = language === 'cn' 
    ? '博雅文研学术编修' 
    : language === 'zh' 
    ? '博雅文研學術編修' 
    : 'BOYA ACADEMIC EDITORIAL';

  const brandSubName = language === 'en'
    ? 'Humanities & Social Sciences'
    : '人文與社會科學國際期刊服務';

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Top Auxiliary Contact Bar */}
      <div className="bg-surface text-ink-light border-b border-ink/15 text-[11px] font-mono py-1.5 px-4 md:px-12 hidden sm:block">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-ink transition-colors">
              <Mail size={12} className="text-accent" />
              <a href="mailto:editorial@boya-academic.org">editorial@boya-academic.org</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-ink transition-colors font-bold text-ink">
              <Phone size={12} className="text-[#b91c1c]" />
              <a href="tel:+85255849939">+852 55849939 (WhatsApp / 專線)</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-ink-light/80">
              <Clock size={12} />
              <span>{tTop.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden xl:inline text-[#b91c1c] font-bold">
              ✓ SSCI / A&HCI 人文社科同儕審核
            </span>
            
            {/* 3-Language Selector (繁體中文 / 简体中文 / English) */}
            <div className="flex items-center border border-ink/30 bg-paper divide-x divide-ink/20 text-[11px] font-bold">
              <button 
                onClick={() => setLanguage('zh')}
                className={`px-2 py-0.5 transition-colors ${language === 'zh' ? 'bg-ink text-paper' : 'text-ink hover:text-accent'}`}
                title="繁體中文"
              >
                繁
              </button>
              <button 
                onClick={() => setLanguage('cn')}
                className={`px-2 py-0.5 transition-colors ${language === 'cn' ? 'bg-ink text-paper' : 'text-ink hover:text-accent'}`}
                title="简体中文"
              >
                简
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 transition-colors ${language === 'en' ? 'bg-ink text-paper' : 'text-ink hover:text-accent'}`}
                title="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 border-b border-ink ${isScrolled ? 'bg-paper/95 backdrop-blur-md py-2 shadow-sm' : 'bg-paper py-3.5'}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <div 
              className="flex-shrink-0 cursor-pointer group flex items-center gap-3.5" 
              onClick={() => handleNavClick('home')}
            >
              {/* Distinctive 'B' Crest for Boya / 博雅 */}
              <div className="w-10 h-10 bg-ink text-paper flex items-center justify-center font-serif font-black text-2xl border border-ink shadow-[2px_2px_0px_0px_var(--color-accent)] group-hover:bg-[#b91c1c] group-hover:text-white transition-all">
                B
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <h1 className="text-lg md:text-xl font-black tracking-tight text-ink leading-none font-display">
                    {brandDisplayName}
                  </h1>
                </div>
                <div className="text-[10px] font-mono text-[#b91c1c] font-bold uppercase tracking-wider mt-0.5 hidden sm:block">
                  {brandSubName}
                </div>
                
                {/* Ticker / Subtitle */}
                <div className="h-4 overflow-hidden relative mt-1">
                  <p className={`text-[10px] font-mono text-ink-light uppercase transition-opacity duration-500 line-clamp-1 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    {tickerMessages[tickerIndex]}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            {currentPage === 'home' && (
              <nav className="hidden xl:flex items-center gap-6 bg-surface px-6 py-2 border border-ink shadow-sm">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-accent ${
                      activeSection === item.value 
                        ? 'text-ink underline underline-offset-4 decoration-2 decoration-accent' 
                        : 'text-ink-light'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}

            {/* Controls & CTA Section */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-ink hover:text-accent border border-ink hover:bg-surface transition-all"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun size={14} /> : <Moon size={14} />}
              </button>

              {/* Author Portal / Login */}
              {currentUser ? (
                <div className="flex items-center gap-3 ml-1">
                  <button 
                    onClick={() => handleNavClick('dashboard')}
                    className={`text-xs font-bold uppercase font-mono px-3 py-2 border border-ink flex items-center gap-1.5 ${currentPage === 'dashboard' ? 'bg-ink text-paper' : 'bg-surface text-ink hover:bg-paper'}`}
                  >
                    <UserCircle size={14} />
                    <span>{tNav.console}</span>
                  </button>
                  <button 
                    onClick={onLogout}
                    className="text-xs text-ink-light hover:text-red-600 transition-colors uppercase font-mono"
                  >
                    {tNav.logout}
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onOpenAuth}
                  className="text-xs font-bold uppercase tracking-wider text-ink hover:text-accent px-3 py-2 border border-ink hover:bg-surface transition-all flex items-center gap-1.5"
                >
                  <LogIn size={13} />
                  <span>{tNav.login}</span>
                </button>
              )}

              {/* Core "Upload Manuscript / Get Quote" CTA Button */}
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('calculator');
                }}
                className="bg-[#b91c1c] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-[2px_2px_0px_0px_var(--color-ink)] flex items-center gap-2 group"
              >
                <span>{tNav.upload_btn}</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu & Language Switcher */}
            <div className="flex lg:hidden items-center gap-2">
              {/* 3-Language Selector Mobile */}
              <div className="flex items-center border border-ink bg-paper divide-x divide-ink text-[10px] font-bold">
                <button 
                  onClick={() => setLanguage('zh')}
                  className={`px-1.5 py-1 ${language === 'zh' ? 'bg-ink text-paper' : 'text-ink'}`}
                >
                  繁
                </button>
                <button 
                  onClick={() => setLanguage('cn')}
                  className={`px-1.5 py-1 ${language === 'cn' ? 'bg-ink text-paper' : 'text-ink'}`}
                >
                  简
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-1.5 py-1 ${language === 'en' ? 'bg-ink text-paper' : 'text-ink'}`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-1.5 text-ink border border-ink hover:bg-surface"
              >
                {darkMode ? <Sun size={14} /> : <Moon size={14} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 text-ink border border-ink hover:bg-surface"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-paper border-b border-ink shadow-2xl animate-fade-in">
          <div className="p-6 space-y-4">
            <div className="space-y-2 border-b border-ink/20 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-ink hover:text-accent"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('calculator');
                }}
                className="w-full block text-center bg-[#b91c1c] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                {tNav.upload_btn}
              </a>

              {currentUser ? (
                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="text-xs font-bold uppercase font-mono text-ink"
                  >
                    {tNav.console}
                  </button>
                  <button
                    onClick={onLogout}
                    className="text-xs text-red-600 font-bold uppercase font-mono"
                  >
                    {tNav.logout}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider border border-ink text-ink hover:bg-surface"
                >
                  {tNav.login}
                </button>
              )}
            </div>

            <div className="pt-4 border-t border-ink/20 text-[11px] text-ink-light font-mono space-y-1">
              <p>Email: editorial@boya-academic.org</p>
              <p>Tel / WhatsApp: +852 55849939</p>
              <p>支持港幣 / 人民幣 / 美元多幣種結算與正規服務收據</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
