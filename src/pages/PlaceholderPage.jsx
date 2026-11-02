import Layout from './Layout'

function PlaceholderPage({ title }) {
  return (
    <Layout>
      <div className="container" style={{ padding: '80px 16px', textAlign: 'center' }}>
        <h1>{title}</h1>
        <p>Página em construção.</p>
      </div>
    </Layout>
  )
}

export default PlaceholderPage
