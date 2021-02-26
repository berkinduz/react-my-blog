const posts = [
  {
    title: "Lorem Ipsum Nedir?",
    details: `
    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
    Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar
    uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney
    College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum
    pasajında geçen ve anlaşılması en güç sözcüklerden biri olan
    'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde
    kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
    tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve
    Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden
    gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans
    döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan
    "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan
    gelmektedir. 1500'lerden beri kullanılmakta olan standard Lorem Ipsum
    metinleri ilgilenenler için yeniden üretilmiştir. Çiçero tarafından
    yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
    alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden
    üretilmiştir.`,
    date: "26 Şubat 2021",
  },
  {
    title: 'Ben Size Ne Dedim?',
    details: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor rhoncus lorem vitae gravida. Vestibulum bibendum metus vel varius molestie. In quis tincidunt quam. Fusce vulputate ligula sed scelerisque vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin varius id nibh non accumsan. Integer elementum consectetur risus et bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae ligula a nunc ullamcorper molestie non ut diam. In arcu felis, ultrices eget est sit amet, tincidunt cursus mi. Etiam auctor urna vitae urna luctus volutpat sit amet quis nibh. Fusce purus neque, accumsan vitae fermentum eget, tristique ut erat. Praesent erat turpis, cursus ac dignissim eu, bibendum et nunc. Vivamus sollicitudin elementum luctus. Mauris et ullamcorper ante.
Praesent sed pharetra ligula. Curabitur eu orci lacinia, pharetra dui sed, suscipit magna. Ut sed massa bibendum, aliquet nisl rutrum, laoreet elit. Ut sagittis tincidunt urna. Mauris congue leo velit, quis fringilla ex facilisis eu. Ut fringilla finibus elit in rutrum. Morbi eu lorem quis dui fermentum sagittis quis ut leo. In condimentum ligula sed nulla tristique, id mollis augue scelerisque. Aenean et metus quis lectus facilisis imperdiet. Aliquam tincidunt in metus sit amet fringilla. Praesent pharetra velit dui, interdum iaculis quam elementum at. Aliquam ut tortor ut augue fermentum dictum.
Morbi eu dignissim erat, sit amet bibendum ante. In fringilla laoreet justo, et fermentum urna condimentum ut. Etiam at pretium diam. Cras eu maximus eros. In ut erat fringilla, gravida eros eu, auctor lectus. Ut nec luctus lacus. Integer bibendum, neque ut bibendum aliquet, ex purus ornare libero, at cursus risus tellus lacinia dolor. Aliquam ex dolor, elementum eleifend dapibus quis, sodales eget enim. Proin elit est, elementum at dolor nec, pharetra egestas quam. Nulla odio massa, luctus id pellentesque ac, consectetur in velit. Suspendisse luctus eget felis non suscipit. Donec dignissim, orci a imperdiet posuere, risus odio cursus nulla, vel commodo nunc lacus at augue. Aenean a vehicula dui. Sed sodales felis eu porta suscipit. Integer ullamcorper justo ut ante tincidunt, aliquet venenatis nibh laoreet. Duis cursus, sem et sollicitudin gravida, erat tortor pretium enim, in rhoncus neque eros a odio.
In hac habitasse platea dictumst. Proin non sodales lacus. Fusce eu mauris nulla. Donec lacinia enim sit amet risus blandit tristique quis at libero. Integer cursus sem augue, sed tempus elit viverra vitae. Quisque ac ante tincidunt, congue libero in, ultricies neque. Vivamus finibus erat eu sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec felis in ligula vulputate cursus. Etiam imperdiet turpis eu tellus auctor placerat. Suspendisse eget odio nibh. Duis mi magna, eleifend nec sem condimentum, sollicitudin placerat augue. Maecenas non ornare turpis, eget malesuada mauris.
Suspendisse eleifend nunc at eros sagittis mollis. Nam nec volutpat velit. Duis vestibulum quis arcu eget scelerisque. Sed vitae dolor sit amet felis scelerisque viverra ac in lectus. Nullam convallis lectus sapien, at pharetra leo facilisis et. Integer ac diam ac ipsum vehicula vehicula. Sed non felis vel arcu finibus.  
    `,
    date: "27 Şubat 2021"
  }
];

export default (req, res) => {
  res.json({posts});
};
