window.onload = (event) => {
    VjezbeAjax.dohvatiPodatke((err,data) => {
        if (err == null) 
            VjezbeAjax.iscrtajVjezbe(document.getElementById("odabirVjezbe"),JSON.parse(data));
    });
}