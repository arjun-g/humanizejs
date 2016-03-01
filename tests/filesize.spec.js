describe('filesize', function(){
    it('should work on bytes', function(){
        expect(humanize.toFileSize(400)).toEqual('400 B')
        expect(humanize.toFileSize(512)).toEqual('0.5 KB')
        expect(humanize.toFileSize(1024)).toEqual('1 KB')
    })
})