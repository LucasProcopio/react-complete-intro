// List items

const lista = [
  {
    id: 1,
    name: " 💪 Academia",
    time: "18:00"
  },
  {
    id: 2,
    name: " 🍇 Compras",
    time: "19:30"
  },
  {
    id: 3,
    name: " 🎬 Assistir filme",
    time: "20:00"
  }
];

// JS function to create list of items / elements

function createList(lista) {
  const listArray = [];

  lista.forEach(function(item) {
    listArray.push(
      React.createElement(
        "li",
        { key: item.id, className: "list-item" },
        `${item.name} as ${item.time} Horas`
      )
    );
  });

  return listArray;
}

// TODO component

const todoContainder = function(props) {
  return React.createElement("div", { className: "container" }, [
    React.createElement("h1", { className: "header" }, "Lista de tarefas"),
    React.createElement(
      "div",
      { className: "list-container" },
      React.createElement(
        "ul",
        { className: "list-wrapper" },
        createList(lista)
      )
    )
  ]);
};

// APP Component

const App = function(props) {
  return React.createElement(todoContainder);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
