exports.definition = {
    config: {
        columns: {
            id_onibus: "TEXT",
            horarios: "TEXT",
            sentido: "TEXT",
            link: "TEXT",
            numero: "TEXT",
            nome: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "onibus",
            idAttribute: "id_onibus"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("onibus", exports.definition, []);

collection = Alloy.C("onibus", exports.definition, model);

exports.Model = model;

exports.Collection = collection;