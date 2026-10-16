function angka0(cb){
    console.log(0)
    setTimeout(cb, 1000);
}
function angka1(cb){
    console.log(1)
    setTimeout(cb, 1000);
}
function angka2(cb){
    console.log(2)
    setTimeout(cb, 1000);
}
function angka3(cb){
    console.log(3)
    setTimeout(cb, 1000);
}
function angka4(){
    console.log(4)
}

angka0(function(){
    angka1(function(){
        angka2(function(){
            angka3(function(){
                angka4()
            })
        })
    })
})
