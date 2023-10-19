import KidProfile from './KidProfile'
import TvDeviceSection from './TvDeviceSection'
import Footer from './Footer'
import DownloadSection from './DownloadSection'
import GetStarted from './GetStarted'
import Faqs from './Faqs'
import Header from './Header'
import Banner from './Banner'

const Home = () => {
    return (
        <>
            <div className="menu">
                <Header />
                <Banner />
            </div>
            <section>
                <div className="bar"></div>
                <TvDeviceSection
                    heading="Enjoy on your TV"
                    para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                    image="/tv.png"
                    video="video-tv.m4v"
                    img_desc="tv"
                />
                <div className="bar"></div>
                <DownloadSection />
                <div className="bar"></div>
                <TvDeviceSection
                    heading="Watch everywhere"
                    para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                    image="/device.png"
                    video="video-devices.m4v"
                    img_desc="device"
                />
                <div className="bar"></div>
                <KidProfile />
                <div className="bar"></div>
                <Faqs />
                <div className="after_faq">
                    <GetStarted />
                </div>
                <div className="bar"></div>
                <Footer />
            </section>
        </>
    )
}
export default Home