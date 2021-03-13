$(doument).ready(function () {
  function viewWorkouts() {
    console.log("View workouts clicked");
    $.ajax({
      url: "/api/workouts/",
      method: "GET",
      success: function (res) {
        console.log(res);
        location.reload();
      },
    });
  }
});
