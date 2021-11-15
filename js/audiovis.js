(() => {
  // js/audiovis.js
  var canvas = document.getElementById("vis_canvas");
  var canvasctx = canvas.getContext("2d");
  var audioctx = new (window.AudioContext || window.webkitAudioContext)();
  var audioEl = document.querySelector("audio");
  audioEl.onplay = () => {
    audioctx.resume();
  };
  var source = audioctx.createMediaElementSource(audioEl);
  var analyser = audioctx.createAnalyser();
  var visOption = document.getElementsByClassName("active")[0];
  var options = document.getElementsByClassName("vis_option");
  source.connect(analyser).connect(audioctx.destination);
  analyser.fftSize = 16384;
  canvasctx.strokeStyle = "#0ff";
  canvasctx.lineWidth = 2;
  var bgColor = "black";
  var freqBarColor = "#0ff";
  var freqBarHeightMult = 1.5;
  var freqBarSpacer = 2;
  var sampleStep = Math.max(1, Math.floor(analyser.fftSize / canvas.width));
  var scopeData = new Uint8Array(analyser.fftSize);
  var freqData = new Uint8Array(analyser.frequencyBinCount);
  var freqBarWidth = Math.floor(canvas.width / Math.log2(analyser.fftSize));
  var heightByteRatio = canvas.height / 256;
  function drawScope() {
    analyser.getByteTimeDomainData(scopeData);
    canvasctx.fillStyle = bgColor;
    canvasctx.fillRect(0, 0, canvas.width, canvas.height);
    let x = 0;
    let y = canvas.height / 2;
    canvasctx.beginPath();
    for (let i = 0; i < analyser.fftSize; i += sampleStep) {
      y = canvas.height / 2 + heightByteRatio * (scopeData[i] - 128);
      canvasctx.lineTo(x, y);
      x += 1;
    }
    canvasctx.stroke();
    requestAnimationFrame(draw);
  }
  function logAverage(arr) {
    let ret = [];
    let i = 0;
    while (i < arr.length) {
      let next_i = 2 * i + 1;
      let average = arr.slice(i, next_i).reduce((acc, el) => acc + el) / (i + 1);
      ret.push(average);
      i = next_i;
    }
    return ret;
  }
  function drawFreq() {
    analyser.getByteFrequencyData(freqData);
    canvasctx.fillStyle = bgColor;
    canvasctx.fillRect(0, 0, canvas.width, canvas.height);
    canvasctx.fillStyle = freqBarColor;
    let bars = logAverage(freqData);
    let x = 0;
    let y = 0;
    for (let bar of bars) {
      y = canvas.height - freqBarHeightMult * bar;
      canvasctx.fillRect(x, y, freqBarWidth - freqBarSpacer, freqBarHeightMult * bar);
      x += freqBarWidth;
    }
    requestAnimationFrame(draw);
  }
  function draw() {
    switch (visOption.id) {
      case "scope":
        drawScope();
        break;
      case "freq":
        drawFreq();
        break;
    }
  }
  requestAnimationFrame(draw);
  for (let option of options) {
    option.addEventListener("click", (e) => {
      visOption.classList.remove("active");
      e.target.classList.add("active");
      visOption = e.target;
    });
  }
})();
