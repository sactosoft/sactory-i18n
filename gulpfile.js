var gulp = require("gulp");
var { plugin } = require("@sactory/dev");

gulp.task("dist", plugin("i18n", ["Language"]));
