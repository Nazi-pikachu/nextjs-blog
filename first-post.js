import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>{" "}
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        {/* <Image
          src="/images/profile.jpg"
          alt="Rishabh Jain"
          height={144}
          width={144}
        /> */}
      </Layout>
    </>
  );
}
export default FirstPost;
