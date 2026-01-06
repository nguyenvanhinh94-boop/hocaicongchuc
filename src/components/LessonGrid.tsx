import { Play } from 'lucide-react';
import { LESSONS, type Lesson } from '@/data/courseData';

interface LessonGridProps {
  onVideoOpen: (videoId: string) => void;
}

function LessonCard({ lesson, onOpen }: { lesson: Lesson; onOpen: () => void }) {
  return (
    <div 
      onClick={onOpen}
      className="bg-card rounded-5xl border border-border overflow-hidden group shadow-sm hover:shadow-2xl transition-all cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={lesson.thumb} 
          alt={lesson.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center text-primary shadow-2xl scale-50 group-hover:scale-100 transition-all">
            <Play className="fill-current w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-black text-card-foreground text-sm leading-tight uppercase line-clamp-2 h-10 mb-4">
          {lesson.title}
        </h3>
        <div className="flex items-center justify-between text-[10px] font-black text-muted-foreground uppercase tracking-widest border-t border-border pt-4">
          <span>Lộ trình 2025</span>
          <span className="text-primary">Bắt đầu học</span>
        </div>
      </div>
    </div>
  );
}

export function LessonGrid({ onVideoOpen }: LessonGridProps) {
  return (
    <section className="animate-fade-in">
      <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tighter">
            Lộ trình 10 bài giảng chuyên sâu
          </h2>
          <p className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em] mt-2">
            Giảng viên: TS. Đinh Viết Sang - Bách Khoa Hà Nội
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {LESSONS.map((lesson) => (
          <LessonCard 
            key={lesson.id} 
            lesson={lesson} 
            onOpen={() => onVideoOpen(lesson.vid)}
          />
        ))}
      </div>
    </section>
  );
}
