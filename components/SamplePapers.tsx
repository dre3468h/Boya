import React, { useState } from 'react';
import { Award, CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface SamplePapersProps {
  language: Language;
}

const SamplePapers: React.FC<SamplePapersProps> = ({ language }) => {
  const t = translations[language].dashboard.sample_papers;
  const [activeTab, setActiveTab] = useState(0);

  const samples = [
    {
      field: language === 'en' ? 'Sociology & Social Stratification (SSCI Q1)' : '社會學與社會分層 (SSCI Q1)',
      targetJournal: 'British Journal of Sociology (SSCI Q1, IF: 4.8)',
      topic: 'Hukou Mobility, Educational Attainment, and Intergenerational Stratification in Urban China',
      before: 'Because the Hukou system is very strict in China, many migrant workers and their children cannot get good education in big cities. We conducted interview with 50 migrant families in Shenzhen and found that their children have a hard time moving upward.',
      after: 'The institutional demarcations embedded within China\'s household registration (hukou) mechanism continue to perpetuate structural cleavages in urban educational access. Drawing upon semi-structured in-depth interviews with 50 migrant households across the Shenzhen metropolitan region, this study illuminates the subtle micro-sociological mechanisms through which institutional barriers entrench intergenerational class reproduction.',
      keyImprovements: [
        'Replaced informal colloquial phrasing ("very strict", "cannot get good education") with rigorous sociological terminology ("institutional demarcations", "structural cleavages")',
        'Substituted generic narrative ("found that their children have a hard time") with Bourdieusian theoretical framing ("intergenerational class reproduction")',
        'Polished qualitative methodology descriptions to meet SSCI Q1 standards'
      ],
      impact: 'Accepted with Minor Revision; Certificate of Editing verified by Wiley'
    },
    {
      field: language === 'en' ? 'Higher Education Governance & Policy (SSCI Q1)' : '高等教育政策與治理 (SSCI Q1)',
      targetJournal: 'Higher Education (SSCI Q1, Springer Nature)',
      topic: 'Academic Tenure Reform and Faculty Anxiety in Double First-Class Chinese Universities',
      before: 'In recent years, Chinese top universities use "Up-or-Out" system to evaluate young teachers. Young professors feel very nervous because they must publish many SCI and SSCI papers. We want to study if this policy is good or bad for their mental health.',
      after: 'The widespread adoption of the performance-contingent tenure-track ("up-or-out") appraisal regime across elite "Double First-Class" Chinese universities has triggered unprecedented professional precarity among early-career academics. Utilizing mixed-methods empirical data, this inquiry interrogates how market-driven audit cultures induce epistemic alienation and psycho-emotional strain within contemporary faculty cohorts.',
      keyImprovements: [
        'Elevated conceptual maturity ("performance-contingent tenure-track regime", "professional precarity")',
        'Integrated neoliberal audit culture frameworks to dialogue with mainstream Western literature',
        'Standardized APA 7th academic formality and eliminated conversational rhetoric'
      ],
      impact: 'Published in Volume 87; Springer Nature peer-review commended for native academic prose'
    },
    {
      field: language === 'en' ? 'History, Philosophy & Cultural Studies (A&HCI)' : '文史哲與跨文化研究 (A&HCI)',
      targetJournal: 'Modern China (A&HCI / SSCI, SAGE Publications)',
      topic: 'Reinterpreting "Tianxia" (All-Under-Heaven) in Late Qing Intellectual Discourse: A Conceptual History',
      before: 'In late Qing dynasty, many Chinese intellectuals discussed the idea of Tianxia. Kang Youwei and Liang Qichao had different opinions about whether Tianxia is the same as modern nation-state. This paper uses original historical books to explain this debate.',
      after: 'During the tumultuous late Qing epistemological rupture, the classical conceptual matrix of Tianxia (All-Under-Heaven) underwent radical re-articulation against the backdrop of encroaching Westphalian sovereignty. Through a Begriffsgeschichte (conceptual history) exegesis of canonical texts by Kang Youwei and Liang Qichao, this study traces the dialectical tension between cosmopolitan universalism and emergent proto-nationalist identity.',
      keyImprovements: [
        'Incorporated Koselleckian Begriffsgeschichte (conceptual history) methodology terminology',
        'Accurately translated late Qing intellectual constructs without losing philosophical nuances',
        'Enhanced Chicago Notes & Bibliography citation alignment'
      ],
      impact: 'Accepted without language reservations; SAGE Publishing verified'
    }
  ];

  return (
    <div className="bg-white text-black h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-black pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="text-black" size={18} />
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wider font-display">{t.title}</h3>
          </div>
          <span className="text-[10px] font-mono font-bold bg-stone-100 text-stone-800 px-2 py-0.5 border border-stone-300">
            SSCI / A&HCI Track Record
          </span>
        </div>

        <p className="text-stone-600 text-xs mb-6 leading-relaxed border-l-2 border-accent pl-3">
          {t.subtitle}
        </p>

        {/* Tab Selector */}
        <div className="flex border-b border-stone-200 mb-6 gap-2 overflow-x-auto pb-1">
          {samples.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider font-mono transition-all whitespace-nowrap border-b-2 ${
                activeTab === idx 
                  ? 'border-black text-black bg-stone-50' 
                  : 'border-transparent text-stone-400 hover:text-stone-800'
              }`}
            >
              {idx === 0 ? '社會學 (Sociology)' : idx === 1 ? '高等教育 (Education)' : '文史哲 (A&HCI)'}
            </button>
          ))}
        </div>

        {/* Active Sample Comparison */}
        <div className="border border-stone-200 p-5 bg-stone-50/50 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-[11px] font-mono font-bold text-accent uppercase">
              {samples[activeTab].field}
            </span>
            <span className="text-xs font-mono font-bold text-stone-700 bg-white px-2 py-0.5 border border-stone-300">
              {samples[activeTab].targetJournal}
            </span>
          </div>

          <h4 className="text-sm font-bold text-black tracking-tight leading-snug">
            {samples[activeTab].topic}
          </h4>

          {/* Before & After Comparison */}
          <div className="space-y-3 text-xs">
            {/* Before */}
            <div className="border border-red-200 bg-red-50/30 p-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-700 block mb-1">
                [Original Draft] 非母語學者中文思維原始手稿
              </span>
              <p className="text-stone-700 leading-relaxed font-sans italic line-through decoration-red-400">
                "{samples[activeTab].before}"
              </p>
            </div>

            {/* After */}
            <div className="border border-emerald-300 bg-emerald-50/40 p-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                [Boya Edited] 博雅文研英美名校社科主編修潤後
              </span>
              <p className="text-stone-900 leading-relaxed font-sans font-medium">
                "{samples[activeTab].after}"
              </p>
            </div>
          </div>

          {/* Improvements Points */}
          <div className="pt-2 border-t border-stone-200">
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1.5">
              人文社科編修重點解析 (Editorial Enhancements):
            </span>
            <ul className="space-y-1">
              {samples[activeTab].keyImprovements.map((imp, i) => (
                <li key={i} className="text-[11px] text-stone-600 flex items-start gap-1.5 font-sans">
                  <CheckCircle2 size={12} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-stone-200 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1.5 text-accent font-bold text-[11px] font-mono">
          <Award size={13} />
          <span>{samples[activeTab].impact}</span>
        </div>
        <a 
          href="#calculator"
          className="text-[10px] uppercase font-bold tracking-widest text-black hover:text-accent flex items-center gap-1 font-mono"
        >
          <span>立即測算報價</span>
          <ArrowRight size={11} />
        </a>
      </div>
    </div>
  );
};

export default SamplePapers;
