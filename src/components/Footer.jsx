import { FaHeart, FaReact, FaCoffee } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center mt-16 animate-fade-in">
      <div className="bg-white/80 rounded-2xl shadow-card p-6 max-w-md mx-auto border border-white/50">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-charcoal/80 font-inter font-medium">Built with</span>
          <FaReact className="text-forest w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
           <span className="text-charcoal/80 font-inter font-medium">by <a href="https://devolabanks.vercel.app" target="_blank">Dev Olabanks</a></span>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-charcoal/60 font-inter text-sm">
          <FaCoffee className="w-4 h-4" />
          <span>Christmas {new Date().getFullYear()} • Spread Joy Worldwide</span>
        </div>
        
        <div className="mt-3 text-deepred font-inter text-xs">
          Made for everyone, everywhere to enjoy the holiday spirit
        </div>
      </div>
    </footer>
  );
}