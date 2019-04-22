var _this = this;
import * as tslib_1 from "tslib";
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
describe('workspace-project App', function () {
    var page;
    beforeEach(function () {
        page = new AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to priya-poc!');
    });
    afterEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var logs;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, browser.manage().logs().get(logging.Type.BROWSER)];
                case 1:
                    logs = _a.sent();
                    expect(logs).not.toContain(jasmine.objectContaining({
                        level: logging.Level.SEVERE,
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2UyZS9zcmMvYXBwLmUyZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQXVCQTs7QUF2QkEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU5QyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7SUFDaEMsSUFBSSxJQUFhLENBQUM7SUFFbEIsVUFBVSxDQUFDO1FBQ1QsSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQzs7Ozt3QkFFSyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O29CQUE5RCxJQUFJLEdBQUcsU0FBdUQ7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtxQkFDWCxDQUFDLENBQUMsQ0FBQzs7OztTQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJlMmUvc3JjL2FwcC5lMmUtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFBhZ2UgfSBmcm9tICcuL2FwcC5wbyc7XG5pbXBvcnQgeyBicm93c2VyLCBsb2dnaW5nIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmRlc2NyaWJlKCd3b3Jrc3BhY2UtcHJvamVjdCBBcHAnLCAoKSA9PiB7XG4gIGxldCBwYWdlOiBBcHBQYWdlO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHBhZ2UgPSBuZXcgQXBwUGFnZSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRpc3BsYXkgd2VsY29tZSBtZXNzYWdlJywgKCkgPT4ge1xuICAgIHBhZ2UubmF2aWdhdGVUbygpO1xuICAgIGV4cGVjdChwYWdlLmdldFRpdGxlVGV4dCgpKS50b0VxdWFsKCdXZWxjb21lIHRvIHByaXlhLXBvYyEnKTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKGFzeW5jICgpID0+IHtcbiAgICAvLyBBc3NlcnQgdGhhdCB0aGVyZSBhcmUgbm8gZXJyb3JzIGVtaXR0ZWQgZnJvbSB0aGUgYnJvd3NlclxuICAgIGNvbnN0IGxvZ3MgPSBhd2FpdCBicm93c2VyLm1hbmFnZSgpLmxvZ3MoKS5nZXQobG9nZ2luZy5UeXBlLkJST1dTRVIpO1xuICAgIGV4cGVjdChsb2dzKS5ub3QudG9Db250YWluKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBsZXZlbDogbG9nZ2luZy5MZXZlbC5TRVZFUkUsXG4gICAgfSBhcyBsb2dnaW5nLkVudHJ5KSk7XG4gIH0pO1xufSk7XG4iXX0=
