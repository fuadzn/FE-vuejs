1. Tambah rules vue loader webpack config agar webpack bisa load file vue
2. CSS bisa menggunakan folder src/css jika lebih prefer sass bisa memakai sass-loader
3. Usahakan tidak memakai prebuilt components css seperti bootstrap dll
4. Gunakan data yang ada di src/js/data.js untuk data yang dibutuhkan
5. Gunakan src/js/api.js untuk mengakses/mengset data, tidak diperbolehkan mengakses langsung ke data.js dari vue file
6. Aplikasi-kan desain ini https://dribbble.com/shots/5320800-Chat-Widget menjadi aplikasi vue
7. Buat tombol di ujung kanan bawah desktop untuk meng-load hasil desain di atas
8. Gunakan currentStep di data.js sebagai patokan step yang sedang dikerjakan oleh user 
9. Buat filter api untuk mendapatkan data faqs dan tampilkan hanya data ke-1 dan ke-2 untuk bagian "Ask a lawyer FAQ"

**Notes:** 
- Development **npm run dev**
- Production **npm run build**