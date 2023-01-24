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

function Header() {

  return (
    <div className="flex items-center sticky top-0 z-50 
    bg-white p-2 lg:px-5 shadow-md">

      {/* left */}

      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me"
        width={40} height={40} 
        alt=''
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 mr-2 text-gray-500"/>
          <input className="flex items-center bg-transparent 
          outline-none placeholder-gray-500 flex-shrink" 
          type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* middle */}

      {/* flex grow means i want it to grow to take extra space compared to other divs */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      
      {/* right */}
    
    </div>
  )
}

export default Header;