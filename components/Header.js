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
    <div className="flex items-center">
      <h1>header</h1>
      {/* left */}
      <div>
        <Image src="https://links.papareact.com/5me"
        width={40} height={40} 
        alt=''
        />
        <div className="flex">
          <SearchIcon className="h-6"/>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* middle */}
      
      {/* right */}
    
    </div>
  )
}

export default Header;