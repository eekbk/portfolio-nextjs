import Layout from '@/components/layout'
import { StyledEngineProvider } from '@mui/material'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  )
}
