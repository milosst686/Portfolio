import React from 'react'




export const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-centerpy-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p>About</p>
                <h2>Who I Am</h2>
                <p>I am not normal GameDev, I'm an Indie one</p>
                <p>After a year at the Faculty of Mechanical Engineering, I decided that it wasn’t for 
                    me and that it would be best to drop out so that I could dedicate more time to pursuing 
                    a career that would bring me more fulfillment. 
                </p>
                <p>My passion has always been gaming and therefore this led my curious mind to start learning 
                    about programming in the hope that one day, I could create my own game. Since then I have 
                    enrolled in a number of courses, became a certified Java developer, led my team to second 
                    place in the Global Game Jam tournament, and even created some of my own very basic games 
                    that are published to <a href="https://milosst686.itch.io/" target="_blank"><span className=' text-[#5651e5]'>Itch.io</span> </a> . 
                </p>
                <p>
                In addition to this, I have completed further courses in Java, JavaScript, SQL, and Coding for 
                Marketers but am keen to take this further so that I can work on building more sensory-enriched experiences. 
                </p>
            </div>
        </div>
    </div>
  )
}
