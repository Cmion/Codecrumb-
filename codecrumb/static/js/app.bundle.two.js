const HtmlModes = {
  HTML: "html",
  PUG: "pug",
  MARKDOWN: "markdown"
};
const CSSModes = {
  CSS: "css",
  SCSS: "scss",
  SASS: "sass",
  LESS: "less",
  STYLUS: "stylus"
};
const JSModes = {
  JS: "javascript",
  CS: "coffeescript",
  TS: "typescript",
  BABEL: "babel",
  JSX: "jsx"
};

const modes = {};

//HTMLMODES
modes[HtmlModes.HTML] = {
  tdMimeType: "htmlmixed",
  name: "HTML",
  parser: "html"
};
modes[HtmlModes.PUG] = {
  tdMimeType: {
    name: "pug",
    alignCDATA: true
  },
  name: "Pug",
  parser: "html"
};
modes[HtmlModes.MARKDOWN] = {
  tdMimeType: {
    name: "gfm",
    tokenTypeOverrides: {
      emoji: "emoji"
    }
  },
  name: "Markdown",
  parser: "markdown"
};

//CSsMODES
modes[CSSModes.CSS] = {
  tdMimeType: "css",
  name: "CSS",
  parser: "css"
};
modes[CSSModes.SCSS] = {
  tdMimetype: "text/x-scss",
  name: "SCSS",
  parser: "css"
};
modes[CSSModes.SASS] = {
  tdMimeType: "sass",
  name: "SASS",
  parser: "css"
};
modes[CSSModes.LESS] = {
  tdMimeType: "text/x-less",
  name: "LESS",
  parser: "css"
};
modes[CSSModes.STYLUS] = {
  tdMimeType: "stylus",
  name: "Stylus",
  parser: "css"
};

//JSMODES
modes[JSModes.JS] = {
  tdMimeType: "javascript",
  name: "JavaScript",
  parser: "babylon"
};

modes[JSModes.CS] = {
  tdMimeType: "text/coffeescript",
  name: "CoffeeScript",
  parser: "babylon"
};
modes[JSModes.TS] = {
  tdMimeType: "text/typescript-jsx",
  name: "TypeScript",
  parser: "babylon"
};

modes[JSModes.BABEL] = {
  tdMimeType: "text/jsx",
  name: "Babel",
  parser: "babylon"
};
modes[JSModes.JSX] = {
  tdMimeType: "jsx",
  name: "JSX",
  parser: "babylon"
};

/* eslint-disable no-console */
const {
  htmlArea,
  cssArea,
  jsArea,
  preview,
  pen,
  code,
  codeHead,
  htmlPen,
  cssPen,
  jsPen,
  editorTab,
  editorPreview,
  editorContainer,
  editorBody,
  getView,
  htmlTab,
  cssTab,
  jsTab,
  htmlMode,
  cssMode,
  jsMode,
  htmlResize,
  cssResize,
  jsResize,
  htmlHead,
  cssHead,
  jsHead,
  run,
  tidyPage,
  saveCrumb,
  cssLib,
  jsLib,
  metaLib,
  submitLib,
  generalSettings,
  languageSettings,
  balanceSettings,
  behaviourSettings,
  kbdSettings,
  profileSettings,
  languageTab,
  generalTab,
  balanceTab,
  behaviourTab,
  kbdTab,
  profileTab,
  editorMenuMain,
  settingsBtn,
  gutterHori,
  crumbName,
  loader,
  forkPage,
  cmDark,
  keymaps,
  fontFm,
  sizes,
  consoleText,
  out,
  c_name,
  clearConsole,
  htmlChangesMade,
  cssChangesMade,
  jsChangesMade,
  htmlPre,
  cssPre,
  jsPre,
  anonymousModal,
  snippetSource,
  consoleBtn,
  outnum,
  preserveLog,
  customSettings,
  customTab,
  lastSavedShowText,
  autoBtn,
  openPseudocode,
  exportFile,
  linterITag,
  toggleLinter,
  consoleBar,
  openDebugConsole,
  tabSizeCustom,
  fontFmCustom,
  customFSize,
  fontLigatures,
  colorPickerType,
  autoRunDelay,
  watchCode,
  consoleInput,
  resizeFrame,
  editorSkins,
  consoleOutput
} = elementDeclaration();
let delay;
let counter = 0;
let autoSaveStart;

const csse = {
  html: "html",
  css: "css",
  js: "javascript"
};

const snippetFormatted = snippetSource.value;
const examp = {
  globals: {
    markup: {
      snippets: {
        foo: "div.foo[bar=baz]>span.hello{Hey crumber, this is a code snippet}"
      }
    },
    stylesheet: {
      snippets: {
        myp: "body{\n height: 100vh; \n color: #888; \n width: 100vw;\n background: #20232E;\n overflow: hidden; \n display: flex; \n align-items: center; \n justify-content: center; \n} \n .hello{ \n font-size: 30px; \n padding: 10px; \n color: white; \n text-transform: capitalize; \n}"
      }
    }
  }
};

// eslint-disable-next-line no-undef
animate();

const crumbData = document.querySelector("#crumbData").value;
const dataItems = JSON.parse(crumbData);
let jsChangeNum = 0;
let cssChangeNum = 0;
let htmlChangeNum = 0;


function crumbEditor(mode) {
  return {
    mode: mode,
    lineNumbers: true,
    theme: "andromeda",
    scrollbarStyle: "simple",
    autoCloseTags: true,
    undoDepth: 500,
    styleActiveLine: false,
    lineWrapping: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    autoRefresh: true,
    markTagPairs: true,
    autoRenameTags: true,
    jsxBracket: true,
    showCursorWhenSelecting: true,
    matchTags: {
      bothTags: true
    },

    _extraKeys: {
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Alt-F": "findPersistent",
      "Ctrl-S": function () {
        if (dataItems.author == "anonymous") return null;
        keyMapSave();
      },
      "Ctrl-Enter": function () {
        updatePreview();
      },
      "Alt-J": function () {
        beautifySingleFile(jsEditor, csse.js);
      },
      "Alt-C": function () {
        beautifySingleFile(cssEditor, csse.css);
      },
      "Alt-H": function () {
        beautifySingleFile(htmlEditor, csse.html);
      },
      "Ctrl-Space": "autocomplete",
      "Alt-A": function () {
        prettify(htmlEditor, cssEditor, jsEditor);
      },
      Tab: "emmetExpandAbbreviationAll",
      "Ctrl-E": "emmetExpandAbbreviationAll",
      Enter: "emmetInsertLineBreak",
      "Ctrl-W": "emmetWrapWithAbbreviation",
      "Ctrl-/": "toggleComment"
    },
    get extraKeys() {
      return this._extraKeys;
    },
    set extraKeys(value) {
      this._extraKeys = value;
    },
    value: document.documentElement.innerHTML,
    foldGutter: true,
    gutters: [
      "CodeMirror-linenumbers",
      "CodeMirror-foldgutter",
      "CodeMirror-lint-markers"
    ],
    _emmet: snippetFormatted == "None" ||
      snippetFormatted == " " ||
      snippetFormatted.length == 0 ?
      examp :
      JSON.parse(snippetFormatted),
    get emmet() {
      return this._emmet;
    },
    set emmet(value) {
      this._emmet = value;
    }
  };
}

const htmlEditor = CodeMirror.fromTextArea(htmlArea, crumbEditor("text/html"));
const cssEditor = CodeMirror.fromTextArea(cssArea, crumbEditor("css"));

const jsEditor = CodeMirror.fromTextArea(jsArea, crumbEditor("javascript"));

const consoleEditor = CodeMirror.fromTextArea(consoleText, {
  theme: "neo",
  readOnly: true,
  lineWrapping: true,
  mode: "javascript",
  tabSize: 2,
  // lineNumbers: true,
  scrollbarStyle: "simple",
  disableInput: true,
  showCursorWhenSelecting: true,
  extraKeys: {
    Tab: false
  }
});

// editors size
htmlEditor.setSize("100%", "100%");
cssEditor.setSize("100%", "100%");
jsEditor.setSize("100%", "100%");
consoleEditor.setSize("100%", "100%");
consoleEditor.setOption("value", "# Your logs will appear here...");
const editors = [htmlEditor, cssEditor, jsEditor];

function preload() {
  computePreloadPreview(dataItems);
}

function computePreloadPreview(editorItems) {
  const codes = editorItems.codes;
  const modes = editorItems.modes;
  const libs = editorItems.libs;
  const title = editorItems.title;

  const getSettings = editorItems.editorSettings;

  changeEditorSettings(
    htmlEditor,
    cssEditor,
    jsEditor,
    getSettings,
    cmDark,
    fontFm,
    sizes,
    keymaps
  );
  htmlEditor.getDoc().setValue(codes.html);

  cssEditor.getDoc().setValue(codes.css);
  jsEditor.getDoc().setValue(codes.js);
  cssLib.value = libs.cssLib || "";
  jsLib.value = libs.jsLib || "";
  metaLib.value = libs.htmlMeta || "";
  crumbName.crumb.value = title.name || "";

  htmlPenState(htmlEditor, modes.htmlMode);
  cssPenState(cssEditor, modes.cssMode);
  jsPenState(jsEditor, modes.jsMode);

  const htmlPre = document.querySelector("#html-pre");

  const cssPre = document.querySelector("#css-pre");

  const jsPre = document.querySelector("#js-pre");

  const htmlName = document.querySelector(".html-mode-name");
  const cssName = document.querySelector(".css-mode-name");

  const jsName = document.querySelector(".js-mode-name");

  const cssP = cssPre.namedItem(modes.cssMode);

  const htmlP = htmlPre.namedItem(modes.htmlMode);

  const jsP = jsPre.namedItem(modes.jsMode);

  const htmlAttr = htmlP.getAttribute("data-name");
  const cssAttr = cssP.getAttribute("data-name");
  const jsAttr = jsP.getAttribute("data-name");

  csse.html = modes.htmlMode;
  csse.css = modes.cssMode;
  csse.js = modes.jsMode;

  htmlName.textContent = `${htmlAttr}`;
  cssName.textContent = `${cssAttr}`;
  jsName.textContent = `${jsAttr}`;

  cssPre.options.selectedIndex = cssP.index;
  htmlPre.options.selectedIndex = htmlP.index;
  jsPre.options.selectedIndex = jsP.index;

  const animationFrame = requestAnimationFrame || webkitRequestAnimationFrame;
  animationFrame(() => {
    updatePreview();
  });
}

preload();

function setPreload() {
  const moreRequire = returnStates();
  const htmlMode = moreRequire.html;
  const cssMode = moreRequire.css;
  const jsMode = moreRequire.js;

  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const htmlMeta = metaLib.value;
  const cssLibrary = cssLib.value;
  const jsLibrary = jsLib.value;

  const name = crumbName.crumb.value;

  const crumbData = JSON.stringify({
    modes: {
      htmlMode,
      cssMode,
      jsMode
    },
    codes: {
      html,
      css,
      js
    },
    libs: {
      htmlMeta: htmlMeta,
      cssLib: cssLibrary,
      jsLib: jsLibrary
    },
    title: {
      name
    },
    editorSettings: {
      keymap: keymaps.selectedOptions[0].getAttribute("name"),
      font: cleanFont(fontFmCustom.value),
      theme: cmDark.selectedOptions[0].getAttribute("name"),
      fSize: parseInt(customFSize.value, 10)
    }
  });

  localStorage.setItem("crumb", crumbData);
}

