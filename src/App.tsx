import { useState } from 'react'
import './App.css'
import CategoryPills from './components/CategoryPills'
import { categories } from './data/Categories'
import Header from './layout/PageHeader'

function App() {

  const [selected, setSelected] = useState(categories[0])


  return (
    <div className='flex flex-col max-h-screen'>
      <div className=''>
        <Header />
        {/* flex grow 1 will let that part to grow the fill the entier screen */}
        <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
          <div>SideBar</div>
          <div className='overflow-x-hidden px-8 pb-4'>
            <div className='sticky top-0 bg-white z-10 pb-4'>
              <CategoryPills categories={categories} selectedCategory={selected} setSelected={setSelected} />

            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default App
