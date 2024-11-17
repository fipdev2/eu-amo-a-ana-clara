import { useEffect, useState } from 'react'
import './App.css'
const time = 30;

function App() {
  const [msg, setMsg] = useState(false);
  const [timer, setTimer] = useState(time);

  let first = Math.floor(timer / 10);
  let second = (timer % 10);

  function handleColor() {
    let heart = document.getElementById('heart');
    let colors = [
      'tomato',
      'deepskyblue',
      'green',
      'yellow',
      'purple',
      'pink',
      'orange',
      'mediumslateblue',
      'mediumorchid',
      'cyan',
      'magenta',
      'brown',
      'white'
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    heart!.style.setProperty('--color', color);
  }
  useEffect(() => {

    if (msg === true && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1)
        handleColor();
      }, 1000)

    }
    if (timer === 0) {
      setMsg(false);
      setTimer(time);
    }
  }, [msg, timer])
  return (
    <>
      <div className='main'>
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col h-screen w-screen items-center justify-center">
          <h2 className='font-bold'>
            Ana Clara Gonçalves dos Santos,
          </h2>
          {
            !msg &&
            <button
              className='rounded-md p-4 bg-blue-500 z-index-10'
              onClick={() => setMsg(true)}>
              Clique aqui para ver a mensagem
            </button>
          }
          {
            msg &&
            <>
              <p>Eu</p>
              <div id='heart'>
              </div>
              <p>
                Você
              </p>
            </>}

          {
            msg &&
            <div className='flex flex-col items-center mt-4'>
              <p>Você pode ver essa mensagem por: </p>
              <div className='flex'>
                <p className='p-2 rounded shadow-inner bg-gray-200 text-slate-800 font-bold'>
                  {first}
                </p>
                <p className='p-2 rounded shadow-inner bg-gray-200 text-slate-800 font-bold'>
                  {second}
                </p>

              </div>
              <p>segundos</p>
            </div>
          }
        </div>
      </div>


      <div className='gay'>
        <div className="rainbow">
          <div className="rainbow-arc red">
            <div className="rainbow-arc orange">
              <div className="rainbow-arc yellow">
                <div className="rainbow-arc green">
                  <div className="rainbow-arc blue">
                    <div className="rainbow-arc indigo">
                      <div className="rainbow-arc purple"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cloud left"></div>
        <div className="cloud right"></div>

      </div>
    </>
  )
}

export default App
