$(document).ready(function(){

  var config = {
      apiKey: "AIzaSyCX9ehwQ9kNkKOGKJP_HGSawhb7PXA8lRs",
      authDomain: "trainschedule-3e636.firebaseapp.com",
      databaseURL: "https://trainschedule-3e636.firebaseio.com",
      projectId: "trainschedule-3e636",
      storageBucket: "",
      messagingSenderId: "482500583053"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var trainName = "";
    var destination = "";
    var frequency = "";
    var nextArrival = "";
    var minutesAway = "";


  $("#addTrain").on("click", function(){
    trainName = $("#name").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    time = $("#time").val().trim();

    database.ref().push({
      trainName: trainName,
      destination: destination,
      frequency: frequency,
      time: time,
    });

  });


database.ref().on("child_added", function(snapshot){
  var displayTrainName = snapshot.val().trainName;
  var displayDestination = snapshot.val().destination;
  var displayFrequency = snapshot.val().frequency;
  var displayNextArrival = snapshot.val().nextArrival;
  var displayMinutesAway = snapshot.val().minutesAway;


  $("#currentTrains").append("<tr><td>" + displayTrainName + "</td><td>" + displayDestination + "</td><td>" + displayFrequency + "</td><td>" + displayNextArrival + "</td><td>" + displayMinutesAway + "</td></tr>");

});



});
