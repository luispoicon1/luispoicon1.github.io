function showDetails(title, description, price) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}
