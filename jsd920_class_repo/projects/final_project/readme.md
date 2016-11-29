# PROJECT OVERVIEW

The Financial Impact of Storms in the U.S.

_____________________

# PROJECT DESCRIPTION

The NOAA's National Centers for Environmental Information (NCEI) is "responsible for hosting and providing access to one of the most significant archives on Earth, with comprehensive oceanic, atmospheric, and geophysical data." They release monthly storm data publications (http://www.ncdc.noaa.gov/IPS/sd/sd.html) of the financial damage done to property and crops by storms, per state.

I'm interested in making a data visualization dashboard/app allowing a user to see the financial impact each storm has had on each state's property, segmented by month and year. The NCEI provides the data in PDFs; therefore I'll need to create a JSON file. Using D3.js, the data will be presented as bar charts, line graphs and a choropleth map.

__________________________________

# HIGH-LEVEL FUNCTIONAL COMPONENTS

* Creating a new JSON file with the following: an array of years, each with an array of months, each with state objects, each with a property damage value and a storm type value.

* Stacked bar chart showing storm types from [#] year to [#] year in [state name]. The [#] year inputs will be a dropdown; the [state name] field will be a dropdown. The chart will be made using D3.js. X-axis is the year; y-axis is the $ cost. When you click on/slide through one or more years, the monthly storm breakdown for the selected years will reveal below. X-axis is the month; y-axis is the $ cost.

* The mobile experience of the stacked bar chart will be a two-column table instead. The first column will show the storm types; the second will show the % change in $ cost per corresponding storm (the % will change based on the range of years chosen). When you click on a row, it will expand to to reveal a monthly breakdown of the $ cost as a line chart.

* Density (choropleth) map of which state was hit with the most cost in [#] year. The [#] year input will be a dropdown. The map will be made using D3.js. This would quickly answer the question, "Which state would be the costliest to live in?" Each map would have a different shade/opacity based on the estimated $ cost per capita (dividing the total cost of a state by its current population). When you click/tap on a state, a tooltip will show more details (TBD).

* The mobile experience for the density (choropleth) map is TBD.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create a JSON file using data listed from a PDF. | H | 4+hrs| 4hrs |  |
| Use D3.js to grab data and output bar charts, line graphs, and one custom-designed choropleth map. | H | 24hrs| 0 |  |

_______________________________

# LOW-LEVEL FUNCTION COMPONENTS

* Bar chart showing a summary of the total costs of all storm types per year thus far. The chart will be made using D3.js. X-axis is the year; y-axis is the $ cost.
* Bar chart showing a summary of the most costly storm types thus bar, ordered by most to least costliest. The chart will be made using D3.js. X-axis is the $ cost; y-axis is the storms.
* Stacked bar chart showing a summary of storm types per state thus far. The chart will be made using D3.js. X-axis is the $ cost; y-axis is the states.

* The mobile experience of the bar charts will be a two-column table instead. The first column will show either the storm type or year, depending on the summary; the second will show the $ cost.

__________________

# HELPER FUNCTIONS

Use this section to document all helper functions. These functions should be versatile enough to be reused in other projects

______________________

# ADDITIONAL LIBRARIES

Use this section to list all supporting libraries and their role in the project

________________

# JSON DATA KEYS

[
	{
		"yearArray": [
			{
				"monthObject": {
					"stateArray": [
						{"storm": "stormTypeName", "damage": "damageCostNumber"}
					]
				}
			}
		]
	}
]

The JSON needs to account for multiple years, months, states, and storm/damage objects per state.

The NOAA has the segmented storm data in PDFs, which need to be extracted (read: manually typed) to create the JSON file. There are many storm 'types'; so I've grouped them to reduce the number of categories and labels:

* Avalanche
* Cold Wind/Chill (Cold Wind/Chill, Extreme Cold Wind/Chill)
* Drought
* Dust Storm (Dust Devil, Dust Storm)
* Flood (Coastal Flood, Debris Flow, Flash Flood, Flood, High Surf, Lakeshore Flood)
* Fog/Smoke (Dense Smoke, Dense Fog, Freezing Fog)
* Frost/Freeze
* Hail/Ice (Hail, Ice Storm, Sleet)
* Heat (Excessive Heat, Heat)
* High Wave (Seiche, Sneakerwave)
* Rain (Rain, Tropical Storm)
* Hurricane (Hurricane, Storm Surge/Tide, Waterspout)
* Lightning
* Snow/Blizzard (Blizzard, Heavy Snow, Lake-Effect Snow)
* Strong Wind (High Wind, Strong Wind)
* Thunderstorm Wind
* Tornado
* Wildfire
* Winter Storm/Weather (Winter Weather, Winter Storm)

Do not include any storms starting with 'Marine' as they only affect the Atlantic and Pacific Oceans, not land.

________________________________

# JQUERY FUNCTIONAL REQUIREMENTS

Use this section to list some, but not all, of the jQuery methods discovered while working on this project.

____________

# CHANGE LOG

Use this section to document what changes were made and when.

________________________

# ISSUES AND RESOLUTIONS

**ERROR: XMLHttpRequest cannot load
**RESOLUTION: Had to run a local server; used Firebase and put my files in my /public folder for testing.

**ERROR: Multiple errors in custom JSON file.
**RESOLUTION: I had either one too many or not enough brackets. Ultimately worked with a custom CSV's instead of JSON file. (There were two aspects of the custom CSV's: At the beginning of the project I manually compiled them from data shown in PDF's. Later I was helped with another developer's Python script to automatically download CSV's from the NOAA's site and be reformatted for the purpose of this project. I compared the data from the PDF's with the existing CSV's and noticed huge differences in numbers. Maybe it was my human error, or an inconsistency in the NOAA's PDF and CSV formats. Either way, I'd like to forward this project to them and get their thoughts.)

**ERROR: Bars in stacked bar chart not rendering; but key/legend is.
**RESOLUTION: Had to include a 'for' loop to loop through the 'Total' values, which were created in the Javascript rather than a column added in the CSV file.
