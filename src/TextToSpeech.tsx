import { Controls } from './Controls';
import { DocumentView } from './DocumentView';
// import { TextToSpeechEngine } from './services/text-to-speech';

export const TextToSpeechView = () => {
  return (
    <div className="card">
      <Controls />
      <DocumentView text="change me" />
    </div>
  );
};
