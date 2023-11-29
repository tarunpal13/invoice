let items = [];

function addItem() {
    const itemsContainer = document.getElementById('items-container');
    const newItem = document.querySelector('.item').cloneNode(true);
    itemsContainer.appendChild(newItem);
}

function generateInvoice() {
    const shopName = document.getElementById('shopName').value;
    const shopNumber = document.getElementById('shopNumber').value;

    document.getElementById('shop-name-preview').textContent = `Shop Name: ${shopName}`;
    document.getElementById('shop-number-preview').textContent = `Shop Number: ${shopNumber}`;

    items = [];
    const itemInputs = document.querySelectorAll('.item');
    itemInputs.forEach(itemInput => {
        const itemName = itemInput.querySelector('.item-name').value;
        const itemPrice = parseFloat(itemInput.querySelector('.item-price').value) || 0;
        const itemQuantity = parseInt(itemInput.querySelector('.item-quantity').value) || 0;

        if (itemName && itemPrice && itemQuantity) {
            const total = itemPrice * itemQuantity;
            items.push({ name: itemName, price: itemPrice, quantity: itemQuantity, total });
        }
    });

    displayInvoice();
}

function displayInvoice() {
    const invoicePreview = document.getElementById('invoice-preview');
    const invoiceItemsPreview = document.getElementById('invoice-items-preview');

    // Clear previous items
    while (invoiceItemsPreview.firstChild) {
        invoiceItemsPreview.removeChild(invoiceItemsPreview.firstChild);
    }

    // Display items
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.total}</td>
        `;
        invoiceItemsPreview.appendChild(row);
    });

    invoicePreview.style.display = 'block';
}
