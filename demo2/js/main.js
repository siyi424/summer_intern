class Main {
    constructor(admin = 'admin', loc = '鱼嘴') {
        let m = {
            admin: admin,                           //管理员信息
            clock: null,                            //时间对象                                    
            clockTimer: null,                       //全局定时器，用于实时更新显示时间（specific具体时间）
            location: loc,                          //车站名称
            weather: null,                          //天气情况
        };

        Object.assign(this, m);
    }

    setClockTimer() {
        let clk = document.getElementsByClassName('clock');
        this.clockTimer = setInterval(() => {
            this.clock.getTime(clk);
        }, 1000);
    }



    start() {
        this.clock = new Clock();
        this.setClockTimer();
    }
}

window._main = new Main();
window._main.start();