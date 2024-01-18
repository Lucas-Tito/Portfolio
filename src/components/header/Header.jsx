import "./header.css"
import close_icon from "../../images/close_icon.svg"
import menu_icon from "../../images/mobile_menu_icon.svg"


export default function Header(){

    
    const openMobileMenu = ()=>{
        let mobile_menu = document.querySelector(".mobile_menu")
        mobile_menu.classList.toggle("active")
    }

    const closeMobileMenu = ()=>{
        let mobile_menu = document.querySelector(".mobile_menu")
        mobile_menu.classList.remove("active")
    }

    const goTo = (location)=>{
        closeMobileMenu()
        window.location.href = `${location}`
    }
    
    // closes mobile menu when user uses go back on the system rather than the close btn
    window.addEventListener('popstate', closeMobileMenu);
    return (
        <>
              {/* header represents a support tag that can work as a navigation section */}
            <header>
                <span className="logo" alt="logo" onClick={console.log("logo")}>
                    Lucas Tito
                </span>


                {/* nav is a section that contains links to others pages */}
                <nav>
                    <img src={menu_icon} className="menu-icon" onClick={openMobileMenu}/>
                    <ul className="nav-links">
                        <li onClick={() => goTo("#home")}>Home</li>
                        <li onClick={() => goTo("#about")}>About</li>
                        <li onClick={() => goTo("#portfolio")}>Projects</li>
                        <li onClick={() => goTo("#contact")}>Contact</li>
                    </ul>
                </nav>
            </header>

            <div className="mobile_menu">
                <img src={close_icon} className="close_btn" onClick={closeMobileMenu}/>
                <ul className="menu_links">
                    <li onClick={() => goTo("#home")}>Home</li>
                    <li onClick={() => goTo("#about")}>About</li>
                    <li onClick={() => goTo("#portfolio")}>Projects</li>
                    <li onClick={() => goTo("#contact")}>Contact</li>
                </ul>
            </div>
        </>
  
    )
}


