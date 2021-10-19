(function() {

  document.addEventListener("mousemove", parallax);

  const elem = document.querySelector("#parallax");

  function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
    let _depth4 = `${50 - (_mouseX - _w) * 0.19}% ${50 - (_mouseY - _h) * 0.19}%`;
    let _depth5 = `${50 - (_mouseX - _w) * 0.11}% ${50 - (_mouseY - _h) * 0.11}%`;
    let _depth6 = `${50 - (_mouseX - _w) * 0.09}% ${50 - (_mouseY - _h) * 0.09}%`;
    let _depth7 = `${50 - (_mouseX - _w) * 0.17}% ${50 - (_mouseY - _h) * 0.17}%`;
    let _depth8 = `${50 - (_mouseX - _w) * 0.13}% ${50 - (_mouseY - _h) * 0.13}%`;
    let _depth9 = `${50 - (_mouseX - _w) * 0.15}% ${50 - (_mouseY - _h) * 0.15}%`;
    let _depth10 = `${50 - (_mouseX - _w) * 0.11}% ${50 - (_mouseY - _h) * 0.11}%`;
    let _depth11 = `${50 - (_mouseX - _w) * 0.09}% ${50 - (_mouseY - _h) * 0.09}%`;
    let _depth12 = `${50 - (_mouseX - _w) * 0.21}% ${50 - (_mouseY - _h) * 0.21}%`;
    let x = `${_depth12}, ${_depth11}, ${_depth10}, ${_depth9}, ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
