let fApp;
let bgApp;

( async () => {
    bgApp = new PIXI.Application();
    await bgApp.init(
        {background: '#1099bb',
        resizeTo: window,
        transparent: true});
    document.getElementById('bg-container').appendChild(bgApp.canvas);
})();

( async () => {
    fApp = new PIXI.Application();
    await fApp.init(
        {resizeTo: window,
        transparent: true,
        backgroundAlpha: 0});
    document.getElementById('front-container').appendChild(fApp.canvas);
})();




const circle = new PIXI.Graphics();
fApp.stage.addChild(circle);

circle.clear();
circle.beginFill('#ff0000');
circle.drawCircle(10,10,50);
circle.endFill();

