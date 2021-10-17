import Head from "next/head";
import Link from "next/link";

export default function Home({ nftArray }) {
  return (
    <>
      <Head>
        <title>Eneftee</title>
      </Head>
    <p>This page is under construction, as of this moment you can only look at these nft's</p>

      <ul>
        {nftArray.map((nft) => (
          nft.name !== null ? (
            <li key={nft.id}>
            <a>
              <h3>{nft.name}</h3>
              <img src={nft.image_url} />
              <p>{}</p>
            </a>
          </li>
          ) : null
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20"
  );
  const data = await res.json();

  return {
    props: {
      nftArray: data.assets,
    },
  };
};
