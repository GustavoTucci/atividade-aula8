# React em campo

Um caderno de experiências interativas para aprender os fundamentos do React apresentados na Aula 08. Em vez de apenas ler definições, explore cada conceito, altere os exemplos e observe a interface responder.

## Funcionalidades

- Catálogo de seis conceitos com busca por texto e filtros por categoria.
- Cartões interativos com descrições e exemplos de código.
- Experimentos separados para JSX, composição de componentes, props, Virtual DOM, listas com keys e renderização condicional.
- Progresso de aprendizagem salvo no navegador com `localStorage`; é possível filtrar o mapa para ver apenas os conceitos guardados.
- Navegação entre conceitos, atalhos de teclado (`Esc` para voltar), estados vazios e layout responsivo.

## Conceitos de React utilizados

- **JSX:** estrutura e expressões JavaScript entre chaves.
- **Componentes:** interface dividida em peças reutilizáveis.
- **Props:** informações enviadas do componente pai aos filhos.
- **Virtual DOM:** o estado muda e React reconcilia a interface declarada com o DOM.
- **Listas e keys:** arrays transformados com `map()` e identificados por chaves estáveis.
- **Renderização condicional:** conteúdo ajustado ao estado, às buscas e às condições.
- **Estado e efeitos:** `useState` para interações, `useEffect` para persistência e listeners, e `useMemo` para filtrar o catálogo.

## Tecnologias

- React
- Vite
- JavaScript (ES modules)
- CSS responsivo

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

O Vite informa o endereço local no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar no GitHub

Para entregar como repositório público, crie um repositório vazio no GitHub e execute estes comandos dentro desta pasta:

```bash
git init
git add .
git commit -m "Adiciona laboratório interativo de React"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/react-em-campo.git
git push -u origin main
```

Ao criar o repositório, selecione a visibilidade pública. Não inclua `node_modules` nem `dist`; ambos já estão no `.gitignore`.

## Referências

- [Projeto React de referência](https://github.com/deivisontakatu/projeto-react)
- [Aplicação de referência](https://projeto-react-five-swart.vercel.app/)
- [Documentação oficial do React](https://react.dev/learn)

O projeto foi inspirado nos seis conceitos e no formato didático das referências, com estrutura visual e experiências próprias.
