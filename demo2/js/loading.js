//时钟类
class Clock {
    constructor() {
        let clk = {
            gen: null,
            week: null,
            specific: null,
        }

        Object.assign(this, clk);
    }

    getTime(clock) {
        //clock插入是个数组
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth();                             //返回0-11
        let day = now.getDate();
        let hour = now.getHours();
        let minu = now.getMinutes();
        let second = now.getSeconds();

        month += 1;
        let Times = [month, day, hour, minu, second];
        for (let i = 0; i < 5; i++) {
            if (Times[i] < 10) {
                Times[i] = '0' + Times[i];
            }
        }

        const Weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        const week = Weeks[now.getDay()];

        this.gen = year + '.' + Times[0] + '.' + Times[1];
        this.week = week;
        this.specific = Times[2] + ':' + Times[3] + ':' + Times[4];

        //插入html显示
        clock[0].textContent = this.gen;
        clock[1].textContent = this.week;
        clock[2].textContent = this.specific;
    }

}


//站台信息类：location 和 weather
class Station {
    constructor() {
        let s = {
            loc: window._main.station_info.loc,
            weather: null,
            temperature: null,
        };
        Object.assign(this, s);
    }

    setStation() {
        const key = 'fd1423eaeb92a7fb98f07b97bf32f1c0';
        const city = '500100'; //重庆市辖区市
        const base = 'https://restapi.amap.com/v3/weather/weatherInfo?';
        let url = base + 'city=' + city + '&key=' + key;

        const fectchPromise = fetch(url);
        fectchPromise
            .then( Response => {
                if (!Response.ok) {
                    throw new Error('HTTP error!');
                }
                return Response.json();
            })
            .then( json => {
                let loc = document.getElementsByClassName('location')[0];
                let weather = document.getElementsByClassName('weather')[0];
                let temp = document.getElementsByClassName('temperature')[0];
                loc.textContent = this.loc;
                weather.textContent = json.lives[0].weather;
                temp.textContent = json.lives[0].temperature + '℃';

                console.log(this);
            })
    }
}