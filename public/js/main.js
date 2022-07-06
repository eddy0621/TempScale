const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName')
const city_name=document.getElementById('city_name')
const temp_val = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal==="") {
        city_name.innerText='please write the name before search';
        dataHide.classList.add('data_hide');
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b4ad258b6feac4250c3231585f4175a9`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            const arrData = [data]
            console.log(arrData)
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            dataHide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerText=`please enter the city name properly`
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);

const day = document.getElementById('day');

const getCurrentDay = ()=>{
    let weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    const day = document.getElementById('day');

    day.innerText=days;
};

const getCurrentTime =()=>{
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "dec",
    ];

    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var month = months[now.getmonths()+1];
    var dates = now.getDate();
    var date = document.getElementById('date');
    date.innerText=`${month} ${dates} | ${hours}:${mins}`;

}

getCurrentDay();