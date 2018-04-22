# string-format
Javascript String format function polyfill

# Usage

## NPM:
```
npm install @pinpin.link/string-format

require('string-format');
```

## CDN:
```
<script src=" https://raw.githubusercontent.com/PinPinLink/string-format/master/index.js"/>
```

## Example:
```
var test = 'Hello, {0} and {1}';
test.format('Davie', 'Mary'); // return 'Hello, Davie and Mary'

test.format(['Davie', 'Mary']); // return 'Hello, Davie and Mary'

test.format({0: 'Davie', 1: 'Mary'}); // return 'Hello, Davie and Mary'

var test = 'Hello, {gender} {last-name}';
test.format({gender: 'Mr.', 'last-name': 'Solo'}); // return 'Hello, Mr. Solo'
```

# License

This project is licensed under the Apache License 2.0 - [see the file for details](https://github.com/PinPinLink/string-format/blob/master/LICENSE)
