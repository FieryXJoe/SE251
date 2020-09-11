// JavaScript Document
var people = []

function clickSubmit()
{
    var fn, ln, email, emailConf, phone;
    var flag = true;
    fn = document.querySelector(`#first-name`)
    ln = document.querySelector(`#last-name`)
    email = document.querySelector(`#email`)
    emailConf = document.querySelector(`#email-confirm`)
    phone = document.querySelector(`#phone`)

    //NEW Code for pt 2 declaring patterns
    var namePatt = new RegExp("^[a-zA-Z-]{1,}$")
    var emailPatt = /\S+@\S+\.\S+/ //This same regex without / on either side was not working although it worked in regexr, found this other regex format and that worked
    var phonePatt = /^[1]{0,1}[-]{0,1}[(]{0,1}\d{0,3}[)]{0,1}\s{0,1}[-]{0,1}\d{3}\s{0,1}[-]{0,1}\d{4}$/ //same as above this regex that was working on regexr stopped working as a RegExp object

    //hate to do it this way but a function would be crazy complex and email-confirm is different check from others and they need to get different spans
    //mostly copy paste so not much work
    if(!namePatt.test(fn.value))//NEW changed tests to check pattern instead of if empty
    {
        document.querySelectorAll(`p`)[0].style.color = "red"
        document.querySelector(`#fn-error`).innerHTML = `*`
        flag = false
    }
    else//neeeded to undo when they submit properly
    {
        document.querySelectorAll(`p`)[0].style.color = "black"
        document.querySelector(`#fn-error`).innerHTML = ``
    }

    if(!namePatt.test(ln.value))
    {
        document.querySelectorAll(`p`)[1].style.color = "red"
        document.querySelector(`#ln-error`).innerHTML = `*`
        flag = false
    }
    else
    {
        document.querySelectorAll(`p`)[1].style.color = "black"
        document.querySelector(`#ln-error`).innerHTML = ``
    }
    console.log(emailPatt.test(email.value))
    if(!emailPatt.test(email.value))
    {
        document.querySelectorAll(`p`)[2].style.color = "red"
        document.querySelector(`#email-error`).innerHTML = `*`
        flag = false
    }
    else
    {
        document.querySelectorAll(`p`)[2].style.color = "black"
        document.querySelector(`#email-error`).innerHTML = ``
    }
    
    if(!emailPatt.test(emailConf.value) || emailConf.value !== email.value)
    {
        document.querySelectorAll(`p`)[3].style.color = "red"
        document.querySelector(`#email-confirm-error`).innerHTML = `*`
        flag = false
    }
    else
    {
        document.querySelectorAll(`p`)[3].style.color = "black"
        document.querySelector(`#email-confirm-error`).innerHTML = ``
    }
    
    if(!phonePatt.test(phone.value))
    {
        document.querySelectorAll(`p`)[4].style.color = "red"
        document.querySelector(`#phone-error`).innerHTML = `*`
        flag = false
    }
    else
    {
        document.querySelectorAll(`p`)[4].style.color = "black"
        document.querySelector(`#phone-error`).innerHTML = ``
    }

    //No submission errors
    if(flag)
    {
       var out = document.querySelector(`#info`)
       out.innerHTML += fn.value + ` ` + ln.value + `<br>`
       out.innerHTML += email.value + `<br>`
       out.innerHTML += phone.value
       document.querySelector(`#confirmation`).style.display = "block"

       var person = {
        fname:fn.value,
        lname:ln.value,
        email:email.value,
        phone:phone.value
       }
       people.push(person)

       fn.value = ""
       ln.value = ""
       email.value = ""
       emailConf.value = ""
       phone.value = ""
    }
}