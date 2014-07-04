//Intelfinity:JavaChecks for Form
function check(frm) 
{
//Name Check
    if (frm.cf_name.value.length == 0)
    {
        alert("Please enter your name for our reference.");
        frm.cf_name1.focus();
        return false;
    }
//Email ID Check
   if (frm.cf_email.value.length == 0)
    {
        alert("Please enter an e-mail address.");
        frm.cf_email.focus();
        return false;
    }
    if (frm.cf_email.value.indexOf("@") == -1)
    {
        alert("Please enter a valid e-mail address.");
        frm.cf_email.focus();
        return false;
   }
   if (frm.cf_email.value.indexOf(".") == -1)
    {
        alert("Please enter a valid e-mail address.");
        frm.cf_email.focus();
        return false;
   }
//Message Check
if (frm.cf_message.value.length == 0)
{        alert("Please enter a message to send our Customer Service team.");
        frm.cf_message.focus();
        return false;
    }  
}