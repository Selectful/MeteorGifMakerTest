describe('uploading a file', function () {  

    it ("should contain 5 file options", function() {
        var files = document.getElementsByClassName('box')
        expect(files.length).toEqual(5);
    });
  
  });
  
  