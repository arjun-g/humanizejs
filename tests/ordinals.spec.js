describe('ordinals', function(){
    it('should work for 1', function(){
        expect(humanize.toOrdinal(1)).toEqual('1st')
        expect(humanize.toOrdinal(21)).toEqual('21st')
        expect(humanize.toOrdinal(1021)).toEqual('1021st')
    })
    it('should work for 2', function(){
        expect(humanize.toOrdinal(2)).toEqual('2nd')
        expect(humanize.toOrdinal(22)).toEqual('22nd')
        expect(humanize.toOrdinal(1022)).toEqual('1022nd')
    })
    it('should work for 3', function(){
        expect(humanize.toOrdinal(3)).toEqual('3rd')
        expect(humanize.toOrdinal(23)).toEqual('23rd')
        expect(humanize.toOrdinal(1023)).toEqual('1023rd')
    })
    it('should work for special cases 11, 12 and 13', function(){
        expect(humanize.toOrdinal(11)).toEqual('11th')
        expect(humanize.toOrdinal(12)).toEqual('12th')
        expect(humanize.toOrdinal(13)).toEqual('13th')
        
        expect(humanize.toOrdinal(11)).not.toEqual('11st')
        expect(humanize.toOrdinal(12)).not.toEqual('12nd')
        expect(humanize.toOrdinal(13)).not.toEqual('13rd')
        
        expect(humanize.toOrdinal(1011)).toEqual('1011th')
        expect(humanize.toOrdinal(1012)).toEqual('1012th')
        expect(humanize.toOrdinal(1013)).toEqual('1013th')
        
        expect(humanize.toOrdinal(1011)).not.toEqual('1011st')
        expect(humanize.toOrdinal(1012)).not.toEqual('1012nd')
        expect(humanize.toOrdinal(1013)).not.toEqual('1013rd')
    })
    it('should work for all other numbers', function(){
        expect(humanize.toOrdinal(7)).toEqual('7th')
        expect(humanize.toOrdinal(16)).toEqual('16th')
        expect(humanize.toOrdinal(1016)).toEqual('1016th')
    })
})