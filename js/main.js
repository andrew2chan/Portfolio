$(document).ready(function() {
	$('#fullpage').fullpage(
    {
      anchors:['Intro', 'About', 'AcademicProjects', 'PersonalProjects'],
      sectionsColor: ['black','#2e2e33','black', '#2e2e33'],
      navigation: 'true',
			navigationPosition: 'top',
			scrollOverflow: true,
			responsiveWidth: 992
    }
  );
});
