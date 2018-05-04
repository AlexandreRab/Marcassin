var app = require('./server');
var dataSource = app.dataSources.mssql;
var fs = require('fs');
var path =require('path');
var outputPath = path.resolve(__dirname, '../common/models');

dataSource.discoverModelDefinitions().map(function(e){
	dataSource.discoverSchema(e.name, {
		owner: 'dbo'
	}, function(err, schema) {
		if(schema) {
			console.log("Auto discovery success: " + schema.name);
			var outputName = outputPath + '/' +schema.name + '.json';
			fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log("JSON saved to " + outputName);
				}
			});
		}
		if(err) {
			console.error(err);
		}
	
	});		
});
