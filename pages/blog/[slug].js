import { useRouter } from "next/router";
import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import NavBar from "../../components/navbar";
import Image from "next/image";

const Post = ({ blog, profile }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="container py-6 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {blog.title}
            </h1>
            <div className="flex items-center pt-5 md:pt-10">
              {/* <div>
                  <Image
                    src="/logosvg.svg"
                    className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                    alt="author image"
                    width={40}
                    height={20}
                  />
                </div>
                <div className="pl-5">
                  <span className="block font-body text-xl font-bold text-grey-10">
                    By Christy Smith
                  </span>
                  <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                    February 27, 2022
                  </span>
                </div>
              </div>
  </div> */}
              <div className="prose max-w-none pt-8">
                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={blog.content}
                  projectId="iub54nnj"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
                    ),
                  }}
                />
              </div>
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="/" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "iub54nnj",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog,
      profile,
    },
  };
};
