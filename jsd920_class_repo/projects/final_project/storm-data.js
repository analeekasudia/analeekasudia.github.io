/*
	CATEGORY REFERENCE

	Avalanche
	Cold Wind/Chill (Cold Wind/Chill, Extreme Cold Wind/Chill)
	Drought -- crop damage only?
	Dust Storm
	Flood (Coastal Flood, Debris Flow, Flash Flood, Flood, High Surf)
	Fog/Smoke (Dense Smoke, Dense Fog, Freezing Fog)
	Frost/Freeze
	Hail/Ice (Hail, Ice Storm, Sleet)
	Rain
	Hurricane
	Lightning (Lightning, Marine Lightning)
	Snow/Blizzard (Blizzard, Heavy Snow, Lake-Effect Snow)
	Strong Wind (High Wind, Marine High Wind, Strong Wind, Marine Strong Wind)
	Thunderstorm Wind (Thunderstorm Wind, Marine Thunderstorm Wind)
	Tornado
	Wildfire
	Winter Storm/Weather (Winter Weather, Winter Storm)
*/

var stormData = [

	// begin 2015
	{
		"2015": [

			// begin FEBRUARY
			{
				"February": {
					"Alabama": [
						{ "storm": "Strong Wind", "damage": 3000 }
					],
					"Alaska": [
						{ "storm": "Strong Wind", "damage": 150000 }
					],
					"Arizona": [
						{ "storm": "Frost/Freeze", "damage": 1000000 }
					],
					"Arkansas": [
						{ "storm": "Ice", "damage": 1050000 },
						{ "storm": "Strong Wind", "damage": 501000 },
						{ "storm": "Winter Storm/Weather", "damage": 1140000 }
					],
					"California": [
						{ "storm": "Flood", "damage": 10000 },
						{ "storm": "Rain", "damage": 25000 },
						{ "storm": "Strong Wind", "damage": 74800 }
					],
					"Colorado": [
						{ "storm": "Avalanche", "damage": 500 }
					],
					"Connecticut": [
						{ "storm": "Strong Wind", "damage": 110000 }
					],
					"Delaware": [
						{ "storm": "Strong Wind", "damage": 116000 }
					],
					"Florida": [
						{ "storm": "Flood", "damage": 108000 },
						{ "storm": "Thunderstorm Wind", "damage": 96000 },
						{ "storm": "Tornado", "damage": 13000 }
					],
					"Georgia": [
						{ "storm": "Ice Storm", "damage": 15000 }
					],
					"Hawaii": [
						{ "storm": "Strong Wind", "damage": 97000 }
					],
					"Idaho": [
						{ "storm": "Flood", "damage": 40000 }
					],
					"Illinois": [
						{ "storm": "Cold Wind/Chill", "damage": 8000 },
						{ "storm": "Winter Storm/Weather", "damage": 450000 }
					],
					"Indiana": [
						{ "storm": "Winter Storm/Weather", "damage": 110000 }
					],
					"Iowa": [
						{ "storm": "Winter Storm/Weather", "damage": 2725000 }
					],
					"Kansas": [],
					"Kentucky": [
						{ "storm": "Cold Wind/Chill", "damage": 310000 },
						{ "storm": "Flood", "damage": 12000 },
						{ "storm": "Winter Storm/Weather", "damage": 28000 }
					],
					"Louisiana": [
						{ "storm": "Hail/Ice", "damage": 30000 },
						{ "storm": "Thunderstorm Wind", "damage": 7000 },
						{ "storm": "Winter Storm/Weather", "damage": 6000 }
					],
					"Maine": [
						{ "storm": "Flood", "damage": 5000 }
					],
					"Maryland": [
						{ "storm": "Cold Wind/Chill", "damage": 100000 },
						{ "storm": "Strong Wind", "damage": 70000 }
					],
					"Massachusetts": [
						{ "storm": "Snow/Blizzard", "damage": 10000 }
					],
					"Michigan": [
						{ "storm": "Winter Storm/Weather", "damage": 15000 }
					],
					"Minnesota": [
						{ "storm": "Winter Storm/Weather", "damage": 4000 }
					],
					"Mississippi": [
						{ "storm": "Hail/Ice", "damage": 1000 },
						{ "storm": "Strong Wind", "damage": 10500 },
						{ "storm": "Thunderstorm Wind", "damage": 87250 },
						{ "storm": "Tornado", "damage": 27238200 },
						{ "storm": "Winter Storm/Weather", "damage": 58000 }
					],
					"Missouri": [
						{ "storm": "Winter Storm/Weather", "damage": 204000 }
					],
					"Montana": [],
					"Nebraska": [],
					"Nevada": [],
					"New Hampshire": [
						{ "storm": "Flood", "damage": 10000 }
					],
					"New Jersey": [
						{ "storm": "Cold Wind/Chill", "damage": 250000 },
						{ "storm": "Strong Wind", "damage": 353000 }
					],
					"New Mexico": [
						{ "storm": "Wildfire", "damage": 6000 }
					],
					"New York": [
						{ "storm": "Lake-Effect Snow", "damage": 265000 },
						{ "storm": "Strong Wind", "damage": 170000 },
						{ "storm": "Thunderstorm Wind", "damage": 61000 },
						{ "storm": "Winter Storm/Weather", "damage": 1185000 }
					],
					"North Carolina": [
						{ "storm": "Strong Wind", "damage": 27600 },
						{ "storm": "Winter Storm/Weather", "damage": 9500000 }
					],
					"North Dakota": [],
					"Ohio": [
						{ "storm": "Cold Wind/Chill", "damage": 100000 },
						{ "storm": "Winter Storm/Weather", "damage": 5050000 }
					],
					"Oklahoma": [],
					"Oregon": [],
					"Pennsylvania": [
						{ "storm": "Cold Wind/Chill", "damage": 250000 },
						{ "storm": "Strong Wind", "damage": 449000 },
						{ "storm": "Winter Storm/Weather", "damage": 600000 }
					],
					"Rhode Island": [],
					"South Carolina": [
						{ "storm": "Hail/Ice", "damage": 55000 },
						{ "storm": "Strong Wind", "damage": 100000 },
						{ "storm": "Winter Storm/Weather", "damage": 5000 }
					],
					"South Dakota": [],
					"Tennessee": [
						{ "storm": "Winter Storm/Weather", "damage": 64805000 }
					],
					"Texas": [
						{ "storm": "Snow/Blizzard", "damage": 270000 },
						{ "storm": "Winter Storm/Weather", "damage": 687000 }
					],
					"Utah": [
						{ "storm": "Winter Storm/Weather", "damage": 20000 }
					],
					"Vermont": [
						{ "storm": "Winter Storm/Weather", "damage": 275000 }
					],
					"Virginia": [
						{ "storm": "Strong Wind", "damage": 120000 },
						{ "storm": "Winter Storm/Weather", "damage": 45000 }
					],
					"Washington": [
						{ "storm": "Flood", "damage": 754000 }
					],
					"West Virginia": [
						{ "storm": "Cold Wind/Chill", "damage": 450000 },
						{ "storm": "Flood", "damage": 20000 },
						{ "storm": "Snow/Blizzard", "damage": 570000 },
						{ "storm": "Winter Storm/Weather", "damage": 350000 }
					],
					"Wisconsin": [
						{ "storm": "Strong Wind", "damage": 55000 }
					],
					"Wyoming": []
				}
			},

			// begin JANUARY
			{
				"January": {
					"Alabama": [
						{ "storm": "Thunderstorm Wind", "damage": 5500 },
						{ "storm": "Tornado", "damage": 215000 }
					],
					"Alaska": [
						{ "storm": "Strong Wind", "damage": 61000 },
					],
					"Arizona": [
						{ "storm": "Fog/Smoke", "damage": 50000 },
						{ "storm": "Frost/Freeze", "damage": 1060000 }
					],
					"Arkansas": [
						{ "storm": "Flood", "damage": 30000 }
					],
					"California": [
						{ "storm": "Fog/Smoke", "damage": 100000 },
						{ "storm": "Flood", "damage": 25000 },
						{ "storm": "Frost/Freeze", "damage": 300000 },
						{ "storm": "Rain", "damage": 50000 }
					],
					"Colorado": [],
					"Connecticut": [],
					"Delaware": [
						{ "storm": "Strong Wind", "damage": 18000 }
					],
					"Florida": [
						{ "storm": "Thunderstorm Wind", "damage": 15000 },
						{ "storm": "Tornado", "damage": 30000 }
					],
					"Georgia": [
						{ "storm": "Flood", "damage": 18000 },
						{ "storm": "Strong Wind", "damage": 6500 },
						{ "storm": "Thunderstorm Wind", "damage": 62000 },
						{ "storm": "Tornado", "damage": 41000 }
					],
					"Hawaii": [],
					"Idaho": [
						{ "storm": "Snow/Blizzard", "damage": 8000 },
						{ "storm": "Fog/Smoke", "damage": 10000 }
					],
					"Illinois": [],
					"Indiana": [
						{ "storm": "Flood", "damage": 20000 },
						{ "storm": "Hail/Ice", "damage": 15000 }
					],
					"Iowa": [],
					"Kansas": [],
					"Kentucky": [],
					"Louisiana": [
						{ "storm": "Thunderstorm Wind", "damage": 53000 }
					],
					"Maine": [
						{ "storm": "Flood", "damage": 5000 }
					],
					"Maryland": [
						{ "storm": "Strong Wind", "damage": 5000 }
					],
					"Massachusetts": [
						{ "storm": "Flood", "damage": 2350000 },
						{ "storm": "Strong Wind", "damage": 209000 },
						{ "storm": "Winter Storm/Weather", "damage": 220000 }
					],
					"Michigan": [],
					"Minnesota": [],
					"Mississippi": [
						{ "storm": "Flood", "damage": 57000 },
						{ "storm": "Lightning", "damage": 20000 },
						{ "storm": "Strong Wind", "damage": 100 },
						{ "storm": "Thunderstorm Wind", "damage": 55000 },
						{ "storm": "Tornado", "damage": 670000 }
					],
					"Missouri": [
						{ "storm": "Flood", "damage": 3000 },
						{ "storm": "Winter Storm/Weather", "damage": 10000 }
					],
					"Montana": [
						{ "storm": "Snow/Blizzard", "damage": 7000 },
						{ "storm": "Winter Storm/Weather", "damage": 1000 }
					],
					"Nebraska": [],
					"Nevada": [
						{ "storm": "Heavy Rain", "damage": 650000 }
					],
					"New Hampshire": [
						{ "storm": "Flood", "damage": 30000 }
					],
					"New Jersey": [
						{ "storm": "Strong Wind", "damage": 73000 },
						{ "storm": "Thunderstorm Wind", "damage": 50000 }
					],
					"New Mexico": [],
					"New York": [
						{ "storm": "Snow/Blizzard", "damage": 140000 },
						{ "storm": "Strong Wind", "damage": 195000 },
						{ "storm": "Thunderstorm Wind", "damage": 3000 },
						{ "storm": "Winter Storm/Weather", "damage": 40000 }
					],
					"North Carolina": [
						{ "storm": "Winter Storm/Weather", "damage": 70000 }
					],
					"North Dakota": [],
					"Ohio": [],
					"Oklahoma": [],
					"Oregon": [],
					"Pennsylvania": [
						{ "storm": "Snow/Blizzard", "damage": 150000 },
						{ "storm": "Strong Wind", "damage": 5000 }
					],
					"Rhode Island": [
						{ "storm": "Snow/Blizzard", "damage": 50000 }
					],
					"South Carolina": [
						{ "storm": "Strong Wind", "damage": 26500 },
						{ "storm": "Thunderstorm Wind", "damage": 16000 }
					],
					"South Dakota": [
						{ "storm": "Winter Storm/Weather", "damage": 125000 }
					],
					"Tennessee": [],
					"Texas": [
						{ "storm": "Flood", "damage": 6000 },
						{ "storm": "Wildfire", "damage": 100000 },
						{ "storm": "Winter Storm/Weather", "damage": 55000 }
					],
					"Utah": [],
					"Vermont": [
						{ "storm": "Winter Storm/Weather", "damage": 570000 }
					],
					"Virginia": [
						{ "storm": "Strong Wind", "damage": 2000 }
					],
					"Washington": [
						{ "storm": "Flood", "damage": 300000 },
						{ "storm": "Strong Wind", "damage": 50000 }
					],
					"West Virginia": [
						{ "storm": "Winter Storm/Weather", "damage": 25000 }
					],
					"Wisconsin": [],
					"Wyoming": []
				}
			}
		]
	},

	// begin 2014
	{
		"2014": [

			// begin DECEMBER
			{
				"December": {
					"Alabama": [
						{ "storm": "Flood", "damage": 5000 },
						{ "storm": "Thunderstorm Wind", "damage": 17000 }
					],
					"Alaska": [],
					"Arizona": [
						{ "storm": "Snow/Blizzard", "damage": 500000 },
						{ "storm": "Winter Storm/Weather", "damage": 25000 }
					],
					"Arkansas": [
						{ "storm": "Thunderstorm Wind", "damage": 76000 }
					],
					"California": [
						{ "storm": "Flood", "damage": 2300000 },
						{ "storm": "Fog/Smoke", "damage": 200000 },
						{ "storm": "Flood", "damage": 10823500 },
						{ "storm": "Rain", "damage": 26000 },
						{ "storm": "Snow/Blizzard", "damage": 44000 },
						{ "storm": "Strong Wind", "damage": 5894600 },
						{ "storm": "Winter Storm/Weather", "damage": 25000 }
					],
					"Colorado": [],
					"Connecticut": [
						{ "storm": "Strong Wind", "damage": 30000 }
					],
					"Delaware": [
						{ "storm": "Strong Wind", "damage": 10000 }
					],
					"Florida": [
						{ "storm": "Flood", "damage": 101000 },
						{ "storm": "Lightning", "damage": 1000 },
						{ "storm": "Thunderstorm Wind", "damage": 13000 }
					],
					"Georgia": [
						{ "storm": "Flood", "damage": 40000 },
						{ "storm": "Thunderstorm Wind", "damage": 64000 },
						{ "storm": "Tornado", "damage": 750000 }
					],
					"Hawaii": [
						{ "storm": "Strong Wind", "damage": 10000 }
					],
					"Idaho": [
						{ "storm": "Winter Storm/Wind", "damage": 23000 }
					],
					"Illinois": [],
					"Indiana": [
						{ "storm": "Flood", "damage": 5000 }
					],
					"Iowa": [],
					"Kansas": [
						{ "storm": "Winter Storm/Wind", "damage": 5000 }
					],
					"Kentucky": [
						{ "storm": "Strong Wind", "damage": 15000 }
					],
					"Louisiana": [
						{ "storm": "Hail/Ice", "damage": 30000 },
						{ "storm": "Thunderstorm Wind", "damage": 4000 },
						{ "storm": "Tornado", "damage": 400000 }
					],
					"Maine": [],
					"Maryland": [],
					"Massachusetts": [
						{ "storm": "Flood", "damage": 85000 },
						{ "storm": "Strong Wind", "damage": 41000 }
					],
					"Michigan": [],
					"Minnesota": [
						{ "storm": "Fog/Smoke", "damage": 5000 }
					],
					"Mississippi": [
						{ "storm": "Hail/Ice", "damage": 1000 },
						{ "storm": "Thunderstorm Wind", "damage": 42200 },
						{ "storm": "Tornado", "damage": 27250500 }
					],
					"Missouri": [],
					"Montana": [
						{ "storm": "Snow/Blizzard", "damage": 15000 }
					],
					"Nebraska": [],
					"Nevada": [
						{ "storm": "Rain", "damage": 100000 },
						{ "storm": "Strong Wind", "damage": 581000 },
						{ "storm": "Winter Storm/Weather", "damage": 20000 }
					],
					"New Hampshire": [],
					"New Jersey": [
						{ "storm": "Fog/Smoke", "damage": 1000000 },
						{ "storm": "Strong Wind", "damage": 28000 }
					],
					"New Mexico": [],
					"New York": [
						{ "storm": "Fog/Smoke", "damage": 2000000 },
						{ "storm": "Snow/Blizzard", "damage": 185000 },
						{ "storm": "Strong Wind", "damage": 260000 },
						{ "storm": "Thunderstorm Wind", "damage": 60000 },
						{ "storm": "Winter Storm/Weather", "damage": 600000 }
					],
					"North Carolina": [
						{ "storm": "Flood", "damage": 10000 },
						{ "storm": "Tornado", "damage": 60000 }
					],
					"North Dakota": [],
					"Ohio": [
						{ "storm": "Strong Wind", "damage": 19000 },
						{ "storm": "Thunderstorm Wind", "damage": 50000 },
						{ "storm": "Tornado", "damage": 15000 }
					],
					"Oklahoma": [
						{ "storm": "Thunderstorm Wind", "damage": 26000 }
					],
					"Oregon": [
						{ "storm": "Strong Wind", "damage": 313000 }
					],
					"Pennsylvania": [
						{ "storm": "Strong Wind", "damage": 40000 },
						{ "storm": "Thunderstorm Wind", "damage": 35000 },
						{ "storm": "Winter Storm/Weather", "damage": 200000 }
					],
					"Rhode Island": [],
					"South Carolina": [],
					"South Dakota": [],
					"Tennessee": [
						{ "storm": "Thunderstorm Wind", "damage": 5000 }
					],
					"Texas": [
						{ "storm": "Tornado", "damage": 10000 },
						{ "storm": "Thunderstorm Wind", "damage": 15000 }
					],
					"Utah": [
						{ "storm": "Strong Wind", "damage": 105000 }
					],
					"Vermont": [
						{ "storm": "Winter Storm/Weather", "damage": 1845000 }
					],
					"Virginia": [],
					"Washington": [
						{ "storm": "Strong Wind", "damage": 4500000 }
					],
					"West Virginia": [
						{ "storm": "Flood", "damage": 2000 },
						{ "storm": "Heavy Rain", "damage": 30000 },
						{ "storm": "Strong Wind", "damage": 2000 },
						{ "storm": "Thunderstorm Wind", "damage": 21000 }
					],
					"Wisconsin": [
						{ "storm": "Flood", "damage": 15000 }
					],
					"Wyoming": []
				}
			}
		]
	}
]
