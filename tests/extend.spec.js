describe('extend prototype', function(){
    
    beforeEach(function(){
        humanize.extendPrototype();
    })
    
    it('should test extend prototype', function(){
        var value = 1;
        expect(value.toOrdinal()).toEqual('1st')
    })
    
})