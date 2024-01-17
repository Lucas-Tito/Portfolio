import "./header.css"


export default function Header(){

    return (
        // header represents a support tag that can work as a navigation section
    <header>
        <span className="logo" alt="logo" onClick={ console.log("logo") }>
            Lucas Tito
        </span>
        
        
        {/* nav is a section that contains links to others pages */}
        <nav>
            <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <ul className="nav-links">
                <li onClick={()=>window.location.href = "#home"}>Home</li>
                <li onClick={()=>window.location.href = "#about"}>About</li>
                <li onClick={()=>window.location.href = "#portfolio"}>Projects</li>
                <li onClick={()=>window.location.href = "#contact"}>Contact</li>
            </ul>
        </nav>
       
    </header>
    )
}