function sendJson(url) {
  const moreRequire = returnStates();
  const htmlRequire = moreRequire.html;
  const cssRequire = moreRequire.css;
  const jsRequire = moreRequire.js;

  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const htmlMeta = metaLib.value;
  const cssLibrary = cssLib.value;
  const jsLibrary = jsLib.value;
  const name = crumbName.crumb.value;
  const s = window.location.pathname;

  const path = s.split("/")[3];

  const crumbData = JSON.stringify({
    modes: {
      htmlMode: htmlRequire,
      cssMode: cssRequire,
      jsMode: jsRequire
    },
    codes: {
      html,
      css,
      js
    },
    libs: {
      htmlMeta: htmlMeta,
      cssLib: cssLibrary,
      jsLib: jsLibrary
    },
    title: {
      name
    },
    editorSettings: {
      keymap: keymaps.selectedOptions[0].getAttribute("name"),
      font: cleanFont(fontFmCustom.value),
      theme: cmDark.selectedOptions[0].getAttribute("name"),
      fSize: parseInt(customFSize.value, 10)
    },
    path
  });

  const origin = window.origin;
  fetch(`${origin}${url}`, {
      method: "POST",
      cache: "no-cache",
      headers: new Headers({
        "content-type": "application/json"
      }),
      credentials: "include",
      body: crumbData
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      window.location.href = origin + "/error";
    });
  localStorage.removeItem("crumb");
  savedChange();
}

function updatePreview() {
  const moreRequire = returnStates(htmlEditor, cssEditor, jsEditor);

  const htmlRequire = moreRequire.html;
  const cssRequire = moreRequire.css;
  const jsRequire = moreRequire.js;

  const getHTMLMode = HtmlCompile(htmlEditor, htmlRequire);
  const getCSSMode = CSSCompile(cssEditor, cssRequire);
  const getJSMode = JSCompile(jsEditor, jsRequire);

  Promise.all([getHTMLMode, getCSSMode, getJSMode]).then(data => {
    const url = getPreview({
      html: data[0].code,
      css: data[1].code,
      js: data[2].code,
      meta: metaLib,
      cssExt: cssLib,
      jsExt: jsLib,
      mode: jsRequire,
      sType: modes[jsRequire].scriptType
    });

    printError(data[0].error);
    printError(data[1].error);
    printError(data[2].error);

    const animationFrame = requestAnimationFrame || webkitRequestAnimationFrame;
    animationFrame(() => {
      preview.src = url;
    });
  });
  localStorage.removeItem("crumb");

  // console.clear();
}

function printError(x) {
  let errorCount = parseInt(outnum.getAttribute("data-error"));
  let consoleBError = parseInt(consoleBar.getAttribute("data-label"));
  if (x) {
    const mess = x.data[0].message;
    const language = x.lang;
    const val = consoleEditor.getValue();
    const lineNo = x.data[0].lineNumber;

    const dashes = "---------------------------------------";

    const errorOutput = `\n${dashes}\n[${language.toUpperCase()}] ${mess} \n\t\t\t\t at line ${lineNo}\n${dashes}`;

    // updates the  console.
    if (preserveLog.checked) {
      errorCount++;
      consoleBError++;
      outnum.setAttribute("data-error", `${errorCount}`);
      consoleBError > 1 ?
        consoleBar.setAttribute(
          "data-label",
          `${consoleBError} errors.`
        ) :
        consoleBar.setAttribute(
          "data-label",
          `${consoleBError} error.`
        );
      consoleEditor.replaceRange(
        errorOutput,
        CodeMirror.Pos(consoleEditor.lastLine() + 1)
      );
    } else if (!preserveLog.checked) {
      errorCount = 0;
      consoleBError = 0;
      ++errorCount;
      ++consoleBError;
      outnum.setAttribute("data-error", `${errorCount}`);
      consoleBError > 1 ?
        consoleBar.setAttribute(
          "data-label",
          `${consoleBError} errors.`
        ) :
        consoleBar.setAttribute(
          "data-label",
          `${consoleBError} error.`
        );
      consoleEditor.getDoc().setValue(errorOutput);
    }
    // updates textContent / error numbers and set text color.

    outnum.textContent = `${errorCount}`;
  }
  // else if (!x) {
  //   consoleBar.setAttribute("data-label", "0");
  //   outnum.textContent = "0";
  //   outnum.setAttribute("data-error", "0");
  // }
}

function unsavedChange() {
  let t;

  htmlEditor.on("change", function () {
    clearTimeout(t);
    t = setTimeout(() => {
      htmlChangeNum++;
      htmlChangesMade.setAttribute(
        "data-change",
        `${htmlChangeNum} unsaved change`
      );
      document.documentElement.style.setProperty("--html", "1");
    }, 2000);
  });

  cssEditor.on("change", function () {
    clearTimeout(t);
    t = setTimeout(() => {
      cssChangeNum++;
      cssChangesMade.setAttribute(
        "data-change",
        `${cssChangeNum} unsaved change`
      );
      document.documentElement.style.setProperty("--css", "1");
    }, 2000);
  });

  jsEditor.on("change", function () {
    clearTimeout(t);
    t = setTimeout(() => {
      jsChangeNum++;
      jsChangesMade.setAttribute(
        "data-change",
        `${jsChangeNum} unsaved change`
      );
      document.documentElement.style.setProperty("--js", "1");
    }, 2000);
  });
}
unsavedChange();

function savedChange() {
  document.documentElement.style.setProperty("--html", "0");
  document.documentElement.style.setProperty("--css", "0");
  document.documentElement.style.setProperty("--js", "0");

  cssChangeNum = 0;
  jsChangeNum = 0;
  htmlChangeNum = 0;
}

if (dataItems.author != "anonymous") {
  autoBtn.addEventListener("change", autoSave);
  if (autoBtn.checked) {
    autoSave();
  }
}

function lastSaved() {
  let mins = Math.floor(counter / 60);
  let hours = Math.floor(mins / 60);
  lastSavedShowText.style.visibility = "visible";
  if (mins < 1) {
    lastSavedShowText.innerText = "Last saved less than a minute ago.";
    lastSavedShowText.style.transition = ".2s ease";
  } else if (mins >= 1) {
    lastSavedShowText.innerText = `Last saved ${mins} ${
      mins > 1 ? "minutes" : "minute"
    } ago.`;
    lastSavedShowText.style.transition = ".2s ease";
  } else if (mins >= 60) {
    lastSavedShowText.innerText = `Last saved ${hours} ${
      hours > 1 ? "hours" : "hour"
    } ago.`;
    lastSavedShowText.style.transition = ".2s ease";
  }
  counter++;

  autoSaveStart = setTimeout(() => lastSaved(), 1000);
}

function autoSave() {
  if (autoBtn.checked) {
    savedChange();
    htmlChangesMade.style.display = "none";
    cssChangesMade.style.display = "none";
    jsChangesMade.style.display = "none";
    watchCode.style.display = "flex";
    editors.forEach(editor => {
      editor.on("keyup", function () {
        clearTimeout(delay);
        requestAnimationFrame(() => {
          delay = setTimeout(() => {
            if (autoBtn.checked) {
              sendJson("/crumbs/get");
            }
            savedChange();

            if (counter > 0) {
              clearTimeout(autoSaveStart);
              counter = 0;
              lastSaved();
            } else {
              lastSaved();
            }
          }, 3000);
        });
      });
    });
  } else if (!autoBtn.checked) {
    htmlChangesMade.style.display = "flex";
    cssChangesMade.style.display = "flex";
    jsChangesMade.style.display = "flex";
    unsavedChange();
    watchCode.style.display = "none";

    editors.forEach(editor => {
      clearTimeout(delay);
      removeEventListener("keyup", editor);
    });
  }
}

function keyMapSave() {
  savedChange();
  sendJson("/crumbs/get");
  if (counter > 0) {
    clearTimeout(autoSaveStart);
    counter = 0;
    lastSaved();
  } else {
    lastSaved();
  }
}

submitLib.addEventListener("click", () => {
  updatePreview();
  keyMapSave();
});

crumbName.crumb.addEventListener("change", e => {
  e.preventDefault();
  keyMapSave();
});
crumbName.addEventListener("keypress", e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    keyMapSave();
    crumbName.blur()
  }
});

function __setEditorPreset__(type, value) {
  if (localStorage.__defineEditorPresets__) {
    const x = JSON.parse(localStorage.__defineEditorPresets__);
    localStorage.setItem(
      "__defineEditorPresets__",
      JSON.stringify({ ...x, [type]: value })
    );
  }
}

if (dataItems.arg === true && dataItems.author != "anonymous") {
  saveCrumb.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("crumb");
    savedChange();
    updatePreview();
    sendJson("/crumbs/get");
    if (counter > 0) {
      clearTimeout(autoSaveStart);
      counter = 0;
      lastSaved();
    } else {
      lastSaved();
    }
  });
  forkPage.addEventListener("click", e => {
    e.preventDefault();
    redirectUser("/crumbs/fork");
  });
} else if (dataItems.arg && dataItems.author === "anonymous") {
  forkPage.addEventListener("click", e => {
    e.preventDefault();
    redirectUser("/anon/crumbs/get");
  });
} else if (!dataItems.arg && !dataItems.status) {
  forkPage.addEventListener("click", e => {
    e.preventDefault();
    anonymousModal.style.animation = "alertModal .15s linear  forwards";
    setPreload();
  });

  window.addEventListener("click", e => {
    if (e.target == anonymousModal) {
      anonymousModal.style.animation =
        "alertModalOut .15s linear  forwards";
    }
  });
} else if (!dataItems.arg && dataItems.status) {
  forkPage.addEventListener("click", e => {
    e.preventDefault();
    redirectUser("/crumbs/fork");
  });
}

function redirectUser(url) {
  const org = window.origin;
  const path = window.location.pathname;
  const urlString = path.split("/")[3];

  const getPreload = {
    path: urlString,
    author: dataItems.author
  };

  fetch(`${org}${url}`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      cache: "no-cache",
      body: JSON.stringify(getPreload)
    })
    .then(res => res.json())
    .then(data => {
      const newPath = data.path;
      const newUrl = `${org}/${newPath}`;
      window.location.href = newUrl;
    })
    .catch(err => {
      window.location.href = window.origin + "/error";
      console.log(err.text, err);
    });
}

run.addEventListener("click", e => {
  e.preventDefault();

  updatePreview();

  //console.log(JSON.parse(p))
});
exportFile.addEventListener("click", e => {
  e.preventDefault();
  requestAnimationFrame(() => {
    setTimeout(() => {
      exportFile.textContent = "Working on it";
    }, 1300);
  });
  exportToZip();
});
// sets the url for each save crumb.
openPseudocode.setAttribute("href", window.location.href + "/pseudo");
// eslint-disable-next-line no-undef
settingButtons(
  htmlEditor,
  cssEditor,
  jsEditor,
  editors,
  updatePreview,
  cmDark,
  fontFm,
  sizes,
  keymaps
);
// eslint-disable-next-line no-undef
initState(htmlEditor, cssEditor, jsEditor, updatePreview);

