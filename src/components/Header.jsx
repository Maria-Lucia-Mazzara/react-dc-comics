import Logo from './LogoDC'

function Header() {
    return (
        <header>
            <nav>
                <img src={Logo} alt="" />
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header