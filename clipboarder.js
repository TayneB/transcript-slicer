import transcript from './transcripts/oot.17-06-24.pworm-nest-jarrick.json' assert { type: 'json' }

const clipboard = (text) => {
  navigator.clipboard.writeText(text.results.transcripts[0].transcript)
}

clipboard(transcript)
