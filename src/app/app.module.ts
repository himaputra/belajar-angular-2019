import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CollectionComponent } from './list/collection/collection.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { TokoComponent } from './toko/toko.component';
import { PelangganComponent } from './pelanggan/pelanggan.component';
import { ProdukComponent } from './produk/produk.component';
import { PembelianComponent } from './pembelian/pembelian.component';
import { DetailComponent } from './list/detail/detail.component';
import { CellComponent } from './list/cell/cell.component';
import { CompAComponent } from './sample-service/comp-a/comp-a.component';
import { CompBComponent } from './sample-service/comp-b/comp-b.component';
import { SampleServiceComponent } from './sample-service/sample-service.component';
import { KategoriBukuComponent } from './perpustakaan/master/kategori-buku/kategori-buku.component';
import { NewKategoriBukuComponent } from './perpustakaan/master/kategori-buku/new-kategori-buku/new-kategori-buku.component';
import { DetailKategoriBukuComponent } from './perpustakaan/master/kategori-buku/detail-kategori-buku/detail-kategori-buku.component';
import { UpdateKategoriBukuComponent } from './perpustakaan/master/kategori-buku/update-kategori-buku/update-kategori-buku.component';
import { RakBukuComponent } from './perpustakaan/master/rak-buku/rak-buku.component';
import { AnggotaComponent } from './perpustakaan/master/anggota/anggota.component';
import { NewRakBukuComponent } from './perpustakaan/master/rak-buku/new-rak-buku/new-rak-buku.component';
import { DetailRakBukuComponent } from './perpustakaan/master/rak-buku/detail-rak-buku/detail-rak-buku.component';
import { UpdateRakBukuComponent } from './perpustakaan/master/rak-buku/update-rak-buku/update-rak-buku.component';
import { NewAnggotaComponent } from './perpustakaan/master/anggota/new-anggota/new-anggota.component';
import { DetailAnggotaComponent } from './perpustakaan/master/anggota/detail-anggota/detail-anggota.component';
import { UpdateAnggotaComponent } from './perpustakaan/master/anggota/update-anggota/update-anggota.component';
import { BukuComponent } from './perpustakaan/master/buku/buku.component';
import { NewBukuComponent } from './perpustakaan/master/buku/new-buku/new-buku.component';
import { DetailBukuComponent } from './perpustakaan/master/buku/detail-buku/detail-buku.component';
import { UpdateBukuComponent } from './perpustakaan/master/buku/update-buku/update-buku.component';
import { TransaksiComponent } from './perpustakaan/master/transaksi/transaksi.component';

const appRoutes: Routes = [
  { path: 'form',
    component: FormReactiveComponent
  },
  { path: 'list',
    component: ListComponent
  },
  { path: 'sample-service',
    component: SampleServiceComponent
  },
  { path: 'perpustakaan/master/kategori/buku',
    component: KategoriBukuComponent
  },
  { path: 'perpustakaan/master/kategori/buku/detail/:kode',
    component: DetailKategoriBukuComponent
  },
  { path: 'perpustakaan/master/kategori/buku/update/:kode',
    component: UpdateKategoriBukuComponent
  },
  { path: 'perpustakaan/master/rak',
    component: RakBukuComponent
  },
  { path: 'perpustakaan/master/rak/detail/:kode',
    component: DetailRakBukuComponent
  },
  { path: 'perpustakaan/master/rak/update/:kode',
    component: UpdateRakBukuComponent
  },
  { path: 'perpustakaan/master/anggota',
    component: AnggotaComponent
  },
  { path: 'perpustakaan/master/anggota/detail/:kode',
    component: DetailAnggotaComponent
  },
  { path: 'perpustakaan/master/anggota/update/:kode',
    component: UpdateAnggotaComponent
  },
  { path: 'perpustakaan/master/buku',
    component: BukuComponent
  },
  { path: 'perpustakaan/master/buku/detail/:kode',
    component: DetailBukuComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CollectionComponent,
    FormReactiveComponent,
    TokoComponent,
    PelangganComponent,
    ProdukComponent,
    PembelianComponent,
    DetailComponent,
    CellComponent,
    CompAComponent,
    CompBComponent,
    SampleServiceComponent,
    KategoriBukuComponent,
    NewKategoriBukuComponent,
    DetailKategoriBukuComponent,
    UpdateKategoriBukuComponent,
    RakBukuComponent,
    AnggotaComponent,
    NewRakBukuComponent,
    DetailRakBukuComponent,
    UpdateRakBukuComponent,
    NewAnggotaComponent,
    DetailAnggotaComponent,
    UpdateAnggotaComponent,
    BukuComponent,
    NewBukuComponent,
    DetailBukuComponent,
    UpdateBukuComponent,
    TransaksiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
