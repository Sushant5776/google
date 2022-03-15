import Header from '@/components/Header'
import SearchResults from '@/components/SearchResults'
import { API_KEY, CONTEXT_KEY } from 'keys'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import response from 'response'

const Search = ({ results }: { results: SearchResult }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false
  const startIndex = context.query.start || '0'
  const data: {} = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json())
  return {
    props: {
      results: data,
    },
  }
}
