function Controller() {
    function __alloyId37() {
        __alloyId37.opts || {};
        var models = __alloyId36.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId26 = models[i];
            __alloyId26.__transform = {};
            var __alloyId27 = Ti.UI.createTableViewRow({
                height: "80dp",
                hasChild: true,
                modelId: "undefined" != typeof __alloyId26.__transform["id_onibus"] ? __alloyId26.__transform["id_onibus"] : __alloyId26.get("id_onibus")
            });
            rows.push(__alloyId27);
            var __alloyId29 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                layout: "vertical"
            });
            __alloyId27.add(__alloyId29);
            var __alloyId31 = Ti.UI.createLabel({
                color: "#000000",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: "14dp",
                    fontWeight: "bold"
                },
                left: "10dp",
                right: "40dp",
                text: "undefined" != typeof __alloyId26.__transform["nome"] ? __alloyId26.__transform["nome"] : __alloyId26.get("nome")
            });
            __alloyId29.add(__alloyId31);
            var __alloyId33 = Ti.UI.createLabel({
                color: "#555",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: "10dp",
                    fontWeight: "normal"
                },
                left: "10dp",
                right: "40dp",
                top: "5dp",
                text: "undefined" != typeof __alloyId26.__transform["numero"] ? __alloyId26.__transform["numero"] : __alloyId26.get("numero")
            });
            __alloyId29.add(__alloyId33);
            var __alloyId35 = Ti.UI.createLabel({
                color: "#555",
                height: Ti.UI.SIZE,
                textAlign: "justify",
                font: {
                    fontSize: "10dp",
                    fontWeight: "normal"
                },
                left: "10dp",
                right: "40dp",
                top: "5dp",
                text: "undefined" != typeof __alloyId26.__transform["sentido"] ? __alloyId26.__transform["sentido"] : __alloyId26.get("sentido")
            });
            __alloyId29.add(__alloyId35);
        }
        $.__views.table.setData(rows);
    }
    function loadDetails(e) {
        var model = onibusCollection.get(e.rowData.modelId);
        var args = {
            model: model
        };
        var controller = Alloy.createController("detail", args);
        var win = controller.getView();
        true && Alloy.isHandheld && Alloy.Globals.navgroup.open(win);
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
    this.__controllerPath = "tableList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#efefef",
        fullscreen: false,
        id: "win",
        title: "Listagem dos ônibus"
    });
    $.__views.__alloyId24 = Ti.UI.createSearchBar({
        id: "__alloyId24"
    });
    $.__views.table = Ti.UI.createTableView({
        layout: "vertical",
        bottom: 0,
        separatorColor: "#a00",
        search: $.__views.__alloyId24,
        id: "table",
        filterAttribute: "nome"
    });
    $.__views.win.add($.__views.table);
    var __alloyId36 = Alloy.Collections["onibusCollection"] || onibusCollection;
    __alloyId36.on("fetch destroy change add remove reset", __alloyId37);
    loadDetails ? $.__views.table.addEventListener("click", loadDetails) : __defers["$.__views.table!click!loadDetails"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.win,
        id: "navgroup"
    });
    $.__views.navgroup && $.addTopLevelView($.__views.navgroup);
    exports.destroy = function() {
        __alloyId36.off("fetch destroy change add remove reset", __alloyId37);
    };
    _.extend($, $.__views);
    var onibusCollection = Alloy.Collections.onibusCollection;
    true && Alloy.isHandheld && (Alloy.Globals.navgroup = $.navgroup);
    createDatabase();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.table!click!loadDetails"] && $.__views.table.addEventListener("click", loadDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;