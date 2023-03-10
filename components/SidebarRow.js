import Image from "next/legacy/image"

export default function SidebarRow({src, Icon, title}) {

  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200
    rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          alt="user icon"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}

      {Icon && (
        <Icon className="h-8 w-8 text-blue-500" />
      )}

      <p className="hidden pl-2 sm:inline-flex font-medium">{title}</p>
    </div>
  )
}