var onibusCollection = Alloy.Collections.onibusCollection;

// Creates an navgroup if Android.
if (OS_IOS && Alloy.isHandheld) {
	Alloy.Globals.navgroup = $.navgroup;
}

function loadDetails(e) 
{
	var model = onibusCollection.get(e.rowData.modelId);
	var args = { 
		model: model 
	};

	// get the detail controller and window references
	var controller = Alloy.createController('detail', args);
	var win = controller.getView();

		// open the detail windows
	if (OS_IOS && Alloy.isHandheld) {
		Alloy.Globals.navgroup.open(win);
	} else if (OS_ANDROID) {
		win.open();
	}
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