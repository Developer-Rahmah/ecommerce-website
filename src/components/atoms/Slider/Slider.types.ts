export interface SliderProps {
  title?: string;
  value: number;
  onChange: (value: number) => void;
  labels: string[];
  className?: string;
}
