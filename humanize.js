(function(window) {
    'use strict';

    const TYPE_FILE_SIZE = 'filesize'

    const BYTE_SIZE = 1024
    
    function humanize() {
        this.toFileSize = toFileSize
        this.extendPrototype = extendPrototype
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
    
    function extendPrototype() {
        if(Number && Number.prototype && !Number.prototype.toFileSize){
            Number.prototype.toFileSize = fileSizePrototype
            function fileSizePrototype(decimal){
                return toFileSize(this, decimal)
            } 
        }
    }
    
    if(window && window.angular){
        (function(angular){
            angular
              .module('ngHumanize', [])
              .filter('humanize', humanizeFilter)
              
            function humanizeFilter(){
                return function(input, type){
                    switch(type){
                        case TYPE_FILE_SIZE:
                            return toFileSize(input, arguments[2])
                        default:
                            return input
                    }
                }
            }
        })(window.angular)
    }
    
    if (window && typeof window.define === "function" && window.define.amd ) {
        (function(define){
            define( "humanize", [], function() {
                return humanize();
            });
        })(window.define);
    }
    
    if(module && module.exports){
        (function(module){
            module.exports = humanize()
        })(module)
    }
    
})(window);