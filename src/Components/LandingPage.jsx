import Login from "./Login"
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div className="bg-slate-200 w-full h-screen flex  flex-row ">
        <div className=" w-2/5	  bg-green-300 ">  
<Image className="rotate-90	 "
      src="wave.svg"
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
 </div>
<div className=" w-1/2  flex  justify-center	items-center	"> 

<Login  />
</div>
 

    </div>
  )
}

export default LandingPage
