import { Controls } from './Controls';
import { DocumentView } from './DocumentView';

export const TextToSpeech = () => {
  return (
    <div className="card">
      <Controls />
      <DocumentView text="change me" />
    </div>
  );
};
