window.addEventListener('DOMContentLoaded', (event) => {

  var today = new Date().toISOString().split('T')[0];
  
  const n = parseInt(today[9])-1;
  
  today = today.slice(0,9)+n;
	
  document.querySelector('input[name=event-date]').setAttribute('min',today);
  
  let event_desc_text = document.getElementById('event-desc');
  
  let word_count = 300; // Initialize word count to 300
  
  let submit_button = document.getElementById('submit_data');
  
  let event_title = document.getElementById('event-name');
  
  const regex = /^[A-Za-z0-9]/;
  
  submit_button.addEventListener('click', (e1) => {
	  
	  e1.preventDefault();
	  
	  var event_name = document.querySelector('input[name=event-name]').value;
	  var event_date = document.querySelector('input[name=event-date]').value;
	  var event_time = document.querySelector('input[name=event-time]').value;
	  var event_location = document.querySelector('input[name=event-location]').value;
	  var event_desc = document.getElementById('event-desc').value.trim();
	  var event_attend_status = document.querySelector('#event-attend-status').value;
	  
	  if(event_name=="" || event_name==null || event_date=="" || event_date==null || event_time=="" || event_time==null 
			|| event_location=="" || event_location==null || event_desc=="" || event_desc==null || event_attend_status=="" || event_attend_status==null){
				alert('Please fill in all the fields!');
				return;
				
	  }
	  
	  else{
		  
		if(event_title.value.trim().length < 5){
			alert('Event title should be atleast 5 characters long!');
			return;
		}
		
		else if(!regex.test(event_title.value.trim())){
			alert('Event title should start with either a letter or number!');
		}
		
		else{
			alert('Event created successsfully!');
			return;
		}
		
	  }
	  
	  
  });
  
  

  event_desc_text.addEventListener('keydown', (e) => {
    
    if (e.key === ' ' && event_desc_text.value.trim().split(/\s+/).length >= 300) {
      alert('Number of words exceeded!');
      e.preventDefault();
      return;
    }
	
    word_count = 300 - event_desc_text.value.trim().split(/\s+/).length;
    document.getElementById('char_count').innerText = word_count;
  
  });

});