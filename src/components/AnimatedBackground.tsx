import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="gradient-overlay"></div>
      {[...Array(40)].map((_, i) => (
        <div key={i} className="geometric-shape" style={{
          '--delay': `${Math.random() * 5}s`,
          '--duration': `${8 + Math.random() * 6}s`,
          '--size': `${30 + Math.random() * 40}px`,
          '--radius': `${Math.random() * 40}%`,
          '--rotation': `${Math.random() * 360}deg`,
          '--start-x': `${Math.random() * 100}%`,
          '--start-y': `${Math.random() * 100}%`,
          '--end-x': `${Math.random() * 100}%`,
          '--end-y': `${Math.random() * 100}%`,
        } as React.CSSProperties} />
      ))}
    </div>
  );
};

export default AnimatedBackground;