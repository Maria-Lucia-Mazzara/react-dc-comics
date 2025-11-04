import Logo from './LogoDC'

function Header() {
    return (
        <header>
            <nav className='container d-flex justify-content-evenly align-items-center pt-3'>
                <Logo />
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            CHARACTERS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            COMICS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            MOVIES
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            TV
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            GAMES
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            COLLECTIBLES
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            VIDEOS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            FANS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            NEWS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            SHOP
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header