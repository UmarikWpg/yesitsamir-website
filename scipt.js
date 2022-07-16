function cssGenerator() {
    let span = document.querySelector('span')
    
    let ltc = document.getElementById('left-top-corner').value
    let rtc = document.getElementById('right-top-corner').value
    let lbc = document.getElementById('left-bottom-corner').value
    let rbc = document.getElementById('right-bottom-corner').value
    
    let ltcText = document.getElementById('ltc-text')
    let rtcText = document.getElementById('rtc-text')
    let lbcText = document.getElementById('lbc-text')
    let rbcText = document.getElementById('rbc-text')
    
    let editBox = document.querySelector('.edit-box')
    
    ltcText.innerHTML = ltc.value
    rtcText.innerHTML = rtc.value
    lbcText.innerHTML = lbc.value
    rbcText.innerHTML = rbc.value
    
     ltcText.value = ltc
     rtcText.value = rtc
     lbcText.value = lbc
     rbcText.value = rbc
     
     ltcText.value = ltcText.innerHTML
     rtcText.value = rtcText.innerHTML
     lbcText.value = lbcText.innerHTML
     rbcText.value = rbcText.innerHTML
     
    editBox.style.borderRadius = ltc + 'px ' + rtc + 'px ' + lbc + 'px ' + rbc + 'px ';

}

function cssGeneratorSize() {
    let Ws = document.getElementById('width').value
    let Hs = document.getElementById('height').value
    let WT = document.getElementById('width-text')
    let HT = document.getElementById('height-text')
    
    let editBox = document.querySelector('.edit-box')
    
    WT.value = Ws
    HT.value = Hs
    
    editBox.style.width = Ws + 'px ';
    editBox.style.height = Hs + 'px ';
}