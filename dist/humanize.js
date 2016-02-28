(function(window) {
    
    'use strict'

    var TYPE_FILE_SIZE = 'filesize'
    var TYPE_ORDINAL = 'ordinal'
    var TYPE_PLURALIZE = 'pluralize'
    var TYPE_SINGULARIZE = 'singularize'

    var BYTE_SIZE = 1024
    
    var WORDS_UNCOUNTABLES = ['equipment', 'information', 'rice', 'money', 'species', 'series', 'fish', 'sheep', 'deer', 'aircraft', 'oz', 'tsp', 'tbsp', 'ml', 'l', 'water', 'waters', 'semen', 'sperm']
    
    var WORDS_SINGULAR_RULES = [['s$', ''], ['(n)ews$', '$1ews'], ['([ti])a$', '$1um'], ['((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$', '$1$2sis'],
                                ['(^analy)ses$', '$1sis'], ['([^f])ves$', '$1fe'], ['(hive)s$', '$1'], ['(tive)s$', '$1'], ['([lr])ves$', '$1f'], ['([^aeiouy]|qu)ies$', '$1y'],
                                ['(s)eries$', '$1eries'], ['(m)ovies$', '$1ovie'], ['(x|ch|ss|sh)es$', '$1'], ['([m|l])ice$', '$1ouse'], ['(bus)es$', '$1'], ['(o)es$', '$1'],
                                ['(shoe)s$', '$1'], ['(cris|ax|test)es$', '$1is'], ['(octop|vir|alumn|fung)i$', '$1us'], ['(alias|status)es$', '$1'], ['^(ox)en', '$1'],
                                ['(vert|ind)ices$', '$1ex'], ['(matr)ices$', '$1ix'], ['(quiz)zes$', '$1'], ['(campus)es$', '$1'], ['^are$', 'is'], ['(p)eople$', '$1erson'],
                                ['(m)en$', '$1an'], ['(c)hildren$', '$1hild'], ['(s)exes$', '$1ex'], ['(m)oves$', '$1ove'], ['(g)eese$', '$1oose'], ['(a)lumnae$', '$1lumna'], ['(c)riteria$', '$1riterion'], ['(w)aves$', '$1ave']]
                                
    var WORDS_PLURAL_RULES = [['$', 's'], ['s$', 's'], ['(ax|test)is$', '$1es'], ['(octop|vir|alumn|fung)us$', '$1i'], ['(alias|status)$', '$1es'], ['(bu)s$', '$1ses'], ['(buffal|tomat|volcan)o$','$1oes'],
                              ['([ti])um$', '$1a'], ['sis$', 'ses'], ['(?:([^f])fe|([lr])f)$', '$1$2ves'], ['(hive)$', '$1s'],['([^aeiouy]|qu)y$', '$1ies'], ['(x|ch|ss|sh)$', '$1es'],
                              ['(matr|vert|ind)ix|ex$', '$1ices'], ['([m|l])ouse$', '$1ice'], ['^(ox)$', '$1en'], ['(quiz)$', '$1zes'], ['(campus)$', '$1es'], ['^is$', 'are'], ['(p)erson$', '$1eople'],
                              ['(m)an$', '$1en'], ['(c)hild$', '$1hildren'], ['(s)ex$', '$1exes'], ['(m)ove$', '$1oves'], ['(g)oose$', '$1eese'], ['(a)lumna$', '$1lumnae'], ['(c)riterion$', '$1riteria'], ['(w)ave$', '$1aves']]
                              
    var ORDINAL_RULES = [['$', 'th'], ['(3)$', '$1rd'], ['(2)$', '$1nd'], ['(1)$', '$1st'], ['(1[1|2|3])$', '$1th']]                          
    
    function humanize() {
        return {
            toFileSize: toFileSize,
            extendPrototype: extendPrototype,
            toOrdinal: toOrdinal,
            pluralize: pluralize,
            singularize: singularize
        }
    }
    
    function toFileSize(value, decimal){
        decimal = ((decimal = (decimal == undefined) ? 2 : decimal)) > 20 ? 20 : decimal
        if(value < (BYTE_SIZE / 2)) return (value.toFixed(0) + ' B')
        else if(value >= (BYTE_SIZE / 2) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 1))) return ((value / (Math.pow(BYTE_SIZE, 1))).toFixed(decimal) + ' KB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 1)) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 2))) return ((value / (Math.pow(BYTE_SIZE, 2))).toFixed(decimal) + ' MB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 2)) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 3))) return ((value / (Math.pow(BYTE_SIZE, 3))).toFixed(decimal) + ' GB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 3)) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 4))) return ((value / (Math.pow(BYTE_SIZE, 4))).toFixed(decimal) + ' TB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 4)) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 5))) return ((value / (Math.pow(BYTE_SIZE, 5))).toFixed(decimal) + ' PB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 5)) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 6))) return ((value / (Math.pow(BYTE_SIZE, 6))).toFixed(decimal) + ' EB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 6)) && value < ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 7))) return ((value / (Math.pow(BYTE_SIZE, 7))).toFixed(decimal) + ' ZB')
        else if(value >= ((BYTE_SIZE / 2) * Math.pow(BYTE_SIZE, 7))) return ((value / (Math.pow(BYTE_SIZE, 8))).toFixed(decimal) + ' YB')
        else return value
    }
    
    function toOrdinal(value){
        var num = parseInt(value).toString()
        if(num === "0"){
            return num
        }
        return execRules(ORDINAL_RULES, value)
    }
    
    function pluralize(value, isSingular){
        
        if(WORDS_UNCOUNTABLES.indexOf(value.toLowerCase()) >= 0){
            return value;
        }
        
        var result = execRules(WORDS_PLURAL_RULES, value)
        
        if(isSingular){
            return result
        }
        
        var singular = execRules(WORDS_SINGULAR_RULES, value)
        var singularAsPlural = execRules(WORDS_PLURAL_RULES, value)
        
        if (singular != null && singular != value && singular + "s" != value && singularAsPlural == value && result != value)
            return value
        
        return result
    }
    
    function singularize(value, isPlural){
        
        if(WORDS_UNCOUNTABLES.indexOf(value.toLowerCase()) >= 0){
            return value;
        }
        
        var result = execRules(WORDS_PLURAL_RULES, value)
        
        if(isPlural){
            return result
        }
        
        var plural = execRules(WORDS_SINGULAR_RULES, value)
        var pluralAsSingular = execRules(WORDS_PLURAL_RULES, value)
        
        if (plural != null && plural != value && plural + "s" != value && pluralAsSingular == value && result != value)
            return value
        
        return result
    }
    
    function execRules(rules, value){
        value = value.toString()
        var regexp = null
        for(var i = rules.length - 1; i >= 0; i--){
            regexp = new RegExp(rules[i][0], 'i')
            if(regexp.test(value))
                return value.replace(regexp, rules[i][1])
        }
        return value
    }
    
    function extendPrototype() {
        if(Number && Number.prototype && !Number.prototype.toFileSize){
            Number.prototype.toFileSize = function(decimal){
                return toFileSize(this, decimal)
            }
        }
        if(Number && Number.prototype && !Number.prototype.toOrdinal){
            Number.prototype.toOrdinal = function() {
                return toOrdinal(this)
            }
        }
        if(String && String.prototype && !String.prototype.pluralize){
            String.prototype.pluralize = function(isSingular){
                return pluralize(this, isSingular)
            }
        }
        if(String && String.prototype && !String.prototype.singularize){
            String.prototype.singularize = function(isPlural){
                return singularize(this, isPlural)
            }
        }
    }
    
    if(window){
        
        if(window.exports){
            window.exports = humanize()
        }
        else{
            window.humanize = humanize()
        }
        
        if(window.angular){
            (function(angular){
                angular
                .module('ngHumanize', [])
                .filter('humanize', humanizeFilter)
                
                function humanizeFilter(){
                    return function(input, type){
                        switch(type){
                            case TYPE_FILE_SIZE:
                                return toFileSize(input, arguments[2])
                            case TYPE_ORDINAL:
                                return toOrdinal(input)
                            case TYPE_PLURALIZE:
                                return pluralize(input, arguments[2])
                            case TYPE_SINGULARIZE:
                                return singularize(input, arguments[2])
                            default:
                                return input
                        }
                    }
                }
            })(window.angular)
        }
        
        if (typeof window.define === 'function' && window.define.amd) {
            (function(define){
                define('humanize', [], function() {
                    return humanize()
                })
            })(window.define)
        }
        
    }
    
})((typeof window !== 'undefined' && window) || (typeof module !== 'undefined' && module))