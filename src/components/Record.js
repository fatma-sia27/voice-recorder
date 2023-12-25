import React from 'react'
import { ReactMic } from 'react-mic'
import { useState } from 'react';
import AudioTimer from './AudioTimer';

const Recorder = () => {

  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
    const [voice, setVoice] = useState(false)
    const [audioLink, setAudioLink] = React.useState(false)

    const onStop = (blob) => {
      console.log(blob)
      setAudioLink(blob.blobURL)
      setIsRunning(false)
    }

    const startHandle = () => {
      setVoice(true)
      setIsRunning(true)
    }
    const stopHandle = () => {
      setVoice(false)
      setIsRunning(false)
    }
    const clearHandle = () => {
      setIsRunning(false)
      setVoice(false)
      setAudioLink("")
      setElapsedTime(0)
    }

  return (
   <>
    <section className="signin">
          <div className="text-2xl font-extrabold pt-3 pb-3 underline">Voice recorder</div>

          <AudioTimer isRunning={isRunning}
          elapsedTime={elapsedTime}
          setElapsedTime={setElapsedTime}
          />

          <ReactMic
          className='w-full mt-4 mb-3 ml-4 pr-9'
          record={voice}
          onStop={onStop}
          />
          <div>
            { audioLink ? <button onClick={clearHandle} className="form-submit" style={{width: "70px", marginLeft: "1px", marginBottom: "16px"}}>clear</button> : null }
          </div>
         
          <div className=''>
            {!voice? <button onClick={startHandle} className="form-submit" style={{width: "70px", marginLeft: "1px", marginRight: "3px"}}>start</button>
            : <button onClick={stopHandle} className="form-submit" style={{width: "70px", marginLeft: "5px", marginRight: "3px"}}>stop</button>}

          </div>

          <div className='pl-10 mb-6'>
            {audioLink ? <audio controls src={audioLink}/> : null}
          </div>

          
    </section>
   </>
  );
};

export default Recorder;