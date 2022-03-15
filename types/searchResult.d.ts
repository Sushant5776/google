interface SearchResult {
  searchInformation: {
    formattedTotalResults: string
    formattedSearchTime: string
  }
  items: {
    link: string
    snippet: string
    formattedUrl: string
    title: string
  }[]
}
