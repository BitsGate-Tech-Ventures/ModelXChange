import React from 'react'

const footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 '>

            <div>

            <h3 className='text-md font-semibold mb-4 '>Resources</h3>

            <ul>

            <li><a href="#">Getting started</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Community Forums</a></li>

            </ul>
          
            </div>

            <div>

              <h3 className='text-md font-semibold mb-4 '>Company</h3>

              <ul>

              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>

              </ul>

              </div>

            <div>

            <h3 className='text-md font-semibold mb-4 '>Community</h3>

            <ul>

            <li><a href="#">Events</a></li>
            <li><a href="#">Meetups</a></li>
            <li><a href="#">Conferences</a></li>
            <li><a href="#">Hackathons</a></li>

            </ul>

            </div>

        </div>

    </footer>
  )
}

export default footer
