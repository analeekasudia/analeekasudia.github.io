// Review Solution

var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}

var list = $('#jquery-list')
presidentObject.presidents.forEach (function(d) {
    var option = $("<option>").html(d)
    list.append(option)
})

var titleObj = {
    title: "Handlebars",
    description: "A HB Project"
}

var hbTitle = $('#title-template').html()
var compileTItle = Handlebars.compile(hbTitle)
var addTitleObj = compileTitle(titleObj)
var hbTitleHtml = $('#hbtitle').append(addTitleObj)

//1: grab the handlebars html template
var presTemplate = $("#president-template").html()
//2: compile the template using Handlebars.compile()
var compileTemp = Handlebars.compile(presTemplate)
//3: pass compile the obj
var addObjs = compileTemp(presidentObject)
//4: append the obj(s) to the html element
var hbList = $('#handlebars-list').append(addObjs)

