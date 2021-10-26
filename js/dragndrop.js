(() => {
  // js/dragndrop.js
  var heldItem = null;
  var editable = false;
  var handleDragStart = (e) => {
    e.target.style.opacity = 0.4;
    heldItem = e.target;
  };
  var handleDragEnd = (e) => {
    e.target.style.opacity = 1;
  };
  var handleDragOver = (e) => {
    e.preventDefault();
  };
  var handleDragEnter = (e) => {
    e.preventDefault();
    e.target.style.borderColor = "black";
  };
  var handleDragLeave = (e) => {
    e.target.style.borderColor = "transparent";
  };
  var handleDrop = (e) => {
    e.preventDefault();
    [heldItem.innerHTML, e.target.innerHTML] = [e.target.innerHTML, heldItem.innerHTML];
    [heldItem.className, e.target.className] = [e.target.className, heldItem.className];
    e.target.style.borderColor = "transparent";
  };
  var edit = (e) => {
    let fullBoxes = document.getElementsByClassName("full-square");
    editable = !editable;
    for (let el of fullBoxes) {
      el.contentEditable = editable;
      el.draggable = !editable;
      fullBoxes[0].focus();
    }
    e.target.innerHTML = editable ? "Done" : "Edit values";
  };
  var draggables = document.getElementsByClassName("drag");
  for (let el of draggables) {
    el.addEventListener("dragstart", handleDragStart);
    el.addEventListener("dragend", handleDragEnd);
    el.addEventListener("dragover", handleDragOver);
    el.addEventListener("dragenter", handleDragEnter);
    el.addEventListener("dragleave", handleDragLeave);
    el.addEventListener("drop", handleDrop);
  }
  document.getElementById("ddeditbutton").addEventListener("click", edit);
})();
