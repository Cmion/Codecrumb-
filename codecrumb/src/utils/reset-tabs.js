// class for tab selection!!!!.
class tabOptions {
  constructor(
    codeOrder = 1,
    previewOrder = 2,
    codeWidth = "40%",
    previewWidth = "60%",
    codeHeight = "calc(100% - 100px)",
    previewHeight = "calc(100% - 100px)",
    eHeight = "100%",
    eWidth = "100%",
    ePosition = "absolute",
    editorContainerFlow = "row",
    eBorder = "0",
    eBorderColor = "transparent",
    eBorderStyle = "solid",
    codeHeadBg = "var(--page-color)",
    codeHeadBorder = "none",
    editorTab = "flex",
    containerHeight = "100vh",
    codeHeadDisplay = "flex",
    tabStyleBorder = "none"
  ) {
    this.codeOrder = codeOrder;
    this.previewOrder = previewOrder;
    this.codeWidth = codeWidth;
    this.previewWidth = previewWidth;
    this.codeHeight = codeHeight;
    this.previewHeight = previewHeight;
    this.eHeight = eHeight;
    this.eWidth = eWidth;
    this.ePosition = ePosition;
    this.editorContainerFlow = editorContainerFlow;

    this.eBorder = eBorder;
    this.eBorderStyle = eBorderStyle;
    this.eBorderColor = eBorderColor;
    this.codeHeadBg = codeHeadBg;
    this.codeHeadBorder = codeHeadBorder;

    this.editorTab = editorTab;
    this.borderRight = "7px";
    this.tabStyleBorder = tabStyleBorder;
    this.containerHeight = containerHeight;
    this.codeHeadDisplay = codeHeadDisplay;
  }
  changeView() {
    const pens = [htmlPen, cssPen, jsPen];

    // defines editor and preview order on the page
    editorPreview.style.order = this.previewOrder;
    code.style.order = this.codeOrder;

    // defines editors and preview total width
    code.style.width = this.codeWidth;
    editorPreview.style.width = this.previewWidth;

    // defines editors and preview total height
    code.style.height = this.codeHeight;
    editorPreview.style.height = this.previewHeight;

    // defines each pen height
    pens.forEach(height => {
      height.style.height = this.eHeight;
    });
    // defines each pen width
    pens.forEach(width => {
      width.style.width = this.eWidth;
    });

    // defines editors visibility

    //defines editors position
    pens.forEach(pos => {
      pos.style.position = this.ePosition;
    });

    // defines editors border
    pens.forEach(border => {
      border.style.border = this.eBorder;
      border.style.borderStyle = this.eBorderStyle;
      border.style.borderColor = this.eBorderColor;
      // border.style.borderRight = "0";
      border.style.borderTop = "0";
    });

    // defines editors head element background.
    Array.from(codeHead).forEach(head => {
      head.style.background = this.codeHeadBg;
      head.style.borderBottom = this.codeHeadBorder;
      head.style.display = this.codeHeadDisplay;
      //handles codehead border for tabstyle editor view.
      head.style.borderTop = this.tabStyleBorder;
      codeHead[0].style.borderTop = "2px solid var(--editor-color)"
    });
      
    // defines editors display flex/hidden;
    Array.from(editorTab).forEach(eTab => {
      eTab.style.display = this.editorTab;
    });

    // defines the editor container flex-flow
    editorContainer.style.flexFlow = this.editorContainerFlow;
    editorContainer.style.height = this.containerHeight;
    // defines the code pen display form
  }
}

// function changeTabStyle() {

// }
const tabStyleLeftE = document.querySelector("#tab-style-left");
tabStyleLeftE.addEventListener("click", tabStyleLeft);

const tabStyleTabE = document.querySelector("#tab-style-tab");
tabStyleTabE.addEventListener("change", tabStyleDefault);

const tabStyleTopE = document.querySelector("#tab-style-top");
tabStyleTopE.addEventListener("change", tabStyleTop);

const tabStyleRightE = document.querySelector("#tab-style-right");
tabStyleRightE.addEventListener("change", tabStyleRight);

const tabStyleFullView = document.querySelector("#tab-full-view");
tabStyleFullView.addEventListener("change", fullScreenPreview);

