import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Find & Book <span className='text-primary'>Appointment</span> with your favorite <span className='text-primary'>Doctors</span>
          </h2>

          <p className="mt-4 text-gray-700">
          Easily search for trusted healthcare professionals in your area, view their profiles,
          check availability, and book appointments instantly. Whether you need a general check-up
          or a specialist consultation, we make it simple, fast, and reliable.
          </p>

          <Button className="mt-10">Explore Now</Button>
        </div>
      </div>

      <div>
        <Image
          src="/doctors.jpg"
          className="rounded-3xl"
          alt="hero image"
          width={800} height={800}

        />
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Hero
