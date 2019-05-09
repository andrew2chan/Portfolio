$(document).ready(function() {
	$('#fullpage').fullpage(
    {
      anchors:['Intro', 'About', 'Tabletop', 'VRArchery', 'LostAndHounds'],
      sectionsColor: ['black','#2e2e33','black', '#2e2e33', 'black'],
      navigation: 'true',
			navigationPosition: 'top',
			scrollOverflow: true,
			responsiveWidth: 992
    }
  );
});
