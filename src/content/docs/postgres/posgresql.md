---
title: PostgreSQL
description: postgres giris
slug: posgresql
sidebar:
  label: Terminal
  order: 2
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

**veya;**

```bash
psql -h 127.0.0.1 -p 5433 -d dbname -U user
```

Bu komut, PostgreSQL veritabanına komut satırı üzerinden bağlanmak için kullanılan psql aracını çalıştırır.  Komutun her bir parçası şunları ifade eder:

- `psql`: PostgreSQL'in etkileşimli terminal istemcisidir. Veritabanına bağlanmanızı ve SQL sorguları çalıştırmanızı sağlar.

- `-h 127.0.0.1`: Veritabanı sunucusunun bulunduğu host adresini belirtir. 127.0.0.1 "localhost" anlamına gelir ve kendi bilgisayarınızdaki sunucuya bağlanacağınızı ifade eder.

- `-p 5433`: Bağlanılacak port numarasını belirtir. PostgreSQL varsayılan olarak 5432 portunu kullanır, ancak sizin durumunuzda Strapi 5433 portunu kullanacak şekilde yapılandırılmış.

- `-d dbname`: Bağlanılacak veritabanının adını belirtir. dbname verilerinizin depolandığı "dbname" adlı veritabanına bağlanacaksınız.

- `-U root`: Veritabanına bağlanırken kullanılacak kullanıcı adını belirtir. Strapi'nin veritabanı ayarlarına göre, kullanıcı adı "root" olarak belirlenmiş


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


