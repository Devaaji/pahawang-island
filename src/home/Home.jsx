import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import InfoText from '../components/infotext/InfoText'
import ShowIsland from '../components/show_island/ShowIsland'
import TopBar from '../components/topbar/TopBar'
import './home.css'

function Home() {
    return (
        <div id="my-scrollbar">
            <div className="container-home">
                <div className="shadow-home-img">
                    <TopBar />
                    <Header />
                </div>
            </div>
            <InfoText />
            <ShowIsland />
            <Footer/>
        </div>
    )
}

export default Home
