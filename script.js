var locations = []; // this array will hold your objects

var Region = function (state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function (){
    return this.revenue / this.locationCount;
  };
};// object constructor

var regionIL = new Region("IL", 5000, 12);
var regionMN = new Region("MN", 300, 3);
var regionNV = new Region("NV", 25000, 1);
// object instances

locations.push(regionIL, regionMN, regionNV);// push object instances to locations array

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
