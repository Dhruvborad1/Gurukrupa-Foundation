document.addEventListener('DOMContentLoaded', function() {
    displayLeads();

    function displayLeads() {
        const leads = JSON.parse(localStorage.getItem('leads')) || [];
        const leadList = document.getElementById('leadList');
        leadList.innerHTML = '';

        leads.forEach((lead, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${lead.number}</td>
                <td>${lead.pt}</td>
                <td>${lead.Item}</td>
                <td>${lead.Cut}</td>
                <td>${lead.Qty}</td>
                <td>${lead.Mtrs}</td>
                <td>${lead.Rate}</td>
                <td>${lead.Purose}</td>
                <td>${lead.Remark}</td>
                <td>${lead.Total}</td>
                <td>${lead.Date}</td>
                <td>
                    <button class="editBtn" data-index="${index}">Edit</button>
                    <button class="deleteBtn" data-index="${index}">Delete</button>
                </td>
            `;
            leadList.appendChild(row);
        });

        // Add event listeners for edit and delete buttons
        const editButtons = document.querySelectorAll('.editBtn');
        const deleteButtons = document.querySelectorAll('.deleteBtn');

        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                editLead(index);
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deleteLead(index);
            });
        });
    }

    function editLead(index) {
        const leads = JSON.parse(localStorage.getItem('leads')) || [];
        const lead = leads[index];
        
        const newnumber = prompt('Edit number:', lead.number);
        const newpt = prompt('Edit pt:', lead.pt);
        const newItem = prompt('Edit Item Name:', lead.Item);
        const newCut = prompt('Edit Cut:', lead.Cut);
        const newQty = prompt('Edit Qty:', lead.Qty);
        const newMtrs = prompt('Edit Mtrs:', lead.Mtrs);
        const newRate = prompt('Edit Rate:', lead.Rate);
        const newPurose = prompt('Edit Purose:', lead.Purose);
        const newRemark = prompt('Edit Remark:', lead.Remark);
        const newTotal = prompt('Edit Total:', lead.Total);
        const newDate = prompt('Edit Date:', lead.Date);

        if (newnumber && newpt && newItem && newCut && newQty && newMtrs && newRate && newPurose && newRemark && newTotal && newDate) {
            leads[index] = {
                number: newnumber,
                pt: newpt,
                Item: newItem,
                Cut: newCut,
                Qty: newQty,
                Mtrs: newMtrs,
                Rate: newRate,
                Purose: newPurose,
                Remark: newRemark,
                Total: newTotal,
                Date: newDate

            };
            localStorage.setItem('leads', JSON.stringify(leads));
            displayLeads();
        }
    }

    function deleteLead(index) {
        const leads = JSON.parse(localStorage.getItem('leads')) || [];
        leads.splice(index, 1);
        localStorage.setItem('leads', JSON.stringify(leads));
        displayLeads();
    }
});
