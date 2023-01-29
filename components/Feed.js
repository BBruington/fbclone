import Stories from './Stories';
export default function Feed() {

  return (
    <div className='flex-grow h-screen pb-44 pt-6
    mr-4 xl:mr-40 overflow-y-auto'>
      <div className='mx-auto max-w-md md:max-w-lg'>

        {/* Stories */}

        <Stories />

        {/* Input Box */}

        {/* Posts */}

      </div>
    </div>
  )
}