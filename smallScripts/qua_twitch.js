const PointsWait = 100;
const CollectPoints = 6000;
let Selector = '[data-test-selector="community-points-summary"] button.gjXDMG'; // 22.4.2022
setInterval(() => {
    let bonusChest = document.querySelector(Selector);
    if (bonusChest) {
        setTimeout(() => {
            bonusChest.click();
            console.log('%cQuartTools [%cqua.points%c]: %cPoints were collected.', 'color:cyan;', 'color:white;', 'color:cyan', 'color:white;');
        }, PointsWait);
    }
}, CollectPoints);
console.clear();
console.log('%cQuartTools [%cqua_twitch%c]: %cAutoclaim Bonus Points Activated!', 'color:cyan;', 'color:white;', 'color:cyan', 'color:white;');
