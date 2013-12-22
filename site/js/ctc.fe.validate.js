//created on 11/11/2010 for ctc.com.sg
$(document).ready(function(){

	// $("body").find('.required').addClass('fontLightGrey').val('( Field required )');

	$('.required').live('focus', function(){
		if($(this).val() == '( Field required )' || $(this).val() == ''){	
			$(this).removeClass('requiredAlert').removeClass('fontLightGrey');
			$(this).val('');
		}
	});
	// $('.required').blur(function(){

		// if($(this).hasClass('required') && $(this).val()==''){
			// $(this).addClass('fontLightGrey');
			// $(this).val('( Field required )');
		// }
	// });

	var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	$('.isEmail').live('blur',function(){
		
		if(filter.test($(this).val())){
			//$(this).val($(this).val()+" (this is not a valid email)");
			$(this).removeClass('requiredAlert').removeClass('InvalidEmail');
		}else{
			$(this).addClass('requiredAlert').addClass('InvalidEmail');
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 
			{
				duration:1000, 
				complete:function(){
					$('#dlgBox').dialog({
						width: 350,
						height: 150,
						resizable: false,
						title: 'Important Note',
						open: function(){
							$('#dlgBox').html("Please make sure this is a valid email address before submit.");
						},
						close: function(){$('#dlgBox').empty();},
						modal: true,
						buttons:{'Close':function(){$('#dlgBox').dialog('close')}}
					});
					return false;
				}
			}
			);
		}
	});
});
function validate_submit(formID, toScroll, submitType){
	var cnt = 0;
	var stopScroll = false;
	$(formID).find('.required').each(function(){

		if($(this).val()=="" || $(this).val()=='( Field required )'){
			if($(this).hasClass('requiredPass') && $(this).hasClass('required')){
				//this is to pass the validation of the field if the class requiredPass is added..
			}else{
				
				++cnt;
				$(this).addClass('requiredAlert');
				if(cnt==1){
				
					if(toScroll=='NO_SCROLL'){
						$('#dlgBox').dialog({
							width: 350,
							height: 150,
							resizable: false,
							title: 'Important Note',
							open: function(){
								$('#dlgBox').html("There is some compulsory field(s) which you do not fill in. Refer to the field highlighted in red.");
							},
							close: function(){$('#dlgBox').empty();},
							modal: true,
							buttons:{'Close':function(){$('#dlgBox').dialog('close')}}
						});
					}else{
					if(!stopScroll){
						stopScroll = true;
						$('html, body').animate({
							scrollTop: $(this).offset().top
						}, 
						{
							duration:1000, 
							complete:function(){
								
								$('#dlgBox').dialog({
									width: 350,
									height: 150,
									resizable: false,
									title: 'Important Note',
									open: function(){
										$('#dlgBox').html("There is some compulsory field(s) which you do not fill in. Refer to the field highlighted in red.");
									},
									close: function(){$('#dlgBox').empty();},
									modal: true,
									buttons:{'Close':function(){$('#dlgBox').dialog('close')}}
								});
							}
						}
						);
					}
					}
				}
			}
		}else{
			
			if($(this).hasClass('InvalidEmail')){
				if(!stopScroll){
					stopScroll = true;
					$('html, body').animate({
						scrollTop: $(this).offset().top
					}, 
					{
						duration:1000, 
						complete:function(){
							
							$('#dlgBox').dialog({
								width: 350,
								height: 150,
								resizable: false,
								title: 'Important Note',
								open: function(){
									$('#dlgBox').html("Please make sure this is a valid email address before submit.");
								},
								close: function(){$('#dlgBox').empty();},
								modal: true,
								buttons:{'Close':function(){$('#dlgBox').dialog('close')}}
							});
							return false;
						}
					}
					);
				}
			}
		
		}
	})
	
	if(cnt>=1){
			/* $('#dlgBox').dialog({
				width: 350,
				height: 150,
				resizable: false,
				title: 'Important Note',
				open: function(){
					$('#dlgBox').html("There is some compulsory field(s) which you do not fill in. BBQWholesale.com required those field to proceed the order. Thank you.");
				},
				close: function(){$('#dlgBox').empty();},
				modal: true,
				buttons:{'Close':function(){$('#dlgBox').dialog('close')}}
			}); */
		return false;
	}else{
		if(submitType=='AJAX_POST'){
			return true;
		}else{
			$(formID).submit();
		}
	}
	
}


function checkIfChangeClass(){
	$('.required').each(function(){
		if($(this).val() != '' && $(this).val() != '( Field required )'){
			$(this).removeClass('requiredAlert').removeClass('fontgrey').addClass('focus');
		}
	})
}	