// Styles
import './styles/style.scss';

// Scripts
import horizontalScroll from './scripts/horizontalScroll';
import setBackground from './scripts/setBackground';

window.addEventListener('load', function () {
    if (window.innerWidth > 768){
        horizontalScroll();
        setBackground();
    }
});
