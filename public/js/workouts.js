$(document).ready(function () {
  $("#add-a-workout").on("click", function () {
    var category = $("#category").val();
    var distance = $("#distance").val();
    var duration = $("#duration").val();
    var workout_date = $("#date-input").val();
    var details = $("#details").val();
    var data = {
      category: category,
      distance: distance,
      duration: duration,
      workout_date: workout_date,
      details: details,
    };
    console.log("Add Workout");
    console.log(data);
    $.ajax({
      url: "/api/workouts",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: JSON.stringify(data),
      success: function (res) {
        console.log(res);
        // redirect page to workout page
        window.location.href = "/view_workouts";
      },
      error: function () {
        console.error("Error");
      },
    });
  });

  $(".complete-workout").on("click", function (e) {
    const id = $(e.target).attr("data-id");
    const completed = $(e.target).attr("data-complete");
    // Format data to send back to API
    const data = {
      id: id,
      completed: completed,
    };

    $.ajax({
      url: "/api/workouts",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: JSON.stringify(data),
      success: function (res) {
        console.log(res);
        // redirect page to workout page
        window.location.href = "/view_workouts";
      },
      error: function () {
        console.error("Error");
      },
    });
  });
});

// $(document).ready (function() {
//   $('view-workout').on('click', (event) => {
//       event.preventDefault();
//       console.log("view workout clicked");$.ajax({
//           url:'api/workouts/',
//           method:'GET',
//           success: function(res) {
//               console.log(res);
//           }
//       })
//   })
// })
