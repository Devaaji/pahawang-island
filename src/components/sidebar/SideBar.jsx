import React, { useEffect, useRef } from 'react'
import './sidebar.css'
import gsap from 'gsap'

function SideBar({ state }) {

    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)



    useEffect(() => {
        if (state.clicked === false) {
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: { display: "none" }
            });
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            gsap.to(menu, {
                duration: 0,
                css: { display: "block" }
            });
            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(revealMenuBackground, revealMenu);
            staggerText(line1, line2, line3)
        }
    }, [state]);

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 19,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        });
    }

    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: .8,
            y: 100,
            delay: .7,
            ease: 'power3.inOut',
            stagger: {
                amount: .5
            }
        });
    }

    return (
        <div className="menu-navigation" ref={el => (menu = el)}>
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color">
                <div ref={el => (revealMenu = el)} className="menu-layer">
                    <div className="menu-layer-bg">
                        <div className="container">
                            <div className="wrapper">
                                <div className="menu-link">
                                    <nav>
                                        <ul>
                                            <li ref={el => (line1 = el)}>Home</li>
                                            <li ref={el => (line2 = el)}>Project</li>
                                            <li ref={el => (line3 = el)}>Contact</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
