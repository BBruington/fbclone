import Image from 'next/legacy/image';
import { signIn } from 'next-auth/react';

export default function Login() {

  return (
    <div className='grid place-items-center'>
      <Image 
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt="facebook image"
      />

      <h1 onClick={signIn}
      className='py-4 px-8 bg-blue-500 active:bg-blue-400 rounded-full 
      text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}