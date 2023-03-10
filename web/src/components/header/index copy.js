import { Outlet, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div>
      <nav className='bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0'>
        <div className='container mx-auto flex flex-wrap items-center'>
        <div className='flex flex-1 text-white font-extrabold'>
        <a href="/" className='font-light leading-tight text-2xl'>
          Navve.Box
        </a>
      </div>
      <div id='subtitulohead' id='sub1' className=' flex font-light text-green-500'>
        Streaming em milisegundos
      </div>
      <div className='flex content-center justify-between md:w-1/2 md:justify-end'>
        <ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
          <li className=''>
          <div className="flex justify-between gap-5">

 
  <button
    className='font-bold text-1xl py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
    onClick={() => { navigate('/') }}
  title='⚠️Clique aqui para selecionar seu streaming para vizualização⚠️'>
    ⚠️Video
  </button>
  <div class='dropdown'>
  <button class='dropdown-button font-bold text-1xl py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
    Downloads
  </button>
  <div class='dropdown-content'>
    <a href='https://drive.google.com/file/d/1HjICvK0YIo_jjSqJhSvNWMh9v6z4Ex1v/view?usp=share_link' class='dropdown-item font-bold text-1xl py-2 px-4 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Winx64</a>
    <a href='https://drive.google.com/file/d/1tBoT0RX2rTQn-XqyIv8cHNTvIGs50qyl/view?usp=share_link' class='dropdown-item font-bold text-1xl py-2 px-4 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Winx86</a>
    <a href='https://drive.google.com/file/d/1sr580LLM26teS41ppxmSpQZjo52gUY9z/view?usp=share_link' class='dropdown-item font-bold text-1xl py-2 px-4 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>MacX64_86</a>
    <a href='https://drive.google.com/file/d/10YqPW3ZOg2EF5MlC-nnBKpjRihGyAeJ1/view?usp=share_link' class='dropdown-item font-bold text-1xl py-2 px-4 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Ubuntu</a>
    </div>
</div>
</div>

              
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className='pt-20 md:pt-24'>
        <div className='mx-auto px-2 container'>
          <Outlet />
        </div>
        
      </main>
      

      <footer className="mx-auto px-2 container py-6">
        
        <ul className="flex items-center justify-center mt-3 text-sm:mt-0 space-x-4">
          <li>
       {/* Este é um comentário    <a href="https://github.com/Glimesh/broadcast-box" className="hover:underline">GitHub</a>
         */} </li>
         
        </ul>
      </footer>
      
    </div>
  )
}

export default Header
