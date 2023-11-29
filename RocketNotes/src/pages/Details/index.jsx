import { Button } from "../../components/Button"
import { Container } from "./styles"

export function Details() {
  return(
    <Container>
      <h1>Hello World!</h1>
      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Programador"/>
    </Container>
  )
}