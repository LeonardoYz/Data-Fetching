import { Container } from "./styles";

interface UserProps {
  first_name: string;
  last_name: string;
  avatar: string;
  title: string;
}

export function User(
  {
    first_name, 
    last_name, 
    avatar, 
    title 
  }: UserProps
) 
{
  return (
    <Container>
      <div className="picture">
        <img src={avatar} alt="User"/>           
      </div>

      <div>
        <h2 className="name">{first_name} {last_name}</h2>
        <span className="title">{title}</span>
      </div>
    </Container>
  )
}