function Controller() {
    function setBusProperties() {
        if (model) {
            $.nome.text = model.get("nome");
            $.numero.text = model.get("numero"), $.sentido.text = model.get("sentido");
            var horarios = model.get("horarios");
            $.semana.text = horarios.semana;
            $.sabado.text = horarios.sabado;
            $.domingo.text = horarios.domingo;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        id: "win",
        title: "Detalhes"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId1 = Alloy.createController("includes/header", {
        title: "Detalhes",
        id: "__alloyId1",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId1.setParent($.__views.win);
    $.__views.__alloyId2 = Ti.UI.createScrollView({
        layout: "vertical",
        top: "50dp",
        bottom: 0,
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
    $.__views.nome = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "nome"
    });
    $.__views.win.add($.__views.nome);
    $.__views.numero = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "numero"
    });
    $.__views.win.add($.__views.numero);
    $.__views.sentido = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "sentido"
    });
    $.__views.win.add($.__views.sentido);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Horários",
        id: "__alloyId3"
    });
    $.__views.win.add($.__views.__alloyId3);
    $.__views.semana = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "semana"
    });
    $.__views.win.add($.__views.semana);
    $.__views.sabado = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "sabado"
    });
    $.__views.win.add($.__views.sabado);
    $.__views.domingo = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "domingo"
    });
    $.__views.win.add($.__views.domingo);
    $.__views.__alloyId4 = Ti.UI.createScrollView({
        id: "__alloyId4"
    });
    $.__views.win.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.setupWindow($.win);
    Alloy.Collections.favoritesCollection;
    var args = arguments[0] || {};
    var model = args.model;
    setBusProperties();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;