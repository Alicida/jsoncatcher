$(document).ajaxSuccess(function(event,xhr,options){
      //if the request url contain the next string:
      if(options.url.includes("ServiceUrl")){
        //console.log(xhr);
        //xhr contain the request object
        //for this example we go to responseJSON.success
        if(xhr.responseJSON.success == true){
          //if success is true we go to determinate the current time
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          //then, we will create a dataLayer for GoogleTag Manager.
          //For this we send the origin url, the current time and the name of event.
          dataLayer.push({
            'originUrl': window.location.pathname,
            'currentTime': date,
            'event': 'Eventname'
          });
        }else{
          //else. do other thing
        }
      }else{
        //else. do other thing
      }
    });
