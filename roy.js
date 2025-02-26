document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;

    alert(`Ro'yxatdan o'tganingiz uchun rahmat!\n\nFamiliya: ${surname}\nIsm: ${name}\nSinf: ${grade}`);
});
