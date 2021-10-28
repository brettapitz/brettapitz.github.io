(() => {
  // js/dicestats.jsx
  var Dice = ({diceVal}) => {
    const [display, setDisplay] = React.useState("\u2680");
    React.useEffect(() => {
      switch (diceVal) {
        case 2:
          setDisplay("\u2681");
          break;
        case 3:
          setDisplay("\u2682");
          break;
        case 4:
          setDisplay("\u2683");
          break;
        case 5:
          setDisplay("\u2684");
          break;
        case 6:
          setDisplay("\u2685");
          break;
        default:
          setDisplay("\u2680");
      }
    }, [diceVal]);
    return /* @__PURE__ */ React.createElement("div", {
      className: "dice"
    }, display);
  };
  var Stat = ({statName}) => {
    const [vals, setVals] = React.useState([0, 0, 0, 0]);
    const [sum, setSum] = React.useState(0);
    const [sumTrigger, setSumTrigger] = React.useState(false);
    React.useEffect(() => {
      if (sumTrigger) {
        setSum(vals.reduce((acc, val) => acc + val) - Math.min(...vals));
        setSumTrigger(false);
      }
    }, [sumTrigger]);
    const handleClick = () => {
      let i = startRandomizer(100);
      setTimeout(() => {
        clearInterval(i);
        setSumTrigger(true);
      }, 500);
    };
    const startRandomizer = (interval) => {
      return setInterval(() => {
        setVals(vals.map((el) => Math.floor(Math.random() * 6 + 1)));
      }, interval);
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "row flex-between"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "statDisplay"
    }, statName, ": ", sum), vals.map((val, i) => /* @__PURE__ */ React.createElement(Dice, {
      diceVal: val,
      key: i
    })), /* @__PURE__ */ React.createElement("button", {
      onClick: handleClick,
      className: "rollButton"
    }, "\u27F3"));
  };
  var RandGen = () => {
    const handleClick = () => {
      let buttons = document.getElementsByClassName("rollButton");
      for (const button of buttons) {
        button.click();
      }
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Stat, {
      statName: "Strength",
      key: 0
    }), /* @__PURE__ */ React.createElement(Stat, {
      statName: "Dexterity",
      key: 1
    }), /* @__PURE__ */ React.createElement(Stat, {
      statName: "Constitution",
      key: 2
    }), /* @__PURE__ */ React.createElement(Stat, {
      statName: "Intelligence",
      key: 3
    }), /* @__PURE__ */ React.createElement(Stat, {
      statName: "Wisdom",
      key: 4
    }), /* @__PURE__ */ React.createElement(Stat, {
      statName: "Charisma",
      key: 5
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: handleClick
    }, "Roll All"));
  };
  ReactDOM.render(/* @__PURE__ */ React.createElement(RandGen, null), document.getElementById("dicestats"));
})();
