export class Comment {
    constructor( 
        public id:string,
        public productId: string,
        public author:string,
        public message:string,
        public date: Date
    ){}
}