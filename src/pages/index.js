import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

import { blogs } from '../lib/postData'

const Index = () => {
  return (
    <div>
      <div>My Blog</div>
      <PostLink post={blogs} />
    </div>
  )
}

export default Layout(Index)