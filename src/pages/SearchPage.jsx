import { useState } from 'react';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('Design trends 2024');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'People', 'Posts', 'Photos', 'Pages'];

  const recentSearches = [
    { id: 1, query: 'UX/UI Portfolio best practices' },
    { id: 2, query: 'Tailwind CSS 4.0 release' },
  ];

  const people = [
    {
      id: 1,
      name: 'Elena Vance',
      mutualFriends: 12,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYxOeVB44f-MJS76T-4OtH24qS_8s4kO_6Yc3uMfXtE795UmhG9MIFXlW2WxnGX6_p0UCqchK4ZWIAlGIqsAKFGWltDGLpHaZKk64y1j1UXzPB7KXhsf1D-45osarsn5Bx7j0C-URRgeziGgaelelVs5_0TO_UZ5sXUovXLQuOegNl3tmvb5Q20ofX0msPJTcgdruQhMCRQT_77poMrCX4gtDBP2owyY-tGSc6KXqsx-qGSvNqm1nV9QzzoTs2K6LZ-JznRXGHk1E',
      online: true,
    },
    {
      id: 2,
      name: 'Marcus Chen',
      mutualFriends: 8,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARxyji0Ny7T7u18xSAHSsgtu15WOu4c96Wa_94rAASFAPJ_YvFduT-nWLEbMwnlcHUBpC9GXOMP9QnWOBBZH3SnYsnbvTVPyQIBwhwnMEY7u2RoBJ7E-RAZ6q0stbo90YjtDT5DMOLtjaEUjAyZOp3YLxcrr57M0cmhSr3KLHZhmv94azPkXaOzpA_nvR6aEnnD79vUWqizyitgPxGCwghFKhPe8EM9RgErYtfmGAV8AdJuxKnYliiQNg2adfV1JNR-yaiwG0Xosg',
      online: false,
    },
    {
      id: 3,
      name: 'Sasha Grey',
      mutualFriends: 5,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzy0Pnv_GzyCMX6YbeubzNyLYANDY2od1KvMV6j-RIlegRVxlgTzGo_BkttHhyuv2o3_h3o12yr4BGB-wWvbkOBq3BYr2QXr_nXfDwiJHzqeM0-rKqE3JNAfUh6uWHAig5b2CEYQCMNyyQ8cqpwlfgcXydj95TqojWg0GsWgYroCyNCMjZ1L5t22yv43F_b0n4l9WQIh7sNQJpw6SDHiQLQoCt7xfOr86L_SC34SjFpojAwrLWUD58iltwpqwnRQVYiwHVmQYtvNY',
      online: false,
    },
    {
      id: 4,
      name: 'Alex Rivera',
      mutualFriends: 15,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYxOeVB44f-MJS76T-4OtH24qS_8s4kO_6Yc3uMfXtE795UmhG9MIFXlW2WxnGX6_p0UCqchK4ZWIAlGIqsAKFGWltDGLpHaZKk64y1j1UXzPB7KXhsf1D-45osarsn5Bx7j0C-URRgeziGgaelelVs5_0TO_UZ5sXUovXLQuOegNl3tmvb5Q20ofX0msPJTcgdruQhMCRQT_77poMrCX4gtDBP2owyY-tGSc6KXqsx-qGSvNqm1nV9QzzoTs2K6LZ-JznRXGHk1E',
      online: true,
    },
  ];

  const posts = [
    {
      id: 1,
      author: 'Design Masters',
      authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATaP7UuFVbaiwyrIh1BRs-KkMLiDayxSjgjaNHJf7Mj66RgWayBpvOspuzcbKH96bl2QznY1_luYAvM8l-_tRznGLI4rZxN8yFFK9ojaPOHIQ9jyZyxWlorhwKGyUWVRdCzzkiLpSim_mvjKL9LQHp79wQwL_wdkw7uy2fg-s6yjJw_xwccez-XpOlmprYZe5ihVhtzOlnFXp2KVndYQTzaTNhxbhnHEeImLVL0UpxRCRxH6JGW1Wgdx8YV8Rl7yezM2i0US8nt9Y',
      timeAgo: '2h ago',
      sponsored: true,
      content: 'Excited to share our new 2024 Design Trends report. We\'ve analyzed over 5,000 top portfolios to see what\'s shifting.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNCkfVWsklq8P9oVXcQXWu9x5e6TjpR4GXlVOtHA2gl_yearVAbJE-2G57AFotsA_FxxwCHZdbTDsqbQ4skjDLtJpBLXqgJ_CoA9vbDIIp1e2D1Sj39vacszb3uyuTfEj1WO9qAyAm-J7y4Op4BkF3GxYdeyWgooH8Q1inm4Z-aqBgQqfeG7TemLnJTFraHj5zYaL9E_FEeALqPCepxwil5JwGfoqPF2cEiB1E-T9BzSO7UYCE6yQMdfg6JNmT-tRqSbzXbbStaoI',
      likes: '1.2k',
      comments: 84,
    },
    {
      id: 2,
      author: 'Jordan Smith',
      authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyMeBzsN_U4N42_oGge6C0kM8SuMCx9A6GerzWSexMWFZ8Av_A1Sk2BpTh4pRzIAxV_4YiH-oLcu2pQ-1LB_gTxZu2jfNTqDhu7Mybz8Yb8ftCFFMk4UeABtRjoC9hPOZBQcTOAMypBECAn2JwwSuuj5k_VqRX-18ueJCXvWcUm6t3w_8LHA32HwPcvOSNnKuoOsDsyyHpAZE3J6ppJ4IPEtIRm1Wx10Nix17Gc9FfnLmEZFKGu2rnzgyY29lcZ5cvG4DG468b11I',
      timeAgo: '5h ago',
      publishedIn: 'UI Lab',
      content: 'Just tried the new glassmorphism engine. It\'s incredibly performant on iOS now! Check out the refraction on these elements.',
    },
    {
      id: 3,
      author: 'Creative Studio',
      authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATaP7UuFVbaiwyrIh1BRs-KkMLiDayxSjgjaNHJf7Mj66RgWayBpvOspuzcbKH96bl2QznY1_luYAvM8l-_tRznGLI4rZxN8yFFK9ojaPOHIQ9jyZyxWlorhwKGyUWVRdCzzkiLpSim_mvjKL9LQHp79wQwL_wdkw7uy2fg-s6yjJw_xwccez-XpOlmprYZe5ihVhtzOlnFXp2KVndYQTzaTNhxbhnHEeImLVL0UpxRCRxH6JGW1Wgdx8YV8Rl7yezM2i0US8nt9Y',
      timeAgo: '1d ago',
      content: 'Minimalist design is making a comeback. We explore the key principles and how to apply them effectively in modern web applications.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNCkfVWsklq8P9oVXcQXWu9x5e6TjpR4GXlVOtHA2gl_yearVAbJE-2G57AFotsA_FxxwCHZdbTDsqbQ4skjDLtJpBLXqgJ_CoA9vbDIIp1e2D1Sj39vacszb3uyuTfEj1WO9qAyAm-J7y4Op4BkF3GxYdeyWgooH8Q1inm4Z-aqBgQqfeG7TemLnJTFraHj5zYaL9E_FEeALqPCepxwil5JwGfoqPF2cEiB1E-T9BzSO7UYCE6yQMdfg6JNmT-tRqSbzXbbStaoI',
      likes: '892',
      comments: 56,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e171b] dark:text-white transition-colors duration-300 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-2xl px-4 pt-6 pb-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
              </div>
              <h1 className="text-xl lg:text-2xl font-extrabold tracking-tight">Search</h1>
            </div>
            <button className="text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-full">
              Cancel
            </button>
          </div>

          {/* Search Input */}
          <div className="relative group max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="w-full bg-[#e8f0f3] dark:bg-white/5 border-none rounded-xl py-3.5 pl-12 pr-12 text-base focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-[#508495]/60"
              placeholder="Search people, posts, photos..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#508495]">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                cancel
              </span>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2.5 overflow-x-auto py-4 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-5 transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-[#e8f0f3] dark:bg-white/10 text-[#0e171b] dark:text-white hover:bg-primary/10'
                }`}
              >
                <span className="text-sm font-bold">{filter}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-4 pb-24 lg:px-8 lg:pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:mt-8">
            {/* Left Sidebar - Recent Searches */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40">
                <div className="bg-white dark:bg-[#25252b] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 p-4">
                  <h3 className="text-lg font-bold tracking-tight mb-4">Recent Searches</h3>
                  <div className="space-y-2">
                    {recentSearches.map((search) => (
                      <div
                        key={search.id}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e8f0f3] dark:hover:bg-white/5 transition-all group cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-primary text-lg">history</span>
                        <p className="text-[#0e171b] dark:text-white/90 text-sm font-medium flex-1 truncate">
                          {search.query}
                        </p>
                        <button className="text-[#508495] group-hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="text-sm text-primary font-semibold mt-4 hover:text-primary/80 transition-colors">
                    Clear All
                  </button>
                </div>

                {/* Quick Stats Card */}
                <div className="bg-linear-to-br from-primary to-primary/80 rounded-xl shadow-lg p-4 mt-4 text-white">
                  <h3 className="text-lg font-bold tracking-tight mb-2">Quick Stats</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-80">Total Results</span>
                      <span className="font-bold">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-80">People Found</span>
                      <span className="font-bold">56</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-80">Posts Found</span>
                      <span className="font-bold">89</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-6">
              {/* Recent Searches Section - Mobile Only */}
              <section className="mt-4 lg:hidden">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold tracking-tight">Recent Searches</h3>
                  <button className="text-sm text-primary font-semibold">Clear All</button>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search) => (
                    <div
                      key={search.id}
                      className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all group"
                    >
                      <div className="flex items-center justify-center rounded-lg bg-[#e8f0f3] dark:bg-white/10 shrink-0 w-10 h-10 text-primary">
                        <span className="material-symbols-outlined">history</span>
                      </div>
                      <p className="text-[#0e171b] dark:text-white/90 text-base font-medium flex-1 truncate">
                        {search.query}
                      </p>
                      <button className="text-[#508495] group-hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Search Results: People - Mobile Horizontal Scroll */}
              <section className="mt-8 lg:hidden">
                <h3 className="text-lg font-bold tracking-tight mb-4">People</h3>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                  {people.map((person) => (
                    <div
                      key={person.id}
                      className="min-w-40 bg-white dark:bg-[#25252b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col items-center text-center"
                    >
                      <div className="relative mb-3">
                        <img
                          alt="Profile photo"
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 p-1"
                          src={person.avatar}
                        />
                        {person.online && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <h4 className="font-bold text-sm">{person.name}</h4>
                      <p className="text-xs text-[#508495] mb-4">{person.mutualFriends} mutual friends</p>
                      <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:brightness-110 transition-all">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Search Results: Content */}
              <section className="mt-8">
                <h3 className="text-lg font-bold tracking-tight mb-4">Top Posts</h3>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white dark:bg-[#25252b] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow"
                    >
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            alt="Author"
                            className="w-10 h-10 rounded-full object-cover"
                            src={post.authorAvatar}
                          />
                          <div>
                            <h4 className="font-bold text-sm">{post.author}</h4>
                            <p className="text-xs text-[#508495]">
                              {post.sponsored && 'Sponsored • '}
                              {post.publishedIn && `Published in ${post.publishedIn} • `}
                              {post.timeAgo}
                            </p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[#508495]">more_horiz</span>
                      </div>
                      <p className="px-4 pb-3 text-sm leading-relaxed">
                        {post.content}
                      </p>
                      {post.image && (
                        <div className="relative aspect-video">
                          <img
                            alt="Post visual"
                            className="w-full h-full object-cover"
                            src={post.image}
                          />
                        </div>
                      )}
                      <div className="p-4 flex items-center justify-between border-t border-gray-50 dark:border-white/5">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1.5 text-primary">
                            <span className="material-symbols-outlined font-variation-fill">favorite</span>
                            <span className="text-xs font-bold">{post.likes || '0'}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#508495]">
                            <span className="material-symbols-outlined">chat_bubble</span>
                            <span className="text-xs font-bold">{post.comments || '0'}</span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[#508495]">bookmark</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar - People Grid (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40">
                <div className="bg-white dark:bg-[#25252b] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 p-4">
                  <h3 className="text-lg font-bold tracking-tight mb-4">People</h3>
                  <div className="space-y-3">
                    {people.map((person) => (
                      <div
                        key={person.id}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#e8f0f3] dark:hover:bg-white/5 transition-all group"
                      >
                        <div className="relative shrink-0">
                          <img
                            alt="Profile photo"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                            src={person.avatar}
                          />
                          {person.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm truncate">{person.name}</h4>
                          <p className="text-xs text-[#508495]">{person.mutualFriends} mutual</p>
                        </div>
                        <button className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 border-2 border-primary text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                    View All People
                  </button>
                </div>

                {/* Trending Topics Card */}
                <div className="bg-white dark:bg-[#25252b] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 p-4 mt-4">
                  <h3 className="text-lg font-bold tracking-tight mb-4">Trending Topics</h3>
                  <div className="space-y-3">
                    {[
                      { topic: 'UI Design 2024', posts: '2.3k' },
                      { topic: 'React Updates', posts: '1.8k' },
                      { topic: 'CSS Tips', posts: '956' },
                      { topic: 'Web Performance', posts: '742' },
                    ].map((trend, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-[#e8f0f3] dark:hover:bg-white/5 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-primary font-bold text-sm">{index + 1}</span>
                          <span className="text-sm font-medium">{trend.topic}</span>
                        </div>
                        <span className="text-xs text-[#508495]">{trend.posts} posts</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center transition-transform active:scale-95 hover:scale-110 z-50">
        <span className="material-symbols-outlined text-[28px]">add</span>
      </button>

      {/* Bottom Navigation Bar (Mobile Only - iOS style) */}
      <nav className="lg:hidden fixed bottom-0 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-2xl border-t border-gray-100 dark:border-white/5 px-6 py-3 pb-8 flex justify-between items-center z-40">
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined font-variation-fill">search</span>
          <span className="text-[10px] font-bold">Search</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold">Friends</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-bold">Alerts</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-[#508495]">
            <img
              alt="Me"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfEWho9MQg7PWnqWrcTzzUqwARiOGJ_DS7pMGg-dBa9hs3AQfc4VeI--RBsiZAiln6slrzjw0n3-stO5VHrYsK2vvOn_XanLhlK5xMahR2cCbQgeP5oGXKxVSBjgsnXgqH5GW4WDtXgE-yRonhYyYYo-h9eHroTjHnrabOr1U0nyGkkBC7yXFyNLM2Wt-LMMRsw4ukLFDI22L27m-k632_8tkIuAjrRgvre5RHUwfR9OObHhxCWnLsdOzRQKUIxWbLpahOmxosm3Q"
            />
          </div>
          <span className="text-[10px] font-bold">Profile</span>
        </div>
      </nav>

      <style>{`
        .font-variation-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SearchPage;
