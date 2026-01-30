import Logo from '../assets/logo.svg';
import { Link } from 'react-router';

function HeadNav() {

    return (
        <>
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md supports-backdrop-filter:bg-background-light/80 dark:supports-backdrop-filter:bg-background-dark/80 border-b border-gray-200/50 dark:border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <Link to='/feed'>
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                                    <img src={Logo} alt="potrit" className="w-6 h-6" />
                                </div>
                                <h1 className="text-xl font-extrabold tracking-tight">Potrit</h1>
                            </div>
                        </Link>

                        {/* Search Section */}
                        <Link to='/search'>
                            <div className="hidden md:flex items-center gap-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary w-48 lg:w-64"
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        search
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="material-symbols-outlined text-2xl">chat_bubble_outline</span>
                                <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-[#ef4444]"></span>
                            </button>

                            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="material-symbols-outlined text-2xl">notifications</span>
                                <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-[#ef4444]"></span>
                            </button>

                            <Link to="/profile">
                                <div
                                    className="hidden md:block size-10 rounded-full bg-center bg-cover ring-2 ring-primary/50 cursor-pointer shrink-0"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_sKS6nVX9yPhm6yHiQFhK9bPA-YTJzAtquFOU3jgken16PuwEBWWMv22XKbJP_sAra2l8a_wg-5Le2nO8VNP4N6gcIbbxTFdNFn3vjzvUJfgIUIOjcag5NWHYC32gmG8Dje_aBPuPwZMCi4P7UvY_9IRB3boVtvxA5Mj7UVrPc-O6hyvIc6_heuGmlq7YpRBu_gH69XbrS3VQL1oBeV2S00VVGQ9kcNg-puillbMhUQfte-7PcEwofPAhi1O98vYIyyvHJX3u7Hg')",
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeadNav;
