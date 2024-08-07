const time=document.getElementById('time');
const AmPm=document.getElementById('AmPm');
const day=document.getElementById('day');
const date=document.getElementById('date');


function setDay(dayNum){
   let dayName;
    switch(dayNum){
        case 0:
            dayName="Sunday";
            break;
        case 1:
            dayName="Monday";
            break;
        case 2:
            dayName="Tuesday";
            break;
        case 3:
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5:
            dayName="Friday";
            break;
        case 6:
            dayName="Saturday";
            break;
        default:
            dayName="Not Found! Error..";
            console.log(dayNum);
    }
    return dayName;
}

function setMonth(month_num){
   let monthName;
    switch(month_num){
        case 0:
            monthName="Jan";
            break;
        case 1:
            monthName="Feb";
            break;
        case 2:
            monthName="March";
            break;
        case 3:
            monthName="April";
            break;
        case 4:
            monthName="May";
            break;
        case 5:
            monthName="Jun";
            break;
        case 6:
            monthName="July";
            break;
        case 7:
            monthName="Aug";
            break;
        case 8:
            monthName="Sep";
            break;
        case 9:
            monthName="Oct";
            break;
        case 10:
            monthName="Nov";
            break;
        case 11:
            monthName="Dec";
            break;
        default:monthName="Not Found! Error...";
        console.log(monthName);
    }
    return monthName;

}

function getCurrentTime(){
    const currentTime=new Date();
    let hr=currentTime.getHours();
    let mt=currentTime.getMinutes();
    let sc=currentTime.getSeconds();
    let AMPM=(hr<12)?"AM":"PM";
    hr=(hr>12)?hr-12:hr;
    if(hr<10){
        let tempHr=hr;
        hr='0'+tempHr;
    }
    if(mt<10){
        let tempMt=mt;
        mt='0'+tempMt;
    }
    if(sc<10){
        let tempSc=sc;
        sc='0'+tempSc;
    }
    
    const finalTime=`${hr}:${mt}:${sc}`;
    

    let dayName=setDay(currentTime.getDay());

    let fullDate=null;
    fullDate=`${currentTime.getDate()} ${setMonth(currentTime.getMonth())} ${currentTime.getFullYear()}`;
    console.log(fullDate)


    time.innerText=finalTime;
    AmPm.innerText=AMPM;
    day.innerText=dayName;
    date.innerText=fullDate;

}
setInterval(getCurrentTime,1000);