//full-view
function fullScreenPreview() {
  resetSplitPane();
  footerLeft.style.order = "1";
  footerRight.style.order = "2";
  footerLeft.style.flexFlow = "row"
  footerRight.style.flexFlow = "row";
  const tabbed = new tabOptions(
    2,
    1,
    "0%",
    "100%",
    "0%",
    "100%",
    "0%",
    "0%",
    "relative",
    "column",
    "0",
    "#0f111a",
    "solid",
    "#0f111a",
    "0 solid #13161f",
    "none",
    "calc(100vh - 90px)",
    "none",
    "none"
  );
  tabbed.changeView();
  __setEditorPreset__('layout', "full-view");
}

//right
function tabStyleRight() {
  resetSplitPane();
  resizePaneX([".editor-preview", ".code-pen"], [56, 44]);
  //splitCodePaneResizeY([41, 41, 41], "vertical");
  resetTransition();
  const resizes = [htmlResize, cssResize, jsResize];
  resizes.forEach(resize => {
    resize.style.display = "block";
  });
  footerLeft.style.order = "2";
  footerRight.style.order = "1";
  footerLeft.style.flexFlow = "row-reverse"
  footerRight.style.flexFlow = "row-reverse";
  jsPen.classList.add("pen-active");
  code.style.display = "inline";
  htmlPen.classList.add("pen-active");
  cssPen.classList.add("pen-active");
  const tabbed = new tabOptions(
    3,
    1,
    "44%",
    "56%",
    "100%",
    "100%",
    "33.33%",
    "100%",
    "relative",
    "row",
    "none",
    "none",
    "none",
    "var(--page-color)",
    "2px solid var(--editor-color)",
    "none",
    "calc(100vh - 90px)",
    "flex",
    "none"
  );
  tabbed.changeView();

  resizeHeight(33.33);
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("layout", "right");
}

//left
function tabStyleLeft() {
  resetSplitPane();
  resizePaneX([".code-pen", ".editor-preview"], [44, 56]);
  resetTransition();
  const resizes = [htmlResize, cssResize, jsResize];
  resizes.forEach(resize => {
    resize.style.display = "block";
  });
  jsPen.classList.add("pen-active");
  code.style.display = "inline";
  htmlPen.classList.add("pen-active");
  cssPen.classList.add("pen-active");
  footerLeft.style.order = "1";
  footerRight.style.order = "2";
  footerLeft.style.flexFlow = "row"
  footerRight.style.flexFlow = "row";
  const tabbed = new tabOptions(
    1,
    3,
    "44%",
    "56%",
    "100%",
    "100%",
    "33.33%",
    "100%",
    "relative",
    "row",
    "none",
    "none",
    "none",
    "var(--page-color)",
    "2px solid var(--editor-color)",
    "none",
    "calc(100vh - 90px)",
    "flex",
    "none"
  );
  tabbed.changeView();

  resizeHeight(33.33);
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("layout", "left");
}

//tab
function tabStyleDefault() {
  resetSplitPane();
  resizePaneX([".code-pen", ".editor-preview"], [44, 56]);
  const resizes = [htmlResize, cssResize, jsResize];
  footerLeft.style.order = "1";
  const tabs = [htmlTab, cssTab, jsTab];
  resizes.forEach(resize => {
    resize.style.display = "none";
  });
  resetTransition();
  tabs.forEach(tab => {
    const attr = tab.getAttribute("data-tab");
    if (tab.classList.contains("active") && attr === "html") {
      jsPen.classList.remove("pen-active");
      footerLeft.style.order = "1";
      footerRight.style.order = "2";
      footerLeft.style.flexFlow = "row"
      footerRight.style.flexFlow = "row";
      cssPen.classList.remove("pen-active");
    } else if (tab.classList.contains("active") && attr === "css") {
      jsPen.classList.remove("pen-active");
      cssPen.classList.add("pen-active");
      htmlPen.classList.remove("pen-active");
    } else if (tab.classList.contains("active") && attr === "js") {
      htmlPen.classList.remove("pen-active");
      cssPen.classList.remove("pen-active");
      jsPen.classList.add("pen-active");
      // cssPen.classList.add("pen-inactive");
    }
    const tabbed = new tabOptions(
      1,
      2,
      "44%",
      "57%",
      "100%",
      "100%",
      "100%",
      "100%",
      "absolute",
      "row",
      "0",
      "var(--page-color)",
      "solid",
      "var(--page-color)",
      "none",
      "flex",
      "calc(100vh - 130px)",
      "flex",
      "2px solid var(--editor-color)"
    );
    tabbed.changeView();
  });
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("layout", "column");
}

