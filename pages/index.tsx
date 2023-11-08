import Head from 'next/head'

export default function Home() {
  return (
    <div className='background-gradient font-primary'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        <h1 className="h1">
          Home
        </h1>
      </main>
    </div>
  )
}