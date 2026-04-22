# 🕐 Tarih Asistanı Kronos

Tarihsel olayları takip eden, AI destekli bir asistan uygulaması.

## 🎯 Özellikler

- 🤖 **AI Asistan** - Tarih sorularına cevap veren chatbot
- 📅 **Tarihsel Olay Veritabanı** - Kronolojik sıralamaya göre olaylar
- 🔍 **Arama & Filtreleme** - Tarih aralığına, kategoriye göre
- 📊 **Zaman Çizelgesi** - Olayları görsel olarak göster
- 💾 **Veri Yönetimi** - Tarihsel verileri kolayca yönet

## 🛠️ Teknoloji Stack

- **Backend:** Python + FastAPI
- **Frontend:** React + TypeScript
- **Database:** PostgreSQL
- **AI:** OpenAI API
- **Deployment:** Docker + GitHub Actions

## 🚀 Başlangıç

### Ön Gereksinimler
- Docker & Docker Compose
- Python 3.9+
- Node.js 16+

### Kurulum

```bash
# Projeyi klonla
git clone https://github.com/ozzasci/tarih-asistani-kronos.git
cd tarih-asistani-kronos

# .env dosyasını oluştur
cp .env.example .env

# Docker ile başlat
docker-compose up -d
```

### Erişim

- 🌐 Frontend: http://localhost:3000
- 🔌 Backend API: http://localhost:8000
- 📚 Swagger Docs: http://localhost:8000/docs

## 📁 Proje Yapısı

```
tarih-asistani-kronos/
├── backend/          # Python FastAPI
├── frontend/         # React + TypeScript
├── data/             # Tarihsel veri
├── docs/             # Dokumentasyon
├── .github/          # GitHub Actions
└── docker-compose.yml
```

## 📚 Dokumentasyon

- [API Dokumentasyonu](docs/API.md)
- [Kurulum Rehberi](docs/SETUP.md)
- [Katkı Rehberi](CONTRIBUTING.md)

## 🤝 Katkıda Bulunma

Katkılarınız hoşnut edilecektir! Lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👤 Geliştirici

- [@ozzasci](https://github.com/ozzasci)

---

**Tarih Asistanı Kronos** ile tarihi keşfet! 🕰️
