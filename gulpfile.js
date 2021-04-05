const {src, dest} = require('gulp');

function defaultTask() {
  // place code for your default task here
  return src('src/*.ts')
    .pipe(dest('/Applications/XAMPP/htdocs/laravel-angular/public/gulp/'));
}

exports.default = defaultTask
