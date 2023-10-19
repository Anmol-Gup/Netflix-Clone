const GetStarted = () => {
    return (
        <>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input_email">
                <input type='email' placeholder='Email address' id="email" />
                <input type='submit' id="get_started" value="Get Started >" />
            </div>
        </>
    )
}
export default GetStarted