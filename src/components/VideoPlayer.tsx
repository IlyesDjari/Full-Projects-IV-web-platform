import Loader from "../components/Loader";
import { useState } from 'react';
import ReactPlayer from "react-player";

function VideoPlayer() {
    const [loader, setLoader] = useState(true);
    const isLoaded = () => {
        setLoader(false);
    }

    /* Returning the video player. */
    return (
        <>
            <div className="video-container">
                {loader ? (<Loader />) : null}
                <ReactPlayer
                    url={"https://www.youtube.com/embed/ZwIB1XPI64w"}
                    width="950"
                    height="534"
                    playing={true}
                    onReady={isLoaded}
                    muted={false}
                    controls={true}
                    className="reactPlayer"
                ></ReactPlayer>
            </div>
        </>
    )
}

export default VideoPlayer;