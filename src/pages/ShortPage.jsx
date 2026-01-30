import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';

const ShortPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [likedVideos, setLikedVideos] = useState([false, false, false, false, false]);
  const containerRef = useRef(null);

  const videos = [
    {
      id: 1,
      user: {
        username: 'sarah_creative',
        displayName: 'Sarah Chen',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSWPnoMzs13Qbqrbo3c--T5z1m1hAXLMCZXyFGmpQx0naBR8JGqNaAeTj18jNlqoHntFb5VmSaTsMHRzGR--aotRtQCOYk3eEuqt-welKYIXBYs_dXQtEioCeYMLgmPkSZjSkK1-G3-AhcWekSdUKYO723ntkM1FL3xqZsjLwItCQSGwtaKDSR_B2OOqTsWO-2Zzz9aaolFsw4ugzzWiaBnYd1UFPShEMTI5ya8BFXZesxWQmVFqobsPTJqpPbbYFfuDN5zAgS-Lc',
        verified: true
      },
      description: 'Coding late night vibes ☕💻 #webdev #programming #react',
      song: 'Original Sound - Sarah Chen',
      likes: '124.5K',
      comments: '1.2K',
      shares: '8.5K',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_sKS6nVX9yPhm6yHiQFhK9bPA-YTJzAtquFOU3jgken16PuwEBWWMv22XKbJP_sAra2l8a_wg-5Le2nO8VNP4N6gcIbbxTFdNFn3vjzvUJfgIUIOjcag5NWHYC32gmG8Dje_aBPuPwZMCi4P7UvY_9IRB3boVtvxA5Mj7UVrPc-O6hyvIc6_heuGmlq7YpRBu_gH69XbrS3VQL1oBeV2S00VVGQ9kcNg-puillbMhUQfte-7PcEwofPAhi1O98vYIyyvHJX3u7Hg'
    },
    {
      id: 2,
      user: {
        username: 'mike_designs',
        displayName: 'Mike Torres',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJGtGtdBLPLUYAmaXdYKrm5EW-OGIwiLvSAL261wBi8rzv4GNpgz8D8NB2RJYqxcJpkGKFZCYaQDWVnBeRva3iWPzAhYkQVQZ4U81Rc48KMgdLSQbxb0xygSZGTtbWXmoRUdEEwR8vA_X7fOobA7W6hk2Syg8hftEuo1TL4yP9khJD-3ldx60yzj-UtLYew3g98YCqEMbpwHzi4Ck4q9gBp0fHVqJtwwNypHCPZQgDM-GbCZ2Foo70HqPDKeVx9Z796jeYMZUKMZA',
        verified: false
      },
      description: 'UI animation tutorial part 2 🎨 Save this! #design #uiux #figma',
      song: 'Lofi Beats - Chill Vibes',
      likes: '89.2K',
      comments: '856',
      shares: '4.2K',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKbYMBb4L3ak7g0ZZpSPx4dtR87x9fmJq6cC6BikdX4QuwMrWGnm78yOWj2j_5xNXxNDV_b669JKiJ-Mh8A73tndPek0QWE8nZOu_tC2YPYY8FWX9yFcL_k1pbM7tDQGkb0HLSu9NDK3ipsiIBAnOjFJlTgzWCt_MCGLT8vSmoNRL_nwzV12iRmc4Rt6gEQ-T2Wj6fZh6O43-7aNuVUowlLmsgReP4uHpfGsv1AkX6UTM1vpLn1oh83NT2G7BEvCGkI2KWwMnd5Lk'
    },
    {
      id: 3,
      user: {
        username: 'travel_adventures',
        displayName: 'Emma Wilson',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2V4GTRORWCy4I6CMI0esydIPzD5xSgkJikxMRp3Kcgl1jaAJlWg4HrGj2JezQbyln0tcABkXArV9fyXujfkTS6F4k2YnBfG2t9WnGrxvdyH03MAkPETFXzJEX1e2nppDFgJCY5zfktPA_7qtMX7bvOia_x8vYDV5jru8f_lHmpHJFpdb6lj9fPNjwMfQYwdoSCAiJuEvs5YKIo13MlHXgzWpg3U9RxO4rbVAaN1kqjivyawMruhLUZMSXzm4KVIP0QcqD8_8TBCM',
        verified: true
      },
      description: 'Hidden gem in Bali 🌴✨ #travel #bali #adventure',
      song: 'Tropical House Mix',
      likes: '256.8K',
      comments: '2.1K',
      shares: '15.3K',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtIt9hzL70NLkJXgy_xOuMnyZnF5N6RNagL3RqWGf0eg3ys318twxKdbRE4ci1Mwpj5Bkl_D6CDVN8KAJtV5UZLuJTYo05TMxSWGhgWUQ0PWwy-Z1YjY5HuHXYMM7oGlYk91q-aUtVu7FZxIYWunH_2DK6umzq0ZcwAoCIfXDhig-m2nMP4nDkBwItvpSlb4AuFCXPt1HT7A_c0EmO404wKy6Totm9Zw3RBHdePJ_eyXrEA6hYR0tye8yPhZ3TbKY7B0PQOvizZVA'
    },
    {
      id: 4,
      user: {
        username: 'foodie_jordan',
        displayName: 'Jordan Lee',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCihjNgyQjzPyYBPltzmwvfriWLcsA-1IkC0566v2KnvG8nO8PhSeBrR4rtO4vuCs4rnK__wO4OC8AddaY-ewm0Zw-kQ2fDpBc8qoUzAT7PgiVorHGZrhCnZdl0cz-6KVuEDI5KB9Zx8l1HXeqa7zwBsmxN2pFZQLclsDSPLyl7BfnB5bSMwZ6MjJcO9bRKDhlNdszokSk5LvKhIhUzn6pTlKoE_2QfZaofFWk-h-hhKUB7J4o4Wz-2JK8iFBFlLN4C88T9pOcmwPY',
        verified: false
      },
      description: 'Easy pasta recipe in 60 seconds 🍝 #cooking #recipe #food',
      song: 'Cooking with Love',
      likes: '67.3K',
      comments: '423',
      shares: '3.8K',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD88Gc6SKh61I2zQlS9OYNq2fv-ZUTg7szl9GLEtZZ0D8hs7HlLYF8rSjewT1TFpa1P_K9gkHp7F6erJ5L-L5IcgIfmualLwJFhTI1ncesNjurQIqHjqSfXYlC7OfiVzwxWqnVFlTlftZprkBB3wGRGSUZsVm0JQuLPQy9n8qZbbHvcpuT2qGKO6oqHuzSNWN-VOrAszoJCDiDcQQscdg9zJi13SfsaSirILBsmCLFBqRKNFnk2sxU4i5ucKtpfQvqN70NSSTDgDiE'
    },
    {
      id: 5,
      user: {
        username: 'fitness_pro',
        displayName: 'Alex Rivera',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnslKZHzzYYdoOKFi9BuSxezVjDVMoOEAC_I4PPxoWYt1LVc5U_0cMvT27T5k3D_qBiXUIOUcwQmPH8LXApaEu48nG1uqTLTSs66MiM1ZDldGIlcHwXH1HP5fyKvU37WjbUWnku8aEz8QFoQI5zLxjiyrv5C8wYeiPFvP1lkdgffB05mXE0-WSEWzYmrO5n1Lm24SjvTg-hI_Ve7g9sfbyAu7rdZ7ZYMLEr0F9PphcaDDktXNwPyLO4wGFPie469lLYkq4M0v_2ZA',
        verified: true
      },
      description: '5 min ab workout 💪 No equipment needed! #fitness #workout #health',
      song: 'Pump It Up - Workout Mix',
      likes: '445.1K',
      comments: '3.8K',
      shares: '22.6K',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy9-eD1QBqMDntg6hroMBddKHvwAEsO_q9TvC79jTmH5JEUzPf8HtoRPZQjF3v-J77VJOmjMqYsB7ChTzCKMoT39zyqD2CeOhxNKd4esUMUTHo9xwe7OhX1-luxgroePMJDJB3ldr09ZkYeX15snHHrLTR17bt7HCacRCLgt_Np0FTPq4-n5I697YYxi_ByIwL6WRRi9_DZlqUOBu1ZD5kfmD_DhgAS_SZ_UsMJCnK61rJyoqTY0SSNMFdlTzuiEK5_ibpBCdS0wY'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const videoHeight = containerRef.current.clientHeight;
        const newIndex = Math.round(scrollPosition / videoHeight);
        if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < videos.length) {
          setCurrentVideoIndex(newIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentVideoIndex, videos.length]);

  const toggleLike = (index) => {
    const newLikedVideos = [...likedVideos];
    newLikedVideos[index] = !newLikedVideos[index];
    setLikedVideos(newLikedVideos);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e171b] dark:text-white antialiased h-screen overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h1 className="text-lg font-bold text-white">Videos</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-white">search</span>
              </button>
              <Link to="/dashboard">
                <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-semibold">
                  Feed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Video Content */}
      <div className="flex h-full">
        {/* Video Feed Container */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollSnapType: 'y mandatory' }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative w-full h-screen snap-start snap-always bg-black"
            >
              {/* Video Thumbnail/Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${video.thumbnail}')` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Play/Pause Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                onClick={togglePlayPause}
              >
                {!isPlaying && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <span className="material-symbols-outlined text-white text-6xl">play_arrow</span>
                  </div>
                )}
              </div>

              {/* Right Side Actions */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-20">
                {/* Profile */}
                <Link to={`/profile/${video.user.username}`} className="relative group">
                  <div
                    className="size-12 rounded-full border-2 border-white bg-center bg-cover"
                    style={{ backgroundImage: `url('${video.user.avatar}')` }}
                  />
                  {video.user.verified && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary rounded-full p-0.5">
                      <span className="material-symbols-outlined text-white text-[10px]">check</span>
                    </div>
                  )}
                </Link>

                {/* Like */}
                <button
                  className="flex flex-col items-center gap-1 group"
                  onClick={() => toggleLike(index)}
                >
                  <div className={`p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all ${likedVideos[index] ? 'bg-white/20' : ''}`}>
                    <span className={`material-symbols-outlined text-white text-2xl ${likedVideos[index] ? 'fill-1' : ''}`}>
                      {likedVideos[index] ? 'favorite' : 'favorite'}
                    </span>
                  </div>
                  <span className="text-white text-xs font-semibold">{video.likes}</span>
                </button>

                {/* Comment */}
                <button className="flex flex-col items-center gap-1 group">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-2xl">chat_bubble</span>
                  </div>
                  <span className="text-white text-xs font-semibold">{video.comments}</span>
                </button>

                {/* Share */}
                <button className="flex flex-col items-center gap-1 group">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-2xl">share</span>
                  </div>
                  <span className="text-white text-xs font-semibold">{video.shares}</span>
                </button>

                {/* Bookmark */}
                <button className="flex flex-col items-center gap-1 group">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-2xl">bookmark</span>
                  </div>
                </button>

                {/* Music */}
                <button className="flex flex-col items-center gap-1 group">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all animate-spin-slow">
                    <span className="material-symbols-outlined text-white text-2xl">music_note</span>
                  </div>
                </button>
              </div>

              {/* Bottom Info */}
              <div className="absolute left-4 right-20 bottom-20 z-20">
                {/* User Info */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white font-bold text-base">{video.user.displayName}</span>
                  {video.user.verified && (
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-white text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                {/* Music Info */}
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-sm">music_note</span>
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="flex items-center gap-1 animate-marquee whitespace-nowrap">
                      <span className="text-white text-xs font-semibold">{video.song}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-16 left-0 right-0 h-1 bg-white/20 z-20">
                <div className="h-full bg-primary animate-progress"></div>
              </div>

              {/* Mute Button */}
              <button
                className="absolute right-4 top-20 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all z-20"
                onClick={() => setIsMuted(!isMuted)}
              >
                <span className="material-symbols-outlined text-white">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Left Sidebar - Suggested Creators (Desktop) */}
        <aside className="hidden xl:block w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 overflow-y-auto">
          <div className="p-4 space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white">Suggested Creators</h3>

            {videos.slice(0, 5).map((video) => (
              <div key={video.id} className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="size-10 rounded-full bg-center bg-cover shrink-0 ring-2 ring-primary/30"
                    style={{ backgroundImage: `url('${video.user.avatar}')` }}
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-sm truncate">{video.user.displayName}</p>
                      {video.user.verified && (
                        <span className="material-symbols-outlined text-primary text-xs">check_circle</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">@{video.user.username}</p>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors shrink-0">
                  Follow
                </button>
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Trending Hashtags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold cursor-pointer hover:bg-primary/20">#webdev</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold cursor-pointer hover:bg-primary/20">#design</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold cursor-pointer hover:bg-primary/20">#travel</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold cursor-pointer hover:bg-primary/20">#fitness</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold cursor-pointer hover:bg-primary/20">#cooking</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50 px-6 py-3 z-50">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Feed</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined fill-1">smart_display</span>
            <span className="text-[10px] font-bold">Video</span>
          </button>
          <Link to="/communities" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">groups</span>
            <span className="text-[10px] font-bold">Communities</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="text-[10px] font-bold">Profile</span>
          </Link>
        </div>
        <div className="h-4"></div>
      </nav>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-progress {
          animation: progress 15s linear infinite;
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ShortPage
