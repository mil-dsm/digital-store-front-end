import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// Layout = Header + conteúdo da página (children) + Footer.
// Toda página abre com <Layout>...</Layout> para reaproveitar header e footer.
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
