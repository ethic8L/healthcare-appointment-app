import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Header() {
    const Menu= [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/'
        }
    ]
  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        <div className='flex items-center gap-10'>
            <Image src="./logo.svg" alt='logo' width={50} height={50}/>       
            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <li className='hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out'>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <Button>Get Started</Button>
    </div>

    
  )
}

export default Header;
