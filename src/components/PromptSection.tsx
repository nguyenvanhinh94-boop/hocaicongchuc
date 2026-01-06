import { useState, useEffect } from 'react';
import { 
  BookOpen, FileText, PieChart, Presentation, Search, Video,
  HardDrive, ExternalLink, Quote
} from 'lucide-react';
import { PROMPTS, type Prompt } from '@/data/courseData';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  FileText,
  PieChart,
  Presentation,
  Search,
  Video,
};

function PromptCard({ 
  prompt, 
  isActive, 
  onClick 
}: { 
  prompt: Prompt; 
  isActive: boolean; 
  onClick: () => void;
}) {
  const Icon = iconMap[prompt.icon] || BookOpen;
  
  return (
    <div 
      onClick={onClick}
      className={cn(
        "prompt-card p-5 bg-card rounded-2xl border border-border shadow-sm cursor-pointer hover:bg-muted transition-all flex items-center space-x-4",
        isActive && "active"
      )}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest">
          Nghiệp vụ {prompt.id}
        </p>
        <p className="text-[11px] font-bold text-card-foreground uppercase tracking-tight">
          {prompt.title}
        </p>
      </div>
    </div>
  );
}

function PromptDetail({ prompt }: { prompt: Prompt }) {
  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt.text);
    toast.success('Đã sao chép câu lệnh!', {
      position: 'bottom-center',
    });
  };

  return (
    <div className="animate-fade-in w-full">
      <div className="flex flex-col xl:flex-row justify-between items-start mb-10 gap-6">
        <div>
          <span className="bg-primary text-primary-foreground text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
            Hướng dẫn thực hành
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tighter mt-4">
            {prompt.title}
          </h3>
          <p className="text-muted-foreground font-bold text-[10px] uppercase mt-1">
            Công cụ tối ưu: <span className="text-primary">{prompt.tool}</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={prompt.drive} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-card border-2 border-border hover:border-destructive/30 hover:text-destructive text-muted-foreground px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center transition-all whitespace-nowrap"
          >
            <HardDrive className="mr-2 w-4 h-4" /> Tài liệu đầu vào
          </a>
          <a 
            href={prompt.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-foreground text-primary-foreground px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center shadow-xl transition-all whitespace-nowrap"
          >
            Mở ứng dụng <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
            Prompt chuẩn (Câu lệnh mẫu)
          </span>
          <button 
            onClick={copyPrompt}
            className="text-primary font-black text-[10px] uppercase flex items-center space-x-2 border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
          >
            Sao chép
          </button>
        </div>
        <div className="prompt-code p-8 lg:p-10 text-[11px] lg:text-xs leading-relaxed shadow-2xl relative overflow-hidden">
          <div className="opacity-20 absolute -right-4 -bottom-4">
            <Quote className="w-20 h-20" />
          </div>
          <pre className="whitespace-pre-wrap font-mono">{prompt.text}</pre>
        </div>
      </div>
    </div>
  );
}

export function PromptSection() {
  const [activePromptId, setActivePromptId] = useState<number>(PROMPTS[0]?.id || 1);
  const activePrompt = PROMPTS.find(p => p.id === activePromptId);

  return (
    <section className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-3">
          {PROMPTS.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              isActive={prompt.id === activePromptId}
              onClick={() => setActivePromptId(prompt.id)}
            />
          ))}
        </div>
        <div className="lg:col-span-8">
          <div className="bg-card rounded-5xl border border-border shadow-xl p-8 lg:p-12 min-h-[600px] transition-all">
            {activePrompt ? (
              <PromptDetail prompt={activePrompt} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                  Chọn một nghiệp vụ để xem chi tiết
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
