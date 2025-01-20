import SideBar from './SideBar.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from '../Footer.jsx';
import HomeScreenHeader from './HomeScreenHeader.jsx';

export default function HomeScreen() {
    return (
        <div className="h-screen flex">
            <div className="w-[16vw] px-4">
                <SideBar />
            </div>

            <div className="w-[84vw] flex flex-col">
                <HomeScreenHeader />
                <div className="flex-1">
                    <Dashboard />
                </div>
                <Footer />
            </div>
        </div>
    );
}
