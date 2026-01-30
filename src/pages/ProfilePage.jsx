import { useState } from 'react'
import HeadNav from '../components/HeadNav'
import MobileNav from '../components/MobileNav'

const photos = [
  { id: 1, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS3lg1DYDn7kOtIvLW_lgbFev5O9BtMcljDRkC39zMln_6TM8K66LSyFwr7R-u0FrdbwE2dakhznyBgGjM64eg47ciMj8lD-0CdGWKlo9jwcvGMH8OXl-BBZV9pZk1_7V1-hmqs74hxg9ST_HzzQb1EYDEkHShADQIiZvQ5ZGK0U7eBlqS-ZNWdssZJTN_4dy-9q5d3iFv5gaE2MzDOsVHjEb3Oi84Nu4DY7ivVgb7ZReUJBcXHzNDKoFMMkKBQ2ttzUw1YRSqMus', alt: 'Emerald lake in mountains' },
  { id: 2, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxP4-xSoTHL9VkD-9jC4uM5PP3NSH2WgDns1bV4SvIBtRfAFXCEjT5MCmZHt7dMiYo-ovEYTRZt172St9i6ENRFW6cVy1GOPKFJppJeEQUaPoua3EQw5tyqM36zVeJ0Mz4v5QrBD40sDX1qxfumfQ1HOrucJoX8v0jT7HUKhiHoPzLy43ICkuy1abSgEYHnWCrtzwIkbffYc-kfNnhaigrPGOzkOdXK8uA11JXXTLQyL71drZ0lQ4dUw67t92vOod6Sg30Dl8Xb38', alt: 'Misty morning in forest' },
  { id: 3, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyYgpmhI554HCwMhv91FPKzrHyX6e4mNMp_HseHbK3iBxlqzAq0IIORCsKSm-DVlPpJSYpxS7rxMhGFlKLBlGCpiR6Jrw3fslE9v_MNmRnzQ721BTQPoWfTiXUbHQvrr5NtQDO9hHuHjrEXyUzqb6G2gpk5Bnj88OKeBn3gjguDebWlQV8B_X2NIdDOJYi5JAOyz2Fv4tv2zusPAkW6kQyWY2srR7u8cFSiR8mPIb_T9wOUGCPLeAbgERDVm3sU0WAxpN9ek52A2w', alt: 'Sunlight filtering through trees' },
  { id: 4, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChwaF6zC6GNWUHCVG-wwrC9kwYub1iwsOI9XxPqm07KI0KgRXNx_l9vWMr-VF7anDzCiQ1P5zfk2NtiVOk5jGCdI1k8TDWGsjoI2dD8TJfhMoosvIhX7qXzf15dd8lsI38w6P9Bopsg7_5O8xGnMeH6rS0n2n_xLaCLtllGe5s1khxS5dUQLIcxp_03BPDfZahqhbfAxmUXLBHBJU6otu1NP5f2qdnMYy1Ao-dovA_Zbh9G4HwQAuVxjavCr5OffFDpRPdF01FNQo', alt: 'Modern architecture glass building' },
  { id: 5, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCislVVqJdkUczPOvTcJnXywEm81NhGFxylGKNRAIQkFEPxcI-oZ-9D4UJh-Duy8mCHmPAfUBQFvKprsEXmVRwmQP4NdxmAWfNzU5T2L2PcpAGk6ui5hJgsiceYBuebl5qt5rOL16LZAbSSIDRjx8gSTQafSDQCzM9FPzqAf-zBMKkz5NHFJjF42_PMInQ0Z868TrHTK4osy0p64nYk_Gq5Da_w63YqSG7uUn3ENp-AmtF_8IuO4MaM8fCL5fbWswvtQ7VGt_NzeMM', alt: 'Rocky coastline at dusk' },
  { id: 6, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRt2fRpZ8KkfvqwhpV2HQAcB0aN2pM8AaHYKFi5eAoIVNOBORfVkQXHnQV5aGfH5ubQXFSOmxrk7Gny6lSV629kynXkjBA_lJWPYzptzugbe9Ck-9yPg06fg5R61AQd9vUh6sCGdfg8CeRPMDQ1ftVE1P3CmfCWq-8ZCE8m-SiiX-SgzlJH_9cOQy9HAlfRznACq57fTk8foyFoYOe_H3NSHb7US6RC655DFb-C3wLQcf1oX62zPS9YS9LShRBAvP19HYi0CDkSr0', alt: 'Vibrant cityscape at night', extra: '+12' },
]

const posts = [
  {
    id: 1,
    author: 'Alex Rivers',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrFaspeThe0rgypd5nnHjWjpeo987PW_-9uuN9ata2k-UYqhXg4ZU96BjTH-un_j57WrHSXiO8WiN16JHXxhTplz9lNN_3wSDjtx7KqTFV1AgczSQMZHf9KxKTuCWZnLUClUv3C1PtNbn_sx1gA5IwS2vlQSB_F5a6b5Wl94l8WvWiwBZ2xehlfdSYcdkIrr3XfpnJ-dAXmVAAfV4FlhPRgbdSawBEwYfszfMwydBIQwSYWwo7fO3Wnrx_4Zin3_LMky8NwQEENZc',
    time: '2 hours ago',
    visibility: 'public',
    content: 'Just wrapped up the first phase of the new design system. Really excited about the direction we\'re taking with the color palette. 🌊 #design #ux #ui',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDosGQRm5CxUeSYlJ8Ts56tbdVkgFmqNxs49Aq81l-yvaom9RbbAONpc80sMss0EE0oSH6ROi4OOOLkSukZShqT7EP9bc0iCze7HCygScMLZiWcSIhUHWmn_O-wPzcOQDlMXiaUWtg4ydJ-q70Wr63p1j_wNOCL0UAhfP_-QbW9T28hdTxI8oK6o9hfGZG_YB83rSck3jTBJZAD_xK5ttcf5C6K7qUkVyA6Jh1WPA5kv2PQokGk_j7u00rdHMfsV72rWW2YOfWnwUU',
    likes: 242,
    comments: 18,
    isLiked: true
  },
  {
    id: 2,
    author: 'Alex Rivers',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn3mYDasJojHTqXZTSkLIg7RwPXKfnjTs6HjlGrsf3n2rxg2_6zwWYZj0m4MJvBKfIkbgjoNIxNZ_bbaw1TphLSDrUM-iB3jkkvlzO4QUAwal172ZTa20ETM8td3J0_sf6ZkUBLZueVY2qQKVIFsa9fOJBRbuamXzLY_H_RERKxCl4qH9FspHFmjH37wlofJUbsOAfv7V_XyxScGyldX2zkWTQIOKclckzozbzne693RlKUSm6cSRPIaCWqm07TJLNf4DXLfzuE2o',
    time: 'Yesterday at 11:45 AM',
    visibility: 'group',
    content: '"The best way to predict the future is to invent it." - Alan Kay. Thinking a lot about this lately as we build for the next generation.',
    image: null,
    likes: 89,
    comments: 4,
    isLiked: false
  }
]

const PostCard = ({ post, likedPosts, toggleLike }) => (
  <div className="post-card bg-white dark:bg-[#252529] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-cover bg-center ring-2 ring-primary/20"
          style={{ backgroundImage: `url('${post.authorAvatar}')` }}
        />
        <div>
          <p className="text-sm font-bold">{post.author}</p>
          <p className="text-[11px] text-gray-400 font-medium">
            {post.time} • <span className="material-symbols-outlined text-[12px] align-middle">{post.visibility}</span>
          </p>
        </div>
      </div>
      <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">more_horiz</span>
    </div>
    <p className="text-sm leading-relaxed mb-4">{post.content}</p>
    {post.image && (
      <div
        className="h-80 w-full bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url('${post.image}')` }}
      />
    )}
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => toggleLike(post.id)}
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{
              color: likedPosts[post.id] ? '#ef4444' : '',
              fontVariationSettings: likedPosts[post.id] ? "'FILL' 1" : ''
            }}
          >
            favorite
          </span>
          <span className="text-sm font-bold text-gray-500">{post.likes}</span>
        </div>
        <div className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-gray-400 text-xl">chat_bubble</span>
          <span className="text-sm font-bold text-gray-500">{post.comments}</span>
        </div>
        <div className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-gray-400 text-xl">share</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">bookmark</span>
      </div>
    </div>
  </div>
)

const Sidebar = () => {
  const suggestions = [
    { name: 'Jordan Smith', username: '@jordans', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCihjNgyQjzPyYBPltzmwvfriWLcsA-1IkC0566v2KnvG8nO8PhSeBrR4rtO4vuCs4rnK__wO4OC8AddaY-ewm0Zw-kQ2fDpBc8qoUzAT7PgiVorHGZrhCnZdl0cz-6KVuEDI5KB9Zx8l1HXeqa7zwBsmxN2pFZQLclsDSPLyl7BfnB5bSMwZ6MjJcO9bRKDhlNdszokSk5LvKhIhUzn6pTlKoE_2QfZaofFWk-h-hhKUB7J4o4Wz-2JK8iFBFlLN4C88T9pOcmwPY' },
    { name: 'Marcus Reed', username: '@marcus', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJGtGtdBLPLUYAmaXdYKrm5EW-OGIwiLvSAL261wBi8rzv4GNpgz8D8NB2RJYqxcJpkGKFZCYaQDWVnBeRva3iWPzAhYkQVQZ4U81Rc48KMgdLSQbxb0xygSZGTtbWXmoRUdEEwR8vA_X7fOobA7W6hk2Syg8hftEuo1TL4yP9khJD-3ldx60yzj-UtLYew3g98YCqEMbpwHzi4Ck4q9gBp0fHVqJtwwNypHCPZQgDM-GbCZ2Foo70HqPDKeVx9Z796jeYMZUKMZA' },
    { name: 'Taylor Swift', username: '@taylor', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy9-eD1QBqMDntg6hroMBddKHvwAEsO_q9TvC79jTmH5JEUzPf8HtoRPZQjF3v-J77VJOmjMqYsB7ChTzCKMoT39zyqD2CeOhxNKd4esUMUTHo9xwe7OhX1-luxgroePMJDJB3ldr09ZkYeX15snHHrLTR17bt7HCacRCLgt_Np0FTPq4-n5I697YYxi_ByIwL6WRRi9_DZlqUOBu1ZD5kfmD_DhgAS_SZ_UsMJCnK61rJyoqTY0SSNMFdlTzuiEK5_ibpBCdS0wY' },
  ]

  return (
    <aside className="hidden xl:block w-80 shrink-0">
      <div className="sticky top-24 space-y-4">
        {/* Suggestions Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">person_add</span>
            Suggested for you
          </h3>
          <div className="space-y-4">
            {suggestions.map((user, index) => (
              <div key={index} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url('${user.avatar}')` }}
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate dark:text-white">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.username}</p>
                  </div>
                </div>
                <button className="px-4 py-1.5 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all shrink-0">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm font-bold text-primary hover:underline">Show more</button>
        </div>

        {/* Footer */}
        <div className="px-2 py-2 text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <span>© 2025 SocialHub</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('Posts')
  const [likedPosts, setLikedPosts] = useState({ 1: true })

  const toggleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }))
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e171b] dark:text-gray-100 font-display transition-colors duration-300 min-h-screen">
      <HeadNav />

      <main className="max-w-7xl mx-auto flex gap-6 px-4 py-6 pb-24 lg:pb-6">
        {/* Left Side - Profile Card (Desktop) */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-24 space-y-4">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              {/* Cover */}
              <div
                className="h-32 w-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzAkT4K3nDlHlQiXlDGAROj3mbXkm-uEyYanaU2DlyAEJc-ukhfMhEiDh6uJzgmtKV3Wtvwjd4wvkS0deOz_2gWuQPQCjU8x1K99v1R8UMaAu4x6AJ7LPAK_rD6Udhzu8AgsmMpUTIMKaL_KkdnQ8vYfmV_nlN1hEhPnl86hPJ4d-kkDqtpi35x2lTurq9r0Ab3ill5Xb1Ioa7IT3Pmh6L4A9lqmBz_w9e4NCRpgcBtbniw9CbLfufdymj1CADD8YV6Ngl8QQNtU8')"
                }}
              />
              {/* Avatar */}
              <div className="relative px-5">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div
                      className="w-28 h-28 rounded-full border-4 border-white dark:border-gray-900 bg-center bg-cover shadow-xl"
                      style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbJlMC-XDwMyguR_ZuGohjZ-UXQ3-drwreSeC2P6wlkB-XZPMFa2V10x9QN3S3z1Gp-PvB8Xaevy-vlyFAtYB-Z6JoOMHfQHpBPXneT96pT5PVExPgKcdSL9i7ZclroHhUgm4eXy257GArDeQSstxEYcIY2KLIMiKmtFD1_-uMZoZ2LAasoOBgGRlbxfLww_nQnNRMq_K1n7WpMAPncjcbRnemtDWSexfHd1MSpc0Ws4n0wrrMmkbVSXsKo9vj58UH_YNZ0-DoLVo')"
                      }}
                    />
                    <div className="absolute bottom-1 right-1 w-7 h-7 bg-primary rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-sm">photo_camera</span>
                    </div>
                  </div>
                </div>
                {/* Profile Info */}
                <div className="pt-14 pb-5 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <h2 className="text-xl font-extrabold tracking-tight">Alex Rivers</h2>
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: 'FILL 1' }}>verified</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">@arivers</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 leading-relaxed">
                    Building beautiful things for the web. Travel enthusiast and photography lover. 📍 San Francisco, CA
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center gap-8 mt-5 pt-5 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">1.2k</p>
                      <p className="text-xs text-gray-500 font-medium">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">850</p>
                      <p className="text-xs text-gray-500 font-medium">Following</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">342</p>
                      <p className="text-xs text-gray-500 font-medium">Posts</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-5">
                    <button className="flex-1 bg-primary text-white h-11 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                      <span className="material-symbols-outlined text-lg">add_circle</span>
                      Follow
                    </button>
                    <button className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white h-11 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                      <span className="material-symbols-outlined text-lg">mail</span>
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors font-medium">
                    <span className="material-symbols-outlined text-gray-500">bookmarks</span>
                    <span>Saved Posts</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors font-medium">
                    <span className="material-symbols-outlined text-gray-500">groups</span>
                    <span>Groups</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors font-medium">
                    <span className="material-symbols-outlined text-gray-500">event</span>
                    <span>Events</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors font-medium">
                    <span className="material-symbols-outlined text-gray-500">settings</span>
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Mobile View (Full Width) */}
        <div className="lg:hidden w-full">
          {/* Hero Section */}
          <div className="relative">
            <div
              className="h-64 w-full bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzAkT4K3nDlHlQiXlDGAROj3mbXkm-uEyYanaU2DlyAEJc-ukhfMhEiDh6uJzgmtKV3Wtvwjd4wvkS0deOz_2gWuQPQCjU8x1K99v1R8UMaAu4x6AJ7LPAK_rD6Udhzu8AgsmMpUTIMKaL_KkdnQ8vYfmV_nlN1hEhPnl86hPJ4d-kkDqtpi35x2lTurq9r0Ab3ill5Xb1Ioa7IT3Pmh6L4A9lqmBz_w9e4NCRpgcBtbniw9CbLfufdymj1CADD8YV6Ngl8QQNtU8')"
              }}
            />
            <div className="absolute -bottom-16 left-4">
              <div className="relative">
                <div
                  className="w-32 h-32 rounded-full border-4 border-background-light dark:border-background-dark bg-center bg-cover bg-no-repeat shadow-xl"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbJlMC-XDwMyguR_ZuGohjZ-UXQ3-drwreSeC2P6wlkB-XZPMFa2V10x9QN3S3z1Gp-PvB8Xaevy-vlyFAtYB-Z6JoOMHfQHpBPXneT96pT5PVExPgKcdSL9i7ZclroHhUgm4eXy257GArDeQSstxEYcIY2KLIMiKmtFD1_-uMZoZ2LAasoOBgGRlbxfLww_nQnNRMq_K1n7WpMAPncjcbRnemtDWSexfHd1MSpc0Ws4n0wrrMmkbVSXsKo9vj58UH_YNZ0-DoLVo')"
                  }}
                />
                <div className="absolute bottom-1 right-1 w-8 h-8 bg-primary rounded-full border-2 border-background-light dark:border-background-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">photo_camera</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Identity & Stats */}
          <div className="mt-20 px-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold tracking-tight">Alex Rivers</h2>
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: 'FILL 1' }}>verified</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">@arivers • Digital Creator</p>
              <p className="mt-3 text-[15px] leading-relaxed max-w-lg">
                Building beautiful things for the web. Travel enthusiast and photography lover. 📍 San Francisco, CA
              </p>
            </div>

            <div className="flex gap-6 mt-6 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="flex flex-col">
                <span className="text-lg font-bold">1.2k</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">850</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Following</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">342</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Posts</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-primary text-white h-12 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">add_circle</span>
                Follow
              </button>
              <button className="flex-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white h-12 rounded-lg font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Message
              </button>
            </div>
          </div>

          {/* Mobile Photos */}
          <div className="mt-10 px-4 lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Photos</h3>
              <a className="text-primary text-sm font-bold" href="#">See All</a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {photos.map(photo => (
                <div key={photo.id} className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('${photo.url}')` }}>
                  {photo.extra && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                      <span className="text-white font-bold text-lg">{photo.extra}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Activity Feed */}
          <div className="mt-10">
            <div className="px-4 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6">
              <div className="flex gap-8">
                {['Posts', 'Reels', 'Tagged'].map(tab => (
                  <button
                    key={tab}
                    className={`pb-3 border-b-2 text-sm font-extrabold ${
                      activeTab === tab
                        ? 'border-primary text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-400'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 px-4">
              {posts.map(post => (
                <PostCard key={post.id} post={post} likedPosts={likedPosts} toggleLike={toggleLike} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Content Feed (Desktop) */}
        <div className="hidden lg:flex flex-col w-full max-w-2xl">
          {/* Photos Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">photo_library</span>
                Photos
              </h3>
              <a className="text-primary text-sm font-bold hover:underline" href="#">See All</a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {photos.map(photo => (
                <div key={photo.id} className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity group" style={{ backgroundImage: `url('${photo.url}')` }}>
                  {photo.extra && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                      <span className="text-white font-bold text-lg">{photo.extra}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="px-5 border-b border-gray-100 dark:border-gray-800">
              <div className="flex gap-8">
                {['Posts', 'Reels', 'Tagged'].map(tab => (
                  <button
                    key={tab}
                    className={`py-4 border-b-2 text-sm font-extrabold transition-all ${
                      activeTab === tab
                        ? 'border-primary text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-5 flex flex-col gap-6">
              {posts.map(post => (
                <PostCard key={post.id} post={post} likedPosts={likedPosts} toggleLike={toggleLike} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Desktop) */}
        <Sidebar />
      </main>

      <MobileNav page={'profile'} />
    </div>
  )
}

export default ProfilePage
