// ----------------- TESTE 1: ABRINDO A PAGINA E VERIFICANDO SE O BODY APARECE------------------
describe('teste pagina inicial', () => {
  it('deve abrir a pagina e verificar se o body esta aparecendo', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('body').should('be.visible');
  });
});

// ----------------- TESTE 2: TESTANDO O COMPORTAMENTO DO BOTÃO COM O CLICK ---------------------
describe('teste botão de busca', () => {
  it('deve clicar no botão buscar', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('button').click();
  });
});

// ----------------- TESTE 3: DIGITANDO A PALAVRA POODLE NO CAMPO DE INPUT------------------
describe('teste campo de input', () => {
  it('deve digitar a palavra Poodle no campo de input', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('input').type('Poodle');
  });
});

// ----------------- TESTE 4: SIMULANDO A JORNADA DO USUÁRIO------------------
describe('simulação da jornada do usuario', () => {
  beforeEach(()=> {
    cy.visit('http://127.0.0.1:5500/index.html');
  })
  it('deve abrir a pagina e verificar se o body esta aparecendo', () => {
    cy.get('#campoBusca').type('Poodle')
    cy.get('button').click();
  });
});
