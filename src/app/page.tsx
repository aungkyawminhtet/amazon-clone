import Header from "./components/Header";
import Head from "next/head";
import Banner from "./components/Banner";
import ProductsFeed from "./components/ProductsFeed";

const Home = async() => {

  return(
    <div className=" bg-slate-100">
      <Head>
        <title>ak Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />

        <ProductsFeed />
      </main>
    </div>
  );
}

export default Home;
