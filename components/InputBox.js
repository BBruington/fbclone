import Image from "next/legacy/image"
import { EmojiHappyIcon } from "@heroicons/react/solid";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { feedCollectionRef, db } from "../utils/firebase";
import { addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getStorage } from "firebase/storage";


export default function InputBox({fbuser}) {

  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToFeed, setImageToFeed] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    await addDoc(feedCollectionRef, {
      message: inputRef.current.value,
      name: fbuser.user.name,
      email: fbuser.user.email,
      image: fbuser.user.image,
      timestamp: serverTimestamp()
    }).then(doc => {
      console.log("here is image", imageToFeed);
      if (imageToFeed) {
        const storage = getStorage();
        const feedRef = ref(storage, `${fbuser.user.name} feed image`); 
        console.log("feed Reference", feedRef)
        uploadBytes(feedRef, imageToFeed);
        removeImage();

        // uploadTask.on("state_change", null, error => console.error(error), () => {
        //   //when the upload completes
        //   storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
        //     db.collection('posts').doc(doc.id).set({
        //       postImage: url
        //     }, { merge: true })
        //   })
        // })
      }
    })

    // db.collection('post').add({
    //   message: inputRef.current.value,
    //   name: fbuser.user.name,
    //   email: fbuser.user.email,
    //   image: fbuser.user.image,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    inputRef.current.value = "";
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToFeed(readerEvent.target.result);
    }
  }

  const removeImage = () => {
    setImageToFeed(null);
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

        {imageToFeed && (
          <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 
          transition duration-150 transform hover:scale-105 cursor-pointer">
            <img 
              className="h-10 object-contain" 
              src={imageToFeed}
              alt="image"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500"/>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>

    </div>
  )
}