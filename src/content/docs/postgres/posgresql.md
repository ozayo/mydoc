---
title: PostgreSQL
description: postgres giris
slug: posgresql
sidebar:
  label: terminal
  order: 1
---

## PostgreSQL'in Çalışma Durumu

PostgreSQL, Homebrew üzerinden yüklenmiş ve bir servis olarak çalışıyor. Bu, bilgisayarınızı her açtığınızda PostgreSQL’in otomatik olarak başlatılacağı anlamına gelir.

Ancak, bazen bu davranış değişebilir veya servis düzgün başlamazsa manuel müdahale gerekebilir.

## PostgreSQL’i Başlatma, Duraklatma ve Yeniden Başlatma

### Servisi Başlatmak:

PostgreSQL’i başlatmak için:
```bash
brew services start postgresql@15
```
Bu komut PostgreSQL’i arka planda (daemon) çalıştırır ve bilgisayar her açıldığında otomatik olarak başlatır.

### Servisi Durdurmak:

PostgreSQL’i durdurmak için:

PostgreSQL’i başlatmak için:
```bash
brew services stop postgresql@15
```

### Servisi Yeniden Başlatmak:
Eğer PostgreSQL’in ayarlarında değişiklik yaptıysanız veya bağlantı sorunları yaşarsanız:
PostgreSQL’i başlatmak için:
```bash
brew services restart postgresql@15
```

### Servisin Çalışıp Çalışmadığını Kontrol Etmek:

PostgreSQL’in aktif olup olmadığını görmek için:
```bash
brew services list
```
Çıktıda started yazıyorsa servis aktif demektir.

## PostgreSQL’e Bağlanma ve Yönetim

### Terminalden PostgreSQL’e Bağlanmak:
PostgreSQL sunucusuna bağlanmak için:

```bash
psql -U root -p 5433
```

- `-U root`: PostgreSQL kullanıcısı (kendi kullanıcı adınız farklı olabilir).
- `-p 5433`: PostgreSQL’in kullandığı port (5432 dışında bir port kullandıysanız bunu belirtin).

### Veritabanları Listesi Görüntüleme:
PostgreSQL içinde oturum açtıktan sonra:

```sql
\l
```

### Bir Veritabanına Bağlanmak:
Bir veritabanına bağlanmak için:

```sql
\c strapi
```

### Mevcut Tablo ve Şemaları Görüntüleme:
Veritabanındaki tabloları görmek için:

```sql
\dt
```

### PostgreSQL’den Çıkmak:
PostgreSQL oturumundan çıkmak için:

```sql
\q
```

## PostgreSQL Ayarlarını Güncelleme
Eğer bir port veya başka bir ayarı değiştirmek isterseniz:

1. PostgreSQL’in yapılandırma dosyasını açın:

```bash
nano /usr/local/var/postgresql@15/postgresql.conf
```

2. Değişiklik yaptıktan sonra PostgreSQL servisini yeniden başlatın:
```bash
brew services restart postgresql@15
```

## PostgreSQL Loglarını İnceleme

Bağlantı sorunları veya başka hatalar için log dosyasını kontrol edin:

```bash
cat /usr/local/var/log/postgresql@15.log
```

## Yedekleme ve Geri Yükleme

### Veritabanını Yedekleme:
```bash
pg_dump -U root -p 5433 strapi > strapi_backup.sql
```

### Yedeği Geri Yükleme:

```bash
psql -U root -p 5433 strapi < strapi_backup.sql
```

Yedekleme ve geri yukleme ile ilgili bazi kaynaklar:

How to backup and restore a postgres database:
https://tembo.io/docs/getting-started/postgres_guides/how-to-backup-and-restore-a-postgres-database

pg_dump:
https://www.postgresql.org/docs/current/app-pgdump.html


## PostgreSQL ile İlgili Genel Tavsiyeler
1. PostgreSQL arka planda çalışıyorsa genellikle bir müdahale gerekmez. Ancak sistemde yoğun kaynak kullanımı varsa servis kapatılabilir.
2. Eğer PostgreSQL’i her zaman açık tutmak istemiyorsanız, yalnızca gerektiğinde başlatmak için `brew services start` komutunu kullanabilirsiniz.

Eğer PostgreSQL’i kapatmak isterseniz, arka planda çalışan servisi durdurmanız gerekir. Bunun için şu komutu kullanabilirsiniz:

```bash
brew services stop postgresql@15
```
Bu komut PostgreSQL servisini durdurur ve artık arka planda çalışmaz. Yalnızca ihtiyaç duyduğunuzda çalıştırmak için daha sonra şu komutu kullanabilirsiniz:

```bash
brew services start postgresql@15
```

**Not:**

Eğer PostgreSQL’i manuel başlatmayı tercih ederseniz ve brew services kullanmak istemezseniz, şu şekilde çalıştırabilirsiniz:

```bash
/usr/local/opt/postgresql@15/bin/postgres -D /usr/local/var/postgresql@15
```

Bu işlem terminal açık olduğu sürece çalışır. Terminali kapattığınızda PostgreSQL de kapanır.

**Durum Kontrolü:** Herhangi bir anda PostgreSQL’in çalışıp çalışmadığını kontrol etmek için:

```bash
brew services list
```

Çıktıda PostgreSQL’in durumunu görebilirsiniz (`started` veya `stopped`).