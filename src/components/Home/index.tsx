import { useContext } from "react";
import { UsersContext } from "../../UsersContext";
import { User } from "../User";

import { Container } from "./styles";


interface HomeProps {
  search: string;
}

export function Home({ search }: HomeProps) {
  const users = useContext(UsersContext)

  return (
    <main>
      <Container>
          <ul>
            {users
              .filter(user => 
                user.first_name.toLowerCase().includes(search.toLowerCase())
              )
              .map(user => (
                <User
                key={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
                title={user.employment.title}
              />
              ))
            }
          </ul>  
      </Container>
    </main>
  )
}