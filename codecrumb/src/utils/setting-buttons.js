function showHints(editor) {
  CodeMirror.registerGlobalHelper(
    "hint",
    "emmet",
    function (mode, editor) {
      // Tell `show-hint` module that current helper will provide completions
      return !!editor.getEmmetAbbreviation();
    },
    function (editor, options) {
      // Activate auto-popup, if disabled (see below)
      const marker = editor.findEmmetMarker();
      if (!marker) {
        return;
      }

      clearTimeout(marker.popupDisableTimer);
      marker.autoPopupDisabled = false;

      const completions = editor.getEmmetCompletions();
      return (
        completions && {
          from: completions.from,
          to: completions.to,
          // Transform Emmet completions to ones that supported by `show-hint`
          list: completions.list.map(function (completion) {
            return {
              from: completion.range.from,
              to: completion.range.to,
              render: function (elt) {
                var content = document.createDocumentFragment();
                var label = document.createElement("span");
                label.className = "emmet-label";

                var preview = document.createElement("span");
                preview.className = "emmet-preview";

                content.appendChild(label);
                content.appendChild(preview);

                if (completion.type === "expanded-abbreviation") {
                  // It’s an expanded abbreviation completion:
                  // render preview for it
                  label.className += " emmet-label__expand";
                  label.textContent = "Expand abbreviation";

                  preview.className += " emmet-preview__expand";
                  // Replace tab with a few spaces so preview would take
                  // lesser space
                  preview.textContent = completion.preview.replace(/\t/g, "  ");
                } else {
                  // A regular snippet: render completion abbreviation
                  // and its preview
                  label.textContent = completion.name;
                  preview.textContent = completion.preview;
                }

                elt.appendChild(content);
              },
              hint: function () {
                // Use completions’ `insert()` method to properly
                // insert Emmet completion
                completion.insert();
              }
            };
          })
        }
      );
    }
  );
  // Automatically display Emmet completions when cursor enters abbreviation
  // marker if `markEmmetAbbreviation` option was enabled (true by default)
  editor.on("cursorActivity", function () {
    if (editor.getOption("markEmmetAbbreviation")) {
      const marker = editor.findEmmetMarker();
      if (marker && !marker.autoPopupDisabled) {
        editor.showHint({
          completeSingle: false
        });
      }
    }
  });

  editor.on("startCompletion", function () {
    var marker = editor.findEmmetMarker();
    if (marker) {
      clearTimeout(marker.popupDisableTimer);
      marker.popupDisableTimer = null;
    }
  });
  editor.on("endCompletion", function () {
    var marker = editor.findEmmetMarker();
    if (marker) {
      clearTimeout(marker.popupDisableTimer);
      marker.popupDisableTimer = setTimeout(function () {
        marker.autoPopupDisabled = true;
      }, 30);
    }
  });
}

function cleanFont(x) {
  return x
    .split(",")
    .map(a => {
      if (a.match(/[a-zA-Z]+\s/)) {
        return `"${a.trim(" ")}"`;
      } else {
        return a;
      }
    })
    .join(",");
}

function lint(bool) {
  htmlEditor.setOption("lint", bool);
  cssEditor.setOption("lint", bool);
  jsEditor.setOption("lint", bool);
}
lint(true);

function hint() {
  // eslint-disable-next-line no-undef
  const editors = [htmlEditor, cssEditor, jsEditor];

  showHints(htmlEditor);
  showHints(cssEditor);
  showHints(jsEditor);

  jsEditor.on("inputRead", function (e, cm) {
    if (!cm.text[0].match(/[\s()\[\]{}\-\+\=\?\<\|\~\/;:>,(.+\d)]/) && cm.origin === "+input") {
      jsEditor.showHint({
        completeSingle: false,
        alignWithWord: true,
        closeOnUnfocus: true,
        closeOnBackspace: true
      });
    }
  }, {
    passive: true
  });

  editors.forEach(editor => {
    editor.setOption("extrakeys", {
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Ctrl-K": function (cm, event) {
        cm.state.colorpicker.popup_color_picker();
      },
      "Alt-f": "findPersistent",

      "Ctrl-S": function () {
        if (dataItems.author) {
          if (dataItems.author === "anonymous") return null;
          keyMapSave() || null;
        } else {
          keyMapSave() || null;
        }
      },

      "Ctrl-Enter": updatePreview,
      "Alt-J": function () {
        beautifySingleFile(jsEditor, csse.js);
      },
      "Alt-C": function () {
        beautifySingleFile(cssEditor, csse.css);
      },
      "Alt-H": function () {
        beautifySingleFile(htmlEditor, csse.html);
      },
      "Alt-A": function () {
        prettify(htmlEditor, cssEditor, jsEditor);
      },
      "Ctrl-Space": "autocomplete",
      Tab: "emmetExpandAbbreviationAll",
      "Ctrl-E": "emmetExpandAbbreviationAll",
      Enter: "emmetInsertLineBreak",
      "Ctrl-W": "emmetWrapWithAbbreviation",
      "Ctrl-/": "toggleComment"
    });
    editor.setOption("markEmmetAbbreviation", true);


    editor.on("cursorActivity", (cm) => {
      CodeMirror.commands.autocomplete = function (cm) {
        cm.showHint({
          hint: CodeMirror.hint.emoji,
          completeSingle: true,
          alignWithWord: true
        });
      };
    })
  });
}
hint();

