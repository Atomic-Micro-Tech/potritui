import MobileNav from '../components/MobileNav';
import HeadNav from '../components/HeadNav';

const GroupPage = () => {
  const yourGroups = [
    { name: 'Photo Club', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIg7eZwUqY5qYAk0T3mQgpuonb4whp3y0uyh9_UyNVzZe_LHcym_vsrfW4TcR3r28jqY3LNIHpV2X17tKbWcLk00Au_yRbpV9I3AInJ9jiIbjRI4PxDdcYxKQnJZhi1SFg1UU23NBMxs54olZ5IpsTQrI88JsB5UGgDMhm8clAGmRJ6naYz8t3GYx7VcCDzEjQoS7mJmeJ8vyZInQ_YTmz6WcCrYZBMlmr2DUo-aKyADvlFYjPFJx9maraspZeNlP4JMNjQ3F3urY', isActive: true },
    { name: 'Runners', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzCzxqrAsUClP_De-Jfq3KQQAunZ8IFE_7958C3ToM4xUzFM9emQLmTJqMkHtJvk1MDrYFvO14We3iHkB4OEF_NT3wj9yE5OQAb0Iq7tGNZxSYvgk6LOubPbHe3e8nPBZ55o5Bk3eHhCKS2U_IqY_zgbdsFZh-w6oQuAgk3FENfQ9TsqqEArnQh48P0ydlHrx7cbrZFeFIeUZIbJ4fmG0WTQHpWFtEvVIrmGNLXtFRdde0mQJFZQBek8yWKtqBeOt4EV5__T1wbew', isActive: false },
    { name: 'Tech Talk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiz5vLNUtqhMBI0923PdYMJBXdS4ReIuanJcN6lccWWQEECrWeZ025EwJA3bACuOwZePyOolHtnsK_rByjz5yfS7jbztDX3k0hYyvsWpIE8xCQTCoKwmnMQzYJy4c2w2AqHxInfL697vkpD_VFZ8vzTVGPzHMf8WwMg6SoDzn8rY6zed35PLc_0CRY7uCj6juCfZ08PaR__k89C7f7GJW-8Mb3152lJepgiXWS3ZDdKLFhT0Cgc6UpZltb_k0-rSPmBwRV0-Rv7gc', isActive: false },
    { name: 'Designers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2K00QfNGrUO6b_qHBSPOEBp4e3Ve0HcpNdDq0KdTwgftu4ATs-MzAzg6N4qBV4usQevqU_u0Qcs4Ae-wcpgiCqXIp8caHO21YX_ZhqB78_CnMmt8Fsnnioa2IgLwv4WoDrGGDTJzSfUTMCk3EyjoMan-gMnOgyPSHSOe8FbMSvI-5L-yKdBqc0qeBudG-TElaHyT2IUHv4h52yta8LsN09ws_mBlB1aGT4VaGkyrrP34JxxVsqfOA8FK_vci7AZtkh_yaJODh0bg', isActive: false },
    { name: 'Gaming', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhBULCMBT94zTRJS0-e_U0AEWwWZt1pX63mTo0vAAjSrHdujKczF0vdwFkjhCQv0Sjn7NXq-yOV-7TzSaq28KDmTxjrt5x-kJeVW0al42vbrplxpYBHg6TAu_g8aMNuuSDMjGOEe0T2DubV45TJRYLlZh5Pzsg01HRsZ6Ssf6nTU-5KOFsOIm5yfn-QlppVinw-qG70wNlJ8ptAb-ioY4eg-FOuQg_1e4baVHVdNosV_HMrshzf1KzkMHf81BreVosYKYuGHDPu_s', isActive: false },
  ];

  const suggestedGroups = [
    {
      name: 'UI/UX Design Masters',
      members: '12.4k members • 15 posts today',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0y9kOjmWaOUvo8-GPZPmDKbHgV9P2v9Z70Co1ESPoT-4FPMhAQUvSJq_0QDO0USEcFxtFAnUw-KqX7SwbCIstH1FwmfD6TamM6nKwwy9EkumTWv4I5rRQejude01vfeiGgXQr5qTrXlxjYlGur7RhSrr9s7pyglXgZualiCmaIaWAm1MMYw7Pe0h8u8_ZLSnd4SgOcc1XAYG9KFvgFnVVoNwaolUyMadAaSHbjwBoW7yBawqo3hIWfVvBiMIPJZWkQEUbbzXKeNs',
      badge: 'TRENDING',
      friends: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDdG5PXF7JEDOK_I6XjRBr3h7ZvSd3XpVQtlxIRDaNEg1uabJkg5rq1p8oCZnoIG-N-yTG2eXVaL49hX0HtN5BcvUcpQS2TAeWDiP07gjGUBNVB8Gi5079jXjSZ_iGxP-DjzomofSwG-4SKaspGS_1_O510JQs2iBMXrzWpd0RvhwAFQOmYGiUN_mAsTzzs2WYsy0mzpuADoE-CGzd4JmQcJXwcKghD4dLjDTiplRYnFKsTTssuZ-_F2gpuX8EukDCPxPw76W5ftt8',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpk13xzMBkE-mAxROuBtdaODxnpLIzgTnIrQBuSlcQziA-oK_UZL0Lh3BMYQdiH9RFva-uce3_2CFkaBbS7KUbm8ZFyNs54tRyphtYTEw7T7NH50VGTzWz5EHpKk1TGjGcoA_DxRaeI5v9J8KpYhSX4iHsPm7wXmUQpCfybfA74XqZ67F1hnY6FuVfQoDW1PTmV9E6F_3TNEwFXoWjgGy35bvimH4JIfMtfHZjjWYa0JKUn5kJeM0aaeP-glNYrq-x25UqH2Z_PB4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-94nqPMe4sI0GO7UWVi4NraJPHWEhpBzRfjV2Z_sKd0VMfirpVR2g0Yoz-9gt7jY6Q_4sYS_MnllYeIwGX7xOFtvqhL9Rp7C2TXyk5J7_c7QYx3CtCKR-oN_xj7fuAbqUr_o-4ICAWpFiG3muFqKlQzhDdkki6cJQ1D4JUZINUIpFnBIKcB_29dEgGFS7KZ_lPpl_Yn8ceqEeLqbbAOCNXj_fj-SF12g3RYV_tNjd37029PiFgJLG0-YKe2rIUut4cWBJFvmttVs',
      ],
      friendsCount: '+ 8 friends joined',
    },
    {
      name: 'Healthy Eats 2024',
      members: '45.2k members • 128 posts today',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYJ5lXe3jNlmkv5oBi9CkE3Ln-RJbLfKpO8M01d6VoNIS8akyfHw762gK0DDDI4VG0URncaD3JLR1756TDcQKGYUm9cWWtBPIpzbKiHstfolkG3fwxsNu4IvK7ZP0hWMsdOGxHeCm_YP54gFf5Cm5HzVaXMWavIH9xD5dqPzJS-GyB8ahPgZziV6cHhKOYTShMV-ue-eV1oUMbQgs3IekbI3odxyCUm0l1czKsN1m5y0BvMCfwXzhP87OictImJrrEiZ1sHmQGALQ',
      description: 'A community for sharing nutritious recipes, meal prep tips, and wellness journeys.',
    },
    {
      name: 'Urban Explorers',
      members: '8.9k members • 3 posts today',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs49Nk2DLpVIn4dm5y-q_dU7VMqKA3N_cZypNYBuXJPre-TCMMkMpZ-tS531yKOcuYwIuoxCFEk4jy0MJXQfKjiWIlcKfQnLHZ7n5j5O8TwPSzHbB-dBRNrZK18CRmhusrSpZJTBfUPle12fTBkjppiJU4OSoY54MXhr8bFwVWhG0y6xeFmkzRI-XxRgXtZnogFJaq3aL_oxPGgXBQyYI9ExWzjOJETGT0QJEugwVrwKH9ox3R4ch5XOPBCxt3kkrXxY_cOSXqce4',
      badge: 'LIVE',
      location: 'New York City, NY',
    },
  ];

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
                  <p className="text-lg font-bold text-primary">{yourGroups.length}</p>
                  <p className="text-xs text-gray-500">Groups</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">248</p>
                  <p className="text-xs text-gray-500">Posts</p>
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
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined shrink-0">home</span>
                    <span>Feed</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold">
                    <span className="material-symbols-outlined shrink-0">groups</span>
                    <span>Communities</span>
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
          {/* Create Group Section */}
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-[28px]">hub</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Groups Hub</h2>
                  <p className="text-sm text-gray-500">Discover and manage your communities</p>
                </div>
              </div>
              <button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all shrink-0 hidden sm:flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                Create Group
              </button>
            </div>
          </section>

          {/* Your Groups Section */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold tracking-wide uppercase text-gray-500">Your Groups</h3>
              <button className="text-xs font-bold text-primary hover:underline shrink-0">See all</button>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden sm:grid grid-cols-2 gap-3 mb-4">
              {yourGroups.map((group, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`size-12 rounded-xl border-2 p-0.5 shrink-0 ${group.isActive ? 'border-primary' : 'border-transparent'}`}>
                      <div
                        className="w-full h-full bg-center bg-cover rounded-lg bg-gray-200"
                        style={{ backgroundImage: `url('${group.image}')` }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate">{group.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Active now</p>
                    </div>
                    {group.isActive && (
                      <span className="size-2.5 bg-green-500 rounded-full shrink-0"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="sm:hidden flex overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 gap-4">
              {yourGroups.map((group, index) => (
                <div key={index} className="flex flex-col items-center gap-2 shrink-0">
                  <div className={`size-14 rounded-full border-2 p-0.5 ${group.isActive ? 'border-primary' : 'border-transparent'}`}>
                    <div
                      className="w-full h-full bg-center bg-cover rounded-full bg-gray-200"
                      style={{ backgroundImage: `url('${group.image}')` }}
                    />
                  </div>
                  <span className="text-[11px] font-medium truncate w-full text-center">{group.name}</span>
                </div>
              ))}
            </div>

            {/* Create Group Button - Mobile Only */}
            <button className="sm:hidden w-full bg-primary text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md shadow-primary/20 active:scale-95 transition-transform mt-4">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              Create New Community
            </button>
          </section>

          {/* Suggested for You Section */}
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="mb-4">
              <h3 className="text-sm font-bold tracking-wide uppercase text-gray-500">Suggested for You</h3>
              <p className="text-xs text-gray-500 mt-1">Based on your interests and friends</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedGroups.map((group, index) => (
                <div key={index} className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                  <div className="h-36 w-full bg-cover bg-center relative" style={{ backgroundImage: `url('${group.image}')` }}>
                    {group.badge && (
                      <div className={`absolute top-3 right-3 ${group.badge === 'LIVE' ? 'bg-red-500' : 'bg-primary'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1`}>
                        {group.badge === 'LIVE' && <span className="size-1.5 bg-white rounded-full animate-pulse"></span>}
                        {group.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm leading-tight mb-1">{group.name}</h4>
                        <p className="text-xs text-gray-500">{group.members}</p>
                      </div>
                      <button className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors shrink-0">
                        Join
                      </button>
                    </div>

                    {group.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{group.description}</p>
                    )}

                    {group.friends && (
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {group.friends.slice(0, 3).map((friend, friendIndex) => (
                            <img
                              key={friendIndex}
                              className="inline-block size-7 rounded-full ring-2 ring-white dark:ring-background-dark"
                              src={friend}
                              alt={`Friend ${friendIndex + 1}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{group.friendsCount}</span>
                      </div>
                    )}

                    {group.location && (
                      <div className="flex items-center gap-1.5 mt-3">
                        <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                        <span className="text-xs font-medium">{group.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80 shrink-0">
          <div className="sticky top-24 space-y-4">
            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Trending for you</h3>
              <div className="space-y-3">
                {[
                  { topic: '#Design', posts: '12.4k' },
                  { topic: '#Technology', posts: '8.9k' },
                  { topic: '#Fitness', posts: '6.2k' },
                  { topic: '#Photography', posts: '4.8k' },
                ].map((trend, index) => (
                  <a key={index} href="#" className="block group">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500">Trending in Tech</p>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors truncate">{trend.topic}</p>
                        <p className="text-xs text-gray-500">{trend.posts} posts</p>
                      </div>
                      <span className="material-symbols-outlined text-gray-400 shrink-0">more_horiz</span>
                    </div>
                  </a>
                ))}
              </div>
              <button className="w-full mt-4 text-sm font-bold text-primary hover:underline">Show more</button>
            </div>

            {/* Active Friends */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Who to follow</h3>
              <div className="space-y-4">
                {yourGroups.slice(0, 3).map((group, index) => (
                  <div key={index} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="size-10 rounded-full bg-center bg-cover shrink-0"
                        style={{ backgroundImage: `url('${group.image}')` }}
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-sm truncate">{group.name}</p>
                        <p className="text-xs text-gray-500">@{group.name.toLowerCase().replace(/\s/g, '')}</p>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors shrink-0">
                      Follow
                    </button>
                  </div>
                ))}
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

      <MobileNav page={'groups'} />
    </div>
  );
};

export default GroupPage;
