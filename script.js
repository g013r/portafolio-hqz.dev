document.querySelectorAll('.flip-box').forEach((box) => {
    const circularProgress = box.querySelector('.circular-progress');
    const label = circularProgress.getAttribute('data-label');
    const color = circularProgress.getAttribute('data-color');
    const porcentaje = circularProgress.getAttribute('porcentaje')
    const porcentaje_menor = circularProgress.getAttribute('porcentaje-menor') 

    circularProgress.style.setProperty('--color', color);
    circularProgress.setAttribute('data-label', label);
    circularProgress.getAttribute('porcentaje', porcentaje)
    circularProgress.getAttribute('porcentaje-menor', porcentaje_menor)

});