function colorPicker() {
  const editors = [htmlEditor, cssEditor];
  editors.forEach(editor => {
    editor.setOption("colorpicker", {
      mode: "edit"
    });
  });
}
colorPicker();

(function predefinedSettings() {
  let localPresets = localStorage.__defineEditorPresets__;
  if (localStorage.__defineEditorPresets__) {
    const presets = JSON.parse(localPresets);
    const editors = [htmlEditor, cssEditor, jsEditor];
    // change skin color:
    changeEditorSkin(presets.skin);
    // change tab size => indent unit => linter => autoComplete => colorpicker => activeLine.
    editors.forEach(x => {
      x.setOption("tabSize", presets.tab);
      x.setOption("indentUnit", presets.indent);
      x.setOption("styleActiveLine", presets.activeLine);
      x.setOption("colorpicker", {
        mode: 'edit',
        type: presets.colorPicker
      });
      x.setOption("lint", presets.linter);
      if (presets.autoComplete) {
        hint()
      } else {
        x.setOption(
          "markEmmetAbbreviation",
          false
        );

        x.on("keypress", function () {
          x.closeHint();
        });
        x.closeHint();
      }
    });
    // change editor layout type
    // checking for types
    switch (presets.layout) {
      case "left":
        tabStyleLeft();
        tabStyleLeftE.checked = true;
        break;
      case "top":
        tabStyleTop();
        tabStyleTopE.checked = true;
        break;
      case "column":
        tabStyleDefault();
        tabStyleTabE.checked = true;
        break;
      case "right":
        tabStyleRight();
        tabStyleRightE.checked = true;
        break;
      case "full-view":
        fullScreenPreview();
        tabStyleFullView.checked = true;
        break;
      default:
        null

    }
    // font-ligatures
    const cm = Array.from(document.querySelectorAll(".CodeMirror pre"));
    presets.fontLigature ? cm.forEach(x => x.style.fontVariantLigatures = "contextual") : cm.forEach(x => x.style.fontVariantLigatures = "none")



    // handle ui changes
    const handleSelectUI = (item, selectEl) => {
      const ts = selectEl.namedItem(item);
      selectEl.selectedIndex = ts.index;
    }
    const handleCheckUI = (value, checkEl) => {
      checkEl.checked = value
    }
    handleSelectUI(`${presets.tab}`, tabSize);
    handleSelectUI(`${presets.indent}`, indentUnit);
    handleSelectUI(`${presets.colorPicker}`, colorPickerType);
    handleSelectUI(`${presets.skin}`, editorSkins);
    handleCheckUI(presets.activeLine, activeLineCh);
    handleCheckUI(presets.linter, linterCh);
    handleCheckUI(presets.autocomplete, autoCompleteCh);
    handleCheckUI(presets.fontLigatures, fontLigatures);
    loopTimeout.value = presets.loopTimeout;
    autoRunDelay.value = presets.runDelayTimeout;
  }
})();
/* eslint-disable no-console */
function settingButtons(
  htmlEditor,
  cssEditor,
  jsEditor,
  editors,
  updatePreview,
  cmDark,
  fontFm,
  sizes,
  keymaps
) {
  let delay;
  // const editors = [htmlEditor, cssEditor, jsEditor];
  // toggles checkboxs and set their values;
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  Array.from(checkbox).forEach(check => {
    check.addEventListener("change", e => {
      const current = e.currentTarget;
      // conditional check for changes in the line-numbers toggler and adds them.
      if (current.checked && current.name == "numbers") {
        editors.forEach(editor => {
          editor.setOption("lineNumbers", true);
        });
      } else if (!current.checked && current.name == "numbers") {
        editors.forEach(editor => {
          editor.setOption("lineNumbers", false);
        });
      }

      if (current.checked && current.name === "wrap") {
        editors.forEach(editor => {
          editor.setOption("lineWrapping", true);
        });
      } else if (!current.checked && current.name === "wrap") {
        editors.forEach(editor => {
          editor.setOption("lineWrapping", false);
        });
      }

      // conditional check for changes in the active-line toggler and adds them.
      if (current.checked && current.name == "active") {
        editors.forEach(editor => {
          editor.setOption("styleActiveLine", true);
        });
        __setEditorPreset__("activeLine", true);

      } else if (!current.checked && current.name == "active") {
        editors.forEach(editor => {
          editor.setOption("styleActiveLine", false);
        });
        __setEditorPreset__("activeLine", false);
      }

      // conditional check for changes in the auto-complete toggler and adds them.
      if (current.checked && current.name === "complete") {
        hint();
        __setEditorPreset__("autoComplete", true);
      } else if (!current.checked && current.name === "complete") {
        // console.log('untab')

        editors.forEach(editor => {
          editor.setOption("extrakeys", {
            "Ctrl-Q": function (cm) {
              cm.foldCode(cm.getCursor());
            },

            "Alt-F": "findPersistent",

            "Ctrl-Enter": updatePreview,

            "Alt-A": function () {
              prettify(htmlEditor, cssEditor, jsEditor);
            },
            "Ctrl-Space": false,

            "Ctrl-/": "toggleComment"
          });
          editor.setOption("markEmmetAbbreviation", false);

          editor.on("keypress", function () {
            editor.closeHint();
          });
          editor.closeHint();
        });
        __setEditorPreset__("autoComplete", false);
      }
      if (current.checked && current.name === "tags") {
        editors.forEach(editor => {
          editor.setOption("autoCloseTags", true);
        });
      } else if (!current.checked && current.name === "tags") {
        editors.forEach(editor => {
          editor.setOption("autoCloseTags", false);
        });

        // console.log('untab')
      }
      if (current.checked && current.name === "brackets") {
        editors.forEach(editor => {
          editor.setOption("autoCloseBrackets", true);
        });
      } else if (!current.checked && current.name === "brackets") {
        editors.forEach(editor => {
          editor.setOption("autoCloseBrackets", false);
        });

        // console.log('untab')
      }

      if (current.checked && current.name == "linter") {
        lint(true);
        __setEditorPreset__("linter", true);
      } else if (!current.checked && current.name == "linter") {
        lint(false);
        __setEditorPreset__("linter", false);
      }

      if (current.checked && current.name == "run") {
        editors.forEach(editor => {
          editor.on("inputRead", function () {
            requestAnimationFrame(() => {
              clearTimeout(delay);
              delay = setTimeout(updatePreview, localStorage.__defineEditorPresets__ ? (function () {
                let x =
                  JSON.parse(localStorage.__defineEditorPresets__);
                return x.runDelayTimeout
              })() : 2000);
            });
            console.clear();
          });
        });
      } else if (!current.checked && current.name == "run") {
        editors.forEach(editor => {
          editor.on("inputRead", function () {
            requestAnimationFrame(() => {
              clearTimeout(delay);
              delay = setTimeout(null, 2000);
            });
          });
        });
      }

      if (current.checked && current.name == "preserve-log") {
        current.setAttribute("data-log", "true");
        __setEditorPreset__("preserveLog", true);
      } else if (!current.checked && current.name == "preserve-log") {
        current.setAttribute("data-log", "false");
        __setEditorPreset__("preserveLog", false);
      }

      if (current.checked && current.name == "color-picker") {
        colorPicker();
        document.querySelector(".enable-text").textContent =
          "Disable color picker";
      } else if (!current.checked && current.name == "color-picker") {
        const editors = [htmlEditor, cssEditor, jsEditor];
        editors.forEach(editor => {
          editor.setOption("colorpicker", {
            mode: false
          });
        });
        document.querySelector(".enable-text").textContent =
          "Enable color picker";
      }
    });
  });



  // event for font-size settings;
  sizes.addEventListener("change", changeFontSize);
  customFSize.addEventListener("keypress", overRideFontSize);

  function changeFontSize() {
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    const themeFSize = document.querySelectorAll(".CodeMirror");
    Array.from(themeFSize).forEach(fSize => {
      const selectedSize = parseInt(
        this.selectedOptions[0].getAttribute("name")
      );
      customFSize.value = selectedSize;


      fSize.style.fontSize = `${parseInt(customFSize.value, 10)}px`;
    });
  }

  function overRideFontSize(e) {
    if (e.keyCode === 13) {
      if (dataItems.author) {
        if (
          dataItems.arg === true &&
          dataItems.author != "anonymous"
        ) {
          keyMapSave();
        }
      }
      const themeFSize = document.querySelectorAll(
        ".CodeMirror"
      );
      Array.from(themeFSize).forEach(fSize => {
        const selectedSize = parseInt(this.value);

        if (selectedSize < 5) {
          fSize.style.fontSize = `${0}px`;
        } else {
          fSize.style.fontSize = `${selectedSize}px`;
        }
      });
      customFSize.blur();
    }
  }



  //tab size



  tabSize.addEventListener("change", changeTabSize);

  function changeTabSize() {
    const cmTab = document.querySelector(".tab-num");
    const selectedTab = parseInt(this.selectedOptions[0].value, 10);
    htmlEditor.setOption("tabSize", selectedTab);
    cssEditor.setOption("tabSize", selectedTab);
    jsEditor.setOption("tabSize", selectedTab);
    cmTab.textContent = `${selectedTab}`;
    __setEditorPreset__("tabSize", selectedTab);
  }


  // indent unit



  // event listener for user option to select indent unit.
  indentUnit.addEventListener("change", indentToggled);

  function indentToggled() {
    const indented = parseInt(indentUnit.selectedOptions[0].textContent);
    htmlEditor.setOption("indentUnit", indented);
    cssEditor.setOption("indentUnit", indented);
    jsEditor.setOption("indentUnit", indented);
    __setEditorPreset__("indentUnit", indented);
  }





  // event for font-family settings;
  fontFm.addEventListener("change", changeFontFamily);
  fontFmCustom.addEventListener("keypress", overRideFont);
  fontFmCustom.addEventListener("blur", overRideFont);


  function changeFontFamily() {
    const cm = document.querySelectorAll(".CodeMirror");
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    Array.from(cm).forEach(fm => {
      const selFont = this.selectedOptions[0].getAttribute("name");

      fontFmCustom.value = `${selFont}, Monospace`;
      fm.style.fontFamily = fontFmCustom.value;
    });
  }






  // custom fonts overides predefined fonts.
  // using predefined fonts is just setting the overRiddenFont.

  function overRideFont(e) {
    if (e.type === "keypress") {
      if (e.keyCode === 13) {
        const cm = document.querySelectorAll(".CodeMirror");

        Array.from(cm).forEach(fSize => {
          const selFont = fontFmCustom.value;
          const splitfont = cleanFont(selFont);
          fSize.style.fontFamily = `${splitfont}, monospace`;
        });
        fontFmCustom.blur();
        if (dataItems.author) {
          if (
            dataItems.arg === true &&
            dataItems.author != "anonymous"
          ) {
            keyMapSave();
          }
        }
      }
    } else if (e.type === "blur") {

      const cm = document.querySelectorAll(".CodeMirror");

      Array.from(cm).forEach(fSize => {
        const selFont = fontFmCustom.value;
        const splitfont = cleanFont(selFont);
        fSize.style.fontFamily = `${splitfont}, monospace`;
      });
      fontFmCustom.blur();
      if (dataItems.author) {
        if (
          dataItems.arg === true &&
          dataItems.author != "anonymous"
        ) {
          keyMapSave();
        }
      }

    }
  }




  // event for theme settings;
  cmDark.addEventListener("change", changeEditorThemeDark);

  function changeEditorThemeDark() {
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    const editors = [htmlEditor, cssEditor, jsEditor];

    editors.forEach(editor => {
      const selectedTheme = this.selectedOptions[0].getAttribute("name");

      editor.setOption("theme", selectedTheme);
    });
  }





  // event for keymap settings;
  keymaps.addEventListener("change", changeKeymaps);

  function changeKeymaps() {
    if (dataItems.author) {
      if (dataItems.arg === true && dataItems.author != "anonymous") {
        keyMapSave();
      }
    }
    const editors = [htmlEditor, cssEditor, jsEditor];

    editors.forEach(editor => {
      const selectedKeyMap = this.selectedOptions[0].getAttribute("name");

      editor.setOption("keyMap", selectedKeyMap);
    });
  }





  // handles font-ligatures.
  fontLigatures.addEventListener("change", function () {
    const cmPre = document.querySelectorAll(".CodeMirror pre");
    Array.from(cmPre).forEach(cm => {
      if (fontLigatures.checked) {
        cm.style.fontVariantLigatures = "contextual";
      } else if (!fontLigatures.checked) {
        cm.style.fontVariantLigatures = "none"
      }
    })
    if (fontLigatures.checked) {
      __setEditorPreset__("fontLigatures", true);
    } else {
      __setEditorPreset__("fontLigatures", false);
    }
  })




  // color picker type
  colorPickerType.addEventListener("change", function () {
    const editors = [htmlEditor, cssEditor];
    editors.forEach(editor => {
      editor.setOption("colorpicker", false);
      editor.setOption("colorpicker", {
        mode: "edit",
        type: colorPickerType.selectedOptions[0].value
      });
    });
    __setEditorPreset__("colorPicker", colorPickerType.selectedOptions[0].value);
  })
  autoRunDelay.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      const runDelayTimeout = parseInt(this.value, 10) > 10000 ? 10000 : parseInt(this.value, 10);
      autoRunDelay.value = "" + runDelayTimeout;
      autoRunDelay.blur();
      __setEditorPreset__("runDelayTimeout", runDelayTimeout);
    }
  })

  autoRunDelay.addEventListener("change", function () {

    const runDelayTimeout = parseInt(this.value, 10);
    autoRunDelay.blur();
    __setEditorPreset__("runDelayTimeout", runDelayTimeout);

  });
  loopTimeout.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      const lt = parseInt(this.value, 10) > 5000 ? 5000 : parseInt(this.value, 10);
      loopTimeout.value = "" + lt;
      loopTimeout.blur();
      __setEditorPreset__("loopTimeout", lt);
    }
  })
  loopTimeout.addEventListener("change", function () {

    const lt = parseInt(this.value, 10);
    loopTimeout.blur();
    __setEditorPreset__("loopTimeout", lt);

  })

}

