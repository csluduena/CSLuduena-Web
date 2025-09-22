#!/bin/bash

# Script de despliegue automático para Hostinger
# Este script se ejecuta cuando GitHub envía un webhook

# Configuración
REPO_URL="https://github.com/csluduena/CSLuduena-Web.git"
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

# Copiar archivos del proyecto al directorio público
log "Copiando archivos a $DEPLOY_DIR..."

# Copiar archivos del proyecto (excluyendo deploy.sh y deploy.php)
log "Copiando archivos del proyecto..."
rm -rf $DEPLOY_DIR/*
cp -r $TEMP_DIR/* $DEPLOY_DIR/

# Limpiar archivos de deploy del directorio público
rm -f $DEPLOY_DIR/deploy.sh
rm -f $DEPLOY_DIR/deploy.php

# Limpiar archivos temporales
rm -rf $TEMP_DIR

log "Despliegue completado exitosamente"
