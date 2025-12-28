import Link from 'next/link'

export const revalidate = 60

export default async function BlogPage() {
  // Supabase 연결 후 활성화
  const posts: any[] = []

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
          <p className="text-gray-400 mb-12">브랜드 성장을 위한 전략적 인사이트를 공유합니다</p>

          {posts && posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="p-6 bg-sig-gray rounded-xl border border-white/10 hover:border-sig-green/30 transition">
                  <span className="text-sig-green text-sm font-medium">{post.category}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.published_at).toLocaleDateString('ko-KR')}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-sig-green text-sm hover:underline">
                      읽기 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">아직 게시된 글이 없습니다.</p>
              <p className="text-gray-600 text-sm mt-2">Supabase 연결 후 콘텐츠가 표시됩니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}