export interface CustomVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  alt?: string;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
}
