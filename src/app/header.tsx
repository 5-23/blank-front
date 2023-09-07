import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
        <b>Blank</b>
        <nav id="aa">
            <Link href="/write">
                <img src="header/write.svg" alt="/"/>
                Writing
            </Link>
            <Link href="/" className="now">
                <img src="header/explore.svg" alt="o"/>
                Explore
            </Link>
            <Link href="/setting">
                <img src="header/setting.svg" alt="{ }"/>
                Setting
            </Link>
        </nav>

        <nav id="bb">
            <Link href="/login">
                Login
            </Link>

            <Link href="/login" className="now">
                SignUp
            </Link>
        </nav>
    </header>
  )
}