// eslint-disable-next-line no-undef
keyboardShortCuts(updatePreview, htmlEditor, cssEditor, jsEditor);

function elementDeclaration() {
  const htmlArea = document.querySelector("#html");
  const cssArea = document.querySelector("#css");
  const jsArea = document.querySelector("#js");
  const preview = document.querySelector("#transcend-preview");
  const pen = document.querySelector(".pen");
  const code = document.querySelector(".code-pen");
  const codeHead = document.querySelectorAll(".code-head");
  const htmlPen = document.querySelector(".html-pen");
  const cssPen = document.querySelector(".css-pen");
  const jsPen = document.querySelector(".js-pen");
  const editorTab = document.querySelectorAll(".editor-tab");
  const editorPreview = document.querySelector(".editor-preview ");
  const editorContainer = document.querySelector(".editor-container");
  const editorBody = document.querySelector(".editor-body");
  const getView = document.querySelector(".get-view");
  const htmlTab = document.querySelector(".htmlTab");
  const cssTab = document.querySelector(".cssTab");
  const jsTab = document.querySelector(".jsTab");
  const htmlMode = document.querySelector(".html-mode");
  const cssMode = document.querySelector(".css-mode");
  const jsMode = document.querySelector(".js-mode");
  const htmlResize = document.querySelector(".html-resize");
  const cssResize = document.querySelector(".css-resize");
  const jsResize = document.querySelector(".js-resize");
  const htmlHead = document.querySelector("#html-head");
  const cssHead = document.querySelector("#css-head");
  const jsHead = document.querySelector("#js-head");
  const run = document.querySelector(".run-preview");
  const tidyPage = document.querySelector(".tidy");
  const saveCrumb = document.querySelector(".save-crumb");
  const cssLib = document.querySelector("#csslib");
  const jsLib = document.querySelector("#jslib");
  const metaLib = document.querySelector("#metalib");
  const submitLib = document.querySelector("#submit-lib");
  const generalSettings = document.querySelector(".general-settings");
  const languageSettings = document.querySelector(".language");
  const balanceSettings = document.querySelector(".balance");
  const behaviourSettings = document.querySelector(".behaviour-settings");
  const kbdSettings = document.querySelector(".keyboard-shortcuts");
  const profileSettings = document.querySelector(".profile-settings");
  const generalTab = document.querySelector(".general-tab");
  const languageTab = document.querySelector(".language-tab");
  const balanceTab = document.querySelector(".balance-tab");
  const behaviourTab = document.querySelector(".behaviour-tab");
  const kbdTab = document.querySelector(".keyboard-tab");
  const profileTab = document.querySelector(".profile-tab");
  const editorMenuMain = document.querySelector(".editor-menu-main");
  const consoleBtn = document.querySelector(".open-console");
  const settingsBtn = document.querySelector(".settings-button");
  const gutterHori = document.querySelector(".resize-both");
  const crumbName = document.forms.crumbName;
  const loader = document.querySelector(".loader");
  const forkPage = document.querySelector(".fork-page");
  const cmDark = document.querySelector(".theme-dark");
  const keymaps = document.querySelector(".keymaps");
  const fontFm = document.querySelector(".fonts");
  const sizes = document.querySelector(".font-size");
  const consoleText = document.querySelector("#error-log");
  const out = document.querySelector(".out");
  const c_name = document.querySelector(".console-name");
  const clearConsole = document.querySelector(".out-clear");
  const htmlChangesMade = document.querySelector(".html-changes-made");
  const cssChangesMade = document.querySelector(".css-changes-made");
  const jsChangesMade = document.querySelector(".js-changes-made");
  const htmlPre = document.querySelector("#html-pre");
  const cssPre = document.querySelector("#css-pre");
  const jsPre = document.querySelector("#js-pre");
  const anonymousModal = document.querySelector(".save-md-body");
  const snippetSource = document.querySelector("#snippets");
  const outnum = document.querySelector(".console-label");
  const preserveLog = document.querySelector("#preserve-log");
  const customSettings = document.querySelector(".sc-custom");
  const customTab = document.querySelector(".custom-tab");
  const lastSavedShowText = document.querySelector(".auto-save-code");
  const autoBtn = document.querySelector("#auto-save");
  const openPseudocode = document.querySelector(".toggle-pseudo-code");
  const exportFile = document.querySelector(".export-file");
  const linterITag = document.querySelector(".tg-l");
  const toggleLinter = document.querySelector(".toggle-linter");
  const watchCode = document.querySelector(".watch-code");
  const consoleBar = document.querySelector(".console-bar");
  const openDebugConsole = document.querySelector(".open-debug-console");
  const tabSizeCustom = document.querySelector("#tab-size-custom");
  const fontFmCustom = document.querySelector("#font-family-custom");
  const customFSize = document.querySelector("#font-size-custom");
  const fontLigatures = document.querySelector("#font-ligatures");
  const colorPickerType = document.querySelector("#color-picker-type");
  const autoRunDelay = document.querySelector("#auto-run-delay");
  const consoleInput = document.querySelector("#input-log");
  const resizeFrame = document.querySelector(".frame-in");
  const editorSkins = document.querySelector("#editor-skin");
  const consoleOutput = document.querySelector(".output-console");

  return {
    htmlArea,
    cssArea,
    jsArea,
    preview,
    pen,
    code,
    codeHead,
    htmlPen,
    cssPen,
    jsPen,
    editorTab,
    editorPreview,
    editorContainer,
    editorBody,
    getView,
    htmlTab,
    cssTab,
    jsTab,
    htmlMode,
    cssMode,
    jsMode,
    htmlResize,
    cssResize,
    jsResize,
    htmlHead,
    cssHead,
    jsHead,
    run,
    tidyPage,
    saveCrumb,
    cssLib,
    jsLib,
    metaLib,
    submitLib,
    generalSettings,
    languageSettings,
    balanceSettings,
    behaviourSettings,
    kbdSettings,
    profileSettings,
    languageTab,
    generalTab,
    balanceTab,
    behaviourTab,
    kbdTab,
    profileTab,
    editorMenuMain,
    settingsBtn,
    gutterHori,
    crumbName,
    loader,
    forkPage,
    cmDark,
    keymaps,
    fontFm,
    sizes,
    consoleText,
    out,
    c_name,
    clearConsole,
    htmlChangesMade,
    cssChangesMade,
    jsChangesMade,
    htmlPre,
    cssPre,
    jsPre,
    anonymousModal,
    snippetSource,
    consoleBtn,
    outnum,
    preserveLog,
    customSettings,
    customTab,
    lastSavedShowText,
    autoBtn,
    openPseudocode,
    exportFile,
    linterITag,
    toggleLinter,
    consoleBar,
    openDebugConsole,
    tabSizeCustom,
    fontFmCustom,
    customFSize,
    fontLigatures,
    colorPickerType,
    autoRunDelay,
    watchCode,
    consoleInput,
    resizeFrame,
    editorSkins,
consoleOutput
  };
}
window.onbeforeunload = function () {
  if (htmlChangeNum > 0 || cssChangeNum > 0 || jsChangeNum > 0) {
    return "Changes you made have not been saved, Do you still want to reload?";
  } else return;
};
function deferred() {
    const s = {}
    const promise = new Promise(function (resolve, reject) {
        s.resolve = resolve;
        s.reject = reject;
    });
    s.promise = promise
    return Object.assign(s, promise);

}
function htmlPenState(editor, mode) {
  const d = deferred();

  if (mode === HtmlModes.HTML) {
    editor.setOption("mode", modes.html.tdMimeType);
    const gMode = editor.getOption("mode");
    d.resolve({
      mode: gMode
    });
  } else if (mode === HtmlModes.MARKDOWN) {
    editor.setOption("mode", modes.markdown.tdMimeType);
    const gMode = editor.getOption("mode");
    d.resolve({
      mode: gMode
    });
  } else if (mode === HtmlModes.PUG) {
    editor.setOption("mode", modes.pug.tdMimeType);
    const gMode = editor.getOption("mode");
    d.resolve({
      mode: gMode
    });
  }
  return d.promise;
}

function cssPenState(editor, mode) {
  if (mode === CSSModes.CSS) {
    editor.setOption("mode", modes.css.tdMimeType);
  } else if (mode === CSSModes.SASS || mode === CSSModes.SCSS) {
    if (mode === CSSModes.SASS) {
      editor.setOption("mode", modes.sass.tdMimeType);
    } else if (mode === CSSModes.SCSS) {
      editor.setOption("mode", modes.scss.tdMimetype);
      // console.log(mode, modes.scss.tdModePath, modes.scss.tdMimetype)
      // console.info(editor.getOption("mode"))
    }
  } else if (mode === CSSModes.STYLUS) {
    editor.setOption("mode", modes.stylus.tdMimeType);
  } else if (mode === CSSModes.LESS) {
    editor.setOption("mode", modes.less.tdMimeType);
  }
}

function jsPenState(editor, mode) {
  if (mode === JSModes.JS) {
    editor.setOption("mode", modes.javascript.tdMimeType);
  } else if (mode === JSModes.CS) {
    editor.setOption("mode", modes.coffeescript.tdMimeType);
  } else if (mode === JSModes.TS) {
    editor.setOption("mode", modes.typescript.tdMimeType);
  } else if (mode === JSModes.BABEL) {
    editor.setOption("mode", modes.babel.tdMimeType);
  } else if (mode === JSModes.JSX) {
    editor.setOption("mode", modes.jsx.tdMimeType);
  }
}

