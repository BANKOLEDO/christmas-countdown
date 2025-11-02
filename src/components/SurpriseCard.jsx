import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaUtensils, 
  FaMusic, 
  FaLightbulb, 
  FaHeart,
  FaCalendarDay,
  FaQuoteLeft
} from 'react-icons/fa';

export default function SurpriseCard({ surprise }) {
  const getIcon = (type) => {
    const icons = {
      activity: <FaUsers className="w-12 h-12" />,
      food: <FaUtensils className="w-12 h-12" />,
      music: <FaMusic className="w-12 h-12" />,
      fact: <FaLightbulb className="w-12 h-12" />,
      kindness: <FaHeart className="w-12 h-12" />
    };
    return icons[type] || <FaCalendarDay className="w-12 h-12" />;
  };

  const getColor = (type) => {
    const colors = {
      activity: 'text-deepred',
      food: 'text-forest', 
      music: 'text-gold',
      fact: 'text-blue-600',
      kindness: 'text-pink-600'
    };
    return colors[type] || 'text-deepred';
  };

  const getBackground = (type) => {
    const backgrounds = {
      activity: 'from-deepred/5 to-deepred/10',
      food: 'from-forest/5 to-forest/10',
      music: 'from-gold/5 to-gold/10',
      fact: 'from-blue-500/5 to-blue-600/10',
      kindness: 'from-pink-500/5 to-pink-600/10'
    };
    return backgrounds[type] || 'from-charcoal/5 to-charcoal/10';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      className={`bg-gradient-to-br ${getBackground(surprise.type)} rounded-2xl shadow-soft p-8 max-w-md mx-auto border border-white/50 backdrop-blur-sm`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 rounded-2xl bg-white/80 shadow-card ${getColor(surprise.type)}`}>
          {getIcon(surprise.type)}
        </div>
        <div className="flex-1">
          <h3 className="font-playfair text-2xl text-pine font-bold mb-2">
            {surprise.title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-charcoal/60 font-inter text-sm">
            <FaCalendarDay className="w-3 h-3" />
            <span>Day {surprise.day} of 53</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <FaQuoteLeft className="absolute -top-2 -left-1 text-charcoal/20 w-6 h-6" />
        <p className="text-charcoal/90 font-inter text-lg leading-relaxed pl-6">
          {surprise.message}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/30">
        <div className="flex justify-between items-center text-sm">
          <span className="text-charcoal/60 font-inter">
            {surprise.type.charAt(0).toUpperCase() + surprise.type.slice(1)} Surprise
          </span>
          <span className="text-charcoal/40 font-inter">
            #Day{surprise.day.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </motion.div>
  );
}