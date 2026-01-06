import { AlertTriangle, ShieldOff, UserCheck, Eye, Server } from 'lucide-react';
import { SECURITY_ITEMS } from '@/data/courseData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldOff,
  UserCheck,
  Eye,
  Server,
};

export function SecuritySection() {
  return (
    <section className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tighter">
          Bảo mật dữ liệu Công vụ
        </h2>
        <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-[0.2em] mt-4">
          Nghiêm cấm chia sẻ dữ liệu mật lên Cloud AI công cộng
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SECURITY_ITEMS.map((item, index) => {
          const Icon = iconMap[item.icon] || ShieldOff;
          return (
            <div 
              key={index}
              className="bg-card p-10 rounded-5xl border border-border shadow-xl group hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mb-8">
                <Icon className="w-8 h-8" />
              </div>
              <h4 className="font-black text-foreground uppercase text-sm mb-3">
                {item.title}
              </h4>
              <p className="text-muted-foreground font-medium text-[11px] leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
