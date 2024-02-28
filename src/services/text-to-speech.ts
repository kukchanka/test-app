interface Engine {
  start(): void;

  pause(): void;

  resume(): void;

  stop(): void;
}

export class TextToSpeechEngine implements Engine {
  private readonly engine: SpeechSynthesisUtterance;

  constructor(text: string, onEnd?: () => void, onChunkEnd?: (ev: SpeechSynthesisEvent) => void, lang = 'ru-RU') {
    this.engine = new SpeechSynthesisUtterance(text);
    this.engine.lang = lang;
    this.engine.rate = 1;
    this.engine.volume = 1;
    this.engine.onend = onEnd || null;
    this.engine.onboundary = onChunkEnd || null;
  }

  public start() {
    speechSynthesis.speak(this.engine);
  }

  public pause() {
    speechSynthesis.pause();
  }

  public resume() {
    speechSynthesis.resume();
  }

  public stop() {
    speechSynthesis.cancel();
  }
}
