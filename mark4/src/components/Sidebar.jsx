import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faHouse, faCircleInfo, faFolder, faCode} from '@fortawesome/free-solid-svg-icons';


const links = [
    {href: '#home', label: 'Home', icon: FaHouse},
    {href: '#about', label: 'About me', icon: FaCircleInfo},
    {href: '#projects', label: 'Projects', icon: FaFolder},
    {href: '#skills', label: 'Skills', icon: FaCode}

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

                        if (menuOpen){
                            <FontAwesomeIcon icon={faBars} />
                        }
                    </button>
                </div>

                <nav>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                            <FontAwesomeIcon icon={link.icon}/> {link.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;