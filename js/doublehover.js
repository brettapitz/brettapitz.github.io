(() => {
  // js/doublehover.jsx
  var Pic = ({im}) => {
    return /* @__PURE__ */ React.createElement("img", {
      className: "boxart",
      src: im,
      width: "250px",
      height: "250px"
    });
  };
  var Button = ({price}) => {
    const [hovering, setHovering] = React.useState(false);
    const toggle = () => setHovering(!hovering);
    return /* @__PURE__ */ React.createElement("button", {
      className: "buyButton",
      onMouseEnter: toggle,
      onMouseLeave: toggle
    }, hovering ? "Buy!" : "$" + price);
  };
  var Box = ({game}) => {
    return /* @__PURE__ */ React.createElement("card", {
      className: "box"
    }, /* @__PURE__ */ React.createElement(Pic, {
      im: game.cover
    }), /* @__PURE__ */ React.createElement("div", {
      className: "box_row"
    }, /* @__PURE__ */ React.createElement(Button, {
      price: game.price
    })));
  };
  var content = games.map((el, i) => /* @__PURE__ */ React.createElement(Box, {
    game: el,
    key: i
  }));
  ReactDOM.render(content, document.getElementById("game_store"));
})();
