"use client"
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'


function CategorySearch() {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then((res)=>{
      console.log(res.data.data);
      setCategoryList(res.data.data);
    })
  }
  return (
    <div className='mb-10 px-5 items-center flex flex-col gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-gray-400 text-xl'>Search Your Doctor and Book Appointment in one click</h2>    

        <div className="flex mt-3 w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search..." />
            <Button type="submit"><Search className='h-4 w-4 mr-2'/>Search</Button>
        </div>

        {/* Display List of Category*/}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {categoryList.length>0?categoryList.map((item, index)=>index<6 && (
            <div key={index} className='flex flex-col text-center items-center gap-2 p-5 m-2 rounded-lg bg-blue-50 hover:scale-110 transition-all ease-in-out mt-5 cursor-pointer'>
              <Image  src={item.Icon?.[0]?.url} alt='icon' width={40} height={40}/>
              <label className='text-blue-600 text-sm'>{item?.Name}</label>
            </div>
          ))
        
          :
          // Skeleton Effect
          [1,2,3,4,5,6].map((item, index)=>(
            <div className='h-[120px] m-2 w-[130px] bg-slate-200 rounded-lg animate-pulse' key={index}>
            </div>
          ))
          }
        </div>

         

        

    </div>
  )
}

export default CategorySearch
