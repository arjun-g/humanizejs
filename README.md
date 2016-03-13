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
var humanize = require("humanizejs");
```

###Angular

```javascript
angular.module("app", ["ngHumanize"]);
```

```javascript
angular.module("app").controller("AppController", ["dependancy", function(dependancy){
    var value = 102400;
    var result = $filter('humanize')(value, 'filesize');
}]);
```

```html
<span>{{filesize | humanize : 'filesize'}}</span>
```

##Usage

###File Size

###Ordinalize

###Pluralize

###Singularize
