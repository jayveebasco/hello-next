import { useRouter } from 'next/router'

import Layout from '../../components/Layout'

const Post = () => {
  const router = useRouter()

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.s</p>
    </div>
  )
}

export default Layout(Post)