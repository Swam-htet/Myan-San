'use client';

import React from "react";
import {Carousel} from "antd";
import Image from 'next/image';

export default function Home() {
  return (
      <main className="w-full flex flex-col min-h-screen px-10">
          <div className={'flex justify-between pt-20 md:h-[200px] h-auto'}>
              <div>
                  <h1 className={'text-2xl font-[500'}>
                      Book Online Bus Ticket Around Myanmar
                  </h1>
                  <p>
                      The leading bus ticketing system in Myanmar. Find the best price for your bus tickets.
                  </p>
              </div>

              {/*    search travel route form     */}


          </div>


          {/*   carousel       */}

          <Carousel autoplay autoplaySpeed={3000} infinite>
              <div className={'md:w-[1080] w-full'}>
                  <Image src={"/slider/bus-slider-1.png"} width={2000} height={300} alt={"Bus Slider Image one"}/>

              </div>
              <div className={'md:w-[1080] w-full'}>
                  <Image src={"/slider/bus-slider-2.png"} width={2000} height={300} alt={"Bus Slider Image one"}/>

              </div>
              <div className={'md:w-[1080] w-full'}>
                  <Image src={"/slider/bus-slider-3.png"} width={2000} height={300} alt={"Bus Slider Image one"}/>

              </div>
              <div className={'md:w-[1080] w-full'}>
                  <Image src={"/slider/bus-slider-4.png"} width={2000} height={300} alt={"Bus Slider Image one"}/>

              </div>
          </Carousel>
          
      


    </main>
  )
}
