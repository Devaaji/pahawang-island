import React, { useEffect } from 'react'
import './header.css'
import { gsap } from 'gsap'
import {FaArrowDown} from 'react-icons/fa'

function Header() {

    let tl = gsap.timeline()

    useEffect(() => {
        tl.to(".slideDown", {
            y: "0%",
            ease: "SlowMo.easeOut",
            duration: 1,
        })
        tl.to(".header-local", {
            y: "0%",
            ease: "SlowMo.easeOut",
            duration: 2
        })
        tl.to([".showmore", ".icon-droparrow"], {
            y: "0%",
            ease: "SlowMo.easeOut",
            duration: 1
        })
    })
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-box-header">
                    <div className="header-title">
                        <div className="line-title">
                            <div className="slideDown">Pahawang Island</div>
                        </div>
                    </div>
                    <div className="line-title">
                        <div className="header-local">
                            <div>Located in the South Lampung</div> district of Lampung province on the great <div>Island of Sumatera</div>
                        </div>
                    </div>
                </div>
                <div className="header-show-more-item">
                    <div className="showmore">
                        Show More
                    </div>
                    <div className="icon-droparrow">
                        <FaArrowDown/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
