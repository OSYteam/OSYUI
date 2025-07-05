#!/bin/bash

set -e  # Hata olursa scripti durdurur

echo "🚧 Proje derleniyor..."
npm run build

echo "🧹 Önceki dosyalar temizleniyor..."
rm -rf /var/www/html

echo "📁 Klasör yeniden oluşturuluyor..."
mkdir -p /var/www/html

echo "🚀 Derlenmiş dosyalar kopyalanıyor..."
cp -r ./dist/* /var/www/html

echo "✅ Deploy işlemi tamamlandı!"
