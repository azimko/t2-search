/*var some ='Luffy'
var old = 18
var ras = 'Werewolf'

var a = 10
var b = 4

var lokers = ['Anton','Siti','Anita','Doni','Joko','Dimas','John Doe']

var Hari = 'Hujan'
var Uang = 10000000

console.log(some)
window.alert("Hello "+some+" Are You Okay?")
console.log("Dengan Umur = "+old+". Dengan Ras = "+ras+".")
console.log("Saya "+some+" berusia "+old+" dengan ras "+ras+".")

console.log("----------------------------------------------")

console.log("Hasil Dari 10 tambah 4 adalah "+(a+b))
console.log("Hasil dari 10 kurang 4 adalah "+(a-b))
console.log("Hasil dari 10 kali 4 adalah "+(a*b))
console.log("Hasil dari 10 bagi 4 adalah "+(a/b))
console.log("Hasil dari 10 modulo 4 adalah "+(a%b))

console.log("----------------------------------------------")

console.log("Untuk loker yang keempat adalah loker "+lokers[3])
console.log("Jumlah Array Dari lokers adalah "+lokers.length)
console.log("Loker Terakhir adalah loker "+lokers[lokers.length - 1])

console.log("----------------------------------------------")

for (var i = 0; i < lokers.length; i++) {
	console.log(lokers[i])
}
console.log("----------------------------------------------")

if(Hari == 'Hujan'){
	console.log("Saya Membeli Jas Hujan")
} else {
	console.log('Saya Membeli Hond* Jazz')
}

console.log("----------------------------------------------")

if(old < 17){
	console.log("Pulang Aja Boy")
} else if(Uang >= "100000"){
	console.log("Waaaah SULTAN Uangnya Nyampe "+Uang+", Padahal Cuma Buat Beli Bir ")
} else if((Uang < "100000") && (Uang >= '50000')){
	console.log("Beli 1 botol Aja Boy")
} else {
	console.log("Sorry Boy Anda Kere")
}

console.log("----------------------------------------------")

var students = [
	{
		name : 'John Doe',
		address : 'Tanjung Jati'
	},{
		name : 'Anita',
		address : 'Tanjung Jati'
	},{
		name : 'Dimas',
		address : 'Rambek'
	}
]
console.log(students[2].name)
for (var i = 0; i < students.length; i = i + 1) {
	console.log('Nama : ', students[i].name)
	console.log('Addres : ', students[i].address)
	console.log('----------')
}*/
var students = [
	{
		NIS : '170700809',
		Nama : 'Agustio Fernando',
		Avatar : 'img/1.jpg'
	},{
		NIS : '170700713',
		Nama : 'Ahmad Fuadi',
		Avatar : 'img/2.jpg'
	},{
		NIS : '170700714',
		Nama : 'Al Azim',
		Avatar : 'img/3.jpg'
	},{
		NIS : '170700781',
		Nama : 'Arif Habibi',
		Avatar : 'img/4.jpg'
	},{
		NIS : '170700786',
		Nama : 'Gia',
		Avatar : 'img/5.jpg'
	},{
		NIS : '170700818',
		Nama : 'Hamizan Rafiqi Azuris',
		Avatar : 'img/6.jpg'
	},{
		NIS : '170700788',
		Nama : 'Khairul Mustafa',
		Avatar : 'img/6.jpg'
	},{
		NIS : '1707000823',
		Nama : 'M. Farid',
		Avatar : 'img/7.jpg'
	},{
		NIS : '170700790',
		Nama : 'M. Revan Apriyandi',
		Avatar : 'img/8.jpg'
	},{
		NIS : '170700791',
		Nama : 'M. Reyhan Septio',
		Avatar : 'img/9.jpg'
	},{
		NIS : '170700757',
		Nama : 'M. Ridwan',
		Avatar : 'img/10.jpg'
	},{
		NIS : '170700792',
		Nama : 'M. Akhdanul Wafiy',
		Avatar : 'img/11.jpg'
	},{
		NIS : '170700922',
		Nama : 'Muhammad Andika',
		Avatar : 'img/12.jpg'
	},{
		NIS : '170700834',
		Nama : 'Qolbiatul Edriyen',
		Avatar : 'img/13.jpg'
	},{
		NIS : '170700796',
		Nama : 'Muhammad Lutfi',
		Avatar : 'img/14.jpg'
	},{
		NIS : '170700800',
		Nama : 'Rizki Fauzan',
		Avatar : 'img/15.jpg'
	},{
		NIS : '170700801',
		Nama : 'Rizky Ananda',
		Avatar : 'img/16.jpg'
	},{
		NIS : '170700803',
		Nama : 'Satria Ramadanol',
		Avatar : 'img/17.jpg'
	},{
		NIS : '170700806',
		Nama : 'Syukriatul Zandri',
		Avatar : 'img/18.jpg'
	},{
		NIS : '170700838',
		Nama : 'Wendi Hermawan',
		Avatar : 'img/19.jpg'
	},{
		NIS : '170700807',
		Nama : 'Widian Sandiki',
		Avatar : 'img/20.jpg'
	},{
		NIS : '170700808',
		Nama : 'Yoghie Lailathul Iqbal',
		Avatar : 'img/21.jpg'
	}
]

function cari(){
	var ketik = document.getElementById('search').value
	for (var i = 0; i < students.length; i++) {
		if (students[i].NIS == ketik || students[i].Nama == ketik) {
			document.getElementById('kiri').textContent = "Nama : "+students[i].Nama
			document.getElementById('tengah').setAttribute("src",students[i].Avatar)
			document.getElementById('kanan').textContent = "NIS : "+students[i].NIS
			window.alert("Informasi Dari "+students[i].Nama)
		}
	}
}