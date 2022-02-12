import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.svg'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <header>
        <Nav>
          <Image
            src={logo}
            alt="Escudo de la Hermandad de Santa Cruz"
            width={50}
            priority
          />
          <ul>
            <li>
              <Link href="/">
                <a>Corporación</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Imágenes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Cofradía</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Bolsa de caridad</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contacto</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </header>
    </>
  )
}
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 190px;
  border-bottom: 1px solid #cccccc;

  > ul {
    display: flex;
    list-style: none;
    margin-left: 70px;
    padding: 0;

    > li {
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }

      > a {
        position: relative;
        text-decoration: none;
        color: #2c3032;
        font-weight: 500;
        font-size: 24px;
        border-bottom: 2px solid transparent;
        border-radius: 2px;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          border-radius: 2px;
          background-color: #890c58;
          transition: all 0.4s cubic-bezier(0.7, 0, 0.3, 1);
        }

        &:hover {
          color: #890c58;

          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`
