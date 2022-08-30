import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="header">

            <nav className="menu">
                <ul className="items">
                    <li>
                        <a className="home" href="/#">Inicio</a>
                    </li>
                    <li>
                        <a href="/#">Papelería</a>
                    </li>
                    <li>
                        <a href="/#">Vinilos</a>
                    </li>
                    <li>
                        <a href="/#">Sublimación</a>
                    </li>
                </ul>

                <CartWidget />

            </nav>

        </header>
    )
}

export default NavBar;