function changeEditorSettings(
  htmlEditor,
  cssEditor,
  jsEditor,
  editorSettings,
  cmDark,
  fontFm,
  sizes,
  keymaps
) {


  //checks if custom font matches the predef one
  fontFm.namedItem(editorSettings.font.split(",")[0]) ?
    (fontFm.options.selectedIndex = fontFm.namedItem(
      editorSettings.font.split(",")[0]
    ).index) :
    null;

  // checks if custom fontsize matched the predef one
  sizes.namedItem(editorSettings.fSize) ?
    (sizes.options.selectedIndex = sizes.index) :
    null;

  // checks if theme exists
  cmDark.namedItem(editorSettings.theme) ? cmDark.options.selectedIndex = cmDark.namedItem(editorSettings.theme).index : null
  // checks if keymap exists
  keymaps.namedItem(editorSettings.keymap) ? keymaps.options.selectedIndex = keymaps.namedItem(editorSettings.keymap).index : null

  const themeFSize = document.querySelectorAll(".CodeMirror");
  const k = Array.from(themeFSize);
  const m = [k[1], k[2], k[3]];
  m.forEach(size => {
    customFSize.value = editorSettings.fSize;
    size.style.fontSize = `${parseInt(customFSize.value, 10)}px`;
    const splitfont = editorSettings.font;
    size.style.fontFamily = `${splitfont}, monospace`;
    // just a little string hack.
    const x = splitfont
      .split(`"`)
      .join(" ")
      .split(",")
      .map(a => a.trim())
      .join(", ");
    fontFmCustom.value = `${x}`;
  });

  const editors = [htmlEditor, cssEditor, jsEditor];

  editors.forEach(editor => {
    editor.setOption("theme", editorSettings.theme);

    editor.setOption("keyMap", editorSettings.keymap);
  });
}

