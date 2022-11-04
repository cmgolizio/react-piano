// import { keyAudio } from '.';

export const keyAudio = (keyColor, path) => {
  const key = new Audio(`/key-sounds/${keyColor}-keys/${path}.mp3`);
  return key;
};

export const allKeys = [
  { note: keyAudio('white', 0), kbd: 'A', variant: 'firstWhite' },
  { note: keyAudio('black', 0), kbd: 'W', variant: 'black' },
  { note: keyAudio('white', 1), kbd: 'S', variant: 'whiteOffset' },
  { note: keyAudio('black', 1), kbd: 'E', variant: 'black' },
  { note: keyAudio('white', 2), kbd: 'D', variant: 'whiteOffset' },
  { note: keyAudio('white', 3), kbd: 'F', variant: 'white' },
  { note: keyAudio('black', 2), kbd: 'T', variant: 'black' },
  { note: keyAudio('white', 4), kbd: 'G', variant: 'whiteOffset' },
  { note: keyAudio('black', 3), kbd: 'Y', variant: 'black' },
  { note: keyAudio('white', 5), kbd: 'H', variant: 'whiteOffset' },
  { note: keyAudio('black', 4), kbd: 'U', variant: 'black' },
  { note: keyAudio('white', 6), kbd: 'J', variant: 'whiteOffset' },
  { note: keyAudio('white', 7), kbd: 'K', variant: 'white' },
  { note: keyAudio('black', 5), kbd: 'O', variant: 'black' },
  { note: keyAudio('white', 8), kbd: 'L', variant: 'whiteOffset' },
  { note: keyAudio('black', 6), kbd: 'P', variant: 'black' },
  { note: keyAudio('white', 9), kbd: ';', variant: 'lastWhite' },
];

/**

export const whiteNotes = [
  { note: keyAudio('white', 0), kbd: 'A' },
  { note: keyAudio('white', 1), kbd: 'S' },
  { note: keyAudio('white', 2), kbd: 'D' },
  { note: keyAudio('white', 3), kbd: 'F' },
  { note: keyAudio('white', 4), kbd: 'G' },
  { note: keyAudio('white', 5), kbd: 'H' },
  { note: keyAudio('white', 6), kbd: 'J' },
  { note: keyAudio('white', 7), kbd: 'K' },
  { note: keyAudio('white', 8), kbd: 'L' },
  { note: keyAudio('white', 9), kbd: ';' },
];

export const blackNotes = [
  { note: keyAudio('black', 0), kbd: 'W' },
  { note: keyAudio('black', 1), kbd: 'E' },
  { note: keyAudio('black', 2), kbd: 'T' },
  { note: keyAudio('black', 3), kbd: 'Y' },
  { note: keyAudio('black', 4), kbd: 'U' },
  { note: keyAudio('black', 5), kbd: 'O' },
  { note: keyAudio('black', 6), kbd: 'P' },
];

*/