/* eslint-disable no-console */
function HtmlCompile(editor, mode) {
  const d = deferred();

  let userCode = editor.getValue();
  let error;
  if (mode === HtmlModes.HTML) {
    editor.setOption("mode", modes.html.tdMimeType);
    try {
      prettier.format(userCode, {
        parser: "html",
        plugins: prettierPlugins
      });
    } catch (e) {
      error = {
        lang: "HTML",
        data: [
          {
            lineNumber: editor.lineCount(),
            message: e.message
          }
        ]
      };
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  } else if (mode === HtmlModes.MARKDOWN) {
    editor.setOption("mode", modes.markdown.tdMimeType);
    showdown.setFlavor("github");
    const converter = new showdown.Converter();
    const code = converter.makeHtml(userCode);
    d.resolve({
      code: code
    });
  } else if (mode === HtmlModes.PUG) {
    editor.setOption("mode", modes.pug.tdMimeType);
    try {
      userCode = jade.render(editor.getValue());
    } catch (e) {
      error = {
        lang: "Pug",
        data: [
          {
            lineNumber: editor.lineCount(),
            message: e.message
          }
        ]
      };
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  }

  return d.promise;
}

function CSSCompile(editor, mode) {
  const d = deferred();
  let error;
  const userCode = editor.getValue();
  if (mode === CSSModes.CSS) {
    editor.setOption("mode", modes.css.tdMimeType);
    try {
      prettier.format(userCode, {
        parser: "css",
        plugins: prettierPlugins
      });
    } catch (e) {
      error = {
        lang: "CSS",
        data: [
          {
            lineNumber: editor.lineCount(),
            message: e.message
          }
        ]
      };
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  } else if (mode === CSSModes.SASS || mode === CSSModes.SCSS) {
    const sass = new Sass();

    if (mode === CSSModes.SASS) {
      editor.setOption("mode", modes.sass.tdMimeType);

      sass.compile(
        userCode,
        {
          indentedSyntax: true
        },
        function(result) {
          if (result.line && result.message) {
            error = {
              lang: "SASS",
              data: [
                {
                  lineNumber: result.line,
                  message: result.message
                }
              ]
            };
          }
          d.resolve({
            code: result.text,
            error
          });
        }
      );
    } else if (mode === CSSModes.SCSS) {
      editor.setOption("mode", modes.scss.tdMimetype);
      sass.compile(
        userCode,
        {
          indentedSyntax: false
        },
        function(result) {
          if (result.line && result.message) {
            error = {
              lang: "SCSS",
              data: [
                {
                  lineNumber: result.line,
                  message: result.message
                }
              ]
            };
          }
          d.resolve({
            code: result.text,
            error
          });
        }
      );
    }
  } else if (mode === CSSModes.STYLUS) {
    editor.setOption("mode", modes.stylus.tdMimeType);
    stylus(editor.getValue()).render(function(err, result) {
      if (err) {
        error = {
          lang: "STYLUS",
          data: [
            {
              lineNumber: editor.lineCount(),
              message: err.message.split("}")
            }
          ]
        };
        d.resolve({
          code: "",
          error
        });
      }
      d.resolve({
        code: result
      });
    });
  } else if (mode === CSSModes.LESS) {
    editor.setOption("mode", modes.less.tdMimeType);
    less
      .render(editor.getValue())
      .then(data => {
        d.resolve({
          code: data.css
        });
      })
      .catch(err => {
        error = {
          lang: "LESS",
          data: [
            {
              lineNumber: err.line,
              message: err.message
            }
          ]
        };
        d.resolve({
          code: "",
          error
        });
      });
  }

  return d.promise;
}

function JSCompile(editor, mode) {
  let userCode = editor.getValue();
  const d = deferred();
  let error;

  if (mode === JSModes.JS) {
    editor.setOption("mode", modes.javascript.tdMimeType);
    try {
      prettier.format(userCode, {
        parser: "babylon",
        plugins: prettierPlugins
      });
    } catch (e) {
      const x = e.message.split("\n")[0].split(" ");
      const y = x[x.length - 1];
      const o = y.slice(1, y.length - 1);
      error = {
        lang: "JS",
        data: [
          {
            lineNumber: o,
            message: e.message
          }
        ]
      };
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  } else if (mode === JSModes.CS) {
    editor.setOption("mode", modes.coffeescript.tdMimeType);
    try {
      userCode = CoffeeScript.compile(userCode, {
        bare: true
      });
    } catch (e) {
      error = {
        lang: "CoffeeScript",
        data: [
          {
            lineNumber: e.location.first_line + 1,
            message: e.message
          }
        ]
      };
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  } else if (mode === JSModes.TS) {
    editor.setOption("mode", modes.typescript.tdMimeType);
    try {
      userCode = ts.transpileModule(userCode, {
        reportDiagnostics: true,
        compilerOptions: {
          noEmitOnError: false,
          diagnostics: true,
          module: ts.ModuleKind.ES2015,
          jsx: "react",
          jsxEmit: "react"
        }
      });

      if (userCode.diagnostics.length) {
        error = {
          lang: "TypeScript",
          data: [
            {
              message: userCode.diagnostics[0].messageText,
              lineNumber:
                ts.getLineOfLocalPosition(
                  userCode.diagnostics[0].file,
                  userCode.diagnostics[0].start
                ) - 1
            }
          ]
        };
      }
      d.resolve({
        code: userCode.outputText,
        error
      });
    } catch (e) {}
  } else if (mode === JSModes.BABEL) {
    editor.setOption("mode", modes.babel.tdMimeType);

    try {
      prettier.format(userCode, {
        parser: "babylon",
        plugins: prettierPlugins
      });
      userCode = Babel.transform(userCode, {
        presets: ["latest", "stage-3", "react"]
      }).code;
    } catch (e) {
      const x = e.message.split("\n")[0].split(" ");
      const y = x[x.length - 1];
      const o = y.slice(1, y.length - 1);
      error = {
        lang: "Babel",
        data: [
          {
            lineNumber: o,
            message: e.message
          }
        ]
      };
      // eslint-disable-next-line no-console
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  } else if (mode === JSModes.JSX) {
    editor.setOption("mode", modes.jsx.tdMimeType);
    
    try {
      prettier.format(userCode, {
        parser: "babylon",
        plugins: prettierPlugins
      });
      userCode = Babel.transform(userCode, {
        presets: ["latest", "stage-3", "react"]
      }).code;
    } catch (e) {
      const x = e.message.split("\n")[0].split(" ");
      const y = x[x.length - 1];
      const o = y.slice(1, y.length - 1);

      error = {
        lang: "JSX",
        data: [
          {
            lineNumber: o,
            message: e.message
          }
        ]
      };
      // eslint-disable-next-line no-console
    } finally {
      d.resolve({
        code: userCode,
        error
      });
    }
  }
  return d.promise;
}

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

// called in main js file

// eslint-disable-next-line no-unused-vars
function getPreview({ html, css, js, meta, cssExt, jsExt, mode }) {
  // data is converted to a blob;
  // strictly frontend.
  const consoleJs = window.origin + "/static/preview/console.js";

  const otherScript = [consoleJs];

  const getBlobURL = (code, type) => {
    const blob = new Blob([code], {
      type
    });

    return URL.createObjectURL(blob);
  };

  const defCss = `
\nbody{
    font-family: Helvetica, Arial, sans-serif;
    background: white;
}
    `;

  // eslint-disable-next-line no-undef
  if (mode == JSModes.BABEL) {
    otherScript.push(
      window.origin + "/static/lib/transpilers/babel-polyfill.min.js"
    );
  } else if (mode == JSModes.JSX) {
    otherScript.push(
      window.origin + "/static/lib/transpilers/babel-polyfill.min.js"
    );
  }

  const defUrl = getBlobURL(defCss, "text/css");
  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const externalCss = cssExt.value.split("\n").reduce(function(links, url) {
    return (
      links +
      (url
        ? '\n<link rel="stylesheet" type="text/css" href="' + url + '">'
        : "")
    );
  }, "");
  const externalJs = jsExt.value.split("\n").reduce(function(links, url) {
    return links + (url ? '\n<script src="' + url + '"></script>' : "");
  }, "");
  const externalMeta = meta.value.split("\n").reduce(function(links, url) {
    return links + (url ? url : "");
  }, "");

  const miscScript = otherScript.reduce((script, src) => {
    return script + (src ? "\n <script src='" + src + "'></script>" : "");
  }, "");

  const source = `

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${externalMeta}
        ${externalCss}
        <title>CodeCrumb - ${crumbName.crumb.value}</title>
    </head>
    ${miscScript}
    <body>
    <style>
      ${defCss}
      ${css || ""}
    </style>
        ${html || ""}
    </body>

    ${externalJs}
    <script id="codecrumb-script" src="${jsURL || ""}"></script>

    </html>

    `;

  return getBlobURL(source, "text/html");
}

/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function animate() {
  function classToggler(e) {
    const html = htmlTab.getAttribute("data-tab");

    const css = cssTab.getAttribute("data-tab");
    const js = jsTab.getAttribute("data-tab");
    const tabs = [htmlPen, cssPen, jsPen];
    tabs.forEach(tab => {
      const attr = tab.getAttribute("data-pen");
      if (e.currentTarget.getAttribute("data-tab") === html && attr === html) {
        tab.classList.add("pen-active");
      } else if (
        e.currentTarget.getAttribute("data-tab") === css &&
        attr === css
      ) {
        tab.classList.add("pen-active");
      } else if (
        e.currentTarget.getAttribute("data-tab") == js &&
        attr === js
      ) {
        tab.classList.add("pen-active");
      } else {
        tab.classList.remove("pen-active");
      }
    });
  }
  requestAnimationFrame(function() {
    const tabs = [htmlTab, cssTab, jsTab];

    tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        e.preventDefault();
        const current = e.currentTarget.classList;
        const htmlClass = htmlTab.classList;
        const cssClass = cssTab.classList;
        const jsClass = jsTab.classList;

        //css
        if (
          (!current.contains("active") && htmlClass.contains("active")) ||
          jsClass.contains("active")
        ) {
          htmlClass.remove("active") || jsClass.remove("active");

          current.add("active");
          classToggler(e);
        } //js
        else if (
          (!current.contains("active") && htmlClass.contains("active")) ||
          cssClass.contains("active")
        ) {
          htmlClass.remove("active") || cssClass.remove("active");

          current.add("active");

          classToggler(e);
        }
        //html
        else if (
          (!current.contains("active") && cssClass.contains("active")) ||
          jsClass.contains("active")
        ) {
          cssClass.remove("active") || jsClass.remove("active");

          current.add("active");

          classToggler(e);
        }
      });
    });

    const settings = [
      generalSettings,
      languageSettings,
      customSettings,
      balanceSettings,
      behaviourSettings,
      kbdSettings
    ];

    const settingsTabs = [
      generalTab,
      languageTab,
      customTab,
      balanceTab,
      behaviourTab,
      kbdTab
    ];
    settingsTabs.forEach(tabs => {
      tabs.addEventListener("click", e => {
        const currentClass = e.currentTarget.classList;
        const genClass = generalTab.classList;
        const langClass = languageTab.classList;
        const libClass = customTab.classList;
        const balClass = balanceTab.classList;
        const behClass = behaviourTab.classList;
        const kbdClass = kbdTab.classList;
        // for language

        if (
          (!currentClass.contains("cover-active") &&
            genClass.contains("cover-active")) ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for general
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for balance
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for behaviour
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          balClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for keyboard
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }

        // for lib
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        toggleSettings(tabs);
      });
    });

    function toggleSettings(tabs) {
      settings.forEach(sets => {
        if (tabs == generalTab) {
          sets.classList.remove("settings-active");
          generalSettings.classList.add("settings-active");
        } else if (tabs == languageTab) {
          sets.classList.remove("settings-active");
          languageSettings.classList.add("settings-active");
        } else if (tabs == balanceTab) {
          sets.classList.remove("settings-active");
          balanceSettings.classList.add("settings-active");
        } else if (tabs == behaviourTab) {
          sets.classList.remove("settings-active");
          behaviourSettings.classList.add("settings-active");
        } else if (tabs == kbdTab) {
          sets.classList.remove("settings-active");
          kbdSettings.classList.add("settings-active");
        } else if (tabs == customTab) {
          sets.classList.remove("settings-active");
          customSettings.classList.add("settings-active");
        }
      });
    }
    let isCog = false;
    settingsBtn.addEventListener("click", () => {
      // editorMenuMain.style.animation = "menu-in .1s linear;
      editorMenuMain.style.display = "flex";
      editorMenuMain.style.animation = "none";
    });

    const penModeSettings = [htmlMode, cssMode, jsMode];
    window.addEventListener("click", e => {
      if (e.target === editorMenuMain) {
        if (isCog) {
          penModeSettings.forEach(mode => {
            const cog = mode.firstChild;
            cog.style.color = "#fff";
          });
        }

        editorMenuMain.style.display = "none";
        editorMenuMain.style.animation = "none";
        //
      }
    });

    penModeSettings.forEach(mode => {
      mode.addEventListener("click", e => {
        e.preventDefault();
        const cog = mode.firstChild;
        cog.style.color = "#fa0033";
        toggleLanguageSettings();
        isCog = true;
      });
    });

    function toggleLanguageSettings() {
      settings.forEach(set => {
        if (set.classList.contains("settings-active")) {
          set.classList.remove("settings-active");
          languageSettings.classList.add("settings-active");
        }
      });
      settingsTabs.forEach(tab => {
        if (tab.classList.contains("cover-active")) {
          tab.classList.remove("cover-active");
          languageTab.classList.add("cover-active");
        }
      });
      editorMenuMain.style.animation = "menu-in .1s ease forwards";

      editorMenuMain.style.display = "flex";
      editorMenuMain.style.animation = "none";
    }
  });

  window.addEventListener("load", function() {
    // eslint-disable-next-line no-undef
    loader.firstElementChild.style.animation = "none";
    loader.firstElementChild.style.willChange = "none";
    loader.classList.add("load-off");
    loader.style.display = "none";
  });

  (function() {
    if (!localStorage.__defineEditorPresets__) {
      let __defineEditorPresets__ = {
        skin: "dark",
        editorStyle: "left",
        colorPicker: "default",
        linter: true,
        autoComplete: true,
        autoRunDelay: 2000,
        tabSize: 2,
        indentUnit: 2,
        fontLigature: true,
        preserveLog: true,
        activeLine: true
      };
      localStorage.setItem(
        "__defineEditorPresets__",
        JSON.stringify(__defineEditorPresets__)
      );
    }
  })();
}

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
    codeHeadBg = "transparent",
    codeHeadBorder = "none",
    editorTab = "flex",
    containerHeight = "100vh",
    codeHeadDisplay = "flex"
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
    (this.containerHeight = containerHeight),
      (this.codeHeadDisplay = codeHeadDisplay);
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
    "none"
  );
  tabbed.changeView();
  __setEditorPreset__('editorStyle', "full-view");
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
    "#0f111a",
    "2px solid #13161f",
    "none",
    "calc(100vh - 90px)",
    "flex"
  );
  tabbed.changeView();

  resizeHeight(33.33);
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("editorStyle", "right");
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
    "#0f111a",
    "2px solid #13161f",
    "none",
    "calc(100vh - 90px)",
    "flex"
  );
  tabbed.changeView();

  resizeHeight(33.33);
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("editorStyle", "left");
}

