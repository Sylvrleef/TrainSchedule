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
    var employeeName = "";
    var role = "";
    var startDate = "";
    var monthlyRate = 0;
    var monthsWorked = 0;
    var totalBilled = 0;


  $("#addEmployee").on("click", function(){
    employeeName = $("#name").val().trim();
    role = $("#inputRole").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyRate = $("#montlyRate").val().trim();

    database.ref().push({
      employeeName: employeeName,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate
      // dateAdded: database.ServerValue.TIMESTAMP
    });

  });


database.ref().on("child_added", function(snapshot){
  var displayName = snapshot.val().employeeName;
  var displayRole = snapshot.val().role;
  var displayDate = snapshot.val().startDate;
  var displayMonthlyRate = snapshot.val().monthlyRate;
  var displayMonthsWorked = snapshot.val().monthsWorked;
  var displayTotalBilled = snapshot.val().totalBilled;


  $("#currentEmployees").append("<tr><td>" + displayName + "</td><td>" + displayRole + "</td><td>" + displayDate + "</td><td>" + displayMonthsWorked + "</td><td>" + displayMonthlyRate + "</td><td>" + displayTotalBilled + "</td></tr>");

});



});
