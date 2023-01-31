import Image from "next/legacy/image"
export default function InputBox({fbuser}) {

  return (
    <div>
      <div className="flex space-x-4 p-4 items-center">
        <Image 
          className="rounded-full"
          src={fbuser.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="user image"
        />

        <form className="flex flex-1">
          <input 
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text" 
            placeholder={`what's on your mind, ${fbuser.user.name}`} 
          />
        </form>
      </div>
    </div>
  )
}