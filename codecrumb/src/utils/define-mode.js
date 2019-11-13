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
