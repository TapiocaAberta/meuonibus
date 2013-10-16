exports.definition = {
	config: {
		columns : {
			id_onibus : "TEXT",
			//id : "INTEGER PRIMARY KEY AUTOINCREMENT",
			horarios:"TEXT",
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
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};