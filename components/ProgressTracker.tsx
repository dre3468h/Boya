import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  MessageCircle, 
  ShieldCheck, 
  Send
} from 'lucide-react';
import { OrderItem, OrderStatus } from '../types';
import { Language, translations } from '../translations';

interface ProgressTrackerProps {
  language?: Language;
}

const mockOrders: OrderItem[] = [
  {
    id: 'manuscript-1',
    orderNumber: 'BY-2026-0842',
    subjectCode: 'SSCI-SOC',
    title: 'Intergenerational Class Mobility and Educational Disparities Among Rural Migrants in Greater Bay Area',
    status: 'drafting',
    words: 8500,
    progressPercent: 65,
    assignedWriter: 'Prof. Alistair R., PhD',
    writerCredentials: 'PhD in Sociology, Oxford; Reviewer for British Journal of Sociology',
    dueDate: '2026-10-05',
    lastUpdated: 'Today 14:20',
    turnitinScore: 'Preliminary Scan: 2.8% (No AI flags)',
    notes: 'Substantive editing completed for Theoretical Framework & Empirical Findings. Currently drafting the custom Cover Letter addressed to the Editor-in-Chief of British Journal of Sociology.',
    milestones: [
      { step: 1, label: 'Target Journal Guidelines Check', description: 'Guide for Authors verified (APA 7th, 9,000w limit, qualitative interview excerpts formatted)', isComplete: true, isCurrent: false, date: 'Sep 26' },
      { step: 2, label: 'Social Sciences Disciplinary Review', description: 'Oxford sociology specialist initial conceptual alignment & Bourdieu framework audit', isComplete: true, isCurrent: false, date: 'Sep 28' },
      { step: 3, label: 'Native Substantive Editing', description: 'Polishing qualitative depth, eliminating Chinglish, restructuring thematic arguments', isComplete: false, isCurrent: true, date: 'In Progress (65%)' },
      { step: 4, label: 'Formatting & Certificate', description: 'APA 7th reference cross-check & Certificate of Editing generation', isComplete: false, isCurrent: false, date: 'Est. Oct 03' },
      { step: 5, label: 'ScholarOne Portal Upload', description: 'Account creation, metadata entry & files dispatched to journal office', isComplete: false, isCurrent: false, date: 'Est. Oct 05' }
    ]
  },
  {
    id: 'manuscript-2',
    orderNumber: 'BY-2026-0911',
    subjectCode: 'SSCI-GOV',
    title: 'Digital Bureaucracy and Street-Level Discretion: Evidence from Municipal Smart Governance in Eastern China',
    status: 'review',
    words: 9200,
    progressPercent: 90,
    assignedWriter: 'Dr. Eleanor W., PhD',
    writerCredentials: 'PhD in Public Administration, LSE; Editorial Board, Public Admin Review',
    dueDate: '2026-10-02',
    lastUpdated: 'Today 11:30',
    turnitinScore: '3.6% Similarity (Turnitin Verified Safe)',
    notes: 'Two-stage native editing fully complete. Target journal formatting (Chicago Author-Date style) verified. Official Certificate of Editing issued (#BY-CERT-9118). Ready for final author approval before portal upload.',
    milestones: [
      { step: 1, label: 'Target Journal Check', description: 'Public Administration Review requirements parsed', isComplete: true, isCurrent: false, date: 'Sep 22' },
      { step: 2, label: 'Disciplinary Peer Review', description: 'Institutional governance terminology and regression tables checked', isComplete: true, isCurrent: false, date: 'Sep 24' },
      { step: 3, label: 'Native Substantive Editing', description: 'Full manuscript track-changes revision completed', isComplete: true, isCurrent: false, date: 'Sep 27' },
      { step: 4, label: 'Formatting & Certificate', description: 'Chicago style formatted + Certificate of Editing issued', isComplete: false, isCurrent: true, date: 'In Review (90%)' },
      { step: 5, label: 'Editorial Manager Upload', description: 'Author portal registration & metadata upload queued', isComplete: false, isCurrent: false, date: 'Tomorrow 10:00' }
    ]
  },
  {
    id: 'manuscript-3',
    orderNumber: 'BY-2026-0975',
    subjectCode: 'SSCI-EDU',
    title: 'Epistemic Anxiety and Publication Pressure Among Early-Career Academics in Double First-Class Universities',
    status: 'in_progress',
    words: 7800,
    progressPercent: 30,
    assignedWriter: 'Dr. Gregory B., PhD',
    writerCredentials: 'PhD in Education, Columbia; Specialist in Higher Education Policy',
    dueDate: '2026-10-09',
    lastUpdated: 'Yesterday 17:15',
    turnitinScore: 'Pending initial draft audit',
    notes: 'Higher Education (Springer) formatting requirements mapped. Lead field editor currently restructuring literature review narrative and structural equation model discussions.',
    milestones: [
      { step: 1, label: 'Guide for Authors Analysis', description: 'Target journal word count & abstract guidelines verified', isComplete: true, isCurrent: false, date: 'Sep 29' },
      { step: 2, label: 'Disciplinary Peer Review', description: 'Structural alignment & higher education policy terminology check', isComplete: false, isCurrent: true, date: 'In Progress (30%)' },
      { step: 3, label: 'Native Substantive Editing', description: 'Heavy revision of Introduction, Theory & Discussion', isComplete: false, isCurrent: false, date: 'Est. Oct 04' },
      { step: 4, label: 'Formatting & Certificate', description: 'APA 7th reference audit & Certificate issue', isComplete: false, isCurrent: false, date: 'Est. Oct 07' },
      { step: 5, label: 'Journal Portal Upload', description: 'Springer Nature submission assistance & confirmation PDF', isComplete: false, isCurrent: false, date: 'Est. Oct 09' }
    ]
  },
  {
    id: 'manuscript-4',
    orderNumber: 'BY-2026-0730',
    subjectCode: 'AHCI-HIST',
    title: 'Universalism Re-examined: Cosmopolitanism and the "Tianxia" Paradigm in Late Imperial Chinese Intellectual Thought',
    status: 'completed',
    words: 11000,
    progressPercent: 100,
    assignedWriter: 'Prof. Julian H., PhD',
    writerCredentials: 'PhD in East Asian Studies, Harvard; 18 Years A&HCI Journal Editorial Lead',
    dueDate: '2026-09-25',
    lastUpdated: 'Sep 25, 2026',
    turnitinScore: '1.9% Similarity (Turnitin & AI-Free Certified)',
    notes: 'Successfully submitted to Modern China (SAGE). Manuscript ID received: MC-2026-0814. All source files, Chicago Notes bib files, and official Certificate of Editing delivered to author.',
    milestones: [
      { step: 1, label: 'SAGE Guidelines Check', description: 'Chicago Manual of Style (Notes & Bibliography) configured', isComplete: true, isCurrent: false, date: 'Sep 15' },
      { step: 2, label: 'Disciplinary Peer Review', description: 'Pinyin romanization, Chinese character glosses, and translation consistency confirmed', isComplete: true, isCurrent: false, date: 'Sep 18' },
      { step: 3, label: 'Native Substantive Editing', description: 'Polished intellectual history English & sharpened conceptual transitions', isComplete: true, isCurrent: false, date: 'Sep 21' },
      { step: 4, label: 'Formatting & Certificate', description: 'Official Certificate of Editing generated & signed', isComplete: true, isCurrent: false, date: 'Sep 23' },
      { step: 5, label: 'Portal Submission Finalized', description: 'Uploaded to SAGE ScholarOne; Manuscript ID generated', isComplete: true, isCurrent: false, date: 'Sep 25' }
    ]
  }
];

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ language = 'zh' }) => {
  const t = translations[language].dashboard.tracker;
  const [selectedFilter, setSelectedFilter] = useState<'all' | OrderStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>('manuscript-1');
  const [feedbackSuccess, setFeedbackSuccess] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState<{ [orderId: string]: string }>({});

  const filterTabs: { id: 'all' | OrderStatus; label: string; count: number }[] = [
    { id: 'all', label: t?.filter_all || 'All Manuscripts', count: mockOrders.length },
    { id: 'in_progress', label: t?.filter_in_progress || 'Field Review', count: mockOrders.filter(o => o.status === 'in_progress').length },
    { id: 'drafting', label: t?.filter_drafting || 'Native Editing', count: mockOrders.filter(o => o.status === 'drafting').length },
    { id: 'review', label: t?.filter_review || 'Formatting', count: mockOrders.filter(o => o.status === 'review').length },
    { id: 'completed', label: t?.filter_completed || 'Submitted', count: mockOrders.filter(o => o.status === 'completed').length },
  ];

  const filteredOrders = mockOrders.filter(order => {
    const matchesFilter = selectedFilter === 'all' || order.status === selectedFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      order.title.toLowerCase().includes(query) ||
      order.subjectCode.toLowerCase().includes(query) ||
      order.orderNumber.toLowerCase().includes(query) ||
      order.assignedWriter.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  const getStatusDisplay = (status: OrderStatus) => {
    switch (status) {
      case 'in_progress':
        return {
          label: language === 'en' ? 'Field Review (In Progress)' : language === 'cn' ? '社科初审 (In Progress)' : '社科初審 (In Progress)',
          tag: 'bg-stone-100 text-stone-900 border-stone-400',
          dot: 'bg-amber-500 animate-pulse',
          stepNumber: 1
        };
      case 'drafting':
        return {
          label: language === 'en' ? 'Native Proofreading (Drafting)' : language === 'cn' ? '母语润色 (Drafting)' : '母語潤修 (Drafting)',
          tag: 'bg-stone-900 text-white border-stone-900',
          dot: 'bg-blue-400 animate-pulse',
          stepNumber: 2
        };
      case 'review':
        return {
          label: language === 'en' ? 'Formatting & QA (Review)' : language === 'cn' ? '排版与查重 (Review)' : '排版與查重 (Review)',
          tag: 'bg-amber-100 text-amber-900 border-amber-300',
          dot: 'bg-amber-600 animate-pulse',
          stepNumber: 3
        };
      case 'completed':
        return {
          label: language === 'en' ? 'Submitted / Delivered (Completed)' : language === 'cn' ? '代投完成 / 交付 (Completed)' : '系統代投完成 (Completed)',
          tag: 'bg-emerald-50 text-emerald-900 border-emerald-300',
          dot: 'bg-emerald-600',
          stepNumber: 4
        };
    }
  };

  const handleDownloadSample = (order: OrderItem) => {
    const fileContent = `=== BOYA ACADEMIC EDITORIAL | HUMANITIES & SOCIAL SCIENCES RECORD ===\n\n` +
      `Manuscript ID: ${order.orderNumber}\n` +
      `Field & Discipline: ${order.subjectCode}\n` +
      `Title: ${order.title}\n` +
      `Current Status: ${order.status.toUpperCase()}\n` +
      `Completion: ${order.progressPercent}%\n` +
      `Assigned Senior Field Editor: ${order.assignedWriter}\n` +
      `Credentials: ${order.writerCredentials}\n` +
      `Estimated Delivery: ${order.dueDate}\n` +
      `Turnitin Similarity Record: ${order.turnitinScore || 'Pending final audit'}\n\n` +
      `--- SSCI / A&HCI MILESTONE PIPELINE ---\n` +
      order.milestones.map(m => `Step ${m.step}: [${m.isComplete ? 'COMPLETED' : m.isCurrent ? 'IN PROGRESS' : 'QUEUED'}] ${m.label} - ${m.description} (${m.date || ''})`).join('\n') +
      `\n\nDoctoral Field Editor Notes:\n${order.notes || 'Full compliance with COPE editorial ethics.'}\n\n` +
      `Certificate of Editing Verification: https://boya-academic.org/verify\n` +
      `Institutional Inquiries: editorial@boya-academic.org | +852 55849939`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${order.orderNumber}_Boya_Editorial_Record.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmitFeedback = (orderId: string) => {
    const text = feedbackText[orderId];
    if (!text || !text.trim()) return;

    setFeedbackSuccess(orderId);
    setTimeout(() => {
      setFeedbackSuccess(null);
      setFeedbackText(prev => ({ ...prev, [orderId]: '' }));
    }, 4000);
  };

  return (
    <div className="border border-black bg-white shadow-[6px_6px_0px_0px_#000000]">
      {/* Section Header */}
      <div className="p-6 md:p-8 border-b border-black bg-stone-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#b91c1c]"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase">
                {language === 'en' ? 'LIVE SSCI / A&HCI SUBMISSION TELEMETRY' : '人文社科期刊投稿與編修即時進度'}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight font-display">
              {t?.title || 'Social Sciences Submission Progress Tracker'}
            </h3>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              {t?.subtitle || 'Monitor real-time status of your active manuscripts from initial conceptual audit to journal portal upload.'}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left bg-white border border-black p-3">
            <div className="px-3 border-r border-stone-200">
              <span className="block text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                {language === 'en' ? 'Field Review' : '社科初審'}
              </span>
              <span className="text-lg font-bold font-display text-black">
                {mockOrders.filter(o => o.status === 'in_progress').length}
              </span>
            </div>
            <div className="px-3 border-r border-stone-200">
              <span className="block text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                {language === 'en' ? 'Native Edit' : '母語二審'}
              </span>
              <span className="text-lg font-bold font-display text-black">
                {mockOrders.filter(o => o.status === 'drafting').length}
              </span>
            </div>
            <div className="px-3 border-r border-stone-200">
              <span className="block text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                {language === 'en' ? 'Formatting' : '排版查重'}
              </span>
              <span className="text-lg font-bold font-display text-accent">
                {mockOrders.filter(o => o.status === 'review').length}
              </span>
            </div>
            <div className="px-3">
              <span className="block text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                {language === 'en' ? 'Delivered' : '代投完成'}
              </span>
              <span className="text-lg font-bold font-display text-emerald-600">
                {mockOrders.filter(o => o.status === 'completed').length}
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-6 border-t border-stone-200">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist">
            {filterTabs.map(tab => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                    isActive 
                      ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#d97706]' 
                      : 'bg-white text-stone-700 border-stone-300 hover:border-black hover:bg-stone-50'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span>{tab.label}</span>
                  <span className={`ml-2 text-[10px] font-mono ${isActive ? 'text-accent' : 'text-stone-400'}`}>
                    [{tab.count}]
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[260px] lg:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t?.search_placeholder || 'Search by manuscript ID, journal...'}
              className="w-full bg-white border border-stone-300 pl-9 pr-3 py-2 text-xs text-black placeholder-stone-400 outline-none focus:border-black transition-colors font-mono"
            />
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="divide-y divide-black">
        {filteredOrders.length === 0 ? (
          <div className="p-12 text-center bg-stone-50">
            <FileText size={36} className="mx-auto text-stone-300 mb-3" />
            <p className="text-stone-600 font-bold uppercase text-sm tracking-wider">
              {t?.no_orders || 'No manuscripts match the criteria.'}
            </p>
            <button
              onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 border border-black bg-white text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredOrders.map(order => {
            const isExpanded = expandedOrderId === order.id;
            const statusConfig = getStatusDisplay(order.status);

            return (
              <div 
                key={order.id} 
                className={`transition-colors ${isExpanded ? 'bg-stone-50/70' : 'bg-white hover:bg-stone-50/40'}`}
              >
                {/* Manuscript Summary Row */}
                <div 
                  onClick={() => setExpandedOrderId(isExpanded ? null : order.id)}
                  className="p-6 md:p-8 cursor-pointer select-none"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs font-bold bg-stone-900 text-amber-400 px-2.5 py-0.5 border border-black">
                          {order.orderNumber}
                        </span>
                        <span className="font-mono text-xs font-bold text-stone-700 bg-stone-200 px-2 py-0.5">
                          {order.subjectCode}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                          <span>{order.words.toLocaleString()} {t?.words_label || 'words'}</span>
                          <span>·</span>
                          <span>{order.assignedWriter}</span>
                        </div>
                      </div>

                      <h4 className="text-base md:text-lg font-bold text-black tracking-tight leading-snug">
                        {order.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-stone-400" />
                          <span>{t?.col_deadline || 'Est. Delivery'}: <strong className="text-stone-800">{order.dueDate}</strong></span>
                        </span>
                        <span>·</span>
                        <span>{t?.last_updated || 'Updated'}: {order.lastUpdated}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 lg:justify-end">
                      <div className="min-w-[140px]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`w-2 h-2 rounded-full ${statusConfig.dot}`}></span>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                            {statusConfig.label}
                          </span>
                        </div>

                        <div className="w-32 bg-stone-200 h-2 border border-stone-400 relative overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              order.status === 'completed' ? 'bg-emerald-600' : 'bg-black'
                            }`}
                            style={{ width: `${order.progressPercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                          {order.progressPercent}% Stage Progress
                        </span>
                      </div>

                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedOrderId(isExpanded ? null : order.id);
                        }}
                        className="px-4 py-2 border border-black bg-white text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center gap-2 group shadow-[2px_2px_0px_0px_#000000]"
                      >
                        <span>{isExpanded ? (t?.btn_collapse || 'Hide') : (t?.btn_details || 'Milestones')}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Detail Panel */}
                {isExpanded && (
                  <div className="p-6 md:p-8 pt-0 border-t border-stone-200 bg-white space-y-8 animate-fade-in">
                    
                    {/* Pipeline Stage Indicators */}
                    <div>
                      <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-2">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-stone-500 font-mono">
                          {t?.milestones_heading || 'SSCI / A&HCI Five-Step Submission Pipeline'}
                        </h5>
                        <span className="text-xs font-mono text-stone-400">
                          Stage {statusConfig.stepNumber} of 4
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {order.milestones.map((milestone) => (
                          <div 
                            key={milestone.step}
                            className={`p-3.5 border transition-all ${
                              milestone.isComplete
                                ? 'border-emerald-600 bg-emerald-50/40 text-stone-900'
                                : milestone.isCurrent
                                ? 'border-black bg-stone-900 text-white shadow-[3px_3px_0px_0px_#d97706]'
                                : 'border-stone-200 bg-stone-50 text-stone-400'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[10px] font-mono uppercase mb-2">
                              <span>Step 0{milestone.step}</span>
                              {milestone.isComplete && (
                                <CheckCircle2 size={13} className="text-emerald-600" />
                              )}
                              {milestone.isCurrent && (
                                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                              )}
                            </div>
                            <p className={`text-xs font-bold tracking-tight mb-1 ${
                              milestone.isCurrent ? 'text-white' : 'text-black'
                            }`}>
                              {milestone.label}
                            </p>
                            <p className={`text-[11px] leading-tight ${
                              milestone.isCurrent ? 'text-stone-300' : 'text-stone-500'
                            }`}>
                              {milestone.description}
                            </p>
                            {milestone.date && (
                              <div className={`mt-3 pt-2 border-t text-[10px] font-mono ${
                                milestone.isCurrent 
                                  ? 'border-stone-700 text-amber-300' 
                                  : 'border-stone-200 text-stone-500'
                              }`}>
                                {milestone.date}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata & Quality Assurance Box */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="border border-stone-200 p-5 bg-stone-50 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
                          <ShieldCheck size={16} className="text-accent" />
                          <span>Social Sciences Doctoral Editor</span>
                        </div>
                        <div className="space-y-1 text-xs">
                          <p className="text-stone-500 uppercase font-mono text-[10px]">Lead Academic Editor</p>
                          <p className="font-bold text-black">{order.assignedWriter}</p>
                          <p className="text-stone-600 font-mono text-[11px]">{order.writerCredentials}</p>
                        </div>
                        <div className="pt-2 border-t border-stone-200">
                          <p className="text-stone-500 uppercase font-mono text-[10px] mb-1">
                            {t?.turnitin_score || 'Turnitin Similarity Status'}
                          </p>
                          <p className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/70 p-2 border border-emerald-300">
                            {order.turnitinScore || 'Pending final check'}
                          </p>
                        </div>
                      </div>

                      <div className="border border-stone-200 p-5 bg-stone-50 lg:col-span-2 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-black font-mono">
                            Latest Editorial Notes & Actions
                          </span>
                          <span className="text-[10px] font-mono text-stone-500">
                            Audited by Managing Editor
                          </span>
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed font-normal bg-white p-3 border border-stone-200">
                          {order.notes}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => handleDownloadSample(order)}
                              className="px-3.5 py-2 border border-black bg-white text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors flex items-center gap-1.5"
                            >
                              <Download size={13} />
                              <span>{t?.actions?.download_preview || 'Download Progress Record'}</span>
                            </button>

                            <a
                              href={`https://wa.me/85255849939?text=${encodeURIComponent(`[Boya Editorial] Manuscript Inquiry ${order.orderNumber} (${order.subjectCode}): Check on ${order.status}`)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3.5 py-2 border border-black bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors flex items-center gap-1.5"
                            >
                              <MessageCircle size={13} />
                              <span>{t?.actions?.contact_writer || 'Direct WhatsApp Support'}</span>
                            </a>
                          </div>

                          <span className="text-[10px] font-mono text-stone-400">
                            Reference: {order.orderNumber}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Author Instructions */}
                    <div className="border border-stone-200 p-5 bg-stone-50">
                      <label className="block text-xs font-bold uppercase text-stone-700 mb-2 tracking-wider">
                        {language === 'en' 
                          ? 'Submit Author Instruction / Additional Journal Guideline'
                          : '提交作者修改反饋或補充目標期刊要求 (支持國家社科基金/教育部課題編號標註)'
                        }
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={feedbackText[order.id] || ''}
                          onChange={(e) => setFeedbackText({ ...feedbackText, [order.id]: e.target.value })}
                          placeholder={language === 'en' 
                            ? 'e.g., Target journal uses Chicago 17th Notes & Bibliography style...' 
                            : '例如：期刊要求採用 Chicago 第17版引註體例，請協助校準文獻格式...'
                          }
                          className="flex-1 bg-white border border-stone-300 px-3 py-2 text-xs text-black outline-none focus:border-black font-sans"
                        />
                        <button
                          onClick={() => handleSubmitFeedback(order.id)}
                          className="px-5 py-2 border border-black bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Send size={13} />
                          <span>{language === 'en' ? 'Submit' : '送出'}</span>
                        </button>
                      </div>

                      {feedbackSuccess === order.id && (
                        <div className="mt-2 text-xs font-mono text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 size={13} />
                          <span>
                            {language === 'en' 
                              ? 'Author notes dispatched to assigned field editor. Confirmation within 2 hours.' 
                              : '作者反饋已同步傳送至學科責任主編，我們將於 2 小時內回覆。'
                            }
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;
