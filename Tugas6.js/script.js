/**
 * 1. Menerima 2 parameter: nama(string) dan nilai (array)
 * 2. Menggunakan arrow function dengan for loop dan menjumlahkan setiap indexnya
 */
const hitungTotal = (nama, nilai) => {
  const arrayTambahan = [69, 1];
  /**
   * 3. Gunakan spread operator untuk menggabungkan array 
   */
  const semuaNilai = [...nilai, ...arrayTambahan];

  let total = 0;
  for (let i = 0; i < semuaNilai.length; i++) {
    total += semuaNilai[i];
  }

  /**
   * 4. Cetak pesan ke console dengan menggunakan template literals
   */
  console.log(`Saya adalah ${nama} dan nilai total yang saya hasilkan adalah ${total}`);

}

const values = [100, 69, 599]

hitungTotal("Byu", values)