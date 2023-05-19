/* eslint-disable @next/next/no-img-element */


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Clothes That Get YOU Noticed
            </h1>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow block md:hidden">
              <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' alt="logo"/>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop now
              </button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow hidden md:block">
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' alt="logo"/>
          </div>
        </div>
  )
}
