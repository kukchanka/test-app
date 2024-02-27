interface ButtonProps {
  onClick?: () => void;
}

export const Play = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="play-button">
      ⏵
    </button>
  );
};
export const Pause = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="pause-button disabled">
      ⏸
    </button>
  );
};
export const Stop = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="stop-button">
      ⏹
    </button>
  );
};
