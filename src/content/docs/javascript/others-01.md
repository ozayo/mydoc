---
title: use strict
description: Modern mod, "use strict"
sidebar:
  label: Use strict
  order: 4
---

# Modern mod, "use strict"

Uzun süredir JavaScript uyumluluk sorunu olmadan gelişmeye devam etmektedir. Yeni özellikler eklenmekte fakat eski özellikler olduğu gibi kalmaktadır.

Bu eski kodlarınızın çalışacağı garantisini verir. Kötü yanı ise JavaScript geliştiricileri tarafından eskiden verilen kötü bir kararın veya hatanın sürekli tekrar edilmesine neden olur.

ECMAScript 5 (ES5) standardı 2009 yılında kabul edilmiştir. Bu standart yeni özellikler eklediği gibi eskide olanlardan bazılarını da düzenlemiştir. Eski kodun çalışabilirliğini garanti altına almak için çoğu düzenleme varsayılan olarak kapalı durumda gelir. Bunları açmak için "use strict" kullanılmalıdır.

## “use strict”

Bu direktif için kod dosyanızın başına "use strict" veya 'use strict' yazmanız yeterlidir. Artık kodunuz “modern” JavaScript olarak çalışmaktadır.

Örnek :

```javascript
"use strict";

// Bu kod modern JavaScript olarak çalışır
```

"use strict" birden çok fonksiyonda kullanılacağı gibi tek fonksiyon için de kullanılabilir. Fakat genelde tüm dosya için kullanılır.

## Her zaman “use strict” kullanın

"use strict" ile varsayılan modun farkları üzerinden tekrar geçilecektir.

Gelecek bölümlerde dilin özelliklerini öğrendikçe bu sıkı mod ile varsayılan modun farkları hakkında bilgi verilecektir. Aslında çok fark olmamasına rağmen sıkı mod yazdığımız kodu daha iyi hale getirir.

Şu anda genel hatlarıyla bilmek yeterli olacaktır.

1. "use strict" JavaScript motorunda varsayılan ile “modern” mod arasında geçiş yapmaya yarar. İleride kodunuza ne gibi artılar sağlayacağını göreceksiniz.
2. Sıkı moda dosyanın başına "use strict" direktifiyle geçilebilir. Bu bize “sınıf” veya “modül” gibi dil özelliklerini kazandırır.
3. Sıkı mod tüm modern tarayıcılar tarafından desteklenir.
4. Bundan sonra tersi söylenmedikçe her yazacağınız örneklerde "use strict" ile başlayacağınız varsayılmaktadır.

:::tip[Did you know?]
Astro helps you build faster websites with [“Islands Architecture”](https://docs.astro.build/en/concepts/islands/).
:::
:::caution
If you are not sure you want an awesome docs site, think twice before using [Starlight](../../).
:::

### Kaynak

- [https://tr.javascript.info/strict-mode](https://tr.javascript.info/strict-mode).
