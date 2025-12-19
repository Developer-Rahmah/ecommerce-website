// import redElegantMidiDressModel from "/videos/red-elegant-midi-dress-model.mp4";
const videosObject = {
  slik: "videos/aleena-single-silk-pillowcase-main-video.mp4",
} as const;

export type VideoName = keyof typeof videosObject;

export default videosObject;
