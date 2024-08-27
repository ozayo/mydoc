---
title: React Native Temel Bilgiler
description: React Native için temel bilgiler

slug: reactnative-temel-bilgiler
sidebar:
  label: RN Temel Bilgiler
  order: 2
---

Bir web geliştirici olarak React Native (RN) nasıl çalıştığını ve mantığını anlamaya çalışalım ve bazı temel kavramları öğrenelim.

## Nedir bu RN

Mobil gelistirmede aslinda bir standart yok. Cunku IOS ve Android kendi mimarilerini kullaniyor ve buna uygun gelistirme ortamlari sunuyorlar.
Android geliştirmede görünümleri Kotlin veya Java'da yazarsınız; iOS geliştirmede Swift veya Objective-C kullanırsınız.

Peki her ikisi icinde gelistirme yapmak istersek ne yapacagiz?

Iste RN'nin farki burada ortaya cikiyor.

React Native ile bu görünümleri React bileşenlerini kullanarak JavaScript ile çağırabilirsiniz. Çalışma zamanında React Native, bu bileşenler için karşılık gelen Android ve iOS görünümlerini oluşturur.


## Ana bileşenler

Asagidaki tabloda RN'de kullanilan ana bilesenlerden bazi ornekler ve Android/IOS ve web karsiliklarini gorebilirsiniz.

Ornegin RN'de `<div>` kullanma ihtiyaciniz var bunun RN'de karsiligi `<View>` bileseni kullanmak. Bu sayede bu div blogunuz her bir ortamda sorunsuz gorunecektir.



| RN UI COMPONENT | ANDROID VIEW   | IOS VIEW         | WEB ANALOG              | DESCRIPTION                                                                                           |
| ------------------------- | -------------- | ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| `<View>`                  | `<ViewGroup>`  | `<UIView>`       | A non-scrolling `<div>` | A container that supports layout with flexbox, style, some touch handling, and accessibility controls |
| `<Text>`                  | `<TextView>`   | `<UITextView>`   | `<p>`                   | Displays, styles, and nests strings of text and even handles touch events                             |
| `<Image>`                 | `<ImageView>`  | `<UIImageView>`  | `<img>`                 | Displays different types of images                                                                    |
| `<ScrollView>`            | `<ScrollView>` | `<UIScrollView>` | `<div>`                 | A generic scrolling container that can contain multiple components and views                          |
| `<TextInput>`             | `<EditText>`   | `<UITextField>`  | `<input type="text">`   | Allows the user to enter text                                                                         |


Tum ana bilesenleri gormek ve detaylarini ogrenmek icin lutfen asagidaki linki inceleyin:

https://reactnative.dev/docs/components-and-apis

## React Native React kullanir

RN React uzerine insa edilmistir. Bu demek oluyor ki React'da kullandiginiz; 
- components
- JSX
- props
- state

ozelliklerini React Nativede de kullanabilirsiniz. 

Detayli bilgi: https://reactnative.dev/docs/intro-react