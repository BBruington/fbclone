import Post from './Post';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import { db, app } from "../utils/firebase";

export default function Posts() {

  const [realtimePosts, loading, error] = useCollection(
    collection( db, 'feed'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
   console.log('realtimeposts', realtimePosts);
   console.log('error', error);
   console.log('loading', loading);

  return (
    <div>
      <div>name</div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {realtimePosts && realtimePosts?.docs.map( post => {
          <>
            <Post 
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
              />
            <div>test</div>
          </>
        })
      }
    </div>
  )
}