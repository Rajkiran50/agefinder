



const todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();
console.log(day)
console.log(month)
console.log(year)
let userBirthDay = document.querySelector('.day');
let userBirthMonth = document.querySelector('.month')
let userBirthYear = document.querySelector('.year')


let resultDay = '';
let resultMonth = '';
let resultYear = '';

function activeErrors() {
    if (userBirthYear.value > year) {
        document.querySelector('.yearError').innerHTML = 'future year';
    }else{
        true
    }

   

    if (userBirthDay.value == 31 && userBirthMonth.value == 2) {
        document.querySelector('.dayError').innerHTML = 'wronge day.'
        console.log('problem')
    }else if(userBirthDay.value == 31 && userBirthMonth.value == 4) {
        document.querySelector('.dayError').innerHTML = 'wronge day.'
    }else if(userBirthDay.value == 31 && userBirthMonth.value == 6) {
        document.querySelector('.dayError').innerHTML = 'wronge day.'
    }else if(userBirthDay.value == 31 && userBirthMonth.value == 9) {
        document.querySelector('.dayError').innerHTML = 'wronge day.'
    }else if(userBirthDay.value == 31 && userBirthMonth.value == 11) {
        document.querySelector('.dayError').innerHTML = 'wronge day.'
    }else {
        document.querySelector('.dayError').innerHTML = 'currect'
    }


    if (userBirthYear.value > year) {
        document.querySelector('.errorYear').innerHTML = 'Must be valid Number'
        document.querySelector('.year').style.border = '1px solid red'
    }else {
        document.querySelector('.errorYear').innerHTML = ''
        document.querySelector('.year').style.border = '1px solid hsl(0, 0%, 86%)'
    }

    if (userBirthMonth.value > 12) {
        document.querySelector('.errorMonth').innerHTML = 'Must be valid Month'
        document.querySelector('.month').style.border = '1px solid red'
    }else {
        document.querySelector('.errorMonth').innerHTML = ''
        document.querySelector('.month').style.border = '1px solid hsl(0, 0%, 86%)'
    }
    
    if (userBirthDay.value > 31) {
        document.querySelector('.errorDay').innerHTML = 'Must be between 1-31'
        document.querySelector('.day').style.border = '1px solid red'
    }else {
        document.querySelector('.errorDay').innerHTML = ''
        document.querySelector('.day').style.border = '1px solid hsl(0, 0%, 86%)'
    }
}


function calculator() {


    let myMonth = month
    let myYear = year
    let myDays = day
   
   





    if (userBirthMonth.value > month) {
        myYear -= 1
        //console.log(year)
        myMonth += 12
        //console.log(month)
        myMonth -= userBirthMonth.value
        resultMonth = myMonth
        //console.log(myMonth)
        resultYear = myYear - userBirthYear.value
        console.log(resultYear)
    }else {
        resultYear = myYear - userBirthYear.value
        console.log(resultYear)
        resultMonth = myMonth - userBirthMonth.value
        console.log(resultMonth)

    }

    
    if (userBirthDay.value > day && month == 1) {
        myMonth -= 1
        resultDay = (myDays + 31) - userBirthDay.value
        console.log(resultDay)
        console.log(myMonth)
        resultMonth = myMonth
        console.log('its the condition')
   }else if(userBirthDay.value > day && month == 3) {
        myMonth -= 1
        resultDay = (myDays + 28) - userBirthDay.value
        console.log(resultDay)
        console.log(myMonth)
        resultMonth = myMonth
        console.log('first')
   }else if(userBirthDay.value > day && month == 5) {
        myMonth -= 1
        resultDay = (myDays + 30) - userBirthDay.value
        console.log(resultDay)
        console.log(myMonth)
        resultMonth = myMonth
        console.log('third')
   }else if(userBirthDay.value > day && month == 7) {
        myMonth -= 1
        resultDay = (myDays + 30) - userBirthDay.value
        console.log(resultDay)
        console.log(myMonth)
        resultMonth = myMonth
        console.log('fifth')
   }else if(userBirthDay.value > day && month == 8) {
        myMonth -= 1
        resultDay = (myDays + 31) - userBirthDay.value
        console.log(resultDay)
        console.log(myMonth)
        resultMonth = myMonth
        console.log('seventh')
   }else if(userBirthDay.value > day && month == 10) {
        myMonth -= 1
        
        resultDay = (myDays + 30) - userBirthDay.value
        console.log(resultDay)
        resultMonth = myMonth
        console.log(myMonth)
        console.log('ten')
   }else if(userBirthDay.value > day && month == 12) {
        myMonth -= 1
        resultDay = (myDays + 30) - userBirthDay.value
        console.log(resultDay)
        console.log(myMonth)
        resultMonth = myMonth
        console.log('twoelveth')
   }else if(userBirthDay.value < day ) {
        resultDay = day - userBirthDay.value
        console.log(resultDay)
        resultMonth = myMonth - userBirthMonth.value
        console.log(resultMonth)
        console.log('another day')
    
   }
   


    document.querySelector('.yearsFinal').innerHTML = resultYear
    document.querySelector('.monthFinal').innerHTML = resultMonth
    document.querySelector('.daysFinal').innerHTML = resultDay

    
}


