




$(document).ready(function () {
	
	$('#generate-button').on('click', function(){
		$('.rectangle').fadeIn(4500, 'swing', function(){
			$('.rectangle').fadeOut(4500,'swing');
		});
		$('.rectangle1').fadeIn(4500, 'swing', function(){
			$('.rectangle1').fadeOut(4500,'swing');
		});
		$('.rectangle2').fadeIn(4500, 'swing', function(){
			$('rectangle2').fadeOut(4500,'swing');
		});	


		$('#poem-space').empty();

		for (var i = 0; i < 10; i++) {
			
			$.ajax({
				url: 'http://ShakeItSpeare.com/api/sentence',
				success: function(data) {
					console.log(data.sentence);
					var li = $('<li>').text(data.sentence);
					$('#poem-space').append(li);
				}
			})

		}	
	})	

})



