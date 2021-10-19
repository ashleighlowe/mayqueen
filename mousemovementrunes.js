(function() {

  document.addEventListener("mousemove", parallax);

  const elem = document.querySelector("#parallax");

  function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
    let _depth4 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
    let _depth5 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
    let _depth6 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let _depth7 = `${50 - (_mouseX - _w) * 0.07}% ${50 - (_mouseY - _h) * 0.07}%`;
    let _depth8 = `${50 - (_mouseX - _w) * 0.08}% ${50 - (_mouseY - _h) * 0.08}%`;
    let _depth9 = `${50 - (_mouseX - _w) * 0.09}% ${50 - (_mouseY - _h) * 0.09}%`;
    let _depth10 = `${50 - (_mouseX - _w) * 0.10}% ${50 - (_mouseY - _h) * 0.10}%`;
    let _depth11 = `${50 - (_mouseX - _w) * 0.11}% ${50 - (_mouseY - _h) * 0.11}%`;
    let _depth12 = `${50 - (_mouseX - _w) * 0.12}% ${50 - (_mouseY - _h) * 0.12}%`;
    let x = `${_depth12}, ${_depth11}, ${_depth10}, ${_depth9}, ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
