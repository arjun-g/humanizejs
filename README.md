[![Build Status](https://travis-ci.org/arjun-g/humanizejs.svg?branch=master)](https://travis-ci.org/arjun-g/humanizejs)

# humanizejs

##Getting started

###Bower

```bash
bower install humanizejs
```

```html
<script src="bower_components/humanizejs/dist/humanize.min.js"></script>
```

###NPM

```bash
npm install humanizejs
```

```javascript
var humanize = require('humanizejs')
```

###Angular

```javascript
angular.module('app', ['ngHumanize'])
```

##Usage

###File Size

Converts byte size to human readable string

```javascript
var result = humanize.toFileSize(BYTE_SIZE, [DECIMAL_PLACE]); //DECIMAL_PLACE defaults to 2.
```
**Eg**
```javascript
var result1 = humanize.toFileSize(123456789);     //result1 = 117.74 MB
var result2 = humanize.toFileSize(123456789, 4);  //result2 = 117.7376 MB
```

####Angular Filter

```javascript
$filter('humanize')(BYTE_SIZE, 'filesize', [DECIMAL_PLACE])
```

```html
<span>{{BYTE_SIZE | humanize : 'filesize' : [DECIMAL_PLACE]}}</span>
```

**Eg**
```javascript
angular.module('app').controller('AppController', ['dependancy', function(dependancy){
    var value = 123456789
    var result1 = $filter('humanize')(value, 'filesize')     //result1 = 117.74 MB
    var result2 = $filter('humanize')(value, 'filesize', 4)  //result2 = 117.7376 MB
}])
```

```html
<span>{{filesize | humanize : 'filesize'}}</span>      <!-- <span>117.74 MB</span> -->
<span>{{filesize | humanize : 'filesize' : 4}}</span>  <!-- <span>117.7376 MB</span> -->
```

###Ordinalize

Ordinalize numbers

```javascript
var result = humanize.toOrdinal(NUMBER)
```
**Eg**
```javascript
var result1 = humanize.toOrdinal(1)     //result1 = 1st
var result2 = humanize.toOrdinal(2)     //result2 = 2nd
var result3 = humanize.toOrdinal(3)     //result3 = 3rd
var result4 = humanize.toOrdinal(4)     //result3 = 4th
```

####Angular Filter

```javascript
$filter('humanize')(NUMBER, 'ordinal')
```

```html
<span>{{NUMBER | humanize : 'ordinal'}}</span>
```

**Eg**
```javascript
angular.module("app").controller("AppController", ["dependancy", function(dependancy){
    var value = 2
    var result1 = $filter('humanize')(value, 'ordinal')     //result1 = 2nd
}])
```

```html
<span>{{value | humanize : 'ordinal'}}</span>      <!-- <span>2nd</span> -->
```

###Pluralize

Pluralize any string

```javascript
var result = humanize.pluralize(STRING, [IS_KNOWN_SINGULAR])
```
**Eg**
```javascript
var result1 = humanize.pluralize('user')     //result1 = users
var result2 = humanize.pluralize('man')      //result2 = men
var result3 = humanize.pluralize('Man')      //result3 = Men
```

####Angular Filter

```javascript
$filter('humanize')(STRING, 'pluralize')
```

```html
<span>{{STRING | humanize : 'pluralize'}}</span>
```

**Eg**
```javascript
angular.module('app').controller('AppController', ['dependancy', function(dependancy){
    var value = 'man'
    var result1 = $filter('humanize')(value, 'pluralize')     //result1 = men
}])
```

```html
<span>{{value | humanize : 'pluralize'}}</span>      <!-- <span>men</span> -->
```

###Singularize

Singularize any string

```javascript
var result = humanize.singularize(STRING, [IS_KNOWN_PLURAL])
```
**Eg**
```javascript
var result1 = humanize.singularize('users')    //result1 = user
var result2 = humanize.singularize('men')      //result2 = man
var result3 = humanize.singularize('Men')      //result3 = Man
```

####Angular Filter

```javascript
$filter('humanize')(STRING, 'singularize')
```

```html
<span>{{STRING | humanize : 'singularize'}}</span>
```

**Eg**
```javascript
angular.module('app').controller('AppController', ['dependancy', function(dependancy){
    var value = 'men'
    var result1 = $filter('humanize')(value, 'singularize')     //result1 = man
}])
```

```html
<span>{{value | humanize : 'singularize'}}</span>      <!-- <span>man</span> -->
```