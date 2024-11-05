"use client";
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function About() {
    const imageLinks = [
        {
            src: '/images/5AM-Challenge.jpg',
            alt: 'Image 1',
        },
        {
            src: '/images/5AM-Challenge.jpg',
            alt: 'Image 1',
        },
        {
            src: '/images/5AM-Challenge.jpg',
            alt: 'Image 1',
        },
        {
            src: '/images/5AM-Challenge.jpg',
            alt: 'Image 1',
        },
    ];
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])


    return (
     <div className='px-52 pt-10'>

    <h3 className='text-white text-6xl font-bold'>About Me</h3>

    <div className="mx-auto ">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
            {imageLinks.map((item: any, key: number) => (
                <CarouselItem key={key}>
                <Card>
                  <CardContent className=" object-cover w-full h-full">
                    <img src={item.src} alt="" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
     </div>
    );
  }
