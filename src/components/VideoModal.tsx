import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  videoId: string | null;
  onClose: () => void;
}

export function VideoModal({ videoId, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (videoId) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-0 lg:p-12 theater-overlay animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl aspect-video bg-black rounded-none lg:rounded-5xl overflow-hidden shadow-[0_0_100px_rgba(0,64,128,0.4)] animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`}
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
          className="w-full h-full"
        />
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
