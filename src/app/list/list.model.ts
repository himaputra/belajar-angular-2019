export class Model {
    private nama: string;
    alamat: string;
    umur: number;
    active: boolean;

    get _nama(): string {
        return this.nama;
    }

    set _nama(_nama: string) {
        this.nama = _nama;
    }
}