// 함수 정의 및 선언
function 워녕이가만든함수 () { 
    const input = prompt('input any things', '');
    alert(input);
}

// 사용할 땐, 요렇게
// 워녕이가만든함수();

// 일반 함수
var SUM_ALERT = function (x, y) {
    alert(x + y);
    // 아래가 생략되어 있다.
    // return undefined;
}

// 리턴형 함수
// 함수의 결과값을 반환하는 경우
var SUM_RETURN = function(x, y) {
    return x + y;
}

// var result1 = SUM_ALERT(1, 3);
// var result2 = SUM_RETURN(1, 3);

// console.log(result1, result2);

function sumAll() {
    let total = 0;
    console.log(arguments)
    alert(total);
}

sumAll(1, 2, 3, 4, 5)