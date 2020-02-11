import Link from 'next/link'

const PostLink = props => {
  const { post } = props
  
  return (
    <div>
      <ul>
        {post.map((postItem, index) => (
          <li key={index}>
            <Link href={`/post?title=${postItem.title}`}>
              <a title={postItem.title}>{postItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostLink
