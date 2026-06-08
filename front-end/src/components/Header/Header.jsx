// Visual component responsible for rendering the application title
import "./Header.css"

function Header(props) {
    return (
        <header className="header__container">
            <div>
                <h1 className="header__title">Tasks App</h1>
                <p className="header__subtitle">Created by: Pyrad-Time</p>
            </div>
            <div className="header__statusContainer">
                <div className="header__status">
                    <span className="header__statusTitle">Total</span>
                    <strong className="header__statusValue">{props.onTotalTasks}</strong>
                </div>
                <div className="header__status">
                    <span className="header__statusTitle">Concluídos</span>
                    <strong className="header__statusValue">{props.onCompletedTasks}</strong>
                </div>

            </div>
        </header>
    )
}

export default Header