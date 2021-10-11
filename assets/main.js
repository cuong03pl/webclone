const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const buyBtn = $$('.buy--hover')
const appear = $('.appear')
const modal  = $('.modal')
const close = $('.close-icon')
const app = {
    handleEvent: function(){
        
        // click vao mua hien ô mua 
        buyBtn.forEach(function(buybtn){
            buybtn.onclick = function(){
                $('.appear').classList.add('active')
            }
        })

        
        close.onclick = function(){
            $('.appear').classList.remove('active')
        }
    },

    start: function(){
        app.handleEvent()
    }
}
app.start()