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
