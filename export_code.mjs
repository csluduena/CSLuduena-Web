import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración del directorio raíz y archivo de salida
const rootDir = path.dirname(fileURLToPath(import.meta.url));
const outputFilePath = path.join(rootDir, 'project_code.txt');

// Extensiones de archivo que queremos incluir (por ejemplo, código JS, CSS, HTML, etc.)
const validExtensions = ['.js', '.css', '.html', '.json', '.md'];

// Función para verificar si un archivo o directorio debe ser ignorado
const shouldIgnore = (filePath) => {
    const ignoredDirs = ['node_modules', '.git', 'dist', 'build'];
    const ignoredFiles = ['package-lock.json'];

    // Verifica si el directorio o archivo está en la lista de ignorados
    return ignoredDirs.some(dir => filePath.includes(dir)) || ignoredFiles.some(file => filePath.endsWith(file));
};

// Función para recorrer el proyecto y recopilar los archivos de código
function collectFiles(dir, fileList = []) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        // Si el archivo o directorio debe ser ignorado, lo omite
        if (shouldIgnore(filePath)) return;

        if (stat.isDirectory()) {
            // Recursión en subdirectorios
            collectFiles(filePath, fileList);
        } else if (validExtensions.includes(path.extname(file))) {
            // Si es un archivo válido (con las extensiones deseadas), se agrega a la lista
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Función para exportar el contenido de los archivos al archivo de texto
function exportCodeToTxt() {
    const files = collectFiles(rootDir);
    let outputContent = '';

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        outputContent += `\n\n===== ${file} =====\n\n${content}`;
    });

    // Guardar el contenido en un archivo de texto
    fs.writeFileSync(outputFilePath, outputContent);
    console.log(`Código exportado a ${outputFilePath}`);
}

// Ejecuta la función de exportación
exportCodeToTxt();
