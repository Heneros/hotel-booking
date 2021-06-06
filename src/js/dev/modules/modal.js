const modal = () => {

  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false){
    const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector),
    window = document.querySelectorAll('[data-modal]'),
    
    

    scroll = calcScroll();



    trigger.forEach(item => {
      item.addEventListener('click', (e) =>  {
        if(e.target){
          e.preventDefault();
        }

        btnPressed = true;

        if(destroy){
          item.remove();
        }

        // window.forEach(item =>{
        //   item.style.display = 'none';
        //   item.classList.add('animated', 'fadeIn');
        // });

        modal.style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () =>{
      window.forEach(item =>{
        item.style.display = 'none';
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', (e) =>{
      if(e.target === modal){
        window.forEach(item =>{
          item.style.display = 'none';
        })
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
      }
    });
    function showModalByTime(selector, time){
      setTimeout(function(){ 
        let display;

        document.querySelectorAll('[data-modal]').forEach(item => {
          if(getComputedStyle(item).display !== 'non'){
            display = "block";
          }
        });
        if(!display){
          document.querySelector(selector).style.display = 'block';
          document.body.style.overflow = "hidden";
          let scroll = calcScroll();
          document.body.style.marginRight = `${scroll}px`
        }
      }, time)
    }
    function calcScroll(){
      let div = document.createElement('div');

      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflow = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      
      let scrollWidth = div.offsetWidth - div.clientLeft;
      div.remove();

      return scrollWidth;
    }
 

  }     
  bindModal('.options__booking', '.popup-up', '.popup-up  .popup-close',);  
  bindModal('.book__now', '.popup-up', '.popup-up  .popup-close',);  
  

}  

export default modal;