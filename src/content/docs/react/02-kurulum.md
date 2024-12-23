---
title: React JS
description: React Kurulumu
slug: react-kurulum
sidebar:
  label: React Kurulum
  order: 2
---

## React Kurulum

React kendi web sitesinde de bahsettigi uzere react kurulumunu bir framework ile birlikte yapilmasini tavsiye ediyor [Start a New React Project](https://react.dev/learn/start-a-new-react-project).

Bunlarin en basinda bir hayli de populer olan Next Js gelmekte.

Ancak yinede React ogrenme surecinde herhangi bir framework ile kullanmadan React kurmak icin en iyi yol **Vite JS** kullanmak. Vite ile ilgili yazdığım notu [Burada](/tools/vite/01/) okuyabilirsiniz.

Vite kurulum asamasinda size nasil bir kurulum yapmak isteyeceginizi sorarak ihtiyaciniza gore bir kurulum yapmanizi saglayacaktir.

:::caution
ViteJs'den once "Create React App" ile React kurulumu yapiliyordu. Ancak vite ile birlikte artik kullanilmiyor diyebiliriz. [bilgi icin:](https://create-react-app.dev/).
:::

### Vite ile React Kurulumu

Terminalde proje klasorunuze gittikten sonra;

```
$ npm create vite@latest
```

veya proje klasor ismiyle

```
npm create vite@latest my-new-react
```

komutu ile kurulumu baslatabilirsiniz.

Sonra terminalde `cd proje-adi`ile proje klasorune gidip `npm install` ile gerekli npm paketlerini yukleyebilirsiniz.

Sonra projeyi developer modda calistirmak icin:

`npm run dev`

komutunu kullanabilirsiniz.

### Vite template ile React kurulumu

Vite de bircok hazir template bulunmakta React icin bu:

```
npm create vite@latest proje-klasor-adi -- --template react
```

### NextJS ile React kurulumu

NextJS ile ilgili daha sonra ayri bir basik acacagim ancak kisaca bahsetmek gerekirse;

**NextJs** tam yığın (fullstack) web uygulamaları oluşturmaya yönelik bir React çerçevesidir. Kullanıcı arayüzleri oluşturmak için React Components'ı, ek özellikler ve optimizasyonlar için Next.js'yi kullanabilirsiniz.

Next.js ayrıca React için gereken paketleme, derleme ve daha fazlası gibi araçları da soyutlar ve otomatik olarak yapılandırır. Bu, yapılandırmayla zaman harcamak yerine uygulamanızı oluşturmaya odaklanmanıza olanak tanır.

NextJs asagida bulunan ve React projelerinizde ihtiyac halinde kurmaniz gereken ve kurulumdaki bir cok uyum ve zaman sorununu ortadan kaldiran ozellikleri icinde barindirir. Bunlardan bazilari:

| Özellik       | Aciklama                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Routing       | Düzenleri, iç içe yönlendirmeyi, yükleme durumlarını, hata işlemeyi ve daha fazlasını destekleyen, Sunucu Bileşenleri üzerine kurulu, dosya sistemi tabanlı bir yönlendirici.                     |
| Rendering     | İstemci ve Sunucu Bileşenleriyle İstemci Tarafı ve Sunucu Tarafı Oluşturma. Next.js ile sunucuda Statik ve Dinamik İşleme ile daha da optimize edildi. Edge ve Node.js çalışma zamanlarında akış. |
| Data Fetching | Sunucu Bileşenlerinde eşzamansız/beklemede basitleştirilmiş veri getirme ve istek notu alma, verileri önbelleğe alma ve yeniden doğrulama için genişletilmiş bir getirme API'si.                  |
| Styling       | CSS Modülleri, Tailwind CSS ve JS'de CSS dahil olmak üzere tercih ettiğiniz stil yöntemleri için destek                                                                                           |
| Optimizations | Uygulamanızın Önemli Web Verilerini ve Kullanıcı Deneyimini geliştirmek için Görüntü, Yazı Tipleri ve Komut Dosyası Optimizasyonları                                                              |
| TypeScript    | Daha iyi tür kontrolü ve daha verimli derlemenin yanı sıra özel TypeScript Eklentisi ve tür denetleyicisi ile TypeScript için geliştirilmiş destek.                                               |
