function Controller() {
    function __alloyId22() {
        __alloyId22.opts || {};
        var models = __alloyId21.models;
        var len = models.length;
        var views = [];
        for (var i = 0; len > i; i++) {
            var __alloyId9 = models[i];
            __alloyId9.__transform = {};
            var __alloyId10 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                views: __alloyId8,
                text: "teste2"
            });
            views.push(__alloyId10);
            var __alloyId12 = Ti.UI.createScrollView({
                views: __alloyId8,
                text: "teste2"
            });
            views.push(__alloyId12);
            var __alloyId13 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId9.__transform["nome"] ? __alloyId9.__transform["nome"] : __alloyId9.get("nome")
            });
            __alloyId12.add(__alloyId13);
            var __alloyId14 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId9.__transform["numero"] ? __alloyId9.__transform["numero"] : __alloyId9.get("numero")
            });
            __alloyId12.add(__alloyId14);
            var __alloyId15 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId9.__transform["sentido"] ? __alloyId9.__transform["sentido"] : __alloyId9.get("sentido")
            });
            __alloyId12.add(__alloyId15);
            var __alloyId17 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "Horários"
            });
            __alloyId12.add(__alloyId17);
            var __alloyId18 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId9.__transform["semana"] ? __alloyId9.__transform["semana"] : __alloyId9.get("semana")
            });
            __alloyId12.add(__alloyId18);
            var __alloyId19 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId9.__transform["sabado"] ? __alloyId9.__transform["sabado"] : __alloyId9.get("sabado")
            });
            __alloyId12.add(__alloyId19);
            var __alloyId20 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId9.__transform["domingo"] ? __alloyId9.__transform["domingo"] : __alloyId9.get("domingo")
            });
            __alloyId12.add(__alloyId20);
        }
        $.__views.favoritesBus.views = views;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#efefef",
        fullscreen: false,
        navBarHidden: true,
        id: "win",
        title: "Home"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId7 = Alloy.createController("includes/header", {
        title: "Home",
        hideButton: "true",
        id: "__alloyId7",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId7.setParent($.__views.win);
    $.__views.nome = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "nome",
        text: "teste1"
    });
    $.__views.win.add($.__views.nome);
    var __alloyId8 = [];
    $.__views.favoritesBus = Ti.UI.createScrollableView({
        layout: "vertical",
        top: "50dp",
        right: "10dp",
        left: "10dp",
        bottom: 0,
        views: __alloyId8,
        id: "favoritesBus"
    });
    $.__views.win.add($.__views.favoritesBus);
    var __alloyId21 = Alloy.Collections["favoritesCollection"] || favoritesCollection;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    exports.destroy = function() {
        __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
    };
    _.extend($, $.__views);
    Alloy.Globals.setupWindow($.win);
    var favoritesCollection = Alloy.Collections.favoritesCollection;
    favoritesCollection.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;