import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from "next-mdx-remote/serialize"
import gfm from "remark-gfm"

import { PostInterface } from './PostInterface'
import { FrontMatterInterface } from './FrontMatterInterface'

const postsDirectry = path.join(process.cwd(), "posts")

export const formatSlug = (slug: string) => {
  return slug.replace(/\.(mdx|md)/, "")
}

export const getFiles = async () => {
  return fs.readdirSync(postsDirectry)
}

export const getFileBySlug = async (slug: string) => {
  const mdxPath = path.join(postsDirectry, `${slug}.mdx`)
  const source = fs.readFileSync(mdxPath, "utf8")
  const { data, content } = matter(source)
  const mdxSource = await serialize(
    content,
    {
      mdxOptions: {
        remarkPlugins: [
          gfm
        ]
      }
    }
  )
  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data
    } as PostInterface
  }
}

export const getAllFilesFrontMatter = async () => {
  const files = fs.readdirSync(postsDirectry)

  const allFrontMatter: PostInterface[] = []

  files.forEach(file => {
    const source = fs.readFileSync(path.join(postsDirectry, file), "utf8")
    const data = matter(source).data as FrontMatterInterface
    allFrontMatter.push({ ...data, slug: formatSlug(file) })
  })

  return allFrontMatter.sort((a, b) => (a.date > b.date ? -1 : 1))
}