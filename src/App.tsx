import Qr from './component/Qr'
import './App.css'

function App() {
  return (
    <section className='h-screen w-screen justify-center items-center flex'>
     <Qr crea={"https://www.bibebook.com/files/ebook/libre/V2/segond_louis_-_la_sainte_bible.pdf"} />
     </section>
  )
}

export default App
