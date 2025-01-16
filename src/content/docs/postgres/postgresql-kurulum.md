---
title: PostgreSQL Kurulum
description: postgreSQL kurulum
slug: posgresql-kurulum
sidebar:
  label: Kurulum
  order: 1
---

Homebrew, macOS için bir paket yöneticisidir ve PostgreSQL dahil birçok yazılımı yüklemeyi kolaylaştırır. Eğer Homebrew yüklü değilse, ilk olarak [Homebrew'ı yükleyin](https://brew.sh/). Kurulu olup olmadığını kontrol etmek için terminalde `brew --version` komutunu çalıştırın.

## PostgreSQL'i Homebrew ile Yükleme

Biz bu dokümanda PostgreSQL 15 sürümünü kullanacağız. PostgreSQL'in en son sürümünü bu dokumani yazdığımız tarihte 15 idi. 


### 1- Yukleme

Terminali acin ve aşağıdaki komutu kullanarak PostgreSQL'i yükleyin:

```bash
brew install postgresql@15
```

Bu komut, PostgreSQL 15'i ve gerekli bağımlılıklarını indirip kuracaktır.

### 2- Servislerini Başlatma

Kurulum tamamlandıktan sonra, PostgreSQL 15 servislerini başlatmak için (ve sistem her başladığında otomatik olarak başlatılmasını sağlamak için) aşağıdaki komutu çalıştırın:

```bash
brew services start postgresql@15
```

Eğer PostgreSQL'in sistem başladığında otomatik olarak başlatılmasını istemiyorsanız, aşağıdaki komutu kullanın:

```bash
pg_ctl -D /usr/local/var/postgres start
```


### 3- Servislerini Yönetme

Bu komutlar, PostgreSQL'i Homebrew kullanarak yüklediyseniz ve servisler aracılığıyla başlattıysanız (yani, `brew services start postgresql@15` komutunu kullandıysanız) geçerlidir.

- PostgreSQL Servisinin Durumunu Kontrol Etme:

```bash
brew services info postgresql
```

veya

```bash
brew services list
```

Bu komutlar, PostgreSQL servisinin çalışıp çalışmadığını gösterir. `started` durumu servisin çalıştığını, `stopped` ise durdurulduğunu belirtir.

- PostgreSQL Servisini Durdurma:

```bash
brew services stop postgresql
```

- PostgreSQL Servisini Yeniden Başlatma:

```bash
brew services restart postgresql
```

- PostgreSQL Servisini Başlatma (Eğer Durdurulmuşsa):

```bash 
brew services start postgresql
```

### 4- Kurulum Sonrası Yapılandırma

**psql'e Bağlanarak Kurulumu Doğrulama:**

`psql`, PostgreSQL ile etkileşim kurmak için kullanılan komut satırı aracıdır. 

Varsayılan `postgres` kullanıcısı ve `postgres` veritabanı ile bağlanmayı deneyelim:

```bash
psql postgres
```

Eğer `psql` etkileşimli kabuğuna giriş yapabiliyorsanız (komut istemi `postgres=#` şeklinde değişir), kurulum başarılı olmuştur. Çıkmak için `\q` yazıp Enter'a basın.



:::note[Bilgi]
Ilk kurulumda varsayılan olarak `postgres` kullanıcısı ve `postgres` veritabanı otomatik olarak oluşturulur. Bu, PostgreSQL'in kurulum sürecinin standart bir parçasıdır ve kurulum sırasında özel olarak sorulmaz.

- `postgres` kullanıcısı: Bu kullanıcı, veritabanı sisteminin süper kullanıcısıdır (superuser) ve tüm veritabanları üzerinde tam yetkiye sahiptir. Genellikle veritabanı yönetimi görevleri için kullanılır.
- `postgres` veritabanı: Bu veritabanı, postgres kullanıcısının varsayılan olarak bağlandığı veritabanıdır ve genel kullanım için tasarlanmıştır. Başlangıçta, yönetimsel işlemler veya diğer veritabanlarını oluşturmak için kullanılabilir.

Bu varsayılan kullanıcı ve veritabanı, PostgreSQL'i ilk kez kurduğunuzda hemen kullanıma hazır olur. Bu sayede, kurulumdan hemen sonra `psql postgres` komutuyla veritabanına bağlanabilir ve yönetimsel işlemleri gerçekleştirebilirsiniz.
:::