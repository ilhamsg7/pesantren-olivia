function search_article() {
    let input = document.getElementById("artikel-search").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('title-artikel');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}