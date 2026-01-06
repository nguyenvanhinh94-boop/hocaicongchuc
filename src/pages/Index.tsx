import { useState } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { LoginScreen } from '@/components/LoginScreen';
import { Sidebar } from '@/components/Sidebar';
import { MobileNav } from '@/components/MobileNav';
import { Header } from '@/components/Header';
import { LessonGrid } from '@/components/LessonGrid';
import { PromptSection } from '@/components/PromptSection';
import { SecuritySection } from '@/components/SecuritySection';
import { ConsultingSection } from '@/components/ConsultingSection';
import { VideoModal } from '@/components/VideoModal';
import { LogoutModal } from '@/components/LogoutModal';

type TabType = 'lessons' | 'prompts' | 'security' | 'consulting';

function MainApp() {
  const { isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('lessons');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    logout();
  };

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col lg:flex-row animate-fade-in">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          onLogout={handleLogout}
        />
        
        <div className="flex-1 flex flex-col min-w-0">
          <Header currentLesson={1} />
          
          <main className="p-6 lg:p-12 max-w-7xl mx-auto w-full pb-32">
            {activeTab === 'lessons' && (
              <LessonGrid onVideoOpen={setVideoId} />
            )}
            {activeTab === 'prompts' && <PromptSection />}
            {activeTab === 'security' && <SecuritySection />}
            {activeTab === 'consulting' && <ConsultingSection />}
          </main>
        </div>

        <MobileNav activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <VideoModal videoId={videoId} onClose={() => setVideoId(null)} />
      <LogoutModal 
        isOpen={showLogoutModal} 
        onConfirm={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  );
}

const Index = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default Index;
