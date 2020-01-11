

// localStorage.setItem(,obj1)
// console.log(localStorage.getItem(obj1.index))
// const index=[]
function addcontacts()
{
    const name=document.getElementById("addName").value
    
    const contnum=document.getElementById("addPhone").value
    const obj={
     index:name.toLowerCase(),
     nameof:name,
     contact:contnum

    }

    
    localStorage.setItem(obj.index,JSON.stringify(obj))
    document.getElementById("addName").value=""
    document.getElementById("addPhone").value=""
    // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
    
}

function search()
{
    var srch=document.getElementById("search").value
    srch=srch.toLowerCase()
    try {
        var found=JSON.parse(localStorage.getItem(srch))
        document.getElementById("numout").value=found.contact
    } catch (error) {
        document.getElementById("numout").value="not found"
    }
    document.getElementById("search").value=""

}
