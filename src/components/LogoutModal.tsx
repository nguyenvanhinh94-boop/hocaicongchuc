import { useEffect } from 'react';

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function LogoutModal({ isOpen, onConfirm, onCancel }: LogoutModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm animate-fade-in"
      onClick={onCancel}
    >
      <div 
        className="bg-card rounded-5xl p-10 max-w-sm w-full text-center shadow-2xl animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-black text-foreground uppercase mb-2">
          Đăng xuất
        </h3>
        <p className="text-muted-foreground font-bold text-xs mb-8 uppercase tracking-widest">
          Hẹn gặp lại bạn sớm!
        </p>
        <div className="space-y-3">
          <button 
            onClick={onConfirm}
            className="w-full bg-destructive text-destructive-foreground py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:opacity-90 transition-opacity"
          >
            Xác nhận thoát
          </button>
          <button 
            onClick={onCancel}
            className="w-full bg-muted text-muted-foreground py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-muted/80 transition-colors"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
