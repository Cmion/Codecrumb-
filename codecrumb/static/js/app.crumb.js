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

const loopProtect = ({ code, timeout }) => {
  let m = [];
  const prefix = "$THIS_IS_CC_LOOP_PROTECT_VARIABLE";
  const loopVariable = "\nconst %d = Date.now();\n";
  let loopStr =
    "\n\tif((Date.now() - %d) > " +
    timeout +
    "){\n\tthrow new RangeError(`Potential infinite loop prevented,\n if you want the loop to iterate a little longer, \n use the custom panel in the settings panel to change the duration\nnote: these page might not be responsive if the duration is or more than 2000ms\n`);\n}\n";
  let loopID = 0;
  // esprima's AST is used to parse the script

  // These infinite loop prevention method uses the insertion method
  // it inserts checks into any loop
  // the checks contains a timestamp and once the time stamp is exceeded the loop breaks.
  try {
    esprima.parseScript(
      code,
      {
        tolerant: true,
        jsx: true,
        range: true
      },
      function(node) {
        switch (node.type) {
          case "DoWhileStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "ForOfStatement":
            let p = loopStr;
            let e = "";
            let range = 1 + node.body.range[0];
            if (node.body.type !== "BlockStatement") {
              p = "{" + p;
              e = "\n}";
              --range;
            }
            m.push({ pos: range, str: p.replace("%d", prefix + loopID) });
            m.push({ pos: node.body.range[1], str: e });
            m.push({
              pos: node.range[0],
              str: loopVariable.replace("%d", prefix + loopID)
            });
            loopID++;
            break;
          default:
            break;
        }
      }
    );

    m.sort((x, y) => y.pos - x.pos).forEach(n => {
      code = code.slice(0, n.pos) + n.str + code.slice(n.pos);
    });

    return code;
  } catch (e) {}
};

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
      console.log(err);
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
  let infiniteLoopTimeout =
    JSON.parse(localStorage.getItem("__defineEditorPresets__")).loopTimeout ||
    1000;
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
      const code = loopProtect({
        code: userCode,
        timeout: parseInt(infiniteLoopTimeout, 10)
      });
      d.resolve({
        code: code,
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
      const code = loopProtect({
        code: userCode,
        timeout: parseInt(infiniteLoopTimeout, 10)
      });
      d.resolve({
        code: code,
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
      const code = loopProtect({
        code: userCode.outputText,
        timeout: parseInt(infiniteLoopTimeout, 10)
      });
      d.resolve({
        code: code,
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
      const code = loopProtect({
        code: userCode,
        timeout: parseInt(infiniteLoopTimeout, 10)
      });
      d.resolve({
        code: code,
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
      const code = loopProtect({
        code: userCode,
        timeout: parseInt(infiniteLoopTimeout, 10)
      });
      d.resolve({
        code: code,
        error
      });
    }
  }
  return d.promise;
}

const crumbSrc = document.querySelectorAll(".thumbnail");

const delModal = document.querySelector(".del-md-body");
const delLinks = document.querySelectorAll(".del-tag");

const delCancel = document.querySelectorAll(".del-cancel button");
const proImg = document.querySelector(".pro-img");
const proImgIcon = document.querySelector(".pro-img-icon");
const userImg = document.querySelector(".user-image");

const fpInput = document.querySelectorAll(".fp-wrapper input");
const delInput = document.querySelector(".del-wrapper input");

if (userImg) {
  proImgIcon.addEventListener("click", () => proImg.click());
  userImg.addEventListener("click", () => proImg.click());
}

const navigate = document.querySelector(".navigate");
const userCrumbMenu = document.querySelector(".user-crumb-menu");
const closeExplorer = document.querySelector(".close-explorer");
navigate.addEventListener("click", e => {
  e.preventDefault();
  userCrumbMenu.style.animation = "hoverin .1s linear forwards";
});
userCrumbMenu.style.animation = "hoverout .1s linear forwards";
closeExplorer.addEventListener("click", e => {
  e.preventDefault();
  userCrumbMenu.style.animation = "hoverout .1s linear forwards";
});

if (fpInput) {
  Array.from(fpInput).forEach(input => {
    input.addEventListener("keyup", () => {
      if (input.value.length > 0) {
        input.classList.add("filled");
      } else if (input.value.length == 0) {
        input.classList.remove("filled");
      }
    });
    if (input.value.length > 0) {
      input.classList.add("filled");
    } else if (input.value.length == 0) {
      input.classList.remove("filled");
    }
  });
}

deleteRequest();
function deleteRequest() {
  Array.from(delLinks).forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const parentCrumb = this.parentElement.parentElement;

      const choice = confirm(this.getAttribute("data-confirm"));

      if (choice) {
        const origin = window.origin;
        const id = parseInt(this.getAttribute("data-id"));
        const requestObj = {
          id: id
        };
        fetch(`${origin}/user/dashboard/crumbs/delete`, {
          headers: new Headers({
            "Content-Type": "application/json"
          }),
          method: "POST",
          body: JSON.stringify(requestObj),
          cache: "no-cache"
        });

        parentCrumb.style.animation =
          "deleteModalOut .4s ease-in-out alternate forwards";

        setTimeout(() => {
          window.location.href = window.location;
        }, 600);
      }
    });
  });
}

class Code {
  constructor(code) {
    this.code = code;
  }
  getValue() {
    return this.code;
  }
  lineCount() {
    const line = this.code.split("\n").length;
    return line;
  }
  setOption(x, y) {
    return { x, y };
  }
  value() {
    return this.code;
  }
}

Array.from(crumbSrc).forEach(src => {
  const inputSrc = src.firstElementChild;
  const preview = src.lastElementChild;
  const data = JSON.parse(inputSrc.value);

  computePreloadPreview(data, preview);
  // Array.from(previews).forEach(
  // preview.contentDocument.body.style.transform = `scale(0.25)`;
  preview.addEventListener("load", () => {
    preview.contentDocument.body.style.transform = `scale(0.25)`;
    preview.contentDocument.body.style.transformOrigin = `center`;
  });
  // );
});

function computePreloadPreview(editorItems, preview) {
  const codes = editorItems.codes;
  const modes = editorItems.modes;
  const libs = editorItems.libs;

  const html = new Code(codes.html);
  const css = new Code(codes.css);
  const js = new Code(codes.js);

  const htmlMode = modes.htmlMode;
  const cssMode = modes.cssMode;
  const jsMode = modes.jsMode;

  const htmlMeta = libs.htmlMeta;
  const cssLib = libs.cssLib;
  const jsLib = libs.jsLib;

  // eslint-disable-next-line no-undef
  const getHTMLMode = HtmlCompile(html, htmlMode);
  // eslint-disable-next-line no-undef
  const getCSSMode = CSSCompile(css, cssMode);
  // eslint-disable-next-line no-undef
  const getJSMode = JSCompile(js, jsMode);

  Promise.all([getHTMLMode, getCSSMode, getJSMode]).then(data => {
    // eslint-disable-next-line no-undef
    const url = getPreview({
      html: data[0].code,
      css: data[1].code,
      js: data[2].code,
      meta: htmlMeta,
      cssExt: cssLib,
      jsExt: jsLib
    });

    preview.src = url;
  });

  // eslint-disable-next-line no-console
  console.clear();
}

function getPreview({ html, css, js, meta, cssExt, jsExt }) {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], {
      type
    });
    return URL.createObjectURL(blob);
  };

  const defCss = `
      body{
          font-family: Helvetica, Arial, sans-serif;
          background: white;
      }
      `;
  const defUrl = getBlobURL(defCss, "text/css");
  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const externalCss = cssExt.split("\n").reduce(function(links, url) {
    return (
      links +
      (url
        ? '\n<link rel="stylesheet" type="text/css" href="' + url + '">'
        : "")
    );
  }, "");
  const externalJs = jsExt.split("\n").reduce(function(links, url) {
    return links + (url ? '\n<script src="' + url + '"></script>' : "");
  }, "");
  const externalMeta = meta.split("\n").reduce(function(links, url) {
    return links + (url ? url : "");
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
              <link rel='stylesheet' href='${defUrl || ""}'>
              <link rel='stylesheet' href='${cssURL || ""}'>
             
              
          </head>
          <body>
              ${html || ""}
          </body>
      
          ${externalJs}
          <script src="${jsURL || ""}"></script>
          
          </html>
      
      `;

  return getBlobURL(source, "text/html");
}

const previews = document.querySelectorAll("iframe");

function deferred() {
    const s = {}
    const promise = new Promise(function (resolve, reject) {
        s.resolve = resolve;
        s.reject = reject;
    });
    s.promise = promise
    return Object.assign(s, promise);

}
//# sourceMappingURL=maps/app.crumb.js.map
