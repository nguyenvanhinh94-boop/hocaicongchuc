import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function LoginScreen() {
  const { login, isLoading } = useAuth();

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-background p-4 transition-all duration-700">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-card rounded-5xl shadow-2xl overflow-hidden animate-zoom-in">
        {/* Left Panel - Branding */}
        <div className="p-12 lg:p-20 glass-sidebar text-primary-foreground flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-12">
              <img 
                src="https://hust.edu.vn/uploads/sys/logo-dhbk-1-02_1.png" 
                className="h-16 w-auto brightness-0 invert" 
                alt="BK Logo"
              />
              <div className="h-10 w-px bg-white/20"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest leading-tight">
                Đại học <br/>Bách Khoa Hà Nội
              </h2>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-6">
              AI CHO <br/>
              <span className="text-blue-300">CÔNG VỤ SỐ</span>
            </h1>
            <p className="text-blue-100/70 text-sm font-medium leading-relaxed max-w-xs">
              Hệ thống đào tạo ứng dụng Trí tuệ nhân tạo trong công tác văn phòng, 
              tổng hợp và phân tích số liệu.
            </p>
          </div>
          <div className="relative z-10 pt-10">
            <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
              <span className="w-8 h-px bg-blue-400"></span>
              <span>Phiên bản Enterprise 2025</span>
            </div>
          </div>
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="p-12 lg:p-20 flex flex-col justify-center bg-card">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-2xl font-black text-foreground uppercase">
              Đăng nhập cổng đào tạo
            </h2>
            <p className="text-muted-foreground font-bold text-[10px] uppercase mt-2 tracking-widest">
              Yêu cầu tài khoản Google / Gmail
            </p>
          </div>

          <div className="space-y-6">
            <button 
              onClick={login}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-4 bg-card border-2 border-border hover:border-primary p-5 rounded-2xl transition-all group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
              ) : (
                <>
                  <svg className="w-6 h-6" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  </svg>
                  <span className="font-black text-foreground uppercase text-xs tracking-widest">
                    Đăng nhập bằng Gmail
                  </span>
                </>
              )}
            </button>

            <div className="relative flex justify-center text-[10px] uppercase font-black text-muted-foreground/50">
              <span className="bg-card px-4 z-10">Lưu ý bảo mật</span>
              <div className="absolute top-1/2 w-full border-t border-border"></div>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-xs text-muted-foreground leading-relaxed px-4">
                Vui lòng sử dụng tài khoản Gmail công vụ hoặc Gmail cá nhân đã được 
                đăng ký để truy cập vào hệ thống bài giảng và tài liệu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
