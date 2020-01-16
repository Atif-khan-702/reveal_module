document.getElementById("register").onclick=formModule.insertRecord;
document.getElementById("update").onclick=formModule.updateRecord;
document.getElementById("country").addEventListener("change", function() {
    formModule.populate1('country', 'state','city');
});
document.getElementById("state").addEventListener("change", function() {
    formModule.populate2('state','city');
});
document.getElementById('email').onchange=formModule.myFunction1;
document.getElementById('color_change').onclick=formModule.myFunction;

arr=['fname','lname','fatherName','motherName','blood','email','mobile','adhar','gender','dob','marry','country','state','city'];
arr.forEach(function(elem) {
    document.getElementById(elem).addEventListener("change", function() {
    formModule.remove_warn(elem);
});
})
