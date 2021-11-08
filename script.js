// Defining canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// dimensions of canvas
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 25;

// On windows resize
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth - 25;
    // ctx.fillStyle = "red"
    // ctx.fillRect(50 , 50 , 200 , 200);
    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 5;
    // ctx.strokeRect(200 , 200 , 200 , 500);
    let draw = (x, y) => {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 360, false);
        ctx.fill();
    }
    let clear = (x, y) => {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 360, false);
        ctx.fill();
        ctx.restore();
    }
    canvas.addEventListener("mousemove", e => {
        // draw(e.touches[0].pageX , e.touches[0].pageY);
        // console.log(e.touches[0].pageX)
        if (window.event.ctrlKey) {
            draw(e.clientX, e.clientY);
        }
        if (window.event.shiftKey) {
            clear(e.clientX, e.clientY);
        }
    })
    canvas.addEventListener("click", e => {
        // draw(e.touches[0].pageX , e.touches[0].pageY);
        // console.log(e.touches[0].pageX)
        if (window.event.ctrlKey) {
            draw(e.clientX, e.clientY);
        }
        if (window.event.shiftKey) {
            clear(e.clientX, e.clientY);
        }
    })
});

// Drawing a rect
// ctx.fillStyle = "red"
// ctx.fillRect(50 , 50 , 200 , 200);
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;
// ctx.strokeRect(200 , 200 , 200 , 500);

// Making whiteboard
let draw = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 360, false);
    ctx.fill();
}
let lines = (x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(100, 10);
    ctx.stroke();
}
let clear = (x, y) => {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 360, false);
    ctx.fill();
    ctx.restore();
}
canvas.addEventListener("mousemove", e => {
    // draw(e.touches[0].pageX , e.touches[0].pageY);
    // console.log(e.touches[0].pageX)
    if (window.event.ctrlKey) {
        draw(e.clientX, e.clientY);
    }
    if (window.event.shiftKey) {
        clear(e.clientX, e.clientY);
    }
    if (window.event.altKey) {
        lines(e.clientX , e.clientY);
    }
})
canvas.addEventListener("click", e => {
    if (window.event.ctrlKey) {
        draw(e.clientX, e.clientY);
    }
    if (window.event.shiftKey) {
        clear(e.clientX, e.clientY);
    }
})
canvas.addEventListener("touchmove", e => {
    if (window.event.ctrlKey) {
        draw(e.touches[0].pageX, e.touches[0].pageY);
    }
    if (window.event.shiftKey) {
        clear(e.touches[0].pageX, e.touches[0].pageY);
    }
})