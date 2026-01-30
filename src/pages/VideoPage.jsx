import MobileNav from '../components/MobileNav'
import HeadNav from '../components/HeadNav'

const VideoPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e171b] dark:text-white antialiased min-h-screen">
      <HeadNav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-6">
        {/* Left Sidebar - Video Categories */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24 space-y-4">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="size-12 rounded-full bg-center bg-cover ring-2 ring-primary/30 shrink-0"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_sKS6nVX9yPhm6yHiQFhK9bPA-YTJzAtquFOU3jgken16PuwEBWWMv22XKbJP_sAra2l8a_wg-5Le2nO8VNP4N6gcIbbxTFdNFn3vjzvUJfgIUIOjcag5NWHYC32gmG8Dje_aBPuPwZMCi4P7UvY_9IRB3boVtvxA5Mj7UVrPc-O6hyvIc6_heuGmlq7YpRBu_gH69XbrS3VQL1oBeV2S00VVGQ9kcNg-puillbMhUQfte-7PcEwofPAhi1O98vYIyyvHJX3u7Hg')" }}
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-sm truncate">John Doe</h3>
                  <p className="text-xs text-gray-500">@johndoe</p>
                </div>
              </div>
            </div>

            {/* Video Categories */}
            <nav className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-sm mb-3 text-gray-500">VIDEO CATEGORIES</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold">
                    <span className="material-symbols-outlined shrink-0">play_circle</span>
                    <span>All Videos</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">live_tv</span>
                    <span>Live</span>
                    <span className="ml-auto bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">sports_soccer</span>
                    <span>Sports</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">music_note</span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">theater_comedy</span>
                    <span>Entertainment</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">school</span>
                    <span>Education</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">games</span>
                    <span>Gaming</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">bookmark</span>
                    <span>Saved Videos</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Video Feed */}
        <main className="flex-1 min-w-0 max-w-2xl pb-24 lg:pb-0 mx-auto w-full">
          {/* Upload Video Button */}
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <div
                  className="size-10 rounded-full bg-center bg-cover bg-no-repeat ring-2 ring-primary/10"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_sKS6nVX9yPhm6yHiQFhK9bPA-YTJzAtquFOU3jgken16PuwEBWWMv22XKbJP_sAra2l8a_wg-5Le2nO8VNP4N6gcIbbxTFdNFn3vjzvUJfgIUIOjcag5NWHYC32gmG8Dje_aBPuPwZMCi4P7UvY_9IRB3boVtvxA5Mj7UVrPc-O6hyvIc6_heuGmlq7YpRBu_gH69XbrS3VQL1oBeV2S00VVGQ9kcNg-puillbMhUQfte-7PcEwofPAhi1O98vYIyyvHJX3u7Hg')" }}
                />
              </div>
              <button className="flex-1 text-left px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500">
                What's on your mind? Share a video...
              </button>
              <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all shrink-0 flex items-center gap-2">
                <span className="material-symbols-outlined">videocam</span>
                <span className="hidden sm:inline">Upload</span>
              </button>
            </div>
          </section>

          {/* Video Feed List */}
          <section className="space-y-4">
            {/* Video Post 1 */}
            <article className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="size-10 rounded-full bg-center bg-cover ring-2 ring-primary/20 shrink-0"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSWPnoMzs13Qbqrbo3c--T5z1m1hAXLMCZXyFGmpQx0naBR8JGqNaAeTj18jNlqoHntFb5VmSaTsMHRzGR--aotRtQCOYk3eEuqt-welKYIXBYs_dXQtEioCeYMLgmPkSZjSkK1-G3-AhcWekSdUKYO723ntkM1FL3xqZsjLwItCQSGwtaKDSR_B2OOqTsWO-2Zzz9aaolFsw4ugzzWiaBnYd1UFPShEMTI5ya8BFXZesxWQmVFqobsPTJqpPbbYFfuDN5zAgS-Lc')" }}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold truncate">Alex Johnson</h4>
                    <p className="text-xs text-gray-500">2 hours ago • <span className="material-symbols-outlined text-[12px] align-middle">public</span></p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                  Amazing drone footage from my trip to the mountains! The views are incredible 🏔️
                </p>
              </div>
              {/* Video Player Placeholder */}
              <div className="relative aspect-video bg-gray-900 cursor-pointer group">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzux59px3eAU1M-JSCsr_4nVgyijgObBRmsLEWxghUmUUQIVyQDTOnAXMXmcLK8-FuAW-pSA0SaXH9pTeDO8jwm6Fb9oCXq5gkrIiXPF9_r2R7uz8HYct7BSqiNrIa8u9UZ_kN8dry0fPHkfWYWkTXZoVaHXARZrpxlELSUgEppFQMdHyOLnRmDxdBgD3c_w8nFC4ov5rimJP4kojPXhKt-QH16fT4bfbXzCZmp8fde2YBV05FGxviR2hj26I1TVVGd7BtF9x3dqA')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                  12:34
                </div>
                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                  Featured
                </div>
              </div>
              <div className="p-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">favorite</span>
                    <span className="text-xs font-bold">1.2K</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">chat_bubble</span>
                    <span className="text-xs font-bold">89</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">share</span>
                    <span className="text-xs font-bold">23</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">bookmark</span>
                </button>
              </div>
            </article>

            {/* Video Post 2 - Live Stream */}
            <article className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative">
                    <div
                      className="size-10 rounded-full bg-center bg-cover ring-2 ring-primary/20 shrink-0"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJGtGtdBLPLUYAmaXdYKrm5EW-OGIwiLvSAL261wBi8rzv4GNpgz8D8NB2RJYqxcJpkGKFZCYaQDWVnBeRva3iWPzAhYkQVQZ4U81Rc48KMgdLSQbxb0xygSZGTtbWXmoRUdEEwR8vA_X7fOobA7W6hk2Syg8hftEuo1TL4yP9khJD-3ldx60yzj-UtLYew3g98YCqEMbpwHzi4Ck4q9gBp0fHVqJtwwNypHCPZQgDM-GbCZ2Foo70HqPDKeVx9Z796jeYMZUKMZA')" }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold truncate">Marcus Reed</h4>
                      <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">LIVE</span>
                    </div>
                    <p className="text-xs text-gray-500">Streaming now • <span className="material-symbols-outlined text-[12px] align-middle">visibility</span> 3.4K watching</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                  🎮 Gaming stream! Join me as I play through the new adventure game. Let's go!
                </p>
              </div>
              {/* Live Stream Player */}
              <div className="relative aspect-video bg-gray-900 cursor-pointer group">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-50 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvQLhSUxEtVEKjaLG5T5HmM1IaovEPZaMfpiMzcQUbhfvvjPZ5xqYltxV8tD_0oX4r7MXPF90PAwnMFnpfBNZPsI9NuuejC22WUbv0NGDmxe38saFivuv5FcNJWegkjazG8bG9onjUYu6D4prKimrhw0MMoUvOi6KfMv2_H-7Sxddovud_nsyqgnhWIHx3sCxVzdcSoS3sj07_fpytEiwDTpo1DUZpUE34r-2H-2uzmjO3-sUJN_BJYHLyy0aB1hUvkW1t1SEAUJk')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-500 rounded-full p-4 group-hover:scale-110 transition-transform animate-pulse">
                    <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  3.4K
                </div>
              </div>
              <div className="p-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-red-500">
                    <span className="material-symbols-outlined text-[22px] shrink-0">favorite</span>
                    <span className="text-xs font-bold">5.2K</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">chat_bubble</span>
                    <span className="text-xs font-bold">234</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">share</span>
                    <span className="text-xs font-bold">89</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">bookmark</span>
                </button>
              </div>
            </article>

            {/* Video Post 3 - Short/Vertical Video */}
            <article className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="size-10 rounded-full bg-center bg-cover ring-2 ring-primary/20 shrink-0"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCihjNgyQjzPyYBPltzmwvfriWLcsA-1IkC0566v2KnvG8nO8PhSeBrR4rtO4vuCs4rnK__wO4OC8AddaY-ewm0Zw-kQ2fDpBc8qoUzAT7PgiVorHGZrhCnZdl0cz-6KVuEDI5KB9Zx8l1HXeqa7zwBsmxN2pFZQLclsDSPLyl7BfnB5bSMwZ6MjJcO9bRKDhlNdszokSk5LvKhIhUzn6pTlKoE_2QfZaofFWk-h-hhKUB7J4o4Wz-2JK8iFBFlLN4C88T9pOcmwPY')" }}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold truncate">Jordan Smith</h4>
                    <p className="text-xs text-gray-500">5 hours ago • <span className="material-symbols-outlined text-[12px] align-middle">public</span></p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                  Quick tutorial: How to level up your coding skills in 30 seconds! 💻✨
                </p>
              </div>
              {/* Short Video */}
              <div className="relative aspect-9/16 max-h-125 bg-gray-900 cursor-pointer group mx-auto max-w-xs">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqRjm0M3NohzDVFQ6B9d4rZ_WfUa50QgT0PwjRPwGfhDHXLgSqqaVM5aPIMgT8Iclv-ocC2RD-D8offmetWn-pFmrl13IBdZjUqVCk6fOtA2PxGBRcbR5h9RQThW5lGjvVcnmgPpnbZ-sIhmqd5taOhL0DKnzQnyHyGxVShnxpyl8Vm-nDWvFG9QjuhInrjRCuunssO4McrLChQ8SKeLYgw_hHOmzwHfRleeRvXlmOVWyvCbigQ_dR0H2exTkH6N-VEaKZ8ByqRf4')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                  0:30
                </div>
                <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                  Short
                </div>
              </div>
              <div className="p-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">favorite</span>
                    <span className="text-xs font-bold">856</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">chat_bubble</span>
                    <span className="text-xs font-bold">45</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">share</span>
                    <span className="text-xs font-bold">12</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">bookmark</span>
                </button>
              </div>
            </article>
          </section>
        </main>

        {/* Right Sidebar - Recommended & Trending */}
        <aside className="hidden xl:block w-80 shrink-0">
          <div className="sticky top-24 space-y-4">
            {/* Continue Watching */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">history</span>
                Continue Watching
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex gap-3 group">
                  <div className="relative w-28 h-16 rounded-lg overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-center bg-cover group-hover:scale-105 transition-transform"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzux59px3eAU1M-JSCsr_4nVgyijgObBRmsLEWxghUmUUQIVyQDTOnAXMXmcLK8-FuAW-pSA0SaXH9pTeDO8jwm6Fb9oCXq5gkrIiXPF9_r2R7uz8HYct7BSqiNrIa8u9UZ_kN8dry0fPHkfWYWkTXZoVaHXARZrpxlELSUgEppFQMdHyOLnRmDxdBgD3c_w8nFC4ov5rimJP4kojPXhKt-QH16fT4bfbXzCZmp8fde2YBV05FGxviR2hj26I1TVVGd7BtF9x3dqA')" }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white">play_arrow</span>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">Mountain Adventures Part 2</p>
                    <p className="text-[10px] text-gray-500 mt-1">8:23 left</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-primary h-1 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </a>
                <a href="#" className="flex gap-3 group">
                  <div className="relative w-28 h-16 rounded-lg overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-center bg-cover group-hover:scale-105 transition-transform"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvQLhSUxEtVEKjaLG5T5HmM1IaovEPZaMfpiMzcQUbhfvvjPZ5xqYltxV8tD_0oX4r7MXPF90PAwnMFnpfBNZPsI9NuuejC22WUbv0NGDmxe38saFivuv5FcNJWegkjazG8bG9onjUYu6D4prKimrhw0MMoUvOi6KfMv2_H-7Sxddovud_nsyqgnhWIHx3sCxVzdcSoS3sj07_fpytEiwDTpo1DUZpUE34r-2H-2uzmjO3-sUJN_BJYHLyy0aB1hUvkW1t1SEAUJk')" }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white">play_arrow</span>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">Gaming Stream Highlights</p>
                    <p className="text-[10px] text-gray-500 mt-1">15:42 left</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-primary h-1 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Trending Videos */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f43f5e]">trending_up</span>
                Trending Videos
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex gap-3 group">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-center bg-cover group-hover:scale-105 transition-transform"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2V4GTRORWCy4I6CMI0esydIPzD5xSgkJikxMRp3Kcgl1jaAJlWg4HrGj2JezQbyln0tcABkXArV9fyXujfkTS6F4k2YnBfG2t9WnGrxvdyH03MAkPETFXzJEX1e2nppDFgJCY5zfktPA_7qtMX7bvOia_x8vYDV5jru8f_lHmpHJFpdb6lj9fPNjwMfQYwdoSCAiJuEvs5YKIo13MlHXgzWpg3U9RxO4rbVAaN1kqjivyawMruhLUZMSXzm4KVIP0QcqD8_8TBCM')" }}
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">3:45</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">Viral Dance Challenge 2026</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">2.3M views • 2h ago</p>
                  </div>
                </a>
                <a href="#" className="flex gap-3 group">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-center bg-cover group-hover:scale-105 transition-transform"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD88Gc6SKh61I2zQlS9OYNq2fv-ZUTg7szl9GLEtZZ0D8hs7HlLYF8rSjewT1TFpa1P_K9gkHp7F6erJ5L-L5IcgIfmualLwJFhTI1ncesNjurQIqHjqSfXYlC7OfiVzwxWqnVFlTlftZprkBB3wGRGSUZsVm0JQuLPQy9n8qZbbHvcpuT2qGKO6oqHuzSNWN-VOrAszoJCDiDcQQscdg9zJi13SfsaSirILBsmCLFBqRKNFnk2sxU4i5ucKtpfQvqN70NSSTDgDiE')" }}
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">15:22</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">How to Build Amazing Apps</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">890K views • 5h ago</p>
                  </div>
                </a>
                <a href="#" className="flex gap-3 group">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-center bg-cover group-hover:scale-105 transition-transform"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnslKZHzzYYdoOKFi9BuSxezVjDVMoOEAC_I4PPxoWYt1LVc5U_0cMvT27T5k3D_qBiXUIOUcwQmPH8LXApaEu48nG1uqTLTSs66MiM1ZDldGIlcHwXH1HP5fyKvU37WjbUWnku8aEz8QFoQI5zLxjiyrv5C8wYeiPFvP1lkdgffB05mXE0-WSEWzYmrO5n1Lm24SjvTg-hI_Ve7g9sfbyAu7rdZ7ZYMLEr0F9PphcaDDktXNwPyLO4wGFPie469lLYkq4M0v_2ZA')" }}
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">8:15</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">Cute Puppy Compilation</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">1.1M views • 1d ago</p>
                  </div>
                </a>
              </div>
              <button className="w-full mt-4 text-sm font-bold text-primary hover:underline">Show more</button>
            </div>

            {/* Suggested Creators */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Video Creators</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="size-10 rounded-full bg-center bg-cover shrink-0"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSWPnoMzs13Qbqrbo3c--T5z1m1hAXLMCZXyFGmpQx0naBR8JGqNaAeTj18jNlqoHntFb5VmSaTsMHRzGR--aotRtQCOYk3eEuqt-welKYIXBYs_dXQtEioCeYMLgmPkSZjSkK1-G3-AhcWekSdUKYO723ntkM1FL3xqZsjLwItCQSGwtaKDSR_B2OOqTsWO-2Zzz9aaolFsw4ugzzWiaBnYd1UFPShEMTI5ya8BFXZesxWQmVFqobsPTJqpPbbYFfuDN5zAgS-Lc')" }}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">Alex Johnson</p>
                      <p className="text-xs text-gray-500">125K followers</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors shrink-0">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="size-10 rounded-full bg-center bg-cover shrink-0"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJGtGtdBLPLUYAmaXdYKrm5EW-OGIwiLvSAL261wBi8rzv4GNpgz8D8NB2RJYqxcJpkGKFZCYaQDWVnBeRva3iWPzAhYkQVQZ4U81Rc48KMgdLSQbxb0xygSZGTtbWXmoRUdEEwR8vA_X7fOobA7W6hk2Syg8hftEuo1TL4yP9khJD-3ldx60yzj-UtLYew3g98YCqEMbpwHzi4Ck4q9gBp0fHVqJtwwNypHCPZQgDM-GbCZ2Foo70HqPDKeVx9Z796jeYMZUKMZA')" }}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">Marcus Reed</p>
                      <p className="text-xs text-gray-500">89K followers</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors shrink-0">
                    Follow
                  </button>
                </div>
              </div>
              <button className="w-full mt-4 text-sm font-bold text-primary hover:underline">Show more</button>
            </div>
          </div>
        </aside>
      </div>

      <MobileNav page={'video'} />
    </div>
  );
};

export default VideoPage;