//tab
function tabStyleDefault() {
  resetSplitPane();
  resizePaneX([".code-pen", ".editor-preview"], [44, 56]);
  const resizes = [htmlResize, cssResize, jsResize];

  const tabs = [htmlTab, cssTab, jsTab];
  resizes.forEach(resize => {
    resize.style.display = "none";
  });
  resetTransition();
  tabs.forEach(tab => {
    const attr = tab.getAttribute("data-tab");
    if (tab.classList.contains("active") && attr === "html") {
      jsPen.classList.remove("pen-active");

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
      "transparent",
      "solid",
      "transparent",
      "none",
      "flex",
      "calc(100vh - 130px)",
      "flex"
    );
    tabbed.changeView();
  });
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("editorStyle", "default");
}

//top
function tabStyleTop() {
  resetSplitPane();

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
    "#0f111a",
    "solid",
    "#0f111a",
    "none",
    "none",
    "calc(100vh - 90px)",
    "flex"
  );
  tabbed.changeView();
  //splitCodePaneResizeX([150, 150, 150], 'horizontal')
  resizePaneY([".code-pen", ".editor-preview"], [60, 40]);

  resizeWidth();
  editors.forEach(editor => {
    editor.refresh();
  });
   __setEditorPreset__("editorStyle", "top");
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

    resize.style.transition = "0.3s";
    resizeOne.style.transition = "0.3s";
    resizeTwo.style.transition = "0.3s";

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

    resize.style.transition = "0.3s";
    resizeOne.style.transition = "0.3s";
    resizeTwo.style.transition = "0.3s";

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

    resize.style.transition = "0.3s";
    resizeOne.style.transition = "0.3s";
    resizeTwo.style.transition = "0.3s";

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

    resize.style.transition = "0.3s";
    resizeOne.style.transition = "0.3s";
    resizeTwo.style.transition = "0.3s";

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

    htmlPen.style.transition = "0.3s";
    cssPen.style.transition = "0.3s";
    jsPen.style.transition = "0.3s";

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

    htmlPen.style.transition = "0.3s";
    cssPen.style.transition = "0.3s";
    jsPen.style.transition = "0.3s";

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
    htmlPen.style.transition = "0.3s";
    cssPen.style.transition = "0.3s";
    jsPen.style.transition = "0.3s";

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
    htmlPen.style.transition = "0.3s";
    cssPen.style.transition = "0.3s";
    jsPen.style.transition = "0.3s";

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
    minSize: [200, 200],
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
  };
});
resizeBoth.addEventListener("mousedown", () => {
  resizeFrame.parentElement.style.opacity = "1";
});

resizeBoth.addEventListener("mouseup", () => {
  resizeFrame.parentElement.style.opacity = "0";
});

function showHints(editor) {
  CodeMirror.registerGlobalHelper(
    "hint",
    "emmet",
    function (mode, editor) {
      // Tell `show-hint` module that current helper will provide completions
      return !!editor.getEmmetAbbreviation();
    },
    function (editor, options) {
      // Activate auto-popup, if disabled (see below)
      const marker = editor.findEmmetMarker();
      if (!marker) {
        return;
      }

      clearTimeout(marker.popupDisableTimer);
      marker.autoPopupDisabled = false;

      const completions = editor.getEmmetCompletions();
      return (
        completions && {
          from: completions.from,
          to: completions.to,
          // Transform Emmet completions to ones that supported by `show-hint`
          list: completions.list.map(function (completion) {
            return {
              from: completion.range.from,
              to: completion.range.to,
              render: function (elt) {
                var content = document.createDocumentFragment();
                var label = document.createElement("span");
                label.className = "emmet-label";

                var preview = document.createElement("span");
                preview.className = "emmet-preview";

                content.appendChild(label);
                content.appendChild(preview);

                if (completion.type === "expanded-abbreviation") {
                  // It’s an expanded abbreviation completion:
                  // render preview for it
                  label.className += " emmet-label__expand";
                  label.textContent = "Expand abbreviation";

                  preview.className += " emmet-preview__expand";
                  // Replace tab with a few spaces so preview would take
                  // lesser space
                  preview.textContent = completion.preview.replace(/\t/g, "  ");
                } else {
                  // A regular snippet: render completion abbreviation
                  // and its preview
                  label.textContent = completion.name;
                  preview.textContent = completion.preview;
                }

                elt.appendChild(content);
              },
              hint: function () {
                // Use completions’ `insert()` method to properly
                // insert Emmet completion
                completion.insert();
              }
            };
          })
        }
      );
    }
  );
  // Automatically display Emmet completions when cursor enters abbreviation
  // marker if `markEmmetAbbreviation` option was enabled (true by default)
  editor.on("cursorActivity", function () {
    if (editor.getOption("markEmmetAbbreviation")) {
      const marker = editor.findEmmetMarker();
      if (marker && !marker.autoPopupDisabled) {
        editor.showHint({
          completeSingle: false
        });
      }
    }
  });

  editor.on("startCompletion", function () {
    var marker = editor.findEmmetMarker();
    if (marker) {
      clearTimeout(marker.popupDisableTimer);
      marker.popupDisableTimer = null;
    }
  });
  editor.on("endCompletion", function () {
    var marker = editor.findEmmetMarker();
    if (marker) {
      clearTimeout(marker.popupDisableTimer);
      marker.popupDisableTimer = setTimeout(function () {
        marker.autoPopupDisabled = true;
      }, 30);
    }
  });
}

function cleanFont(x) {
  return x
    .split(",")
    .map(a => {
      if (a.match(/[a-zA-Z]+\s/)) {
        return `"${a.trim(" ")}"`;
      } else {
        return a;
      }
    })
    .join(",");
}

function lint(bool) {
  htmlEditor.setOption("lint", bool);
  cssEditor.setOption("lint", bool);
  jsEditor.setOption("lint", bool);
}
lint(true);

function hint() {
  // eslint-disable-next-line no-undef
  const editors = [htmlEditor, cssEditor, jsEditor];

  showHints(htmlEditor);
  showHints(cssEditor);
  showHints(jsEditor);

  editors.forEach(editor => {
    editor.setOption("extrakeys", {
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },

      "Alt-f": "findPersistent",

      "Ctrl-S": function () {
        if (dataItems.author) {
          if (dataItems.author === "anonymous") return null;
          keyMapSave() || null;
        } else {
          keyMapSave() || null;
        }
      },

      "Ctrl-Enter": function () {
        updatePreview();
      },
      "Alt-J": function () {
        beautifySingleFile(jsEditor, csse.js);
      },
      "Alt-C": function () {
        beautifySingleFile(cssEditor, csse.css);
      },
      "Alt-H": function () {
        beautifySingleFile(htmlEditor, csse.html);
      },
      "Alt-A": function () {
        prettify(htmlEditor, cssEditor, jsEditor);
      },
      "Ctrl-Space": "autocomplete",
      Tab: "emmetExpandAbbreviationAll",
      "Ctrl-E": "emmetExpandAbbreviationAll",
      Enter: "emmetInsertLineBreak",
      "Ctrl-W": "emmetWrapWithAbbreviation",
      "Ctrl-/": "toggleComment"
    });
    editor.setOption("markEmmetAbbreviation", true);

    editor.on("keypress", function (e) {
      if (e.keyCode != 13) {
        editor.showHint({
          completeSingle: false,
          alignWithWord: true,
          closeOnUnfocus: true,
          closeOnBackspace: true
        });
      }
    });
    editor.on("cursorActivity", (cm) => {
      CodeMirror.commands.autocomplete = function (cm) {
        cm.showHint({
          hint: CodeMirror.hint.emoji,
          completeSingle: false,
          alignWithWord: true
        });
      };
    })
  });
}
hint();

function colorPicker() {
  const editors = [htmlEditor, cssEditor];
  editors.forEach(editor => {
    editor.setOption("colorpicker", {
      mode: "edit",


    });
  });
}
colorPicker();


