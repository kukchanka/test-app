import { useState } from 'react';
import { Pause, Play, Stop } from './components';

export const Controls = () => {
  const [playing, setPlaying] = useState(false);
  const onClick = () => setPlaying(!playing);

  return (
    <div>
      {playing ? <Pause onClick={onClick} /> : <Play onClick={onClick} />}
      <Stop />
    </div>
  );
};
