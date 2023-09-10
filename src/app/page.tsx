import Image from 'next/image'
import Link from 'next/link'
import GoToButton from './button'

export default function Home() {
  return (
    <main>
      <img src="bg.jpg" alt="" />
      <p>
        <b>"Blank"</b>의 캐치프레이즈는 그 이름 그대로<br/>
        한 사람 또는 일부의 긍정적인 감정이 다른 사람들에게 행복을 전달하고<br/>
        이러한 분위기가 널리 퍼지는 현상을 의미합니다. <br/>
        <u></u> <br/>
        <u>- 현호몬 -</u>
      </p>
      <footer>
        <GoToButton href="/share" text="Share" type={1}/>
        <GoToButton href="/copy" text="copy-text"/>
        <GoToButton href="/report" text="report"/>
      </footer>
    </main>
  )
}
