function keyboardShortCuts(updatePreview, htmlEditor, cssEditor, jsEditor) {
  document.addEventListener("keyup", e => {
    // console.log(e)

    if (e.altKey && e.keyCode == 80) {
      editorMenuMain.style.animation = "blink-in .2s ease-in-out";
      editorMenuMain.style.display = "flex";
    }
    if (e.altKey && e.keyCode == 82) {
      // ALT + R
      // console.log(e.code);
      updatePreview();
    }
    if (e.altKey && e.keyCode == 84) {
      //alt - t
      tabStyleTop();
      tabStyleTopE.checked = true;
    }
    if (e.altKey && e.keyCode == 78) {
      //alt - n
      tabStyleDefault();
      tabStyleTabE.checked = true;
    }
    if (e.altKey && e.keyCode == 77) {
      //alt-m
      tabStyleRight();
      tabStyleRightE.checked = true;
    }
    if (e.altKey && e.keyCode == 76) {
      //alt-l
      tabStyleLeft();
      tabStyleLeftE.checked = true;
    }
    if (e.altKey && e.keyCode == 79) {
      //alt-o
      fullScreenPreview();
      tabStyleFullView.checked = true;
    }
  });
}
