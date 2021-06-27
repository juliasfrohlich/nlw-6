import { createCompliment as createComplimentController } from "../../src/controllers/createCompliment";
import { createCompliment as createComplimentService} from "../../src/services/createCompliment";

describe('Entidade: Compliments', () => {
  describe('Caso de uso: Cadastrar um novo elogio no banco', () => {
    
    test('Deve criar um elogio e retornar um status 200 e as propriedades do elogio criado', async () => {  
    const response = await createComplimentController.handle(Request, Response)
    expect(response.status).toBe(200)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o usuário tente cadastrar um elogio para si mesmo', async () => { 
      const response = await createComplimentService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(400)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso os dados do usuário que vai receber o elogio estejam incorretos', async () => { 
      const response = await createComplimentService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(400)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o usuário que vai enviar o elogio não esteja autenticado', async () => { 
      const response = await createComplimentService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(401)
  })
})
}) 

