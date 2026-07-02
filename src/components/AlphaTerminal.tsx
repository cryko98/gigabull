import { useState } from 'react';
import { GIGABULL_QUOTES } from '../data';
import { Volume2, ShieldAlert, Award, Zap } from 'lucide-react';

export default function AlphaTerminal() {
  const [currentQuote, setCurrentQuote] = useState(GIGABULL_QUOTES[0]);
  const [powerLevel, setPowerLevel] = useState(45);
  const [isPumping, setIsPumping] = useState(false);
  const [candles, setCandles] = useState<{ id: number; left: number; height: number }[]>([]);

  const handleNextQuote = () => {
    const currentIndex = GIGABULL_QUOTES.findIndex(q => q.id === currentQuote.id);
    const nextIndex = (currentIndex + 1) % GIGABULL_QUOTES.length;
    setCurrentQuote(GIGABULL_QUOTES[nextIndex]);
    
    // Slight shake effect on elements
    const terminalEl = document.getElementById('alpha-terminal-card');
    if (terminalEl) {
      terminalEl.classList.add('animate-bounce');
      setTimeout(() => terminalEl.classList.remove('animate-bounce'), 500);
    }
  };

  const handlePump = () => {
    setIsPumping(true);
    setPowerLevel(prev => Math.min(100, prev + 5));
    
    // Spawn a flying green candle
    const id = Date.now();
    const newCandle = {
      id,
      left: Math.random() * 80 + 10, // random horizontal position
      height: Math.random() * 60 + 40,
    };
    setCandles(prev => [...prev, newCandle]);

    // Cleanup candle after animation
    setTimeout(() => {
      setCandles(prev => prev.filter(c => c.id !== id));
    }, 1500);

    // Vibration feedback if supported
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    setTimeout(() => setIsPumping(false), 200);
  };

  const resetPower = () => {
    setPowerLevel(20);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12" id="alpha-generator">
      {/* Absolute positioning for flying candles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {candles.map(c => (
          <div
            key={c.id}
            className="absolute bottom-10 flex flex-col items-center animate-bounce duration-1000"
            style={{
              left: `${c.left}%`,
              animation: 'floatUp 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards',
            }}
          >
            {/* Green candle body */}
            <div className="w-[3px] bg-emerald-500" style={{ height: `${c.height / 3}px` }} />
            <div className="w-4 bg-emerald-500 border border-emerald-400 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.6)]" style={{ height: `${c.height}px` }} />
            <div className="w-[3px] bg-emerald-500" style={{ height: `${c.height / 3}px` }} />
            <span className="text-emerald-400 font-mono text-[10px] font-bold mt-1 shadow-black text-shadow">+{(c.height * 12.5).toFixed(0)}%</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-280px) scale(1.2);
          }
        }
      `}</style>

      {/* Decorative metal rivets & smoke effects around the box using modern translucent white borders */}
      <div className="absolute inset-0 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
        
        {/* Left column: Alpha Quote Engine */}
        <div 
          id="alpha-terminal-card"
          className="flex flex-col justify-between p-6 rounded-2xl bg-black/40 border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)] transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <p className="font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase">GIGABULL RAGE BROADCAST</p>
            </div>
            
            <div className="relative min-h-[140px] flex items-center mb-6">
              <span className="absolute -top-6 -left-2 text-6xl font-serif text-white/5 pointer-events-none select-none">“</span>
              <p className="text-lg sm:text-xl font-light text-neutral-200 tracking-wide leading-relaxed italic relative z-10">
                {currentQuote.text}
              </p>
              <span className="absolute -bottom-12 -right-2 text-6xl font-serif text-white/5 pointer-events-none select-none">”</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-4 border-t border-white/5 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white uppercase tracking-wider font-display italic">{currentQuote.author}</p>
                <p className="text-[10px] font-mono text-gray-500">Supercycle Overlord</p>
              </div>
            </div>

            <button
              onClick={handleNextQuote}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-95 cursor-pointer"
            >
              RAGE SNORT
            </button>
          </div>
        </div>

        {/* Right column: Interactive Bull Powerup Indicator */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-black/40 border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white animate-pulse" />
                <p className="font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase">SUPERCYCLE CHART BOOSTER</p>
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">Click to Pump</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light mb-6 leading-relaxed text-left">
              Every click pumps the green candle engine. Fuel the GigaBull run, ignite the pressure cooker, and force the bear liquidations.
            </p>

            {/* Progress/Power bar */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-gray-500 uppercase tracking-wider">BULL RUN MOMENTUM</span>
                <span className={`font-bold transition-all duration-300 ${powerLevel > 80 ? 'text-white animate-pulse' : 'text-gray-300'}`}>
                  {powerLevel}% {powerLevel >= 100 ? 'MAX RAGE' : ''}
                </span>
              </div>
              <div className="h-4 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden p-[2px]">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    powerLevel >= 100 
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-pulse' 
                      : powerLevel > 70
                        ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                        : 'bg-neutral-600'
                  }`}
                  style={{ width: `${powerLevel}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handlePump}
              disabled={powerLevel >= 100}
              className={`w-full py-3.5 rounded-full font-display text-xl tracking-widest uppercase transition-all duration-150 cursor-pointer ${
                powerLevel >= 100
                  ? 'bg-white/5 text-gray-500 border border-white/10 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-200 text-black font-bold active:scale-95'
              }`}
            >
              {powerLevel >= 100 ? 'SUPERCYCLE INITIATED' : 'PUMP THE GIGABULL'}
            </button>

            {powerLevel >= 100 && (
              <button
                onClick={resetPower}
                className="w-full text-center text-[10px] font-mono text-gray-500 hover:text-gray-400 underline transition-colors duration-150 cursor-pointer uppercase tracking-wider"
              >
                Cool down engine and pump again
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
