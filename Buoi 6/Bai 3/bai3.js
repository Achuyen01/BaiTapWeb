function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("email").value;
    var p2 = document.getElementById("number").value;
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
     
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập Email!");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng nhập số điện thoại!");
    return false;
    }
    if(date== "") {
    alert("Vui lòng chọn ngày!");
    return false;
    }
    if(month== "") {
    alert("Vui lòng chọn tháng!");
    return false;
    }
    if(year== "") {
    alert("Vui lòng chọn năm!");
    return false;
    }
     
    alert("Xin hãy điền đúng thông tin!")
     
    return true;
    }