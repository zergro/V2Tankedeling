import { Container, Menu } from 'semantic-ui-react'
import Link from 'next/link'


function NavBar() {
    return (
        <ul>
            <li>
                <a href="/">Tankedeling</a>
            </li>
            <li>
                <a href="/create-articles">Create article</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    )
}
export default NavBar