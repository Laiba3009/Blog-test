import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laiba Travel Agency</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}
        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto py-20 px-4"><h1>Arriving in Islamabad</h1>
        <Image width={900} height={400} src="/images/card1.jpg" alt="islamabad" />
       <p>
       I started my trip by flying direct from London Gatwick to Islamabad, which takes 7hrs 30 minutes. I spent my first night in Islamabad, which was a totally different experience from what I expected for a South Asian capital city. The city was purposely built in 1960 to be the new capital of Pakistan. The streets
       are very clean with manicured gardens, and it was not too busy when compared to other capital cities in the region.
       </p>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-4"><h1>Arriving in Islamabad</h1>
        <Image width={900} height={400} src="/images/card1.jpg" alt="islamabad" />
       <p>
       I started my trip by flying direct from London Gatwick to Islamabad, which takes 7hrs 30 minutes. I spent my first night in Islamabad, which was a totally different experience from what I expected for a South Asian capital city. The city was purposely built in 1960 to be the new capital of Pakistan. The streets
       are very clean with manicured gardens, and it was not too busy when compared to other capital cities in the region.
       </p>
        </div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}
