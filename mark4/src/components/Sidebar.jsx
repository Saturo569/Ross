import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faBars, faHouse, faCircleInfo, faFolder, faCode} from '@fortawesome/free-solid-svg-icons';


const links = [
    {href: '#home', label: 'Home', icon: faHouse},
    {href: '#about', label: 'About me', icon: faCircleInfo},
    {href: '#projects', label: 'Projects', icon: faFolder},
    {href: '#skills', label: 'Skills', icon: faCode},

    
   

]
function Sidebar(){
    const [menuOpen, setOpen] = useState(false)

    return(
        <>
            <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
                <div className="header-part">
                    <span className="logo">
                        <a href="#home" onClick={() => menuOpen(false)}>Justin Ross</a>
                    </span>

                    <button
                        className="menu"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setOpen(!menuOpen)}
                    >

                       
                            {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        
                    </button>
                </div>

                <nav>
                    {links.map((link, index) => (
                        <a key={link.href} href={link.href} className={link.space ? 'nav-gap' : ''} onClick={() => setOpen(false)}>
                            <FontAwesomeIcon icon={link.icon}/> {link.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default Sidebar;