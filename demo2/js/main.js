class Main {
    constructor(admin = 'admin', loc = '重庆市市辖区') {
        let m = {
            admin: admin,                           //管理员信息
            clock: null,                            //时间对象                                    
            clockTimer: null,                       //全局定时器，用于实时更新显示时间（specific具体时间）
            station_info: {
                loc: loc,
                weather: null,
                temp: null,
            },
            
            flowPaths: [],                          //实例化flowPath对象数组
            flowPah_info: {
                title: null,
                content: null,
            }
        };

        Object.assign(this, m);
    }

    setClockTimer() {
        this.clock.getTime(); //获取年月日
        this.clockTimer = setInterval(() => {
            this.clock.renewTime(); //更新时分秒
        }, 1000);
        this.clock.renewTime(); //直接调用一次，解决setinterval延时一秒的问题
    }

    start() {
        this.clock = new Clock();
        this.setClockTimer();

        
        this.station_info = new Station();
        this.station_info.setStation()
    }
}

window._main = new Main();
window._main.start();