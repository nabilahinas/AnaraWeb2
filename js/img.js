var storageRef = firebase.storage().ref();
var spaceRef = storageRef.child('images/photo_1.png');
var path = spaceRef.fullPath;
var gsReference = storage.refFromURL('gs://test.appspot.com')

storageRef.child('images/photo_1.png').getDownloadURL().then(function(url) {
  var test = url;
}).catch(function(error) {

});