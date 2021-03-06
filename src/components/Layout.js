import Header from '../components/Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default Layout
