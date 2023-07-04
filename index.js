window.onload=(event) =>{
    const header = document.querySelector('.index-bar');
    const mobileButton = document.querySelector('.mobile-button');
    const mobileBarMenu = document.querySelector('.mobile-bar');

    mobileButton.addEventListener('click',(() =>{
        mobileBarMenu.classList.toggle('show');
    }))
    

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
