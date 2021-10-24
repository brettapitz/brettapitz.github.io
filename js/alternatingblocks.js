(() => {
  // js/alternatingblocks.jsx
  var AlternatingBlocks = () => {
    const [leftOpacity, setLeftOpacity] = React.useState(1);
    const [rightOpacity, setRightOpacity] = React.useState(0);
    const toggle = () => {
      setLeftOpacity(Math.abs(leftOpacity - 1));
      setRightOpacity(Math.abs(rightOpacity - 1));
    };
    return /* @__PURE__ */ React.createElement("div", {
      id: "blocks",
      className: "flex-around",
      onClick: toggle
    }, /* @__PURE__ */ React.createElement("div", {
      className: "block hundred-square",
      id: "left",
      style: {opacity: leftOpacity}
    }, "Click"), /* @__PURE__ */ React.createElement("div", {
      className: "block hundred-square",
      id: "right",
      style: {opacity: rightOpacity}
    }, "Click"));
  };
  ReactDOM.render(/* @__PURE__ */ React.createElement(AlternatingBlocks, null), document.getElementById("alternatingblocks"));
})();
