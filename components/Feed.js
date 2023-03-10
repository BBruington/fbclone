import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';

export default function Feed({fbuser}) {

  return (
    <div className='flex-grow h-screen pb-44 pt-6
    mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>

        {/* Stories */}

        <Stories />

        {/* Input Box */}

        <InputBox fbuser={fbuser}/>

        {/* Posts */}

        <Posts />

      </div>
    </div>
  )
}