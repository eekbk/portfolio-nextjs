import DrawerAppBar from './drawerAppBar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Eric Kuehnemann Portfolio</title>
        <meta
          name="description"
          content="Portfolio for Eric Kuehnemann, Software Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DrawerAppBar />
      <main className="main">{children}</main>
    </>
  )
}
