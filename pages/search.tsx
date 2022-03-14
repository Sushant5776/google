import Header from '@/components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Result - {router.query.term}</title>
      </Head>

      <Header />
    </div>
  )
}

export default Search
