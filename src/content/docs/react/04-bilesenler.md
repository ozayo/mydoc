---
title: React Components (Bilesenler)
description: React Bilesenler (components) hakkinda bilgi.
slug: react-component
sidebar:
  label: Components
  order: 4
---

import { Tabs, TabItem } from "@astrojs/starlight/components";

React elementler ve componentler, React'te UI oluşturmak için kullanılan iki temel yapıdır. Elementler, UI'nin temel yapı taşlarını oluştururken, component'ler bu yapı taşlarını bir araya getirerek daha karmaşık UI'ler oluşturmaya yardımcı olur.

Bu sayfada bileşenlerin ne olduğu ve nasıl kullanıldığı hakkında temel bilgi verilecektir.

:::note
Ancak bileşenleri daha iyi kullanabilmek için sonraki bölümlerde anlatılan JSX, Props, State, Conditional rendering ve Composition gibi kavramların ne olduğunu iyi anlamamız gerekiyor.
:::

## React Element Nedir?

React elementler, React'te UI'yi oluşturmak için kullanılan temel yapılardır. Bir React elementi, bir HTML etiketi, bir SVG elementi veya bir JavaScript nesnesi olabilir. Elementler, `JSX` (JavaScript XML) adı verilen özel bir dil kullanılarak tanımlanır.

JSX Örneği:

```js
const element = <h1>Merhaba, Dünya!</h1>;
```

Bu kodda, `<h1>Merhaba, Dünya!</h1>` HTML etiketi bir React elementine dönüştürülmüştür.

### React Element ve Component Arasındaki Farklar:

#### Elementler:

- Temel yapılardır.
- Tekrar kullanılabilirler, ancak state ve lifecycle fonksiyonları gibi component özelliklerine sahip değillerdir.
- HTML, SVG veya JavaScript nesnesi gibi farklı türlerde olabilirler.
- JSX kullanılarak tanımlanırlar.

#### Componentler:

- Tekrar kullanılabilir kod parçalarıdır.
- State ve lifecycle fonksiyonları gibi özelliklere sahip olabilirler.
- HTML, CSS ve JavaScript kodundan oluşabilirler.
- Sınıf tabanlı veya fonksiyon tabanlı olabilirler.

## React Component Nedir?

React component'leri, kullanıcı arayüzünü (UI) oluşturmak için kullanılan, tekrar kullanılabilir kod parçalarıdır. Her component, belirli bir işlevi yerine getirir ve kendi HTML, CSS ve JavaScript koduna sahip olabilir. Component'ler, bir uygulamayı daha küçük, yönetilebilir parçalara ayırmaya yardımcı olur ve bu da kodun daha okunabilir, bakımı kolay ve yeniden kullanılabilir olmasını sağlar.

**React Component Nasıl Oluşturulur?**

React component'leri iki şekilde oluşturulabilir:

### Sınıf Tabanlı Component'ler:

Sınıf tabanlı component'ler, `React.Component` sınıfından türeyen JavaScript sınıflarıdır.

Sınıf tabanlı component'ler, JavaScript'te `class` anahtar sözcüğü ile tanımlanmış ve `React.Component` sınıfından miras alan sınıflardır. Bu, sınıf tabanlı component'lerin `React.Component` sınıfının tüm özelliklerini ve fonksiyonlarını miras aldığı anlamına gelir.

**Miras alma**, bir sınıftan başka bir sınıfa özelliklerin ve fonksiyonların aktarılmasıdır. Bu sayede, türeyen sınıf (bu durumda, sınıf tabanlı component) miras aldığı özellik ve fonksiyonları kullanabilir.

**React.Component sınıfı**, React'te component'ler oluşturmak için kullanılan temel sınıftır. Bu sınıf, component'lerin render edilmesi, props'ların işlenmesi ve yaşam döngüsü olaylarının yönetilmesi gibi temel fonksiyonları sağlar

Bir sınıf tabanlı component oluşturmak için aşağıdaki adımları izleyebilirsiniz:

1. `class` anahtar sözcüğü ile bir sınıf tanımlayın.
2. Sınıfın `extends` anahtar sözcüğünü kullanarak `React.Component` sınıfından miras alın.
3. Sınıfın `render()` methodunu override edin. Bu method, component'in HTML kodunu döndürür.
4. Component'i `export default` kullanarak dışa aktarın.

**Örnek:**

```js
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Merhaba, Dünya!</h1>
      </div>
    );
  }
}

export default MyComponent;
```

Bu kodda, `MyComponent` isimli bir sınıf tanımlanmıştır. Bu sınıf, `React.Component` sınıfından miras almaktadır. Sınıfın `render()` methodu, `<h1>Merhaba, Dünya!</h1>` HTML kodunu döndürmektedir.

### Fonksiyon Tabanlı Component'ler:

