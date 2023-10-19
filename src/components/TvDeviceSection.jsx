const TvDeviceSection = (props) => {
    return (<>
        <div className="tvdevice_section">
            <div className="tvdevice_section_content">
                <h2>{props.heading}</h2>
                <p>{props.para}</p>
            </div>
            <div className={(props.img_desc==='tv')?"tvdevice_section_image":"download_image"}>
                <img src={props.image} alt={props.img_desc} className={props.img_desc}/>
                {/* <div className="video_section"> */}
                    <video autoPlay muted>
                        <source src={props.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                {/* </div> */}
            </div>
        </div><br />
    </>)
}
export default TvDeviceSection