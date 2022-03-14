import Avatar from '@/components/Avatar'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  return (
    <div className="">
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

      {/* Footer */}
    </div>
  )
}

export default Home
