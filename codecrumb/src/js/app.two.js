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
  consoleInput,
  resizeFrame,
  editorSkins,
  consoleOutput,
  tabSize,
  indentUnit,
  linterCh,
  activeLineCh,
  autoCompleteCh,
  footerLeft,
  footerRight,
  loopTimeout
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
      "Ctrl-Enter": updatePreview,
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
      examp : JSON.parse(snippetFormatted),
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
  theme: "console-code",

  readOnly: true,
  lineWrapping: true,
  mode: "jsx",
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: true,
  scrollbarStyle: "simple",
  disableInput: true,
  showCursorWhenSelecting: true,
  extraKeys: {
    Tab: false
  },
  foldGutter: true,
  gutters: ["CodeMirror-foldgutter"]
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

    const dashes = "----------------------------------------";

    const errorOutput = `\n${dashes}\n[${language.toUpperCase()}] # ${mess} \n\t\t\t\t # at line ${lineNo}\n${dashes}`;

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

crumbName.crumb.addEventListener("blur", e => {
  if(e.target.value === "" || e.target.value.length < 1){
    e.target.value = "Unnamed Crumb"
  }
});
crumbName.crumb.addEventListener("keypress", e => {
 
  if (e.keyCode === 13) {
    if(e.target.value === "" || e.target.value.length < 1){
      e.target.value = "Unnamed Crumb"
    }
    keyMapSave();
    crumbName.crumb.blur()
  }
});
crumbName.addEventListener("submit", e => {
  e.preventDefault()
});
function __setEditorPreset__(type, value) {
  if (localStorage.__defineEditorPresets__) {
    const x = JSON.parse(localStorage.__defineEditorPresets__);
    if(!x.type){
      const addType = {...x, [type]: value};
      localStorage.setItem(
        "__defineEditorPresets__", JSON.stringify(addType))
    }else{
    localStorage.setItem(
      "__defineEditorPresets__",
      JSON.stringify({
        ...x,
        [type]: value
      })
    )}
  }else if (!localStorage.__defineEditorPresets__) {
      let __defineEditorPresets__ = {
        skin: "dark",
        layout: "left",
        colorPicker: "default",
        linter: true,
        autoComplete: true,
        runDelayTimeout: 2000,
        tab: 2,
        indent: 2,
        fontLigatures: true,
        activeLine: false,
        loopTimeout: 1000
      };
      localStorage.setItem(
        "__defineEditorPresets__",
        JSON.stringify(__defineEditorPresets__)
      );
      
      const x = JSON.parse(localStorage.__defineEditorPresets__);
      localStorage.setItem(
        "__defineEditorPresets__",
        JSON.stringify({
          ...x,
          [type]: value
        })
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
  const tabSize = document.querySelector(".tab-size");
  const indentUnit = document.querySelector(".indent-unit");
  const linterCh = document.querySelector("#linter-check");
  const activeLineCh = document.querySelector("#active-line");
  const autoCompleteCh = document.querySelector("#complete");
  const footerLeft = document.querySelector(".footer-left");
  const footerRight = document.querySelector(".footer-right");
  const loopTimeout = document.querySelector("#loop-timeout");

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
    consoleInput,
    resizeFrame,
    editorSkins,
    consoleOutput,
    tabSize,
    indentUnit,
    linterCh,
    activeLineCh,
    autoCompleteCh,
    footerLeft,
    footerRight,
    loopTimeout
  };
}
window.onbeforeunload = function () {
  if (htmlChangeNum > 0 || cssChangeNum > 0 || jsChangeNum > 0) {
    return "Changes you made have not been saved, Do you still want to reload?";
  } else return;
};