/* eslint-disable no-console */
function settingButtons(
  htmlEditor,
  cssEditor,
  jsEditor,
  editors,
  updatePreview,
  cmDark,
  fontFm,
  sizes,
  keymaps
) {
  let delay;
  let runDelayTimeout = 2000;
  // const editors = [htmlEditor, cssEditor, jsEditor];
  // toggles checkboxs and set their values;
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  Array.from(checkbox).forEach(check => {
    check.addEventListener("change", e => {
      const current = e.currentTarget;
      // conditional check for changes in the line-numbers toggler and adds them.
      if (current.checked && current.name == "numbers") {
        editors.forEach(editor => {
          editor.setOption("lineNumbers", true);
        });
      } else if (!current.checked && current.name == "numbers") {
        editors.forEach(editor => {
          editor.setOption("lineNumbers", false);
        });
      }

      if (current.checked && current.name === "wrap") {
        editors.forEach(editor => {
          editor.setOption("lineWrapping", true);
        });
      } else if (!current.checked && current.name === "wrap") {
        editors.forEach(editor => {
          editor.setOption("lineWrapping", false);
        });
      }

      // conditional check for changes in the active-line toggler and adds them.
      if (current.checked && current.name == "active") {
        editors.forEach(editor => {
          editor.setOption("styleActiveLine", true);
        });
        __setEditorPreset__("activeLine", true);

      } else if (!current.checked && current.name == "active") {
        editors.forEach(editor => {
          editor.setOption("styleActiveLine", false);
        });
        __setEditorPreset__("activeLine", false);
      }

      // conditional check for changes in the auto-complete toggler and adds them.
      if (current.checked && current.name === "complete") {
        hint();
        __setEditorPreset__("autoComplete", true);
      } else if (!current.checked && current.name === "complete") {
        // console.log('untab')

        editors.forEach(editor => {
          editor.setOption("extrakeys", {
            "Ctrl-Q": function (cm) {
              cm.foldCode(cm.getCursor());
            },

            "Alt-f": "findPersistent",

            "Ctrl-Enter": function () {
              updatePreview();
            },

            "Alt-A": function () {
              prettify(htmlEditor, cssEditor, jsEditor);
            },
            "Ctrl-Space": false,

            "Ctrl-/": "toggleComment"
          });
          editor.setOption("markEmmetAbbreviation", false);

          editor.on("keypress", function () {
            editor.closeHint();
          });
          editor.closeHint();
        });
        __setEditorPreset__("autoComplete", false);
      }
      if (current.checked && current.name === "tags") {
        editors.forEach(editor => {
          editor.setOption("autoCloseTags", true);
        });
      } else if (!current.checked && current.name === "tags") {
        editors.forEach(editor => {
          editor.setOption("autoCloseTags", false);
        });

        // console.log('untab')
      }
      if (current.checked && current.name === "brackets") {
        editors.forEach(editor => {
          editor.setOption("autoCloseBrackets", true);
        });
      } else if (!current.checked && current.name === "brackets") {
        editors.forEach(editor => {
          editor.setOption("autoCloseBrackets", false);
        });

        // console.log('untab')
      }

      if (current.checked && current.name == "linter") {
        lint(true);
        __setEditorPreset__("linter", true);
      } else if (!current.checked && current.name == "linter") {
        lint(false);
        __setEditorPreset__("linter", false);
      }

      if (current.checked && current.name == "run") {
        editors.forEach(editor => {
          editor.on("inputRead", function () {
            requestAnimationFrame(() => {
              clearTimeout(delay);
              delay = setTimeout(updatePreview, runDelayTimeout);
            });
            console.clear();
          });
        });
      } else if (!current.checked && current.name == "run") {
        editors.forEach(editor => {
          editor.on("inputRead", function () {
            requestAnimationFrame(() => {
              clearTimeout(delay);
              delay = setTimeout(null, runDelayTimeout);
            });
          });
        });
      }

      if (current.checked && current.name == "preserve-log") {
        current.setAttribute("data-log", "true");
        __setEditorPreset__("preserveLog", true);
      } else if (!current.checked && current.name == "preserve-log") {
        current.setAttribute("data-log", "false");
        __setEditorPreset__("preserveLog", false);
      }

      if (current.checked && current.name == "color-picker") {
        colorPicker();
        document.querySelector(".enable-text").textContent =
          "Disable color picker";
      } else if (!current.checked && current.name == "color-picker") {
        const editors = [htmlEditor, cssEditor, jsEditor];
        editors.forEach(editor => {
          editor.setOption("colorpicker", {
            mode: false
          });
        });
        document.querySelector(".enable-text").textContent =
          "Enable color picker";
      }
    });
  });



  // event for font-size settings;
  sizes.addEventListener("change", changeFontSize);
  customFSize.addEventListener("keypress", overRideFontSize);

  function changeFontSize() {
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    const themeFSize = document.querySelectorAll(".CodeMirror");
    Array.from(themeFSize).forEach(fSize => {
      const selectedSize = parseInt(
        this.selectedOptions[0].getAttribute("name")
      );
      customFSize.value = selectedSize;


      fSize.style.fontSize = `${parseInt(customFSize.value, 10)}px`;
    });
  }

  function overRideFontSize(e) {
    if (e.keyCode === 13) {
      if (dataItems.author) {
        if (
          dataItems.arg === true &&
          dataItems.author != "anonymous"
        ) {
          keyMapSave();
        }
      }
      const themeFSize = document.querySelectorAll(
        ".CodeMirror"
      );
      Array.from(themeFSize).forEach(fSize => {
        const selectedSize = parseInt(this.value);

        if (selectedSize < 5) {
          fSize.style.fontSize = `${0}px`;
        } else {
          fSize.style.fontSize = `${selectedSize}px`;
        }
      });
      customFSize.blur();
    }
  }



  //tab size

  const tabSize = document.querySelector(".tab-size");

  tabSize.addEventListener("change", changeTabSize);

  function changeTabSize() {
    const cmTab = document.querySelector(".tab-num");
    const selectedTab = parseInt(this.selectedOptions[0].value, 10);
    htmlEditor.setOption("indentUnit", selectedTab);
    cssEditor.setOption("indentUnit", selectedTab);
    jsEditor.setOption("indentUnit", selectedTab);
    cmTab.textContent = `${selectedTab}`;
    __setEditorPreset__("tabSize", selectedTab);
  }


  // indent unit

  const indentUnit = document.querySelector(".indent-unit");

  // event listener for user option to select indent unit.
  indentUnit.addEventListener("change", indentToggled);

  function indentToggled() {
    const indented = parseInt(indentUnit.selectedOptions[0].textContent);
    htmlEditor.setOption("indentUnit", indented);
    cssEditor.setOption("indentUnit", indented);
    jsEditor.setOption("indentUnit", indented);
__setEditorPreset__("indentUnit", indented);
  }





  // event for font-family settings;
  fontFm.addEventListener("change", changeFontFamily);
  fontFmCustom.addEventListener("keypress", overRideFont);
  fontFmCustom.addEventListener("blur", overRideFont);


  function changeFontFamily() {
    const cm = document.querySelectorAll(".CodeMirror");
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    Array.from(cm).forEach(fm => {
      const selFont = this.selectedOptions[0].getAttribute("name");

      fontFmCustom.value = `${selFont}, Monospace`;
      fm.style.fontFamily = fontFmCustom.value;
    });
  }






  // custom fonts overides predefined fonts.
  // using predefined fonts is just setting the overRiddenFont.

  function overRideFont(e) {
    if (e.type === "keypress") {
      if (e.keyCode === 13) {
        const cm = document.querySelectorAll(".CodeMirror");

        Array.from(cm).forEach(fSize => {
          const selFont = fontFmCustom.value;
          const splitfont = cleanFont(selFont);
          fSize.style.fontFamily = `${splitfont}, monospace`;
        });
        fontFmCustom.blur();
        if (dataItems.author) {
          if (
            dataItems.arg === true &&
            dataItems.author != "anonymous"
          ) {
            keyMapSave();
          }
        }
      }
    } else if (e.type === "blur") {

      const cm = document.querySelectorAll(".CodeMirror");

      Array.from(cm).forEach(fSize => {
        const selFont = fontFmCustom.value;
        const splitfont = cleanFont(selFont);
        fSize.style.fontFamily = `${splitfont}, monospace`;
      });
      fontFmCustom.blur();
      if (dataItems.author) {
        if (
          dataItems.arg === true &&
          dataItems.author != "anonymous"
        ) {
          keyMapSave();
        }
      }

    }
  }




  // event for theme settings;
  cmDark.addEventListener("change", changeEditorThemeDark);

  function changeEditorThemeDark() {
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    const editors = [htmlEditor, cssEditor, jsEditor];

    editors.forEach(editor => {
      const selectedTheme = this.selectedOptions[0].getAttribute("name");

      editor.setOption("theme", selectedTheme);
    });
  }





  // event for keymap settings;
  keymaps.addEventListener("change", changeKeymaps);

  function changeKeymaps() {
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    const editors = [htmlEditor, cssEditor, jsEditor];

    editors.forEach(editor => {
      const selectedKeyMap = this.selectedOptions[0].getAttribute("name");

      editor.setOption("keyMap", selectedKeyMap);
    });
  }





  // handles font-ligatures.
  fontLigatures.addEventListener("change", function () {
    const cmPre = document.querySelectorAll(".CodeMirror pre");
    Array.from(cmPre).forEach(cm => {
      if (fontLigatures.checked) {
        cm.style.fontVariantLigatures = "contextual";
      } else if (!fontLigatures.checked) {
        cm.style.fontVariantLigatures = "none"
      }
    })
    if(fontLigatures.checked){
      __setEditorPreset__("fontLigature", true);
    }else{
      __setEditorPreset__("fontLigature", false);
    }
  })




  // color picker type
  colorPickerType.addEventListener("change", function () {
    const editors = [htmlEditor, cssEditor];
    editors.forEach(editor => {
      editor.setOption("colorpicker", false);
      editor.setOption("colorpicker", {
        mode: "edit",
        type: colorPickerType.selectedOptions[0].value
      });
    });
    __setEditorPreset__("skin", colorPickerType.selectedOptions[0].value);
  })
  autoRunDelay.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      runDelayTimeout = parseInt(this.value, 10);
      autoRunDelay.blur();
      __setEditorPreset__("autoRunDelay", parseInt(this.value, 10));
    }
  })

}

function changeEditorSettings(
  htmlEditor,
  cssEditor,
  jsEditor,
  editorSettings,
  cmDark,
  fontFm,
  sizes,
  keymaps
) {
  const fontSize = sizes.namedItem(editorSettings.fSize);
  const font = sizes.namedItem(editorSettings.font.split(",")[0]);
  const theme = cmDark.namedItem(editorSettings.theme);

  const keymap = keymaps.namedItem(editorSettings.keymap);

  font ? fontFm.options.selectedIndex = font.index : null
  fontSize ? sizes.options.selectedIndex = fontSize.index : null;
  cmDark.options.selectedIndex = theme.index;
  keymaps.options.selectedIndex = keymap.index;

  const themeFSize = document.querySelectorAll(".CodeMirror");
  const k = Array.from(themeFSize);
  const m = [k[1], k[2], k[3]];
  m.forEach(size => {
    customFSize.value = editorSettings.fSize;
    size.style.fontSize = `${parseInt(customFSize.value, 10)}px`;
    const splitfont = editorSettings.font;
    size.style.fontFamily = `${splitfont}, monospace`;
    // just a little string hack.
    const x = splitfont
      .split(`"`)
      .join(" ")
      .split(",")
      .map(a => a.trim())
      .join(", ");
    fontFmCustom.value = `${x}`;

  });

  const editors = [htmlEditor, cssEditor, jsEditor];

  editors.forEach(editor => {
    editor.setOption("theme", editorSettings.theme);

    editor.setOption("keyMap", editorSettings.keymap);
  });
}

