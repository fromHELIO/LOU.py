var oms = document.getElementById('oms');
var pms = document.getElementById('pms');
var tournament = document.getElementById('tournament');
var bms = document.getElementById('bms');
var snake = document.getElementById('snake');
var openMenu = document.getElementById('menu-btn');
var menu = document.getElementById('menu-bar');

const projects = [oms, pms, tournament, bms, snake];

function showMenu() {
    menu.style.display = 'block';
    openMenu.style.display = 'none';
}

function closeMenu() {
    menu.style.display = 'none';
    openMenu.style.display = 'block';
}

function descShowOMS() {
    oms.style.display = 'block';
    pms.style.display = 'none';
    tournament.style.display = 'none';
    bms.style.display = 'none';
    snake.style.display = 'none';
}

function descShowPMS() {
    oms.style.display = 'none';
    pms.style.display = 'block';
    tournament.style.display = 'none';
    bms.style.display = 'none';
    snake.style.display = 'none';
}

function descShowTOURN() {
    oms.style.display = 'none';
    pms.style.display = 'none';
    tournament.style.display = 'block';
    bms.style.display = 'none';
    snake.style.display = 'none';
}

function descShowBMS() {
    oms.style.display = 'none';
    pms.style.display = 'none';
    tournament.style.display = 'none';
    bms.style.display = 'block';
    snake.style.display = 'none';
}

function descShowSNAKE() {
    oms.style.display = 'none';
    pms.style.display = 'none';
    tournament.style.display = 'none';
    bms.style.display = 'none';
    snake.style.display = 'block';
}