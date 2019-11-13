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
    (JSON.parse(localStorage.getItem("__defineEditorPresets__")).loopTimeout) ||
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
