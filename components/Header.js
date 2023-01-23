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

function Header() {

  return (
    <div className="m-3">

      {/* left */}

      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me"
        width={40} height={40} 
        alt=''
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 mr-2 text-gray-500"/>
          <input className="flex items-center bg-transparent outline-none placeholder-gray-500" 
          type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* middle */}

      <div>
        
      </div>
      
      {/* right */}
    
    </div>
  )
}

export default Header;