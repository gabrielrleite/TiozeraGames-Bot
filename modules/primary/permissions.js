const permissions = {
    "CRIAR CONVITES": 0x1,
    "EXPULSAR MEBROS": 0x2,
    "BANIR MEMBROS": 0x4,
    "ADMINISTRADOR": 0x8,
    "GERENCIAR CANAIS": 0x10,
    "GERENCIAR SERVIDOR": 0x20,
    "ADICIONAR REAÇÕES": 0x40,
    "VER REGISTRO DE AUDITORIA": 0x80,
    "PRIORIDADE DE FALA": 0x100,
    "TRANSMITIR": 0x200,
    "VER CANAL": 0x400,
    "ENVIAR MENSAGEM": 0x800,
    "ENVIAR MENSAGEM TTS": 0x1000,
    "GERENCIAR MENSAGENS": 0x2000,
    "LINKS INCORPORADO": 0x4000,
    "ANEXAR ARQUIVOS": 0x8000,
    "VER HISTÓRICO DE MENSAGENS": 0x10000,
    "MENCIONAR EVERYONE": 0x20000,
    "USAR EMOJIS EXTERNOS": 0x40000,
    "VER INFORMAÇÕES DO SERVIDOR": 0x80000,
    "CONECTAR": 0x100000,
    "FALAR": 0x200000,
    "SILENCIAR MEMBROS": 0x400000,
    "ENSURDECER MEMBROS": 0x800000,
    "MOVER MEMBROS": 0x1000000,
    "USAR DETECÇÃO DE VOZ": 0x2000000,
    "MUDAR APELIDO": 0x4000000,
    "GERENCIAR APELIDOS": 0x8000000,
    "GERENCIAR CARGOS": 0x10000000,
    "GERENCIAR WEBHOOKS": 0x20000000,
    "GERENCIAR EMOJIS E FIGURINHAS": 0x40000000,
    "USAR COMANDOS DE APLICATIVO": 0x80000000,
    "PEDIR PARA FALAR": 0x100000000,
    "GERENCIAR TÓPICOS": 0x400000000,
    "FALAR EM TÓPICOS PÚBLICOS": 0x800000000,
    "FALAR EM TÓPICOS PRIVADOS": 0x1000000000,
    "USAR FIGURINHAS EXTERNAS": 0x2000000000,
    "GERENCIAR EVENTOS": 0x0000000200000000,
    "MODERAR MEMBROS": 	0x0000010000000000,
    "USAR ATIVIDADES EMBUTIDA": 0x0000008000000000,
    "ENVIAR MENSAGEM EM TÓPICOS": 0x0000004000000000
};
module.exports = (permBitfield) => {
    let currentPermissions = [];
    const permissionUpper = Math.floor(permBitfield / 0x100000000);
    const permissionLower = Math.floor(permBitfield % 0x100000000);
    for (let key in permissions) {
        if ((permissions[key] >= 0x100000000 && (permissionUpper & Math.floor(permissions[key] / 0x100000000))) || (permissions[key] < 0x100000000 && (permissionLower & permissions[key]))) {
            currentPermissions.push(key);
        } else {
            continue;
        };
    };
    return currentPermissions;
}
module.exports.bitfield = (bitfield) => {
    if (permissions[bitfield]) {
        return permissions[bitfield];
    } else {
        return new Error("Isso não é um BITFIELD válido");
    };
}