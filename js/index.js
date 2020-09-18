new fullpage('#fullPage', {
    navigation: true,
    scrollHorizontally: true,
    autoScrolling: true,
    // anchors: ['section1','section2','section 3'],
    navigationTooltips: ['Home', 'Introdues', 'Recruitment', 'Contact'],
    menu: '#menu',
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage'],
    sectionsColor: ['#0F7DC2', '#1BBC9B', '#7E8F7C'],
    scrollBar: false,
    navigation: false,
    navigationPosition: 'right',
    reponsive: '800',
    slidesNavigation: true
})
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}