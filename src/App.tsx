
import './App.css'
import Header from './layout/PageHeader'

function App() {


  return (
    <div className='flex flex-col max-h-screen'>
      <div className=''>
        <Header />
        {/* flex grow 1 will let that part to grow the fill the entier screen */}
        <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
          
        </div>
      </div>

    </div>
  )
}

export default App
