import React, { useEffect } from 'react'
import './showisland.css'
import { gsap } from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function ShowIsland() {
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
        gsap.to(".picture-slide", {
            yPercent: 10,
            x: "0%",
            scale: 1.2,
            duration: .3,
            scrollTrigger: {
                trigger: ".picture-slide",
                start: "-80%",
                end: () => "+=",
                scrub: true,
                toggleActions: "play none none reset"
            }
        })
        gsap.to(".show-effect-text", {
            x: "0%",
            duration: 2,
            scrollTrigger: {
                trigger: ".picture-slide",
                start: "-80%",
                end: () => "+=",
                toggleActions: "play none none reset"
            }
        })
        gsap.to(".picture-slide-1", {
            x: "0%",
            scale: 1.2,
            duration: .3,
            scrollTrigger: {
                trigger: ".picture-slide-1",
                start: "-70%",
                end: () => "+=",
                toggleActions: "play none none reset"
            }
        })
        gsap.to(".show-effect-text-1", {
            x: "0%",
            duration: 2,
            scrollTrigger: {
                trigger: ".picture-slide-1",
                start: "-80%",
                end: () => "+=",
                toggleActions: "play none none reset"
            }
        })
        gsap.to(".picture-slide-2", {
            x: "0%",
            scale: 1.2,
            duration: .3,
            scrollTrigger: {
                trigger: ".picture-slide-2",
                start: "-70%",
                end: () => "+=",
                toggleActions: "play none none reset"
            }
        })
        gsap.to(".show-effect-text-2", {
            x: "0%",
            duration: 2,
            scrollTrigger: {
                trigger: ".picture-slide-2",
                start: "-80%",
                end: () => "+=",
                toggleActions: "play none none reset"
            }
        })
    })
    return (
        <>
            <div id="showisland">
                <div className="show-container">
                    <div className="showisland-box-now">
                        <div className="show-picture">
                            <div className="picture-slide">
                                <div className="shadow-picture">
                                </div>
                            </div>
                        </div>
                        <div className="show-text-title">
                            <div className="show-effect-text">
                            The beautiful coral reefs are home to a wide variety of fish that live there. One of the inhabitants of the underwater nature of Pahawang Island is a clown fish or commonly called ‘Ikan Nemo’ by the locals.
                            </div>
                        </div>
                    </div>
                    <div className="showisland-box-now">
                        <div className="show-text-title-1">
                            <div className="show-effect-text-1">
                            Pahawang Island awaits you with its magnificent underwater view, crystal clear water, and clean beaches.
                            </div>
                        </div>
                        <div className="show-picture">
                            <div className="picture-slide-1">
                                <div className="shadow-picture">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showisland-box-now">
                        <div className="show-picture">
                            <div className="picture-slide-2">
                                <div className="shadow-picture">

                                </div>
                            </div>
                        </div>
                        <div className="show-text-title-2">
                            <div className="show-effect-text-2">
                            You have a few spot to take a picture. Its so awesome moment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowIsland
