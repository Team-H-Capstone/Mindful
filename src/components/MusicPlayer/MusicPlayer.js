import React, { useState } from 'react';
import ReactSound from 'react-sound';
import './MusicPlayer.css';
import 'react-circular-progressbar/dist/styles.css';
import Sound from './playSound';
import ProgressBar from './ProgressBar';
import StyleSlider from './Slider';
import { playBtnImg, pauseBtnImg, loudVolumeImg, lowVolumeImg, muteVolumeImg, rainAudio, woodlandAudio, streamAudio, wavesAudio, fireAudio, thunderAudio, deepseaAudio, fanAudio, rainImg, woodlandImg, streamImg, wavesImg, fireImg, thunderImg, deepseaImg, fanImg } from './constant';
import Quotes from './Quotes';

const MusicPlayer = () => {
  const [playButton, setPlayButton] = useState(playBtnImg);
  const [audioStatus, setAudioStatus] = useState(ReactSound.status.STOPPED); //* react-sound playStatus:
  const [time, setTime] = useState([120, 300, 600, 900]); //* timeValues is an array of time values in seconds for the time
  const [audioNames, setAudioNames] = useState(['Rain', 'Woodland', 'Stream', 'Waves', 'Fire', 'Thunder', 'Deep Sea', 'Fan']); //* audioNames is an array of audio names
  const [seekCurrentPosition, setSeekCurrentPosition] = useState(0); //* seekCurrentPosition is the current position of the audio track
  const [audio, setAudio] = useState(rainAudio); //* audio is current audio track
  const [bgImg, setBgImg] = useState(rainImg); //* bgImg is the background image
  const [desiredTime, setDesiredTime] = useState(120); //* desiredTime is the desired time in seconds
  const [volumeIcon, setVolumeIcon] = useState(); //* volumeIcon is the volume icon
  const [volume, setVolume] = useState(100); //* volume is the volume of the audio track
  const [mute, setMute] = useState(false); //* mute is the mute status of the audio track
  const [opacity, setOpacity] = useState(1); 
  const [transition, setTransition] = useState(''); 
  const [centerOpacity, setCenterOpacity] = useState(1);

  const playPause = () => {
    console.log('playPause');
    if (playButton === playBtnImg) {
      setPlayButton(pauseBtnImg);
      setAudioStatus(ReactSound.status.PLAYING);
      setOpacity(0);
      setTransition('opacity 10s ease-out');
      setCenterOpacity(0.5);
    } else if (playButton === pauseBtnImg) {
      setPlayButton(playBtnImg);
      setAudioStatus(ReactSound.status.PAUSED);
      setOpacity(1);
      setCenterOpacity(1);
      setTransition("opacity 0s");
    }
  };

  const onMouseMove = (e) => { 
    setOpacity(1);
    setCenterOpacity(1);
    setTransition("opacity 0s");

    setTimeout(() => {
      if (
        seekCurrentPosition < 100 &&
        playButton === pauseBtnImg
      ) {
        setOpacity(0);
        setCenterOpacity(0.6);
        setTransition("opacity 10s ease-out");
      }
    }, 3000);
  }

  const timeSelect = (e) => {
    setDesiredTime(e.duration);
    console.log('timeSelect: ' + e.duration);
  };

  const audioSelect = (name) => {
    console.log('audioSelect');
    if (name === 'Woodland') {
      setAudio(woodlandAudio);
      setBgImg(woodlandImg);
      // console.log('woodland', bgImg)
    } else if (name === 'Rain') {
      setAudio(rainAudio);
      setBgImg(rainImg);
    } else if (name === 'Stream') {
      setAudio(streamAudio);
      setBgImg('img/stream.jpg');
    } else if (name === 'Waves') {
      setAudio(wavesAudio);
      setBgImg('img/waves.jpg');
    } else if (name === 'Fire') {
      setAudio(fireAudio);
      setBgImg('img/fire.jpg');
    } else if (name === 'Thunder') {
      setAudio(thunderAudio);
      setBgImg('img/thunder.jpg');
    } else if (name === 'Deep Sea') {
      setAudio(deepseaAudio);
      setBgImg('img/deepsea.jpg');
    } else if (name === 'Fan') {
      setAudio(fanAudio);
      setBgImg('img/fan.jpg');
    }
  };

  const moveSeekBar = (pos) => {
    // console.log('moveSeekBar: ' + pos + ', ' + desiredTime);
    setSeekCurrentPosition((pos / desiredTime) * 100); //* current position of the audio track in percentage of the desiredTime

    if (Math.floor(pos) === desiredTime) {
      //* if the current position of the audio track is equal to the desiredTime then stop the audio track
      // setPlayButton(playBtnImg)
      setAudioStatus(ReactSound.status.STOPPED);
    }
  };

  const timeOptions = time.map((duration) => (
    <button
      className="music_bt"
      key={duration} //
      onClick={() => timeSelect({ duration })}
    >
      {duration / 60} Minutes
    </button>
  ));

  const audioOptions = audioNames.map((name) => {
    let img;
    if (name === 'Woodland') {
      img = woodlandImg;
    } else if (name === 'Rain') {
      img = rainImg;
    } else if (name === 'Stream') {
      img = streamImg;
    } else if (name === 'Waves') {
      img = wavesImg;
    } else if (name === 'Fire') {
      img = fireImg;
    } else if (name === 'Thunder') {
      img = thunderImg;
    } else if (name === 'Deep Sea') {
      img = deepseaImg;
    } else if (name === 'Fan') {
      img = fanImg;
    }
    return (
      <div className="music_bt" key={name} onClick={() => audioSelect(name)}>
        <img className="music_img" src={img} alt={name} />
        <span className="music_name">{name}</span>
      </div>
    );
  });

  const volumeChange = (event) => {
    const value = Number(event.target.value)
    setVolume(mute ? volume : value);
    setVolumeIcon(mute || value === 0 ? muteVolumeImg : value <= 50 ? lowVolumeImg : loudVolumeImg);
  };

  const toggleMute = () => {
    setVolumeIcon(!mute ? muteVolumeImg : volume <= 50 ? lowVolumeImg : loudVolumeImg);
    setMute(!mute);
  };

  return (
    // <div className="flex max-w-screen-xl my-10 h-screen">
    
    <div className="app_container" onMouseMove={onMouseMove}>
      {/* <nav className='nav'> YOO</nav> */}
      <div className="background_overlay"></div>
      <div className="background">
        {/* <video loop playsInline autoPlay disablePictureInPicture controlsList="nodownload noplaybackrate" id="bg_vid">
          <source
            // src="https://assets.calm.com/02468a3ae77a0cd4b8104fda6b0164e8.mp4"
            src={bgImg}
            type="video/mp4"
          ></source>
        </video> */}
        <img src={bgImg} alt="backgroundImg" />
      </div>
      {/* <div className="mt-12 text-white">{timeOptions}</div> */}
      {/* <div className="grid mt-12 text-white">{audioOptions}</div> */}
      <div className="player_container">
        <img className="playPause" style={{opacity: centerOpacity, transition: transition }} src={playButton} onClick={playPause} alt="playPause" />

        <div className="volume_container" style={{opacity: opacity, transition: transition}}>
          <img className="volume_icon" src={volumeIcon} onClick={toggleMute} alt="volume" />
          <div className="volume_bar">
            <StyleSlider id="volume_slider" onChange={volumeChange} step={1} min={0} max={100} value={mute ? 0 : volume} />
          </div>
        </div>
        {/* <div className="audio_bar">
          <ProgressBar id='seek' percentage={seekCurrentPosition} />
        </div> */}
        <Sound audio={audio} playStatus={audioStatus} func={moveSeekBar} desireTime={desiredTime} volume={mute ? 0 : volume} />
        {/* <div className="timer text-white">00 : 00</div> */}
        {/* <div className="mt-12 text-white">{timeOptions}</div> */}
      </div>
      <Quotes /> 
      <div className="audio_menu text-white" style={{opacity: opacity, transition: transition}}>{audioOptions}</div>
    </div>
  );
};

export default MusicPlayer;