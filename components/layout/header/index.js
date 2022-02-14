import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.svg'
import {
  HeaderWrapper,
  HeaderContainer,
  LogoLink,
  NavWrapper,
  NavPrimary,
  NavPrimaryList,
  NavPrimaryLink,
  NavSecondary,
  NavSecondaryList,
  NavSecondaryLink,
  SubMenuWrapper,
  SubMenuContainer,
  SubMenuList,
  SubMenuLink,
  HeaderOverlay,
  Imagen
} from './styles'

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Link href="/">
            <LogoLink>
              <Image
                src={logo}
                alt="Escudo de la Hermandad de Santa Cruz"
                width={50}
                height={50}
                priority
              />
            </LogoLink>
          </Link>
          <NavWrapper>
            <NavSecondary>
              <NavSecondaryList>
                <li>
                  <Link href="/">
                    <NavSecondaryLink>Hazte hermano</NavSecondaryLink>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <NavSecondaryLink>Reserva de papeletas</NavSecondaryLink>
                  </Link>
                </li>
              </NavSecondaryList>
            </NavSecondary>
            <NavPrimary>
              <NavPrimaryList>
                <li>
                  <Link href="/">
                    <NavPrimaryLink>Hermandad</NavPrimaryLink>
                  </Link>
                  {/* <SubMenuWrapper>
                    <SubMenuContainer>
                      <SubMenuList>
                        <li>
                          <SubMenuLink>Junta de gobierno</SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>Reglas y reglamento</SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>Historia</SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>Sede parroquial</SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>Memorias</SubMenuLink>
                        </li>
                      </SubMenuList>
                    </SubMenuContainer>
                  </SubMenuWrapper> */}
                </li>
                <li>
                  <Link href="/">
                    <NavPrimaryLink>Imágenes</NavPrimaryLink>
                  </Link>
                  <SubMenuWrapper>
                    <SubMenuContainer>
                      <SubMenuList>
                        <li>
                          <SubMenuLink>Nuestra Señora de la Paz</SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>
                            Santísimo Cristo de las Misericordias
                          </SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>Santa María de la Antigua</SubMenuLink>
                        </li>
                        <li>
                          <SubMenuLink>
                            Nuestra Señora de los Dolores
                          </SubMenuLink>
                        </li>
                      </SubMenuList>
                    </SubMenuContainer>
                  </SubMenuWrapper>
                </li>
                <li>
                  <Link href="/">
                    <NavPrimaryLink>Patrimonio</NavPrimaryLink>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <NavPrimaryLink>Bolsa de caridad</NavPrimaryLink>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <NavPrimaryLink>Contacto</NavPrimaryLink>
                  </Link>
                </li>
              </NavPrimaryList>
            </NavPrimary>
          </NavWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <HeaderOverlay />
      <Imagen src="placeholder.png"></Imagen>
    </>
  )
}
