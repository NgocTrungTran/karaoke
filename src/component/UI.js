import HonLoSaVao from "./../assets/mp3/beat.mp3";
import anh from "./../assets/images/vedau.jpg";
import TimeSlider from "react-input-slider";
import { useEffect, useRef, useState } from "react";
import { FormatTime } from "../utils/Hook.js";
import Data from "./Data.js";

export default function Ui() {
    const audioRef = useRef();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlay, setPlay] = useState(false);

    let music = {
        name: "Về đâu mái tóc người thương",
        author: "Hoài Linh",
        src: HonLoSaVao,
        img: anh
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handlePlayOrPauseMusic = () => {
        if (isPlay) {
            audioRef.current.pause();
            setPlay(false);
        } else {
            audioRef.current.play();
            setPlay(true);
        }

    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }
    };


    return (
        <div className="ui text-center">
            <div className="col-6" style={{float: "left"}}>

                <div className="img-music">
                    <img
                        className="rounded-circle"
                        src={music.img}
                        style={isPlay ? { animation: "app-logo-spin infinite 15s linear" } : {}}
                    ></img>
                </div>
                <div className="action-music">
                    <div className="play-music" onClick={handlePlayOrPauseMusic}>
                        {isPlay ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                    </div>
                    <div className="time-music">
                        <span>{FormatTime(currentTime)}/ </span>
                        <span>{FormatTime(duration)}</span>
                    </div>
                    <TimeSlider
                        axis="x"
                        xmax={duration}
                        x={currentTime}
                        onChange={handleTimeSliderChange}
                        styles={{
                            track: {
                                backgroundColor: "#e3e3e3",
                                height: "2px",
                            },
                            active: {
                                backgroundColor: "#333",
                                height: "2px",
                            },
                            thumb: {
                                marginTop: "-3px",
                                width: "10px",
                                height: "10px",
                                backgroundColor: "#333",
                                borderRadius: "5px",
                            },
                        }}
                    />
                    <audio
                        ref={audioRef}
                        src={music.src}
                        onLoadedData={handleLoadedData}
                        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                        onEnded={() => setPlay(false)}
                    />
                </div>
            </div>
            <div className="col-6" style={{float: "left"}}>
                <Data seconds={currentTime}></Data>

            </div>
        </div>

    );
}