// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
var context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlHQUFpRztBQUVqRyxPQUFPLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM5QixNQUFNLDJDQUEyQyxDQUFDO0FBSW5ELHFEQUFxRDtBQUNyRCxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDOUIsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUFFLENBQ2hDLENBQUM7QUFDRiw4QkFBOEI7QUFDOUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzNELHdCQUF3QjtBQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHJlcXVpcmVkIGJ5IGthcm1hLmNvbmYuanMgYW5kIGxvYWRzIHJlY3Vyc2l2ZWx5IGFsbCB0aGUgLnNwZWMgYW5kIGZyYW1ld29yayBmaWxlc1xuXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLXRlc3RpbmcnO1xuaW1wb3J0IHsgZ2V0VGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge1xuICBCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUsXG4gIHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nJztcblxuZGVjbGFyZSBjb25zdCByZXF1aXJlOiBhbnk7XG5cbi8vIEZpcnN0LCBpbml0aWFsaXplIHRoZSBBbmd1bGFyIHRlc3RpbmcgZW52aXJvbm1lbnQuXG5nZXRUZXN0QmVkKCkuaW5pdFRlc3RFbnZpcm9ubWVudChcbiAgQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLFxuICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpXG4pO1xuLy8gVGhlbiB3ZSBmaW5kIGFsbCB0aGUgdGVzdHMuXG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC5zcGVjXFwudHMkLyk7XG4vLyBBbmQgbG9hZCB0aGUgbW9kdWxlcy5cbmNvbnRleHQua2V5cygpLm1hcChjb250ZXh0KTtcbiJdfQ==
