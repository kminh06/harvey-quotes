import Quote from '@/components/Quote'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export async function getServerSideProps() {
  const response = await fetch('https://quotes.alakhpc.com/quotes?show=suits&character=Harvey_Specter')
  const result = await response.json()
  const quote = result.text

  return {
    props: {
      quote
    }
  }
}

export default function Home(props) {
  const [quote, setQuote] = useState(props.quote)

  async function fetchQuote() {
    const response = await fetch('/api/quote')
    const result = await response.json()
    const quote = result.text
    setQuote(quote)
  }

  return (
    <div id="main">
      <Head>
        <title>Harvey Says</title>
      </Head>
      <div id="title-container"><h1 id="title">Harvey Specter Quotes</h1></div>
      <div id="column-1">
        <div id="quote-container">
          <Quote quote={quote} />
        </div>
        <button id="ask" className="cta" onClick={(e) => {
          e.preventDefault()
          fetchQuote()
        }}>
          <span>Ask Harvey</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
      <img id="specter-1" src="/specter.jpg" alt="Harvey Specter" />
    </div>
  )
}
