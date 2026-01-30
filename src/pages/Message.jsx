import { useState } from 'react';

const Message = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const activeUsers = [
    { name: 'Alex', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGWeJFy_EJvxC6f_SAQ9xLN_FDE0BaFnuZ5HtZBKk9qN2OUHsB1N723Tu9VE90416PYD2QrS4q323ivqzXycyrnEk2zyv7QFIWVNM-Ff0JfqO5HKnTphah06WqT37t5uaSzQm45P2SQJMokxpBnDg3YETWiEQ3Xh6PBcDV4QN8UMXuk1j9zgrLdYKxcQ2YwXapEJ1zS9TW9tux7ai_WScPVXurNVdfISoXCkM_6qZTBn5EyD7Uw-540DC-5tEwz7RDgGKBkR7eivM', active: true },
    { name: 'Jordan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9bhs2S13RYHQLVy60MQAmi45meGy1D64G1SbmeKrgH-5-spOJzT_IIPWUpotidHJAZUUPGUUHdMQ0NCeVJkCHosTbe6k8HYoHPh5Yvf_Bag-DdkEL96UuYWXw2bFCqDseTRmbgSC-HFmSYny5pVhsZpiejiwlMqRxZoUCrCkK86p6uBySc_IIWBIDJ3jBDAMDZ8VU4NqI0esFz0mGzE43fsU5LH5hawCvgxBE3qxrwmI-16jzEmWTvvej9_dmewGHq-Pex70Un8', active: true },
    { name: 'Taylor', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGDgrkibHLMpmA4RebaqiNfJF4dfzSHjSuGLqCPCv2M3Srus6VHZAubhcr2gZ6-sCr3-9Q3fbwE5k1crdnzm-KD0ufFnwy08Ck6njJnEhNw2faQm1QKqCy81ICt1BtOjqpQnU4NWDd7Yqm3zGX5Ife5pUos0B5C_3cm_jS9sGWQ6QspmAWP5VV08nGCDXA3fu57urH7NsVeOm7DWCzBm0P8PFSBGdcbNKHbyspoV3-3CZ47Mz8d784zPIGeQZl4M2xjvSfQUNPv3c', active: false },
    { name: 'Morgan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3dTR2YhVLpBli8l39uaNJJ5ugnZaXQ_bTelwsDNiv3Hz8v7j2Ok_pi9wus3K3asph4v1F1AsxeE-IYxcq5GOf0DweV6jBnhL4hrDgOvSZ9qlzjxq7cP_pk2MnTVeU96pP_8luM5Msbt2nWAwqwp55w_bWnsnyjqJ0OAmOrRjqHj1ZA4WRl9Ei7gBQkrzwMlbB7iOh5KDZsWeOh3KUd2SmU_t3DVoSnqE2zdcaPO-I6P4SJo217azJ1LpNXXYFXqlbJfNnLArlvis', active: true },
    { name: 'Casey', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHXmSZFxT7y1dhG5s_QI60XAwWuDDcAsRJUGRwQ34p3CeJGO7h1IQ1iuUS713vFnwcnRjgAZ0cF5uGnKCmoD9qVsRG5bcikdKw5hG2LodGYgs3_86AhE2Baa18HBLtpde0rXfTwBgFWt3FmjMF9QLCjFXRYXkOIlJU_i9yrwE_MrYj-_zIAqGXAeifwO_TTYSGIwbzcDvW-I1ikwdIj4huCHneyB5qJZ2wyR30wzqJzrjsPrG4Jp-DTJdAyV8mCEY9k0131p_xGMk', active: true },
  ];

  const conversations = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlZbR1dkp-34oRmJVt3d2xGiz7VwBWgYGgdwjsMEVLezMz8aJCD2A44eKkQUzqF3kwO-TzfgcW40PH_MOhQern2YRPaJv5QHQ53OXNz8cG0u5x49vvyemHkFbl2F6EvVExKF5T0mAkQvqA1c-Wc0_WqgPjDczxup41JoDp05521GOVNsNkplxGxe4-viIKMy6r0NMwhxIPegH6QIqO1JWBJINPnsqz7Oxe-2T6bGQm8l2nKXA-6pWCgf3ljAGUrOSG8IPc8aWhrt4',
      lastMessage: 'Can you send over that file when you have a chance?',
      time: '4:20 PM',
      unread: 2,
      unreadMessage: true,
      online: true,
    },
    {
      id: 2,
      name: 'Marcus Thorne',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-jE82P9FvLl-J_U3e7YjjuKdKwarlehjRnyxitkc0Hf1z7jKrZzaqIL2i4Yg2jgh2N77cuqUEtFWz4mmlxHVB8zmLCUJjXrlm7cxGIUh7XW-PgxdViCpxNyfrLK4bxfoISlA1flcEfvG6GFmNsQCvklzJWf0oxj4mBPpqsld4d_HG7uBCxkYDDPUewFZFyNrJAI7PXJhksRLGgAPIFR5L39D7GZ56RNgQyjIm49PfLyiaKUFZlFWS_kNL1ajXhmKcevQn9flY8Ok',
      lastMessage: 'You: That sounds like a great plan for the weekend! Let\'s do it.',
      time: '1h ago',
      online: false,
    },
    {
      id: 3,
      name: 'Riley Vance',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT7pQHxMhGDQve4ZTlkBzGNHlnoRwXNvUtugPJgkisMjg3Mg7f8x7H8G_sVb-lzkE_bsn8q87uuE8tvPCmDwd90tl_vwJaxZUpbNkzJc9Q1ykKZvXSK7cBAzLM6MFcSkf4sWXrzdMhDDP1r2c1Or_3UPYthaeZxEONkBlVm7eHghfzqT4URVmRFMoZuyBuCpnMSAjfs-UOCsFqx1yJ_42woK8xX7H8dEazfyryMsmxMqk4tQCwvShRoh7Wn-zteAslwwRnFQX8P98',
      lastMessage: 'Sent a photo',
      time: '3h ago',
      hasAttachment: true,
      attachmentType: 'image',
      online: true,
    },
    {
      id: 4,
      name: 'Product Launch Team',
      avatar: null,
      icon: 'groups',
      lastMessage: 'David: I\'ve updated the roadmap for Q4.',
      time: '8:30 AM',
      isGroup: true,
      online: false,
      members: 12,
    },
    {
      id: 5,
      name: 'Robert Fox',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7V-oeobUV91VqzOzSGxQUzZxthNnNvorPxOg1ApdPn8vTrhvihQpc8OZ2DdJ0nqIbQD118pXQMzM2zK5KYJkoprsqnDN6zlhdq2JtSxZY4Yes-8OktNk0z6jCRupCEQSKRKI93wJM9DNZ0dABbe6IKkkrs3ge2B5RXn_1i67wrvtyEEzgMPOVagyss9ng0T6RHf1_GIQLnydFjSURGYRGcreOBo-mlN0fi18ObRjgwExUyqD37rj7wUCKt64icfifjXblfsqWmMU',
      lastMessage: 'Let\'s hop on a call next Tuesday.',
      time: 'Yesterday',
      online: false,
    },
    {
      id: 6,
      name: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Thanks for the update! 👍',
      time: '2d ago',
      online: true,
    },
    {
      id: 7,
      name: 'Design Team',
      avatar: null,
      icon: 'palette',
      lastMessage: 'New mockups are ready for review',
      time: '3d ago',
      isGroup: true,
      online: false,
      members: 8,
    },
  ];

  const filteredConversations = conversations.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-[#0f0f12] dark:to-background-dark text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-linear-to-br from-primary to-cyan-500 text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[28px]">forum</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Messages</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">Stay connected with your team</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                className="w-80 pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#2a2a30] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </div>
            <button className="p-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all">
              <span className="material-symbols-outlined">edit_square</span>
            </button>
            <button className="p-3 rounded-xl bg-white dark:bg-[#2a2a30] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#3a3a40] transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-50 bg-[#f9f9fa]/90 dark:bg-background-dark/90 backdrop-blur-xl">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[24px]">settings</span>
              </div>
            </div>
            <h2 className="text-[#0e171b] dark:text-white text-xl font-extrabold leading-tight tracking-tight flex-1 text-center">Messages</h2>
            <div className="flex w-12 items-center justify-end">
              <button className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">edit_square</span>
              </button>
            </div>
          </div>
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-11 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                <div className="text-slate-400 flex border-none bg-white dark:bg-[#2a2a30] items-center justify-center pl-4 rounded-l-xl">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input
                  type="text"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#2a2a30] focus:border-none h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-sm font-medium"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Desktop Only */}
          <aside className="hidden md:block w-80 p-6 border-r border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-background-dark/30 backdrop-blur-sm shrink-0">
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Active Now</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                <div className="flex flex-col items-center gap-2 min-w-18">
                  <div className="relative group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-[#2a2a30] flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-primary transition-colors">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">add</span>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase">Your Note</p>
                </div>
                {activeUsers.map((user, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 min-w-18">
                    <div className={`relative p-0.5 rounded-2xl ${user.active ? 'bg-linear-to-tr from-primary to-cyan-400' : 'bg-slate-200 dark:bg-slate-700'}`}>
                      <div
                        className="w-14 h-14 bg-center bg-no-repeat bg-cover rounded-xl border-2 border-white dark:border-background-dark"
                        style={{ backgroundImage: `url("${user.avatar}")` }}
                      />
                      {user.active && (
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-background-dark rounded-full" />
                      )}
                    </div>
                    <p className="text-slate-900 dark:text-white text-[12px] font-semibold truncate w-full">{user.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Quick Access</h3>
                <span className="text-primary text-xs font-bold cursor-pointer hover:underline">View All</span>
              </div>
              <div className="space-y-2">
                {['All Messages', 'Unread', 'Groups', 'Archived'].map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-[#2a2a30] transition-all group"
                  >
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                      {index === 0 ? 'mail' : index === 1 ? 'mark_email_unread' : index === 2 ? 'groups' : 'archive'}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item}</span>
                    {index === 1 && (
                      <span className="ml-auto bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:flex-1 p-4 md:p-8 overflow-x-hidden">
            {/* Mobile Active Now */}
            <div className="md:hidden mt-2 mb-6">
              <div className="flex items-center justify-between px-5 mb-2">
                <h4 className="text-slate-900 dark:text-slate-100 text-xs font-bold uppercase tracking-widest">Active Now</h4>
                <span className="text-primary text-xs font-bold cursor-pointer">View All</span>
              </div>
              <div className="flex w-full overflow-x-auto hide-scrollbar px-4 py-2">
                <div className="flex min-h-min flex-row items-start justify-start gap-4">
                  <div className="flex flex-col items-center gap-2 w-16 text-center">
                    <div className="relative group cursor-pointer">
                      <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-[#2a2a30] flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
                        <span className="material-symbols-outlined text-slate-400">add</span>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase">Your Note</p>
                  </div>
                  {activeUsers.map((user, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 w-16 text-center">
                      <div className={`relative p-0.75 rounded-2xl ${user.active ? 'bg-linear-to-tr from-primary to-cyan-400' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        <div
                          className="w-14 h-14 bg-center bg-no-repeat bg-cover rounded-[13px] border-2 border-white dark:border-background-dark"
                          style={{ backgroundImage: `url("${user.avatar}")` }}
                        />
                        {user.active && (
                          <div className="absolute bottom-0 right-0 size-3.5 bg-green-500 border-2 border-white dark:border-background-dark rounded-full" />
                        )}
                      </div>
                      <p className="text-slate-900 dark:text-white text-[12px] font-semibold truncate w-full">{user.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conversations Grid - Desktop */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredConversations.map((chat) => (
                <div
                  key={chat.id}
                  className={`relative group rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                    chat.unreadMessage
                      ? 'bg-white dark:bg-[#2a2a30] shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl hover:shadow-slate-300/50 dark:hover:shadow-black/30 hover:-translate-y-1'
                      : 'bg-white/60 dark:bg-[#2a2a30]/50 hover:bg-white dark:hover:bg-[#2a2a30] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      {chat.avatar ? (
                        <div
                          className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform"
                          style={{ backgroundImage: `url("${chat.avatar}")` }}
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-2xl shadow-md flex items-center justify-center bg-linear-to-br from-primary to-cyan-500 text-white">
                          <span className="material-symbols-outlined text-3xl">{chat.icon}</span>
                        </div>
                      )}
                      {chat.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-3 border-white dark:border-[#2a2a30] rounded-full shadow-md" />
                      )}
                      {chat.unread && (
                        <div className="absolute -top-2 -right-2 min-w-6 h-6 bg-linear-to-r from-primary to-cyan-500 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-[#2a2a30] shadow-lg">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-slate-900 dark:text-white font-bold text-base truncate pr-2">{chat.name}</h4>
                        <span className={`text-xs font-medium whitespace-nowrap ${chat.unreadMessage ? 'text-primary' : 'text-slate-400'}`}>
                          {chat.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        {chat.isGroup && (
                          <span className="material-symbols-outlined text-slate-400 text-sm">groups</span>
                        )}
                        {chat.hasAttachment && (
                          <span className="material-symbols-outlined text-slate-400 text-sm">{chat.attachmentType}</span>
                        )}
                        <p className={`text-sm truncate ${chat.unreadMessage ? 'text-slate-800 dark:text-slate-200 font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
                          {chat.lastMessage}
                        </p>
                      </div>
                      {chat.isGroup && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 dark:text-slate-500">{chat.members} members</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversations List - Mobile */}
            <div className="md:hidden space-y-1 pb-24">
              <div className="flex items-center justify-between px-5 mb-4">
                <h4 className="text-slate-900 dark:text-slate-100 text-xs font-bold uppercase tracking-widest">Recent Chats</h4>
              </div>
              {filteredConversations.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex items-center gap-4 px-4 py-3 ${
                    chat.unreadMessage ? 'bg-white dark:bg-[#2a2a30]/50' : ''
                  } hover:bg-slate-50 dark:hover:bg-[#2a2a30] transition-colors cursor-pointer group`}
                >
                  <div className="relative shrink-0">
                    {chat.avatar ? (
                      <div
                        className="w-14 h-14 bg-center bg-no-repeat bg-cover rounded-2xl shadow-sm"
                        style={{ backgroundImage: `url("${chat.avatar}")` }}
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-2xl">{chat.icon}</span>
                      </div>
                    )}
                    {chat.unread && (
                      <div className="absolute -top-1 -right-1 size-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-background-dark">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-none truncate">{chat.name}</p>
                      <p className={`${chat.unreadMessage ? 'text-primary font-bold' : 'text-slate-400 font-medium'} text-[12px]`}>
                        {chat.time}
                      </p>
                    </div>
                    {chat.hasAttachment ? (
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-slate-400 text-[14px]">{chat.attachmentType}</span>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium truncate">{chat.lastMessage}</p>
                      </div>
                    ) : (
                      <p className={`${chat.unreadMessage ? 'text-slate-900 dark:text-slate-200 font-semibold' : 'text-slate-500 dark:text-slate-400 font-medium'} text-sm truncate pr-4`}>
                        {chat.lastMessage}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 group-hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredConversations.length === 0 && (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">search_off</span>
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No conversations found</h3>
                <p className="text-slate-500 dark:text-slate-400">Try a different search term</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-6 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Feed</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">explore</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Explore</span>
          </div>
          <div className="relative -mt-8">
            <div className="size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 border-4 border-white dark:border-background-dark">
              <span className="material-symbols-outlined text-[28px]">add</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined fill-1">chat_bubble</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Chats</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
