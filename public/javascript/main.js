document.addEventListener("DOMContentLoaded",function(){
    var click = document.querySelectorAll('.home_product-shoppingcart'),
    modalmess = document.querySelector('.modal_message');
    
    for (let i = 0; i < click.length; i++) {
        click[i].onclick = function() {
            console.log('ok');
            modalmess.classList.add('active');
            function removeClass() {
                setTimeout(function(){ 
                    modalmess.classList.add('feling');
                    modalmess.classList.remove('active'); 
                }, 2000);
            }
            removeClass();
            function removeFeling() {
                setTimeout(function(){ 
                    modalmess.classList.remove('feling');           
                }, 3000);
            }
            removeFeling();
            }
    }
},false)

