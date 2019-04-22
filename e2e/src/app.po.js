import { browser, by, element } from 'protractor';
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return browser.get(browser.baseUrl);
    };
    AppPage.prototype.getTitleText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return AppPage;
}());
export { AppPage };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2UyZS9zcmMvYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVsRDtJQUFBO0lBUUEsQ0FBQztJQVBDLDRCQUFVLEdBQVY7UUFDRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBaUIsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOEJBQVksR0FBWjtRQUNFLE9BQU8sT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQXFCLENBQUM7SUFDckUsQ0FBQztJQUNILGNBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQSIsImZpbGUiOiJlMmUvc3JjL2FwcC5wby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJyb3dzZXIsIGJ5LCBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBBcHBQYWdlIHtcbiAgbmF2aWdhdGVUbygpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5nZXQoYnJvd3Nlci5iYXNlVXJsKSBhcyBQcm9taXNlPGFueT47XG4gIH1cblxuICBnZXRUaXRsZVRleHQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQoYnkuY3NzKCdhcHAtcm9vdCBoMScpKS5nZXRUZXh0KCkgYXMgUHJvbWlzZTxzdHJpbmc+O1xuICB9XG59XG4iXX0=
