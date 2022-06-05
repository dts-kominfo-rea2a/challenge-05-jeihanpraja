const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = function(names, sortType) {
  sortType(names); // untuk fungsi callback
  
  let arrNamesSorted = []; //wadah array sorted berdasarkan sortType
  for (i = 0; i < names.length; i++) {
      //tambahkan nomor urut dan masukkan ke wadah arrNamesSorted
      arrNamesSorted.push( (i+1) + ". " + names[i] );
  }
  return arrNamesSorted;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = function(names) {
  return names.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = function(names) {
  return names.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
