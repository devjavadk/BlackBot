const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Berikan donasi seikhlasnya saja buat mimin supaya bisa mengembangi fiture lainnya.
  Terimakasih
Instagram: https://instagram.com/beni_230/

Best regards, beniismael.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Oi, ${pushname} Não se esqueça de doar livremente, OK! 👋️
https://instagram.com/devjavastudios/
Abaixo estão alguns dos recursos abaixo de LIGHTBOT!✨

📁 Menu de adesivos:
🤖 *${prefix}cooltext*
🤖 *${prefix}sticker*
🤖 *${prefix}stickergif*
🤖 *${prefix}stickergiphy*
🤖 *${prefix}stickerfire*
🤖 *${prefix}stickertoimg*
🤖 *${prefix}stickerlightning*

📁 Menu do criador:
🤖 *${prefix}logopornhub*
🤖 *${prefix}ttp*
🤖 *${prefix}ttp2*
🤖 *${prefix}meme*
🤖 *${prefix}quotemaker*
🤖 *${prefix}fakename*

📁 Menu Islã:
🤖 *${prefix}infosurah*
🤖 *${prefix}surah*
🤖 *${prefix}tafsir*
🤖 *${prefix}ALaudio*
🤖 *${prefix}jsolat*

📁 Menu 18 ++:
🤖 *${prefix}nekopoi {ini sudah di apus}*

📁 Menu de diversão (grupo):
🤖 *${prefix}simisimi*
🤖 *${prefix}katakasar*
🤖 *${prefix}klasmen*

📁 Menu de download:
🤖 *${prefix}instagram*
🤖 *${prefix}tiktok* 
🤖 *${prefix}facebook*
🤖 *${prefix}ytmp3*
🤖 *${prefix}ytmp4*

📁 Menu Primbon:
🤖 *${prefix}artinama*
🤖 *${prefix}cekjodoh*
🤖 *${prefix}cekzodiak [nama] [tanggal-bulan-tahun]*
🤖 *${prefix}ramalan*
🤖 *${prefix}katacinta*

📁 Tarefa do menu:
🤖 *${prefix}brainly [pertanyaan] [.jumlah]*
🤖 *${prefix}translate*
🤖 *${prefix}nulis*
🤖 *${prefix}magernulis1*
🤖 *${prefix}wiki*

📁 Pesquisar qualquer:
🤖 *${prefix}images*
🤖 *${prefix}sreddit*
🤖 *${prefix}resep*
🤖 *${prefix}stalkig*
🤖 *${prefix}chord*
🤖 *${prefix}lirik*
🤖 *${prefix}ss*
🤖 *${prefix}movie*
🤖 *${prefix}play*

📁 Texto Aleatório:
🤖 *${prefix}fakta*
🤖 *${prefix}howgay*
🤖 *${prefix}pantun*
🤖 *${prefix}katabijak*
🤖 *${prefix}motivasi*
🤖 *${prefix}quote*
🤖 *${prefix}cerpen*
🤖 *${prefix}puisi*
🤖 *${prefix}cersex*

📁 Imagens aleatórias:
🤖 *${prefix}anime*
🤖 *${prefix}cat*
🤖 *${prefix}doggo*
🤖 *${prefix}kpop*
🤖 *${prefix}memes*
🤖 *${prefix}rpaper*

📂 Menu Anime:
🤖 *${prefix}dewabatch*
🤖 *${prefix}whatanime*
🤖 *${prefix}inu*
🤖 *${prefix}neko*

📂 Informações do menu:
🤖 *${prefix}infogempa*
🤖 *${prefix}covidindo*
🤖 *${prefix}cuaca*

📂 Menu Gabut:
🤖 *${prefix}apakah*
🤖 *${prefix}bisakah*
🤖 *${prefix}kapankah*
🤖 *${prefix}mirip*
🤖 *${prefix}seberapagay*
🤖 *${prefix}seberapalesbi*

📂 Menu divertido:
🤖 ${prefix}tod*

📂 Menu Outros:
🤖 *${prefix}koin*
🤖 *${prefix}dadu*
🤖 *${prefix}slap*
🤖 *${prefix}toxic <maintenance>*

📁 Informações do menu:
🤖 *${prefix}tts*
🤖 *${prefix}resi*
🤖 *${prefix}ceklokasi*
🤖 *${prefix}shortlink*
🤖 *${prefix}bapakfont*

📁 Sobre bot:
🤖 *${prefix}tnc*
🤖 *${prefix}donasi*
🤖 *${prefix}botstat*
🤖 *${prefix}owner*
🤖 *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

📁 Proprietário do bot:
🤖 *${prefix}linkgrup*
🤖 *${prefix}revoke*
🤖 *${prefix}adminlist*
🤖 *${prefix}blocklist*
🤖 *${prefix}ban* - banned
🤖 *${prefix}unban* - unbanned
🤖 *${prefix}bc* - promosi
🤖 *${prefix}leaveall* - keluar semua grup
🤖 *${prefix}clearall* - hapus semua chat

Por: Dev Java Studios Escolha um e dê uma pausa de 5 segundos! 🤤` //jan di ganti ajg
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Grupo de Administração* ] ⚠ 
Aqui estão os recursos de administração de grupo deste bot!

🤖 ${prefix}antilink*
🤖 ${prefix}antisticker*
🤖 *${prefix}ceksider*
🤖 *${prefix}add*
🤖 *${prefix}kick* @tag
🤖 *${prefix}promote* @tag
🤖 *${prefix}demote* @tag
🤖 *${prefix}mentionAll*
🤖 *${prefix}mutegrup*
🤖 *${prefix}setprofile*
🤖 *${prefix}antilink*
🤖 *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Grupo de proprietários apenas* ] ⚠
Aqui estão os recursos do proprietário do grupo neste bot!
🤖 *${prefix}kickall*
*Owner bot : wa.me/+5511946817667*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Olá, obrigado por usar este bot, para apoiar este bot, você pode ajudar por:

[YouTube]: https://youtube.com/channel/UCE7x81dLhF0BQSDLSqCUjBQ
[Instagram]: https://instagram.com/devjavastudios?igshid=6kwwzixyg5jp

Ore para que o projeto do bot continue crescendo
Ore para que o autor do bot tenha ideias mais criativas

A Inscrição será usada para o desenvolvimento e operação deste bot.

Obrigado. -Dev Java Studios`
}
