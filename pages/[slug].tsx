import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { ParsedUrlQuery } from "querystring"

import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from "../libs/mdx"
import { PostInterface } from "../libs/PostInterface"
import Layout from "../components/layout"
import MDXComponents from "../components/MDXComponents"
import styles from "../styles/Post.module.css"
import PageSeo from "../components/seo"
import TweetButton from "../components/TweetButton"

interface Props {
  post: {
    mdxSource: MDXRemoteSerializeResult
    frontMatter: PostInterface
  }
  prev?: PostInterface
  next?: PostInterface
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles()
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: formatSlug(post)
        }
      }
    }),
    fallback: false
  }
}

const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const allPosts = await getAllFilesFrontMatter();
  const postIndex = allPosts.findIndex(post => post.slug === context.params?.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug(context.params?.slug as string)
  return { props: { post, prev, next } }
}

const Post: NextPage<Props> = ({ post, prev, next }) => {
  const { mdxSource, frontMatter } = post
  const router = useRouter()
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
     <>
      <PageSeo title={`${frontMatter.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`} description='putcut のブログ' />
      <Layout>
        <Link href='/'>
          <a className='text-lg'>{process.env.NEXT_PUBLIC_SITE_NAME}</a>
        </Link>
        <div className='flex pt-8 space-x-2 items-center'>
          <p className='text-sm'>{frontMatter.date}</p>
          <TweetButton text={frontMatter.title} url={`https://blog.putcut.net/${frontMatter.slug}`} />
        </div>
        <h1 className='pt-2 text-5xl font-bold'>{frontMatter.title}</h1>
        <article className={styles.post}>
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
        <nav className='pt-16'>
          <hr />
          <div className='pt-1 flex justify-between'>
            <div>
              {prev && (
                <Link href={prev.slug}>
                  <a href={prev.slug}>← 前ページ</a>
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link href={next.slug}>
                  <a href={next.slug}>次ページ →</a>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </Layout>
     </>
  )
}

export { getStaticPaths, getStaticProps }
export default Post