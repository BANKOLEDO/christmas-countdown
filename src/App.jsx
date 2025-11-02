import { useState, useEffect } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import SurpriseBox from './components/SurpriseBox';
import Footer from './components/Footer';

function App() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Create interactive snowflakes
    const flakes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
      size: 2 + Math.random() * 3
    }));
    setSnowflakes(flakes);
  }, []);

  // Christmas SVG Icons as React Components
  const ChristmasStar = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
    </svg>
  );

  const ChristmasTree = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 20h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5zm-2-4h-13c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h13c.276 0 .5.224.5.5s-.224.5-.5.5zm-3-4h-7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7c.276 0 .5.224.5.5s-.224.5-.5.5zm-5-4h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5zm6.5-4.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5z"/>
    </svg>
  );

  const GiftBox = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 6v4h-20v-4c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 2h-16v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-12zm-10 2h-4v10h4v-10zm6 0h-4v10h4v-10zm-8-8h-2v2h2v-2zm6 0h-2v2h2v-2z"/>
    </svg>
  );

  const Bell = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32v-.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-2.86.68-4.5 3.24-4.5 6.32v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  );

  const CandyCane = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2v-16c0-1.1-.9-2-2-2zm-1 2h2v4h-2v-4zm0 6h2v4h-2v-4zm0 6h2v4h-2v-4z"/>
    </svg>
  );

  const Ornament = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-2.21 0-4 1.79-4 4 0 1.1.45 2.1 1.17 2.83l-2.12 2.12c-.78-.78-1.28-1.85-1.28-3.05 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.2-.5 2.27-1.28 3.05l-2.12-2.12c.72-.73 1.17-1.73 1.17-2.83 0-2.21-1.79-4-4-4zm0 8c-2.21 0-4 1.79-4 4 0 1.1.45 2.1 1.17 2.83l-2.12 2.12c-.78-.78-1.28-1.85-1.28-3.05 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.2-.5 2.27-1.28 3.05l-2.12-2.12c.72-.73 1.17-1.73 1.17-2.83 0-2.21-1.79-4-4-4z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-snow relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Snowflakes */}
        {snowflakes.map(flake => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-forest/10 animate-snowfall"
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
            }}
          />
        ))}

        {/* Christmas-themed SVG Decorations - Positioned to avoid text */}
        <div className="absolute top-10 left-5 w-8 h-8 text-forest/15 animate-float">
          <ChristmasTree />
        </div>
        
        <div className="absolute top-20 right-8 w-6 h-6 text-deepred/15 animate-float" style={{ animationDelay: '1.5s' }}>
          <GiftBox />
        </div>
        
        <div className="absolute top-1/3 left-8 w-7 h-7 text-gold/20 animate-float" style={{ animationDelay: '3s' }}>
          <ChristmasStar />
        </div>
        
        <div className="absolute top-1/2 right-12 w-5 h-5 text-forest/20 animate-float" style={{ animationDelay: '2s' }}>
          <Bell />
        </div>
        
        <div className="absolute bottom-1/3 left-10 w-6 h-6 text-deepred/15 animate-float" style={{ animationDelay: '4s' }}>
          <CandyCane />
        </div>
        
        <div className="absolute bottom-20 right-6 w-7 h-7 text-gold/15 animate-float" style={{ animationDelay: '2.5s' }}>
          <Ornament />
        </div>

        {/* Additional smaller decorations for corners */}
        <div className="absolute top-5 right-5 w-4 h-4 text-forest/10">
          <ChristmasStar />
        </div>
        
        <div className="absolute bottom-5 left-5 w-4 h-4 text-deepred/10">
          <GiftBox />
        </div>
        
        <div className="absolute bottom-5 right-5 w-4 h-4 text-gold/10">
          <Bell />
        </div>

        {/* Organic Christmas Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              /* Swirling gold accents */
              radial-gradient(ellipse 40% 40% at 10% 20%, #D7B65F 0px, transparent 50%),
              radial-gradient(ellipse 30% 30% at 90% 30%, #D7B65F 0px, transparent 50%),
              radial-gradient(ellipse 35% 35% at 20% 80%, #D7B65F 0px, transparent 50%),
              
              /* Forest green organic shapes */
              radial-gradient(ellipse 25% 40% at 80% 70%, #1E5631 0px, transparent 50%),
              radial-gradient(ellipse 30% 25% at 40% 40%, #1E5631 0px, transparent 50%),
              radial-gradient(ellipse 35% 30% at 60% 10%, #1E5631 0px, transparent 50%),
              
              /* Deep red festive spots */
              radial-gradient(circle at 15% 60%, #B22222 0px, transparent 30%),
              radial-gradient(circle at 85% 15%, #B22222 0px, transparent 25%),
              radial-gradient(circle at 70% 85%, #B22222 0px, transparent 35%),
              
              /* Soft white snow puffs */
              radial-gradient(circle at 30% 25%, rgba(255,255,255,0.3) 0px, transparent 20%),
              radial-gradient(circle at 75% 45%, rgba(255,255,255,0.2) 0px, transparent 15%),
              radial-gradient(circle at 45% 75%, rgba(255,255,255,0.25) 0px, transparent 18%)
            `,
            backgroundSize: 'cover',
            backgroundBlendMode: 'soft-light'
          }}
        />

        {/* Twinkling Star Field */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 75% 15%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 15% 75%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 85% 65%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 50% 90%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 90% 35%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 10% 50%, #D7B65F 1px, transparent 1px),
              radial-gradient(circle at 65% 25%, #D7B65F 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px',
            animation: 'twinkle 3s ease-in-out infinite'
          }}
        />

        {/* Soft Color Wash */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `
              radial-gradient(ellipse at top left, #D7B65F 0%, transparent 50%),
              radial-gradient(ellipse at top right, #1E5631 0%, transparent 50%),
              radial-gradient(ellipse at bottom left, #B22222 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, #D7B65F 0%, transparent 50%)
            `
          }}
        />

        {/* Very subtle border elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deepred/10 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Header />
          <Countdown />
          <SurpriseBox />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;