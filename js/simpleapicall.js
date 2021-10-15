(() => {
  // js/simpleapicall.js
  var age = document.getElementById("agify_output");
  var name_in = document.getElementById("agify_input");
  name_in.addEventListener("change", () => getAge());
  var getAge = () => {
    let url = "https://api.agify.io/?name=" + name_in.value;
    age.innerHTML = "Agifying...";
    fetch(url).then((response) => response.json()).then((data) => {
      if (data.age != null) {
        age.innerHTML = "I bet you're " + data.age + " years old!";
      } else {
        age.innerHTML = "Sorry, I'm too stupid to handle that.";
      }
    });
  };
})();
