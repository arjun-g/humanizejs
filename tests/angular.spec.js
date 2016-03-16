describe('angular filter', function(){
    
    var $filter;
    
    beforeEach(function(){
        module('ngHumanize');
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    })
    
    it('should convert file size', function(){
        var value = 123456789;
        var result = $filter('humanize')(value, 'filesize')
        expect(result).toEqual('117.74 MB')
    })
    
    it('should ordinalize', function(){
        var value = 1;
        var result = $filter('humanize')(value, 'ordinal')
        expect(result).toEqual('1st')
    })
    
    it('should pluralize', function(){
        var value = 'child';
        var result = $filter('humanize')(value, 'pluralize')
        expect(result).toEqual('children')
    })
    
    it('should singularize', function(){
        var value = 'children';
        var result = $filter('humanize')(value, 'singularize')
        expect(result).toEqual('child')
    })
    
})