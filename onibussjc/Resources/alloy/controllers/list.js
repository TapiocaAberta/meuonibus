function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    if (true && !Alloy.isTablet) {
        $.__views.win = Ti.UI.createWindow({
            backgroundColor: "#efefef",
            fullscreen: false,
            navBarHidden: true,
            id: "win"
        });
        $.__views.win && $.addTopLevelView($.__views.win);
        $.__views.tableList = Alloy.createController("tableList", {
            id: "tableList"
        });
        $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
            window: $.__views.tableList.getViewEx({
                recurse: true
            }),
            id: "navgroup"
        });
        $.__views.win.add($.__views.navgroup);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    true && Alloy.isHandheld && (Alloy.Globals.navgroup = $.navgroup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;