import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 2;
  background-color: #fff;
  border-bottom: 1px solid #cccccc;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1460px;
  padding: 0 3rem;
`

export const LogoLink = styled.a`
  display: flex;
  cursor: pointer;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-flow: column;
`

export const NavPrimary = styled.nav`
  display: flex;
`

export const NavPrimaryList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const NavPrimaryLink = styled.a`
  display: flex;
  position: relative;
  padding-bottom: 2.5rem;
  text-decoration: none;
  color: #2c3032;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 0px;
    background-color: #890c58;
    z-index: 1;
    transition: 0.1s ease-in-out;
  }

  &:hover {
    color: #890c58;

    &::after {
      height: 3px;
    }
  }
`

export const NavSecondary = styled.nav`
  margin: 2.8rem 0 1rem;
`

export const NavSecondaryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const NavSecondaryLink = styled.a`
  display: flex;
  position: relative;
  text-decoration: none;
  color: #2c3032;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    color: #890c58;
  }
`

export const SubMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin-top: 1px;
  background-color: #fff;
`

export const SubMenuContainer = styled.div`
  margin: 0 auto;
  max-width: 1460px;
  padding: 0 3rem;
`

export const SubMenuList = styled.ul`
  list-style: none;
  padding: 1.5rem 0 2.5rem;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -3.33333rem;

  > li {
    width: 50%;
    padding-left: 3.33333rem;
  }
`

export const SubMenuLink = styled.a`
  display: flex;
  position: relative;
  text-decoration: none;
  padding: 1rem 0;
  color: #2c3032;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  border-bottom: 1px solid #cccccc;
  transition: 0.1s ease-in-out;

  &:hover {
    color: #890c58;
    border-bottom: 1px solid #890c58;
  }
`

export const HeaderOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: saturate(180%) blur(5px);
  z-index: 1;
`

export const Imagen = styled.img`
  width: 100%;
  margin-top: 200px;
`
