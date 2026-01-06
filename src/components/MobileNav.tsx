import { PlayCircle, Terminal, Shield, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabType = 'lessons' | 'prompts' | 'security' | 'consulting';

interface MobileNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const navItems = [
  { id: 'lessons' as TabType, label: 'Bài giảng', icon: PlayCircle },
  { id: 'prompts' as TabType, label: 'Nghiệp vụ', icon: Terminal },
  { id: 'security' as TabType, label: 'Bảo mật', icon: Shield },
  { id: 'consulting' as TabType, label: 'Tư vấn', icon: Mail },
];

export function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border h-20 flex items-center justify-around z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={cn(
            "flex flex-col items-center transition-colors",
            activeTab === item.id ? "text-primary" : "text-muted-foreground"
          )}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-[9px] font-black uppercase mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
