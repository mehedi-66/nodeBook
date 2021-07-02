
const toggleBtn = document.getElementById('toggleBtn');
const toggleSide = document.getElementById('toggleSide');
const cnt = document.getElementById('mainId');

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    toggleSide.classList.toggle('active');
    cnt.classList.toggle('active');
})