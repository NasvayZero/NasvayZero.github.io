document.getElementById('loadData').addEventListener('click', function() {
    const loader = document.getElementById('loader');
    const resultDiv = document.getElementById('result');
    
    loader.style.display = 'block';
    resultDiv.innerHTML = '';
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'process.php', true);
    
    xhr.onload = function() {
        if (this.status === 200) {
            loader.style.display = 'none';
            resultDiv.innerHTML = this.responseText;
        } else {
            loader.style.display = 'none';
            resultDiv.innerHTML = 'Произошла ошибка при загрузке данных';
        }
    };
    
    xhr.onerror = function() {
        loader.style.display = 'none';
        resultDiv.innerHTML = 'Ошибка сети';
    };
    
    xhr.send();
});
