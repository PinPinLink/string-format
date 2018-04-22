(function() {
  if (String.format) {
    return;
  }
  String.prototype.format = function( /* arguments */ ) {
    var src = this;
    for (var i = 0, j = arguments.length; i < j; i++) {
      if (arguments[i] instanceof Array) {
        for (var x = 0, y = arguments[i].length; x < y; x++) {
          src = src.replace(
            new RegExp('\\$\\{' + x + '\\}', 'g'), arguments[i][x]
          );
        }
      } else if (arguments[i] instanceof Object) {
        for (var k in arguments[i]) {
          if (arguments[i].hasOwnProperty(k)) {
            src = src.replace(
              new RegExp('\\$\\{' + k + '\\}', 'g'), arguments[i][k]
            );
          }
        }
      } else {
        src = src.replace(
          new RegExp('\\$\\{' + (i) + '\\}', 'g'), arguments[i]
        );
      }
    }
    return src;
  }
})();
