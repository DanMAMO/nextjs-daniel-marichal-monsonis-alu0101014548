import Image from 'next/image'
import Link from 'next/link'
import Logo from './Popeye-Wallpaper-1883461229.jpg'


export default function Navbar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt="Verdito Logo"
            width={70}
            height={70}
            quality={100}
            placeholder='blur'
        />
        <h1>Sarandonga</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/generate">Generar fantasia de nombres</Link>
        <Link href="/generate">Generar fantasia de imágenes</Link>

      </nav>
  )
}