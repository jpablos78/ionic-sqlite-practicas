CREATE TABLE IF NOT EXISTS TB_GEN_MENU(
    id_menu INTEGER PRIMARY KEY,
    id_menu_padre INTEGER, 
    nombre_menu TEXT
);

INSERT or IGNORE INTO TB_GEN_MENU(id_menu_padre, nombre_menu) VALUES (0, 'SISTEMA');
INSERT or IGNORE INTO TB_GEN_MENU(id_menu_padre, nombre_menu) VALUES (1, 'Modulo General');
INSERT or IGNORE INTO TB_GEN_MENU(id_menu_padre, nombre_menu) VALUES (2, 'Usuarios');
INSERT or IGNORE INTO TB_GEN_MENU(id_menu_padre, nombre_menu) VALUES (3, 'Mantenimiento de Usuarios');