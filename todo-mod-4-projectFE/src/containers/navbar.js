import React, { useState, Fragment } from 'react';
import '../hamburgers.css';
import '../navbar.css';


const Navbar = (props) => {

    const [pidgeyPic, setpidgeyPic] = useState(false)

    const clickBtn = () => {

        if (props.menuBtnState === false){
            return (
                <button className="hamburger hamburger--spring" onClick={props.hamburgerBtn} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>)
        }
        else{
            return (
                <button className="hamburger hamburger--spring is-active" onClick={props.hamburgerBtn} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>  
                    </span>
                </button>)
        }
    }

    const hahaYouAreAlwaysPidgey = () => {
        setpidgeyPic(!pidgeyPic)
    }

    const showPidgey = () => {
        if (pidgeyPic){
            return <Fragment>
                <div className='overlay' onClick={hahaYouAreAlwaysPidgey}></div>
                <div className='the-almighty-god-pokemon'>
                    <h2>Sorry! In this version of the App, you are ALWAYS Pidgey...but that's a good thing!</h2>
                    <img src='https://media3.giphy.com/media/bkxLFDUMB5RLy/giphy.gif' alt=''/>
                </div>
            </Fragment>
        }
        else{
            return null
        }
    }

    const userDash = () => {

        return <span className='UserDash'>
            <button className='messages' onClick={()=>{alert(`Sorry - you have no friends in this version of the App :'(`, `:'(`)}}>Messages</button>
            <button className='user-profile' onClick={hahaYouAreAlwaysPidgey}>Welcome {props.username}!</button>
            {showPidgey()}
        </span>
    }

    return (<div className='Navbar'>
            {clickBtn()}
            {userDash()}
        </div>)
}

export default Navbar