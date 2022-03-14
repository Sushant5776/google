import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LegacyRef, MouseEvent, useRef } from 'react'
import Avatar from '@/components/Avatar'
import HeaderOptions from '@/components/HeaderOptions'

const Header = () => {
  const router = useRouter()
  const searchInputRef: LegacyRef<HTMLInputElement> = useRef(null)

  const search = (event: MouseEvent) => {
    event.preventDefault()

    const term = searchInputRef.current?.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          onClick={() => router.push('/')}
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          className="cursor-pointer"
        />

        <form className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg">
          <input
            ref={searchInputRef}
            type="text"
            className="w-full flex-grow focus:outline-none"
            placeholder="Enter text to search"
          />
          <XIcon
            className="h-7 transform cursor-pointer text-gray-500 transition duration-100 hover:scale-125 sm:mr-3"
            onClick={() => {
              if (searchInputRef.current?.value) {
                searchInputRef.current.value = ''
              }
            }}
          />
          <MicrophoneIcon className="mr-3 hidden h-6 border-l-2 border-gray-300 pl-4 text-blue-500 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button hidden onClick={(event) => search(event)} type="submit">
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          imageURL="https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large"
        />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  )
}

export default Header
