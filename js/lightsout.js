(() => {
  // js/lightsout.jsx
  function LightsOutButton(props) {
    if (props.on) {
      return /* @__PURE__ */ React.createElement("img", {
        className: "lights_out_button",
        src: "Button_On.png",
        onClick: props.onClick
      });
    } else {
      return /* @__PURE__ */ React.createElement("img", {
        className: "lights_out_button",
        src: "Button_Off.png",
        onClick: props.onClick
      });
    }
  }
  function LightsOut() {
    const [lights, setLights] = React.useState(Array(Array(5).fill(false), Array(5).fill(false), Array(5).fill(false), Array(5).fill(false), Array(5).fill(false)));
    const [win, setWin] = React.useState(false);
    const renderButton = (i, j) => {
      return /* @__PURE__ */ React.createElement(LightsOutButton, {
        on: lights[i][j],
        onClick: () => handleClick(i, j)
      });
    };
    const handleClick = (i, j) => {
      const newLights = lights.slice();
      let newWin = false;
      let len = newLights.length - 1;
      let sum = 0;
      newLights[i][j] = !newLights[i][j];
      if (i < len) {
        newLights[i + 1][j] = !newLights[i + 1][j];
      }
      if (j < len) {
        newLights[i][j + 1] = !newLights[i][j + 1];
      }
      if (i > 0) {
        newLights[i - 1][j] = !newLights[i - 1][j];
      }
      if (j > 0) {
        newLights[i][j - 1] = !newLights[i][j - 1];
      }
      for (let x = 0; x < len; x++) {
        sum += newLights[x].filter(Boolean).length;
      }
      if (sum == 0) {
        newWin = true;
      }
      setLights(newLights);
      setWin(newWin);
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, renderButton(0, 0), renderButton(0, 1), renderButton(0, 2), renderButton(0, 3), renderButton(0, 4)), /* @__PURE__ */ React.createElement("div", null, renderButton(1, 0), renderButton(1, 1), renderButton(1, 2), renderButton(1, 3), renderButton(1, 4)), /* @__PURE__ */ React.createElement("div", null, renderButton(2, 0), renderButton(2, 1), renderButton(2, 2), renderButton(2, 3), renderButton(2, 4)), /* @__PURE__ */ React.createElement("div", null, renderButton(3, 0), renderButton(3, 1), renderButton(3, 2), renderButton(3, 3), renderButton(3, 4)), /* @__PURE__ */ React.createElement("div", null, renderButton(4, 0), renderButton(4, 1), renderButton(4, 2), renderButton(4, 3), renderButton(4, 4)));
  }
  var domContainer = document.querySelector("#lightsout_container");
  domContainer.ondragstart = function() {
    return false;
  };
  ReactDOM.render(/* @__PURE__ */ React.createElement(LightsOut, null), domContainer);
})();