//top
function tabStyleTop() {
  resetSplitPane();
  footerLeft.style.order = "1";
  footerRight.style.order = "2";
  footerLeft.style.flexFlow = "row"
  footerRight.style.flexFlow = "row";
  resetTransition();
  const resizes = [htmlResize, cssResize, jsResize];
  resizes.forEach(resize => {
    resize.style.display = "block";
  });
  code.style.display = "flex";
  jsPen.classList.add("pen-active");
  htmlPen.classList.add("pen-active");
  cssPen.classList.add("pen-active");
  const tabbed = new tabOptions(
    1,
    3,
    "100%",
    "100%",
    "60%",
    "40%",
    "100%",
    "33.33%",
    "relative",
    "column",
    "5px",
    "var(--page-color)",
    "solid",
    "var(--page-color)",
    "none",
    "none",
    "calc(100vh - 90px)",
    "flex",
    "2px solid var(--editor-color)"
  );
  tabbed.changeView();
  //splitCodePaneResizeX([150, 150, 150], 'horizontal')
  resizePaneY([".code-pen", ".editor-preview"], [60, 40]);

  resizeWidth();
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("layout", "top");
}

resizeHeight(33.33);

function resizeHeight(height) {
  const resize = htmlPen;
  const resizeOne = cssPen;
  const resizeTwo = jsPen;
  const MAX = 100;
  const MIN = 40;
  const WIDTH = 100;

  let wait;
  let normal = true;
  let normalOne = true;
  let normalTwo = true;

  const sizes = [resize, resizeOne, resizeTwo];
  const resizes = [htmlResize, cssResize, jsResize];
  resizes.forEach(resize => {
    resize.style.display = "flex";
  });

  // const editors = [htmlEditor, cssEditor, jsEditor];

  htmlResize.addEventListener("click", e => {
    normal ? resizeMe(e) : normalizeMe(e);
  });
  cssResize.addEventListener("click", e => {
    normalOne ? resizeMeOne(e) : normalizeMe(e);
  });
  jsResize.addEventListener("click", e => {
    normalTwo ? resizeMeTwo(e) : normalizeMe(e);
  });

  function resizeMe(e) {
    e.preventDefault();

    resize.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeOne.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeTwo.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";

    resize.style.height = `calc(${MAX}% - 80px)`;
    resizeOne.style.height = `${MIN}px`;
    resizeTwo.style.height = `${MIN}px`;

    sizes.forEach(size => {
      size.style.width = `${WIDTH}%`;
    });
    Array.from(codeHead).forEach(code => {
      code.style.height = `${MIN}px`;
    });
    // editors.forEach(editor => {
    //     editor.clear()
    // })

    normal = false;
    normalOne = true;
    normalTwo = true;
  }

  function normalizeMe(e) {
    e.preventDefault();

    resize.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeOne.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeTwo.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";

    resize.style.height = `${height}%`;
    resizeOne.style.height = `${height}%`;
    resizeTwo.style.height = `${height}%`;

    sizes.forEach(size => {
      size.style.width = `${WIDTH}%`;
    });

    // editors.forEach(editor => {
    //     editor.clear()
    // })

    normal = true;
    normalOne = true;
    normalTwo = true;
  }

  function resizeMeOne(e) {
    e.preventDefault();

    resize.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeOne.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeTwo.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";

    resize.style.height = `${MIN}px`;
    resizeOne.style.height = `calc(${MAX}% - 80px)`;
    resizeTwo.style.height = `${MIN}px`;
    sizes.forEach(size => {
      size.style.width = `${WIDTH}%`;
    });

    normalOne = false;
    normal = true;
    normalTwo = true;

    Array.from(codeHead).forEach(code => {
      code.style.height = `${MIN}px`;
    });
  }

  function resizeMeTwo(e) {
    e.preventDefault();

    resize.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeOne.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";
    resizeTwo.style.transition = "height 0.4s cubic-bezier(.38, .39, .28, .95)";

    resize.style.height = `${MIN}px`;
    resizeOne.style.height = `${MIN}px`;
    resizeTwo.style.height = `calc(${MAX}% - 80px)`;

    sizes.forEach(size => {
      size.style.width = `${WIDTH}%`;
    });
    normalTwo = false;
    normal = true;
    normalOne = true;

    Array.from(codeHead).forEach(code => {
      code.style.height = `${MIN}px`;
    });
  }
}

