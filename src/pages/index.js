import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
// import PostLink from '../components/PostLink'

// import { blogs } from '../lib/postData'

const Index = props => {
  return (
    <Layout>
      <div>
        <h1>Batman TV Shows</h1>
        {/* <PostLink post={blogs} /> */}
        <ul>
          {props.shows.map(show => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                  <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index