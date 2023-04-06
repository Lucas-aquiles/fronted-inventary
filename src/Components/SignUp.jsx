import React from 'react'

const SignUp = () => {

  
  return (
    <div className='w-2/3 border-2 flex flex-col items-center  my-20 bg-white rounded-3xl	p-5	 absolute left-0'>
      <h2 className="text-3xl font-bold "> Sign Up</h2>
      <form action="" method="get"  >
  
      <div   >
    <label for="name"> </label>
    <input className=' border-2  m-3 rounded-lg	'  type="name" name="name" id="name" placeholder='Name' required/>
  </div>
  <div   >
    <label for="email"> </label>
    <input className=' border-2  m-3 rounded-lg	'  type="email" name="email" id="email" placeholder='Email' required/>
  </div>
  <div   >
    <label for="name"> </label>
    <input className=' border-2  m-3 rounded-lg	'  type="text" name="user" id="user" placeholder='User' required/>
  </div>


  <div  >
    <label for="password"></label>
    <input  className=' border-2  m-3 rounded-lg	'  type="password" name="password" id="password"  placeholder='Password' required/>
  </div>
  <div className="bg-green-300	m-3 text-white	 w-16 text-center rounded  ml-20 hover:bg-slate-500 cursor-pointer	" >
    <input type="submit" value="Login"/>
  </div>
</form>

    </div>
  )
}

export default SignUp
