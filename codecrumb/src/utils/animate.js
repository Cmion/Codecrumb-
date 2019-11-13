/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function animate() {
  function classToggler(e) {
    const html = htmlTab.getAttribute("data-tab");

    const css = cssTab.getAttribute("data-tab");
    const js = jsTab.getAttribute("data-tab");
    const tabs = [htmlPen, cssPen, jsPen];
    tabs.forEach(tab => {
      const attr = tab.getAttribute("data-pen");
      if (e.currentTarget.getAttribute("data-tab") === html && attr === html) {
        tab.classList.add("pen-active");
      } else if (
        e.currentTarget.getAttribute("data-tab") === css &&
        attr === css
      ) {
        tab.classList.add("pen-active");
      } else if (
        e.currentTarget.getAttribute("data-tab") == js &&
        attr === js
      ) {
        tab.classList.add("pen-active");
      } else {
        tab.classList.remove("pen-active");
      }
    });
  }
  requestAnimationFrame(function() {
    const tabs = [htmlTab, cssTab, jsTab];

    tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        e.preventDefault();
        const current = e.currentTarget.classList;
        const htmlClass = htmlTab.classList;
        const cssClass = cssTab.classList;
        const jsClass = jsTab.classList;

        //css
        if (
          (!current.contains("active") && htmlClass.contains("active")) ||
          jsClass.contains("active")
        ) {
          htmlClass.remove("active") || jsClass.remove("active");

          current.add("active");
          classToggler(e);
        } //js
        else if (
          (!current.contains("active") && htmlClass.contains("active")) ||
          cssClass.contains("active")
        ) {
          htmlClass.remove("active") || cssClass.remove("active");

          current.add("active");

          classToggler(e);
        }
        //html
        else if (
          (!current.contains("active") && cssClass.contains("active")) ||
          jsClass.contains("active")
        ) {
          cssClass.remove("active") || jsClass.remove("active");

          current.add("active");

          classToggler(e);
        }
      });
    });

    const settings = [
      generalSettings,
      languageSettings,
      customSettings,
      balanceSettings,
      behaviourSettings,
      kbdSettings
    ];

    const settingsTabs = [
      generalTab,
      languageTab,
      customTab,
      balanceTab,
      behaviourTab,
      kbdTab
    ];
    settingsTabs.forEach(tabs => {
      tabs.addEventListener("click", e => {
        const currentClass = e.currentTarget.classList;
        const genClass = generalTab.classList;
        const langClass = languageTab.classList;
        const libClass = customTab.classList;
        const balClass = balanceTab.classList;
        const behClass = behaviourTab.classList;
        const kbdClass = kbdTab.classList;
        // for language

        if (
          (!currentClass.contains("cover-active") &&
            genClass.contains("cover-active")) ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for general
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for balance
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for behaviour
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          balClass.contains("cover-active") ||
          kbdClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          kbdClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        // for keyboard
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          libClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          libClass.remove("cover-active");
          currentClass.add("cover-active");
        }

        // for lib
        else if (
          (!currentClass.contains("cover-active") &&
            langClass.contains("cover-active")) ||
          genClass.contains("cover-active") ||
          balClass.contains("cover-active") ||
          behClass.contains("cover-active") ||
          kbdClass.contains("cover-active")
        ) {
          langClass.remove("cover-active");
          genClass.remove("cover-active");
          balClass.remove("cover-active");
          behClass.remove("cover-active");
          kbdClass.remove("cover-active");
          currentClass.add("cover-active");
        }
        toggleSettings(tabs);
      });
    });

    function toggleSettings(tabs) {
      settings.forEach(sets => {
        if (tabs == generalTab) {
          sets.classList.remove("settings-active");
          generalSettings.classList.add("settings-active");
        } else if (tabs == languageTab) {
          sets.classList.remove("settings-active");
          languageSettings.classList.add("settings-active");
        } else if (tabs == balanceTab) {
          sets.classList.remove("settings-active");
          balanceSettings.classList.add("settings-active");
        } else if (tabs == behaviourTab) {
          sets.classList.remove("settings-active");
          behaviourSettings.classList.add("settings-active");
        } else if (tabs == kbdTab) {
          sets.classList.remove("settings-active");
          kbdSettings.classList.add("settings-active");
        } else if (tabs == customTab) {
          sets.classList.remove("settings-active");
          customSettings.classList.add("settings-active");
        }
      });
    }
    let isCog = false;
    settingsBtn.addEventListener("click", () => {
      // editorMenuMain.style.animation = "menu-in .1s linear;
      editorMenuMain.style.display = "flex";
      editorMenuMain.style.animation = "none";
    });

    const penModeSettings = [htmlMode, cssMode, jsMode];
    window.addEventListener("click", e => {
      if (e.target === editorMenuMain) {
        if (isCog) {
          penModeSettings.forEach(mode => {
            const cog = mode.firstChild;
            cog.style.color = "#fff";
          });
        }

        editorMenuMain.style.display = "none";
        editorMenuMain.style.animation = "none";
        //
      }
    });

    penModeSettings.forEach(mode => {
      mode.addEventListener("click", e => {
        e.preventDefault();
        const cog = mode.firstChild;
        cog.style.color = "#568af2";
        toggleLanguageSettings();
        isCog = true;
      });
    });

    function toggleLanguageSettings() {
      settings.forEach(set => {
        if (set.classList.contains("settings-active")) {
          set.classList.remove("settings-active");
          languageSettings.classList.add("settings-active");
        }
      });
      settingsTabs.forEach(tab => {
        if (tab.classList.contains("cover-active")) {
          tab.classList.remove("cover-active");
          languageTab.classList.add("cover-active");
        }
      });
      editorMenuMain.style.animation = "menu-in .1s ease forwards";

      editorMenuMain.style.display = "flex";
      editorMenuMain.style.animation = "none";
    }
  });

  window.addEventListener("load", function() {
    // eslint-disable-next-line no-undef
    // loader.firstElementChild.style.animation = "none";
    // loader.firstElementChild.style.willChange = "none";
    loader.classList.add("load-off");
    // loader.style.display = "none";
  });
}
