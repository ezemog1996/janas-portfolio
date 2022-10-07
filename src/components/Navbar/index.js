import React, { useState } from 'react'
import logo from '../../assets/images/Jana Gomez Designs-02[4594].png'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const openCloseMenu = () => {
        if (menuOpen) return setMenuOpen(false)
        return setMenuOpen(true);
    }
    return (
        <>
            <nav className='row full-nav'>
                <div className='col-12 col-sm-4'>
                    <div className='row header-text'>
                        <div className='col-12 col-sm-6 col-md-4 mt-2'><a href='#works'>WORKS</a></div>
                        <div className='col-12 col-sm-6 col-md-4 mt-2'><a href='#contact'>CONTACT</a></div>
                    </div>
                </div>
                <div className='col-12 col-sm-4 text-center'>
                    <a href='#profile'>
                        <img className='nav-logo' src={logo} height='100px' width='auto' alt='logo'/>
                        <div className='first-name-nav'>JANA</div>
                        <div>GOMEZ</div>
                    </a>
                </div>
                <div className='col-12 col-sm-4 header-text mt-2'>
                    <a href='https://linkedin.com/' target='_blank' rel="noreferrer" ><h2 className='text-center'><i className="fa-brands fa-linkedin"></i></h2></a>
                </div>
            </nav>
            <nav className='mobile-menu'>
                <div className='d-flex justify-content-between'>
                    <img src={logo} className='nav-logo' height='150px' width='auto' alt='logo'/>
                    <button className='btn hamburger' onClick={openCloseMenu}><i className="fa-solid fa-bars"></i></button>
                </div>
                {
                    menuOpen &&
                    <div className='text-end'>
                        <div>
                            <a href='#profile'>JANA GOMEZ</a>
                        </div>
                        <div>
                            <a href='#works'>WORKS</a>
                        </div>
                        <div>
                            <a href='#contact'>CONTACT</a>
                        </div>
                        <a href='https://linkedin.com/' target='_blank' rel="noreferrer" ><h2><i className="fa-brands fa-linkedin"></i></h2></a>
                    </div>
                }
            </nav>
        </>
    )
}

export default Navbar
