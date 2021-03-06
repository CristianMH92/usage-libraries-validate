'use strict'

const dummy = require('./dummy/searchFile.dummy');
const fileReader = require('../lib/searchFile');


test('returnUnusedLibraries happy test case',() => { 
	expect(fileReader.returnUnusedLibraries(dummy.libraryFound))
			.toEqual(dummy.libraryList);
});

test('checkForLibrary without file',() => { 
	expect(fileReader.checkForLibrary(dummy.fileList, dummy.libraryList, dummy.libraryFound) )
			.toEqual(dummy.expectingMapLibs);
	dummy.fileStub.restore();
	
	
});



test('readFiles without file',() => { 
	expect(fileReader.readFiles(dummy.libraryList, dummy.fileList))
			.toBe(['jest']);
	dummy.fileStub.restore();
});