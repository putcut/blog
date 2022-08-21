import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { PostInterface } from '../libs/PostInterface'
import { getAllFilesFrontMatter } from '../libs/mdx'
import Layout from '../components/layout'
import PageSeo from "../components/seo"

interface Props {
  posts: PostInterface[]
  initialDisplayPosts: PostInterface[]
  pagination: {
    currentPage: number
    totalPages: number
  }
}

const POSTS_PER_PAGE = 10

const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllFilesFrontMatter()
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }
  return { props: { posts, initialDisplayPosts, pagination } }
}

// Pagination はやってない
const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <PageSeo title={process.env.NEXT_PUBLIC_SITE_NAME!} description='putcut のブログ'></PageSeo>
      <Layout>
        <h1 className='text-5xl'>{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
        <div className='pt-16'>
          <p><a href="https://twitter.com/putcutt/">putcut</a> のブログ</p>
        </div>
        <div className='pt-16 flex flex-col space-y-8'>
          {posts.map((post, index) => (
            <div key={index}>
              <Link href={post.slug}>
                <h2 className='text-3xl inline-block'><a href={post.slug}>{post.title}</a></h2>
              </Link>
              <p className='text-sm pt-2'>{post.date}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export { getStaticProps }
export default Home
