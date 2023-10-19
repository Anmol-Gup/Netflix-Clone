import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const gotoLogin = () => {
        navigate('/login')
    }
    return (
        <>
            <nav className="menu_bar">
                <header>
                    <img src="/logo.svg" alt='Netflix Logo' />
                </header>
                <div className="menu_items">
                    <ul>
                        <li className='language-menu'>
                            <img src='/lang.svg' alt='language' className='language' />
                            <div className="select-wrapper">
                                <div className="select-arrow globe">
                                    <select className="select">
                                        <option selected lang="en">English</option>
                                        <option value="Hindi" lang="hi">हिन्दी</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className='signin' href='#' onClick={gotoLogin}>SignIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header