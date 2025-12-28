import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3SIG - Traffic · Product · AI',
  description: '새로운 시대의 세 가지 시그널. 온톨로지 기반 전략으로 중소·중견 브랜드를 성장시킵니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}