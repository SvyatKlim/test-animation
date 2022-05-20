import animateCard from "./animateCard";

const draggableElement = (className) => {
        let startX,
            scrollLeft,
            inDrag = false,
            animate = false;
        const el = document.querySelector(className);

        el.addEventListener("mousedown", function(e) {
            inDrag = true;
            scrollLeft = el.offsetLeft;
            startX = e.pageX;
        });
        document.addEventListener("mousemove", function(ev) {
            if (!inDrag) {return;}
            const x = ev.pageX - el.offsetLeft;
            const walk = x - startX;

            if(Math.abs(walk) > 10) {
                if (animate === false) {
                    setTimeout(() => {
                        animateCard(walk);
                    }, Math.abs(walk) / 3)

                    animate = true;

                }
                el.scrollLeft = scrollLeft - walk;
            }


        });

        document.addEventListener("mouseup", function(e) {
            inDrag = false;
            animate = false;
        });

};


export default draggableElement;
