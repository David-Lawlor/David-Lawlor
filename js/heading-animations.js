function headingAnimation() {
    // hide our element on page load
    $('#about-heading').css('opacity', 0);
    $('#about-heading').waypoint(function() {
        $('#about-heading').addClass('fadeInDown');
    }, { offset: '75%' });

    // hide our element on page load
    $('#education-heading').css('opacity', 0);
    $('#education-heading').waypoint(function() {
        $('#education-heading').addClass('fadeInDown');
    }, { offset: '75%' });

    // hide our element on page load
    $('#skills-heading').css('opacity', 0);
    $('#skills-heading').waypoint(function() {
        $('#skills-heading').addClass('fadeInDown');
    }, { offset: '75%' });

    // hide our element on page load
    $('#work-exp-heading').css('opacity', 0);
    $('#work-exp-heading').waypoint(function() {
        $('#work-exp-heading').addClass('fadeInDown');
    }, { offset: '75%' });

    // hide our element on page load
    $('#projects-heading').css('opacity', 0);
    $('#projects-heading').waypoint(function() {
        $('#projects-heading').addClass('fadeInDown');
    }, { offset: '75%' });

} 