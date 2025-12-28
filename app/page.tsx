import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-sig-dark">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-sig-dark/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-sig-green">3SIG</Link>
          <nav className="flex gap-6">
            <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
            <Link href="/admin" className="text-gray-400 hover:text-white transition">Admin</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-sig-green/30 text-sig-green text-sm mb-8">
            한국형 스몰 팔란티어
          </span>
          <h1 className="text-6xl font-bold text-sig-green mb-6">3SIG</h1>
          <p className="text-2xl text-gray-400 mb-4">Traffic · Product · AI</p>
          <p className="text-xl text-gray-500 mb-12">새로운 시대의 세 가지 시그널</p>
          <p className="text-lg text-gray-400 mb-12">
            온톨로지 기반 전략으로 중소·중견 브랜드를 성장시킵니다
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-sig-green text-black font-semibold rounded-lg hover:bg-sig-green/90 transition sig-glow"
          >
            시그널에 진입하기
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Three Signals */}
      <section className="py-20 px-6 bg-sig-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Three Signals</h2>
          <p className="text-gray-400 text-center mb-12">데이터 기반 전략으로 실행 가능한 결과를 만듭니다</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-sig-dark rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-sig-green mb-4">Traffic</h3>
              <p className="text-gray-400 mb-4">트래픽 전략</p>
              <p className="text-gray-500 text-sm">고객 흐름을 분석해 전환율을 높이는 채널 전략을 수립합니다.</p>
            </div>
            <div className="p-8 bg-sig-dark rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-sig-green mb-4">Product</h3>
              <p className="text-gray-400 mb-4">프로덕트 진단</p>
              <p className="text-gray-500 text-sm">온톨로지로 제품·브랜드 포지셔닝을 진단하고 재설계합니다.</p>
            </div>
            <div className="p-8 bg-sig-dark rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-sig-green mb-4">AI</h3>
              <p className="text-gray-400 mb-4">AI 운영</p>
              <p className="text-gray-500 text-sm">AI 에이전트로 매일의 운영 데이터를 분석해 보고서를 자동 생성합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sig-green font-bold text-xl mb-2">3SIG</p>
          <p className="text-gray-500 text-sm">© 2024 Traffic · Product · AI — 새로운 시대의 시그널</p>
        </div>
      </footer>
    </main>
  )
}