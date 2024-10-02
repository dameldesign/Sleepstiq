import { Button } from '@/components/ui/button'
import React from 'react'

export default function Homepage() {
  return (
    <main>
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Relax & Rest</h1>
            <p className="text-xl text-gray-600 mb-6">We're here to help you get the best sleep possible, so you can wake up feeling refreshed and ready to take on the day.</p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">Shop Now</Button>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600" alt="Person sleeping peacefully" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4">
            <img src="/placeholder.svg?height=30&width=100" alt="Google" className="h-8" />
            <img src="/placeholder.svg?height=30&width=100" alt="Forbes" className="h-8" />
            <img src="/placeholder.svg?height=30&width=100" alt="Bloomberg" className="h-8" />
            <img src="/placeholder.svg?height=30&width=100" alt="Sleep Review" className="h-8" />
            <img src="/placeholder.svg?height=30&width=100" alt="Influencive" className="h-8" />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10k+ Happy Customers</h2>
            <p className="text-gray-600 mb-4">There's no better way to unwind before bed than with Sleep Petiq. Our customers love how comfortable and relaxing our products are.</p>
            <Button variant="outline">Learn More About Us</Button>
          </div>
          {/* <div className="md:w-1/2">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">"I'm a very stressed person, but with Sleep Petiq I can relax and sleep very easily. I love this set of products!"</p>
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="James Miller" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">James Miller</p>
                    <p className="text-sm text-gray-500">CEO, TechCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </section>
        </main>
  )
}
