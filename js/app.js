const a = document.querySelectorAll("a");
a.forEach((i)=>{
   i.addEventListener("click",(ev)=>{
    ev.preventDefault();
    a.forEach((d)=>{
        if(d.className == "active")
        {
            d.className = "none";
            i.className = "active";
        }
    });
   })
})