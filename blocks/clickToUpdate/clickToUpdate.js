export default function decorate(block){
    var mainDiv = document.createElement("div")
    mainDiv.classList.add("mainDiv")
    const rows = [...block.children]
    console.log(rows)

    var leftDiv = (document.createElement("div"));
    leftDiv.classList.add("leftDiv")


    rows.forEach((row) => {
        var leftDivItem = document.createElement("div");
        leftDivItem.classList.add("leftDivItem")
        leftDivItem.textContent = row.children[0].textContent.toUpperCase();
        leftDiv.append(leftDivItem)

         
    })
    mainDiv.append(leftDiv)

    var resDiv = document.createElement("div");
    resDiv.classList.add("rightDiv")

    var response = document.createElement("div");
    response.classList.add("response")
    resDiv.append(response);
    
    mainDiv.append(resDiv)

    block.textContent = '';
    block.append(mainDiv)

    leftDiv.addEventListener("click", (e) => {
        response.textContent = (e.target.textContent).toLowerCase() + " clicked";
    })

    
}