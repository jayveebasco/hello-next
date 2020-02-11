import { useRouter } from 'next/router'

const post = () => {
  const router = useRouter()

  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  )
}

export default post;
