import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, Calendar, Radio, Compass, ShieldAlert } from 'lucide-react';

const EarthquakeMagnitudeGraphic: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-6 sm:p-8 rounded-3xl border-2 border-red-600/50 shadow-2xl my-8 relative overflow-hidden">
      {/* Background Seismic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-25"></div>
      
      {/* Radial glow around the epicenter */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-crimson"></span>
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-red-400">
              Official Seismic Event Record
            </span>
          </div>

          <div className="flex items-center gap-2 bg-red-950/80 border border-red-700/60 px-3 py-1 rounded-full text-xs font-semibold text-red-200">
            <Calendar size={13} className="text-brand-supernova" />
            <span>Monday, 10th August 2026 (Lunes 10 de Agosto)</span>
          </div>
        </div>

        {/* Main 7.4 Magnitude Display & Animated Waves */}
        <div className="grid md:grid-cols-12 gap-6 items-center">
          
          {/* Magnitude Big Number & Epicenter Shockwave */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-red-600/30 text-center relative overflow-hidden group">
            
            {/* Animated Expanding Shockwave Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 border-2 border-red-500/40 rounded-full animate-ping"></div>
              <div className="w-40 h-40 border border-brand-supernova/30 rounded-full animate-pulse"></div>
            </div>

            <span className="text-xs uppercase font-black tracking-widest text-brand-supernova mb-1 relative z-10 flex items-center gap-1">
              <Radio size={14} className="animate-spin" /> MOMENT MAGNITUDE (Mw)
            </span>
            
            <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 tracking-tighter drop-shadow-md my-1 relative z-10">
              7.4
            </div>

            <div className="inline-flex items-center gap-1.5 bg-red-600/30 border border-red-500 text-red-200 text-xs font-bold px-3 py-1 rounded-full relative z-10 mt-1">
              <ShieldAlert size={14} className="text-brand-supernova" />
              <span>Major Destructive Earthquake</span>
            </div>

            <p className="text-[11px] text-gray-400 mt-3 relative z-10">
              Recorded on Monday, August 10, 2026 across Colombian national territory.
            </p>
          </div>

          {/* Richter Scale Level Bar & Live Seismograph Wave */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Live Seismograph Display */}
            <div className="bg-gray-900/90 border border-gray-800 p-4 rounded-2xl relative overflow-hidden">
              <div className="flex justify-between items-center text-xs text-gray-400 font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-gray-200">
                  <Activity size={14} className="text-red-400 animate-pulse" /> Seismograph Shockwave Simulation
                </span>
                <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800">
                  Peak Ground Acceleration
                </span>
              </div>

              {/* Animated SVG Seismograph Line */}
              <div className="w-full h-16 relative overflow-hidden flex items-center">
                <svg className="w-full h-full text-red-500" viewBox="0 0 500 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="seismicGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Seismograph path simulating 7.4 tremor spikes */}
                  <path
                    d="M 0 40 L 40 40 L 60 38 L 80 42 L 100 40 L 120 40 L 130 35 L 140 45 L 150 20 L 160 60 L 170 5 L 180 75 L 190 0 L 200 80 L 210 10 L 220 70 L 230 18 L 240 62 L 250 25 L 260 55 L 275 35 L 290 48 L 310 38 L 330 42 L 350 40 L 380 40 L 400 39 L 430 41 L 500 40"
                    fill="none"
                    stroke="url(#seismicGlow)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Richter Magnitude Progress Scale */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-300">Richter Scale Severity</span>
                <span className="text-amber-400 font-bold">7.4 / 10.0 (Severe / Major)</span>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full h-3.5 bg-gray-800 rounded-full overflow-hidden p-0.5 border border-gray-700 relative">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 via-amber-500 to-red-600 rounded-full transition-all duration-1000 relative"
                  style={{ width: '74%' }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Scale Labels */}
              <div className="flex justify-between text-[10px] font-bold text-gray-500 pt-0.5">
                <span>0.0 Minor</span>
                <span>4.0 Moderate</span>
                <span>6.0 Strong</span>
                <span className="text-amber-400 font-extrabold">▶ 7.4 Major</span>
                <span>9.0+ Great</span>
              </div>
            </div>

          </div>

        </div>

        {/* Informative Summary Bar */}
        <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Compass size={16} className="text-brand-supernova shrink-0" />
            <span><strong>Date of Event:</strong> Monday, 10 August 2026 (Lunes 10 de Agosto de 2026)</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} className="text-red-400 shrink-0" />
            <span><strong>Destructive Power:</strong> Energy equivalent to massive tectonic displacement.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EarthquakeMagnitudeGraphic;
