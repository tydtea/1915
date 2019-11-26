class One {
    constructor(){
        this.age = 13;
    }
    run(that){
        console.log(this === that,this.age);
    }
}
class My extends One{
    constructor(){
        super();
        this.userName = "xixi";
        this.age = 15;
    }
    render(){
        super.run(this);
        return super.age;
    }
}
const obj = new My();
console.log(obj.render())