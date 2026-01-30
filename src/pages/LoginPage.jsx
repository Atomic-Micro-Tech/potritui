import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { useNavigate } from 'react-router'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  const navigate = useNavigate()

  const handleLogin = () => {
    console.log('Login attempt')
    navigate('/feed')
  }

  const handleSignup = () => {
    console.log('Signup attempt')
    navigate('/feed')
  }

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#1c1e21] dark:text-white antialiased relative flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section - Visual/Illustration */}
        <div className="hidden lg:flex lg:pb-32 lg:w-1/2 xl:w-3/5 bg-linear-to-br from-primary via-primary/80 to-primary/60 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 w-full">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center size-32 bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl mb-6">
                <img src={Logo} alt="Connect Logo" className="w-16 h-16" />
              </div>
              <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-4">Potrit</h1>
              <p className="text-xl text-white/90 font-light max-w-md">
                Join millions of people who share their stories and connect with friends around the world.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-3xl text-white">group</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Connect</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-3xl text-white">share</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Share</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-3xl text-white">explore</span>
                </div>
                <p className="text-white/80 text-sm font-medium">Discover</p>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 lg:bottom-24 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background-light dark:text-background-dark"/>
            </svg>
          </div>

        </div>

        {/* Right Section - Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:pb-26 w-full max-w-xl mx-auto">
          {/* Mobile Logo - Only visible on small screens */}
          <div className="lg:hidden mb-10 text-center">
            <div className="inline-flex items-center justify-center size-20 bg-primary rounded-2xl shadow-lg shadow-primary/20 mb-4">
              <img src={Logo} alt="Connect Logo" className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary">Potrit</h1>
          </div>

          {/* Desktop Title - Only visible on large screens */}
          <div className="hidden lg:block mb-10 text-center">
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {isLogin ? 'Sign in to continue to Potrit' : 'Sign up to get started with Potrit'}
            </p>
          </div>

          {isLogin ? (
            <LoginForm onLogin={handleLogin} onToggleForm={toggleForm} />
          ) : (
            <SignupForm onSignup={handleSignup} onToggleForm={toggleForm} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 text-center text-gray-500 text-xs lg:bg-background-light dark:lg:bg-background-dark">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          <span>English (US)</span>
          <span>Indonesia</span>
          <span>Español</span>
          <span>Français</span>
        </div>
        <p>© 2026 Potrit | Atomic Micro Tech</p>
      </footer>
    </div>
  )
}
