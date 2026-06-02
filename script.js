
const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});


const ScreenVariable = document.querySelector('.mainScreen')

const CursorVariableMain = document.querySelector('.cursorPointerMain')
const CursorVariableMid = document.querySelector('.cursorPointerMid')
const CursorVariableOuter = document.querySelector('.cursorPointerOuter')

ScreenVariable.addEventListener('mousemove', e => {
        // CursorVariable.style.left = `${e.clientX - 30}px`
        // CursorVariable.style.top = `${e.clientY - 30}px`
        gsap.to(CursorVariableMain, {
            left: e.clientX - 10,
            top: e.clientY - 10,
            duration: 0.5,
            ease: "elastic.out(1, 0.8)"
        })
        gsap.to(CursorVariableMid, {
            left: e.clientX - 30,
            top: e.clientY - 30,
            duration: 1.7,
            ease: "elastic.out(1, 0.8)"
        })
        gsap.to(CursorVariableOuter, {
            left: e.clientX - 50,
            top: e.clientY - 50,
            duration: 3,
            ease: "elastic.out(1, 0.8)"
        })
    });

    