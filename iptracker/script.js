




var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);



function SetText(obj){

  document.getElementById("IPADDRESS").innerText = obj.IPADDRESS
  document.getElementById("LOCATION").innerText = obj.LOCATION
  document.getElementById("TIMEZONE").innerText = obj.TIMEZONE
  document.getElementById("ISP").innerText = obj.ISP

}

function SetMap(...ip)
{
  //console.log("http://ip-api.com/json/"+ip)https://ipapi.co/90.89.69.156/json/
  fetch("https://ipapi.co/"+ip+"/json/")
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data)
      if(data.status != "fail"){
        console.log(data)
        var lat = data.latitude.toFixed(3);
        var lon = data.longitude.toFixed(3);
        var maplocations = { 
          lat: parseFloat(lat), 
          lng: parseFloat(lon),
          IPADDRESS:data.ip, 
          LOCATION:data.city+", "+data.country,
          TIMEZONE:data.timezone,
          ISP:data.org
        
        
        
        };
        map.setView([maplocations.lat, maplocations.lng], 13);
  
        L.marker([maplocations.lat, maplocations.lng]).addTo(map)
        .bindPopup('You a here')
  
  
        SetText(maplocations)
      }
      else{
        console.log(data)
        alert("IP is not Correct")
      }
      
   }).catch((er)=>{console.log(er)})
   
   ;
}
SetMap()




   function SendIP(IP){
     var regIP = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
     IP = document.getElementById('inputIP').value;
     if(IP.match(regIP)){
      
      SetMap(IP)
     }
     else{
      alert("IP is not Correct")
     }
    
   }
