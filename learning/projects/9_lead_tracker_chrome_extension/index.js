let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById('input-el');
const saveInputBtn = document.getElementById('saveinput-btn');
const saveTabBtn = document.getElementById('savetab-btn')
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    // for (let i = 0; i < leadsFromLocalStorage.length; i++) {
    //     ulEl.innerHTML += `<li>
    //                             <a href="${leadsFromLocalStorage[i]}" target="_blank">
    //                                 ${leadsFromLocalStorage[i]}
    //                             </a>
    //                         </li>`;
    // }
    render(myLeads);
}
    
saveInputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // ulEl.innerHTML += `<li>
    //                         <a href="${inputEl.value}" target="_blank">
    //                             ${inputEl.value}
    //                         </a>
    //                    </li>`;
    render(myLeads);
    inputEl.value = '';
});

saveTabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
    })
})

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// // FIRST WAY TO RENDER THE LEADS
// function renderLead() {
//     ulEl.innerHTML += `<li>${inputEl.value}</li>`;
// }

// SECOND WAY TO RENDER THE LEADS
function render(leads) {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
                            <a href="${leads[i]}" target="_blank">
                                ${leads[i]}
                            </a>
                    </li>`;
        // ANOTHER SIMILIAR WAY TO ulEl.innerHTML = `<li>${myLeads[i]}</li>`
            // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}