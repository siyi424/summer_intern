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
            fpnums: 0,
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


    // 初始化btn的功能
    init() {
        // 加号显示表单
        let addForm = document.querySelector('.form-left-icons div');
        addForm.addEventListener('click', function () {
            let form = document.getElementsByClassName('fp-input')[0];
            if (form.style.display === 'none') {
                form.style.display = 'grid';
            } else {
                form.style.display = 'none';
            }
        });

        // ‘取消’ 重置表单，并隐藏
        let cancelForm = document.querySelector('.cancel');
        cancelForm.addEventListener('click', function () {
            let form = document.getElementsByClassName('fp-input')[0];
            form.reset();
            form.style.display = 'none';
        });
        
        // ‘确认’按钮 创建新的fp对象，增加记录，插入新的html
        let ensure = document.querySelector('.ensure');
        ensure.addEventListener('click', () => {
            // 新增fp实例
            let fp = new flowPath();
            this.fpnums += 1;
            this.flowPaths.push(fp);
            
            // 获取输入数据
            const name = document.getElementById('name').value;
            const content = document.getElementById('content').value;
            
            let id = this.flowPaths.length - 1;
            fp.title = name;
            fp.content = content; 
            fp.id = id;
            fp.fpnum = this.fpnums;

            // 插入新的html
            fp.insertFP();

            let form = document.getElementsByClassName('fp-input')[0];
            form.reset();
            form.style.display = 'none';
        });
    }
    



    start() {
        this.clock = new Clock();
        this.setClockTimer();

        
        this.station_info = new Station();
        this.station_info.setStation()


        this.init();

    }
}

window._main = new Main();
window._main.start();