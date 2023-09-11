function dataPembeli() {
    let froms = document.getElementById('from');
    let nama = froms.nama.value;
    let produk = froms.produk.value;
    let jumlah = froms.jumlah.value;
    let satuan = 0;
    let diskon = 0;
    switch (produk) {
        case "TV" : satuan= 2000000; break; 
        case "AC" : satuan= 3000000; break; 
        case "Kulkas" : satuan= 4000000; break;
        default : satuan = 0; break;
    }
    const hargaKotor = satuan * jumlah;
    if (produk=== "Kulkas" && jumlah >= 3) {
        diskon= 0.3 * hargaKotor;
    } else if (produk=== "AC" && jumlah >= 3) {
        diskon= 0.2 * hargaKotor;
    } else {
        diskon= 0.1 * hargaKotor;
    }
    const PPN = 0.1 * (hargaKotor-diskon);
    const hargaBayar =(hargaKotor-diskon)+PPN;
    let data = `Input data
    <br> Nama : ${nama}
    <br> Produk : ${produk}
    <br> Jumlah : ${jumlah}
    <br> satuan : ${satuan}
    <br> diskon : ${diskon} 
    <br> hargaKotror : ${hargaKotor}
    <br> PPN : ${PPN}
    <br> hargaBayar : ${hargaBayar}
    `;
    document.getElementById('hasil').innerHTML = data;
}