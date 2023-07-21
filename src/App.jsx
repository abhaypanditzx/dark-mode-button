import { useState } from "react";
import Alert from "./Alert";
function App() {
  const [bg, setBg] = useState('bg-white');
  const [pos, setPos] = useState('left-1');
  const [btn, setBtn] = useState('bg-blue-300')
  const [star,setStar] = useState("hidden");
  const [cloud,setCloud] = useState("block");
  const [circle, setCircle] = useState('bg-yellow-400')
  const [alt,setAlt] = useState("hidden");
  const [text,setText] = useState("");
  const [textcol,setTextcol] = useState("");


const func =()=>{
  let icon1 = document.getElementById("icon1")
  let icon2 = document.getElementById("icon2")
 let cir =  document.getElementById("circle")
  if(bg == "bg-white"){
  setBg("bg-black");
  setBtn("bg-blue-900");
  icon1.style.display = "none"
  icon2.style.display = "block"
  cir.classList.add("circle")
  setPos("right-1");
  setCircle("bg-white");
  setStar("block");
  setCloud("hidden");
  setAlt("flex");
  setText("darkmode is enabled");
  setTextcol("text-green-500");
setTimeout(() => {
  setAlt("hidden");
}, 1000);
  }
else{
  setBg("bg-white");
  setBtn('bg-blue-300')
  icon1.style.display ="block"
  icon2.style.display = "none"
  setPos("left-1");
  setCircle("bg-yellow-400")
  setStar("hidden")
  setCloud("block");
  setAlt("flex");
  setText("darkmode is disabled");
setTextcol("text-red-500");

  setTimeout(() => {
    setAlt("hidden");
  }, 1000);

}
}
  
  return (
 <div className={`h-[100vh]  ${bg} flex justify-center items-center w-full`}>
  <Alert text={text} textcol={textcol} alt = {alt} />
<div onClick={func} className={`overflow-hidden    rounded-[10rem] relative  flex items-center w-[9rem] h-[3.3rem]  uppercase  shadow-sm  shadow-[#afafafaa] ${btn}`}>
  <span   className={`h-[2px] duration-[1s] bg-white w-[2px] absolute animate-pulse  rounded-full top-4 left-7            ${star}`}    ></span>
  <span   className={`h-[2px] duration-[0.1s] bg-white w-[2px] absolute animate-pulse  rounded-full top-8 left-[6rem]       ${star}`}  ></span>
  <span   className={`h-[2px] duration-[0.4s] bg-white w-[2px] absolute animate-pulse  rounded-full top-[2.4rem] left-4     ${star}`}  ></span>
  <span   className={`h-[2px] duration-[0.7s] bg-white w-[2px] absolute animate-pulse  rounded-full top-5 left-16           ${star}`}  ></span>
  <span   className={`h-[2px] duration-[1.2s] bg-white w-[3px] absolute animate-pulse  rounded-full top-3 left-[7rem]       ${star}`}  ></span>
  <span   className={`h-[2px] duration-[1.01s] bg-white w-[2px] absolute animate-pulse  rounded-full top-[3rem] left-[3rem]  ${star}`} ></span>
  <span className={`cloud  ${cloud} `}></span>
  <span className={`cloud1 ${cloud} `}></span>
<div id="circle" className={`h-[3rem] absolute ${circle} flex justify-center items-center  rounded-full w-[3rem] ${pos}`}>
{/*sun*/}
  <svg id="icon1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 block h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

{/*moon*/}
<svg id="icon2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hidden h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>

</div>
</div>
<div className="absolute bottom-0 flex space-x-2 p-2">
  <a  href="https://www.facebook.com/anonymousjavascriptuser" className="text-white font-medium rounded-sm bg-blue-600 p-1">facebook</a>
  <a  href="https://github.com/abhaypanditzx" className="text-white font-medium rounded-sm bg-gray-800 p-1">github</a>
</div>
 </div>
  )
}

export default App