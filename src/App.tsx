import Qr from './component/Qr'
import './App.css'

function App() {
  return (
    <section className='h-screen w-screen justify-center items-center flex'>
     <Qr crea={"https://virtualcarte.vercel.app/"} />
     </section>
  )
}

export default App
