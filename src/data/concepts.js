export const concepts = [
  {
    id: "jsx",
    number: "01",
    title: "JSX",
    category: "Sintaxe",
    short: "A interface ganha forma dentro do JavaScript.",
    description:
      "JSX permite descrever a estrutura visual com uma sintaxe familiar. Chaves abrem uma janela para os dados JavaScript que alimentam cada elemento.",
    takeaway: "Descreva o que deve aparecer; deixe o React cuidar da atualização.",
    code: `const nome = "Lia";\n\nfunction Saudacao() {\n  return <h2>Oi, {nome}.</h2>;\n}`,
  },
  {
    id: "componentes",
    number: "02",
    title: "Componentes",
    category: "Composição",
    short: "Partes pequenas que, juntas, contam uma história.",
    description:
      "Componentes são funções que retornam elementos React. Um componente pode ser encaixado dentro de outro, formando uma árvore de peças que podem ser organizadas e reutilizadas.",
    takeaway: "Cada peça tem um papel; a composição monta a página.",
    code: `function Etiqueta() {\n  return <span>feito com cuidado</span>;\n}\n\nfunction Cartao() {\n  return <article><Etiqueta /></article>;\n}`,
  },
  {
    id: "props",
    number: "03",
    title: "Props",
    category: "Dados",
    short: "O mesmo molde, preenchido com informações diferentes.",
    description:
      "Props são entradas recebidas por um componente. O pai passa informações ao filho, que as usa para renderizar seu conteúdo sem perder a possibilidade de reutilização.",
    takeaway: "A estrutura fica no componente; os detalhes chegam pelas props.",
    code: `function Cartao({ titulo, autor }) {\n  return <article>\n    <h2>{titulo}</h2>\n    <p>por {autor}</p>\n  </article>;\n}\n\n<Cartao titulo="Composição" autor="Lia" />`,
  },
  {
    id: "virtual-dom",
    number: "04",
    title: "Virtual DOM",
    category: "Atualização",
    short: "Uma mudança no estado se transforma em uma interface atualizada.",
    description:
      "Quando os dados mudam, React calcula novamente a interface e reconcilia a nova descrição com a anterior. Então aplica as mudanças necessárias ao DOM, sem que cada elemento seja atualizado manualmente.",
    takeaway: "Mude o estado; o React coordena a atualização visual.",
    code: `const [passos, setPassos] = useState(0);\n\n<button onClick={() => setPassos(passos + 1)}>\n  {passos} passos\n</button>`,
  },
  {
    id: "listas",
    number: "05",
    title: "Listas & keys",
    category: "Coleções",
    short: "Um array vira uma coleção de elementos reconhecíveis.",
    description:
      "Com map(), cada item de um array pode gerar um elemento JSX. Uma key estável ajuda React a reconhecer cada item quando a coleção muda de ordem ou de tamanho.",
    takeaway: "Transforme com map(); identifique cada item com uma key estável.",
    code: `const notas = ["Rascunho", "Revisão"];\n\n<ul>\n  {notas.map((nota) => (\n    <li key={nota}>{nota}</li>\n  ))}\n</ul>`,
  },
  {
    id: "condicional",
    number: "06",
    title: "Renderização condicional",
    category: "Decisões",
    short: "A interface responde ao que está acontecendo.",
    description:
      "Props, estados e dados podem decidir qual parte da interface será exibida. Use if para caminhos distintos ou um ternário para alternar mensagens simples.",
    takeaway: "Renderize o que faz sentido para o estado atual dos dados.",
    code: `function Mensagem({ carregando }) {\n  return carregando\n    ? <p>Carregando…</p>\n    : <p>Tudo pronto.</p>;\n}`,
  },
];
