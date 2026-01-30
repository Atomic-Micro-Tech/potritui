import { useState } from 'react';

const SettingPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const shortcuts = [
    { icon: 'history', label: 'Memories', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600' },
    { icon: 'bookmark', label: 'Saved', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' },
    { icon: 'groups', label: 'Groups', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' },
    { icon: 'storefront', label: 'Marketplace', color: 'bg-green-100 dark:bg-green-900/30 text-green-600' },
    { icon: 'sports_esports', label: 'Gaming', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600', badge: true },
    { icon: 'flag', label: 'Pages', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' },
  ];

  const helpSupportItems = [
    { icon: 'support_agent', label: 'Help Center' },
    { icon: 'mail', label: 'Support Inbox' },
    { icon: 'report', label: 'Report a Problem' },
  ];

  const settingsPrivacyItems = [
    { icon: 'person', label: 'Account Center' },
    { icon: 'lock', label: 'Privacy Checkup' },
    { icon: 'dark_mode', label: 'Dark Mode' },
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Desktop Layout Container */}
      <div className="flex w-full max-w-7xl mx-auto">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden lg:flex w-80 flex-col bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Settings & Preferences</p>
          </div>

          {/* Profile Card in Sidebar */}
          <div className="p-6">
            <div className="bg-linear-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-6 rounded-2xl shadow-sm border border-primary/20 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-4 border-white dark:border-surface-dark shadow-lg"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM5uX5OfJopyKBHhurj9PpIO1OJcAtmWEi_HxgkZnlzM_vF9w1ShsmpFKBWMC51JnPaAPPp3SRK19jbLfYScBKAt0fpvTVJSfSEXh_EleY_Iz0kb4jBKn6qqMEPvaEG9tEt7yAAFZ8STt6CYLA6aUZ8EFJwZZ4EJVvA8zsFNWaj86hSGoTguulreEHiU8WVA_Mx_CnKi6Ynvg0Anz6qJtKOi51C_AZd4nPrOIDN92U8AestGPrX6AqU-VXiEEAaWeZj1LuBfXKFdo")`
                  }}
                />
                <div className="absolute bottom-1 right-1 size-6 bg-green-500 border-3 border-white dark:border-surface-dark rounded-full shadow-md" />
              </div>
              <h2 className="text-xl font-bold">Alex Johnson</h2>
              <p className="text-primary text-sm font-medium mt-1">@alexjohnson</p>
              <button className="mt-4 w-full py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">person</span>
                See your profile
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-100 dark:bg-surface-dark rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-primary">128</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Friends</p>
              </div>
              <div className="bg-gray-100 dark:bg-surface-dark rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-primary">45</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Groups</p>
              </div>
              <div className="bg-gray-100 dark:bg-surface-dark rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-primary">89</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Posts</p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 pb-6 overflow-y-auto">
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold transition-all">
                <span className="material-symbols-outlined">dashboard</span>
                Overview
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-700 dark:text-gray-300 font-medium transition-all">
                <span className="material-symbols-outlined">bookmark</span>
                Saved Items
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-700 dark:text-gray-300 font-medium transition-all">
                <span className="material-symbols-outlined">groups</span>
                Groups
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-700 dark:text-gray-300 font-medium transition-all">
                <span className="material-symbols-outlined">notifications</span>
                Notifications
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">12</span>
              </button>
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button className="w-full py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-semibold transition-all hover:bg-red-100 dark:hover:bg-red-900/30 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">logout</span>
              Log Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Mobile Top Bar */}
          <div className="lg:hidden sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-4 pt-6 pb-2">
            <div className="flex items-center justify-between h-12">
              <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
              <div className="flex gap-2">
                <button className="flex items-center justify-center size-10 rounded-full bg-gray-200/50 dark:bg-surface-dark">
                  <span className="material-symbols-outlined text-xl">settings</span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-full bg-gray-200/50 dark:bg-surface-dark">
                  <span className="material-symbols-outlined text-xl">search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Top Bar */}
          <div className="hidden lg:block sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-8 py-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Your Shortcuts</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Quick access to your favorite features</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-medium text-sm">
                  <span className="material-symbols-outlined mr-2">search</span>
                  Search
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium text-sm">
                  <span className="material-symbols-outlined mr-2">settings</span>
                  Settings
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-8">
            {/* Mobile Profile Card */}
            <div className="lg:hidden px-0 py-4">
              <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between group active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16 border-2 border-primary/20"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM5uX5OfJopyKBHhurj9PpIO1OJcAtmWEi_HxgkZnlzM_vF9w1ShsmpFKBWMC51JnPaAPPp3SRK19jbLfYScBKAt0fpvTVJSfSEXh_EleY_Iz0kb4jBKn6qqMEPvaEG9tEt7yAAFZ8STt6CYLA6aUZ8EFJwZZ4EJVvA8zsFNWaj86hSGoTguulreEHiU8WVA_Mx_CnKi6Ynvg0Anz6qJtKOi51C_AZd4nPrOIDN92U8AestGPrX6AqU-VXiEEAaWeZj1LuBfXKFdo")`
                      }}
                    />
                    <div className="absolute bottom-0 right-0 size-5 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-bold leading-tight">Alex Johnson</p>
                    <p className="text-primary text-sm font-medium">See your profile</p>
                  </div>
                </div>
                <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">swap_horiz</span>
                </button>
              </div>
            </div>

            {/* Mobile Section Header */}
            <div className="lg:hidden px-0 pt-4 pb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold tracking-tight">Your shortcuts</h3>
              <button className="text-primary text-sm font-semibold">Edit</button>
            </div>

            {/* Shortcuts Grid - Responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 lg:gap-4 mb-6">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="bg-surface-light dark:bg-surface-dark p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3 hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer relative group"
                >
                  <div className={`size-10 lg:size-12 rounded-xl ${shortcut.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-xl lg:text-2xl">{shortcut.icon}</span>
                  </div>
                  <p className="font-bold text-sm lg:text-base">{shortcut.label}</p>
                  {shortcut.badge && (
                    <span className="absolute top-4 right-4 size-2.5 bg-red-500 rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            {/* See All Button - Desktop */}
            <div className="hidden lg:block mb-8">
              <button className="w-full py-3 bg-gray-100 dark:bg-surface-dark rounded-xl font-bold text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                See all shortcuts
              </button>
            </div>

            {/* See All Button - Mobile */}
            <div className="lg:hidden px-0 py-4">
              <button className="w-full py-3 bg-gray-200/50 dark:bg-surface-dark rounded-xl font-bold text-sm text-gray-700 dark:text-gray-300">
                See all shortcuts
              </button>
            </div>

            {/* Two Column Layout for Desktop */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              {/* Expandable Sections */}
              <div className="px-0 lg:px-0 flex flex-col gap-2">
                <h3 className="hidden lg:block text-xl font-bold mb-4">Settings & Support</h3>

                {/* Help & Support */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <button
                    onClick={() => toggleSection('help')}
                    className="flex cursor-pointer items-center justify-between p-4 w-full hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-500">help</span>
                      <p className="text-sm font-bold">Help & Support</p>
                    </div>
                    <span
                      className={`material-symbols-outlined text-gray-400 transition-transform ${
                        openSection === 'help' ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openSection === 'help' && (
                    <div className="px-4 pb-4 flex flex-col gap-4 border-t border-gray-50 dark:border-gray-700/50 pt-4">
                      {helpSupportItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm font-medium opacity-80">
                          <span className="material-symbols-outlined text-lg">{item.icon}</span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Settings & Privacy */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <button
                    onClick={() => toggleSection('settings')}
                    className="flex cursor-pointer items-center justify-between p-4 w-full hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-500">settings</span>
                      <p className="text-sm font-bold">Settings & Privacy</p>
                    </div>
                    <span
                      className={`material-symbols-outlined text-gray-400 transition-transform ${
                        openSection === 'settings' ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openSection === 'settings' && (
                    <div className="px-4 pb-4 flex flex-col gap-4 border-t border-gray-50 dark:border-gray-700/50 pt-4">
                      {settingsPrivacyItems.map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 text-sm font-medium opacity-80 w-full"
                        >
                          <span className="material-symbols-outlined text-lg">{item.icon}</span>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Info Section - Desktop Only */}
              <div className="hidden lg:block">
                <h3 className="text-xl font-bold mb-4">Account Information</h3>

                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-6 space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-500">email</span>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-gray-500">alex.johnson@email.com</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:text-primary/80">Edit</button>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-500">phone</span>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-gray-500">+1 234 567 8900</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:text-primary/80">Edit</button>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-500">language</span>
                      <div>
                        <p className="text-sm font-medium">Language</p>
                        <p className="text-sm text-gray-500">English (US)</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:text-primary/80">Edit</button>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-500">lock</span>
                      <div>
                        <p className="text-sm font-medium">Password</p>
                        <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:text-primary/80">Update</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Log Out Button */}
            <div className="lg:hidden p-0 mt-6 mb-24">
              <button className="w-full py-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-bold transition-all active:bg-red-100 dark:active:bg-red-900/30 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">logout</span>
                Log Out
              </button>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-1 text-gray-400 dark:text-gray-600 font-bold tracking-widest text-[10px] uppercase">
                  <span className="material-symbols-outlined text-xs">all_inclusive</span> Meta
                </div>
                <p className="text-[10px] text-gray-400 dark:text-gray-600 mt-1">Version 412.0.0.32.112</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile Only - iOS Style) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 px-6 py-3 pb-8 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">group</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">ondemand_video</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">notifications</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>
            menu
          </span>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
