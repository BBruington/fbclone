import Image from "next/image";
function Header() {

  return (
    <div>
      <h1>header</h1>
      {/* left */}
      <div>
        <Image src="https://links.papareact.com/5me"
        width={40} height={40} layout="fixed"
        alt=''
        />
      </div>

      {/* middle */}
      
      {/* right */}
    
    </div>
  )
}

export default Header;