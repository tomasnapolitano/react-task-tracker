import '../styles/Header.css'

const Header = ({ logo }) => {
    return(
        <header className="header">
            {/*<h1>Task Tracker</h1>*/}
            <img className="logo" src={logo}/>
        </header>
    )
}

export default Header