const DownloadSection = () => {
    return (<>
        <div className="download_section">
            <div className="download_content">
                <h2>Download your shows to watch offline</h2>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
            <div className='download_image'>
                <img src='/download.jpg' />
                <div className="download">
                    <img src='/stranger-things.png' alt="Stranger Things" className='stranger_things' />
                    <div className="stranger_things_content">
                        <p>Stranger Things</p>
                        <p id="a">Downloading...</p>
                    </div>
                    <img src='/download-icon.gif' alt="Download Icon" className='download_icon' />
                </div>
            </div>
        </div><br />
    </>)
}
export default DownloadSection