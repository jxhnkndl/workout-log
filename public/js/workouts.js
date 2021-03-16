// Wait for DOM to load
$(document).ready(function () {
  // Event Listener -> Add workout button
  $('#add-a-workout').on('click', function () {
    // Capture user input
    var category = $('#category').val();
    var distance = $('#distance').val();
    var duration = $('#duration').val();
    var workout_date = $('#date-input').val();
    var details = $('#details').val();

    // Validate user input
    if (distance === '') {
      showAlert(
        'is-danger',
        'Whoops! Looks like your distance is missing. Please provide a valid distance and try again.'
      );
      return;
    } else if (duration === '') {
      showAlert(
        'is-danger',
        'Whoops! Looks like your duration is missing. Please provide a valid duration and try again.'
      );
      return;
    } else if (workout_date === '') {
      showAlert(
        'is-danger',
        'Whoops! Looks like the date is missing. Please provide a valid date and try again.'
      );
      return;
    }

    // Format user input
    var data = {
      category: category,
      distance: distance,
      duration: duration,
      workout_date: workout_date,
      details: details,
    };

    // Send new workout object back to API
    $.ajax({
      url: '/api/workouts',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      data: JSON.stringify(data),
      success: function (res) {
        // If successful, clear input fields and show success alert
        
        $("#myModal").modal('show');
        $("body.modal-open").removeAttr("style");
        resetFields();

      },
      error: function () {
        console.error('Error');
      },
    });
  });

  // Event Listener -> Complete workout buttons
  $('.complete-workout').on('click', function (e) {
    // Capture the workout's id and completed values
    const id = $(e.target).attr('data-id');
    const completed = $(e.target).attr('data-complete');

    // Format data to send back to API
    const data = {
      id: id,
      completed: completed,
    };

    // Send updated completed status back to API
    $.ajax({
      url: '/api/workouts',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      data: JSON.stringify(data),
      success: function (res) {
        // If successful, reload the page to reflect the new status
        location.reload('/view_workouts');
      },
      error: function () {
        console.error('Error');
      },
    });
  });

  // Event Listener -> Delete workout buttons
  $('.delete-workout').on('click', function (e) {
    // Capture workout id
    const id = $(e.target).attr('data-id');

    // Send delete request back to API
    $.ajax({
      url: '/api/workouts',
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      data: JSON.stringify({ id: id }),
      success: function (res) {
        // If successful, reload the page to reflect the new status
        location.reload('/view_workouts');
      },
      error: function () {
        console.error('Error');
      },
    });
  });

  // Helper -> Show alerts
  function showAlert(color, message) {
    // Set alert time
    const staysVisible = 4000;

    // If there's already a visible notification, remove it
    if ($('.notification')) {
      $('.notification').remove();
    }

    // Create new alert
    const alertDiv = $('<div>');
    alertDiv.addClass(`notification is-light has-text-justified m-2 ${color}`);
    alertDiv.text(message);

    // Insert alert into DOM
    $('#form-top').before(alertDiv);

    setTimeout(function () {
      $('.notification').remove();
    }, staysVisible);
  }

  // Helper -> Reset input fields
  function resetFields() {
    $('#category').val('Cardio - Running');
    $('#distance').val('');
    $('#duration').val('');
    $('#date').val('');
    $('#details').val('');
  }
});
