import { useState } from 'react'
import './App.css'
import CategoryPills from './components/CategoryPills'
import { categories,videos } from './data/Categories'
import Header from './layout/PageHeader'
import VideoGridItem from './components/VideoGridItem'

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
            

            {/* this code line gives ability to auto align the grid layout insted of using sm md lg */}
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
               
                {
                  videos.map(video => (
                    <VideoGridItem key={video.id} {...video} />
                  ))
                }

            </div>



          </div>
        </div>
      </div>

    </div>
  )
}

export default App