function handleFooterLnCol() {
  const edLn = document.querySelector(".ln");
  const edCh = document.querySelector(".ch");
  const selected = document.querySelector(".line-selected")
  editors.forEach(editor => {
    const editorMode = document.querySelector(".editor-mode");
    editor.on("cursorActivity", () => {
      const cur = editor.getCursor();
      let ln = cur.line;
      let col = cur.ch;
      edLn.innerText = `${ln + 1}`;
      edCh.innerText = `${col + 1}`;
      if (editor === htmlEditor) {
        editorMode.style.opacity = "1";
        editorMode.innerText = `${csse.html}`;
        editorMode.style.margin = "4px";

        editorMode.style.padding = "5px";
      } else if (editor === cssEditor) {
        editorMode.innerText = `${csse.css}`;
        editorMode.style.opacity = "1";
        editorMode.style.margin = "4px";
        editorMode.style.padding = "5px";
      } else if (editor === jsEditor) {
        editorMode.style.opacity = "1";
        if (csse.js === "babel") {
          editorMode.innerText = "javascript with babel"
        } else if (csse.js === "jsx") {
          editorMode.innerText = "javascript with react"
        } else {
          editorMode.innerText = `${csse.js}`
        }

        editorMode.style.margin = "4px";
        editorMode.style.padding = "5px";
      }
      const selectedLen = editor
        .getSelection()
        .split("\n")
        .join("").length;
      selectedLen >= 1 ? selected.textContent = `(${selectedLen} selected)` : selected.textContent = ``;

    });
  });
}
handleFooterLnCol();
toggleLinter.addEventListener("click", () => {
  if (linterCh.checked) {
    toggleLinter.setAttribute("data-label", "Linter: off");
    linterITag.innerText = "clear";
    linterCh.checked = false;
    lint(false);
  } else if (!linterCh.checked) {
    toggleLinter.setAttribute("data-label", "Linter: on");
    linterITag.innerText = "done";
    linterCh.checked = true;
    lint(true);
  }
});


