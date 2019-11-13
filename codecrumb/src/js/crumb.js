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
