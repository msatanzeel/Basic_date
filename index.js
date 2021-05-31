 var a;
 var time;
 var date;

 

function set_date()
{
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    a=new Date();
    date=a.toLocaleDateString(undefined,options);
    // time=a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    time=a.toLocaleTimeString('en-US');
    document.getElementById("id1").innerHTML=time + "<br>" + " on " + date;

}

setInterval("set_date()",1000);






// tem.innerHTML=time;
