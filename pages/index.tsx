import Avatar from '@/components/Avatar'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { LegacyRef, MouseEvent, useRef } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const searchInputRef: LegacyRef<HTMLInputElement> = useRef(null)
  const router = useRouter()

  const search = (event: MouseEvent) => {
    event.preventDefault()
    const term = searchInputRef.current?.value
    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Head>
        <title>Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />

          {/* Avatar */}
          <Avatar imageURL="https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large" />
        </div>
      </header>

      {/* Body */}
      <form className="mt-44 flex w-4/5 flex-grow flex-col items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />

        <div className="mt-5 flex w-full max-w-md items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button onClick={(event) => search(event)} className="btn">
            Google Search
          </button>
          <button onClick={(event) => search(event)} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
