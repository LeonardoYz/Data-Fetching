import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/logo.png"

import { Container, Content } from "./styles";

interface HeaderProps {
  setSearch: (event: string) => void;
}

export function Header({ setSearch }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="header__logo">
          <img src={logo} alt="Logo" />           
        </div>

        <form action="#" className="header__form">
          <input 
            type="search" 
            id="search"
            name="search"
            className="header__input"
            placeholder="Procure um usuário"
            onChange={(event) => setSearch(event.target.value)}
          />  
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="header__icon"
          />
        </form>
      </Content>
    </Container>
  )
}