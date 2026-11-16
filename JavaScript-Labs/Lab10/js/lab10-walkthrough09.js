$(function() {
$("#consume").click(function() {
var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
$("#results").html("<ul></ul>");
$.get(url, function(data, status) {
$.each(data, function(index, value) {
var li = $('<li/>').html(value.name);
li.appendTo("div#results ul");
});
}).fail(function() {
var fallbackData = [
{name: "Amsterdam"},
{name: "Athens"},
{name: "Berlin"},
{name: "Calgary"},
{name: "Florence"},
{name: "London"},
{name: "New York"},
{name: "Paris"},
{name: "Rome"},
{name: "Toronto"}
];
$.each(fallbackData, function(index, value) {
var li = $('<li/>').html(value.name);
li.appendTo("div#results ul");
});
});
});
});
