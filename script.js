function showDetails(title, description, price, imageUrl) {
    // Actualiza los detalles del producto en el modal
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-price').innerText = price;

    // Actualiza la imagen del producto
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;
    modalImage.alt = `Imagen de ${title}`;

    // Muestra el modal
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    // Oculta el modal
    document.getElementById('product-modal').style.display = 'none';
}
