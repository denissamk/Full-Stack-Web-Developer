let myLeads = []
const inputEl = document.getElementById("input-el")
const saveInputBtn = document.getElementById("saveinput-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("savetab-btn")
const ulEl = document.getElementById("ul-el")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


function render(leads) {
    listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
                        <a target="_blank" href=${leads[i]}>
                            ${leads[i]}
                        </a>
                    </li>`
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}


saveInputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    render(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    }
)


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        render(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        }
    )
    }
)

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
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