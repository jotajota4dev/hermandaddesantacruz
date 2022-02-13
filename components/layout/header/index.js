import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.svg'
import { HeaderWrapper, NavLinks, NavLink, NavLogoLink } from './styles'

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <nav>
          <NavLinks>
            <li>
              <Link href="/">
                <NavLogoLink>
                  <Image
                    src={logo}
                    alt="Escudo de la Hermandad de Santa Cruz"
                    width={50}
                    height={50}
                    priority
                  />
                </NavLogoLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Corporación</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Imágenes</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Cofradía</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Bolsa de caridad</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Contacto</NavLink>
              </Link>
            </li>
          </NavLinks>
        </nav>
      </HeaderWrapper>
    </>
  )
}
