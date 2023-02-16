import Image from "next/legacy/image";

export default function Contact({ src, name }) {

  return (
    <>
      <div className="flex items-center space-x-3 mb-2 relative 
      hover:bg-gray-200 cursor-pointer rounded-xl">
        <Image 
          className="rounded-full"
          alt=''
          objectFit="cover"
          src={src}
          width={50}
          height={50}
          layout='fixed'
        />
        <p>{name}</p>
        <div className="absolute bottom-1 left-7 bg-green-400
        h-3 w-3 rounded-full"></div>
      </div>
    </>
  )
}