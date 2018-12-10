document.querySelector('button')
.addEventListener('click', () => {
    let angka = document.querySelectorAll('input');
    angka[2].value = Number(angka[0].value)+Number(angka[1].value);
})