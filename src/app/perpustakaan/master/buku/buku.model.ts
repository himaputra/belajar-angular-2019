import { RakBuku } from "../rak-buku/rak-buku.model";
import { KategoriBuku } from "../kategori-buku/kategori-buku.model";

export class Buku {
    id: string;
    nama: string;
    isbn: string;
    tahunTerbit: number;
    daftarKategori: Array<KategoriBuku>;
    rak: RakBuku;
}