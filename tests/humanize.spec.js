describe('pluralize', function(){
    it('should work for uncountable words', function(){
        expect(humanize.pluralize('equipment')).toEqual('equipment')
        expect(humanize.pluralize('Equipment')).toEqual('Equipment')
        expect(humanize.pluralize('aircraft')).toEqual('aircraft')
    })
    it('should work for irregular words', function(){
        expect(humanize.pluralize('man')).toEqual('men')
        expect(humanize.pluralize('Man')).toEqual('Men')
    })
})