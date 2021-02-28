import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 items-center">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex md:hidden mb-6 items-center">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
