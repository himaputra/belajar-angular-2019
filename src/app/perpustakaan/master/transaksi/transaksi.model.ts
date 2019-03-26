import { Buku } from './../buku/buku.model';
import { Anggota } from './../anggota/anggota.model';
export class Transaksi {
    id: string;
    anggota: Anggota;
    tanggal: Date;
    detail: {
        buku: Buku;
        kembali: boolean;
    }
}