import {createTag as createTagController} from "../../src/controllers/createTag";
import { createTag as createTagService} from "../../src/services/createTag";

describe('Entidade: Tags', () => {
  describe('Caso de uso: Cadastrar uma nova tag no banco', () => {
    
    test('Deve criar uma tag e retornar um status 200 e as propriedades da tag criada', async () => {  
    const response = await createTagController.handle(Request, Response)
    expect(response.status).toBe(200)
  })

    test('Deve retornar um status 400 e a mensagem de erro caso o usuário tente cadastrar uma tag com nome já existente', async () => { 
      const response = await createTagService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(400)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o usuário tente cadastrar uma tag sem nome', async () => { 
      const response = await createTagService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(400)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o usuário que vai cadastrar a tag não esteja autenticado', async () => { 
      const response = await createTagService.execute(tag_id, user_sender, user_receiver, message)
      expect(response.status).toBe(401)
  })

  test('Deve retornar um status "erro" e a mensagem de erro caso o usuário que vai cadastrar a tag não seja um administrador', async () => { 
    const response = await createTagService.execute(tag_id, user_sender, user_receiver, message)
    expect(response.status).toBe(403)
  })
})
}) 