Fonksiyon tabanlı component'ler, JavaScript fonksiyonlarıdır. Bir fonksiyon tabanlı component oluşturmak için aşağıdaki adımları izleyebilirsiniz:

1. Bir JavaScript fonksiyonu oluşturun.
2. Fonksiyonun içinden JSX kodunu döndürün.
3. Component'i `export default` kullanarak dışa aktarın.

**Örnek:**

```js
import React from "react";

const MyComponent = () => {
  return (
    <div>
      <h1>Merhaba, Dünya!</h1>
    </div>
  );
};

export default MyComponent;
```

### Sınıf/Fonksiyon Hangisi?

Günümüzde React'te fonksiyon tabanlı component'ler, sınıf tabanlı component'lere göre daha fazla kullanılmaktadır. Bunun birkaç sebebi vardır:

#### Fonksiyon Tabanlı Component'lerin Avantajları:

- **Daha basit ve kullanımı kolay:** Fonksiyon tabanlı component'ler, sınıf tabanlı component'lere göre daha az kod içerir ve daha basit bir yapıya sahiptir. Bu da onları daha kolay öğrenmenizi ve kullanmanızı sağlar.
- **Daha performant:** Fonksiyon tabanlı component'ler, genellikle sınıf tabanlı component'lerden daha performanttır. Bunun sebebi, fonksiyon tabanlı component'lerin, React'in yeni Hook API'sini kullanarak daha az kodla daha fazla işlevsellik sunabilmesidir.
- **Daha okunabilir:** Fonksiyon tabanlı component'lerin kodu, sınıf tabanlı component'lerin koduna göre daha okunabilir ve anlaşılır.

#### Sınıf Tabanlı Component'lerin Avantajları:

- **Daha karmaşık işlevler için daha uygun:** Sınıf tabanlı component'ler, daha karmaşık işlevsellik sunan component'ler için daha uygundur.
- **Durum yönetimi için daha fazla seçenek:** Sınıf tabanlı component'ler, `this.state` gibi dahili durum yönetimi seçenekleri sunar.

:::tip[Tavsiye]
Yeni bir React projesi başlatıyorsanız, fonksiyon tabanlı component'leri kullanmanızı tavsiye ederim. Fonksiyon tabanlı component'ler, daha basit, daha performant ve daha kolay kullanılabilir. Ancak, daha karmaşık işlevsellik sunan bir component'e ihtiyacınız varsa, sınıf tabanlı component'leri de kullanabilirsiniz.
:::

## React Component'lerin Avantajları

React component'leri kullanmanın birçok avantajı vardır:

- **Tekrar Kullanılabilirlik:** Component'ler, birden fazla yerde tekrar kullanılabilir. Bu da kodun daha az tekrarlı olmasını ve daha kolay bakımı yapılmasını sağlar.
- **Yönetilebilirlik:** Component'ler, bir uygulamayı daha küçük, yönetilebilir parçalara ayırmaya yardımcı olur. Bu da kodun daha okunabilir ve anlaşılır olmasını sağlar.
- **Bakım Kolaylığı:** Component'ler, kodun daha kolay test edilmesini ve hata ayıklanmasını sağlar.
- **Performans:** Component'ler, UI'nin sadece güncellenen parçalarının yeniden oluşturulmasını sağlayarak performansı optimize etmeye yardımcı olabilir.

## Bilesen import & Export

Bileşenler aynı kod bloğu içinde yazılıp çağrılabilrler. Ancak en yaygın kullanımı bileşenleri `components` klasörü içinde oluşturup daha sonra kullanacağımız yerlerde çağırmaktır (import).

Bu konu ilerleyen bölümlerde daha detaylı anlatılacaktır. Şimdilik aşadaki örnek yeterli olacaktır.

<Tabs>
  <TabItem label="App.js">
  ```js
  import Badge from './Badge.js';

export default function App() {
  return (
    <Badge />
  );
}
  ```
  </TabItem>
  <TabItem label="Badge.js">
  ```js
  const Badge = ({ size = "base", color = "primary", icon, children }) => {
  return (
    <div className="inline-block">
      <span className={`badge ${size} ${color}`}>
        {icon && <span className="badge-icon">{icon}</span>}
        <span className="badge-text">{children}</span>
      </span>
    </div>
  );
};

export default Badge;
```
  </TabItem>
  <TabItem label="SingleApp.js">
  ```js
  // Bu ornekte ayni kod icinde olusturdugumuz bileseni yine ayni yerde kullanabiliyoruz.
  function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
  ```
  </TabItem>
</Tabs>

## Bilmemiz gerekenler

Bileşenleri daha iyi öğrenebilmek ve daha verimli kullanabilmek için devam eden sayfalardaki konuları iyi anlamak önemli.

Bunlar:

- JSX
- Props
- Conditional Rendering

## Kaynaklar:

- [React Function Components](https://www.robinwieruch.de/react-function-component/)
- [Types of React Components](https://www.robinwieruch.de/react-component-types/)
