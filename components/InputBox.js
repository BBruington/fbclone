import Image from "next/legacy/image"
import { EmojiHappyIcon } from "@heroicons/react/solid";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { feedCollectionRef, db } from "../utils/firebase";
import { addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

export default function InputBox({fbuser}) {

  const inputRef = useRef(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    await addDoc(feedCollectionRef, {
      message: inputRef.current.value,
      name: fbuser.user.name,
      email: fbuser.user.email,
      image: fbuser.user.image,
      timestamp: serverTimestamp()
    });

    // db.collection('post').add({
    //   message: inputRef.current.value,
    //   name: fbuser.user.name,
    //   email: fbuser.user.email,
    //   image: fbuser.user.image,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    inputRef.current.value = "";
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
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
            ref={inputRef}
            placeholder={`what's on your mind, ${fbuser.user.name}?`} 
          />

          <button className="" type='submit' onClick={sendPost}></button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500"/>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Phote/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>

    </div>
  )
}