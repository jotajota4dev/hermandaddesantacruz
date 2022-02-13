import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 190px;
  border-bottom: 1px solid #cccccc;
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-right: 50px;

    &:first-child {
      margin-right: 70px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
export const NavLogoLink = styled.a`
  display: flex;
  cursor: pointer;
`
export const NavLink = styled.a`
  display: flex;
  position: relative;
  text-decoration: none;
  color: #2c3032;
  font-weight: 500;
  font-size: 24px;
  border-bottom: 2px solid transparent;
  border-radius: 2px;
  cursor: pointer;

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
`
