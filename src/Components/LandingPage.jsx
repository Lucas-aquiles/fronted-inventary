import Login from "./Login"
import Image from 'next/image'
import SignUp from "./SignUp"

const LandingPage = () => {
  return (
    <div className="bg-slate-200 w-full h-screen flex  flex-row ">
        <div className="   w-1/2 bg-green-300  h-screen relative   ">  
        <div className="  bg-green-300 w-96 h-96 -right-24  top-28 rounded-full	
       absolute" > </div>
        <div className="  bg-slate-200 w-40 h-40  -right-28  -top-3 rounded-full	
       absolute" > </div>
         <div className="  bg-slate-200 w-16 h-16  -right-14 bottom-0  rounded-full	
       absolute" > </div>
    
 </div>
 
 
<div className=" w-1/2  flex  justify-center	items-center	relative"> 

{/* <Login  /> */}
<SignUp/>
</div>
 

    </div>
  )
}

export default LandingPage
