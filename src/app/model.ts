export class Model {
    user;
    items:any;

    constructor() {
         this.user = "Sude";
         this.items = [
                         new TodoItem("Piyano",true),
                         new TodoItem("Spor",false),
                         new TodoItem("Bilgisayar",false),
                         new TodoItem("Konser",false)
          ]; 
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: any,action: any) {
        this.description = description;
        this.action = action;
    }
}
