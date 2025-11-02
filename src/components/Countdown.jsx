import { useState, useEffect } from 'react';
import { FaClock, FaCalendarAlt, FaGift } from 'react-icons/fa';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    // Use local time instead of UTC
    const now = new Date();
    
    // Christmas Day - December 25th of current year, local time
    const christmas = new Date(now.getFullYear(), 11, 25); // Month is 0-indexed (11 = December)
    
    // Countdown start - November 2nd of current year, local time
    const countdownStart = new Date(now.getFullYear(), 10, 2); // Month is 0-indexed (10 = November)
    
    if (now < countdownStart) {
      const difference = countdownStart - now;
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        status: 'until_countdown'
      };
    }
    
    const difference = christmas - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      status: 'until_christmas'
    };
  }

  const getCountdownTitle = () => {
    if (timeLeft.status === 'until_countdown') {
      return "Countdown Begins In";
    }
    return "Time Until Christmas";
  };

  const getCurrentDay = () => {
    const now = new Date();
    const countdownStart = new Date(now.getFullYear(), 10, 2); // November 2nd
    
    if (now < countdownStart) return 0;
    
    const timeDiff = now - countdownStart;
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    // From Nov 2 to Dec 25 is 53 days total
    return Math.min(daysPassed + 1, 53);
  };

  const TimeUnit = ({ value, unit }) => (
    <div className="text-center group">
      <div className="bg-white rounded-2xl shadow-card p-6 min-w-[100px] border border-snow-200 transition-all duration-300 group-hover:shadow-soft group-hover:scale-105">
        <div className="font-playfair text-3xl md:text-4xl text-forest font-bold mb-2">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-deepred font-inter font-medium uppercase tracking-wide">
          {unit}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex items-center justify-center gap-3 mb-6">
        <FaClock className="text-deepred w-6 h-6" />
        <h2 className="font-playfair text-3xl text-pine font-bold">
          {getCountdownTitle()}
        </h2>
        <FaGift className="text-deepred w-6 h-6" />
      </div>
      
      <div className="flex items-center justify-center gap-3 mb-8">
        <FaCalendarAlt className="text-charcoal/60 w-5 h-5" />
        <span className="text-charcoal/80 font-inter font-medium text-lg">
          Day {getCurrentDay()} of 53
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
        {Object.entries(timeLeft).map(([unit, value]) => {
          if (unit === 'status') return null;
          return <TimeUnit key={unit} value={value} unit={unit} />;
        })}
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto bg-white rounded-full shadow-card p-1 border border-snow-200">
        <div 
          className="bg-gradient-to-r from-deepred to-gold h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${(getCurrentDay() / 53) * 100}%` }}
        />
      </div>
    </div>
  );
}