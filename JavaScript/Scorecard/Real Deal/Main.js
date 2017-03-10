var coursesPromise = courseService.getCourses();

coursesPromise.then(function(data){

    var courses = data.courses;
    var courseListElement = document.getElementById('courses');
    var courseListHtml = '';
    courses.forEach(function (course) {
      courseListHtml = courseListHtml + '<li>' + course.name + ', City ' + course.city + '</li>';

    })
    courseListElement.innerHTML = courseListHtml;
})

// coursePromise.then(function (data){
//     var firstCourse = data.course[0];
//     var listName = '<li> ' + firstCourse.name + ' </li> '
//     courseListElement.innerHTML=listName;
//
// });


