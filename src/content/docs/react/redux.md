---
title: Redux
description: React'da Redux kullanimi'.
slug: react-redux
sidebar:
  label: Redux
  order: 7
---

Redux, React uygulamalarında büyük ve karmaşık state'leri yönetmek için kullanışlı bir kütüphanedir. Özellikle bileşenler arası veri paylaşımı gereken ve büyüyen projelerde state yönetimini kolaylaştırır. Ancak her projede Redux kullanmak gerekli değildir; küçük projelerde React'ın kendi state yönetimi yeterli olabilir. Redux, büyüyen ve daha kompleks hale gelen projeler için daha ölçeklenebilir bir çözüm sunar.

Redux hakkında yazmadan önce, React'taki state yönetimi ve büyük projelerdeki sorunları hakkında kısaca konuşmak iyi olur. Çünkü bu sorunlar aslında Redux kullanmanın sebebini oluşturuyor.


# React'da State Yönetimi ve Sorunlar


## React'da State Yönetimi
React, bileşen tabanlı bir kütüphanedir ve her bileşenin kendi "state" (durum) dediğimiz bir veri yapısı vardır. State, bir bileşenin anlık verisini tutar ve bu veri değiştikçe bileşen kendini yeniden render eder (yeniden çizer). 

Örneğin, bir sayaç uygulaması düşünelim. Sayacın sayısının tutulduğu yer bileşenin state'idir ve her sayı değiştiğinde bileşen kendini günceller.

**Örnek: Basit Sayac Bileşeni**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayac: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}
```

Burada `count` bir state'tir ve `setCount` ile bu state'i güncelleyebiliriz. Fakat bu state sadece o bileşene özeldir ve başka bir bileşen bu state'e erişemez. 

İşte burada React'taki state yönetimi sınırlamaları ortaya çıkar.

## State Yönetiminin Sınırları & Props Drilling

Küçük ve basit uygulamalarda bu yöntem yeterli olabilir. Ancak, uygulama büyüdükçe bileşenler arasındaki veri paylaşımı daha karmaşık hale gelir. Örneğin, bir bileşende güncellenen state'in başka bir bileşende de görünmesini istiyorsanız, bu veriyi props yoluyla yukarı taşıyıp aşağıya geçirmek zorunda kalırsınız. Bu, "props drilling" denilen bir probleme yol açar. Yani veriyi, ilgili bileşene ulaştırabilmek için arada gereksiz birçok bileşene taşımak zorunda kalırsınız.

**Örnegin:** Bir alışveriş listesi uygulamanız olduğunu düşünelim. Kullanıcının eklediği ürünlerin hem üstteki menüde hem de alışveriş listesinde görünmesini istiyorsunuz. Bunun için state'i yukarıda bir ana bileşende tutup, bu veriyi çocuk bileşenlere props olarak geçirmeniz gerekir.

Props drilling, React uygulamalarında state yönetiminin ölçeklenebilirliğini zorlaştıran bir sorundur. Karmaşık uygulamalarda, Context API veya state yönetim kütüphaneleri gibi alternatifler kullanarak props drilling'den kaçınmak daha iyi bir yaklaşımdır.

### Nasıl Oluşur?

- Bir üst seviye bileşen (örneğin, bir App bileşeni), uygulamanın genel state'ini tutar.
- Bu state'in bir kısmının alt seviyedeki bir bileşende kullanılması gerekir.
- State'i doğrudan alt seviyedeki bileşene aktarmak yerine, arada bulunan tüm bileşenlere props olarak geçirilir.
- Alt seviyedeki bileşen, props aracılığıyla kendisine ulaşan state'i kullanır.

### Sorunlar:

- Kod Karmaşıklığı: Çok sayıda bileşen arasında gereksiz props geçişi, kodun okunabilirliğini ve bakımını zorlaştırır.
- Performans Sorunları: Her props değişikliğinde arada bulunan tüm bileşenler yeniden render edilebilir, bu da performans sorunlarına yol açabilir.
- Esneklik Kaybı: Bileşenler arası sıkı bir bağ oluşturur, bu da kodun yeniden kullanılabilirliğini ve esnekliğini azaltır.

### Çözümler:

- Context API: React'ın Context API'si, props drilling'i önlemek için bir mekanizma sunar. Bir context oluşturarak state'i global olarak kullanılabilir hale getirebilirsiniz.
- State Yönetim Kütüphaneleri (Redux, Zustand, vb.): Redux gibi state yönetim kütüphaneleri, merkezi bir store kullanarak state'i tüm uygulamada erişilebilir hale getirir ve props drilling sorununu çözer.

# Redux Giris?
## Redux Nedir?

Redux, JavaScript uygulamaları için öngörülebilir bir state yönetim kütüphanesidir. Özellikle React ile kullanıldığında, uygulamanın her yerindeki state'i tek bir merkezi yerde toplar ve bu merkezi yerden yönetir. Redux'un amacı, uygulamanın state'ini yönetmeyi daha kolay ve öngörülebilir hale getirmektir.

## Redux Neden Kullanılır?

Redux'un kullanımının ana sebeplerinden biri, uygulamanın genelinde state yönetimini merkezileştirmesi ve böylece bileşenler arası veri akışını kolaylaştırmasıdır. Bu, özellikle büyük ve karmaşık kullanıcı arayüzleri için önemlidir.

Redux, state'inizi merkezi bir store'da toplar ve bileşenler bu store'dan gerekli verileri alır veya store'daki verileri güncelleyebilir. Bu şekilde, bileşenler arası veri paylaşımı çok daha temiz ve yönetilebilir hale gelir.


**Redux üç temel prensibe dayanır:**

1. **Tek Bir Merkezi State (Store):** Tüm uygulamanızın state'i tek bir yerde saklanır. Bu merkezi state, uygulamanın herhangi bir yerinden erişilebilir hale gelir.
2. **State Yalnızca Eylemler (Actions) ile Değişir:** State doğrudan değiştirilemez, ancak eylemler aracılığıyla değişiklikler yapılabilir. Uygulamanın state'ini değiştirmek için yalnızca belirli eylemler (actions) tetiklenir. Bu eylemler, state'in nasıl değişeceğini tanımlar.
3. **Saf Fonksiyonlar (Reducers) ile Değişim:** State'in değişimini gerçekleştiren fonksiyonlar saf fonksiyonlardır. Yani aynı girdiye her zaman aynı çıktıyı verirler ve yan etkilere sahip değildirler.

## Redux Nasıl Çalışır?

Redux, aşağıdaki kavramlarla çalışır:

1. **Store (Depo):** Uygulamanın tüm state'ini saklayan merkezi yer. Uygulamanızın state'ini tek bir noktada toplar.
2. **Actions (Eylemler):** Uygulamada bir state değişikliği tetikleyen olaylardır. Örneğin, "ürün ekle" veya "ürün sil" gibi işlemler birer action'dır.
3. **Reducers (Azaltıcılar):** State'i güncelleyen saf fonksiyonlardır. Reducer, hangi action'ın tetiklendiğine bağlı olarak state'i günceller.
4. **Dispatch (Gönderme):** Bir action'ı tetikleyen işlevdir. Yani kullanıcı bir butona bastığında bir action dispatch edilir ve bu action reducers tarafından işlenir.

## Redux ile React Nasıl Kullanılır?

Bir sonraki sayfada Redux'in React ile kullanimini anlatmaya calisacagim.

