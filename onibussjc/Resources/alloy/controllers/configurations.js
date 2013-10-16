function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "configurations";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.configurations = Ti.UI.createWindow({
        backgroundColor: "#efefef",
        fullscreen: false,
        navBarHidden: true,
        title: "Configurações",
        id: "configurations"
    });
    $.__views.configurations && $.addTopLevelView($.__views.configurations);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#181818",
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "Configurações",
        id: "__alloyId0"
    });
    $.__views.configurations.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;