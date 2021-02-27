const help = (prefix) => {
	return `
	 *𝗖𝗢𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧*

> *Sticker Comandos* <
*Comando:* *${prefix}sticker*
*Descripción:* convertir imagen/gif/vídeo a sticker
*Uso:* responder imagen/gif/vídeo, o enviar imagen/gif/video con título\n
*Comando:* *${prefix}toimg*
*Descripción:* convertir sticker a imagen
*Uso:* responde al sticker\n
> *Otros Comandos* <
*Comando:* *${prefix}yt* 
*Descripción:* Descargar cancion de YouTube con URL
*Uso:* *${prefix}yt https://youtube.com*\n
*Comando:* *${prefix}tts*
*Descripción:*convertir texto a voz/audio
*Uso:* *${prefix}tts [cc] [text]*\n ejemplo : *${prefix}tts es hola*\n
*Comando:* *${prefix}setprefix* 
*Descripción:* remplazar prefix
*Uso:* *${prefix}setprefix [texto|opcional]*\nejemplo: *${prefix}setprefix ?*
nota : Este Comando solo puede ser utilizado por el propietario del bot\n
> *Comandos de grupos* <
*Comando:* *${prefix}add*
*Descripción:* agregar miembro al grupop
*Uso:* *${prefix}add 549xxxxxxxxxx*\n
nota: solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador\n
*Comando:* *${prefix}kick*
*Descripción:* expulsar miembros del grupo
*Uso:* *${prefix}kick @tagmember*\n
nota : solo se puede usar cuando el bot se convierte en administrador, ¡y el que envía el comando es administrador!\n
*Comando:* *${prefix}admin*
*Descripción:* convertir al grupo en miembro administrador del grupo
*Uso:* *${prefix}admin @tagmember*\n
nota : solo se puede usar cuando el bot se convierte en administrador, ¡y el que envía el comando es administrador!\n
*Comando:* *${prefix}noadmin*
*Descripción:* hacer que el grupo sea administrador como miembro del grupo
*Uso:* *${prefix}noadmin @tagmember*\n
nota : solo se puede usar cuando el bot se convierte en administrador, ¡y el que envía el comando es administrador!\n
*Comando:* *${prefix}link*
*Descripción:* tomar el enlace del grupo
*Uso:* solo envía el comando
nota : solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador\n
Advertencia: Usa este Comando solo cuando sea necesario ... ¡o haz que te manejen el culo!
*Comando:* *${prefix}tagall*
*Descripción:* etiqueta a todos los miembros del grupo, incluidos los administradores también
*Uso:* simplemente envíe el comando
nota : este comando se puede utilizar si es un administrador de grupo\n`
}

exports.help = help
