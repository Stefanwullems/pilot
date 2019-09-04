"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router(methods) {
        var _this = this;
        this.getParam = function (param) {
            return _this._methods.getParam(param);
        };
        this.setParam = function (param, value) {
            _this._methods.setParam(param, value);
        };
        this.removeParam = function (param) {
            _this._methods.removeParam(param);
        };
        this.getQuery = function (query) {
            return _this._methods.getQuery(query);
        };
        this.setQuery = function (query, value) {
            _this._methods.setQuery(query, value);
        };
        this.removeQuery = function (query) {
            _this._methods.removeQuery(query);
        };
        this.redirect = function (route) {
            _this._methods.redirect(route);
        };
        this.routeIncludes = function (route) {
            return _this._methods.routeIncludes(route);
        };
        this._methods = methods;
    }
    return Router;
}());
exports.Router = Router;
