<script>
    function searchProducts() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards .forEach(card => {
            const productName = card.querySelector('h4').textContent.toLowerCase();
            if (productName.includes(input)) {
                card.style.display = 'block'; // Show card if it matches
            } else {
                card.style.display = 'none'; // Hide card if it doesn't match
            }
        });
    }
</script>