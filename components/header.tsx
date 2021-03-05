import Link from 'next/link'

const Header = () => {
  return (
    <section className="test-center mt-16 mb-16 md:mb-12">
      <div className="text-center text-6xl font-bold tracking-tighter leading-tight">
        <Link href="/">
          ろいろぐ
        </Link>
      </div>
      <div className="text-center mt-5">
        ただのソフトウェアエンジニア(仮)<br />ここに140字以上のメモ書きを記しておきます
      </div>
    </section>
  )
}

export default Header
