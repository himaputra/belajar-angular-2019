export class Model {
    private nama: String;
    alamat: String;
    umur: number;
    active: boolean;

    get _nama(): String {
        return this.nama;
    }

    set _nama(_nama: String) {
        this.nama = _nama;
    }
}