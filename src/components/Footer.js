import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 '> 
        <div >
                <h2 className="text-lg font-semibold text-white mb-4">About Us </h2>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div >
                <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
              <ul>
                <li><Link href=''>Home </Link></li>
                <li><Link href=''>About</Link></li>
                <li><Link href=''>Courses</Link></li>
                <li><Link href=''>Contact</Link></li>
              </ul>
            </div>
            <div >
                <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                <pre className="mb-4">Facebook  Twitter  Instagram</pre>
            </div>
            <div >
                <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
               <ul>
                <li>Narowal,Pakistan</li>
                <li>Narowal 51600</li>
                <li>Email: Suf12.jutt@gmail.com</li>
                <li>Phone: +92-3434176386</li>
              
               </ul>
            </div>
      </div>
      <p className='text-center pt-8 text-xs'>© 2024 MUsic School.All rights reserved.</p>
    </footer>
  )
}

export default Footer
