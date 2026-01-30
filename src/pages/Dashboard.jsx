import Logo from '../assets/logo.svg'
import { Link } from 'react-router';
import MobileNav from '../components/MobileNav';
import HeadNav from '../components/HeadNav';

const Dashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e171b] dark:text-white antialiased min-h-screen">
      <HeadNav />

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-6">
        {/* Left Sidebar */}
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
              <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-100 dark:border-gray-800 pt-4">
                <div>
                  <p className="text-lg font-bold text-primary">248</p>
                  <p className="text-xs text-gray-500">Posts</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">12.5k</p>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">543</p>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold">
                    <span className="material-symbols-outlined shrink-0">home</span>
                    <span>Feed</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">explore</span>
                    <span>Explore</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">groups</span>
                    <span>Communities</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">bookmark</span>
                    <span>Saved</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">settings</span>
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 min-w-0 max-w-2xl pb-24 lg:pb-0 mx-auto w-full">
          {/* Composer Section */}
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
            <div className="flex gap-3">
              <div className="shrink-0">
                <div
                  className="size-10 rounded-full bg-center bg-cover bg-no-repeat ring-2 ring-primary/10"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_sKS6nVX9yPhm6yHiQFhK9bPA-YTJzAtquFOU3jgken16PuwEBWWMv22XKbJP_sAra2l8a_wg-5Le2nO8VNP4N6gcIbbxTFdNFn3vjzvUJfgIUIOjcag5NWHYC32gmG8Dje_aBPuPwZMCi4P7UvY_9IRB3boVtvxA5Mj7UVrPc-O6hyvIc6_heuGmlq7YpRBu_gH69XbrS3VQL1oBeV2S00VVGQ9kcNg-puillbMhUQfte-7PcEwofPAhi1O98vYIyyvHJX3u7Hg')" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <textarea
                  className="w-full border-none bg-transparent focus:ring-0 text-base placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none p-0 pt-1"
                  placeholder="What's on your mind?"
                  rows="2"
                />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">image</span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:inline">Photo</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-[#f43f5e] text-[20px] shrink-0">videocam</span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:inline">Video</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-[#eab308] text-[20px] shrink-0">mood</span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:inline">Feeling</span>
                </button>
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all shrink-0">
                Post
              </button>
            </div>
          </section>

          {/* Stories Section */}
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold tracking-wide uppercase text-gray-500">Stories</h3>
              <button className="text-xs font-bold text-primary hover:underline shrink-0">View all</button>
            </div>
            <div className="flex overflow-x-auto gap-4 hide-scrollbar pb-2 -mx-4 px-4">
              {/* Create Story */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative w-20 sm:w-24 h-32 sm:h-36 rounded-xl overflow-hidden shadow-sm group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKbYMBb4L3ak7g0ZZpSPx4dtR87x9fmJq6cC6BikdX4QuwMrWGnm78yOWj2j_5xNXxNDV_b669JKiJ-Mh8A73tndPek0QWE8nZOu_tC2YPYY8FWX9yFcL_k1pbM7tDQGkb0HLSu9NDK3ipsiIBAnOjFJlTgzWCt_MCGLT8vSmoNRL_nwzV12iRmc4Rt6gEQ-T2Wj6fZh6O43-7aNuVUowlLmsgReP4uHpfGsv1AkX6UTM1vpLn1oh83NT2G7BEvCGkI2KWwMnd5Lk')" }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full p-1 border-2 border-white mb-1">
                      <span className="material-symbols-outlined text-sm block">add</span>
                    </div>
                    <span className="text-[10px] font-bold text-white shadow-sm">Your Story</span>
                  </div>
                </div>
              </div>

              {/* Story 1 */}
              <Link to='/clips'>
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="relative w-20 sm:w-24 h-32 sm:h-36 rounded-xl overflow-hidden shadow-sm ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark cursor-pointer">
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtIt9hzL70NLkJXgy_xOuMnyZnF5N6RNagL3RqWGf0eg3ys318twxKdbRE4ci1Mwpj5Bkl_D6CDVN8KAJtV5UZLuJTYo05TMxSWGhgWUQ0PWwy-Z1YjY5HuHXYMM7oGlYk91q-aUtVu7FZxIYWunH_2DK6umzq0ZcwAoCIfXDhig-m2nMP4nDkBwItvpSlb4AuFCXPt1HT7A_c0EmO404wKy6Totm9Zw3RBHdePJ_eyXrEA6hYR0tye8yPhZ3TbKY7B0PQOvizZVA')" }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>
                    <div className="absolute top-2 left-2">
                      <div
                        className="size-6 rounded-full border border-white bg-center bg-cover"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMsAd40ptg4WX5NGwzWv309WUyLBweAGyrgUHZnO27Nl_HBIX0EwxT65efIELpo_fh6VfMiQ4v5Oulc5VHnLAIIz_i2FCeDWYQEdjnfgKZ80k0hvZXk9I0mQugVTfPZ6rFsXdH1O8LWx7o5sGULDFs3aBJt0be_DRV2GCZnwztngcDdMVfXC9TI-3X4JhVDN3xnMAdB04HpuBKoInafdzlhA-TJVf8roAN42WJc7vGCyKCMelruwk2gcrn2cjKeIErFd2bMVws0IM')" }}
                      />
                    </div>
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white">Alex</span>
                  </div>
                </div>
              </Link>

              {/* Story 2 */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative w-20 sm:w-24 h-32 sm:h-36 rounded-xl overflow-hidden shadow-sm ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark cursor-pointer">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2V4GTRORWCy4I6CMI0esydIPzD5xSgkJikxMRp3Kcgl1jaAJlWg4HrGj2JezQbyln0tcABkXArV9fyXujfkTS6F4k2YnBfG2t9WnGrxvdyH03MAkPETFXzJEX1e2nppDFgJCY5zfktPA_7qtMX7bvOia_x8vYDV5jru8f_lHmpHJFpdb6lj9fPNjwMfQYwdoSCAiJuEvs5YKIo13MlHXgzWpg3U9RxO4rbVAaN1kqjivyawMruhLUZMSXzm4KVIP0QcqD8_8TBCM')" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>
                  <div className="absolute top-2 left-2">
                    <div
                      className="size-6 rounded-full border border-white bg-center bg-cover"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3mXZmzKVEgp56tlwL2Cmr_fn9QhzC0-gDfnLYOsLyuzlLasThCaU5d7yw1QwC9RFMhD52ee0d0LkPts6WDa_lNGSLMm2SyUaMEDogjaEkTsgXKHYmXYUHwGjTiWbNBKsHfAnkz7GvJhNGriHVhtzAZdzwxJMkAuViy5UV-zHUWSu-n1tFvMwobdz7M6zJtGfL3wFUu5LoyySzyav3gu3aXUpbgfYXb1opC_Q0qXiJutOWKDxvXsxyDhkNBYlIHCchcQGzhgou6Xg')" }}
                    />
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white">Jordan</span>
                </div>
              </div>

              {/* Story 3 */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative w-20 sm:w-24 h-32 sm:h-36 rounded-xl overflow-hidden shadow-sm ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark cursor-pointer">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD88Gc6SKh61I2zQlS9OYNq2fv-ZUTg7szl9GLEtZZ0D8hs7HlLYF8rSjewT1TFpa1P_K9gkHp7F6erJ5L-L5IcgIfmualLwJFhTI1ncesNjurQIqHjqSfXYlC7OfiVzwxWqnVFlTlftZprkBB3wGRGSUZsVm0JQuLPQy9n8qZbbHvcpuT2qGKO6oqHuzSNWN-VOrAszoJCDiDcQQscdg9zJi13SfsaSirILBsmCLFBqRKNFnk2sxU4i5ucKtpfQvqN70NSSTDgDiE')" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>
                  <div className="absolute top-2 left-2">
                    <div
                      className="size-6 rounded-full border border-white bg-center bg-cover"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiLBhKAjA_AD5wF1avsurw58KCKOALiyW8iyjYjMAZGgdK5gk9y_lQ1vncjP48FLK3pHPDHgFZ4omIq543a2kVnxrr_adlAQRv5QOBXiitfhbfWEElsk2Q6Up01D57DCfW6FIUsVqi4o-MB3L-ZOfz2g-pgOGTNWkSHSwFpAWgkYGkI2Rkc0_wA5Uz1_WZl0SFXZnzynHbYJg3ezY3rSUtddul9n1AyyVI6g2X-w11vddqRvP-2RlOa3rGsskLn-2fzBv4WrZIqCs')" }}
                    />
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white">Casey</span>
                </div>
              </div>

              {/* Story 4 */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative w-20 sm:w-24 h-32 sm:h-36 rounded-xl overflow-hidden shadow-sm ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark cursor-pointer">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnslKZHzzYYdoOKFi9BuSxezVjDVMoOEAC_I4PPxoWYt1LVc5U_0cMvT27T5k3D_qBiXUIOUcwQmPH8LXApaEu48nG1uqTLTSs66MiM1ZDldGIlcHwXH1HP5fyKvU37WjbUWnku8aEz8QFoQI5zLxjiyrv5C8wYeiPFvP1lkdgffB05mXE0-WSEWzYmrO5n1Lm24SjvTg-hI_Ve7g9sfbyAu7rdZ7ZYMLEr0F9PphcaDDktXNwPyLO4wGFPie469lLYkq4M0v_2ZA')" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>
                  <div className="absolute top-2 left-2">
                    <div
                      className="size-6 rounded-full border border-white bg-center bg-cover"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDy9-eD1QBqMDntg6hroMBddKHvwAEsO_q9TvC79jTmH5JEUzPf8HtoRPZQjF3v-J77VJOmjMqYsB7ChTzCKMoT39zyqD2CeOhxNKd4esUMUTHo9xwe7OhX1-luxgroePMJDJB3ldr09ZkYeX15snHHrLTR17bt7HCacRCLgt_Np0FTPq4-n5I697YYxi_ByIwL6WRRi9_DZlqUOBu1ZD5kfmD_DhgAS_SZ_UsMJCnK61rJyoqTY0SSNMFdlTzuiEK5_ibpBCdS0wY')" }}
                    />
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white">Taylor</span>
                </div>
              </div>
            </div>
          </section>

          {/* Feed List */}
          <section className="space-y-4">
            {/* Feed Item 1 */}
            <article className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="size-10 rounded-full bg-center bg-cover ring-2 ring-primary/20 shrink-0"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSWPnoMzs13Qbqrbo3c--T5z1m1hAXLMCZXyFGmpQx0naBR8JGqNaAeTj18jNlqoHntFb5VmSaTsMHRzGR--aotRtQCOYk3eEuqt-welKYIXBYs_dXQtEioCeYMLgmPkSZjSkK1-G3-AhcWekSdUKYO723ntkM1FL3xqZsjLwItCQSGwtaKDSR_B2OOqTsWO-2Zzz9aaolFsw4ugzzWiaBnYd1UFPShEMTI5ya8BFXZesxWQmVFqobsPTJqpPbbYFfuDN5zAgS-Lc')" }}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold truncate">Alex Johnson</h4>
                    <p className="text-xs text-gray-500">
                      2 hours ago • <span className="material-symbols-outlined text-[12px] align-middle">public</span>
                    </p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                  Just reached the summit! The view is absolutely breathtaking today. Nature never ceases to amaze me. 🏔️✨
                </p>
              </div>
              <div
                className="aspect-video w-full bg-center bg-cover relative group cursor-pointer"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzux59px3eAU1M-JSCsr_4nVgyijgObBRmsLEWxghUmUUQIVyQDTOnAXMXmcLK8-FuAW-pSA0SaXH9pTeDO8jwm6Fb9oCXq5gkrIiXPF9_r2R7uz8HYct7BSqiNrIa8u9UZ_kN8dry0fPHkfWYWkTXZoVaHXARZrpxlELSUgEppFQMdHyOLnRmDxdBgD3c_w8nFC4ov5rimJP4kojPXhKt-QH16fT4bfbXzCZmp8fde2YBV05FGxviR2hj26I1TVVGd7BtF9x3dqA')" }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">favorite</span>
                    <span className="text-xs font-bold">242</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">chat_bubble</span>
                    <span className="text-xs font-bold">18</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">share</span>
                    <span className="text-xs font-bold">5</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">bookmark</span>
                </button>
              </div>
            </article>

            {/* Feed Item 2 (Text only with Gradient) */}
            <article className="bg-linear-to-br from-primary/90 to-[#0e7490] rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg height="100%" width="100%">
                  <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                  </pattern>
                  <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="size-16 rounded-full border-4 border-white/30 p-1 shrink-0">
                  <div
                    className="size-full rounded-full bg-center bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJGtGtdBLPLUYAmaXdYKrm5EW-OGIwiLvSAL261wBi8rzv4GNpgz8D8NB2RJYqxcJpkGKFZCYaQDWVnBeRva3iWPzAhYkQVQZ4U81Rc48KMgdLSQbxb0xygSZGTtbWXmoRUdEEwR8vA_X7fOobA7W6hk2Syg8hftEuo1TL4yP9khJD-3ldx60yzj-UtLYew3g98YCqEMbpwHzi4Ck4q9gBp0fHVqJtwwNypHCPZQgDM-GbCZ2Foo70HqPDKeVx9Z796jeYMZUKMZA')" }}
                  />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight italic px-4">
                  "The best way to predict the future is to create it."
                </h2>
                <p className="text-white/80 text-sm font-semibold">— Marcus Reed</p>
                <div className="flex gap-6 mt-2">
                  <button className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined fill-1">favorite</span>
                    <span className="text-sm font-bold">1.2k</span>
                  </button>
                  <button className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined">chat_bubble</span>
                    <span className="text-sm font-bold">84</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Feed Item 3 */}
            <article className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="size-10 rounded-full bg-center bg-cover ring-2 ring-primary/20 shrink-0"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCihjNgyQjzPyYBPltzmwvfriWLcsA-1IkC0566v2KnvG8nO8PhSeBrR4rtO4vuCs4rnK__wO4OC8AddaY-ewm0Zw-kQ2fDpBc8qoUzAT7PgiVorHGZrhCnZdl0cz-6KVuEDI5KB9Zx8l1HXeqa7zwBsmxN2pFZQLclsDSPLyl7BfnB5bSMwZ6MjJcO9bRKDhlNdszokSk5LvKhIhUzn6pTlKoE_2QfZaofFWk-h-hhKUB7J4o4Wz-2JK8iFBFlLN4C88T9pOcmwPY')" }}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold truncate">Jordan Smith</h4>
                    <p className="text-xs text-gray-500">
                      5 hours ago • <span className="material-symbols-outlined text-[12px] align-middle">group</span>
                    </p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                  Work from home vibes today. Coffee and code ☕💻
                </p>
              </div>
              <div className="grid grid-cols-2 gap-0.5 aspect-square">
                <div
                  className="bg-center bg-cover hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqRjm0M3NohzDVFQ6B9d4rZ_WfUa50QgT0PwjRPwGfhDHXLgSqqaVM5aPIMgT8Iclv-ocC2RD-D8offmetWn-pFmrl13IBdZjUqVCk6fOtA2PxGBRcbR5h9RQThW5lGjvVcnmgPpnbZ-sIhmqd5taOhL0DKnzQnyHyGxVShnxpyl8Vm-nDWvFG9QjuhInrjRCuunssO4McrLChQ8SKeLYgw_hHOmzwHfRleeRvXlmOVWyvCbigQ_dR0H2exTkH6N-VEaKZ8ByqRf4')" }}
                />
                <div
                  className="bg-center bg-cover hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvQLhSUxEtVEKjaLG5T5HmM1IaovEPZaMfpiMzcQUbhfvvjPZ5xqYltxV8tD_0oX4r7MXPF90PAwnMFnpfBNZPsI9NuuejC22WUbv0NGDmxe38saFivuv5FcNJWegkjazG8bG9onjUYu6D4prKimrhw0MMoUvOi6KfMv2_H-7Sxddovud_nsyqgnhWIHx3sCxVzdcSoS3sj07_fpytEiwDTpo1DUZpUE34r-2H-2uzmjO3-sUJN_BJYHLyy0aB1hUvkW1t1SEAUJk')" }}
                />
              </div>
              <div className="p-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">favorite</span>
                    <span className="text-xs font-bold">56</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px] shrink-0">chat_bubble</span>
                    <span className="text-xs font-bold">3</span>
                  </button>
                </div>
              </div>
            </article>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80 shrink-0">
          <div className="sticky top-24 space-y-4">
            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Trending for you</h3>
              <div className="space-y-3">
                <a href="#" className="block group">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Trending in Tech</p>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors truncate">#WebDevelopment</p>
                      <p className="text-xs text-gray-500">125K posts</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 shrink-0">more_horiz</span>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Trending in Design</p>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors truncate">#UIUX</p>
                      <p className="text-xs text-gray-500">89.2K posts</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 shrink-0">more_horiz</span>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Technology · Live</p>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors truncate">React 19 Released</p>
                      <p className="text-xs text-gray-500">45.1K posts</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 shrink-0">more_horiz</span>
                  </div>
                </a>
              </div>
              <button className="w-full mt-4 text-sm font-bold text-primary hover:underline">Show more</button>
            </div>

            {/* Suggested Users */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Who to follow</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="size-10 rounded-full bg-center bg-cover shrink-0"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSWPnoMzs13Qbqrbo3c--T5z1m1hAXLMCZXyFGmpQx0naBR8JGqNaAeTj18jNlqoHntFb5VmSaTsMHRzGR--aotRtQCOYk3eEuqt-welKYIXBYs_dXQtEioCeYMLgmPkSZjSkK1-G3-AhcWekSdUKYO723ntkM1FL3xqZsjLwItCQSGwtaKDSR_B2OOqTsWO-2Zzz9aaolFsw4ugzzWiaBnYd1UFPShEMTI5ya8BFXZesxWQmVFqobsPTJqpPbbYFfuDN5zAgS-Lc')" }}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">Alex Johnson</p>
                      <p className="text-xs text-gray-500">@alexj</p>
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
                      <p className="text-xs text-gray-500">@marcus</p>
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
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCihjNgyQjzPyYBPltzmwvfriWLcsA-1IkC0566v2KnvG8nO8PhSeBrR4rtO4vuCs4rnK__wO4OC8AddaY-ewm0Zw-kQ2fDpBc8qoUzAT7PgiVorHGZrhCnZdl0cz-6KVuEDI5KB9Zx8l1HXeqa7zwBsmxN2pFZQLclsDSPLyl7BfnB5bSMwZ6MjJcO9bRKDhlNdszokSk5LvKhIhUzn6pTlKoE_2QfZaofFWk-h-hhKUB7J4o4Wz-2JK8iFBFlLN4C88T9pOcmwPY')" }}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">Jordan Smith</p>
                      <p className="text-xs text-gray-500">@jordans</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors shrink-0">
                    Follow
                  </button>
                </div>
              </div>
              <button className="w-full mt-4 text-sm font-bold text-primary hover:underline">Show more</button>
            </div>

            {/* Footer Links */}
            <div className="px-4 py-2 text-xs text-gray-500">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Cookie Policy</a>
                <a href="#" className="hover:underline">Accessibility</a>
                <a href="#" className="hover:underline">Ads Info</a>
                <span>© 2026 Potrit | Atomic Micro Tech</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <MobileNav page={'feed'} />
    </div>
  );
};

export default Dashboard;
