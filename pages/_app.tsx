import { AppProps } from 'next/app'
import '../styles/index.css'
// import "highlight.js/styles/github.css"
import 'highlight.js/styles/tomorrow-night.css';

import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tweet = document.createElement('script')
    tweet.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweet.setAttribute('defer', 'true');
    document.head.appendChild(tweet);
  })

  return <Component {...pageProps} />
}
