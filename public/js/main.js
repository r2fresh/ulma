$(function(){

    //http://rt.molit.go.kr/srh/getGugunListAjax.do

    var data = {
        menuGubun:'A',
        srhType:'TOT',
        houseType:1,
        srhYear:2015,
        srhPeriod:1,
        gubunCode:'LAND',
        sidoCode:11,
    }

    $.ajax({
        url : '/test',
        type : 'POST',
        dataType : 'json',
        data : data,
        success : function(data) {
            console.log(data)
        }
    })
})
