var kullanicilar = [
    { email: "onurcan@gmail.com", sifre: "12345" },
    { email: "sucan@gmail.com", sifre: "12345" }
]

var tivitler = [
    { email: "onurcan@gmail.com", tivit: "Bugün hava çok güzel" },
    { email: "onurcan@gmail.com", tivit: "Bugün hava çok güzel 2" },
    { email: "sucan@gmail.com", tivit: "Bugün hava hiç güzel değil" }
]

var email = prompt("email?")
var sifre = prompt("sifre?")


function kullaniciVarmi(email, sifre) {
    for (i = 0; i < kullanicilar.length; i++) {
         if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
             return true;
         }
    }
    return false;
}
function giris() {
    if (kullaniciVarmi(email,sifre)) {
        console.log(tivitler)
    } else {
        console.log("Kullanıcı adı veya şifresi hatalı")
    }
}

giris(email, sifre)

