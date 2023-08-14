import React from 'react';
import {
  Row,
  Column,
} from "./CodingElements.js";

const Coding = () => {
  return (

    <div className="sm:px-8 mt-9">
      <div className="mx-auto-max-w-7xl lg-px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="flex mx-auto max-w-2xl lg:max-w-5x1">
            <div className="max-w-2x1">
              <div className="columns-2 flex gap-8 justify-center">
                <div className="flex-none bg-fixed">
                  <a aria-label="Home" className="opacity-100 transition duration-300 ease-in-out hover:opacity-70" href="https://github.com/skullkid4200">
                    <img src="https://avatars.githubusercontent.com/u/116686625?s=400&v=4" width="512" height="512" alt="Skeleton Avatar" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"></img>
                  </a>
                </div>
                <div>
            <h1 className = "text-4xl font-bold tracking-tight dark:text-zinc-800 sm:text-5xl">
              MERN Web Development
            </h1>
            <h1>
              
            <h1 className="pt-6">In the fall of 2022, I enrolled in the University of Pennsylvania's EDX Full-Stack Web Developer Bootcamp.
                   I became versed in many useful programs and tools commonly used in the professional world 
                   today, including HTML, CSS, JavaScript, Node, Express, React, SQL, MongoDB, and many other libraries, frameworks, and miscellaneous add-ons. Below you will find links to functional applications developed using the skills I acquired in the bootcamp.  
                   </h1>
            </h1>
            
            </div>
            
            </div>
            
            
        
              
        <Column className="pt-20">
          <section className="card border-solid border-2 border-zinc-500 rounded-lg">
            <header className="text-xl pt-5 font-medium">Similar Movie Generator</header>
            <p className ="pb-5 pt-5">Group project where the assignment was to create a relatively simple JavaScript application using APIs, local storage, and multiple pages.
            Simply type in the title of a movie and the string will be processed through 2 different movie database APIs and then return you 3 YouTube trailers for similar movies via the Google API. Movies are defined as "similar" via their IMDB genre designations.
            My areas of focus on this product were primarily the API functions and local storage logic.</p>
            <img src={require('../images/movienight_screenshot.png')} alt="Project 1 Screenshot" className="border-solid border-2 border-blue-500 rounded-lg"/>
            {/* <p className="pb-4 pt-4 m-1">Random Similar Movie Generator</p> */}
            <div className="pb-4 pt-4">
            <a href="https://github.com/skullkid4200/Atomic-Cats-Project-1" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub Repo</a>
            </div>
            <a href="https://skullkid4200.github.io/Random-Similar-Movie-Generator/" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Deployed Application<svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          </section>
          
          <div className="pt-20">
          <section className="card border-solid border-2 border-zinc-500 rounded-lg">
            <header className="text-xl pt-5 font-medium">Hey Boo-Boo!</header>
            <p className ="pb-5 pt-5">Group project where the goal was to create a social event planning app in which users can create an event, invite others, and declare what they are bringing in a forum-like format. The app was made using JavaScript and HandleBars JS to arrange the pages. Users can create accounts for logging in/out, which are stored in our SQL database. Express was used to set up the server and Bootsrap was used for the design aspects. Because this is an event-planning app, we connected to both the Google Calendar and Google Maps APIs.  .</p>
            <img src={require('../images/project2screenshot.png')} alt="Project 2 Screenshot" className="border-solid border-2 border-blue-500 rounded-lg"/>
            {/* <p className="pb-4 pt-4 m-1">A Picnic/Potluck App</p> */}
            <div className="pb-4 pt-4">
            <a href="https://github.com/miacias/hey-boo-boo" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub Repo</a>
            </div>
            <a href="https://lit-river-34902.herokuapp.com/" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Deployed Application<svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          </section>
          </div>
        
          <div className="pt-20">
          <section className="card border-solid border-2 border-zinc-500 rounded-lg">
            <header className="text-xl pt-5 font-medium">Stock Hunt</header>
            <p className ="pb-5 pt-5">Another group project. For this app we essentially wanted to remake the stock-trading app RobinHood, with the caveat it would be a mock version, and serve best in classrooms or other educational settings so that users can trade stocks without using real money.
            The app is made with JavaScript and utilizes React as the main tool for building the website. This time we used MongoDB instead of SQL, in conjunction with Apollo JS and GraphQL. My main contributions to this project
            were the design of the site itself via Tailwind CSS, all navigation functionality via React, and the log in/logout 
            functionalities and how they interacted with the database. I am definitely proud to say that while working on this project, 
            I became well-versed enough in Tailwind that I was able to continue developing my skills and eventually make
            the portfolio site that you are currently looking at.</p>
            <img src={require('../images/stockhunt.png')} alt="Stock Hunt" className="border-solid border-2 border-blue-500 rounded-lg"/>
            {/* <p className="pb-4 pt-4 m-1">Stock Hunt</p> */}
            <div className="pb-4 pt-4">
            <a href="https://github.com/JSR5404/Stock-Hunt" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub Repo</a>
            </div>
            <a href="https://tranquil-retreat-75935.herokuapp.com/" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Deployed Application<svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          </section>
        </div>
        
        <div className="pt-20">
          <section className="card border-solid border-2 border-zinc-500 rounded-lg">
            <header className="text-xl pt-5 font-medium">Password Generator</header>
            <p className ="pb-5 pt-5">My first real code project, this was a very simple app utilizing a tiny bit of JavaScript in order to generate a fully random password. Users will hit "generate password" and be met with customizable options for the parameters of length, uppercase letters, numbers, and special characters.</p>
            <img src={require('../images/passwordgenerator.png')} alt="Stock Hunt" className="border-solid border-2 border-blue-500 rounded-lg"/>
            {/* <p className="pb-4 pt-4 m-1">Stock Hunt</p> */}
            <div className="pb-4 pt-4">
            <a href="https://github.com/skullkid4200/Week-3-Challenge-Password-Gen" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub Repo</a>
            </div>
            <a href="https://skullkid4200.github.io/Week-3-Challenge-Password-Gen/" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Deployed Application<svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          </section>
          </div>
        </Column>
      
            {/* <div>
            <div className="flex justify-center columns-5 pt-20 px-4 sm:px-8 lg:px-12">
                  <div className="bg-zinc-900 w-12 h-12">

                  </div>
                  <div className="bg-zinc-700 w-12 h-12">

                  </div>
                  <div className="bg-zinc-500 w-12 h-12">

                  </div>
                  <div className="bg-zinc-300 w-12 h-12">

                  </div>
                  <div className="bg-zinc-100 w-12 h-12">

                  </div>
                  </div>
            </div> */}
            
            <div className ="mt-6 flex gap-20 justify-center">
              <a className ="group -m-1 p-1" ari-label="Follow on Instagram" href="https://www.instagram.com/skull_kid_design/">
                <svg viewBox="0 0 24 24" ari-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-700 dark:group-hover:fill-zinc-400">
                  <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 
                  3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 
                  4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 
                  3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 
                  3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052
                  -3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
                  </path>
                  <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                </svg>
              </a>
              <a className ="group -m-1 p-1" ari-label="Follow on gitHub" href="https://github.com/skullkid4200">
                <svg viewBox="0 0 24 24" ari-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-700 dark:group-hover:fill-zinc-400">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                </svg>
              </a>
              <a className ="group -m-1 p-1" ari-label="Follow on LinkedIn" href="https://www.linkedin.com/in/jack-einhorn-41175777/">
                <svg viewBox="0 0 24 24" ari-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-700 dark:group-hover:fill-zinc-400">
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Coding;