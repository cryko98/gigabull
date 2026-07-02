import { useState } from 'react';
import { Copy, Check, Menu, X, ArrowRight, Wallet, Flame, TrendingUp, Compass, MessageSquare, Twitter, Layers, Lock } from 'lucide-react';
import SmokeEffect from './components/SmokeEffect';
import AlphaTerminal from './components/AlphaTerminal';
import { TOKEN_CONFIG, BUY_STEPS, TOKENOMICS } from './data';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(TOKEN_CONFIG.ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-neutral-800 selection:text-white font-sans relative overflow-x-hidden">
      {/* 1. Smoke background effect */}
      <SmokeEffect />

      {/* Editorial Aesthetic Spotlights */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-gray-500/20 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] bg-gradient-to-r from-gray-400/10 to-transparent rounded-full blur-[100px]"></div>
      </div>

      {/* Grid overlay for vintage/retro industrial texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Toast Notification for copying CA */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-neutral-900 border border-neutral-800 text-white px-5 py-3.5 rounded-xl shadow-2xl transition-all duration-300 transform ${
          copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        <span className="font-mono text-sm tracking-wider font-bold">CA COPIED TO CLIPBOARD!</span>
      </div>

      {/* 2. Sticky Header / Navigation */}
      <header className="sticky top-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={TOKEN_CONFIG.logo} 
              alt="GigaBull Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border border-white/20 object-cover transition-transform duration-300 group-hover:rotate-12" 
            />
            <span className="font-display text-2xl tracking-tighter uppercase italic font-black text-white group-hover:text-neutral-300 transition-colors">
              The GigaBull
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">The Boss</a>
            <a href="#alpha-generator" className="hover:text-white transition-colors duration-200">Alpha Generator</a>
            <a href="#how-to-buy" className="hover:text-white transition-colors duration-200">How To Buy</a>
            <a href="#tokenomics" className="hover:text-white transition-colors duration-200">Tokenomics</a>
          </nav>

          {/* Action Buttons & Socials */}
          <div className="hidden md:flex items-center gap-4">
            {/* Telegram Link */}
            <a 
              href={TOKEN_CONFIG.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              title="Telegram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
              </svg>
            </a>

            {/* Twitter/X Link */}
            <a 
              href={TOKEN_CONFIG.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              title="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Buy now on pump.fun */}
            <a 
              href={TOKEN_CONFIG.pumpfun}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-bold uppercase tracking-widest transition-all duration-200"
            >
              PUMP IT NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050505]/95 border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5"
            >
              The Boss
            </a>
            <a 
              href="#alpha-generator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5"
            >
              Alpha Generator
            </a>
            <a 
              href="#how-to-buy" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5"
            >
              How To Buy
            </a>
            <a 
              href="#tokenomics" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5"
            >
              Tokenomics
            </a>

            <div className="pt-4 flex items-center gap-4">
              <a 
                href={TOKEN_CONFIG.telegram}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                </svg>
                Telegram
              </a>
              <a 
                href={TOKEN_CONFIG.twitter}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
            </div>
            <a 
              href={TOKEN_CONFIG.pumpfun}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-wider"
            >
              PUMP IT NOW
            </a>
          </div>
        )}
      </header>

      {/* 3. Hero Section (Industrial, Bold, Metallic) */}
      <section className="relative z-10 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Logo Badge Container */}
          <div className="relative inline-block mb-8 animate-float">
            {/* Pulsing circular glow effect */}
            <div className="absolute -inset-4 bg-white/5 rounded-full blur-3xl animate-pulse-slow -z-10" />
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[2px] bg-gradient-to-b from-neutral-600 via-neutral-950 to-neutral-800 shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              <img 
                src={TOKEN_CONFIG.logo} 
                alt="The GigaBull" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border border-black/80 grayscale contrast-125"
              />
            </div>
            {/* Mini Ticker Tag */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[10px] font-mono tracking-widest font-extrabold uppercase shadow-lg border border-neutral-800">
              {TOKEN_CONFIG.ticker}
            </span>
          </div>

          {/* Gritty Metallic Tall Text Title (Like the attached image) */}
          <div className="mb-6 relative">
            <h1 
              className="font-display text-[14vw] sm:text-8xl md:text-[8rem] tracking-tighter uppercase font-black italic text-white leading-none drop-shadow-2xl"
              style={{
                letterSpacing: '-0.04em',
              }}
            >
              GIGABULL
            </h1>
            <p className="text-gray-500 uppercase text-xs sm:text-sm tracking-[0.3em] font-bold mt-2 font-wide">
              THE CHIEF OF THE SUPERCYCLE
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed mb-10 px-4">
            The market sleepers have woken up. Red candles are being pulverized. The legendary <span className="text-white font-bold">{TOKEN_CONFIG.name}</span> has stepped onto the Solana network to claim his throne.
          </p>

          {/* Contract Address Section */}
          <div className="max-w-2xl mx-auto px-4 mb-12">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-1">
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">CONTRACT:</span>
                <span className="font-mono text-sm sm:text-base font-bold text-gray-300 tracking-wider break-all text-left">
                  {TOKEN_CONFIG.ca}
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="px-6 py-3.5 sm:py-2.5 rounded-xl bg-white hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    COPIED
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    COPY CA
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Core Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <a 
              href={TOKEN_CONFIG.pumpfun}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 fill-current" />
              PUMP THE GIGABULL
            </a>
            
            <a 
              href={TOKEN_CONFIG.telegram}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              JOIN THE TELEGRAM
            </a>
          </div>

        </div>
      </section>

      {/* 4. About Section with 3:1 Banner */}
      <section className="relative z-10 py-20 bg-black/50 border-y border-white/10" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white font-black italic uppercase mb-2">
              THE STORY OF GIGABULL
            </h2>
            <div className="w-20 h-[2px] bg-white/10 mx-auto" />
          </div>

          {/* Banner container with steel/concrete frame */}
          <div className="relative w-full aspect-[3/1] mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-neutral-950/25 mix-blend-color z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
            <img 
              src={TOKEN_CONFIG.banner} 
              alt="GigaBull Banner" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none animate-snort grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Story contents grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                <TrendingUp className="w-3.5 h-3.5 text-white" />
                SUPERCYCLE IS ENGAGED
              </div>
              
              <h3 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase tracking-tighter italic font-black leading-tight">
                WHO IS THE BOSS? <br />
                <span className="text-white underline decoration-white/20 underline-offset-8">THE GIGABULL IS THE BOSS.</span>
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                While other meme coins were lazily grazing on safe pastures, shivering with fear at every minor market dip, <span className="text-white font-bold">GigaBull</span> was in the subterranean iron dungeon. He was hitting the weights, bench-pressing massive red liquidation candles, and preparing for the ultimate breakthrough.
              </p>

              <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                He doesn't ask for permission. He doesn't read the charts—he commands them. GigaBull is the most shredded, alpha-driven brawler to ever stamp his hoof on the Solana network. When GigaBull steps into the arena, the bears vanish, green bars erupt, and the legendary supercycle is unleashed.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white/5 border border-white/10 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
              {/* Subtle design element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/[0.02] rounded-full pointer-events-none" />
              
              <div className="space-y-4">
                <Flame className="w-12 h-12 text-white/80 animate-pulse-slow" />
                <h4 className="font-display text-2xl tracking-widest text-white uppercase font-black italic">GIGABULL PROCLAMATION</h4>
                <p className="text-gray-300 italic font-light text-sm leading-relaxed">
                  "I did not start the bull market. The bull market was patiently waiting for me to stand up. If you are holding dust, throw it in the fire. We are here to pump, rule, and liquidate every single doubt."
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 mt-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white tracking-widest uppercase italic">GIGABULL</p>
                  <p className="text-[10px] font-mono text-gray-500">Supercycle Sovereign</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-ping" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Interactive Alpha Quote Card / Boost Terminal */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tighter text-white font-black italic uppercase mb-2">
              ALPHA ENGINE
            </h2>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              Broadcast direct from the bull headquarters
            </p>
          </div>
          
          <AlphaTerminal />
        </div>
      </section>

      {/* 6. How To Buy on Pump.fun Section (Sleek Contrast Grid styled like the Editorial Aesthetic code) */}
      <section className="relative z-10 py-20 bg-black/40 border-t border-white/10" id="how-to-buy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white font-black italic uppercase mb-2">
              HOW TO BUY
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              Join the GigaBull legion in 4 steps on Pump.fun
            </p>
            <div className="w-20 h-[2px] bg-white/10 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUY_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Number styling */}
                <span className="absolute -top-4 -right-2 font-display text-6xl text-white/5 select-none font-bold group-hover:text-white/15 transition-colors pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10 pt-4">
                  <h3 className="font-display text-xl text-neutral-200 uppercase tracking-wider mb-3 group-hover:text-white transition-colors font-black italic">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">STEP {step.number} SECURE</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick interactive call-out in extreme white & black editorial contrast */}
          <div className="mt-12 p-8 rounded-2xl bg-white text-black text-center max-w-3xl mx-auto shadow-2xl">
            <h4 className="font-display text-2xl text-black font-black italic uppercase tracking-tight mb-2">
              READY TO LAUNCH?
            </h4>
            <p className="text-xs text-gray-700 mb-6 max-w-xl mx-auto font-medium">
              Our token is launched transparently on pump.fun. Use the CA in your swap to avoid imitators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={TOKEN_CONFIG.pumpfun}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer font-sans"
              >
                GOTO PUMP.FUN
              </a>
              <button
                onClick={copyToClipboard}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 border border-gray-300 text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all cursor-pointer font-sans"
              >
                COPY CONTRACT ADDRESS
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Tokenomics Section */}
      <section className="relative z-10 py-20 border-t border-white/10" id="tokenomics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white font-black italic uppercase mb-2">
              TOKENOMICS
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              Completely transparent, purely community driven
            </p>
            <div className="w-20 h-[2px] bg-white/10 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOKENOMICS.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center group"
              >
                <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
                  {item.label}
                </p>
                <p className="font-display text-4xl text-white tracking-widest font-black italic uppercase mb-3 group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick stats panel */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white uppercase tracking-wider">No Rug, No Dev Dumping</p>
                <p className="text-xs text-gray-400 font-light">100% of tokens are minted directly into pump.fun bonding curve.</p>
              </div>
            </div>
            <div className="h-[1px] w-full md:w-[1px] md:h-10 bg-white/10" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Flame className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Bonding Curve Launch</p>
                <p className="text-xs text-gray-400 font-light">Automatic pool burning upon hitting the target threshold.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Footer Section */}
      <footer className="relative z-10 bg-[#050505] border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img 
                src={TOKEN_CONFIG.logo} 
                alt="GigaBull Logo" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border border-white/20 object-cover" 
              />
              <span className="font-display text-xl tracking-tighter font-black italic text-white uppercase">The GigaBull</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <a href="#about" className="hover:text-white transition-colors">The Boss</a>
              <a href="#alpha-generator" className="hover:text-white transition-colors">Alpha Engine</a>
              <a href="#how-to-buy" className="hover:text-white transition-colors">How To Buy</a>
              <a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Telegram */}
              <a 
                href={TOKEN_CONFIG.telegram}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                title="Telegram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a 
                href={TOKEN_CONFIG.twitter}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                title="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Legal / disclaimer and copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 text-[10px] font-mono text-gray-500">
            <p className="text-center md:text-left leading-relaxed max-w-2xl">
              DISCLAIMER: $GIGABULL is a meme coin created strictly for entertainment purposes with no intrinsic value or expectation of financial return. Cryptocurrencies are highly volatile and risky. Do your own research and buy at your own risk.
            </p>
            <p className="text-gray-600 whitespace-nowrap">
              &copy; {new Date().getFullYear()} The GigaBull Project.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

