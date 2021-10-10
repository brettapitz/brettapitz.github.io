(() => {
  // js/reactulator.jsx
  function NumButton({val, func}) {
    return /* @__PURE__ */ React.createElement("button", {
      className: "calc_button",
      onClick: () => func(+val)
    }, val);
  }
  function OpButton({val, func}) {
    return /* @__PURE__ */ React.createElement("button", {
      className: "calc_button",
      onClick: func
    }, val);
  }
  function Display({left, right, state}) {
    return /* @__PURE__ */ React.createElement("div", {
      id: "calc_display"
    }, state == 2 ? right : left);
  }
  function Calculator() {
    const [left, setLeft] = React.useState(0);
    const [right, setRight] = React.useState(void 0);
    const [op, setOp] = React.useState(void 0);
    const [state, setState] = React.useState(0);
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const handleNum = (val) => {
      switch (state) {
        case 0:
          setLeft(left * 10 + val);
          break;
        case 1:
          setRight(val);
          setState(2);
          break;
        case 2:
          setRight(right * 10 + val);
          break;
        case 3:
          setLeft(val);
          setState(0);
      }
    };
    const handleOp = (op2) => {
      switch (state) {
        case 2:
          setLeft(op2(left, right));
          setOp(() => op2);
          setState(1);
          break;
        default:
          setOp(() => op2);
          setState(1);
      }
    };
    const execute = () => {
      if (state == 2 || state == 3) {
        setLeft(op(left, right));
        setState(3);
      }
    };
    const clear = () => {
      setLeft(0);
      setRight(void 0);
      setOp(void 0);
      setState(0);
    };
    return /* @__PURE__ */ React.createElement("div", {
      id: "calculator"
    }, /* @__PURE__ */ React.createElement(Display, {
      left,
      right,
      state
    }), /* @__PURE__ */ React.createElement("div", {
      className: "calc_row"
    }, /* @__PURE__ */ React.createElement(OpButton, {
      val: "+",
      func: () => handleOp(add)
    }), /* @__PURE__ */ React.createElement(OpButton, {
      val: "-",
      func: () => handleOp(subtract)
    }), /* @__PURE__ */ React.createElement(OpButton, {
      val: "*",
      func: () => handleOp(multiply)
    })), /* @__PURE__ */ React.createElement("div", {
      className: "calc_row"
    }, /* @__PURE__ */ React.createElement(NumButton, {
      val: "1",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(NumButton, {
      val: "2",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(NumButton, {
      val: "3",
      func: handleNum
    })), /* @__PURE__ */ React.createElement("div", {
      className: "calc_row"
    }, /* @__PURE__ */ React.createElement(NumButton, {
      val: "4",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(NumButton, {
      val: "5",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(NumButton, {
      val: "6",
      func: handleNum
    })), /* @__PURE__ */ React.createElement("div", {
      className: "calc_row"
    }, /* @__PURE__ */ React.createElement(NumButton, {
      val: "7",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(NumButton, {
      val: "8",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(NumButton, {
      val: "9",
      func: handleNum
    })), /* @__PURE__ */ React.createElement("div", {
      className: "calc_row"
    }, /* @__PURE__ */ React.createElement(OpButton, {
      className: "calc_button",
      val: "C",
      func: clear
    }), /* @__PURE__ */ React.createElement(NumButton, {
      className: "calc_button",
      val: "0",
      func: handleNum
    }), /* @__PURE__ */ React.createElement(OpButton, {
      className: "calc_button",
      val: "=",
      func: execute
    })));
  }
  ReactDOM.render(/* @__PURE__ */ React.createElement(Calculator, null), document.querySelector("#calc_container"));
})();
