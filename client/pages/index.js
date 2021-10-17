import Head from 'next/head'
import Link from 'next/link'

export default function Home({ nftArray }) {
  return (
    <>
      <Head>
        <title>Eneftee</title>
      </Head>
      {nftArray.map(nft => (
        <div key={nft.id}>
          <a>
            <h3>{nft.name}</h3>
            <img src={nft.image_url} />
          </a>
        </div>
      ))}
    </>
  )
}

export const getStaticProps = async () =>{

  const res = await fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
  const data = await res.json();

  return {

    props: {
      nftArray: data.assets
    }
  }
}