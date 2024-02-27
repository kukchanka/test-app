import { useState } from 'react';
import { Loader } from './components';
import { TextToSpeech } from './TextToSpeech';
// import { fetchText } from './api';
import './App.css';


function App() {
  const [loading] = useState(false);

  return loading ? <Loader /> : <TextToSpeech />;
}

export default App;
