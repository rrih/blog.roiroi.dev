import Container from './container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-5 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/rrih/blog.roiroi.dev`}
              className="mx-3 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
