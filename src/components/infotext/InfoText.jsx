import React, { useEffect } from 'react'
import './infotext.css'
import {gsap} from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function InfoText() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const scroller = document.querySelector('#my-scrollbar');

        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, alwaysShowTracks: true });

        ScrollTrigger.scrollerProxy("#my-scrollbar", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        bodyScrollBar.addListener(ScrollTrigger.update);

        ScrollTrigger.defaults({ scroller: scroller });
    })

    useEffect(() => {
        gsap.to(".text-scroll", {
            x: "-100%",
            duration: 5,
            scrollTrigger: {
                trigger: ".info-container",
                start: "-50%",
                scrub: .2,
                toggleActions: "play none none reserve"
            }
        })
        gsap.to(".text-scroll-1", {
            x: "100%",
            duration: 15,
            scrollTrigger: {
                trigger: ".info-container",
                start: "-50%",
                scrub: .5,
                toggleActions: "play none none reserve"
            }
        })
    })
    return (
        <div className="infotext">
            <div className="info-container">
                <div className="text-scroll">
                One of the most popular activities is snorkeling. There are many agents offering tour packages to Pahawang Island.
                </div>
                <div className="text-scroll-1">
                If you feel a little adventurous, most of the locals can be very reliable as they could help you to provide rent lodging or snorkeling equipment.
                </div>
            </div>
        </div>
    )
}

export default InfoText
