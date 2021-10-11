(() => {
  // js/roygbiv.jsx
  var Block = ({val, color}) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "color_block",
      style: {backgroundColor: color}
    }, val);
  };
  var Rainbow = () => {
    return /* @__PURE__ */ React.createElement("div", {
      id: "rainbow"
    }, /* @__PURE__ */ React.createElement(Block, {
      val: "R",
      color: "#ff0000"
    }), /* @__PURE__ */ React.createElement(Block, {
      val: "O",
      color: "#ff7700"
    }), /* @__PURE__ */ React.createElement(Block, {
      val: "Y",
      color: "#ffff00"
    }), /* @__PURE__ */ React.createElement(Block, {
      val: "G",
      color: "#00cc00"
    }), /* @__PURE__ */ React.createElement(Block, {
      val: "B",
      color: "#0077cc"
    }), /* @__PURE__ */ React.createElement(Block, {
      val: "I",
      color: "#5500aa"
    }), /* @__PURE__ */ React.createElement(Block, {
      val: "V",
      color: "#770077"
    }));
  };
  ReactDOM.render(/* @__PURE__ */ React.createElement(Rainbow, null), document.getElementById("roygbiv"));
})();
