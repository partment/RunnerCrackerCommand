var laps = prompt("請輸入圈數"); //詢問圈數，跳出輸入視窗
function run_distance_save(target) { //偽函數，為了使它不跳出已儲存dialog
    var _day = document.getElementById("sport_save_day");
    var _action = document.getElementById("sport_ac_action");
    var _time = document.getElementById("sport_save_time");
    var _tDay = document.getElementById("day_d" + target);
    var _tTime = document.getElementById("cal_rd" + target);
    var _total_distance = document.getElementById("map_info");
    var _distance = _tTime.value;
    _day.value = _tDay.innerHTML;
    _time.value = _tTime.value;
    _action.value = "RS";
    calculate_running_distance(target);
    reqsportac();
}
for (x = 0; x <= 41; x++) { //使每天都變成指定公里數
    if (x != 0 && x != 6 && x != 7 && x != 13 && x != 14 && x != 20 && x != 21 && x != 27 && x != 28 && x != 34) {
        document.getElementById("cal_rd" + x).removeAttribute("disabled"); //解除天數限制
        var distance = document.getElementById("cal_rd" + x); //取得修改位置
        distance.value = 0.2*laps; //計算公里數
        run_distance_save(x); //送出修改函數至偽函數
        $("div[class='mask']").remove(); //移除一些不必要出現的東西
        $("div[id='loginalert']").remove(); //移除一些不必要出現的東西
        $("div[class='yui-panel-container']").remove(); //移除一些不必要出現的東西
    }
};
setTimeout(function () {
    $("div[class='mask']").remove(); //移除一些不必要出現的東西
    $("div[id='loginalert']").remove(); //移除一些不必要出現的東西
    $("div[class='yui-panel-container shadow']").remove(); //移除一些不必要出現的東西
    runningac_ajaxreq('nRunningAC');changeActive('2');changeSubActive('0'); //重新整理
},500);