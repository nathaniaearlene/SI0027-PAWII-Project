// Mini Project - Pertemuan 19-20: menambahkan environment variable (apiBaseUrl)
// TODO 1: lengkapi bagian environment variable di bawah ini.

import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MahasiswaListComponent } from '../../components/mahasiswa-list/mahasiswa-list.component';
import { Mahasiswa } from '../../mahasiswa.model';
// TODO: tambahkan import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment';

const DATA_MAHASISWA: Mahasiswa[] = [
  { id: 1, nama: 'Andi', nim: '2024001' },
  { id: 2, nama: 'Budi', nim: '2024002' },
  { id: 3, nama: 'Citra', nim: '2024003' },
];

@Component({
  selector: 'app-daftar-mahasiswa-page',
  standalone: true,
  imports: [SearchBarComponent, MahasiswaListComponent],
  templateUrl: './daftar-mahasiswa-page.component.html',
})
export class DaftarMahasiswaPageComponent {
  keyword = '';
  // TODO: deklarasikan apiBaseUrl = environment.apiBaseUrl;
  appBaseUrl = environment.apiBaseUrl;

  get mahasiswaTersaring(): Mahasiswa[] {
    return DATA_MAHASISWA.filter((m) =>
      m.nama.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  onSearch(keyword: string) {
    this.keyword = keyword;
  }
}
