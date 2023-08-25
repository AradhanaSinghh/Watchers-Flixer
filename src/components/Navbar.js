import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    
    const navigate=useNavigate();
    const handleAvatarClick = () => {
        navigate('/');
    };
    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="NETFLIX"
            />
           
                <img
                     src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                     alt="AVATAR"
                     className="nav__avatar"
                     onClick={handleAvatarClick}
                />
            
        </div>
    );
}

export default Navbar;
