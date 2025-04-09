import React from 'react'
import Image from 'next/image'

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
    <div>
        <Image src="./logo.svg" alt='logo' width={50} height={50}/>
    </div>
  )
}

export default Header;
