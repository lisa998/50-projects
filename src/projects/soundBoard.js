import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 24,
  },
  body: {
    display: "flex",
    height: "80vh",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
  },
}));

export default function SoundBoard() {
  const classes = useStyles();
  const [sound, setSound] = useState([
    {
      name: "applause",
      play: false,
      src: "/sound/sound-board_sounds_applause.mp3",
    },
    {
      name: "boo",
      play: false,
      src: "/sound/sound-board_sounds_boo.mp3",
    },
    {
      name: "gasp",
      play: false,
      src: "/sound/sound-board_sounds_gasp.mp3",
    },
    {
      name: "tada",
      play: false,
      src: "/sound/sound-board_sounds_tada.mp3",
    },
    {
      name: "victory",
      play: false,
      src: "/sound/sound-board_sounds_victory.mp3",
    },
    {
      name: "wrong",
      play: false,
      src: "/sound/sound-board_sounds_wrong.mp3",
    },
  ]);

  return (
    <div className={classes.body}>
      {sound.map((s, index) => (
        <Audio
          src={process.env.PUBLIC_URL + s.src}
          play={s.play}
          key={s.name}
          sound={sound}
          setSound={setSound}
          index={index}
        />
      ))}
      <div>
        {sound.map((s, index) => (
          <Btn
            name={s.name}
            play={s.play}
            setSound={setSound}
            index={index}
            sound={sound}
            key={s.name}
          />
        ))}
      </div>
    </div>
  );
}
const Btn = ({ name, play, setSound, index, sound }) => {
  const classes = useStyles();
  const controlSound = () => {
    setSound(
      sound.map((s, i) => {
        if (i === index) {
          return { ...s, play: !play };
        } else {
          return { ...s, play: false };
        }
      })
    );
  };
  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      startIcon={
        play ? (
          <i className="fas fa-pause-circle"></i>
        ) : (
          <i className="fas fa-play-circle"></i>
        )
      }
      onClick={controlSound}
    >
      {name}
    </Button>
  );
};
const Audio = ({ src, play, sound, setSound, index }) => {
  const audioRef = useRef();
  const ended = () => {
    setSound(
      sound.map((s, i) => {
        if (i === index) {
          return { ...s, play: false };
        } else {
          return s;
        }
      })
    );
  };
  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [play]);
  return <audio src={src} ref={audioRef} onEnded={ended}></audio>;
};
