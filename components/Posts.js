import Post from './Post';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import { db, app } from "../utils/firebase";

export default function Posts() {

  const [realtimePosts, loading, error] = useCollection(
    //db.collection('feed').orderBy('timestamp', 'desc')
    collection( getFirestore(app), 'feed'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  // console.log(realtimePosts)

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {realtimePosts && realtimePosts.docs.map( post => {
          <Post />
        })
      }
    </div>
  )
}