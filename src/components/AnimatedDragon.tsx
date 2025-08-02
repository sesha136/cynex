import { useState, useEffect } from 'react';

export default function AnimatedDragon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dragon background image */}
      <div 
        className="absolute inset-0 opacity-40 animate-dragon-float"
        style={{
          backgroundImage: "url('/lovable-uploads/c7a51d5e-331d-4302-9c93-23b01cb27fcc.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Floating ember particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ember-rise opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ember-rise opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ember-rise opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full animate-ember-rise opacity-30" style={{ animationDelay: '3s' }} />
      
      {/* Fire glow overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-fire-pulse" />
        <div className="absolute bottom-32 right-32 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-fire-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-fire-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}