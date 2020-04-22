var doan = {
    name: "Doan",
    age: 22,
    salary: 10000,
}
var trung = Object.assign({
    clone: true
},doan)
trung.name = "Trung"
console.log(trung)
console.log(doan)