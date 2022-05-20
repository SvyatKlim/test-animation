import calculateContainerWidth from "./calculateContainerWidth";

const setBackground = () => {
    if (window.width > 768) {
        let width = calculateContainerWidth();
        const wrapper = document.querySelector('.cards__wrapper');
        wrapper.style.width = `${width}px`
    }
};

export default setBackground;