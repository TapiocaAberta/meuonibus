function Controller() {
    function __alloyId20() {
        __alloyId20.opts || {};
        var models = __alloyId19.models;
        var len = models.length;
        var views = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = {};
            var __alloyId8 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                views: __alloyId6,
                text: "teste2"
            });
            views.push(__alloyId8);
            var __alloyId10 = Ti.UI.createScrollView({
                views: __alloyId6,
                text: "teste2"
            });
            views.push(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId7.__transform["nome"] ? __alloyId7.__transform["nome"] : __alloyId7.get("nome")
            });
            __alloyId10.add(__alloyId11);
            var __alloyId12 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId7.__transform["numero"] ? __alloyId7.__transform["numero"] : __alloyId7.get("numero")
            });
            __alloyId10.add(__alloyId12);
            var __alloyId13 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId7.__transform["sentido"] ? __alloyId7.__transform["sentido"] : __alloyId7.get("sentido")
            });
            __alloyId10.add(__alloyId13);
            var __alloyId15 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "Horários"
            });
            __alloyId10.add(__alloyId15);
            var __alloyId16 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId7.__transform["semana"] ? __alloyId7.__transform["semana"] : __alloyId7.get("semana")
            });
            __alloyId10.add(__alloyId16);
            var __alloyId17 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId7.__transform["sabado"] ? __alloyId7.__transform["sabado"] : __alloyId7.get("sabado")
            });
            __alloyId10.add(__alloyId17);
            var __alloyId18 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId7.__transform["domingo"] ? __alloyId7.__transform["domingo"] : __alloyId7.get("domingo")
            });
            __alloyId10.add(__alloyId18);
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
    $.__views.__alloyId5 = Alloy.createController("includes/header", {
        title: "Home",
        hideButton: "true",
        id: "__alloyId5",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId5.setParent($.__views.win);
    $.__views.nome = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "nome",
        text: "teste1"
    });
    $.__views.win.add($.__views.nome);
    var __alloyId6 = [];
    $.__views.favoritesBus = Ti.UI.createScrollableView({
        layout: "vertical",
        top: "50dp",
        bottom: 0,
        views: __alloyId6,
        id: "favoritesBus"
    });
    $.__views.win.add($.__views.favoritesBus);
    var __alloyId19 = Alloy.Collections["favoritesCollection"] || favoritesCollection;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    exports.destroy = function() {
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
    };
    _.extend($, $.__views);
    Alloy.Globals.setupWindow($.win);
    var favoritesCollection = Alloy.Collections.favoritesCollection;
    favoritesCollection.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;