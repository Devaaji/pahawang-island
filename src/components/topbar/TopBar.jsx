import React, { useEffect, useState } from 'react'
import './topbar.css'
import gsap from 'gsap'
import SideBar from '../sidebar/SideBar'

function TopBar() {

    const [state, setState] = useState({
        initial:false,
        clicked: null,
        menuName: "Menu"
    });

    //state untuk disabled menu
    const [disabled, setDisabled] =useState(false);

    //use effect untuk ganti page
    
    const handleMenu = () =>{
        disableMenu();
        if(state.initial === false){
            setState({
                initial:null,
                clicked: true,
                menuName: "Close"
            })
            console.log("1")
        } else if(state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
        }
        else if(state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
        }
    };

    //determine if our menu button should be disabled
    const disableMenu= () =>{
        setDisabled(!disabled);
        setTimeout(()=>{
            setDisabled(false);
        }, 1200);
    };

    useEffect(() => {
        gsap.to(".navbar-logo", {
            opacity: 1,
            rotation: 360,
            duration: 2
        })
        gsap.to(".navbar-menu", {
            opacity: 1,
            duration: 2
        })
        gsap.to(".topbar", {
            css: { position: "fixed" }
        })
    })
    return (
        <section className="topbar">
            <div className="topbar-container">
                <div className="topbar-navbar">
                    <div className="navbar-logo">
                        Depdep
                    </div>
                    <div className="navbar-menu">
                        <div disabled={disabled} onClick={handleMenu}>Menu</div>
                    </div>
                    <SideBar state={state}/>
                </div>
            </div>
        </section>
    )
}

export default TopBar
