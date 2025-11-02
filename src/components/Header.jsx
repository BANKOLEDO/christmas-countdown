import { FaStar, FaSnowflake, FaGift, FaTree } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center gap-4 mb-6">
        <FaSnowflake className="text-forest w-6 h-6 animate-twinkle" />
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-forest">
          Christmas Countdown
        </h1>
        <FaSnowflake className="text-forest w-6 h-6 animate-twinkle" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="overflow-hidden whitespace-nowrap mb-4">
        <div className="animate-marquee flex flex-row space-x-4 text-charcoal/80 text-lg font-inter font-medium">
          <span className="flex flex-row gap-2"><FaTree className="text-forest w-6 h-6" /> Counting down to Christmas worldwide — one day, one surprise at a time • </span>
          <span className="flex flex-row gap-2"><FaGift className="text-deepred w-6 h-6" /> Spread joy and kindness throughout the season •</span>
          <span className="flex flex-row gap-2"><FaStar className="text-forest w-6 h-6" /> Embrace the warmth of holiday spirit • </span>
        </div>
      </div>

      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
    </header>
  );
}