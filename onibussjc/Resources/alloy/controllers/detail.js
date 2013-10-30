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
        backgroundColor: "#efefef",
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
    var __alloyId3 = [];
    $.__views.__alloyId4 = Ti.UI.createScrollView({
        layout: "vertical",
        top: "50dp",
        right: "10dp",
        left: "10dp",
        bottom: 0,
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
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
    $.__views.__alloyId4.add($.__views.nome);
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
    $.__views.__alloyId4.add($.__views.numero);
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
    $.__views.__alloyId4.add($.__views.sentido);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: "18dp",
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        text: "Horários",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#000000",
        height: Ti.UI.SIZE,
        textAlign: "justify",
        font: {
            fontSize: 14,
            fontFamily: "Helvetica Neue"
        },
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer \n\n					adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, \n\n\n					consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor \n\n\n					sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e\n\n					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e\n					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e\n					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e\n\n\n					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e\n\n					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e\n\n					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
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
    $.__views.__alloyId4.add($.__views.semana);
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
    $.__views.__alloyId4.add($.__views.sabado);
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
    $.__views.__alloyId4.add($.__views.domingo);
    $.__views.__alloyId2 = Ti.UI.createScrollableView({
        views: __alloyId3,
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
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