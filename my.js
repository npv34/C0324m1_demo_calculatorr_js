function setValue(number) {
    let screen = document.getElementById('screen');
    screen.value += number;
}

function result() {
    let screen = document.getElementById('screen');
    let input = screen.value;
    // eval -> ham tinh gia tri bieu thuc Vd eval('3+4*2') -> 11
    let res = eval(input);
    screen.value = res;
}

/*
  - Cau truc dieu kien
  - IF, IF_ELSE, SWITCH_CASE

 */