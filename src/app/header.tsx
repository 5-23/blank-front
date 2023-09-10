import Image from 'next/image'
import Link from 'next/link'
import GoToButton from './button'

export default function Header() {
  return (
    <header>
        <b>Blank</b>
        <nav id="aa">
            <GoToButton href="/write" img="header/write.svg" text="Writing"/>
            <GoToButton href="/" img="header/explore.svg" text="Explore" type={1}/>
            <GoToButton href="/setting" img="header/setting.svg" text="Setting"/>
        </nav>

        <nav id="bb">
            <GoToButton href="/login" text="login"/>
            <GoToButton href="/signup" text="signup" type={1}/>
        </nav>
    </header>
  )
}
