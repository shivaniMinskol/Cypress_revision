// function creatuser(){
//     console.log("user create")
// }

// function getinfo(){
//     console.log("user info")
// }

// getinfo()
// creatuser()

class person{
    constructor(name,age){
        this.nm = name
        this.ag = age
    }

    fullname(){
        console.log(`my name is ${this.nm}`)
    }
}

let obj = new person("shivani hedau",29)

obj.fullname()


let arr = [10,20,30,40,80,60]

let dic ={
    FirstName:"shivani",
    lastname:"hedau",
    rollno: 123
}

dic.FirstName="pranay"
console.log(dic.FirstName)

for(let key in dic){
    console.log(`${key}:${dic[key]}`)
}

for (let [k,v] of Object.entries(dic) ){
    console.log(k,v)
}

let pro = new Promise(function(resovle,reject){
    let a = 10
    let b = 20
    if(a==b){
        resovle ("hello")
    }
    else{
        reject('hi')
    }

})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})