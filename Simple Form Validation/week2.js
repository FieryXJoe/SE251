// JavaScript Document
function clickSubmit()
{
    var fn, ln, email, emailConf, phone;
    var flag = true;
    fn = document.querySelector(`#first-name`)
    ln = document.querySelector(`#last-name`)
    email = document.querySelector(`#email`)
    emailConf = document.querySelector(`#email-confirm`)
    phone = document.querySelector(`#phone`)

    //hate to do it this way but a function would be crazy complex and email-confirm is different check from others and they need to get different spans
    //mostly copy paste so not much work
    if(fn.value == "")
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

    if(ln.value == "")
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
    
    if(email.value == "")
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
    
    if(emailConf.value == "" || emailConf.value !== email.value)
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
    
    if(phone.value == "")
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
    }
}