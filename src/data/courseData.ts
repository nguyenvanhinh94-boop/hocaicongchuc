export interface Lesson {
  id: number;
  title: string;
  vid: string;
  thumb: string;
}

export interface Prompt {
  id: number;
  title: string;
  tool: string;
  icon: string;
  url: string;
  drive: string;
  text: string;
}

export interface SecurityItem {
  title: string;
  description: string;
  icon: string;
}

export const LESSONS: Lesson[] = [
  { id: 1, title: "Bài 1: Tổng quan Trí tuệ nhân tạo 2025", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500" },
  { id: 2, title: "Bài 2: NotebookLM - Tra cứu Tài liệu Chuyên sâu", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500" },
  { id: 3, title: "Bài 3: Ứng dụng AI tạo Slide Báo cáo thần tốc", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
  { id: 4, title: "Bài 4: Google AI Studio & Gemini 1.5 Pro", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
  { id: 5, title: "Bài 5: Deep Research - Kỹ thuật nghiên cứu đa nguồn", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500" },
  { id: 6, title: "Bài 6: Heygen - Tạo MC ảo thuyết trình nghiệp vụ", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500" },
  { id: 7, title: "Bài 7: Ollama - Triển khai AI Offline tại đơn vị", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1558494949-ef010958384e?w=500" },
  { id: 8, title: "Bài 8: Khám phá ChatGPT Canvas & Gemini Advanced", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500" },
  { id: 9, title: "Bài 9: Quản lý Rủi ro & Đạo đức AI", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500" },
  { id: 10, title: "Bài 10: Thực hành Tổng hợp - Ứng dụng AI vào Công sở", vid: "2YllmPaKhkY", thumb: "https://images.unsplash.com/photo-1454165833767-027eeeb1a6d7?w=500" }
];

export const PROMPTS: Prompt[] = [
  { 
    id: 1, 
    title: "Nghiệp vụ Tra cứu & Tóm tắt", 
    tool: "NotebookLM", 
    icon: "BookOpen", 
    url: "https://notebooklm.google.com/", 
    drive: "https://drive.google.com/", 
    text: `Bạn là chuyên gia phân tích chính sách. Dựa trên bộ hồ sơ dự án đã tải lên:
1. Tóm tắt các mốc thời gian quan trọng thành danh sách.
2. Phân tích 3 rủi ro pháp lý tiềm ẩn.
3. Đề xuất phương án xử lý cho mục số 2 dựa trên trích dẫn chính xác từ tài liệu.` 
  },
  { 
    id: 2, 
    title: "Soạn thảo văn bản Hành chính", 
    tool: "Claude 3.5 Sonnet", 
    icon: "FileText", 
    url: "https://claude.ai/", 
    drive: "https://drive.google.com/", 
    text: `Hãy soạn dự thảo Tờ trình gửi Lãnh đạo về việc triển khai hệ thống AI nội bộ.
Yêu cầu:
- Cấu trúc: Sự cần thiết, Nội dung đề xuất, Kinh phí dự kiến, Kiến nghị.
- Văn phong: Trang trọng, đúng chuẩn Nghị định 30/2020/NĐ-CP.` 
  },
  { 
    id: 3, 
    title: "Phân tích số liệu Kinh tế", 
    tool: "Gemini 1.5 Pro", 
    icon: "PieChart", 
    url: "https://aistudio.google.com/", 
    drive: "https://drive.google.com/", 
    text: `Phân tích báo cáo GRDP của tỉnh [X] năm 2024:
1. Vẽ biểu đồ so sánh các ngành kinh tế chính.
2. Chỉ ra ngành có đóng góp lớn nhất vào mức tăng trưởng chung.
3. Dự báo xu hướng năm 2025 dựa trên dữ liệu 3 năm gần nhất.` 
  },
  { 
    id: 4, 
    title: "Thiết kế Slide Báo cáo", 
    tool: "Gamma.app", 
    icon: "Presentation", 
    url: "https://gamma.app/", 
    drive: "https://drive.google.com/", 
    text: `Tạo đề cương chi tiết cho 12 slide báo cáo Kết quả Chuyển đổi số ngành giáo dục.
- Slide 1-3: Tổng quan và chỉ tiêu.
- Slide 4-8: Thành tựu về hạ tầng số và đào tạo nhân lực.
- Slide 9-11: Khó khăn và kiến nghị.
- Slide 12: Lời kết.` 
  },
  { 
    id: 5, 
    title: "Nghiên cứu Deep Research", 
    tool: "OpenAI Search", 
    icon: "Search", 
    url: "https://chatgpt.com/", 
    drive: "https://drive.google.com/", 
    text: `Sử dụng tính năng Deep Research để tìm hiểu về mô hình 'Smart Government' tại Estonia.
- Các cột mốc quan trọng.
- Cách họ bảo mật dữ liệu công dân.
- Bài học kinh nghiệm có thể áp dụng cho Việt Nam.` 
  },
  { 
    id: 6, 
    title: "Sản xuất Video MC ảo", 
    tool: "HeyGen", 
    icon: "Video", 
    url: "https://www.heygen.com/", 
    drive: "https://drive.google.com/", 
    text: `Viết kịch bản video giới thiệu dịch vụ công trực tuyến mức độ 4.
- Thời lượng: 2 phút.
- MC: Nam, trang phục công sở.
- Nội dung: Hướng dẫn người dân nộp hồ sơ qua mạng và các lợi ích nhận được.` 
  }
];

export const SECURITY_ITEMS: SecurityItem[] = [
  { title: "Không nạp văn bản MẬT", description: "Dữ liệu có dấu Mật không bao giờ được đưa lên AI trực tuyến.", icon: "ShieldOff" },
  { title: "Làm sạch thông tin cá nhân", description: "Xóa số điện thoại, CCCD trước khi yêu cầu AI phân tích.", icon: "UserCheck" },
  { title: "Kiểm chứng sự thật", description: "Luôn đối chiếu thông tin AI cung cấp với văn bản pháp luật gốc.", icon: "Eye" },
  { title: "Ưu tiên giải pháp Offline", description: "Sử dụng Ollama cho các dữ liệu nhạy cảm của đơn vị.", icon: "Server" }
];
