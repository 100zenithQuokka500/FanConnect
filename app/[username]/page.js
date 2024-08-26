import React from 'react'

const Username = ({params}) => {
  return (
    <>
    
      <div className="cover w-full bg-red-50 relative">
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/607479/974c7f1fd3584eeebb9eae277b54cf99/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/1.png?token-time=1725408000&token-hash=1ET8_aMoiQUVamS5-XZHW2mlP5C8kKn3mum3mQatjyI%3D" alt="banner" />
        <div className='absolute -bottom-20 right-[46%] border-black border-2 rounded-full text-center'>
            <img className='rounded-full' width={150} height={150} src="https://wallpapercave.com/wp/wp5290497.jpg" alt="profilepic" />
        </div>
      </div>
      <div className='info flex justify-center items-center my-24 mb-32 flex-col gap-2'>
        <div className='font-bold text-lg tex-center'>
            @{params.username}
        </div>
        <div className='text-black-200 text-center'>
        Creating videos
        </div>
        <div className='text-center'>
        51,977 members . 365 posts
        </div>
        <div className='payment flex gap-3 w-[80%] mt-11'>
            <div className="supporters w-1/2 bg-purple-200 rounded-lg text-black p-10">
            <h2 className='text-2xl  font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>
                <li className='my-2 flex gap-2 items-center'>
                    <img width={22} className="rounded-full" src="/person.jpg" alt="person" />
                    <span>
                    Amulya donated <span className='font-bold'>$40</span> with a message "I support you bro.Lots of love."
                    </span>
                </li>
                <li className='my-2 flex gap-2 items-center'>
                    <img width={22} className="rounded-full" src="/person.jpg" alt="person" />
                    <span>
                    Amulya donated <span className='font-bold'>$40</span> with a message "I support you bro.Lots of love."
                    </span>
                </li>
                <li className='my-2 flex gap-2 items-center'>
                    <img width={22} className="rounded-full" src="/person.jpg" alt="person" />
                    <span>
                    Amulya donated <span className='font-bold'>$40</span> with a message "I support you bro.Lots of love."
                    </span>
                </li>
              
            </ul>
            </div>
            <div className="makePayment w-1/2 bg-purple-200 rounded-lg text-black p-10">
                <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                <div className='flex gap-2 flex-col'>
                    <div>
                        <input type="text" className='w-full p-3 rounded-lg' name="name" id="name" placeholder='Enter Name' />
                    </div>
                    <input type="text" className='w-full p-3 rounded-lg' name="name" id="name" placeholder='Enter Message' />
                    <input type="text" className='w-full p-3 rounded-lg' name="name" id="name" placeholder='Enter Amount' />
                    <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3 rounded-lg border-none mt-2'>Pay</button>
                </div>
                <div className='flex gap-2 mt-5'>
                    <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3 rounded-lg'>Pay $10</button>
                    <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3 rounded-lg'>Pay $20</button>
                    <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3 rounded-lg'>Pay $30</button>
                </div>
            </div>
        </div>
      </div>
    </>
      
   
  )
}

export default Username