function handleFooterLnCol() {
  const edLn = document.querySelector(".ln");
  const edCh = document.querySelector(".ch");
  const selected = document.querySelector(".line-selected")
  editors.forEach(editor => {
    const editorMode = document.querySelector(".editor-mode");
    editor.on("cursorActivity", () => {
      const cur = editor.getCursor();
      let ln = cur.line;
      let col = cur.ch;
      edLn.innerText = `${ln}`;
      edCh.innerText = `${col}`;
      if (editor === htmlEditor) {
        editorMode.style.opacity = "1";
        editorMode.innerText = `${csse.html}`;
        editorMode.style.margin = "4px";

        editorMode.style.padding = "5px";
      } else if (editor === cssEditor) {
        editorMode.innerText = `${csse.css}`;
        editorMode.style.opacity = "1";
        editorMode.style.margin = "4px";
        editorMode.style.padding = "5px";
      } else if (editor === jsEditor) {
        editorMode.style.opacity = "1";
        if (csse.js === "babel") {
          editorMode.innerText = "javascript with babel"
        } else if (csse.js === "jsx") {
          editorMode.innerText = "javascript with react"
        } else {
          editorMode.innerText = `${csse.js}`
        }

        editorMode.style.margin = "4px";
        editorMode.style.padding = "5px";
      }
      const selectedLen = editor
        .getSelection()
        .split("\n")
        .join("").length;
      selectedLen >= 1 ? selected.textContent = `(${selectedLen} selected)` : selected.textContent = ``;

    });
  });
}
handleFooterLnCol();
toggleLinter.addEventListener("click", () => {
  const linterCh = document.querySelector("#linter-check");
  console.log(linterITag, linterCh.checked);
  if (linterCh.checked) {
    toggleLinter.setAttribute("data-label", "Linter: off");
    linterITag.innerText = "clear";
    linterCh.checked = false;
    lint(false);
  } else if (!linterCh.checked) {
    toggleLinter.setAttribute("data-label", "Linter: on");
    linterITag.innerText = "done";
    linterCh.checked = true;
    lint(true);
  }
});


editorSkins.addEventListener("change", (e) => {
  const skins = {
    dark: {
      "--editor-color": "rgba(19, 22, 31, 1)",
      "--page-color": "#0f111a",
      "--def-color": "rgba(108, 103, 131, 0.61)",
      "--def-color-solid": "rgba(108, 103, 131, 1)",
      "--settings-color": "#aaa",
      "--def-bg": "#1f222c",
      "--light": "white",
      "--light-solid": "#ddd",
      "--light-solid-2": "#ccc",
      "--svg-fill": "#6c6783",
      "--settings-border-2": "rgba(38, 44, 63, 0.801)",
      "--textarea-bg": "rgba(19, 22, 31, 1)",
      "--textarea-border": "rgba(38, 44, 63, 0.801)"
    },
    darkplus: {
      "--editor-color": "#11131A",
      "--page-color": "#090b10",
      "--def-color": "rgba(108, 103, 131, 0.61)",
      "--def-color-solid": "rgba(108, 103, 131, 1)",
      "--settings-color": "#aaa",
      "--def-bg": "#1f222c",
      "--light": "white",
      "--light-solid": "#ddd",
      "--light-solid-2": "#ccc",
      "--svg-fill": "#6c6783",
      "--settings-border-2": "rgba(38, 44, 63, 0.801)",
      "--textarea-bg": "rgba(20, 24, 29, 0.361)",
      "--textarea-border": "rgba(116, 124, 148, 0.7)"
    }
  };
  const value = editorSkins.selectedOptions[0].value;
  const colors = skins[value];
  let i;
  for (i in colors) {
    document.documentElement.style.setProperty(i, colors[i])
  }
})


function keyboardShortCuts(updatePreview, htmlEditor, cssEditor, jsEditor) {
    document.addEventListener("keyup", (e) => {
        // console.log(e)

        if (e.altKey && e.keyCode == 80) {


            editorMenuMain.style.animation = "blink-in .2s ease-in-out";
            editorMenuMain.style.display = "flex";
        }
        if (e.altKey && e.keyCode == 82) {
            // ALT + R
            // console.log(e.code);
            updatePreview()
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
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function postError(d) {
  if (d) {
    let errorCount = parseInt(outnum.getAttribute("data-error"));
    errorCount++;
    outnum.setAttribute("data-error", `${errorCount}`);
    const mess = d.message;
    const language = d.lang;

    const errorOutput = `\n[${language.toUpperCase()}] ${mess}`;

    // updates the  console.
    consoleEditor.replaceRange(
      errorOutput,
      CodeMirror.Pos(consoleEditor.lastLine())
    );

    outnum.textContent = `${errorCount}`;
  }
}
function prettify(htmlEditor, cssEditor, jsEditor) {
  let html,
    css,
    js,
    error,
    htmlParser = modes[csse.html].parser,
    cssParser = modes[csse.css].parser,
    jsParser = modes[csse.js].parser;

  try {
    html = prettier.format(htmlEditor.getValue(), {
      parser: htmlParser,
      plugins: prettierPlugins
    });
  } catch (e) {
    error = {
      message: e.message,
      lang: "HTML"
    };
    postError(error);
  }

  try {
    css = prettier.format(cssEditor.getValue(), {
      parser: cssParser,
      plugins: prettierPlugins
    });
  } catch (e) {
    error = {
      message: e.message,
      lang: "CSS"
    };
    postError(error);
  }

  try {
    js = prettier.format(jsEditor.getValue(), {
      parser: jsParser,
      plugins: prettierPlugins
    });
  } catch (e) {
    error = {
      message: e.message,
      lang: "JS"
    };
    postError(error);
  }

  returnCursor(htmlEditor, html);

  returnCursor(cssEditor, css);

  returnCursor(jsEditor, js);
}

function returnCursor(editor, val) {
  try {
    const cur = editor.lastLine();
    editor.getDoc().setValue(val);
    editor.setCursor(cur, 0);
  } catch (e) {
    console.log(e.message);
  }
}

function beautifySingleFile(editor, mode) {
  let code,
    error,
    Codeparser = modes[mode].parser;

  try {
    code = prettier.format(editor.getValue(), {
      parser: Codeparser,
      plugins: prettierPlugins
    });
  } catch (e) {
    error = {
      message: e.message,
      lang: mode.toUpperCase()
    };
    postError(error);
  }
  returnCursor(editor, code);
}

function preBeautify(editor, code, mode) {
  let formattedCode,
    error,
    Codeparser = modes[mode].parser;

  try {
    formattedCode = prettier.format(code, {
      parser: Codeparser,
      plugins: prettierPlugins
    });
  } catch (e) {
    error = {
      message: e.message,
      lang: mode.toUpperCase()
    };
    postError(error);
  }
  editor.getDoc().setValue(formattedCode);
}

function beautifyExport(code, mode) {
  let formattedCode;

  try {
    formattedCode = prettier.format(code, {
      parser: mode,
      plugins: prettierPlugins
    });
  } catch (e) {
    formattedCode = code;
  }
  return formattedCode;
}

class Timer {
  constructor(restTime, beBackTime, stopwatch, rest) {
    this.restTime = restTime;
    this.beBackTime = beBackTime;
    this.stopwatch = stopwatch;
    this.rest = rest;
    this.paused = false;
    this.running = false;
    this.isActive = false;
    this.__onBreak = false;
    this.time = 0;
    this.timerActive;
    this.timeInt;
  }
  startTimer() {
    clearTimeout(this.timerActive);
    if (!this.running) {
      this.paused = false;
    }

    if (!this.paused) {
      const seconds = Math.floor(this.time % 60);

      const mins = Math.floor((this.time / 60) % 60);

      const hr = Math.floor(this.time / 3600);

      this.time++;

      const c_seconds = seconds < 10 ? `0${seconds}` : seconds;
      const c_minutes = mins < 10 ? `0${mins}` : mins;
      const c_hours = hr < 10 ? `0${hr}` : hr;

      this.stopwatch.textContent = `${c_hours}:${c_minutes}:${c_seconds}`;
      this.stopwatch.style.color = "#fff";

      this.running = true;
      this.isActive = true;
      this.timerActive = setTimeout(() => this.startTimer(), 1000);
    }
  }
  pauseTimer() {
    if (this.running) {
      this.paused = true;
      clearTimeout(this.timerActive);
      this.running = false;
      this.stopwatch.style.color = "rgba(108,103,131,0.61)";
    }
  }
  restartTimer() {
    if (this.running) {
      this.time = 0;
      this.running = false;
      clearTimeout(this.timerActive);
      this.startTimer();
      this.stopwatch.style.color = "#fff";
    }
  }
  stopTimer() {
    if (this.__onBreak) return;
    this.time = 0;
    clearTimeout(this.timerActive);
    this.running = false;
    this.isActive = false;
    this.stopwatch.textContent = "00:00:00";
    this.stopwatch.style.color = "#ffffff";
  }
  getBreakTime(seconds) {
    if (this.isActive) {
      clearInterval(this.timeInt);
      this.__onBreak = true;
      const now = Date.now();
      const then = now + seconds * 1000;
      this.displayBreakTime(seconds);
      this.getBreakEnd(then);
      timer.pauseTimer();
      this.timeInt = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
          clearInterval(this.timeInt);
          this.__onBreak = false;
          if (this.paused && this.isActive) {
            this.startTimer();
          }
          this.beBackTime.textContent = "00:00";
          this.beBackTime.style.color = "rgba(108,103,131,0.61)";
          this.restTime.style.color = "rgba(108,103,131,0.61)";
          Array.from(rest).forEach(r => {
            r.classList.remove("rest-clicked");
          });
          return;
        }
        this.displayBreakTime(secondsLeft);
      }, 1000);
    }
  }
  displayBreakTime(seconds) {
    const remainingHours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds / 60) % 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const newHour = remainingHours < 10 ? `0${remainingHours}` : remainingHours;
    const newMin =
      remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
    const newSec =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    this.restTime.textContent = `${newHour}:${newMin}:${newSec}`;
    this.restTime.style.color = "#fff";
  }
  getBreakEnd(timestamp) {
    const future = new Date(timestamp);
    const futureHours = future.getHours();
    const futureMinutes = future.getMinutes();
    const newHour = futureHours > 12 ? futureHours - 12 : futureHours;

    this.beBackTime.textContent = `${newHour < 10 ? "0" + newHour : newHour}:${
      futureMinutes < 10 ? "0" + futureMinutes : futureMinutes
    }`;
    this.beBackTime.style.color = "#fff";
  }
  displayDate() {
    const dateItem = document.querySelector(".balance-date");

    // eslint-disable-next-line no-undef
    const date = moment().format("dddd, MMMM Do, YYYY");
    dateItem.textContent = date;
  }
}

// create a instance of timer
const restTime = document.querySelector(".rest-time");
const beBackTime = document.querySelector(".be-back-time");
const rest = document.querySelectorAll(".rest");
const stopwatch = document.querySelector(".elapsed");
const timer = new Timer(restTime, beBackTime, stopwatch, rest);

