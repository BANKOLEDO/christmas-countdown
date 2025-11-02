import { useState, useEffect } from 'react';
import SurpriseCard from './SurpriseCard';
import surprises from '../data/surprises.json';
import { FaCalendarDay, FaLock, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function SurpriseBox() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [todaySurprise, setTodaySurprise] = useState(null);
  const [canReveal, setCanReveal] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const countdownStart = new Date(Date.UTC(new Date().getFullYear(), 10, 2));
    const now = new Date();
    
    if (now >= countdownStart) {
      const timeDiff = now - countdownStart;
      const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
      setCurrentDay(day);
      
      if (day <= 53) {
        setCanReveal(true);
        const lastOpenedDay = localStorage.getItem('lastOpenedDay');
        
        if (lastOpenedDay === day.toString()) {
          setTodaySurprise(surprises[day - 1]);
          setShowSurprise(true);
        }
      }
    }
  }, []);

  const revealSurprise = async () => {
    if (currentDay <= 53 && !isAnimating) {
      setIsAnimating(true);
      
      // Add a small delay for animation
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setTodaySurprise(surprises[currentDay - 1]);
      setShowSurprise(true);
      localStorage.setItem('lastOpened', new Date().toISOString());
      localStorage.setItem('lastOpenedDay', currentDay.toString());
      
      setIsAnimating(false);
    }
  };

  const resetSurprise = () => {
    setShowSurprise(false);
    setTodaySurprise(null);
  };

  const getButtonContent = () => {
    const countdownStart = new Date(Date.UTC(new Date().getFullYear(), 10, 2));
    const now = new Date();
    
    if (now < countdownStart) {
      return {
        text: "Countdown starts November 2nd",
        icon: <FaLock className="w-5 h-5" />,
        disabled: true,
        variant: 'disabled'
      };
    }
    
    if (currentDay > 53) {
      return {
        text: "Christmas Countdown Complete!",
        icon: <FaCheck className="w-5 h-5" />,
        disabled: true,
        variant: 'complete'
      };
    }
    
    return {
      text: `Reveal Day ${currentDay} Surprise`,
      icon: <FaCalendarDay className="w-5 h-5" />,
      disabled: false,
      variant: 'active'
    };
  };

  const buttonContent = getButtonContent();

  const buttonVariants = {
    disabled: 'bg-charcoal/20 text-charcoal/40 cursor-not-allowed border-charcoal/10',
    complete: 'bg-forest/20 text-forest border-forest/30',
    active: `bg-white text-pine border-deepred/20 hover:border-deepred/40 hover:shadow-soft active:scale-95 ${
      isAnimating ? 'animate-pulse-soft' : ''
    }`
  };

  return (
    <div className="text-center animate-slide-up">
      {!showSurprise ? (
        <div className="space-y-6">
          <button
            onClick={revealSurprise}
            disabled={buttonContent.disabled || isAnimating}
            className={`
              px-8 py-5 rounded-2xl font-inter font-semibold text-lg 
              transition-all duration-300 shadow-card border-2
              flex items-center gap-3 mx-auto min-w-[280px] justify-center
              ${buttonVariants[buttonContent.variant]}
            `}
          >
            {buttonContent.icon}
            {buttonContent.text}
            {buttonContent.variant === 'active' && <FaArrowRight className="w-4 h-4" />}
          </button>
          
          {buttonContent.variant === 'active' && (
            <p className="text-charcoal/60 font-inter text-sm max-w-md mx-auto">
              Discover today's special holiday message or activity. 
              Each surprise is unique and designed to spread Christmas cheer!
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <SurpriseCard surprise={todaySurprise} />
          <button
            onClick={resetSurprise}
            className="px-6 py-3 bg-white text-charcoal/70 rounded-xl font-inter font-medium 
                     transition-all duration-300 hover:bg-charcoal/5 hover:text-charcoal 
                     border border-charcoal/10 flex items-center gap-2 mx-auto"
          >
            <FaCalendarDay className="w-4 h-4" />
            Close Today's Surprise
          </button>
        </div>
      )}
    </div>
  );
}