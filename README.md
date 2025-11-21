# Front-end de Encomendas

## 1) Problema

Com a alta demanda de pedidos, começaram a ocorrer *choques de encomendas*, erros de organização e atrasos nas entregas.  
A falta de um sistema claro para visualizar, criar e acompanhar pedidos gerava *insatisfação dos clientes*, dificuldade de controle para o fabricante e confusão para o administrador.

Este front-end foi criado para *organizar o fluxo*, facilitar a experiência do cliente e melhorar a comunicação entre fabricante e administrador.

---

## 2) Atores e Decisores (quem usa / quem decide)

*Usuários principais:*
- *Cliente:* faz login, visualiza produtos e cria sua encomenda.  
- *Fabricante:* visualiza as encomendas e atualiza status (ex.: “em produção”, “saiu para entrega”).  
- *Admin:* gerencia o sistema inteiro, organiza pedidos e tem acesso total.

*Decisores/Apoiadores:* administrador e responsáveis pela loja.

---

## 3) Casos de uso (de forma simples)

*Cliente:*
- Fazer login  
- Visualizar produtos disponíveis  
- Criar encomenda (formulário detalhado)  
- Enviar pedido  

*Fabricante:*
- Fazer login  
- Ver encomendas  
- Atualizar status (“em produção”, “finalizado”, “para entrega”)

*Admin:*
- Fazer login  
- Alterar e organizar encomendas  
- Acessar todo o sistema  

---

## 4) Limites e suposições

*Limites:* entregar o front-end funcional mínimo até o final da disciplina; integração simples com back-end.  
*Suposições:* atrasos podem ocorrer; algum pedido pode vir incompatível; comunicação pode ser necessária.  
*Plano B:* usar chat/suporte para resolver inconsistências.

---

## 5) Hipóteses + validação

*H-Valor:* Se o cliente puder ver os produtos e criar sua encomenda com clareza, a satisfação aumenta graças à organização e facilidade.  
*Validação:* teste com 5 usuários; meta: 4 em 5 devem relatar melhora.

*H-Viabilidade:* Com HTML + React + Bootstrap, a navegação deve ocorrer em até 2s.  
*Validação:* medir no protótipo; meta: 9/10 acessos dentro desse tempo.

---

## 6) Fluxo principal e primeira fatia

### *Fluxo principal:*
1. Usuário entra no site  
2. Faz login  
3. Visualiza cards de produtos  
4. Escolhe um produto  
5. Preenche o formulário com os detalhes  
6. Envia a encomenda  
7. Fabricante atualiza status  
8. Admin organiza tudo

### *Primeira fatia (escopo mínimo):*
- Tela de login  
- Tela de produtos (cards)  
- Tela de criar encomenda (formulário simples)  
- Salvar e exibir o pedido criado

### *Critérios de aceite:*
- Após login, os produtos aparecem corretamente.  
- Ao criar uma encomenda, ela aparece na listagem.  

---

## 7) Esboços de algumas telas (wireframes)

(Adicionar as imagens mais tarde)  
- Tela de login  
- Tela de produtos (cards)  
- Tela de criar encomenda  

---

## 8) Tecnologias

### 8.1 Navegador
- *HTML, CSS, JS, React, Bootstrap*  
- *Armazenamento local:* LocalStorage (se necessário)  
- *Hospedagem:* GitHub Pages ou Vercel  

### 8.2 Front-end (servidor de aplicação)
- *Framework:* React  
- *Hospedagem:* Vercel  

### 8.3 Back-end (caso exista)
(API será adicionada depois)

---

## 9) Plano de Dados (Dia 0) — somente itens 1–3

### 9.1 Entidades
- *Usuário* — cliente, fabricante ou admin  
- *Encomenda* — pedido criado pelo cliente e atualizado pelo fabricante  

### 9.2 Campos por entidade

#### *Usuário*
| Campo | Tipo | Obrigatório | Exemplo |
|-------|-------|------------|---------|
| id | número | sim | 1 |
| nome | texto | sim | "Maria" |
| email | texto | sim (único) | "maria@teste.com" |
| senha | texto | sim | "1234" |
| papel | número (0=cliente, 1=fabricante, 2=admin) | sim | 0 |
| dataCriacao | data/hora | sim | 2025-10-02 |

#### *Encomenda*
| Campo | Tipo | Obrigatório | Exemplo |
|--------|---------|-----------|----------|
| id | número | sim | 10 |
| usuario_id | número (fk) | sim | 1 |
| produto | texto | sim | "Laço Azul" |
| material | texto | sim | "couro" |
| peso | número | não | 700.5 |
| cor | texto | sim | "azul" |
| status | texto | sim | "em produção" |
| dataCriacao | data/hora | sim | 2025-10-02 |

---