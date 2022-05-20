const animateCard = (walk) => {
    let direction = walk > 0? 'forward' : 'backward';

    const target = [].slice.call(document.querySelectorAll('.card.first-card'));
    target.forEach(el => {
        if(!el.classList.contains('animate-right') && !el.classList.contains('animate-left') ) {
            if (direction === 'forward') {
                el.classList.add('animate-right');
            } else {
                el.classList.add('animate-left');
            }

            setTimeout(() => {
                el.classList.remove('animate-left');
                el.classList.remove('animate-right');
            }, 2000)
        }
    });
};
export default animateCard;