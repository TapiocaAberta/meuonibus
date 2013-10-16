function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId22 = Alloy.createController("home", {
        id: "__alloyId22"
    });
    $.__views.homeTab = Ti.UI.createTab({
        icon: "/icons/ic_menu_home.png",
        window: $.__views.__alloyId22.getViewEx({
            recurse: true
        }),
        id: "homeTab",
        title: "Home"
    });
    $.__views.index.addTab($.__views.homeTab);
    $.__views.__alloyId23 = Alloy.createController("list", {
        id: "__alloyId23"
    });
    $.__views.listTab = Ti.UI.createTab({
        icon: "/icons/KS_nav_ui.png",
        window: $.__views.__alloyId23.getViewEx({
            recurse: true
        }),
        id: "listTab",
        title: "Listagem dos ônibus"
    });
    $.__views.index.addTab($.__views.listTab);
    $.__views.__alloyId24 = Alloy.createController("configurations", {
        id: "__alloyId24"
    });
    $.__views.configTab = Ti.UI.createTab({
        icon: "/icons/ic_menu_manage.png",
        window: $.__views.__alloyId24.getViewEx({
            recurse: true
        }),
        id: "configTab",
        title: "Configurações"
    });
    $.__views.index.addTab($.__views.configTab);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.setupWindow($.index);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;