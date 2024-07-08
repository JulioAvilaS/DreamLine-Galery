document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;

    fetch(`https://json-dream-line.vercel.app/user?email=${username}&senha=${password}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length > 0) {
                const user = data[0];
                localStorage.setItem('user', JSON.stringify(user));
                alert('Login successful!');
                window.location.href = "/json/Perfil/PGperfil.html";
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error('Error:', error));
});
