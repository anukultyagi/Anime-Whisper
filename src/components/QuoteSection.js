"use client"
import { useEffect, useState } from "react";

const QuoteSection = () => {
    const [apiData, setApiData] = useState([])

    const fetchApi = async () => {
        const response = await fetch("https://anime-whisper-api.netlify.app/api/random")
        const result = await response.json();
        setApiData(result)
        console.log(result)
    }

    useEffect(() => {
        fetchApi()
    }, [setApiData])

    const refreshHandler = () => {
        fetchApi();
    }

    const listenBtn = () => {

    }

    const copyBtn = () => {

    }

    const tweetBtn = () => {

    }

    return (
        <section className="max-w-5xl min-h-80  flex flex-col justify-between mx-auto bg-gradient-to-r from-stone-900 dark:from-stone-100 from-50% to-stone-100 dark:to-stone-900 to-50%">
            <div className="m-5 flex justify-between items-start ">
                <div className="text-6xl text-stone-100 mix-blend-difference">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                </div>
                <div className="flex text-xl  ">
                    <span onClick={listenBtn} className="cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 text-stone-100 mix-blend-difference px-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1z"></path>
                        </svg>
                    </span>

                    <span onClick={copyBtn} className="cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 text-stone-100 mix-blend-difference px-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 384 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"></path>
                        </svg>
                    </span>
                    <span onClick={tweetBtn} className="cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 text-stone-100 mix-blend-difference px-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="m-5">
                <p className="text-3xl tracking-wider leading-10 text-stone-100 mix-blend-difference">{apiData && apiData.quote}</p>
            </div>
            <div className="m-5 flex justify-between items-center">
                <p className="font-semibold italic tracking-wider text-white mix-blend-difference">- {apiData && apiData.character} | {apiData && apiData.show}</p>
                <button onClick={refreshHandler} className="transition ease-in-out delay-50 px-4 py-1 rounded text-white mix-blend-difference border hover:bg-white hover:text-black font-medium">Refresh</button>
            </div>
        </section>
    );
};

export default QuoteSection;
