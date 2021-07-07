const generator = document.querySelector('[data-jogo="generator"')
const money = document.querySelector('[data-jogo="money"')
const buttonOpenMenu = document.querySelector('[data-jogo="openmenu"')
const menu = document.querySelector('[data-jogo="menu"')
const menuClick = document.querySelector('[data-jogo="menuClick"')
const openClick = document.querySelector('[data-jogo="openClick"')
const buttonBackMenu = document.querySelector('[data-jogo="backMenu"')
const themeMenu = document.querySelector('[data-jogo="themeMenu"')
const body = document.querySelector('body')
const fecharStatisticButton = document.querySelector('[data-jogo="fecharStatistic"]')
const allButtonUI = document.querySelectorAll('.buttonUI')

const theme01 = document.querySelector('[data-jogo="theme01"')
const theme02 = document.querySelector('[data-jogo="theme02"')
const theme03 = document.querySelector('[data-jogo="theme03"')
const theme00 = document.querySelector('[data-jogo="theme00"')

const upgrade01 = document.querySelector('[data-jogo="upgrade01"')
const upgrade02 = document.querySelector('[data-jogo="upgrade02"')
const upgrade03 = document.querySelector('[data-jogo="upgrade03"')
const upgrade04 = document.querySelector('[data-jogo="upgrade04"')
const upgrade05 = document.querySelector('[data-jogo="upgrade05"')
const upgrade06 = document.querySelector('[data-jogo="upgrade06"')
const upgrade07 = document.querySelector('[data-jogo="upgrade07"')

const click01 = document.querySelector('[data-jogo="click01"')
const click02 = document.querySelector('[data-jogo="click02"')

const botaoMainMenu = document.querySelector('[data-jogo="botaoMenuPrincipal"')
const mainMenu = document.querySelector('[data-jogo="mainMenu"')
const botaoFecharMainMenu = document.querySelector('[data-jogo="fecharMainMenu"')

const statisticsButton = document.querySelector('[data-jogo="statisticsButton"')
const statisticMenu = document.querySelector('[data-jogo="statistics"')
const fundoUso = document.querySelector('[data-jogo="fundoSite"')

const cheatsMenu = document.querySelector('[data-jogo="cheats"]')
const cheatsButton = document.querySelector('[data-jogo="cheatsButton"]')

let ganhoSec = document.querySelector('[data-jogo="mps"')
let ganhoClick = document.getElementById('ganhoClick')
let fundoAtual = "Padrão"
let carteira = 0
let ganhoSecMoney = 0
let precoUpgradeClick = 5
let upgradeClick = 1

let generatorColor = 'red'
let bodyColor = 'background: rgb(52, 58, 65)'
let generatorFont = 'black'
let generatorShadow = '5px 5px 40px red'
let pageTheme = '2px solid red'
let themeColor = "black"
let fontColor = "white"

function gerarDinheiro() {
    carteira = carteira + 1
}

function abrirMenu() {
    menu.classList.add('ativar')
    buttonOpenMenu.removeEventListener('click', abrirMenu)
    buttonOpenMenu.addEventListener('click', fecharMenu)
    fecharClickMenu()
    closeThemeMenu()
}

function fecharMenu() {
    menu.classList.remove('ativar')
    buttonOpenMenu.removeEventListener('click', fecharMenu)
    buttonOpenMenu.addEventListener('click', abrirMenu)
}

function clickMenu() {
    menuClick.classList.add('ativar')
    openClick.removeEventListener('click', clickMenu)
    openClick.addEventListener('click', fecharClickMenu)
    if(carteira >= precoUpgradeClick) {
        click02.addEventListener('click', clickShop.clickUpgrade01)
    }
    fecharMenu()
    closeThemeMenu()
}

function fecharClickMenu() {
    menuClick.classList.remove('ativar')
    openClick.removeEventListener('click', fecharClickMenu)
    openClick.addEventListener('click', clickMenu)
}

function openThemeMenu() {
    themeMenu.classList.add('ativo')
    buttonBackMenu.removeEventListener('click', openThemeMenu)
    buttonBackMenu.addEventListener('click', closeThemeMenu)
    fecharClickMenu()
    fecharMenu()
}

