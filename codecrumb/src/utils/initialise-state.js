function initState(htmlEditor, cssEditor, jsEditor, updatePreview) {
  htmlPre.addEventListener("change", e => {
    const modeName = document.querySelector(".html-mode-name");
    const current = e.currentTarget.selectedOptions[0];
    const nameAttr = current.getAttribute("data-name");

    modeName.textContent = `${nameAttr}`;
    // modeName.style.paddingLeft = "7px";

    const mode = current.getAttribute("data-mode");

    csse.html = mode || "";

    htmlPenState(htmlEditor, mode);
    updatePreview();
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
  });

  cssPre.addEventListener("change", e => {
    const modeName = document.querySelector(".css-mode-name");
    const current = e.currentTarget.selectedOptions[0];
    const nameAttr = current.getAttribute("data-name");

    modeName.textContent = `${nameAttr}`;
    // modeName.style.paddingLeft = "7px";
    const mode = current.getAttribute("data-mode");
    csse.css = mode || "";
    cssPenState(cssEditor, mode);
    updatePreview();
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
  });

  jsPre.addEventListener("change", e => {
    const modeName = document.querySelector(".js-mode-name");
    const current = e.currentTarget.selectedOptions[0];
    const nameAttr = current.getAttribute("data-name");

    modeName.textContent = `${nameAttr}`;
    // modeName.style.paddingLeft = "7px";
    const mode = current.getAttribute("data-mode");
    csse.js = mode || "";

    jsPenState(jsEditor, mode);
    updatePreview();
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
  });
}

function returnStates() {
  const html = csse.html;
  const css = csse.css;
  const js = csse.js;

  return {
    html,
    css,
    js
  };
}
