import Avatar from './avatar'
import DateFormatter from './date-formatter'
// import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  // coverImage,
  date,
  author,
  slug,
}: Props) => {
  return (
    <div className="pb-10">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h4 className="text-2xl mb-3 leading-snug text-left">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>
      <div className="text-left text-lg mb-4 flex items-center">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostPreview
