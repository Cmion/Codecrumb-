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
