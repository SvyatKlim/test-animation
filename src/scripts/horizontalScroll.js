import animateCard from "./animateCard";
import calculateContainerWidth from "./calculateContainerWidth"

const horizontalScroll = () => {
    const wrapper = document.querySelector('.cards__wrapper');

    let walk = 70,
        currentPosition = wrapper.offsetLeft,
        containerWidth = calculateContainerWidth(),
        windowWidth = window.innerWidth;

    function scrollTransform(ev){
        ev.preventDefault();
        if(ev.deltaY < 0) {
            if(currentPosition + walk <= 0) {
                currentPosition += walk;
                wrapper.style.transform = `translateX(${currentPosition}px)`;
            }
        } else {
            if(currentPosition >= windowWidth - containerWidth) {
                currentPosition -= walk;
                wrapper.style.transform = `translateX(${currentPosition}px)`;
            }
        }

        animateCard(ev.deltaY );
    }

    wrapper.addEventListener('wheel', ev => {
            scrollTransform(ev)
    });
}

export default horizontalScroll;