$(document).ready(function () {
  $(".view-workout").on("click", (event) => {
    event.preventDefault();
    console.log("View workouts clicked");
    $.ajax({
      url: "/api/workouts/",
      method: "GET",
      success: function (res) {
        console.log(res);
      },
    });
  });
});
