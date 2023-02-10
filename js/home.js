let nav = document.querySelector("nav") ; 
console.log(nav) ; 


window.onscroll = ()=>{
    
    if(window.pageYOffset === 0 )
    {
        nav.style.cssText = ` width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: 100%;
        transition: .2s;
        padding: 16px 100px;`
    }
    else{
        nav.style.cssText = "position:sticky ; top: 0 ; background:#0b171f;z-index:10000324 ; width:100%"
    }

    
}


console.log(window.pageYOffset) ; 