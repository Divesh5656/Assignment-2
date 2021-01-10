var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.description');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var timezone=document.querySelector('.timezone');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=d99ab14ffa1314e5235b12d30296ef39')

.then(response => response.json())
.then(data => {
  var tempValue = (data['main']['temp'] - 273.15).toFixed(2) + ' °C Degrees Celsius';
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var timezoneValue =data['timezone'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Atmospheric Condition - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue;
  timezone.innerHTML = "Timezone - " +timezoneValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})