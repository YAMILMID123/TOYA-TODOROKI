import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🌸 ¡Hola! Soy Akari, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}

if (chat.isBaneed) return
if (/^.qr|.code$/i.test(m.text)) {
conn.reply(m.chat, `> *Hola los comandos ingresados no se encuentran disponibles para vincular (SUB-BOTS)* \n\n> Escribre *.code* para escanear codigo *QR*\n\n> Escribe *.serbot --code* para codigo de ocho digitos\n\n\n> Pσɯҽɾҽԃ Bყ ιαɳαʅҽʝαɳԃɾσσƙ15x`, m, rcanal, )
}

if (chat.isBaneed) return
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `*Hola si quieres unir a la bot deberas seguir las reglas basicas* 👇\n\n> No hacer spam a la bot\n\n> No llamar a la bot\n\n> El grupo debe de tener un minimo de 25 miembros o no sera otorgado el bot\n\n> No añadir a la bot sin permisos del creador \n\n> Wa.me/5493876639332\n\n> Disfrute de *AkariBot-MD Powered By Ianalejandrook15x*`, m, rcanal, )
}
  
if (/^ian$/i.test(m.text)) {
conn.reply(m.chat, `Hola Ian es mi creador, si deseas unir a la bot puedes contactarte con el aqui te dejo su numero\n\n> wa.me/5493876639332`, m, rcanal, )
}
return !0;
};
export default handler;
