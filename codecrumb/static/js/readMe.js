const raw = document.querySelector("#raw");
const compiled = document.querySelector("#compiled");
const demo = document.querySelector("#demo");
const closeDemo = document.querySelector(".close-demo");
const sectionDemo = document.querySelector(".demo");
const sectionMain = document.querySelector("main");
const crumbName = document.querySelector(".crumb-name");
const rawWrapper = document.querySelector(".raw-wrapper");
const compiledWrapper = document.querySelector(".compiled-wrapper");
const rawToggler = document.querySelector(".raw-toggler");
const compiledToggler = document.querySelector(".compiled-toggler");
const pseudoData = JSON.parse(document.querySelector("#pseudo-data").value);
let delay;
crumbName.textContent = pseudoData.title;
showdown.setFlavor("github");
const converter = new showdown.Converter();

const defaultCode =
  'Your Pseudocode\n========================\n\n## Task Lists\n\n- [ ] Incomplete task list item\n* travese DOM.\n* use classes or function based classes.\n- [x] **Completed** task list item\n* create page structure.\n* style up page (using sass).\n\n## Everything from markdown plus GFM features:\n\n## URL autolinking\n\nUnderscores_are_allowed_between_words.\n\n## Strikethrough text\n\nGFM adds syntax to strikethrough text, which is missing from standard Markdown.\n\n~~Mistaken text.~~\n~~**works with other formatting**~~\n\n~~spans across\nlines~~\n\n## Fenced code blocks (and syntax highlighting)\n\n> use three back-ticks\n```css\n:root {\n\t--color: cadetblue\n}\nbody {\n  font-family: "QuickSand", sans-serif;\n  font-size: 20px;\n  color: var(--color);\n}\n```\n```javascript\n    setTimeout(()=>{\n    \tconsole.log("This is a demo")\n     })\n```\n* emoji:  :smile:😄\n';
const options = {
  lineNumbers: true,
  mode: {
    name: "gfm",
    tokenTypeOverrides: {
      emoji: "emoji"
    }
  },
  theme: pseudoData.theme != null ? pseudoData.theme : "andromeda",
  showCursorWhenSelecting: true,
  scrollbarStyle: "simple",
  autoFocus: true,
  autoCorrect: true,
  autoCloseTags: true,
  undoDepth: 500,
  gitHubSpice: true,
  emoji: true,
  styleActiveLine: true,
  lineWrapping: true,
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: true,
  gutters: ["CodeMirror-linenumbers", "breakpoints"],
  extraKeys: {
    "Ctrl-/": "toggleComment",
    "Ctrl-P": function(cm) {
      rawEditor.getDoc().setValue(prettify(rawEditor.getValue(), "markdown"));
    }
  }
};
const rawEditor = CodeMirror.fromTextArea(raw, options);
const compiledEditor = CodeMirror.fromTextArea(compiled, options);
const demoEditor = CodeMirror.fromTextArea(demo, options);

const def =
  pseudoData.code != null && pseudoData.code != "" && pseudoData.code.length > 0
    ? pseudoData.code
    : defaultCode;

const codeM = document.querySelectorAll(".CodeMirror");

Array.from(codeM).forEach(cm => {
  cm.style.fontFamily =
    pseudoData.font != null
      ? `${pseudoData.font}, consolas, 'dejavu sans mon', monospace`
      : "consolas, 'dejavu sans mono', source code pro', monospace";
});

rawEditor.setSize("100%", "100%");
rawEditor.getDoc().setValue(prettify(def, "markdown"));

compiledEditor.setSize("100%", "100%");
compiledEditor.setOption("readOnly", true);

const code = converter.makeHtml(def);
compiledEditor.setOption("value", prettify(code, "html"));

demoEditor.setOption("readOnly", true);
demoEditor.setOption("styleActiveLine", false);
demoEditor.setSize("100%", "100%");

function makeMarker() {
  const marker = document.createElement("div");
  marker.style.color = "var(--accent-color)";
  marker.innerHTML = "●";
  return marker;
}

rawEditor.on("gutterClick", function(cm, n) {
  const info = cm.lineInfo(n);
  cm.setGutterMarker(
    n,
    "breakpoints",
    info.gutterMarkers ? null : makeMarker()
  );
});

