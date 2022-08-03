class flowPath {
    constructor() {
        let f = {
            title: null,
            content: null, 
            id: null, //记录在数组上的位置 index
            fpnum: null, //显示程控卡排序
        };

        Object.assign(this, f);
    }


    // 插入html
    insertFP() {
        let fpDiv = document.getElementsByClassName('form-left-cards')[0];
        let fragment = document.createElement('div');
        fragment.classList.add('flowPath');
        fragment.id = this.id;

        let fpTitle = document.createElement('div');
        fpTitle.textContent = '程控卡' + this.fpnum + '-' + this.title;
        fpTitle.classList.add('fp-title');
        fragment.appendChild(fpTitle);

        let fpContent = document.createElement('div');
        fpContent.textContent = this.content;
        fpContent.classList.add('fp-content');
        fragment.appendChild(fpContent);

        let fpBtn = document.createElement('div');
        fpBtn.textContent = '点击确认'
        fpBtn.classList.add('fp-button');
        fragment.appendChild(fpBtn);


        fpDiv.appendChild(fragment);

        this.setDelBtn();
    }

    // ‘点击确认’按钮后，程控卡取消，数据删除，更新id属性和fp div的id；
    setDelBtn() {
        let btn = document.querySelectorAll('.fp-button')[this.fpnum-1];
        btn.addEventListener('click', () => {
            // 删除div
            let fpDiv = document.querySelectorAll('.flowPath')[this.fpnum-1];
            fpDiv.parentNode.removeChild(fpDiv);

            this.delFp(this.id);
        })
    }


    delFp(id) {
        // 删除
        window._main.fpnums -= 1;
        delete window._main.flowPaths[id];

        // 更新
        for (let key = id + 1; key < window._main.flowPaths.length; key++) {
            let fp = window._main.flowPaths[key];
            if (fp) {
                fp.fpnum -= 1;
                let title = document.querySelectorAll('.fp-title')[fp.fpnum-1];
                title.textContent = '程控卡' + fp.fpnum + '-' + fp.title;
            }
            
        }
    }
}

