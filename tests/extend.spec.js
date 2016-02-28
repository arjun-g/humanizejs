describe('extend prototype', function(){
    
    beforeEach(function(){
        humanize.extendPrototype();
    })
    
    it('should test filter', function(){
        expect((1).toOrdinal()).toEqual('1st')
    })
    
})