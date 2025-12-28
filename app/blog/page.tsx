import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { id: '1', title: 'MCP로 연결되는 AI 에코시스템', category: 'AI', excerpt: 'Model Context Protocol이 변화시키는 AI 통합 환경', date: '2025.12.28' },
    { id: '2', title: '트래픽 채널 믹스 전략', category: 'Traffic', excerpt: 'CAC를 줄이고 전환율을 높이는 채널 포트폴리오', date: '2025.12.28' },
    { id: '3', title: '온톨로지 기반 포지셔닝', category: 'Product', excerpt: '시장 구조를 읽고 빈 공간을 찾는 방법', date: '2025.12.28' }
  ]

  return (
    <main className="min-h-screen bg-sig-dark">
      <header className="fixed top-0 w-full z-50 bg-sig-dark/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-sig-green">3SIG</Link>
          <nav className="flex gap-6">
            <Link href="/blog" className="text-white">Blog</Link>
            <Link href="/admin" className="text-gray-400 hover:text-white transition">Admin</Link>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">인사이트 아티클</h1>
          <p className="text-gray-400 mb-12">브랜드 성장을 위한 전략적 인사이트</p>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="p-6 bg-sig-gray rounded-xl border border-white/10 hover:border-sig-green/30 transition">
                <span className="text-sig-green text-sm font-medium">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}