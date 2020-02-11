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
