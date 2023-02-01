$(function () {
    var currentDate = dayjs().format('dddd, MMMM, DD, YYYY')
    $('#currentDay').text(currentDate)
    

    $('.saveBtn').on('click', function(){
        var Key = $(this).parent().attr('id')
        var textvalue = $(this).siblings('.description').val()
        localStorage.setItem(Key, textvalue)
    })
    // past, present, and future class to each time
    var currentHour = dayjs().format('H')
    $('.time-block').each(function(){
        var divId = $(this).attr('id')
        if (divId < currentHour) {
            $(this).addClass('past')
        }
        else if (divId == currentHour) {
            $(this).addClass('present')
        }
        else if (divId > currentHour) {
            $(this).addClass('future')
        }
    })
    // Code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $('#09 .description').val(localStorage.getItem('09'))
    $('#10 .description').val(localStorage.getItem('10'))
    $('#11 .description').val(localStorage.getItem('11'))
    $('#12 .description').val(localStorage.getItem('12'))
    $('#13 .description').val(localStorage.getItem('13'))
    $('#14 .description').val(localStorage.getItem('14'))
    $('#15 .description').val(localStorage.getItem('15'))
    $('#16 .description').val(localStorage.getItem('16'))
    $('#17 .description').val(localStorage.getItem('17'))
    
  });
  