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
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
       
    </header>
    )
}


