import Link from 'next/link'

const PostLink = props => {
  const { post } = props
  
  return (
    <div>
      <ul>
        {post.map((postItem, index) => (
          <li key={index}>
            <Link href="/p/[id]" as={`/p/${postItem.id}`}>
              <a title={postItem.title}>{postItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostLink
