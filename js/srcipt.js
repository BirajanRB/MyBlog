function update() 
{
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10)
    {
        hours ='0'+hours;
    }
    document.getElementById('hour').innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10)
    {
        minutes ='0'+minutes;
    }
    document.getElementById('min').innerHTML = ": " + minutes;


    var seconds = date.getSeconds();
    if (seconds < 10)
    {
        seconds = '0'+seconds;
    }
    document.getElementById('sec').innerHTML = ": " + seconds;

    var year = date.getFullYear();
    document.getElementById('year').innerHTML = year;

    var month = date.getMonth() + 1;  
    if (month < 10)
    {
        month ='0'+month;
    }
    document.getElementById('month').innerHTML = "/ " + month;

    var date = date.getDate(); 
    if (date < 10)
    {
        date ='0'+date;
    }
    document.getElementById('date').innerHTML = "/ " + date;

}


function clockStart() 
{   
    update(); 
    setInterval(update, 1000);
    
}

function todays_day()
{   
    var date_2 = new Date();

    var day = date_2.getDay(); 
    var weekdays = new Array("Sunday","Monday","Turesday","Wednesday","Thursday","Friday","Saturday");
    document.getElementById("day").innerHTML = ", " +weekdays[day];

}


var n=1;

function banner_rotate()
{   
    if(n>3)
    {
        n=1;
    }
    document.getElementById("header_home_page").style.backgroundImage = "url('images/"+ n +".jpg')";
    n++;
}

function banner_auto_rotate()
{
    setInterval(banner_rotate,6000);
}


function banner_next()
{   
    if(n>3)
    {
        n=1;
    }
    document.getElementById("header_home_page").style.backgroundImage = "url('images/"+n+".jpg')";
    n++;
}

function banner_prev()
{
    if(n<1)
    {
        n=3;
    }
    document.getElementById("header_home_page").style.backgroundImage = "url('images/"+n+".jpg')";
    n--;
}

function Number_check()
{   
    x = isNaN(document.User_Info.phone_number.value);

    if(x)
    {
       alert("Invalid Phone Number.");

    }
    else if(document.User_Info.phone_number.value.length<6)
    {
        alert("Phone No. must be more than 5-digits!")
    }

}
