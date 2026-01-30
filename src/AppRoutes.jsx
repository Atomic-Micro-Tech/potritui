import { Routes, Route } from "react-router"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import ProfilePage from "./pages/ProfilePage"
import NotificationPage from "./pages/NotificationPage"
import FriendsPage from "./pages/FriendsPage"
import GroupPage from "./pages/GroupPage"
import Message from "./pages/Message"
import SearchPage from "./pages/SearchPage"
import SettingPage from "./pages/SettingPage"
import ShortPage from "./pages/ShortPage"
import VideoPage from "./pages/VideoPage"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/feed" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/groups" element={<GroupPage />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="/clips" element={<ShortPage />} />
            <Route path="/videos" element={<VideoPage />} />
        </Routes>
    )
}

export default AppRoutes