// both utils function are called here.
Array.from(rest).forEach(rt => {
  rt.addEventListener("click", setBreak);
  // rt.style.backgroundColor
});

Array.from(rest).forEach(rt => {
  rt.addEventListener("click", function(e) {
    if (!timer.isActive) return;

    if (!this.classList.contains("rest-clicked")) {
      Array.from(rest).forEach(r => {
        r.classList.remove("rest-clicked");
      });
      this.classList.add("rest-clicked");
    }
  });
});

const start = document.querySelector(".start-timer");
const pause = document.querySelector(".pause-timer");
const restart = document.querySelector(".restart-timer");
const stop = document.querySelector(".stop-timer");
let __startTimer = true;

function setBreak() {
  const time = parseInt(this.dataset.minute * 60);

  // stopwatch.style.color = "#ffffff";
  timer.getBreakTime(time);
}
document.balanceForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const time = parseInt(this.minutes.value * 60);
  this.reset();
  timer.getBreakTime(time);
});

start.addEventListener("click", function() {
  if (__startTimer) {
    timer.startTimer();
    // start.textContent = "Stop timer";
    __startTimer = false;
  }
});

pause.addEventListener("click", function() {
  timer.pauseTimer();

  __startTimer = true;
});
restart.addEventListener("click", function() {
  timer.restartTimer();
});

stop.addEventListener("click", function() {
  timer.stopTimer();
  __startTimer = true;
});
timer.displayDate();


const consoleClose = document.querySelector(".out-close");
const error = document.querySelector(".console-label");
const consoleBtnITag = document.querySelector(".opc");
const closeConsole = document.querySelector(".to-close");
const fullscreen = document.querySelector(".to-fullscreen");
const exitFullscreen = document.querySelector(".exit-fullscreen");

class ProxyConsole {
  constructor(
    error,

    consoleText,

    consoleElement,

    consoleCont,
    logElement,
    consoleBar,
    consoleInput
  ) {
    this.consoleClosed = true;
    this.errorElement = error;
    this.consoleText = consoleText;
    this.consoleElement = consoleElement;
    this.consoleCont = consoleCont;
    this.logElement = logElement;
    this.consoleBar = consoleBar;
    this.consoleInput = consoleInput;
    this.dashes = "---------------------------------------";
    this.word = "console.log( (89 * 78) / (64 % 6) - (90 + 120) )";
    this.time = 0;
  }
  printToConsole(e) {
    const message = !e.data.error
      ? {
          lang: "JS",
          data: {
            message: e.data.message
          }
        }
      : {
          lang: "JS",
          data: {
            message: e.data.message,
            lineNumber: e.data.lineno,
            columnNumber: e.data.colno,
            src: e.source
          }
        };
    this.printMessage(message, e);
  }
  printMessage(x, y) {
    if (x && y.data.error) {
      this.updateErrorCount();
      const mess = x.data.message;
      const language = x.lang;
      const lineNo = x.data.lineNumber;
      const colNo = x.data.columnNumber;

      const errorOutput = `\n${
        this.dashes
      }\n[${language.toUpperCase()}] ${mess} \n\t\t\t\t at main(${lineNo}:${colNo})\n${
        this.dashes
      }`;

      // updates the  console.

      // check if user wants to preserve the logs..
      if (this.logElement.checked) {
        this.consoleElement.replaceRange(
          errorOutput,
          CodeMirror.Pos(this.consoleElement.lastLine() + 1)
        );
      } else if (!this.logElement.checked) {
        this.consoleElement.getDoc().setValue(errorOutput);
      }

      // checks if console is opened and scrolls it into view.
      if (!this.consoleClosed) {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }
      // updates textContent / error numbers and set text color.
      let eCount = parseInt(this.errorElement.getAttribute("data-error"));
      this.errorElement.textContent = `${eCount}`;
    } else if (x && y.data.console) {
      // gets response from iframe.
      const mess = x.data.message;
      const language = x.lang;
      // formats console output
      const consoleOutput = `\n${
        this.dashes
      }\n[${language.toUpperCase()}] ${mess}`;

      // updates the console.
      // check if user wants to preserve the logs...
      if (this.logElement.checked) {
        this.consoleElement.replaceRange(
          consoleOutput,
          CodeMirror.Pos(this.consoleElement.lastLine() + 1)
        );
      } else if (!this.logElement.checked) {
        this.consoleElement.getDoc().setValue(consoleOutput);
      }

      // checks if console is opened and scrolls it into view.
      if (!this.consoleClosed) {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }
    } else if (x && y.data.clear) {
      // clears console
      this.clearProxyConsole();
      // scrolls to view.
      if (!this.consoleClosed) {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }
    }
  }
  updateErrorCount() {
    let eCount = parseInt(this.errorElement.getAttribute("data-error"));
    const errorCount = ++eCount;
    let consoleBError = parseInt(this.consoleBar.getAttribute("data-label"));
    consoleBError++;
    this.errorElement.setAttribute("data-error", `${errorCount}`);
    consoleBError > 1
      ? consoleBar.setAttribute("data-label", `${consoleBError} errors.`)
      : consoleBar.setAttribute("data-label", `${consoleBError} error.`);
  }
  clearProxyConsole() {
    let eCount = parseInt(this.errorElement.getAttribute("data-error"));
    const cleared = `# Console was cleared.`;

    this.consoleElement.getDoc().setValue(cleared);
    this.errorCount = 0;
    this.errorElement.setAttribute("data-error", `${0}`);
    this.consoleBar.setAttribute("data-label", "0 errors");
    this.errorElement.textContent = `${0}`;

    console.clear();
  }
  hideConsole() {
    this.consoleCont.classList.add("is_minimised");

    this.consoleClosed = true;
  }
  showConsole() {
    this.consoleCont.classList.remove("is_minimised");
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }, 500);
    });
    this.consoleClosed = false;
  }
  evaluateConsoleInput() {
    function consoleEval(x) {
      return preview.contentWindow.Function(
        '"use strict"; return (' + x + ")"
      )();
    }
    this.consoleElement.replaceRange(
      `\n${this.dashes}\n'>>>'\t${this.consoleInput.value}`,
      CodeMirror.Pos(this.consoleElement.lastLine() + 1)
    );
    try {
      consoleEval(`console.log(${this.consoleInput.value})`);
    } catch (e) {
      let error = e.message.split("\n")[0];
      this.consoleElement.replaceRange(
        `\n${this.dashes}\n'<<<'\t${error}`,
        CodeMirror.Pos(this.consoleElement.lastLine() + 1)
      );
      this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
    }

    this.consoleInput.value = "";
  }
  typeWrite() {
    if (this.time < this.word.length) {
      let msg = this.word.charAt(this.time);
      let recent = this.consoleInput.getAttribute("placeholder") + msg;
      this.consoleInput.setAttribute("placeholder", recent);
      this.time++;
      setTimeout(() => this.typeWrite(), 90);
    }
  }
}

// eslint-disable-next-line no-undef
const proxyConsole = new ProxyConsole(
  error,
  consoleBtn,
  consoleEditor,
  consoleOutput,
  preserveLog,
  consoleBar,
  consoleInput
);

window.addEventListener("message", function(e) {
  proxyConsole.printToConsole(e);
});

// eslint-disable-next-line no-undef
clearConsole.addEventListener("click", () => {
  proxyConsole.clearProxyConsole();
});

consoleBtn.addEventListener("click", () => {
  consoleBtnITag.innerText = "visibility";
  proxyConsole.showConsole();
  proxyConsole.typeWrite();
});

closeConsole.addEventListener("click", () => {
  consoleBtnITag.innerText = "visibility_off";
  consoleOutput.style.transition =
    "transform .4s cubic-bezier(.38,.39,.28,.95)";
  proxyConsole.hideConsole();
  consoleOutput.style.height = "66.66%";
});

consoleInput.addEventListener("focus", updatePreview, {
  once: true
});
consoleInput.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    proxyConsole.evaluateConsoleInput();
  }
});

fullscreen.addEventListener("click", e => {
  consoleOutput.style.height = "100%";
  consoleOutput.style.transition = "height .4s cubic-bezier(.38,.39,.28,.95)";
});

exitFullscreen.addEventListener("click", e => {
  consoleOutput.style.height = "66.66%";
  consoleOutput.style.transition = "height .4s cubic-bezier(.38,.39,.28,.95)";
});

function exportToZip() {
  const getHTMLDist = HtmlCompile(htmlEditor, csse.html);
  const getCSSDist = CSSCompile(cssEditor, csse.css);
  const getJSDist = JSCompile(jsEditor, csse.js);

  Promise.all([getHTMLDist, getCSSDist, getJSDist]).then(data => {
    const distHTML = data[0].code;
    const distCSS = data[1].code;
    const distJS = data[2].code;
    formatExport(distHTML, distCSS, distJS);
  });

  function formatExport(html, css, js) {
    const name = crumbName.crumb.value;
    const externalJs = jsLib.value.split("\n").reduce(function(links, url) {
      return links + (url ? '\n<script src="' + url + '"></script>' : "");
    }, "");
    const externalCss = cssLib.value.split("\n").reduce(function(links, url) {
      return (
        links + (url ? '\n<link rel="stylesheet" href="' + url + '">' : "")
      );
    }, "");

    const formatHTML = `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          ${metaLib.value}
          <title>${name}</title>
          ${externalCss}
          ${externalJs}
          <link href="./style.css" rel="stylesheet">
      </head>
      <body>
          ${html}
          <script src="./script.js"></script>
      </body>
  </html>
    `;
    const path = window.location.href;
    const url = window.location.pathname.split("/")[3];
    const fileExtensions = {
      html: {
        html: "html",
        pug: "pug",
        markdown: "markdown"
      },
      css: {
        css: "css",
        less: "less",
        scss: "scss",
        sass: "sass",
        stylus: "styl"
      },
      js: {
        javascript: "js",
        typescript: "ts",
        coffeescript: "coffeescript",
        babel: "js",
        jsx: "jsx"
      }
    };
    const TOZIP = JSON.stringify({
      src: {
        html: htmlEditor.getValue(),
        css: cssEditor.getValue(),
        js: jsEditor.getValue(),
        htmlExt: fileExtensions.html[csse.html],
        cssExt: fileExtensions.css[csse.css],
        jsExt: fileExtensions.js[csse.js]
      },
      dist: {
        html: beautifyExport(formatHTML, "html"),
        css: beautifyExport(css, "css"),
        js: beautifyExport(js, "babylon")
      },
      url: url,
      README: `Happy coding! 🚀\n\n#Introducton. \nA Crumb created at CodeCrumb.io. Original URL: [${
        crumbName.crumb.value
      }](${path}).`
    });

    sendDATA(TOZIP);
  }
  function sendDATA(res) {
    const org = window.location.origin;
    fetch(`${org}/crumbs/exports`, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      cache: "no-cache",
      credentials: "include",
      body: res
    })
      .then(res => res.json())
      .then(data => {
        window.location.href = `${window.origin}/crumbs/exports/${
          data.request
        }`;
        exportFile.textContent = "Export as ZIP";
      })
      .catch(err => new Error(err));
  }
}

//# sourceMappingURL=maps/utils.js.map

//# sourceMappingURL=maps/app.bundle.two.js.map