class SpaceWords {
  constructor(element, wordsArray) {
    this.element = element;
    this.text = "";
    this.wordsArray = wordsArray;
    this.isDeleting = false;
    this.wordIndex = 0;
    this.wordsInterval;
  }
  space() {
    let current = this.wordIndex % this.wordsArray.length;

    const full = this.wordsArray[current];

    if (!this.isDeleting) {
      this.text = full.substring(0, this.text.length + 1);
    } else {
      this.text = full.substring(0, this.text.length - 1);
    }

    this.element.getDoc().setValue(this.text);

    let newInterval = 200;
    if (this.isDeleting) {
      newInterval /= 2;
    }

    if (!this.isDeleting && this.text === full) {
      //       this.isDeleting = true;
      setTimeout(() => {
        this.isDeleting = true;
      }, 500);
    } else if (this.isDeleting && this.text === "") {
      setTimeout(() => {
        this.isDeleting = false;
        this.wordIndex++;
      }, 500);
    }

    this.wordsInterval = setTimeout(() => this.space(), newInterval);
  }
}

function init() {
  const s = prettify(
    `## Task Lists

  - [ ] Incomplete task list item
  - [ ] Traverse DOM.
  - [ ] Use classes or function based classes.
  - [x] **Completed** task list item
  - [x] Create page structure.
  - [x] Style up page (using SCSS).`,
    "markdown"
  );
  const r = prettify(
    "## Task List.\n\n   - [ ] Use es6 syntax only.\n   - [ ] Create a quick prototype of the parser function.\n   - [ ] Use parser function to parse both string and arrays.\n\n```javascript\n\tconst parser = (toBeParsed, type) =>  {\n    \t// some code.\n    }\n```\n",
    "markdown"
  );
  const m = prettify(
    `## Tables
| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   |  2000   |30000000 |
| *foo* | **bar** | ~~baz~~ |`,
    "markdown"
  );

  const wordsArray = [s, m, r];
  const b = new SpaceWords(demoEditor, wordsArray);
  b.space();
  closeDemo.addEventListener("click", () => {
    clearTimeout(b.wordsInterval);
    sectionDemo.style.animation = "demo-in .35s ease-in-out forwards";
    //       sectionMain.style.height = "calc(100vh - 50px)";
  });
}
document.addEventListener("DOMContentLoaded", init);
// init();
const toggles = [rawToggler, compiledToggler];
toggles.forEach(toggle => {
  toggle.addEventListener("click", e => {
    const current = e.currentTarget;
    current.classList.add("active");
    const notCurrent =
      current.previousElementSibling || current.nextElementSibling;
    notCurrent.classList.remove("active");

    if (toggle === rawToggler) {
      rawWrapper.classList.add("show-editor");
      compiledWrapper.classList.remove("show-editor");
    } else if (toggle === compiledToggler) {
      compiledWrapper.classList.add("show-editor");
      rawWrapper.classList.remove("show-editor");
    }
  });
});

rawEditor.on("inputRead", function() {
  clearTimeout(delay);
  requestAnimationFrame(() => {
    delay = setTimeout(() => {
      const parsed = converter.makeHtml(rawEditor.getValue());

      const tidy = prettify(parsed, "html");
      compiledEditor.getDoc().setValue(tidy);
      savePseudoCode();
    }, 2000);
  });
});

function savePseudoCode() {
  const loc = window.location.pathname.split("/")[3];
  const sendData = {
    path: loc,
    code: rawEditor.getValue()
  };
  const origin = window.origin;
  fetch(`${origin}/crumbs/pseudocode/save`, {
    method: "POST",
    cache: "no-cache",
    headers: new Headers({
      "content-type": "application/json"
    }),
    credentials: "include",
    body: JSON.stringify(sendData)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      window.location.href = origin + "/error";
    });
}
function prettify(parsed, mode) {
  const beautify = prettier.format(parsed, {
    parser: mode,
    plugins: prettierPlugins
  });
  return beautify;
}
(function() {
  if (!pseudoData.user) {
    rawEditor.setOption("readOnly", "true");
    // rawEditor.setOption("styleActiveLine", "false");
  }
})();
