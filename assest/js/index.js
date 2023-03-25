// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

const headerMenu = document.querySelectorAll('.header-menu__item-link')
const searchBtn = document.querySelector('.header-body__socials-search')
const searchInput = document.querySelector('.header-body__socials-search-input')
const playPin = document.querySelectorAll('.pin.play-pin')
const imagePin = document.querySelectorAll('.pin.image-pin')
const audioPin = document.querySelectorAll('.pin.audio-pin')
const categories = document.querySelectorAll('.post-details__category')


const itemLoadMoreGrid = document.querySelectorAll('.container-content__loadmore .grid-row:nth-child(2) .grid__column-1-3:nth-child(n + 4)')
const wrapperBtnLoadGrid = document.querySelector('.container-content__loadmore-btn.content-grid')
const btnLoadGrid = document.querySelector('.container-content__loadmore-btn.content-grid .btn')

const itemLoadMoreList = document.querySelectorAll('.container-content__bonus .grid-row .grid__column-2-3 .list-post-wrapper-content li:nth-child(n + 8)')
const wrapperBtnLoadList = document.querySelector('.container-content__loadmore-btn.content-list')
const btnLoadList = document.querySelector('.container-content__loadmore-btn.content-list .btn')


const app = () => {
    const headerMenuHandle = () => {
        let len = headerMenu.length
        headerMenu[0].style.padding = '10px 10px 10px 0'
        headerMenu[len - 1].style.padding = '10px 0 10px 10px'
    }

    headerMenuHandle()

    const toggleSearchInput = () => {
        if(searchInput.style.width === '230px') {
            searchInput.style.width = '0'
            setTimeout(() => {
                searchInput.style.opacity = '0'
            }, 250)
        } else {
            searchInput.style.cssText = `width: 230px; opacity: 1; border: 1px solid #ccc`
        }
    }
    searchInput.addEventListener('click', (event) => {
        event.stopPropagation()
    })
    
    searchBtn.onclick = () => toggleSearchInput()
    
    // playPin.innerHTML = `<i class="fa-solid fa-play"></i>`
    // imagePin.innerHTML = `<i class="fa-regular fa-image"></i>`
    
    const pinFunc = () => {
        const playPinLength = playPin.length
        const imagePinLength = imagePin.length
        const audioPinLength = audioPin.length
        for(var i = 0; i < playPinLength; i++) {
            playPin[i].innerHTML = `<i class="fa-solid fa-play"></i>`
        }
    
        for(var i = 0; i < imagePinLength; i++) {
            imagePin[i].innerHTML = `<i class="fa-regular fa-image"></i>`
        }
    
        for(var i = 0; i < audioPinLength; i++) {
            audioPin[i].innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        }
    }
    pinFunc()

    btnLoadGrid.addEventListener('click', () => {
        btnLoadGrid.innerHTML += `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
        setTimeout(() => {
            for(var i = 0 ; i < itemLoadMoreGrid.length; i++) {
                itemLoadMoreGrid[i].style.display = 'block'
            }
            wrapperBtnLoadGrid.style.display = 'none'
        }, 1500)
    })

    btnLoadList.addEventListener('click', () => {
        btnLoadList.innerHTML += `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
        setTimeout(() => {
            for(var i = 0 ; i < itemLoadMoreList.length; i++) {
                itemLoadMoreList[i].style.display = 'block'
            }
            wrapperBtnLoadList.style.display = 'none'
        }, 1500)
    })
    
    
    const socials = () => {
        const socialsBtn = document.querySelectorAll('.btn.full.socials')
        const socialsFooter = document.querySelectorAll('.footer-bottom__socials-icon')
        const socialsData = {
            'facebook': {
                color: '#4267B2',
                name: 'Facebook',
                icon: '<i class="fa-brands fa-facebook-f"></i>'
            },
            'twitter': {
                color: '#1da1f2',
                name: 'Twitter',
                icon: '<i class="fa-brands fa-twitter"></i>'
            },
            'instagram': {
                color: '#336699',
                name: 'Instagram',
                icon: '<i class="fa-brands fa-instagram"></i>'
            },
            'youtube': {
                color: '#f61004',
                name: 'Youtube',
                icon: '<i class="fa-brands fa-youtube"></i>'
            },
        };
    
        for(var i = 0; i < socialsBtn.length; i++) {
            const socialsClass = socialsBtn[i].classList[3]
            const socialsFooterClass = socialsFooter[i].classList[1]
            socialsBtn[i].style.backgroundColor = socialsData[socialsClass].color
            socialsBtn[i].children[0].children[0].textContent = socialsData[socialsClass].name
            socialsBtn[i].children[1].innerHTML = socialsData[socialsClass].icon
            socialsFooter[i].innerHTML = socialsData[socialsFooterClass].icon
        }
    }
    
    socials()
}
app()