import React from 'react'

const SideBar = () => {
  return (
    <div className='w-[340px] h-[100vh] bg-[#0C0C0C] rounded-[13px]'>
      <div>
        <div className='text-[30px] text-white pt-[77px] ml-[37px]'>{"Coinnow Tech"}</div>
      </div>
      <div className='pt-[170px] ml-[37px] text-[30px] text-white'>
        <div className='cursor-pointer'>{">Products"}</div>
        <div className='mt-8 cursor-pointer'>{">Users"}</div>
      </div>
    </div>
  )
}

export default SideBar