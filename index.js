const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();

var showDate = new Date(today.getFullYear(), today.getMonth(), 1);


window.onload = function () {
    showProcess(today, calendar);
};

function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}


function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}


function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}


function createProcess(year, month) {
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                
                calendar += "<td class='disabled'>" + "<a href='createplan.html'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</a>" + "</td>";
            } else if (count >= endDate) {
                
                count++;
                calendar += "<td class='disabled'>" + "<a href='createplan.html'>"  + (count - endDate) + "</a>"  + "</td>";
            } else {
                
                count++;
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += "<td class='today'>" + "<a href='createplan.html'>"  + count + "</a>" + "</td>";
                } else {
                    calendar += "<td>" + "<a href='createplan.html'>" + count + "</a>" + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}