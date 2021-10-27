(() => {
  // js/pointbuy.jsx
  var Stat = ({ability, total, adjustTotal}) => {
    const [statValue, setStatValue] = React.useState(8);
    const decrement = () => {
      let decCost = statValue > 13 ? 2 : 1;
      if (statValue > 1) {
        adjustTotal(decCost);
        setStatValue(statValue - 1);
      }
    };
    const increment = () => {
      let incCost = statValue >= 13 ? 2 : 1;
      if (total >= incCost && statValue < 15) {
        adjustTotal(-incCost);
        setStatValue(statValue + 1);
      }
    };
    const reset = () => {
      if (statValue <= 13) {
        adjustTotal(statValue - 8);
        setStatValue(8);
      } else {
        adjustTotal(2 * statValue - 21);
        setStatValue(8);
      }
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "stat flex-between"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "decrement",
      onClick: decrement
    }, "-"), /* @__PURE__ */ React.createElement("div", null, ability), /* @__PURE__ */ React.createElement("div", {
      className: "statValue"
    }, statValue), /* @__PURE__ */ React.createElement("button", {
      className: "increment",
      onClick: increment
    }, "+"), /* @__PURE__ */ React.createElement("button", {
      className: "reset",
      onClick: reset
    }, "\u27F3"));
  };
  var Allocator = () => {
    const [total, setTotal] = React.useState(27);
    const adjustTotal = (val) => {
      setTotal(total + val);
    };
    const reset = () => {
      let resetButtons = document.getElementsByClassName("reset");
      for (let resetButton of resetButtons) {
        resetButton.click();
      }
      setTotal(27);
    };
    return /* @__PURE__ */ React.createElement("div", {
      id: "allocator"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex-between",
      id: "total"
    }, /* @__PURE__ */ React.createElement("div", null, "Total: " + total), /* @__PURE__ */ React.createElement("button", {
      onClick: reset
    }, "Reset")), /* @__PURE__ */ React.createElement(Stat, {
      ability: "Strength",
      total,
      adjustTotal
    }), /* @__PURE__ */ React.createElement(Stat, {
      ability: "Dexterity",
      total,
      adjustTotal
    }), /* @__PURE__ */ React.createElement(Stat, {
      ability: "Constitution",
      total,
      adjustTotal
    }), /* @__PURE__ */ React.createElement(Stat, {
      ability: "Intelligence",
      total,
      adjustTotal
    }), /* @__PURE__ */ React.createElement(Stat, {
      ability: "Wisdom",
      total,
      adjustTotal
    }), /* @__PURE__ */ React.createElement(Stat, {
      ability: "Charisma",
      total,
      adjustTotal
    }));
  };
  ReactDOM.render(/* @__PURE__ */ React.createElement(Allocator, null), document.getElementById("pointbuy"));
})();
