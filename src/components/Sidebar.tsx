import { PlayCircle, Terminal, Lock, Mail, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

type TabType = 'lessons' | 'prompts' | 'security' | 'consulting';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onLogout: () => void;
}

const navItems = [
  { id: 'lessons' as TabType, label: '10 Video Lộ trình', icon: PlayCircle },
  { id: 'prompts' as TabType, label: '6 Nghiệp vụ AI', icon: Terminal },
  { id: 'security' as TabType, label: 'Bảo mật dữ liệu', icon: Lock },
  { id: 'consulting' as TabType, label: 'Đăng ký tư vấn', icon: Mail },
];

export function Sidebar({ activeTab, onTabChange, onLogout }: SidebarProps) {
  const { user } = useAuth();

  return (
    <aside className="w-80 glass-sidebar text-primary-foreground hidden lg:flex flex-col sticky top-0 h-screen z-50">
      <div className="p-10">
        <div className="flex items-center space-x-3 mb-12">
          <ShieldCheck className="text-blue-300 w-8 h-8" />
          <h1 className="text-[11px] font-black uppercase leading-tight tracking-tighter">
            BK AI <br/>Professional
          </h1>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "nav-btn w-full flex items-center space-x-4 px-6 py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest",
                activeTab === item.id 
                  ? "active" 
                  : "text-blue-100 hover:bg-white/10"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-8 bg-black/10">
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src={user?.avatar || ''} 
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-blue-400 bg-white"
          />
          <div className="overflow-hidden">
            <p className="text-[11px] font-black uppercase tracking-tight truncate w-32">
              {user?.name || '...'}
            </p>
            <p className="text-[9px] text-blue-300 font-bold">BK-AI Member</p>
          </div>
        </div>
        <button 
          onClick={onLogout}
          className="w-full bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
        >
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
