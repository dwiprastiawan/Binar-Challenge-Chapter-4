// Membuat kelas Game
class Game {
  constructor() {
  }

  // Fungsi random pick untuk Computer
  randomize() {
    // Menyimpan pilihan ke dalam array
    // 3 element yg bisa diakses mulai dari index-0, index-1, index-2
    const choices = ["batu", "kertas", "gunting"];
    // Math.random() untuk mengacak angka desimal 
    const index = Math.floor(Math.random() * 3);
    // Akses element yg ada di dalam array choice dengan index hasil acakan
    return choices[index];
  }

  playGame(playerChoice) {
    // Auto reset background
    this.resetBackground();
    // Cetak pilihan player & atur background pada pilihan
    console.log(`Player memilih ${playerChoice}`);
    this.setBackground('player', playerChoice);
    // Cetak pilihan computer & atur background pada pilihan
    const comChoice = this.randomize();
    console.log(`COM memilih ${comChoice}`);
    this.setBackground('computer', comChoice);

    // Membandingkan pilihan computer dengan player
    if (playerChoice == comChoice) {
      return this.resultDraw();
    }
    if (playerChoice === "batu" && comChoice === "kertas") {
      return this.resultPlayerLose();
    }
    if (playerChoice === "batu" && comChoice === "gunting") {
      return this.resultPlayerWin();
    }
    if (playerChoice === "kertas" && comChoice === "gunting") {
      return this.resultPlayerLose();
    }
    if (playerChoice === "kertas" && comChoice === "batu") {
      return this.resultPlayerWin();
    }
    if (playerChoice === "gunting" && comChoice === "batu") {
      return this.resultPlayerLose();
    }
    if (playerChoice === "gunting" && comChoice === "kertas") {
      return this.resultPlayerWin();
    }
  }

  setBackground(playerType, choice){
    // Mengambil element berdasar id, kemudian berikan kelas custom-selected
    const selectedElement = document.getElementById(`${playerType}-${choice}`);
    // memberikan background pada pilihan player
    selectedElement.classList.add("custom-selected");
  }

  resetBackground() {
    // menghapus style background pada pilihan player & computer
    document.getElementById("player-batu").classList.remove("custom-selected");
    document.getElementById("player-kertas").classList.remove("custom-selected");
    document.getElementById("player-gunting").classList.remove("custom-selected");
    document.getElementById("computer-batu").classList.remove("custom-selected");
    document.getElementById("computer-kertas").classList.remove("custom-selected");
    document.getElementById("computer-gunting").classList.remove("custom-selected");
    // menghilangkan tulisan "VS" pada game dan menampilkan hasil permainan
    document.getElementById("vs").classList.remove("custom-win-vs-box");
    document.getElementById("vs").classList.remove("custom-draw-vs-box");
    // mengembalikan tulisan VS & kembalikan style asal
    document.getElementById("vs").innerHTML = "VS";
    document.getElementById("vs").classList.add("custom-vs-text");
  }

  resultDraw() {
    // Cetak tulisan ke console
    console.log("DRAW");
    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "DRAW";
    // Hapus kelas custom-vs-text & tambahkan kelas custom-draw-vs-box
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-draw-vs-box");
  }

  resultPlayerLose() {
    // Cetak tulisan ke console
    console.log("COM WIN");
    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "COM WIN";
    // Hapus kelas custom-vs-text & tambahkan kelas custom-win-vs-box
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-win-vs-box");
  }

  resultPlayerWin() {
    // Cetak tulisan ke console
    console.log("PLAYER WIN");
    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "PLAYER 1 WIN";
    // Hapus kelas custom-vs-text & tambahkan kelas custom-win-vs-box
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-win-vs-box");
  }
}

// Membuat object baru menggunakan kelas Game
const game = new Game();
// Menyimpan semua elemen yang dibutuhkan ke dalam variable
const playerRock = document.getElementById("player-batu");
const playerPaper = document.getElementById("player-kertas");
const playerScissor = document.getElementById("player-gunting");
const comRock = document.getElementById("computer-batu");
const comPaper = document.getElementById("computer-kertas");
const comScissor = document.getElementById("computer-gunting");
const versus = document.getElementById("vs");
const reset = document.getElementById("reset");

// Menambahkan fungsi yang dijalankan ketika element di-klik
playerRock.addEventListener('click', function () {
  game.playGame("batu");
});
playerPaper.addEventListener('click', function () {
  game.playGame("kertas");
});
playerScissor.addEventListener('click', function () {
  game.playGame("gunting");
});
reset.addEventListener('click', function () {
  game.resetBackground();
});