// Visual component responsible for rendering the application title
import "./Header.css"

function Header() {
    return (
        <header className="header__container">
            <h1 className="header__title">Tasks App</h1>
            <p className="header__subtitle">Created by: Pyrad-Time</p>
        </header>
    )
}

export default Header