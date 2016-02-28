describe('singularize', function(){
    
    it('should work for uncountable words', function(){
        expect(humanize.singularize('equipment')).toEqual('equipment')
        expect(humanize.singularize('Equipment')).toEqual('Equipment')
        
        expect(humanize.singularize('aircraft')).toEqual('aircraft')
        expect(humanize.singularize('Aircraft')).toEqual('Aircraft')
    })
    
    it('should work for irregular words', function(){
        expect(humanize.singularize('men')).toEqual('man')
        expect(humanize.singularize('Men')).toEqual('Man')
        
        expect(humanize.singularize('people')).toEqual('person')
        expect(humanize.singularize('People')).toEqual('Person')
    })
    
    it('should pluralie word', function(){
        expect(humanize.singularize('users')).toEqual('user')
        expect(humanize.singularize('statuses')).toEqual('status')
        expect(humanize.singularize('fungi')).toEqual('fungus')
        expect(humanize.singularize('mice')).toEqual('mouse')
        expect(humanize.singularize('matrices')).toEqual('matrix')
    })
    
})