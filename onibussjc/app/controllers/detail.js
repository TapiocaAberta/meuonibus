Alloy.Globals.setupWindow($.details);

var self = this;

var favorites = Alloy.Collections.favoritesCollection;

var args = arguments[0] || {};
var model = args.model;

self.setBusProperties = function()
{
	if(model) 
	{
		$.nome.text = model.get("nome");
		$.numero.text = model.get("numero"),
		$.sentido.text = model.get("sentido");
		
		// $.lblHorarios.text = "Horários"
		var horarios = model.get("horarios");
		if(horarios.semana)
		{
			var strTimes = self.processTimes(horarios.semana);
			$.semana.text = "\n\n\n\nDias de Semana: " + strTimes;
		} else {
			$.semana.text = "Nenhum horário";
		}

		if(horarios.sabado)
		{
			var strTimes = self.processTimes(horarios.sabado);
			$.sabado.text = "\n\n\n\nSábados: "  + strTimes;
		} else {
			$.sabado.text = "Nenhum horário";
		}

		if(horarios.domingo)
		{
			var strTimes = self.processTimes(horarios.domingo);
			$.domingo.text = "\n\n\n\nDomingos: " + strTimes;
		} else {
			$.domingo.text = "Nenhum horário";
		}
	}
};

self.processTimes = function(times)
{
	var strTimes = "";
	strTimes += "\n\nMadrugada: " + times.madrugada.toString() || "";
	strTimes += "\n\nManhã: " +  times.manha.toString() || "";
	strTimes += "\n\nTarde: " +  times.tarde.toString() || "";
	strTimes += "\n\nNoite: " +  times.noite.toString() || "";
	return strTimes;
};

self.addFavorite = function()
{
	favorites.add(model);
	favorites.trigger('change');
};

self.removeFavorite = function()
{
	favorites.remove(model);
	favorites.trigger('change');
};

self.setBusProperties();