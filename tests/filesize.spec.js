describe('filesize', function(){
    it('should work on bytes', function(){
        expect(humanize.toFileSize(400)).toEqual('400 B')
        expect(humanize.toFileSize(512)).toEqual('0.5 KB')
        expect(humanize.toFileSize(1024)).toEqual('1 KB')
        expect(humanize.toFileSize(1024 * 2)).toEqual('2 KB')
        expect(humanize.toFileSize(1024 * 2), 4).toEqual('2 KB')
        expect(humanize.toFileSize(1024 * 1024 * 5.2)).toEqual('5.2 MB')
        expect(humanize.toFileSize(1024 * 1024 * 1024 * 7.589, 3)).toEqual('7.589 GB')
        expect(humanize.toFileSize(1024 * 1024 * 1024 * 1024 * 0.24, 3)).toEqual('245.76 GB')
    })
})