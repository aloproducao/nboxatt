import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
const navigate = useNavigate()
const location = useLocation()

const handleClick = () => {
  if (location.pathname === "/") {
    alert("Você já está na página principal😏");
  } else {
    if (window.confirm("Você será redirecionado para a página principal, tem certeza disso?👽")) {
      navigate("/");
    }
  }
};

  document.addEventListener("DOMContentLoaded", function(event) {
    document.title = "N.box - " + window.location.pathname.substring(1);
  });

return (
<div>
<nav id="header" className='bg-green-800 p-2 mt-0 fixed w-full z-10 top-0'>
<div className='container mx-auto flex flex-wrap justify-between items-center'>
  <div className='flex flex-1 text-white font-extrabold'>
    <a href="/" id='nbox' className='font-light leading-tight text-2xl'>
      Navve.Box
    </a>
  </div>
  <div  id='sub1' className=' flex font-light text-green-500'>
    <a
      href={window.location.href}
      className='text-green-500 font-light hover:underline'
      onClick={(e) => e.stopPropagation()}
    >
      {window.location.href}
    </a>
  </div>



<div className='flex content-center justify-between md:w-1/2 md:justify-end'>
<ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
<li className=''>
<div className="flex justify-between gap-5">

<button
 className='font-bold text-1xl py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
 onClick={handleClick}
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
         
     
        </ul>
      </footer>
      
    </div>
  )
}

export default Header