function resizeWidth() {
  const MAX = 70;
  const MIN = 15;
  const HEIGHT = 100;
  const ORIGINAL = 33.3;

  let normal = true;
  let normalOne = true;
  let normalTwo = true;

  const sizes = [htmlPen, cssPen, jsPen];
  const resizes = [htmlResize, cssResize, jsResize];
  resizes.forEach(resize => {
    resize.style.display = "flex";
  });

  htmlResize.addEventListener("click", e => {
    normal ? resizeMe(e) : normalizeMe(e);
  });
  cssResize.addEventListener("click", e => {
    normalOne ? resizeMeOne(e) : normalizeMe(e);
  });
  jsResize.addEventListener("click", e => {
    normalTwo ? resizeMeTwo(e) : normalizeMe(e);
  });

  function resizeMe(e) {
    e.preventDefault();

    htmlPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    cssPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    jsPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";

    htmlPen.style.width = `${MAX}%`;
    cssPen.style.width = `${MIN}%`;
    jsPen.style.width = `${MIN}%`;

    sizes.forEach(size => {
      size.style.height = `${HEIGHT}%`;
    });

    normal = false;
    normalOne = true;
    normalTwo = true;
  }

  function normalizeMe(e) {
    e.preventDefault();

    htmlPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    cssPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    jsPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";

    htmlPen.style.width = `${ORIGINAL}%`;
    cssPen.style.width = `${ORIGINAL}%`;
    jsPen.style.width = `${ORIGINAL}%`;

    sizes.forEach(size => {
      size.style.height = `${HEIGHT}%`;
    });

    editors.forEach(editor => {
      editor.refresh();
    });

    normal = true;
    normalOne = true;
    normalTwo = true;
  }

  function resizeMeOne(e) {
    e.preventDefault();
    htmlPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    cssPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    jsPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";

    htmlPen.style.width = `${MIN}%`;
    cssPen.style.width = `${MAX}%`;
    jsPen.style.width = `${MIN}%`;

    sizes.forEach(size => {
      size.style.height = `${HEIGHT}%`;
    });

    // editors.forEach(editor => {

    normalOne = false;
    normal = true;
    normalTwo = true;
  }

  function resizeMeTwo(e) {
    e.preventDefault();
    htmlPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    cssPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";
    jsPen.style.transition = "width 0.4s cubic-bezier(.38, .39, .28, .95)";

    htmlPen.style.width = `${MIN}%`;
    cssPen.style.width = `${MIN}%`;
    jsPen.style.width = `${MAX}%`;

    sizes.forEach(size => {
      size.style.height = `${HEIGHT}%`;
    });

    normalTwo = false;
    normal = true;
    normalOne = true;
  }
}

function resetTransition() {
  htmlPen.style.transition = "0s";
  cssPen.style.transition = "0s";
  jsPen.style.transition = "0s";
}

function resizePaneY(el, size) {
  gutterHori.style.order = "2";
  Split(el, {
    direction: "vertical",
    sizes: size,
    minSize: [40, 0],
    gutter: function(index, direction) {
      gutterHori.classList.add("gutter");
      gutterHori.classList.add("gutter-" + direction);
      gutterHori.style.width = "100%";

      return gutterHori;
    },
    gutterSize: 10,
    dragInterval: 10,
    elementStyle: function(dimension, size, gutterSize) {
      return {
        height: "calc(" + size + "% - " + gutterSize + "px)",
        width: "100%"
      };
    },
    gutterStyle: function(dimension, gutterSize) {
      return {
        height: gutterSize + "px"
      };
    }
  });
  // editors.forEach(editor => {
  //   editor.getDoc().setValue(editor.getValue());
  // });
}

