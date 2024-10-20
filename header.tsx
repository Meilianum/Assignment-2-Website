// import React from 'react';
// import styles from './Header.module.css';
// import { FaHome } from 'react-icons/fa';

// export default function Header() {
//   return (
//     <div className='relative bg-slate-600 p-4 flex justify-center items-center flex-col'>
    
//       <FaHome className="mr-2 text-white text-3xl" />
//       <h1 className="text-2xl font-bold text-white">Welcome to My Website</h1>
//       <p className="mt-2 text-white text-center">
//         Discover my projects, learn about my journey as a web developer, and connect with me for collaborations.
//       </p>

//       {/* Background Image Section */}
//       <div 
//         className='absolute inset-0 bg-cover bg-center opacity-40' 
//         style={{ 
//           backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/025/061/745/non_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg)' 
//         }}
//       ></div>

//       {/* Content Overlay */}
//       <div className='relative z-10'>
//         <h2 className="text-xl font-semibold text-white mt-4">Let's Build Something Amazing Together!</h2>
//       </div>
//       <img
//         src="https://static.vecteezy.com/system/resources/previews/025/061/745/non_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg">
      
//       </img>
//       {/* Footer */}
//       <div className='bg-slate-400 p-4 w-full text-center mt-4'>
//         <p className="text-black">Footer content goes here</p>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import styles from './Header.module.css';
import { FaHome } from 'react-icons/fa';

export default function Header() {
  return (
    <div className='relative bg-slate-600 p-4 flex justify-center items-center flex-col'>
      {/* Background Image Section */}
      <div 
        className='absolute inset-0 bg-cover bg-center opacity-40' 
        style={{ 
          backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/025/061/745/non_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg)' 
        }}
      ></div>

      {/* Content Overlay */}
      <div className='relative z-10 text-center'>
        <FaHome className="mr-2 text-white text-3xl" />
        <h1 className="text-2xl font-bold text-white">Welcome to My Website</h1>
        <p className="mt-2 text-white">
          Discover my projects, learn about my journey as a web developer, and connect with me for collaborations.
        </p>
        <h2 className="text-xl font-semibold text-white mt-4">Let's Build Something Amazing Together!</h2>
      </div>

      {/* Footer */}
      <div className='bg-slate-400 p-4 w-full text-center mt-4'>
        <p className="text-black">Footer content goes here</p>
      </div>
    </div>
  );
}









