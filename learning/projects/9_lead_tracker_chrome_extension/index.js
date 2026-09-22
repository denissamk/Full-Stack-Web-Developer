let myLeads = [];
const inputEl = document.getElementById('input-el');
const saveInputBtn = document.getElementById('saveinput-btn');
const ulEl = document.getElementById('ul-el');

saveInputBtn.addEventListener('click', function() {
     myLeads.push(inputEl.value);
     ulEl.innerHTML += `<li>
                            <a href="${inputEl.value}" target="_blank">
                                ${inputEl.value}
                            </a>
                        </li>`; // OR USE renderLead();
     inputEl.value = '';
});

// FIRST WAY TO RENDER THE LEADS
function renderLead() {
    ulEl.innerHTML += `<li>${inputEl.value}</li>`;
}

// SECOND WAY TO RENDER THE LEADS
function renderLeads() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>${myLeads[i]}</li>`;
        // ANOTHER SIMILIAR WAY TO ulEl.innerHTML = `<li>${myLeads[i]}</li>`
        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}