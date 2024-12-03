document.querySelectorAll('.flip-box').forEach((box) => {
    const circularProgress = box.querySelector('.circular-progress');
    const label = circularProgress.getAttribute('data-label');
    const color = circularProgress.getAttribute('data-color');
    const porcentaje = circularProgress.getAttribute('data-porcentaje')

    circularProgress.style.setProperty('--color', color);
    circularProgress.setAttribute('data-label', label);
    circularProgress.style.setProperty('--data-porcentaje', porcentaje)
});