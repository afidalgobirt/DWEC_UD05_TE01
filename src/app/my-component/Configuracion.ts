export class Configuracion {

    constructor(
        public name: string,
        public surname: string,
        public rangeTopLimit: number,
        public maxNumberOfAttempts: number
    ) { }

    public isValid(): boolean {
        let ret: boolean = true;

        if (this.name == ""
            || this.surname == ""
            || this.rangeTopLimit <= 0
            || this.maxNumberOfAttempts <= 0) {
            alert("ERROR: Es necesario rellenar todos los campos.");
            ret = false;
        }

        return ret;
    }

    /* public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(surname: string): void {
        this.surname = surname;
    }

    public getRangeTopLimit(): number {
        return this.rangeTopLimit;
    }

    public setRangeTopLimit(rangeTopLimit: number): void {
        this.rangeTopLimit = rangeTopLimit;
    }

    public getMaxNumberOfAttempts(): number {
        return this.maxNumberOfAttempts;
    }

    public setMaxNumberOfAttempts(maxNumberOfAttempts: number): void {
        this.maxNumberOfAttempts = maxNumberOfAttempts;
    } */
}