function closeThemeMenu() {
    themeMenu.classList.remove('ativo')
    buttonBackMenu.removeEventListener('click', closeThemeMenu)
    buttonBackMenu.addEventListener('click', openThemeMenu)
}

function mainMenuOpen() {
    mainMenu.classList.add('ativo')
    botaoFecharMainMenu.addEventListener('click', mainMenuClose)
}

function mainMenuClose() {
    mainMenu.classList.remove('ativo')
}

function statisticsMenu() {
    statisticMenu.classList.add('ativo')
    mainMenuClose()
}

function fecharStatisticMenu() {
    statisticMenu.classList.remove('ativo')
    mainMenuOpen()
}

function abrirCheatsMenu() {
    cheatsMenu.classList.add('ativo')
}

const upgradeShop = {

    buyUpgrade01: function() {
        carteira = carteira - 40
        setInterval(() => {
            carteira = carteira + 1
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 1
    },
    buyUpgrade02: function() {
        carteira = carteira - 150
        setInterval(() => {
        carteira = carteira + 3
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 3
    },
    buyUpgrade03: function() {
        carteira = carteira - 255
        setInterval(() => {
            carteira = carteira + 5
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 5
    },
    buyUpgrade04: function() {
        carteira = carteira - 1000
        setInterval(() => {
            carteira = carteira + 20
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 20
    },
    buyUpgrade05: function() {
        carteira = carteira - 1600
        setInterval(() => {
            carteira = carteira + 30
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 30
    },
    buyUpgrade06: function() {
        carteira = carteira - 2800
        setInterval(() => {
            carteira = carteira + 50
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 50
    },
    buyUpgrade07: function() {
        carteira = carteira - 4000
        setInterval(() => {
            carteira = carteira + 70
        }, 1000)
        ganhoSecMoney = ganhoSecMoney + 70
    },
}

const clickShop = {

    clickUpgrade01: function() {
        carteira = carteira - precoUpgradeClick
        precoUpgradeClick = precoUpgradeClick * 3
        generator.removeEventListener('click', gerarDinheiro)
        generator.removeEventListener('click', clickShop.clickUpgrade)
        generator.addEventListener('click', clickShop.clickUpgrade)
        upgradeClick = upgradeClick + 1
        click01.innerText = `Melhoria Click (${precoUpgradeClick}$)`
    },
    clickUpgrade: function() {
        carteira = carteira + upgradeClick
    }
}

const themeOwn = {
    themeProperty01: false,
    themeProperty02: false,
    themeProperty03: false
}

const themeShop = {

    buyTheme01: function() {
        if(themeOwn.themeProperty01) {
            carteira = carteira - 0
        } else {
            carteira = carteira - 15000
            themeOwn.themeProperty01 = true
            theme01.innerText = 'Fundo verde (Obtido)'
        }
        bodyColor = "green"
        generatorColor = "brown"
        generatorShadow = "5px 5px 40px brown"
        pageTheme = "2.5px solid brown"
        fundoAtual = "Tema Floresta"
    },
    buyTheme02: function() {
        if(themeOwn.themeProperty02 == 'owned') {
            carteira = carteira - 0
        } else {
            carteira = carteira - 25000
            themeOwn.themeProperty02 = 'owned'
            theme02.innerText = 'Fundo Branco (Obtido)'
        }
        bodyColor = "white"
        generatorColor = "black"
        generatorFont = "white"
        generatorShadow = "5px 5px 40px black"
        pageTheme = "2.5px solid black"
        fontColor = "black"
        fundoAtual = "Tema Preto-branco"
    },
    buyTheme03: function() {
        if(themeOwn.themeProperty03 == 'owned') {
            carteira = carteira - 0
        } else {
            carteira = carteira - 40000
            themeOwn.themeProperty03 = 'owned'
            theme03.innerText = 'Fundo Degradê Ciano (Obtido)'
        }
        bodyColor = "linear-gradient(90deg,#094a91,#55e7fc)"
        generatorColor = "cyan"
        generatorFont = "black"
        generatorShadow = "5px 5px 40px cyan"
        pageTheme = "2.5px solid cyan"
        fontColor = "white"
        fundoAtual = "Tema Ciano Degradê"
    },
    defaultTheme: function() {
        generatorColor = 'red'
        bodyColor = 'rgb(52, 58, 65)'
        generatorFont = 'black'
        generatorShadow = '5px 5px 40px red'
        pageTheme = '2px solid red'
        themeColor = "black"
        fontColor = "white"
    }
}


const updates = {

    update: function() {
        money.innerText = `Dinheiro: ${carteira}`
        ganhoSec.innerText = `Ganho por sec (Geradores): ${ganhoSecMoney}`
        click01.innerText = `Melhoria Click (${precoUpgradeClick})`
        ganhoClick.innerText = `Ganho por click: ${upgradeClick}`
        fundoUso.innerText = `Fundo atual: ${fundoAtual}`
    },
    updatePrecos: function() {
        if(carteira >= 40) {
            upgrade01.addEventListener('click', upgradeShop.buyUpgrade01)
        }else {
            upgrade01.removeEventListener('click', upgradeShop.buyUpgrade01)
        }
        if(carteira >= 150) {
            upgrade02.addEventListener('click', upgradeShop.buyUpgrade02)
        }else{
            upgrade02.removeEventListener('click', upgradeShop.buyUpgrade02)
        }
        if(carteira >= 255) {
            upgrade03.addEventListener('click', upgradeShop.buyUpgrade03)
        }else{
            upgrade03.removeEventListener('click', upgradeShop.buyUpgrade03)
        }
        if(carteira >= 1000) {
            upgrade04.addEventListener('click', upgradeShop.buyUpgrade04)
        }else{
            upgrade04.removeEventListener('click', upgradeShop.buyUpgrade04)
        }
        if(carteira >= 1600) {
            upgrade05.addEventListener('click', upgradeShop.buyUpgrade05)
        }else{
            upgrade05.removeEventListener('click', upgradeShop.buyUpgrade05)
        }
        if(carteira >= 2800) {
            upgrade06.addEventListener('click', upgradeShop.buyUpgrade06)
        }else{
            upgrade06.removeEventListener('click', upgradeShop.buyUpgrade06)
        }
        if(carteira >= 4000) {
            upgrade07.addEventListener('click', upgradeShop.buyUpgrade07)
        }else{
            upgrade07.removeEventListener('click', upgradeShop.buyUpgrade07)
        }
    
        if(carteira >= 15000) {
            theme01.addEventListener('click', themeShop.buyTheme01)
        }else {
            theme01.removeEventListener('click', themeShop.buyTheme01)
        }
        if(carteira >= 25000) {
            theme02.addEventListener('click', themeShop.buyTheme02)
        }else {
            theme02.removeEventListener('click', themeShop.buyTheme02)
        }
        if(carteira >= 40000) {
            theme03.addEventListener('click', themeShop.buyTheme03)
        }  else {
            theme03.removeEventListener('click', themeShop.buyTheme03)
        }  
    
        if(carteira >= precoUpgradeClick) {
            click02.addEventListener('click', clickShop.clickUpgrade01)
        } else {
            click02.removeEventListener('click', clickShop.clickUpgrade01)
        }
    }
    
}

setInterval(updates.updatePrecos, 10)
setInterval(updates.update, 10)
setInterval(() => {
        generator.style.background = generatorColor
        generator.style.color = generatorFont
        generator.style.boxShadow = generatorShadow
        buttonOpenMenu.style.color = themeColor
        buttonBackMenu.style.color = themeColor
        openClick.style.color = themeColor
        body.style.background = bodyColor
        allButtonUI.forEach((buttonui) => {
            buttonui.style.border = pageTheme
            buttonui.style.color = fontColor
        })
}, 10)

generator.addEventListener('click', gerarDinheiro)
buttonOpenMenu.addEventListener('click', abrirMenu)
openClick.addEventListener('click', clickMenu)
buttonBackMenu.addEventListener('click', openThemeMenu)
botaoMainMenu.addEventListener('click', mainMenuOpen)
statisticsButton.addEventListener('click', statisticsMenu)
fecharStatisticButton.addEventListener('click', fecharStatisticMenu)
cheatsButton.addEventListener('click', abrirCheatsMenu)
theme00.addEventListener('click', themeShop.defaultTheme)