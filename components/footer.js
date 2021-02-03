import Container from './container'
import { SITE_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <footer>This is a footer for {SITE_NAME}</footer>
      </Container>
    </footer>
  )
}
