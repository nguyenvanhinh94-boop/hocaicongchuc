export function ConsultingSection() {
  return (
    <section className="animate-fade-in max-w-5xl mx-auto">
      <div className="bg-primary rounded-6xl p-12 lg:p-20 text-primary-foreground shadow-2xl text-center relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-6 tracking-tighter">
          Giải pháp AI <br/>Riêng cho đơn vị
        </h2>
        <p className="text-blue-200 mb-10 text-sm lg:text-base font-medium max-w-2xl mx-auto">
          Hỗ trợ cài đặt AI Offline, huấn luyện dữ liệu nội bộ (RAG) và đào tạo nghiệp vụ 
          tận nơi theo yêu cầu của từng cơ quan, doanh nghiệp.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfV4mt12trvtIcsF9O9Vu7ecy1ErZTO50NpgjLvrkLpTW9Q6Q/viewform?usp=sharing&ouid=107586327634453871342" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-card text-primary px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:bg-muted transition-all"
          >
            Đăng ký Tư vấn ngay
          </a>
          <a 
            href="https://ollama.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-800 text-primary-foreground px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all"
          >
            Tải bộ cài Offline
          </a>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-700/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
