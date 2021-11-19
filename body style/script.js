let root = document.querySelector("body");
setInterval(() => {
    let d = new Date();
    root.style.backgroundImage =`url('https://picsum.photos/id/${d.getSeconds() + d.getMilliseconds()}/1920/1080')`;
}, 5000);