editorSkins.addEventListener("change", (e) => {
  changeEditorSkin(editorSkins.selectedOptions[0].value);
  __setEditorPreset__("skin", editorSkins.selectedOptions[0].value);
})

function changeEditorSkin(skinType) {
  const skins = {
    dark: {
      "--editor-color": "rgba(19, 22, 31, 1)",
      "--page-color": "#0f111a",
      "--def-color": "rgba(108, 103, 131, 0.61)",
      "--def-color-solid": "rgba(108, 103, 131, 1)",
      "--settings-color": "#aaa",
      "--def-bg": "#1f222c",
      "--light": "white",
      "--light-solid": "#ddd",
      "--light-solid-2": "#ccc",
      "--svg-fill": "#6c6783",
      "--settings-border-2": "rgba(38, 44, 63, 0.801)",
      "--textarea-bg": "rgba(19, 22, 31, 1)",
      "--textarea-border": "rgba(38, 44, 63, 0.801)"
    },
    darkplus: {
      "--editor-color": "#11131A",
      "--page-color": "#090b10",
      "--def-color": "rgba(108, 103, 131, 0.61)",
      "--def-color-solid": "rgba(108, 103, 131, 1)",
      "--settings-color": "#aaa",
      "--def-bg": "#1f222c",
      "--light": "white",
      "--light-solid": "#ddd",
      "--light-solid-2": "#ccc",
      "--svg-fill": "#6c6783",
      "--settings-border-2": "rgba(38, 44, 63, 0.801)",
      "--textarea-bg": "rgba(20, 24, 29, 0.361)",
      "--textarea-border": "rgba(116, 124, 148, 0.7)"
    },
    palenight: {
      "--editor-color": "#212733",
      "--page-color": "#1a1f28",
      "--def-color": "rgba(108, 103, 131, 0.61)",
      "--def-color-solid": "rgba(108, 103, 131, 1)",
      "--settings-color": "#aaa",
      "--def-bg": "#141822",
      "--light": "white",
      "--light-solid": "#ddd",
      "--light-solid-2": "#ccc",
      "--svg-fill": "#6c6783",
      "--settings-border-2": "rgba(38, 44, 63, 0.801)",
      "--textarea-bg": "rgba(20, 24, 29, 0.361)",
      "--textarea-border": "rgba(116, 124, 148, 0.7)"
    }
  };

  const colors = skins[skinType];
  let i;
  for (i in colors) {
    document.documentElement.style.setProperty(i, colors[i])
  }

}