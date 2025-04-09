import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

function CategorySearch() {
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-gray-400 text-xl'>Search Your Doctor and Book Appointment in one click</h2>    

        <div className="flex mt-3 w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search..." />
            <Button type="submit"><Search className='h-4 w-4 mr-2'/>Search</Button>
        </div>
    </div>
  )
}

export default CategorySearch
