---
title: React JSX
description: JSX nedir nasil kullanilir.
slug: jsx-nedir
sidebar:
  label: JSX
  order: 5
---

## JSX Nedir?

JSX, JavaScript kodunun içine HTML benzeri kod yazmamızı sağlayan bir sözdizimidir. JSX, React'te UI oluşturmak için kullanılır ve HTML'e çok benzemesine rağmen bazı önemli farklılıkları vardır.

## JSX'in Avantajları:

- Daha okunabilir kod: JSX, HTML'e benzediği için kodun daha okunabilir ve anlaşılır olmasını sağlar.
- Daha kolay kod yazma: JSX, HTML ve JavaScript'i tek bir kodda birleştirerek kod yazmayı kolaylaştırır.
- Daha az hata: JSX, hataları compile sırasında yakalayarak hataları azaltmaya yardımcı olur.

## React'te JSX Kullanımı

**JSX'te HTML elementleri kullanın:**

```js
const element = (
  <div>
    <h1>Merhaba, Dünya!</h1>
    <p>Bu bir paragraf.</p>
  </div>
);
```

**JSX'te JavaScript ifadeleri kullanın:**

```js
const name = "John Doe";

const element = <h1>Merhaba, {name}!</h1>;
```

JSX’te süslü parantezler arasına dilediğiniz herhangi bir JavaScript ifadesini yazabilirsiniz. Örneğin, `2 + 2`, `user.firstName`, veya `formatName(user)` gibi JavaScript ifadelerini kullanabilirsiniz.

Aşağıdaki örnekte, bir JavaScript fonksiyonun çağrısının sonucu JSX içerisine gömülmektedir. Yani `formatName(user)`, `<h1>` elemanının içerisine konulmaktadır.

```js
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

## JSX Kuralları

### Tek bir ana (kök) öğeyi döndür

Bir bileşenden birden fazla öğe döndürmek için bunları tek bir üst etiketle sarın. Örneğin, bir `<div>` kullanabilirsiniz:

```html
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
  <ul>
    ...
  </ul>
</div>
```

Kodunuza fazladan bir `<div>` eklemek istemiyorsanız bunun yerine `<>` ve `</>` yazabilirsiniz:

```html
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```

### Tüm etiketleri kapat

JSX, etiketlerin açıkça kapatılmasını gerektirir: `<img>` gibi kendi kendine kapanan etiketler `<img />` haline gelmeli ve `<li>portakallar` gibi sarma etiketleri `<li>portakallar</li>` olarak yazılmalıdır.

```html
<>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>
```

### camelCase kullan

Etiket isimleri camelCase formatında yazılmalıdır.

JSX, JavaScript'e dönüşür ve JSX'te yazılan nitelikler, JavaScript nesnelerinin anahtarları haline gelir. Kendi bileşenlerinizde genellikle bu nitelikleri değişkenlere okumak isteyeceksiniz.
Ancak JavaScript'in değişken adları konusunda sınırlamaları vardır. Örneğin adları tire içeremez veya `class` gibi ayrılmış kelimeler olamaz.

Bu nedenle React'ta birçok HTML ve SVG özelliği camelCase'e yazılmıştır.

Örneğin, `stroke-width` yerine `strokeWidth` kullanırsınız.

`Class` ayrılmış bir kelime olduğundan, React'te bunun yerine ilgili DOM özelliğinin adını taşıyan `className` yazarsınız:

```
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  className="photo"
/>
```

:::tip[Tum liste:]
Tüm bu nitelikleri (atributes) [Bu listede bulabilirsiniz.](https://react.dev/reference/react-dom/components/common).
:::

### JS ifadeleri süslü parantez içinde yazılmalıdır.

JSX'te, HTML elementleri ile birlikte JavaScript ifadelerini de kullanabilirsiniz. Bu, dinamik içerik oluşturmak ve UI'yi daha etkileşimli hale getirmek için çok kullanışlıdır.

**JavaScript ifadeleri süslü parantez içinde yazılmalıdır.**

Örnekler:

```js
const name = "John Doe";

const element = <h1>Merhaba, {name}!</h1>;
```

Bu kodda, `name` değişkeninin değeri `<h1>` etiketinin içine yerleştirilir.

Mevcut zamanı gösteren bir saat:

```js
const time = new Date().toLocaleTimeString();

const element = (
  <div>
    <h1>Saat: {time}</h1>
  </div>
);
```

Bir sayıyı iki ile çarpan bir fonksiyon:

```js
function double(number) {
  return number * 2;
}

const element = (
  <div>
    <h1>Sayı: {double(5)}</h1>
  </div>
);
```

**Daha fazla bilgi**
https://react.dev/learn/javascript-in-jsx-with-curly-braces

# Sonraki Sayfalar:

Component olusturmaya gecmeden iyice ogrenelim:

- Props https://react.dev/learn/passing-props-to-a-component ve https://www.robinwieruch.de/react-pass-props-to-component/
- Conditional Rendering https://react.dev/learn/conditional-rendering ve https://www.robinwieruch.de/conditional-rendering-react/
- Component Composition https://www.robinwieruch.de/react-component-composition/
- ...
