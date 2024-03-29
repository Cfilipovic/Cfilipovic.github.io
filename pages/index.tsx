import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillApple } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/headshot.jpeg";
// import design from "../public/design.png";
import design from "../public/softwaredev.png";
import code from "../public/uidesign.png";
import consulting from "../public/consulting.png";
import visualize from "../public/visualize.png";
import powerfulfeatures from "../public/powerfulfeatures.png";
import movies from "../public/movies.png";
import boardingpass from "../public/boardingpass.png";
import dance from "../public/dance.png";
import delivery from "../public/delivery.png";
import fooddelivery from "../public/food-delivery.png";
import health from "../public/health.png";
import homeapp from "../public/home-app.png";
import train from "../public/train.png";
import yoga from "../public/yoga.png";
import blogpost from "../public/blogpost.png";
import carinterface from "../public/carinterface.png";
import customize from "../public/customize.png";
import crowdfunding from "../public/crowdfunding.png";
import fileupload from "../public/file-upload.png";
import garagesail from "../public/garagesail.png";
import petmatch from "../public/petmatch.png";
import emicalculator from "../public/emicalculator.png";
import weather from "../public/weather.png";
import calendar from "../public/calendar.png";
import testimonials from "../public/testimonials.png";
import recipe from "../public/recipe.png";
import { useState } from "react";

import ModalImage from "react-modal-image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Connor Filipovic Portfolio</title>
        <meta name="description" content="A Portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">codedbycon</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick ={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              {/* <li><iframe src='../public/resume.pdf' /></li> */}
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/resume.pdf" target="_blank">Résumé</a></li>
            </ul>
          </nav>

          <div className="text-center px-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">Connor Filipovic</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Software Developer and Solutions Architect</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100">Elevate your mobile presence and engage your audience with cutting-edge software development solutions from a professional.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
            {/* <AiFillTwitterCircle /> */}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cfilipovic"><AiFillGithub /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/connorfilipovic/"><AiFillLinkedin /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/developer/connor-filipovic/id1670017337"><AiFillApple /></a>
            {/* <AiFillYoutube /> */}
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
            <Image alt="image" src={deved} layout="fill" objectFit="cover"  />
          </div>
        </section>


        <section>
          <div>
            <h3 className="text-3xl pt-5 pb-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-100">Unleash the full potential of your business with a comprehensive suite of services including <strong>mobile software development (IOS & Android), modern UI design and software consulting</strong> all provided by a seasoned developer.
            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-100">
              I offer from a wide range of services, including brand design, programming and teaching.
            </p> */}
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 justify-center">
              <Image src={design} width={100} height={100} alt="development" className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Mobile Software Development</h3>
              <p className="py-2">
                  Empower your business to succeed in today's mobile-first world with complete mobile software development services - from design to release - delivered by a skilled developer.
              </p>
              <h4 className="py-5 text-teal-600">Development Tools I Use</h4>
              <p className="text-grapy-800 py-1">XCode</p>
              <p className="text-grapy-800 py-1">Swift - SwiftUI</p>
              <p className="text-grapy-800 py-1">Android Studio</p>
              <p className="text-grapy-800 py-1">Kotlin - Compose</p>
            </div>

            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="code"  className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                  Experience the power of an elegantly designed user interface ready to take your app to the next level of user engagement, retention and amazement.
              </p>
              <br/>
              <h4 className="py-5 text-teal-600">Design tools I use</h4>
              <p className="text-grapy-800 py-1">Photoshop</p>
              <p className="text-grapy-800 py-1">Adobe XD</p>
              <p className="text-grapy-800 py-1">Figma</p>
              <p className="text-grapy-800 py-1">Good Old Pen & Paper</p>
            </div>

            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="consulting"  className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Streamline your software development process and optimize your architecture for growth with expert consulting services from a seasoned architect.
              </p>
              <br/>
              <h4 className="py-5 text-teal-600">Consulting Services</h4>
              <p className="text-grapy-800 py-1">Feasibility Study</p>
              <p className="text-grapy-800 py-1">Architecture Design</p>
              <p className="text-grapy-800 py-1">Cost Optimization</p>
              <p className="text-grapy-800 py-1">Technology Choice</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/petmatch/id6449750651">
                <Image src={petmatch} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/garage-sail/id1670017065">
                <Image src={garagesail} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="crowdfunding.png">
                <Image src={crowdfunding} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="customize.png">
                <Image src={customize} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="carinterface.png">
                <Image src={carinterface} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="blogpost.png">
                <Image src={blogpost} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="file-upload.png">
                <Image src={fileupload} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="food-delivery.png">
                <Image src={fooddelivery} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="powerfulfeatures.png">
                <Image src={powerfulfeatures} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="movies.png">
                <Image src={movies} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="yoga.png">
                <Image src={yoga} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="train.png">
                <Image src={train} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="emicalculator.png">
                <Image src={emicalculator} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="weather.png">
                <Image src={weather} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="calendar.png">
                <Image src={calendar} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="testimonials.png">
                <Image src={testimonials} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="recipe.png">
                <Image src={recipe} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="dance.png">
                <Image src={dance} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="boardingpass.png">
                <Image src={boardingpass} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="visualize.png">
                <Image src={visualize} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="home-app.png">
                <Image src={homeapp} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="health.png">
                <Image src={health} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="delivery.png">
                <Image src={delivery} alt="image" className="rounded-lg object-cover shadow-lg" width={100} height={100} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" rel="noopener noreferrer" href="calendar.png">
                
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Reach Out To Me And Let's Talk</h2>
              <form action="#" className="space-y-8">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required></input>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how we can help you" required></input>
                  </div>
                  <div className="sm:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <div>
                      <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">Submit</a>
                  </div>
              </form>
          </div>
        </section>
      </main>
    </div>
  )
}
