function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "includes/header";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a33",
                offset: 0
            }, {
                color: "#a00",
                offset: .98
            }, {
                color: "#000",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
    $.__views.label = Ti.UI.createLabel({
        color: "#efefef",
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: "28dp",
            fontWeight: "bold"
        },
        shadowColor: "#666",
        shadowOffset: {
            x: 0,
            y: 1
        },
        id: "label"
    });
    $.__views.header.add($.__views.label);
    $.__views.button = Ti.UI.createView({
        backgroundImage: "/icons/back.png",
        top: "6dp",
        left: "5dp",
        height: "38dp",
        width: "38dp",
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#bbb",
        id: "button"
    });
    $.__views.header.add($.__views.button);
    try {
        $.__views.button.addEventListener("click", Alloy.Globals.closeWindow);
    } catch (e) {
        __defers["$.__views.button!click!Alloy.Globals.closeWindow"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.label.text = args.title || "";
    $.button.visible = "true" !== args.hideButton;
    __defers["$.__views.button!click!Alloy.Globals.closeWindow"] && $.__views.button.addEventListener("click", Alloy.Globals.closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;