window.onload=(event) =>{
    const header = document.querySelector('header');
    

    window.addEventListener('scroll', (scroll) =>{
        y = scrollY;
        if(y > 130){
            header.classList.add('black');
        }
        else{
            if(header.classList.contains('index-bar')){
                header.classList.remove('black')
            }
        }
    })





}
