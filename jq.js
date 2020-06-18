$(document).ready(()=>{
    let month = [
        '<li>January</li>','<li>February</li>','<li>March</li>',
        '<li>April</li>','<li>May</li>','<li>June</li>',
        '<li>July</li>','<li>August</li>','<li>September</li>',
        '<li>October</li>','<li>November</li>','<li>December</li>'
    ]
    let i = 0;
    showMonth();
    function showMonth(){
        if(i < month.length){
            $('#month-list').append(month[i])
            i++
            setTimeout(showMonth, 1000)
        }else{
            $('li:odd').css('color','red')
        }
    }       
})



