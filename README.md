# CLOUD-SHOP: React challenge

## Software base

NodeJs v22.12.0
Git version 2.35.0.windows.1 o equivalente en Mac

## Clonar proyecto

git clone https://github.com/rodriguezrodrig/cloud-shop.git

## Instalar dependencias

cd cloud-shop

npm install

## Crear archivo .env en la carpeta raiz del proyecto con el contenido:

VITE_API_URL=https://erp.powerlink.com.pe/PowerCloud/webresources

Nota: la URL representa es un backend legacy que provee productos y sus imágenes. No se han mockeado 2000 registros, son alrededor de 300 pero traer las imagenes añaden cierto delay. También funciona el login y cambio de contraseña.

## Lanzar proyecto en VS Code o línea de comandos

npm run dev

abrir browser en http://localhost:5173

usuarios de prueba:

usuario normal, home, login + cambio de contraseña: 
juan@123.com / Abc123

usuario normal, home, login + cambio de contraseña + módulo admin: 
admin@123.com / Adm123

ó

## Lanzar desde docker:

Version requerida de docker: latest

### Generar imagen:
docker build -t cloud-shop:latest .

### Iniciar contenedor:
docker compose up -d

abrir browser en http://localhost

usuarios de prueba:

juan@123.com / Abc123

admin@123.com / Adm123