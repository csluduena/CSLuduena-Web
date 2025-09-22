#!/bin/bash

# Script de despliegue automático para Hostinger
# Este script se ejecuta cuando GitHub envía un webhook

# Configuración
REPO_URL="https://github.com/csluduena/CSLuduena-Web.git"  # Cambia por tu repositorio
DEPLOY_DIR="/public_html"
BACKUP_DIR="/public_html_backup"
LOG_FILE="/tmp/deploy.log"

# Función para logging
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $LOG_FILE
}

log "Iniciando despliegue..."

# Crear backup del sitio actual
if [ -d "$DEPLOY_DIR" ]; then
    log "Creando backup..."
    cp -r $DEPLOY_DIR $BACKUP_DIR-$(date +%Y%m%d_%H%M%S)
fi

# Crear directorio temporal para clonar
TEMP_DIR="/tmp/csluduena_deploy"
rm -rf $TEMP_DIR
mkdir -p $TEMP_DIR

# Clonar el repositorio
log "Clonando repositorio..."
cd $TEMP_DIR
git clone $REPO_URL .

# Instalar dependencias y construir el proyecto
log "Instalando dependencias..."
npm install

log "Construyendo proyecto..."
npm run build

# Copiar archivos construidos al directorio público
log "Copiando archivos a $DEPLOY_DIR..."

# Crear directorio temporal para los archivos del sitio
SITE_FILES="/tmp/site_files_$(date +%Y%m%d_%H%M%S)"
mkdir -p $SITE_FILES

# Copiar solo los archivos del sitio (excluyendo deploy.sh y deploy.php)
cp -r dist/* $SITE_FILES/

# Mover archivos al directorio público
log "Moviendo archivos a $DEPLOY_DIR..."
rm -rf $DEPLOY_DIR/*
cp -r $SITE_FILES/* $DEPLOY_DIR/

# Limpiar archivos temporales del sitio
rm -rf $SITE_FILES

# Limpiar archivos temporales
rm -rf $TEMP_DIR

log "Despliegue completado exitosamente"
