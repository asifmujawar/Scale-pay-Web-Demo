import react, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../Styles/Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        ScalePay
                        <MdFingerprint />
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                About-Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/service" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pricing" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Pricing
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                                <button style={{backgroundColor:'blue',padding:'0px 12px',borderRadius:'10px',fontSize:'15px',border:'none',outline:'none',color:'white',fontWeight:'bold'}}>Sign-In</button>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar