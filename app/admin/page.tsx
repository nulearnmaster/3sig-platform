import Link from 'next/link'

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-sig-dark">
      <header className="fixed top-0 w-full z-50 bg-sig-dark/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-sig-green">3SIG</Link>
          <nav className="flex gap-6">
            <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
            <Link href="/admin" className="text-white">Admin</Link>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-400 mb-12">News Intelligence Pipeline</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="p-6 bg-sig-gray rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-sig-green">0</p>
              <p className="text-gray-400 text-sm">Raw News</p>
            </div>
            <div className="p-6 bg-sig-gray rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-yellow-500">0</p>
              <p className="text-gray-400 text-sm">Analyzed</p>
            </div>
            <div className="p-6 bg-sig-gray rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-blue-500">0</p>
              <p className="text-gray-400 text-sm">Drafts</p>
            </div>
            <div className="p-6 bg-sig-gray rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-green-500">0</p>
              <p className="text-gray-400 text-sm">Published</p>
            </div>
            <div className="p-6 bg-sig-gray rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-purple-500">0</p>
              <p className="text-gray-400 text-sm">Ideas</p>
            </div>
          </div>

          {/* Pipeline Status */}
          <div className="p-8 bg-sig-gray rounded-xl border border-white/10">
            <h2 className="text-xl font-bold mb-6">Pipeline Status</h2>
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-sig-green/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-sig-green">1</span>
                </div>
                <p className="text-gray-400">Collect</p>
              </div>
              <div className="flex-1 h-px bg-white/10 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-yellow-500">2</span>
                </div>
                <p className="text-gray-400">Analyze</p>
              </div>
              <div className="flex-1 h-px bg-white/10 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-blue-500">3</span>
                </div>
                <p className="text-gray-400">Generate</p>
              </div>
              <div className="flex-1 h-px bg-white/10 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-green-500">4</span>
                </div>
                <p className="text-gray-400">Publish</p>
              </div>
            </div>
          </div>

          {/* Connection Status */}
          <div className="mt-8 p-6 bg-sig-gray rounded-xl border border-white/10">
            <h2 className="text-xl font-bold mb-4">Connection Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Supabase</span>
                <span className="text-yellow-500">● Pending</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Neo4j</span>
                <span className="text-gray-500">○ Not connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">HackerNews MCP</span>
                <span className="text-sig-green">● Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}