import Key from '../components/Key';
import { allKeys } from './constants';

export const generateKeys = keys => {
  let keyArray = [],
    note,
    kbd,
    keyType;

  for (let i = 0; i < allKeys.length; i++) {
    kbd = keys[i].kbd;
    note = keys[i].note;
    keyType = keys[i].variant;

    keyArray.push(
      <Key key={kbd} note={note} kbd={kbd} value={kbd} variant={keyType}>
        {kbd}
      </Key>
    );
  }

  return keyArray;
};

// export const keyAudio = (keyColor, path) => {
//   const key = new Audio(`/key-sounds/${keyColor}-keys/${path}.mp3`);
//   return key;
// };

export const playSound = audio => {
  if (!audio) return;
  audio.play();
};

export const stopSound = audio => {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
};

export const pauseSound = audio => {
  if (!audio) return;
  audio.pause();
};

export const filterSounds = keyFromEvent => {
  const activeNoteObj = allKeys.filter(noteObj => {
    return noteObj.kbd === keyFromEvent;
  });

  if (!activeNoteObj.length) return;
  return activeNoteObj[0]?.note;
};
