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
    let _depth13 = `${50 - (_mouseX - _w) * 0.13}% ${50 - (_mouseY - _h) * 0.13}%`;
    let _depth14 = `${50 - (_mouseX - _w) * 0.14}% ${50 - (_mouseY - _h) * 0.14}%`;
    let _depth15 = `${50 - (_mouseX - _w) * 0.15}% ${50 - (_mouseY - _h) * 0.15}%`;
    let _depth16 = `${50 - (_mouseX - _w) * 0.16}% ${50 - (_mouseY - _h) * 0.16}%`;
    let _depth17 = `${50 - (_mouseX - _w) * 0.17}% ${50 - (_mouseY - _h) * 0.17}%`;
    let _depth18 = `${50 - (_mouseX - _w) * 0.18}% ${50 - (_mouseY - _h) * 0.18}%`;
    let _depth19 = `${50 - (_mouseX - _w) * 0.19}% ${50 - (_mouseY - _h) * 0.19}%`;
    let _depth20 = `${50 - (_mouseX - _w) * 0.20}% ${50 - (_mouseY - _h) * 0.20}%`;
    let x = `${_depth20}, ${_depth19}, ${_depth18}, ${_depth17}, ${_depth16}, ${_depth15}, ${_depth14}, ${_depth13}, ${_depth12}, ${_depth11}, ${_depth10}, ${_depth9}, ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
