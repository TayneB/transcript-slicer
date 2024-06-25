import transcript from './transcripts/oot.17-06-24.pworm-nest-jarrick.json' assert { type: 'json' }

const slicer = (text) => {
  console.log(text)
}

slicer(transcript.results.transcripts[0].transcript)
