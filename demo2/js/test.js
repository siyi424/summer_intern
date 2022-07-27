let json = {"status":"1","count":"1","info":"OK","infocode":"10000","lives":[{"province":"北京","city":"东城区","adcode":"110101","weather":"中雨","temperature":"24","winddirection":"东南","windpower":"4","humidity":"100","reporttime":"2022-07-27 15:02:50"}]};

console.log(json.lives[0].city);
