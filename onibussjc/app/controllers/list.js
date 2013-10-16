var onibusCollection = Alloy.Collections.onibusCollection;

function loadDetails(e) 
{
	var model = onibusCollection.get(e.rowData.modelId);
	var args = { 
		model: model 
	};
	Alloy.createController('detail', args).getView().open();
}

function createDatabase()
{
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'items.json');
	var json = JSON.parse(file.read());
	
	if(json)
	{
		for(var i in json)
		{
			json[i].id_onibus = Alloy.Globals.sha1(json[i].nome + json[i].sentido);
			//var model = Alloy.createModel('onibus', json[i]);
			//model.save();
		}

		onibusCollection.reset(json);
		//onibusCollection.fetch(); // Grab data from persistent storage 

		Alloy.Collections.favoritesCollection.add(onibusCollection.at(0));
		Alloy.Collections.favoritesCollection.add(onibusCollection.at(10));
	}
}

createDatabase();

$.win.addEventListener("close", function(){
    $.destroy();
});