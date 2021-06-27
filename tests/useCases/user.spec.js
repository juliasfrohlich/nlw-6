import { createUser as createUserController } from "../../src/controllers/createUser";
import { createUser as createUserService} from "../../src/services/createUser";

describe('Entidade: Users', () => {
  describe('Caso de uso: Cadastrar um novo user no banco', () => {
    
    test('Deve criar um user e retornar um status 200 e as propriedades do user criado', async () => {  
    const response = await createUserController.handle(Request, Response)
    expect(response.status).toBe(200)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o usuário tente cadastrar um user com e-mail ja existente', async () => { 
      const response = await createUserService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(400)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o usuário tente cadastrar um user sem um e-mail', async () => { 
      const response = await createUserService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(400)
  })
})
}) 

