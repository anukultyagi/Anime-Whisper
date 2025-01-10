import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FaQuoteLeft, FaRegClipboard } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import Loader from './components/Loader';



const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [animeQuote, setAnimeQuote] = useState({
    anime: 'Naruto',
    author: 'Naurto Uzumaki',
    quote: 'Hard work is worthless for those that dont believe in themselves'
  })
  const [loading, setLoading] = useState(false)

  const fetchApiHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://waifu.it/api/v4/quote', {
        headers: {
          'Authorization': import.meta.env.VITE_API_KEY
        }
      })
      if (!response.ok) {
        setLoading(true)
      } else {
        setLoading(false);
      }
      const result = await response.json();
      setAnimeQuote(result)
    } catch (error) {
      console.log(error, 'error')
    }
  }


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const nextBtnHandler = () => {
    fetchApiHandler()
  }

  return (
    <main className='min-h-screen dark:bg-stone-900'>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className='min-h-[85vh] flex justify-center items-center'>
        <div className={`max-w-4xl bg-[linear-gradient(${isDarkMode ? '90deg' : '-90deg'},_black_50%,_white_50%)] w-full flex flex-col gap-10 justify-between border border-stone-900 p-4`}>
          <div className='w-full py-4 flex justify-between items-start'>
            <div className='text-6xl text-white mix-blend-difference'>
              <FaQuoteLeft />
            </div>
            <div className='flex text-xl  '>
              <span className='cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 text-white mix-blend-difference px-4'><AiFillSound /></span>
              <span className='cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 text-white mix-blend-difference px-4'><FaRegClipboard /></span>
              <span className='cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 text-white mix-blend-difference px-4'><FaSquareXTwitter /></span>
            </div>
          </div>

          <div className='px-5'>
            {loading ? (
              <Loader />
            ) : (
              <p className='text-3xl tracking-wide leading-10 text-white mix-blend-difference'>{animeQuote && animeQuote.quote}</p>
            )}
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold italic tracking-wider text-white mix-blend-difference'>
              - {animeQuote && animeQuote.author} | {animeQuote && animeQuote.anime}
            </p>

            <button
              onClick={nextBtnHandler}
              className={`transition ease-in-out delay-50 px-4 py-1 rounded text-white mix-blend-difference border hover:bg-white hover:text-black font-medium`}>Refresh</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App