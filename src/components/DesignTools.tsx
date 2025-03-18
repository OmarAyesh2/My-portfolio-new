import React from 'react';
import { Figma, Paintbrush2, Palette, PenTool, Layers, Wand2 } from 'lucide-react';

const DesignTools = () => {
  const tools = [
    { icon: <Figma />, name: 'Figma' },
    { icon: <Paintbrush2 />, name: 'Photoshop' },
    { icon: <Palette />, name: 'Illustrator' },
    { icon: <PenTool />, name: 'After Effects' },
    { icon: <Layers />, name: 'XD' },
    { icon: <Wand2 />, name: 'Premiere Pro' }
  ];

  // Function to generate random size between min and max
  const getRandomSize = () => {
    const min = 1.5; // Minimum size multiplier
    const max = 2.5; // Maximum size multiplier
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  // Function to generate position more towards the right
  const getPosition = (index: number) => {
    // Adjust the range to favor the right side
    const minLeft = 40; // Start from 40% of the container width
    const maxLeft = 90; // Up to 90% of the container width
    const left = minLeft + (Math.random() * (maxLeft - minLeft));
    
    // Distribute vertically across the full height
    const top = Math.random() * 80;
    
    return { left, top };
  };

  return (
    <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
      <div className="relative w-full h-full">
        {tools.map((tool, index) => {
          const size = getRandomSize();
          const padding = `${Number(size) * 0.75}rem`;
          const position = getPosition(index);
          
          return (
            <div
              key={tool.name}
              className="design-tool absolute"
              style={{
                '--index': index,
                animation: `floatTool 3s infinite ${index * 0.5}s`,
                left: `${position.left}%`,
                top: `${position.top}%`,
              } as React.CSSProperties}
            >
              <div 
                className="tool-content bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:scale-110 transition-transform"
                style={{
                  padding: padding,
                }}
              >
                {React.cloneElement(tool.icon, { 
                  className: 'text-amber-400',
                  style: {
                    width: `${Number(size)}rem`,
                    height: `${Number(size)}rem`,
                  },
                  'aria-label': tool.name
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignTools;