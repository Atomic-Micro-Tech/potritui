import { Link } from "react-router";

function MobileNav({page}) {
  return (
    <>
      {/* Mobile Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 ios-blur border-t border-gray-200/50 dark:border-gray-800/50 px-6 py-3 z-50">
        <div className="flex items-center justify-between">
          <Link to='/feed'>
            <button className={`flex flex-col items-center gap-1 ${page === 'feed' ? 'text-primary' : 'text-gray-400 hover:text-primary'} transition-colors`}>
              <span className={`material-symbols-outlined ${page === 'feed' ? 'fill-1' : ''}`}>news</span>
              <span className="text-[10px] font-bold">Feed</span>
            </button>
          </Link>
          <Link to='/videos'>
            <button className={`flex flex-col items-center gap-1 ${page === 'video' ? 'text-primary' : 'text-gray-400 hover:text-primary'} transition-colors`}>
              <span className={`material-symbols-outlined ${page === 'video' ? 'fill-1' : ''}`}>smart_display</span>
              <span className="text-[10px] font-bold">Video</span>
            </button>
          </Link>
          <Link to='/groups'>
            <button className={`flex flex-col items-center gap-1 ${page === 'groups' ? 'text-primary' : 'text-gray-400 hover:text-primary'} transition-colors`}>
              <span className={`material-symbols-outlined ${page === 'groups' ? 'fill-1' : ''}`}>groups</span>
              <span className="text-[10px] font-bold">Community</span>
            </button>
          </Link>
          <Link to='/profile'>
            <button className={`flex flex-col items-center gap-1 ${page === 'profile' ? 'text-primary' : 'text-gray-400 hover:text-primary'} transition-colors`}>
              <span className={`material-symbols-outlined ${page === 'profile' ? 'fill-1' : ''}`}>account_circle</span>
              <span className="text-[10px] font-bold">Profile</span>
            </button>
          </Link>
        </div>
        <div className="h-4"></div>
      </nav>
    </>
  );
}

export default MobileNav;