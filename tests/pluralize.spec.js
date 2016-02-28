describe('pluralize', function(){
    
    it('should work for uncountable words', function(){
        expect(humanize.pluralize('equipment')).toEqual('equipment')
        expect(humanize.pluralize('Equipment')).toEqual('Equipment')
        
        expect(humanize.pluralize('aircraft')).toEqual('aircraft')
        expect(humanize.pluralize('Aircraft')).toEqual('Aircraft')
    })
    
    it('should work for irregular words', function(){
        expect(humanize.pluralize('man')).toEqual('men')
        expect(humanize.pluralize('Man')).toEqual('Men')
        
        expect(humanize.pluralize('person')).toEqual('people')
        expect(humanize.pluralize('Person')).toEqual('People')
    })
    
    it('should pluralie word', function(){
        expect(humanize.pluralize('user')).toEqual('users')
        expect(humanize.pluralize('status')).toEqual('statuses')
        expect(humanize.pluralize('fungus')).toEqual('fungi')
        expect(humanize.pluralize('mouse')).toEqual('mice')
        expect(humanize.pluralize('matrix')).toEqual('matrices')
    })
    
})