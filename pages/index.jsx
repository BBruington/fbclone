import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { getSession, useSession } from 'next-auth/react';
import Login from '../components/Login';

// export const getServerSideProps= async (context) => {
//   //get user
//   const session = await getSession(context);
//   console.log("session 1.0", session)

//   return {
//     props: {
//       session
//     }
//   }
// }

export default function Home() {

  const { data: session, status } = useSession()
  console.log(session)

  if(!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header fbuser={session}/>

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}
