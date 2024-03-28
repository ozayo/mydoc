---
title: NextJS
description: Next Js
slug: nextjs-nedir
sidebar:
  label: NextJs
  order: 1
---

## Next JS Nedir

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
| TypeScript    | Daha iyi tür kontrolü ve daha verimli derlemenin yanı sıra özel TypeScript Eklentisi ve tür denetleyicisi ile TypeScript için geliştirilmiş destek.       

### NextJs kullanımına neden ihtiyaç duyuldu.

**React ile çalışan bir web sitesi yapmak mümkünken neden Next Js gibi ayrı bir framework'e ihtiyaç duyuldu?**

React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir ve tek sayfalık uygulamalar (SPA) oluşturmak için mükemmeldir. Ancak, React'ın temel altyapısı sadece istemci tarafında çalışır, bu da bazı zorlukları ve eksiklikleri beraberinde getirir. İşte tam da bu noktada Next.js devreye girer. Next.js, React tabanlı web uygulamaları geliştirmek için kullanılan bir çerçevedir ve React'ın sunduğu bazı temel sorunları çözer. Next.js'e ihtiyaç duyulmasının ana nedenleri şunlardır:

1. **Sunucu Tarafı Oluşturma (SSR - Server-Side Rendering):**
React ile oluşturulan bir SPA, tarayıcıda çalışır ve içerik dinamik olarak JavaScript kullanılarak oluşturulur. Bu, arama motoru optimizasyonu (SEO) için sorunlara yol açabilir çünkü arama motorları uygulamanın içeriğini doğru bir şekilde taramakta zorlanabilir. Next.js ile sunucu tarafı oluşturma (SSR) kullanarak, uygulamanın ilk yüklenmesinde gerekli olan tüm içeriği sunucuda oluşturabilir ve tarayıcıya hazır bir HTML sayfası gönderebilirsiniz. Bu, özellikle SEO açısından önemlidir.

2. **Statik Site Oluşturma (SSG - Static Site Generation):**
Next.js, web sitesinin tamamının önceden oluşturulup statik dosyalar halinde sunulmasına olanak tanır. Bu, yüksek performanslı ve güvenli siteler oluşturmak için idealdir. Statik site oluşturma, özellikle bloglar, belgeler ve pazarlama siteleri gibi değişikliğe uğramayan içeriğe sahip siteler için mükemmeldir.

3. **Dosya Tabanlı Yönlendirme:**
Next.js, sayfaların ve yönlendirmelerin dosya sistemi üzerinden kolayca yönetilmesini sağlar. Bu, yeni bir sayfa oluştururken ek yapılandırma gerektirmeyen bir yaklaşımdır. Dosya adları URL yollarını otomatik olarak oluşturur, bu da geliştirme sürecini basitleştirir.

4. **API Rotaları:**
Next.js ile, API uç noktalarını kolayca oluşturabilir ve yönetebilirsiniz. Bu, veri alışverişi veya veritabanı işlemleri gibi sunucu tarafı işlevlerini uygulamanıza entegre etmenize olanak tanır.

5. **Otomatik Kod Bölme:**
Next.js, uygulamanın performansını artırmak için otomatik kod bölme sağlar. Bu, yalnızca gerektiğinde gerekli JavaScript'in yüklenmesi anlamına gelir, böylece uygulamanızın ilk yükleme süresi önemli ölçüde iyileşir.

### Yararli Kaynaklar

- NextJS app router icin Dark Light mod kurulumu: https://nextjsdev.com/dark-mode-in-next-js-13-app-using-tailwind-css/
