const consoleClose = document.querySelector(".out-close");
const error = document.querySelector(".console-label");
const consoleBtnITag = document.querySelector(".opc");
const closeConsole = document.querySelector(".to-close");
const fullscreen = document.querySelector(".to-fullscreen");
const exitFullscreen = document.querySelector(".exit-fullscreen");

class ProxyConsole {
  constructor(
    error,

    consoleText,

    consoleElement,

    consoleCont,
    logElement,
    consoleBar,
    consoleInput
  ) {
    this.consoleClosed = true;
    this.errorElement = error;
    this.consoleText = consoleText;
    this.consoleElement = consoleElement;
    this.consoleCont = consoleCont;
    this.logElement = logElement;
    this.consoleBar = consoleBar;
    this.consoleInput = consoleInput;
    this.dashes = "-----------------------------------------";
    this.word = "console.log( (89 * 78) / (64 % 6) - (90 + 120) )";
    this.time = 0;
  }
  printToConsole(e) {
    const message = !e.data.error
      ? {
          lang: "JS",
          data: {
            message: e.data.message
          }
        }
      : {
          lang: "JS",
          data: {
            message: e.data.message,
            lineNumber: e.data.lineno,
            columnNumber: e.data.colno,
            src: e.source
          }
        };
    this.printMessage(message, e);
  }
  printMessage(x, y) {
    if (x && y.data.error) {
      this.updateErrorCount();
      const mess = x.data.message;
      const language = x.lang;
      const lineNo = x.data.lineNumber;
      const colNo = x.data.columnNumber;

      const errorOutput = `\n# ${mess} \n#\t\t\t\t at main(${lineNo}:${colNo})\n${
        this.dashes
      }`;

      // updates the  console.

      // check if user wants to preserve the logs..
      if (this.logElement.checked) {
        this.consoleElement.replaceRange(
          errorOutput,
          CodeMirror.Pos(this.consoleElement.lastLine() + 1)
        );
      } else if (!this.logElement.checked) {
        this.consoleElement.getDoc().setValue(errorOutput);
      }

      // checks if console is opened and scrolls it into view.
      if (!this.consoleClosed) {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }
      // updates textContent / error numbers and set text color.
      let eCount = parseInt(this.errorElement.getAttribute("data-error"));
      this.errorElement.textContent = `${eCount}`;
    } else if (x && y.data.console) {
      // gets response from iframe.
      const mess = x.data.message;
      // formats console output

      const consoleOutput = `\n${mess}\n${this.dashes}`;
      // updates the console.
      // check if user wants to preserve the logs...
      if (this.logElement.checked) {
        const ll = this.consoleElement.lastLine() + 1;

        this.consoleElement.replaceRange(consoleOutput, CodeMirror.Pos(ll));

        if (consoleOutput.split("\n").length > 15) {
          this.consoleElement.foldCode(ll);
        }
      } else if (!this.logElement.checked) {
        this.consoleElement.getDoc().setValue(consoleOutput);
      }

      // checks if console is opened and scrolls it into view.
      if (!this.consoleClosed) {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }
    } else if (x && y.data.clear) {
      // clears console
      this.clearProxyConsole();
      // scrolls to view.
      if (!this.consoleClosed) {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }
    }
  }
  updateErrorCount() {
    let eCount = parseInt(this.errorElement.getAttribute("data-error"));
    const errorCount = ++eCount;
    let consoleBError = parseInt(this.consoleBar.getAttribute("data-label"));
    consoleBError++;
    this.errorElement.setAttribute("data-error", `${errorCount}`);
    consoleBError > 1
      ? consoleBar.setAttribute("data-label", `${consoleBError} errors.`)
      : consoleBar.setAttribute("data-label", `${consoleBError} error.`);
  }
  clearProxyConsole() {
    let eCount = parseInt(this.errorElement.getAttribute("data-error"));
    const cleared = `# Console was cleared.`;

    this.consoleElement.getDoc().setValue(cleared);
    this.errorCount = 0;
    this.errorElement.setAttribute("data-error", `${0}`);
    this.consoleBar.setAttribute("data-label", "0 errors");
    this.errorElement.textContent = `${0}`;

    console.clear();
  }
  hideConsole() {
    this.consoleCont.classList.add("is_minimised");

    this.consoleClosed = true;
  }
  showConsole() {
    this.consoleCont.classList.remove("is_minimised");
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
      }, 500);
    });
    this.consoleClosed = false;
  }
  evaluateConsoleInput() {
    function consoleEval(x) {
      return preview.contentWindow.Function(
        '"use strict"; return (' + x + ")"
      )();
    }
    this.consoleElement.replaceRange(
      `\n${this.dashes}\n#! \t${this.consoleInput.value}`,
      CodeMirror.Pos(this.consoleElement.lastLine() + 1)
    );
    try {
      consoleEval(`console.log(${this.consoleInput.value})`);
    } catch (e) {
      let error = e.message.split("\n")[0];
      this.consoleElement.replaceRange(
        `\n${this.dashes}\n# \t${error}`,
        CodeMirror.Pos(this.consoleElement.lastLine() + 1)
      );
      this.consoleElement.setCursor(this.consoleElement.lastLine(), 3);
    }

    this.consoleInput.value = "";
  }
  typeWrite() {
    if (this.time < this.word.length) {
      let msg = this.word.charAt(this.time);
      let recent = this.consoleInput.getAttribute("placeholder") + msg;
      this.consoleInput.setAttribute("placeholder", recent);
      this.time++;
      setTimeout(() => this.typeWrite(), 90);
    }
  }
}

// eslint-disable-next-line no-undef
const proxyConsole = new ProxyConsole(
  error,
  consoleBtn,
  consoleEditor,
  consoleOutput,
  preserveLog,
  consoleBar,
  consoleInput
);

window.addEventListener("message", function(e) {
  proxyConsole.printToConsole(e);
});

// eslint-disable-next-line no-undef
clearConsole.addEventListener("click", () => {
  proxyConsole.clearProxyConsole();
});

consoleBtn.addEventListener("click", () => {
  consoleBtnITag.innerText = "visibility";
  proxyConsole.showConsole();
  proxyConsole.typeWrite();
});

closeConsole.addEventListener("click", () => {
  consoleBtnITag.innerText = "visibility_off";
  consoleOutput.style.transition =
    "transform .4s cubic-bezier(.38,.39,.28,.95)";
  proxyConsole.hideConsole();
  consoleOutput.style.height = "66.66%";
});

consoleInput.addEventListener("focus", updatePreview, {
  once: true
});
consoleInput.addEventListener("keypress", e => {
  if (e.keyCode === 13 && e.target.value.length) {
    proxyConsole.evaluateConsoleInput();
  }
});

fullscreen.addEventListener("click", e => {
  consoleOutput.style.height = "100%";
  consoleOutput.style.transition = "height .4s cubic-bezier(.38,.39,.28,.95)";
});

exitFullscreen.addEventListener("click", e => {
  consoleOutput.style.height = "66.66%";
  consoleOutput.style.transition = "height .4s cubic-bezier(.38,.39,.28,.95)";
});
