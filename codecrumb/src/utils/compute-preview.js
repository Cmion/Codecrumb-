// called in main js file

// eslint-disable-next-line no-unused-vars
function getPreview({ html, css, js, meta, cssExt, jsExt, mode }) {
  // data is converted to a blob;
  // strictly frontend.
  const consoleJs = window.location.origin + "/static/preview/console-min.js";

  const otherScript = [consoleJs];

  const getBlobURL = (code, type) => {
    const blob = new Blob([code], {
      type
    });

    return URL.createObjectURL(blob);
  };

  // eslint-disable-next-line no-undef
  if (mode == JSModes.BABEL || mode == JSModes.JSX) {
    otherScript.push(
      window.origin + "/static/lib/transpilers/babel-polyfill.min.js"
    );
  }

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

  const source = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${externalMeta || ""}
    ${externalCss || ""}
    <title>CodeCrumb - ${crumbName.crumb.value}</title>
</head>
${miscScript || ""}
<body>
  <style>
    body{
      font-family: Helvetica, Arial, sans-serif;
      background: white;
    }
    ${css || ""}
  </style>
      ${html || ""}

  ${externalJs || ""}
  <script id="codecrumb-script" src="${jsURL || ""}"></script>
</body>
</html>`;

  return getBlobURL(source, "text/html");
}
