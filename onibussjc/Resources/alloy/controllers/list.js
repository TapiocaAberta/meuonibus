function Controller() {
    function __alloyId40() {
        __alloyId40.opts || {};
        var models = __alloyId39.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId29 = models[i];
            __alloyId29.__transform = {};
            var __alloyId30 = Ti.UI.createTableViewRow({
                height: "80dp",
                hasChild: true,
                modelId: "undefined" != typeof __alloyId29.__transform["id_onibus"] ? __alloyId29.__transform["id_onibus"] : __alloyId29.get("id_onibus")
            });
            rows.push(__alloyId30);
            var __alloyId32 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                layout: "vertical"
            });
            __alloyId30.add(__alloyId32);
            var __alloyId34 = Ti.UI.createLabel({
                color: "#181818",
                height: Ti.UI.SIZE,
                textAlign: "left",
                left: "10dp",
                right: "40dp",
                font: {
                    fontSize: "14dp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId29.__transform["nome"] ? __alloyId29.__transform["nome"] : __alloyId29.get("nome")
            });
            __alloyId32.add(__alloyId34);
            var __alloyId36 = Ti.UI.createLabel({
                color: "#555",
                height: Ti.UI.SIZE,
                textAlign: "left",
                left: "10dp",
                right: "40dp",
                top: "5dp",
                font: {
                    fontSize: "10dp",
                    fontWeight: "normal"
                },
                text: "undefined" != typeof __alloyId29.__transform["numero"] ? __alloyId29.__transform["numero"] : __alloyId29.get("numero")
            });
            __alloyId32.add(__alloyId36);
            var __alloyId38 = Ti.UI.createLabel({
                color: "#555",
                height: Ti.UI.SIZE,
                textAlign: "left",
                left: "10dp",
                right: "40dp",
                top: "5dp",
                font: {
                    fontSize: "10dp",
                    fontWeight: "normal"
                },
                text: "undefined" != typeof __alloyId29.__transform["sentido"] ? __alloyId29.__transform["sentido"] : __alloyId29.get("sentido")
            });
            __alloyId32.add(__alloyId38);
        }
        $.__views.table.setData(rows);
    }
    function loadDetails(e) {
        var model = onibusCollection.get(e.rowData.modelId);
        var args = {
            model: model
        };
        Alloy.createController("detail", args).getView().open();
    }
    function createDatabase() {
        var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "items.json");
        var json = JSON.parse(file.read());
        if (json) {
            for (var i in json) json[i].id_onibus = Alloy.Globals.sha1(json[i].nome + json[i].sentido);
            onibusCollection.reset(json);
            Alloy.Collections.favoritesCollection.add(onibusCollection.at(0));
            Alloy.Collections.favoritesCollection.add(onibusCollection.at(10));
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#efefef",
        fullscreen: false,
        navBarHidden: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId26 = Alloy.createController("includes/header", {
        title: "Lista de Ônibus",
        hideButton: "true",
        id: "__alloyId26",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId26.setParent($.__views.win);
    $.__views.__alloyId27 = Ti.UI.createSearchBar({
        id: "__alloyId27"
    });
    $.__views.table = Ti.UI.createTableView({
        layout: "vertical",
        top: "50dp",
        bottom: 0,
        separatorColor: "#a00",
        search: $.__views.__alloyId27,
        id: "table",
        filterAttribute: "nome"
    });
    $.__views.win.add($.__views.table);
    var __alloyId39 = Alloy.Collections["onibusCollection"] || onibusCollection;
    __alloyId39.on("fetch destroy change add remove reset", __alloyId40);
    loadDetails ? $.__views.table.addEventListener("click", loadDetails) : __defers["$.__views.table!click!loadDetails"] = true;
    exports.destroy = function() {
        __alloyId39.off("fetch destroy change add remove reset", __alloyId40);
    };
    _.extend($, $.__views);
    var onibusCollection = Alloy.Collections.onibusCollection;
    createDatabase();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.table!click!loadDetails"] && $.__views.table.addEventListener("click", loadDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;