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
  customSettings,
  customTab,
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
  userValue,
  cmDark,
  keymaps,
  fontFm,
  sizes,
  preset,
  consoleText,
  out,
  c_name,
  clearConsole,
  htmlPre,
  cssPre,
  jsPre,
  saveAnonCrumb,
  snippetSource,
  outnum,
  consoleBtn,
  preserveLog,
  htmlChangesMade,
  cssChangesMade,
  jsChangesMade,
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

const csse = {
  html: "html",
  css: "css",
  js: "javascript"
};
// this code below doesn't to anything
// just prevents error caused by sharing js files between to html fils
// crazy naming convention? i know!!.
const dataItems = {
  author: false
};

const dataItem = userValue.value;
let jsChangeNum = 0,
  cssChangeNum = 0,
  htmlChangeNum = 0,
  saveCrumbClicked = false,
  delay;

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

animate();

function crumbEditor(mode) {
  return {
    mode: mode,
    lineNumbers: true,
    theme: "andromeda",
    scrollbarStyle: "simple",

    autoCloseTags: true,

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
    undoDepth: 500,
    showCursorWhenSelecting: true,
    matchTags: {
      bothTags: true
    },

    _extraKeys: {
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Alt-f": "findPersistent",
      "Ctrl-Enter":updatePreview,
      "Alt-A": function () {
        prettify(htmlEditor, cssEditor, jsEditor);
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
      Tab: "emmetExpandAbbreviationAll",
      "Ctrl-E": "emmetExpandAbbreviationAll",
      Enter: "emmetInsertLineBreak",
      "Ctrl-Space": "autocomplete",
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
    _emmet: snippetFormatted == "None" ? examp : JSON.parse(snippetFormatted),
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

(function () {
  // html default value
  const htmlDefValue = `<!-- Every code written here is placed within the body tag -->
  <div class=\"foo\" bar=\"baz\">Hello World</div>`;
  htmlEditor.setOption("value", htmlDefValue);

  // css default value
  const cssDefValue = `/* toggle the settings button to use a preprocessor, like SCSS */
  body {
    font-family: "Raleway", sans-serif;
    color: #222222;
    font-size: 2em;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(180deg, #ffffff 0%, #6284ff 50%, #ff0000 100%)
  }
  .foo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }`;
  cssEditor.setOption("value", cssDefValue);

  // javascript default value
  const jsDefValue = `/* Click the Console button to view your logs */
  const codeCrumb = x => {
     console.log("Hey "+ x + ", Press Alt-R or Click Run to Preview your code.");
    };
    codeCrumb("Programmer");`;
  jsEditor.setOption("value", jsDefValue);

  consoleEditor.setOption("value", "# Your logs will appear here.... ");
  beautifySingleFile(htmlEditor, csse.html);
  beautifySingleFile(cssEditor, csse.css);
  beautifySingleFile(jsEditor, csse.js);
})();
const editors = [htmlEditor, cssEditor, jsEditor];

function setPreload(bool, path = false, e = false) {
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

  const getPreload = JSON.stringify({
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
    isNew: true,
    editorSettings: {
      keymap: keymaps.selectedOptions[0].getAttribute("name"),
      font: fontFm.selectedOptions[0].getAttribute("name"),
      theme: cmDark.selectedOptions[0].getAttribute("name"),
      fSize: sizes.selectedOptions[0].getAttribute("name")
    }
  });

  if (bool) {
    const org = window.origin;

    fetch(`${org}${path}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        cache: "no-cache",
        body: getPreload
      })
      .then(res => res.json())
      .then(data => {
        const newPath = data.path;
        const unsavedDraft = document.querySelector(".unsaved-draft");
        localStorage.removeItem("crumb");
        unsavedDraft.style.visibility = "hidden";
        saveCrumbClicked = e.target.classList.contains("save-crumb");
        const newUrl = `${org}/${newPath}`;
        window.location.href = newUrl;
      })
      .catch(err => console.warn(err));
  } else {
    localStorage.setItem("crumb", getPreload);
  }
}

(function () {
  if (localStorage.crumb) {
    const discard = document.querySelector(".discard-draft");
    const loadDraft = document.querySelector(".load-draft");
    const unsavedDraft = document.querySelector(".unsaved-draft");
    const alertModal = document.querySelector(".alert-md-body");
    unsavedDraft.style.visibility = "visible";
    document.addEventListener("DOMContentLoaded", function (e) {
      setTimeout(() => {
        alertModal.style.animation = "alertModal .15s linear forwards";
      }, 2500);
    });
    unsavedDraft.addEventListener("click", function (e) {
      e.preventDefault();
      alertModal.style.animation = "alertModal .15s linear forwards";
    });
    window.addEventListener("click", function (e) {
      if (e.target == alertModal) {
        alertModal.style.animation = "alertModalOut .15s linear forwards";
      }
    });

    discard.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("crumb");
      unsavedDraft.style.visibility = "hidden";
      alertModal.style.animation = "alertModalOut .15s linear forwards";
    });

    loadDraft.addEventListener("click", function (e) {
      e.preventDefault();
      const editorItems = JSON.parse(localStorage.crumb);
      computePreloadPreview(editorItems);
      setTimeout(() => {
        alertModal.style.animation = "alertModalOut. 15s linear forwards";
      }, 500);
    });
  }
})();

function computePreloadPreview(editorItems) {
  const codes = editorItems.codes;
  const modes = editorItems.modes;
  const libs = editorItems.libs;
  const title = editorItems.title;

  const getSettings = editorItems.editorSettings;

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

  htmlName.innerHTML = `<span>${htmlAttr}</span>`;
  cssName.innerHTML = `<span>${cssAttr}</span>`;
  jsName.innerHTML = `<span>${jsAttr}</span>`;

  cssPre.options.selectedIndex = cssP.index;
  htmlPre.options.selectedIndex = htmlP.index;
  jsPre.options.selectedIndex = jsP.index;

  updatePreview();
}

function unsavedChange() {
  let t;

  htmlEditor.on("keyup", function () {
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

  cssEditor.on("keyup", function () {
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

  jsEditor.on("keyup", function () {
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
      mode: jsRequire
    });

    printError(data[0].error);
    printError(data[1].error);
    printError(data[2].error);

    const animationFrame = requestAnimationFrame || webkitRequestAnimationFrame;
    requestAnimationFrame(() => {
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

    const lineNo = x.data[0].lineNumber;
    const dashes = "-----------------------------------------";

    const errorOutput = `\n${dashes}\n[${language.toUpperCase()}] ${mess} \n\t\t\t\t at line ${lineNo}\n${dashes}`;

    // updates the  console.
    if (preserveLog.checked) {
      errorCount++;
      consoleBError++;
      outnum.setAttribute("data-error", `${errorCount}`);
      consoleBError > 1 ? (consoleBar.setAttribute("data-label", `${consoleBError} errors.`)) : (consoleBar.setAttribute("data-label", `${consoleBError} error.`))
      consoleEditor.replaceRange(
        errorOutput,
        CodeMirror.Pos(consoleEditor.lastLine() + 1)
      );
    } else if (!preserveLog.checked) {
      consoleEditor.getDoc().setValue(errorOutput);
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
    }

    // updates textContent / error numbers and set text color.

    outnum.textContent = `${errorCount}`;
  }
}
submitLib.addEventListener("click", () => {
  updatePreview();
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
    crumbName.crumb.blur();
  }
});
crumbName.addEventListener("submit", e => {
  e.preventDefault()
});

run.addEventListener("click", e => {
  e.preventDefault();

  updatePreview();

  //console.log(JSON.parse(p))
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
        skin: "darkplus",
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
initState(htmlEditor, cssEditor, jsEditor, updatePreview);

keyboardShortCuts(updatePreview, htmlEditor, cssEditor, jsEditor);

const anonymousModal = document.querySelector(".save-md-body");

if (dataItem === "True") {
  saveCrumb.addEventListener("click", e => {
    e.preventDefault();
    const unsavedDraft = document.querySelector(".unsaved-draft");
    localStorage.removeItem("crumb");
    unsavedDraft.style.visibility = "hidden";
    setPreload(true, "/crumbs/save", e);
  });
  const editorPreset = JSON.parse(preset.value);
  const getSettings = editorPreset.editorSettings;
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
} else {
  saveCrumb.addEventListener("click", e => {
    e.preventDefault();
    setPreload(false);
    savedChange();
    anonymousModal.style.animation = "alertModal .15s linear  forwards";
  });

  window.addEventListener("click", e => {
    if (e.target == anonymousModal) {
      anonymousModal.style.animation =
        "alertModalOut .15s linear forwards";
    }
  });

  saveAnonCrumb.addEventListener("click", function (e) {
    e.preventDefault();

    setPreload(true, "/anon/crumbs", e);
  });
}

function redirectUser(url) {
  const org = window.origin;
  // const path = window.location.pathname;
  // const urlString = path.split("/")[3];

  // const getPreload = {
  //   path: urlString,
  //   author: dataItems.author
  // };

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
    .catch(err => console.warn(err));
}

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

  const saveCrumb = document.querySelector(".save-crumb");
  const cssLib = document.querySelector("#csslib");
  const jsLib = document.querySelector("#jslib");
  const metaLib = document.querySelector("#metalib");
  const submitLib = document.querySelector("#submit-lib");
  const generalSettings = document.querySelector(".general-settings");
  const languageSettings = document.querySelector(".language");
  const customSettings = document.querySelector(".sc-custom");
  const balanceSettings = document.querySelector(".balance");
  const behaviourSettings = document.querySelector(".behaviour-settings");
  const kbdSettings = document.querySelector(".keyboard-shortcuts");
  const profileSettings = document.querySelector(".profile-settings");
  const generalTab = document.querySelector(".general-tab");
  const languageTab = document.querySelector(".language-tab");
  const customTab = document.querySelector(".custom-tab");
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
  const userValue = document.querySelector("#userValue");
  const cmDark = document.querySelector(".theme-dark");
  const keymaps = document.querySelector(".keymaps");
  const fontFm = document.querySelector(".fonts");
  const sizes = document.querySelector(".font-size");
  const preset = document.querySelector("#preset");
  const consoleText = document.querySelector("#error-log");
  const out = document.querySelector(".out");
  const c_name = document.querySelector(".console-name");
  const clearConsole = document.querySelector(".out-clear");
  const htmlPre = document.querySelector("#html-pre");
  const cssPre = document.querySelector("#css-pre");
  const jsPre = document.querySelector("#js-pre");
  const saveAnonCrumb = document.querySelector(".save-anon-crumb");
  const snippetSource = document.querySelector("#snippets");
  const outnum = document.querySelector(".console-label");
  const preserveLog = document.querySelector("#preserve-log");
  const htmlChangesMade = document.querySelector(".html-changes-made");
  const cssChangesMade = document.querySelector(".css-changes-made");
  const jsChangesMade = document.querySelector(".js-changes-made");
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
    consoleBtn,
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
    customSettings,
    customTab,
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
    userValue,
    cmDark,
    keymaps,
    fontFm,
    sizes,
    preset,
    consoleText,
    out,
    c_name,
    clearConsole,
    htmlPre,
    cssPre,
    jsPre,
    saveAnonCrumb,
    snippetSource,
    outnum,
    preserveLog,
    htmlChangesMade,
    cssChangesMade,
    jsChangesMade,
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

window.addEventListener("beforeunload", function (e) {
  if (
    (htmlChangeNum > 0 && !saveCrumbClicked) ||
    (cssChangeNum > 0 && !saveCrumbClicked) ||
    (jsChangeNum > 0 && !saveCrumbClicked)
  ) {
    e.returnValue =
      "Changes you made have not been saved, Do you still want to reload?";
    return "Changes you made have not been saved, Do you still want to reload?";
  }
});