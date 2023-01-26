import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";



import HeaderIcon from "./HeaderIcon";


function Header({fbuser}) {
  
  return (
    <div className="flex items-center sticky top-0 z-50 
    bg-white p-2 lg:px-5 shadow-md">

      {/* left */}

      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me"
        width={40} height={40} 
        alt=''
        />
        <div className="flex mx-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 mr-2 text-gray-500"/>
          <input className="hidden md:inline-flex items-center bg-transparent 
          outline-none placeholder-gray-500 flex-shrink" 
          type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* middle */}

      {/* flex grow means i want it to grow to take extra space compared to other divs */}
      <div className="flex justify-center flex-grow md:ml-5 lg:ml-1">
        <div className="flex space-x-5 md:space-x-0 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      
      {/* right */}

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image 
        alt="profile picture"
        onClick={()=> signOut()}
        className="rounded-full cursor-pointer sm:ml-3 md:mr-2"
        src={fbuser.user.image}
        width={40}
        height={40}
        layout="fixed"
        />

        <p className="whitespace-nowrap font-semibold lg:pr-3">{fbuser.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      
      </div>
    
    </div>
  )
}

export default Header;