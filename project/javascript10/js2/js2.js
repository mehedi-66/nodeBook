const btn1 = document.getElementById('btn1');
const container = document.getElementById('container');


function createNotification(){
    const notif = document.createElement('div');

    notif.classList.add('toast');
    
    notif.innerHTML = "Mehedi Is good boy";

    container.appendChild(notif);

    setTimeout( ()=>{

        notif.remove();

    }, 3000);

}

btn1.addEventListener('click', () => {
    createNotification();

})
    
