(() => {
  // js/todolist.jsx
  function TodoList() {
    const [inputVal, setInputVal] = React.useState("");
    const [content, setContent] = React.useState([]);
    const handleInput = (event) => {
      setInputVal(event.target.value);
    };
    const handleSubmit = (event) => {
      if (event.key == "Enter" || event.target.id == "submitButton") {
        if (inputVal.length > 0) {
          setContent(content.concat(inputVal));
          setInputVal("");
        }
      }
    };
    const handleDelete = (event) => {
      setContent(content.filter((_, i) => i != event.target.id));
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "flex-column terminal"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "row flex-between"
    }, /* @__PURE__ */ React.createElement("input", {
      onChange: handleInput,
      value: inputVal,
      onKeyPress: handleSubmit
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: handleSubmit,
      id: "submitButton"
    }, "Submit")), content.map((el, i) => /* @__PURE__ */ React.createElement("div", {
      className: "row flex-between"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "wrap entry"
    }, el), /* @__PURE__ */ React.createElement("button", {
      onClick: handleDelete,
      id: i
    }, "Delete"))));
  }
  ReactDOM.render(/* @__PURE__ */ React.createElement(TodoList, null), document.getElementById("todolist"));
})();
