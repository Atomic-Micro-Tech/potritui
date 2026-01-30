import { useState } from 'react';

const NotificationPage = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Unread', 'Mentions', 'Groups'];

  // Sample notification data
  const todayNotifications = [
    {
      id: 1,
      user: 'Alex Rivera',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfttnwnGa-Mq7UbE-MiI99JbdJeSmgKEQwTk7pRYasfYoVbG6qPgtWUFhk2hRcmDgUYxBouhqouEL8C1hpurIdlli4iGq44Twu5xk2IwtTui1icTQLuABRBdd1bUPTTeGwWXyDeymAesugCvDeNRTD92kkNrBU4UqRR3wjV3DS0YPk-ABQx0JQsXSeGNfWCj1Y6ak3srX3LCMQH4l_O9VtHwKzX80-WlVP9XSsp8emsQUC_lG_JVLLGpNzqJFRxemmp6G7ZYdA59M',
      icon: 'person_add',
      iconColor: 'bg-primary',
      message: 'accepted your friend request.',
      time: '2m ago',
      unread: true,
      actionButton: 'Message',
    },
    {
      id: 2,
      user: 'Jordan Smith',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN-8TKrMAOR3ko-iKJyvPCU5495BrdfuUyzf7AILNn_jnsclcTwXjTuCD1EE9VAQ7pBRWH1DVuIzcAVNj6XZ-h6zh6eTVX94_Wy5Ew3d-CsnU6rpqJ0zlm2hGcTYMzMIcgAKQ1KuwHcFhYxjFRoW-7SDb7D-gfc6Mlz8LJYAP3T1376dp6nxmFa5AogvqMPPaStrUmYiSJxsJauzlbjda6NczaLKcinpDBnx33LTnWs6Xsh9LI4hVay6JLDwlec8fqrIpdthVHlvA',
      icon: 'chat_bubble',
      iconColor: 'bg-accent-coral',
      message: 'commented:',
      comment: '"This looks amazing! Where was this taken?"',
      time: '15m ago',
      unread: true,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm1lNFxDZ4aCjsHGHbl2fwPFXVporBUrhdv06DwNga4j7GcIjKTIGw1u1dFJ0nDYKJJAE3_11cNGEIpR_1L9ELqNXnvUtIemDE83tyreLxt_ECiO21Wlf5aZE2Wzf32pUp05Q1iPC6yHS-DaaxseYOZHwJWjFPM8mk7Jdd9iKA4lbfB55salRcJwbgRKTD_dfbR5kG5GARJDtUKzNJRPNwh-_aeauoZnNfv_Qj9sfQvhTwMKVQqGfecGWuEvE-zEsSnml3xMkVv3s',
    },
    {
      id: 3,
      user: 'Sarah Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfGEircH0k96aaolDo_l3dqWEPiCdc73lXZNQX3Nf1kCjq9VSyiyop6Lo55JnjsayuIKKnJRduyV-UZ9I2q0LoKoAVOgHQek-T_PamnONHjSE8mphnHOPFz1-rjsx3zUZ-VuoqZ8qWoQ1ItzjqNStDQt5OsoeZviUJCZ2cTxJulQq73OHfAEA-121Wf6Hg_I0XBmmSmcX6HPY8MTPWkgiODGpctKNZ9VRYMhpA-8rQ0D1XuLLMq_3uGAF5QCqs37I7-7xoEkYZc3k',
      icon: 'groups',
      iconColor: 'bg-purple-500',
      message: 'invited you to join',
      highlight: "'Photography Enthusiasts'",
      time: '1h ago',
      type: 'invite',
      buttons: ['Join', 'Decline'],
    },
  ];

  const yesterdayNotifications = [
    {
      id: 4,
      users: ['Leo DaVinci', '4 others'],
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQwuon22fYCkKcjcsCD2gy6Mr1WoMHcsE8Wd2iZHqwwBRIZCVBRolydolYr0gL8Kg2TrDUQI9UJ2hRDDrXz5rmDtLis1nozU3g5q7iN21S3LzkBzpfjo0j5L0z80_JMYJo9Xa2jxl8kHpJmJFfrhlbiRCulOJ7SGKxb1Ujm1WqKQRSwV1m4LFmSI4f9pvxgm_C3QT6oTQqpGR1PoVCbBYKnBAWQ3qwpPEQcXanVXeTG_GZni1wVGH98e7HfKiIjx6d_7PbtGqA3pU',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBw1uAH2ya9fvP46fecW6wkpFnSyvnv5bb2egRljUW0vqI1cj17ZD3gGCk9mO9Fa7ppd8bAmEHZq8X27Styl9QEXqvE7JoCLmncXhfDgL54ecRVASTCYjqgws7Sa_OYesrKfORK5NIHde-5UkQIdVQ02Dc_x4PfNE7SiqILpdG9Z54A4HVUnigtjyhlukJhfMLEn-94Qrz_KaSKkLAQcpHoxQ6tjWxMIIvMXaRUUHFjQVdyJ6BbXiRdwXs72NYgRvfkB1tnxI0fH0o',
      ],
      icon: 'favorite',
      iconColor: 'bg-red-500',
      message: 'liked your photo.',
      time: 'Yesterday, 4:20 PM',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUeQfFFYJqMAy9xDcQk_Km_YrQvcnBVd8TNhXh9lv4L3WWizEXalU-YWASbvBezXXHJvEp_2PWSfK8NqXZi8YZkoTwzMkooLVsBAo_ZA88VJs3Y2Xq_WVXsBvW7CmV7qoobJc7uD1Df_OiGgPBYLq7zds6-xL8i6RhXVebu-Pm4YaHMPp1oDO4JLtflOGv41mbFLgepzsaQedf6_IH8Uk0JhLaN8pzX7n12okKi56ntOsB4ZUcZnxgeGtdJLFlWeeLXcHw-kK0Pho',
      type: 'grouped',
    },
    {
      id: 5,
      user: 'Marcus Wu',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU6wYxUFomi76FTSmU4Dw5Ok4ejtpH2E9ItlhXRQJmN54369rrm_yWRhotAbJvjz02MO2a_jKUMM9641g4Cs61fqg0jbq93-UXSDTnRdbBrC_Ug10J3k4eltqlhZP_lPR9iBjaLN5hVyE_dZc3WMbkJ6FzWXb-mWWG81PbHoZSa1TUnLfSFvxb9I-U3m2fwvI0qDrUrMQawUfrHWzNzfDfL1lsAx3Nkf8B6Wl41SpKU4lr69mc38KasFhE8NFTW4FOQtr_I1_4o4Q',
      icon: 'alternate_email',
      iconColor: 'bg-primary',
      message: 'mentioned you in a comment.',
      time: 'Yesterday, 11:05 AM',
    },
  ];

  const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbNc7gEeCFXdtnkrOyfNu3ls7gD3iUs0RnKvGQZ3_vkmWSK0l1z6HZY-kmpqqSplYQwdtOxr_smVvAs_2rCKt3D9HAsMDXWFHfNZqFUzA6MsynfmrZyqB8FGonTY3se1seBr1rWGCx-tN7EzhYEPU_nEEnrZtUXkZdZlHDigJx2ClQU_iEWVeIkKzygTR0QPPaVN3yRpsnvZsGHd_s88S_XmRtNv8AhFOovtI60RF1YA1xMUv9mNJyGOYqIW4Li7eqwjn9oEUCtYE';

  return (
    <div className="bg-linear-to-br from-background-light to-gray-100 dark:from-background-dark dark:to-gray-900 font-display text-[#0e171b] dark:text-gray-100 min-h-screen">
      {/* Top AppBar */}
      <nav className="sticky top-0 z-50 glass-header border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex items-center p-4 pb-2 justify-between max-w-7xl mx-auto">
          <button className="text-[#0e171b] dark:text-white flex size-10 shrink-0 items-center justify-start hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">notifications</span>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight hidden sm:block">Notifications</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-primary text-xs font-bold uppercase tracking-wider shrink-0 hover:opacity-80 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors hidden md:block">
              All Read
            </button>
            <button className="text-primary text-xs font-bold uppercase tracking-wider shrink-0 hover:opacity-80 md:hidden">
              All Read
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 shadow-sm transition-all hover:scale-105 active:scale-95 ${
                filter === f
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50'
              }`}
            >
              <p className={`text-sm ${filter === f ? 'font-bold' : 'font-semibold text-[#0e171b] dark:text-gray-200'}`}>
                {f}
              </p>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content with Desktop Layout */}
      <div className="max-w-7xl mx-auto flex gap-6 px-4 py-6">
        {/* Left Sidebar - Desktop Only */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-36 space-y-4">
            {/* Quick Stats Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">mark_email_unread</span>
                    <span className="text-sm font-medium">Unread</span>
                  </div>
                  <span className="text-primary font-bold">2</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent-coral/5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-coral text-xl">alternate_email</span>
                    <span className="text-sm font-medium">Mentions</span>
                  </div>
                  <span className="text-accent-coral font-bold">1</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-500/5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-500 text-xl">groups</span>
                    <span className="text-sm font-medium">Groups</span>
                  </div>
                  <span className="text-purple-500 font-bold">1</span>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4">Notification Settings</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-500">push_notifications</span>
                    <span className="text-sm">Push Notifications</span>
                  </div>
                  <span className="material-symbols-outlined text-primary">toggle_on</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-500">email</span>
                    <span className="text-sm">Email Notifications</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">toggle_off</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-500">schedule</span>
                    <span className="text-sm">Quiet Hours</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Notifications Area */}
        <main className="flex-1 min-w-0 pb-24 md:pb-8">
          {/* Section: Today */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-base font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                Today
              </h3>
              <div className="flex-1 h-px bg-linear-to-r from-gray-300 dark:from-gray-700 to-transparent" />
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">3 new</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {todayNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`relative ${
                    notification.type === 'invite' ? 'flex flex-col gap-3' : 'flex items-start gap-4'
                  } ${notification.unread ? 'unread-bg border-primary/20' : 'bg-white dark:bg-gray-800/60 border-gray-100 dark:border-gray-700'} p-4 rounded-2xl border shadow-sm hover:shadow-md transition-all`}
                >
                  {/* Avatar with icon */}
                  <div className="relative shrink-0">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 ring-4 ring-white dark:ring-gray-900 shadow-md"
                      style={{ backgroundImage: `url("${notification.avatar}")` }}
                      alt={notification.user}
                    />
                    <div className={`absolute -bottom-1 -right-1 ${notification.iconColor} text-white rounded-full p-1.5 border-3 border-white dark:border-gray-900 flex items-center justify-center shadow-lg`}>
                      <span className="material-symbols-outlined text-[14px] font-bold">{notification.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-[#0e171b] dark:text-white text-sm leading-relaxed">
                      <span className="font-bold">{notification.user}</span> {notification.message}
                      {notification.highlight && (
                        <span className="text-primary font-bold">{notification.highlight}</span>
                      )}
                      {notification.comment && (
                        <span className="italic text-gray-600 dark:text-gray-300 block mt-1">{notification.comment}</span>
                      )}
                    </p>
                    <p className={`${notification.unread ? 'text-primary' : 'text-gray-400 dark:text-gray-500'} text-xs font-semibold mt-2`}>
                      {notification.time}
                    </p>
                  </div>

                  {/* Thumbnail */}
                  {notification.thumbnail && (
                    <div className="shrink-0 flex items-center">
                      <div
                        className="h-14 w-14 rounded-xl bg-cover bg-center border-2 border-gray-100 dark:border-gray-700 shadow-sm hover:scale-105 transition-transform cursor-pointer"
                        style={{ backgroundImage: `url("${notification.thumbnail}")` }}
                        alt="Thumbnail"
                      />
                    </div>
                  )}

                  {/* Action button */}
                  {notification.actionButton && (
                    <div className="shrink-0">
                      <button className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all hover:bg-primary/90">
                        {notification.actionButton}
                      </button>
                    </div>
                  )}

                  {/* Action buttons for invites */}
                  {notification.buttons && (
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95">
                        {notification.buttons[0]}
                      </button>
                      <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-xs font-bold py-2.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all active:scale-95">
                        {notification.buttons[1]}
                      </button>
                    </div>
                  )}

                  {/* Unread indicator */}
                  {notification.unread && <div className="absolute right-4 top-4 w-2.5 h-2.5 bg-primary rounded-full shadow-lg shadow-primary/50" />}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Yesterday */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-base font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                Yesterday
              </h3>
              <div className="flex-1 h-px bg-linear-to-r from-gray-300 dark:from-gray-700 to-transparent" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {yesterdayNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-4 bg-white dark:bg-gray-800/60 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  {notification.type === 'grouped' ? (
                    <div className="relative shrink-0 flex items-center">
                      {notification.avatars.map((avatar, index) => (
                        <div
                          key={index}
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 border-3 border-white dark:border-gray-900 shadow-md"
                          style={{ backgroundImage: `url("${avatar}")`, marginLeft: index > 0 ? '-0.75rem' : '0' }}
                          alt={`Avatar ${index + 1}`}
                        />
                      ))}
                      <div className={`absolute -bottom-1 -right-1 ${notification.iconColor} text-white rounded-full p-1 border-2 border-white dark:border-gray-900 flex items-center justify-center shadow-lg`}>
                        <span className="material-symbols-outlined text-[12px] font-bold fill-1">{notification.icon}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative shrink-0">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 ring-4 ring-white dark:ring-gray-900 shadow-md"
                        style={{ backgroundImage: `url("${notification.avatar}")` }}
                        alt={notification.user}
                      />
                      <div className={`absolute -bottom-1 -right-1 ${notification.iconColor} text-white rounded-full p-1.5 border-3 border-white dark:border-gray-900 flex items-center justify-center shadow-lg`}>
                        <span className="material-symbols-outlined text-[14px] font-bold">{notification.icon}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-[#0e171b] dark:text-white text-sm leading-relaxed">
                      {notification.users ? (
                        <>
                          <span className="font-bold">{notification.users[0]}</span> and{' '}
                          <span className="font-bold">{notification.users[1]}</span> {notification.message}
                        </>
                      ) : (
                        <>
                          <span className="font-bold">{notification.user}</span> {notification.message}
                        </>
                      )}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">{notification.time}</p>
                  </div>

                  {notification.thumbnail && (
                    <div className="shrink-0">
                      <div
                        className="h-12 w-12 rounded-xl bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer border-2 border-gray-100 dark:border-gray-700"
                        style={{ backgroundImage: `url("${notification.thumbnail}")` }}
                        alt="Liked photo thumbnail"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar - Desktop Only */}
        <aside className="hidden xl:block w-80 shrink-0">
          <div className="sticky top-36 space-y-4">
            {/* Trending Card */}
            <div className="bg-linear-to-br from-primary/10 to-accent-coral/10 rounded-2xl p-5 border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">trending_up</span>
                <h3 className="font-bold text-lg">Trending</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 hover:bg-white/50 dark:hover:bg-black/20 rounded-xl transition-colors cursor-pointer">
                  <div className="text-xl font-bold text-primary">1</div>
                  <div>
                    <p className="text-sm font-semibold">Photography Challenge</p>
                    <p className="text-xs text-gray-500">2.4k participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-white/50 dark:hover:bg-black/20 rounded-xl transition-colors cursor-pointer">
                  <div className="text-xl font-bold text-gray-400">2</div>
                  <div>
                    <p className="text-sm font-semibold">Weekly Photo Contest</p>
                    <p className="text-xs text-gray-500">1.8k participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-white/50 dark:hover:bg-black/20 rounded-xl transition-colors cursor-pointer">
                  <div className="text-xl font-bold text-gray-400">3</div>
                  <div>
                    <p className="text-sm font-semibold">Portrait Masters</p>
                    <p className="text-xs text-gray-500">1.2k participants</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested Connections */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4">Suggested Connections</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-accent-coral flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Jane Doe</p>
                    <p className="text-xs text-gray-500">12 mutual friends</p>
                  </div>
                  <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                    <span className="material-symbols-outlined">person_add</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Mike Smith</p>
                    <p className="text-xs text-gray-500">8 mutual friends</p>
                  </div>
                  <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                    <span className="material-symbols-outlined">person_add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass-header border-t border-gray-200 dark:border-gray-800 px-6 py-3 pb-8">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors p-2">
            <span className="material-symbols-outlined text-2xl">home</span>
          </button>
          <button className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors p-2">
            <span className="material-symbols-outlined text-2xl">group</span>
          </button>
          <button className="text-primary relative p-2">
            <span className="material-symbols-outlined text-3xl fill-1">notifications</span>
            <span className="absolute -top-1 -right-1 bg-accent-coral w-4 h-4 rounded-full border-2 border-white dark:border-gray-900" />
          </button>
          <button className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors p-2">
            <span className="material-symbols-outlined text-2xl">video_library</span>
          </button>
          <button className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors p-2">
            <div
              className="h-6 w-6 rounded-full bg-cover bg-center border border-gray-300 dark:border-gray-600"
              style={{ backgroundImage: `url("${userAvatar}")` }}
              alt="User profile mini avatar"
            />
          </button>
        </div>
      </nav>

      <style>{`
        .glass-header {
          background: rgba(249, 249, 250, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .dark .glass-header {
          background: rgba(28, 28, 33, 0.8);
        }
        .unread-bg {
          background-color: rgba(25, 140, 179, 0.08);
        }
        .dark .unread-bg {
          background-color: rgba(25, 140, 179, 0.15);
        }
      `}</style>
    </div>
  );
};

export default NotificationPage;
