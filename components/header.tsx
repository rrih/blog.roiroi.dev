import Link from 'next/link'

const Header = () => {
  return (
    <section className="test-center mt-16 mb-16 md:mb-12">
      <div className="text-center text-6xl font-bold tracking-tighter leading-tight">
        <Link href="/">
          <a
            style={{
              textDecoration: 'none'
            }}
          >
            ろいろぐ
          </a>
        </Link>
      </div>
      <div className="text-center mt-5">
        雑なログ
      </div>
    </section>
  )
}

export default Header
