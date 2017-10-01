define(["underscore", "jQuery", "MyClippings", "knockout"], (_, $, myClippings, ko) => {
  var clippingsUrl = 'https://raw.githubusercontent.com/gmatheu/my-kindle-clippings/master/My%20Clippings.txt';
  return function () {
    var self = this;
    this.clippingsSource = ko.observable(clippingsUrl);
    
    self.clippings = ko.observableArray([]);
    $.get(clippingsUrl, (data) => {
      //console.log(data);
      var clippings = myClippings.extract(data);
      _.each(_.first(clippings, 10), (c) => { self.clippings.push(c); });
    });

    this.fetchMoreQuotes = () => {
    }
  };
});