const calculateContainerWidth = () => {
    const  wrapper = document.querySelector('.cards__wrapper'),
    cards = wrapper.querySelectorAll('.card');
    let wrapperStyle = window.getComputedStyle(wrapper),
        width = parseFloat(wrapperStyle.paddingLeft) + parseFloat(wrapperStyle.paddingRight);

    cards.forEach((card) => {
        width += card.offsetWidth;
        let style = window.getComputedStyle(card);
        width +=  parseFloat(style.marginRight);
    })

    return width;
};


export default calculateContainerWidth;