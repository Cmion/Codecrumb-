const gulp = require("gulp");
const minify = require("gulp-minify");
const concat = require("gulp-concat");
const sourceMaps = require("gulp-sourcemaps");
const cleanCss = require("gulp-clean-css");

gulp.task("copyHTML", function() {
  return gulp.src("src/template/*.html").pipe(gulp.dest("templates"));
});
gulp.task("copyErrorHTML", function() {
  return gulp
    .src("src/template/errors/*.html")
    .pipe(gulp.dest("templates/errors"));
});
gulp.task("copyCSS", function() {
  return gulp
    .src("src/css/*.css")
    .pipe(cleanCss())
    .pipe(gulp.dest("static/css"));
});
gulp.task("copyJS", function() {
  return gulp
    .src([
      "src/js/account.js",
      "src/js/login.js",
      "src/js/error.js",
      "src/js/readMe.js"
    ])
    .pipe(gulp.dest("static/js"));
});

// concats codemirror css files into a single file.
gulp.task("joinCodeMirrorCss", function() {
  return gulp
    .src([
      "static/lib/codemirror/lib/codemirror.css",
      "static/lib/codemirror/addon/hint/show-hint.css",
      "static/lib/codemirror/addon/fold/foldgutter.css",
      "static/lib/codemirror/addon/dialog/dialog.css",
      "static/lib/codemirror/addon/search/matchesonscrollbar.css",
      "static/lib/codemirror/addon/scroll/simplescrollbars.css",
      "static/lib/codemirror/addon/lint/lint.css"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("crumbmirror.css"))
    .pipe(cleanCss())
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/lib/codemirror/lib/"));
});

// concats codemirror js files into a single file.
gulp.task("joinCMAddons", function() {
  return gulp
    .src([
      "static/js/codemirror.js",
      "static/lib/codemirror/addon/edit/closetag.js",
      "static/lib/codemirror/addon/fold/xml-fold.js",
      "static/lib/codemirror/addon/fold/foldcode.js",
      "static/lib/codemirror/addon/scroll/simplescrollbars.js",
      "static/lib/codemirror/addon/fold/foldgutter.js",
      "static/lib/codemirror/addon/fold/markdown-fold.js",
      "static/lib/codemirror/addon/fold/brace-fold.js",
      "static/lib/codemirror/addon/fold/indent-fold.js",
      "static/lib/codemirror/addon/selection/active-line.js",
      "static/lib/codemirror/addon/hint/show-hint.js",
      "static/lib/codemirror/addon/hint/anyword-hint.js",
      "static/lib/codemirror/addon/hint/html-hint.js",
      "static/lib/codemirror/addon/hint/css-hint.js",
      "static/lib/codemirror/addon/hint/xml-hint.js",
      "static/lib/codemirror/addon/hint/javascript-hint.js",
      "static/lib/codemirror/addon/edit/matchtags.js",
      "static/lib/codemirror/addon/edit/closebrackets.js",
      "static/lib/codemirror/addon/edit/matchbrackets.js",
      "static/lib/codemirror/addon/lint/lint.js",
      "static/lib/codemirror/addon/lint/javascript-lint.js",
      "static/lib/codemirror/addon/lint/coffeescript-lint.js",
      "static/lib/codemirror/addon/lint/html-lint.js",
      "static/lib/codemirror/addon/lint/css-lint.js",
      "static/lib/codemirror/addon/dialog/dialog.js",
      "static/lib/codemirror/addon/overlay/overlay.js",
      "static/lib/codemirror/addon/search/searchcursor.js",
      "static/lib/codemirror/addon/scroll/annotatescrollbar.js",
      "static/lib/codemirror/addon/search/matchesonscrollbar.js",
      "static/lib/codemirror/addon/search/jump-to-line.js",
      "static/lib/codemirror/addon/comment/comment.js",
      "static/lib/codemirror/keymap/vim.js",
      "static/lib/codemirror/keymap/sublime.js",
      "static/lib/codemirror/mode/xml/xml.js",
      "static/lib/codemirror/mode/pug/pug.js",
      "static/lib/codemirror/mode/markdown/markdown.js",
      "static/lib/codemirror/mode/gfm/gfm.js",
      "static/lib/codemirror/mode/clike/clike.js",
      "static/lib/codemirror/mode/meta.js",
      "static/lib/codemirror/mode/sass/sass.js",
      "static/lib/codemirror/mode/stylus/stylus.js",
      "static/lib/codemirror/mode/coffeescript/coffeescript.js",
      "static/lib/codemirror/mode/jsx/jsx.js",
      "static/lib/codemirror/mode/javascript/javascript.js",
      "static/lib/codemirror/mode/css/css.js",
      "static/lib/codemirror/mode/htmlmixed/htmlmixed.js",
      "static/lib/emmet/emmet.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("codemirror.js"))
    .pipe(minify())
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/lib/codemirror/lib"));
});

gulp.task("readme", function() {
  return gulp
    .src([
      "static/js/codemirror.js",
      "static/lib/codemirror/mode/xml/xml.js",
      "static/lib/codemirror/mode/markdown/markdown.js",
      "static/lib/codemirror/mode/gfm/gfm.js",
      "static/lib/codemirror/mode/clike/clike.js",
      "static/lib/codemirror/addon/fold/foldcode.js",
      "static/lib/codemirror/addon/scroll/simplescrollbars.js",
      "static/lib/codemirror/addon/fold/foldgutter.js",
      "static/lib/codemirror/addon/fold/markdown-fold.js",
      "static/lib/codemirror/addon/overlay/overlay.js",
      "static/lib/codemirror/addon/fold/indent-fold.js",
      "static/lib/codemirror/addon/selection/active-line.js",
      "static/lib/codemirror/mode/javascript/javascript.js",
      "static/lib/codemirror/mode/css/css.js",
      "static/lib/codemirror/mode/htmlmixed/htmlmixed.js",
      "static/lib/prettier/parser-markdown.js",
      "static/lib/prettier/parser-html.js",
      "static/lib/prettier/standalone-min.js",
      "static/lib/transpilers/showdown.min.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("readme-editor.js"))
    .pipe(minify())
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/lib/codemirror/lib"));
});
// concats preprocessors  js files into a single file.
gulp.task("joinPre", function() {
  return gulp
    .src([
      "static/lib/transpilers/babel-standalone.min.js",
      "static/lib/transpilers/loop-protect-min.js",
      "static/lib/transpilers/typescript.js",
      "static/lib/transpilers/coffee-script.js",
      "static/lib/transpilers/jade.js",
      "static/lib/transpilers/showdown.min.js",
      "static/lib/transpilers/stylus.min.js",
      "static/lib/transpilers/less.min.js",
      "static/lib/transpilers/sass-min.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("prepro.js"))
    .pipe(sourceMaps.write("../../maps/"))
    .pipe(gulp.dest("static/js"));
});

// concats linters js files into a single file.
gulp.task("linter", function() {
  return gulp
    .src([
      "static/lib/tools/linters/jshint-min.js",
      "static/lib/tools/linters/csslint-min.js",
      "static/lib/tools/linters/jsonlint-min.js",
      "static/lib/tools/linters/coffeelint.min.js",
      "static/lib/tools/linters/htmlhint.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("linters.js"))
    .pipe(sourceMaps.write("../../../maps/"))
    .pipe(gulp.dest("static/lib/tools/linters"));
});

// concats prettier standalone and parsers into a single file.
gulp.task("prettier", function() {
  return gulp
    .src([
      "static/lib/prettier/parser-postcss.js",
      "static/lib/prettier/parser-babylon.js",
      "static/lib/prettier/parser-html.js",
      "static/lib/prettier/parser-markdown.js",
      "static/lib/prettier/standalone-min.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("prettify.js"))
    .pipe(sourceMaps.write("../../../maps/"))
    .pipe(gulp.dest("static/lib/prettier"));
});

// concats the mainjs and its utils into a single file
gulp.task("joinEditor-one", function() {
  return gulp
    .src(["src/utils/define-mode.js", "src/js/codecrumb.js", "src/js/utils.js"])
    .pipe(sourceMaps.init())
    .pipe(concat("editor-one.js"))
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/js"));
});
gulp.task("joinEditor-two", function() {
  return gulp
    .src([
      "src/utils/define-mode.js",
      "src/js/codecrumb.v.js",
      "src/js/utils.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("editor-two.js"))
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/js"));
});

gulp.task("joinCrumbpage", function() {
  return gulp
    .src([
      "src/utils/define-mode.js",
      "src/utils/initialise-modes.js",
      "src/js/crumb.js",
      "src/utils/deferred.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("crumbpage.js"))
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/js"));
});

// concats codemirror themes into a single file.
gulp.task("jointheme", function() {
  return gulp
    .src([
      "static/lib/codemirror/theme/dracula.css",
      "static/lib/codemirror/theme/duotone-dark.css",
      "static/lib/codemirror/theme/3024-night.css",
      "static/lib/codemirror/theme/mdn-like.css",
      "static/lib/codemirror/theme/monokai.css",
      "static/lib/codemirror/theme/neo.css",
      "static/lib/codemirror/theme/seti.css",
      "static/lib/codemirror/theme/material.css",
      "static/lib/codemirror/theme/gruvbox-dark.css",
      "static/lib/codemirror/theme/liquibyte.css",
      "static/lib/codemirror/theme/the-matrix.css",
      "static/lib/codemirror/theme/midnight.css",
      "static/lib/codemirror/theme/andromeda.css",
      "static/lib/codemirror/theme/material-ocean.css"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("theme.css"))
    .pipe(cleanCss())
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("static/lib/codemirror/theme/"));
});

// concats utility files into a single file.
gulp.task("concatUtils", function() {
  return gulp
    .src([
      "src/utils/deferred.js",
      "src/utils/define-state.js",
      "src/utils/initialise-modes.js",
      "src/utils/initialise-state.js",
      "src/utils/compute-preview.js",
      "src/utils/animate.js",
      "src/utils/reset-tabs.js",
      "src/utils/setting-buttons.js",
      "src/utils/keyboardShortcuts.js",
      "src/utils/tidy.js",
      "src/utils/timer.js",
      "src/utils/proxyConsole.js",
      "src/utils/export.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(concat("utils.js"))
    .pipe(sourceMaps.write("maps/"))
    .pipe(gulp.dest("src/js/"));
});

gulp.task(
  "copy",
  gulp.series("copyJS", "joinEditor-one", "joinEditor-two", "joinCrumbpage")
);

gulp.task("watch-html", () => {
  gulp.watch("src/template/**/*html", gulp.series("copyHTML"));
  gulp.watch("src/template/errors/**/*html", gulp.series("copyErrorHTML"));
});

gulp.task("watch-static", function() {
  gulp.watch("src/js/**/*js", gulp.series("copy"));
  gulp.watch(
    "src/utils/**/*js",
    gulp.series("concatUtils", "joinEditor-one", "joinEditor-two")
  );
});
gulp.task("watch-css", function() {
  gulp.watch("src/css/**/*css", gulp.series("copyCSS"));
});

gulp.task("min", function() {
  return gulp
    .src("static/lib/transpilers/marked.js")
    .pipe(sourceMaps.init())
    .pipe(minify())
    .pipe(sourceMaps.write("../../../maps/"))
    .pipe(gulp.dest("static/lib/transpilers/"));
});