function resizePaneX(el, size) {
  gutterHori.style.order = "2";
  Split(el, {
    sizes: size,
    minSize: [375, 375],
    direction: "horizontal",
    gutter: function(index, direction) {
      // gutter = document.querySelector('.resize-both')
      gutterHori.classList.add("gutter");
      gutterHori.classList.add("gutter-" + direction);
      gutterHori.style.height = "100%";
      gutterHori.style.width = "5px";
      return gutterHori;
    },
    gutterSize: 10,
    dragInterval: 10,
    elementStyle: function(dimension, size, gutterSize) {
      return {
        width: "calc(" + size + "% - " + gutterSize + "px)",
        height: "100%"
      };
    },
    gutterStyle: function(dimension, gutterSize) {
      return {
        width: gutterSize + "px"
      };
    }
  });
  // editors.forEach(editor => {
  //   editor.getDoc().setValue(editor.getValue());
  // });
}

function resetSplitPane() {
  gutterHori.style.order = "2";
  gutterHori.classList.remove("gutter");
  gutterHori.classList.remove("gutter-horizontal");
  gutterHori.classList.remove("gutter-vertical");
  gutterHori.style.height = "0";
  gutterHori.style.width = "0";
  const resizable = document.querySelectorAll(".resizable");
  Array.from(resizable).forEach(resize => {
    resize.classList.remove("gutter");
    resize.classList.remove("gutter-horizontal");
    resize.classList.remove("gutter-vertical");
    resize.style.width = "0";
    resize.style.height = "0";
  });
  editors.forEach(editor => {
    editor.refresh();
  });
}

// call function for default tab
//splitCodePaneResizeY([41, 41, 41], "vertical")
resizePaneX([".code-pen", ".editor-preview"], [44, 56]);
const consoleCode = document.querySelector(".cm-s-console-code");
const resizeBoth = document.querySelector(".resize-both");
preview.contentWindow.onresize = function() {
  resizeFrame.innerHTML = `${this.innerWidth}px &times; ${this.innerHeight}px`;

  if (consoleInput.offsetWidth <= 400) {
    consoleInput.style.fontSize = "0.8rem";
  } else if (consoleInput.offsetWidth <= 300) {
    consoleInput.style.fontSize = "0.7rem";
  }else if(consoleInput.offsetWidth == 200){
       consoleInput.style.fontSize = "0.65rem";
    } else {
    consoleInput.style.fontSize = "0.95rem";

  }
 
    if(consoleOutput.offsetWidth <= 565){
     
        consoleCode.style.fontSize = "11.5px"

    }else if(consoleOutput.offsetWidth <= 400){
     
        consoleCode.style.fontSize = "9.5px"

    }else{
      consoleCode.style.fontSize = "13.5px"
    }

};

preview.addEventListener("load", () => {
  preview.contentWindow.onresize = function() {
    resizeFrame.innerHTML = `${this.innerWidth}px &times; ${
      this.innerHeight
    }px`;
    if (consoleInput.offsetWidth <= 400) {
      consoleInput.style.fontSize = "0.8rem";
    } else if (consoleInput.offsetWidth <= 300) {
      consoleInput.style.fontSize = "0.7rem";
    }else if(consoleInput.offsetWidth == 200){
       consoleInput.style.fontSize = "0.65rem";
    }else{
      consoleInput.style.fontSize = "0.95rem";
    }
    
   
    if(consoleOutput.offsetWidth <= 565){
     
      consoleCode.style.fontSize = "11.5px"

  }else if(consoleOutput.offsetWidth <= 400){
   
      consoleCode.style.fontSize = "9.5px"

  }else{
    consoleCode.style.fontSize = "13.5px"
  }

  };
});
resizeBoth.addEventListener("mousedown", () => {
  resizeFrame.parentElement.style.opacity = "1";
});

resizeBoth.addEventListener("mouseup", () => {
  resizeFrame.parentElement.style.opacity = "0";
});


