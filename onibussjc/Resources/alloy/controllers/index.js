function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createTabGroup({
        id: "win"
    });
    $.__views.__alloyId20 = Alloy.createController("home", {
        id: "__alloyId20"
    });
    $.__views.homeTab = Ti.UI.createTab({
        icon: "/icons/ic_menu_home.png",
        window: $.__views.__alloyId20.getViewEx({
            recurse: true
        }),
        id: "homeTab",
        title: "Home"
    });
    $.__views.win.addTab($.__views.homeTab);
    $.__views.__alloyId21 = Alloy.createController("list", {
        id: "__alloyId21"
    });
    $.__views.listTab = Ti.UI.createTab({
        icon: "/icons/KS_nav_ui.png",
        window: $.__views.__alloyId21.getViewEx({
            recurse: true
        }),
        id: "listTab",
        title: "Listagem dos ônibus"
    });
    $.__views.win.addTab($.__views.listTab);
    $.__views.__alloyId22 = Alloy.createController("configurations", {
        id: "__alloyId22"
    });
    $.__views.configTab = Ti.UI.createTab({
        icon: "/icons/ic_menu_manage.png",
        window: $.__views.__alloyId22.getViewEx({
            recurse: true
        }),
        id: "configTab",
        title: "Configurações"
    });
    $.__views.win.addTab($.__views.configTab);
    $.__views.win && $.addTopLevelView($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;