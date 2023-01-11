function createElement(type, props) {
  return {
    type,
    props: {
      ...props,
      children: props.children.map((child) => {
        typeof child === "object" ? child : createTextElement(child)
      }),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const jsxs = createElement

export { createElement as jsx, jsxs }
