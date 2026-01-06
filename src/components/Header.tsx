import { useEffect, useState } from 'react';

interface HeaderProps {
  currentLesson?: number;
}

export function Header({ currentLesson = 1 }: HeaderProps) {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('vi-VN'));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-20 bg-card border-b border-border flex items-center justify-between px-6 lg:px-12 sticky top-0 z-40">
      <div className="flex items-center space-x-4">
        <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">
          Hệ thống đào tạo BK-AI
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-[11px] font-bold text-muted-foreground font-mono">
          {time}
        </div>
        <div className="h-6 w-px bg-border hidden sm:block"></div>
        <div className="bg-primary/10 px-4 py-1.5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest hidden sm:block">
          Đang học: Bài {String(currentLesson).padStart(2, '0')}
        </div>
      </div>
    </header>
  );
}
