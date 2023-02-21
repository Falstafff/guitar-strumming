export class TimeSignature {
    private _top: number;
    private _bottom: number;
    private _signature: string;

    constructor(signature: string = '4/4') {
        this.signature = signature;
    }

    get top(): number {
        return this._top;
    }

    get bottom(): number {
        return this._bottom;
    }

    get signature(): string {
        return this._signature;
    }

    get coefficient() {
        return this._top / this._bottom;
    }

    set signature(signature: string) {
        if (!/^\d+\/\d+$/.test(signature)) {
            throw new Error('Wrong time signature formatting')
        }

        this._signature = signature;

        const [top, bottom] = signature.split('/');

        this._top = Number(top)
        this._bottom = Number(bottom)
    }
}