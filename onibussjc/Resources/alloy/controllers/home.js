function Controller() {
    function __alloyId19() {
        __alloyId19.opts || {};
        var models = __alloyId18.models;
        var len = models.length;
        var views = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId7 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                views: __alloyId5,
                text: "teste2"
            });
            views.push(__alloyId7);
            var __alloyId9 = Ti.UI.createScrollView({
                views: __alloyId5,
                text: "teste2"
            });
            views.push(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "undefined" != typeof __alloyId6.__transform["nome"] ? __alloyId6.__transform["nome"] : __alloyId6.get("nome")
            });
            __alloyId9.add(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "undefined" != typeof __alloyId6.__transform["numero"] ? __alloyId6.__transform["numero"] : __alloyId6.get("numero")
            });
            __alloyId9.add(__alloyId11);
            var __alloyId12 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "undefined" != typeof __alloyId6.__transform["sentido"] ? __alloyId6.__transform["sentido"] : __alloyId6.get("sentido")
            });
            __alloyId9.add(__alloyId12);
            var __alloyId14 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "Horários"
            });
            __alloyId9.add(__alloyId14);
            var __alloyId15 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "undefined" != typeof __alloyId6.__transform["semana"] ? __alloyId6.__transform["semana"] : __alloyId6.get("semana")
            });
            __alloyId9.add(__alloyId15);
            var __alloyId16 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "undefined" != typeof __alloyId6.__transform["sabado"] ? __alloyId6.__transform["sabado"] : __alloyId6.get("sabado")
            });
            __alloyId9.add(__alloyId16);
            var __alloyId17 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: 14,
                    fontFamily: "Helvetica Neue"
                },
                text: "undefined" != typeof __alloyId6.__transform["domingo"] ? __alloyId6.__transform["domingo"] : __alloyId6.get("domingo")
            });
            __alloyId9.add(__alloyId17);
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
        id: "win",
        title: "Home"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.nome = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        id: "nome",
        text: "teste1"
    });
    $.__views.win.add($.__views.nome);
    var __alloyId5 = [];
    $.__views.favoritesBus = Ti.UI.createScrollableView({
        layout: "vertical",
        bottom: 0,
        views: __alloyId5,
        id: "favoritesBus"
    });
    $.__views.win.add($.__views.favoritesBus);
    var __alloyId18 = Alloy.Collections["favoritesCollection"] || favoritesCollection;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    var favoritesCollection = Alloy.Collections.favoritesCollection;
    favoritesCollection.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;