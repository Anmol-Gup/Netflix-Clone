import '../assets/login.css';

const Login = () => {
    return (<>
        <div className="login_bg">
            <header>
                <img src='/logo.svg' alt="netflix logo" />
            </header>
            <div className="image">
                {/* <img src='/background.jpg' alt='netflix background' /> */}
            </div>
            <div className="login_container">
                <div className="login_form">
                    <h1>Sign In</h1>
                    <form action="#" method="post">
                        <input type='text' placeholder='Email or phone number' className='input_field' />
                        <input type='password' placeholder='Password' className='input_field' />
                        <div className="input_submit">
                            <input type='submit' value="Sign In" />
                        </div>
                        <div className="remember_me">
                            <div className="checkbox">
                                <input type='checkbox' checked />&nbsp;&nbsp;
                                <label for="remember">Remember Me</label>
                            </div>
                            <a href='#'>Need help?</a>
                        </div>
                    </form>
                    <div className="login_foot">
                        <div className="signupnow">
                            <p>New to Netflix?</p>
                            <a href='#'>Sign up Now</a>
                        </div>
                        <div className="page_protected">
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer_container">
                <div className="links">
                    <p>Questions? Call 000-800-919-1694</p>
                    <a href='#'>FAQ</a>
                    <a href='#'>Help Centre</a>
                    <a href='#'>Terms of Use</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Cookie Preferences</a>
                    <a href='#'>Corporate Information</a>
                </div>
            </div>
        </div>
    </>)
}
export default Login