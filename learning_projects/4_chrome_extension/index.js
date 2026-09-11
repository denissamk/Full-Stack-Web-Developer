let myLeads = []
const inputEl = document.getElementById("input-el")
const saveInputBtn = document.getElementById("saveinput-btn")
const ulEl = document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


saveInputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    }
)


// function renderLead() {
//     // let listItem = "<li><a target='_blank' href='" + inputEl.value + "'>" + inputEl.value + "</a></li>"
//     let listItem = `<li>
//                         <a target="_blank" href="${inputEl.value}">
//                             ${inputEl.value}
//                         </a>
//                     </li>`
//     ulEl.innerHTML += listItem
// }


function renderLeads() {
    listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
                        <a target="_blank" href=${myLeads[i]}>
                            ${myLeads[i]}
                        </a>
                    </li>`
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}