class vector {

    private elements:Number[];

    constructor(n:number,k:number){

        this.elements = n

        function crearVector(n, m) {

            let number = [];
        
            for (let i = 0; i < n; i++) {
        
                number.push(Math.round(Math.random() * m));
            }
        
            return number;
        
        }
        
    }
}