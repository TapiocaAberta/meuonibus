function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.details = Ti.UI.createWindow({
        backgroundColor: "#efefef",
        fullscreen: false,
        id: "details",
        title: "Detalhes"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createScrollView({
        layout: "vertical",
        bottom: 0,
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.nome = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: "18dp",
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        id: "nome"
    });
    $.__views.__alloyId3.add($.__views.nome);
    $.__views.numero = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        id: "numero"
    });
    $.__views.__alloyId3.add($.__views.numero);
    $.__views.sentido = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        id: "sentido"
    });
    $.__views.__alloyId3.add($.__views.sentido);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: "18dp",
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Horários",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.semana = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        id: "semana"
    });
    $.__views.__alloyId3.add($.__views.semana);
    $.__views.sabado = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        id: "sabado"
    });
    $.__views.__alloyId3.add($.__views.sabado);
    $.__views.domingo = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        id: "domingo"
    });
    $.__views.__alloyId3.add($.__views.domingo);
    $.__views.__alloyId1 = Ti.UI.createScrollableView({
        views: __alloyId2,
        id: "__alloyId1"
    });
    $.__views.details.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.setupWindow($.details);
    var self = this;
    var favorites = Alloy.Collections.favoritesCollection;
    var args = arguments[0] || {};
    var model = args.model;
    self.setBusProperties = function() {
        if (model) {
            $.nome.text = model.get("nome");
            $.numero.text = model.get("numero"), $.sentido.text = model.get("sentido");
            var horarios = model.get("horarios");
            if (horarios.semana) {
                var strTimes = self.processTimes(horarios.semana);
                $.semana.text = "\n\n\n\nDias de Semana: " + strTimes;
            } else $.semana.text = "Nenhum horário";
            if (horarios.sabado) {
                var strTimes = self.processTimes(horarios.sabado);
                $.sabado.text = "\n\n\n\nSábados: " + strTimes;
            } else $.sabado.text = "Nenhum horário";
            if (horarios.domingo) {
                var strTimes = self.processTimes(horarios.domingo);
                $.domingo.text = "\n\n\n\nDomingos: " + strTimes;
            } else $.domingo.text = "Nenhum horário";
        }
    };
    self.processTimes = function(times) {
        var strTimes = "";
        strTimes += "\n\nMadrugada: " + times.madrugada.toString() || "";
        strTimes += "\n\nManhã: " + times.manha.toString() || "";
        strTimes += "\n\nTarde: " + times.tarde.toString() || "";
        strTimes += "\n\nNoite: " + times.noite.toString() || "";
        return strTimes;
    };
    self.addFavorite = function() {
        favorites.add(model);
        favorites.trigger("change");
    };
    self.removeFavorite = function() {
        favorites.remove(model);
        favorites.trigger("change");
    };
    self.setBusProperties();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;