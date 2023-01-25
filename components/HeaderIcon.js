

function HeaderIcon({Icon, active}) {
  return (
    // group links parent element with child
    <div className="flex items-center cursor-pointer md:px-10 
    sm:h-14 lg:hover:bg-gray-100 rounded-xl lg:active:border-b-2
    lg:active:border-blue-500 group">
      <Icon className={`h-5 text-gray-500 text-center sm:h-7 
      mx-auto group-hover:text-blue-500 group-active:text-blue-400 ${active && 'text-blue-500'}`} />
    </div>
  )
}

export default HeaderIcon;