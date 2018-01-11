$(document).ready(function() {
	$('#fullpage').fullpage(
    {
      anchors:['Intro', 'About', 'Projects'],
      sectionsColor: ['black','#2e2e33','black'],
      navigation: 'true',
			navigationPosition: 'top',
    }
  );
});
