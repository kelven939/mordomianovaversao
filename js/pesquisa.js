
const barraPesquisa = ()=>{
    let pesquisa = window.document.querySelector(".pesquisa")
        pesquisa = pesquisa.toLowerCase()
    let li = document.getElementsByTagName("li")
    for (let index = 0; index < li.length; index++) {
        if (!li[index].innerHTML.toLowerCase().includes(pesquisa)) {
            li[index].style.display = "none"
        }else{
            li[index].style.display = "flex"
        }
    }
}