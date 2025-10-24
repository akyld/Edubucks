import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, ChevronDown } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import themeConfig from '../theme/themeConfig';

const BlogDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Blog content database - you can expand this for other topics
  const blogContent = {
    'neler-yapiyoruz': {
      title: 'Yurt Dışı Eğitim Danışmanlığı',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'EDUBUCKS',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'paragraph',
          text: 'Günümüzde yurt dışında eğitim almak birçok öğrencinin hayalidir. Ancak bu eğitime karar vermek ve doğru seçimleri yapmak uzman desteğini gerektirir. Bu isteğe sahip olan öğrencilerin öncelikle hangi bölümü seçeceklerine karar vermeleri beklenir. Ardından da o alanda eğitim veren okulların araştırılması yapılmalıdır. Sonrasında ise, seçilen okullara başvuru süreci başlar.'
        },
        {
          type: 'paragraph',
          text: 'Başvuru sürecinde her okulun giriş şartlarının farklı olduğu unutulmamalıdır. Örneğin; Amerika’daki okulların giriş şartları ile farklı bir ülkedeki okulların giriş şartları aynı olmayabilir. Okulların öğrencilerden istediği not ortaması ve akademik başarılar okuldan okula farklılık gösterebilir. Bunun sonucunda oluşturulan kriterler doğrultusunda öğrencinin okula kabul edilip edilmeyeceğine karar verilebilir. Bu şartların iyi bilinmesi sürecin hızlı ilerlemesinde etkili olmaktadır.'
        },
        {
          type: 'paragraph',
          text: "Çağımızda Avrupa eğitim kriterleri tüm dünyada esas alınmaktadır. Avrupa'da eğitim, öğrencilerin aktif ve verimli bir eğitim hayatı olmasını hedefler. Dolayısıyla okullara yapılan başvurularda öğrencilerin sahip olduğu başarıların belgelenmesi gerekmektedir. Bu durum Kanada eğitim şartlarında da geçerlidir. Okullara yapılacak olan başvuruların titiz bir şekilde takip edilmesi gerekmektedir."
        },
        {
          type: 'paragraph',
          text: 'Sizlere bu konuda hizmet sunan Edubucks, yurt dışında üniversite eğitimi ve lise değişim programlarının başvurularını yönetmektedir. Öğrencilerin hayallerini gerçekleştirmek için çalışan Edubucks, uzman kadrosuyla profesyonel bir hizmet vermektedir. Bu bağlamda, okulların belirlenmesi, okullara başvuruların yapılması, süreç takibi ve sınavlar konusunda silere destek olmaktadır.'
        },
        {
          type: 'stats',
          items: [
            { value: '13+', label: 'Farklı Ülke' },
            { value: '7+', label: 'Profesyonel Program' },
            { value: '1200+', label: 'Başarılı Öğrenci' },
          ]
        },
        {
          type: 'buttons',
          items: [
            {
              icon: '🏫',
              title: 'Lise Değişim',
              description: 'Amerika ve Kanada’nın liselerinde Akademik Ay, Kısa Dönem ve Uzun Dönem programlara katılım göstererek Amerikalı ve Kanadalı öğrencilerle aynı sıralarda eğitim alabilir ve farklı ülkelerden gelen uluslararası öğrencilerle etkileşim halinde daha iyi bir geleceğe hazırlık yapabilirsiniz. Hayallerinize bir adım daha yaklaşmak için detaylı bilgiyi Yol Arkadaşınıza danışın.',
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
            {
              icon: '🏫',
              title: 'Üniversite',
              description: 'Dünyanın eğitimde önde gelen en iyi üniversitelerine hazırlanmak ve hedefleriniz doğrultusunda en doğru ülke ve üniversiteyi seçmek için doğru bilgiye sahip olmak gerekir. 16 farklı ülkede Dünya sıralamarında ilk 500’de bulunan üniversitelere başvurmak Edubucks’ın tecrübeli kadrosu ile oldukça kolay. Üniversite başvuruları doğru bir planlama ile çıkarılan yol haritası ile her bir öğrenci için detaylı bir şekilde analiz edilir ve gerçekleştirilir.',
              link: '/book-a-demo',
              buttonText: 'Hemen Başvur'
            }
          ]
        },
      ]
    },

    'we-are-edubucks': {
      title: 'We Are Edubucks',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'EDUBUCKS',
      image: '/weareedu.jpg',
      content: [
        {
          type: 'paragraph',
          text: '2012 yılında kurulan Edubucks, uluslararası eğitim danışmanlığı hizmeti vermekte olup, 6 yılı aşan hizmet hayatı boyunca sahip olduğu bilgi ve tecrübeyi siz değerli aileler ile paylaşmanın heyecanını ve mutluluğunu duymaktadır.'
        },
        {
          type: 'paragraph',
          text: 'Sahip olduğu uzman kadrosu ile kurulduğu ilk andan itibaren kaliteli hizmete verdiği önem ve zoru başarma azmi sayesinde kısa sürede bu alanda tanınmış ve ilkelerinden asla vazgeçmeyen bir kurum haline dönüşmüştür.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks, son 10 yıldır ülkemizde öğrenciler ve veliler arasında yaygın hale gelen “Kültürlerarası Öğrenci Değişim Programları” konusunda 5 adım formülasyonu ile “Doğru Zaman-Doğru Ülke ve Doğru Program” eşleştirmesinde uzmanlaşmıştır. Kaliteli uzman kadrosu ile günümüze kadar 1000’den fazla ortaokul ve lise öğrencisini en doğru eşleştirmelerle okullarına yerleştirmiş ve yıl boyunca yerinde ziyaretlerle Türkiye’de bir ilk olmayı başarmıştır.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks, öğrencilerini, yıl boyunca Uzman Danışman ve Returnee Danışman (programlara 10 yıl içerisinde katılmış uzman öğrenci) ile takip ederek oluşabilecek her türlü problemde anında müdahale ile yol arkadaşlığı yapmaktadır.'
        },
        {
          type: 'paragraph',
          text: 'Özel yetenekli öğrenciler için ise yeni kurulan “Edubucks Sport Academy” ile sporcu öğrencilere destek verip %100 burs sağlayarak lise ve üniversitelere yerleşmelerini sağlamaktadır. Yıl boyunca öğrencilerin gelişimleri ise uzman koçlar tarafından takip edilmektedir.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks’ın bir diğer hizmeti ise üniversite danışmanlığı konusunda dünyanın en iyi üniversitelerine en iyi burslar ile öğrenci yerleştirmek için minimum 2 yıllık yol haritaları çıkartmak ve süreçleri aylık olarak takip etmektir.'
        },
        {
          type: 'paragraph',
          text: 'Ayrıca Edubucks, eğitim kurumları için R.A.V.E. formülasyonu ile kurumların öz değerlerini uluslararası arenaya nasıl taşıyacakları konusunda bilgi paylaşımı yaparak oluşturdukları süreç haritaları sayesinde kurumların uluslararası arenaya çıkmalarını sağlamaktadır. Bu süreçte 10 farklı özel zincir okulu ve 5 farklı devlet okulu uluslararası arenaya çıkartılmıştır.'
        },
        {
          type: 'paragraph',
          text: '“Başarı ve sürekliliğin teminatı hizmette dürüstlük ve kalitedir.” prensibiyle çalışan Edubucks, ailelerin ve değerli öğrencilerin Yol Arkadaşı olmaya devam edecektir.'
        },
        // ... more content sections
      ]
    },

    'seminer-ve-etkinlikler': {
      title: 'Seminer ve Etkinlikler',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'EDUBUCKS',
      image: '/weareedu.jpg',
      content: [
        {
          type: 'paragraph',
          text: '2012 yılında kurulan Edubucks, uluslararası eğitim danışmanlığı hizmeti vermekte olup, 6 yılı aşan hizmet hayatı boyunca sahip olduğu bilgi ve tecrübeyi siz değerli aileler ile paylaşmanın heyecanını ve mutluluğunu duymaktadır.'
        },
        {
          type: 'paragraph',
          text: 'Sahip olduğu uzman kadrosu ile kurulduğu ilk andan itibaren kaliteli hizmete verdiği önem ve zoru başarma azmi sayesinde kısa sürede bu alanda tanınmış ve ilkelerinden asla vazgeçmeyen bir kurum haline dönüşmüştür.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks, son 10 yıldır ülkemizde öğrenciler ve veliler arasında yaygın hale gelen “Kültürlerarası Öğrenci Değişim Programları” konusunda 5 adım formülasyonu ile “Doğru Zaman-Doğru Ülke ve Doğru Program” eşleştirmesinde uzmanlaşmıştır. Kaliteli uzman kadrosu ile günümüze kadar 1000’den fazla ortaokul ve lise öğrencisini en doğru eşleştirmelerle okullarına yerleştirmiş ve yıl boyunca yerinde ziyaretlerle Türkiye’de bir ilk olmayı başarmıştır.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks, öğrencilerini, yıl boyunca Uzman Danışman ve Returnee Danışman (programlara 10 yıl içerisinde katılmış uzman öğrenci) ile takip ederek oluşabilecek her türlü problemde anında müdahale ile yol arkadaşlığı yapmaktadır.'
        },
        {
          type: 'paragraph',
          text: 'Özel yetenekli öğrenciler için ise yeni kurulan “Edubucks Sport Academy” ile sporcu öğrencilere destek verip %100 burs sağlayarak lise ve üniversitelere yerleşmelerini sağlamaktadır. Yıl boyunca öğrencilerin gelişimleri ise uzman koçlar tarafından takip edilmektedir.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks’ın bir diğer hizmeti ise üniversite danışmanlığı konusunda dünyanın en iyi üniversitelerine en iyi burslar ile öğrenci yerleştirmek için minimum 2 yıllık yol haritaları çıkartmak ve süreçleri aylık olarak takip etmektir.'
        },
        {
          type: 'paragraph',
          text: 'Ayrıca Edubucks, eğitim kurumları için R.A.V.E. formülasyonu ile kurumların öz değerlerini uluslararası arenaya nasıl taşıyacakları konusunda bilgi paylaşımı yaparak oluşturdukları süreç haritaları sayesinde kurumların uluslararası arenaya çıkmalarını sağlamaktadır. Bu süreçte 10 farklı özel zincir okulu ve 5 farklı devlet okulu uluslararası arenaya çıkartılmıştır.'
        },
        {
          type: 'paragraph',
          text: '“Başarı ve sürekliliğin teminatı hizmette dürüstlük ve kalitedir.” prensibiyle çalışan Edubucks, ailelerin ve değerli öğrencilerin Yol Arkadaşı olmaya devam edecektir.'
        },
        // ... more content sections
      ]
    },

    'lise-degisim-programlari': {
      title: 'Devlet Lise Değişim Programları',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'quote',
          text: 'Dünyaya kuş bakışı bakmak için kendinizi eğitin, her şeyin ne kadar küçük ve önemsiz olduğunu göreceksiniz.',
          author: 'Ernest Hemingway'
        },
        {
          type: 'paragraph',
          text: 'Milli Eğitim Bakanlığı’ndan onaylı olan lise değişim programları 14 ile 18 yaş aralığındaki lise öğrencileri için sunulmaktadır. Bu programlarla öğrenciler Türkiye’de sene kaybetmeden, yurt dışında eğitim alma imkanı elde ederler. Bu programlar sayesinde Türk öğrenciler yurt dışında seçkin liselerde eğitim almaktadır.'
        },
        {
          type: 'paragraph',
          text: 'Öğrenciler genel olarak eğitim için gittikleri ülkelerdeki ailelerin yanına yerleştirilmektedir. Aileler gidilen ülkenin hükümeti tarafından kurulmuş bir kurum tarafından özenle ve belli kriterler doğrultusunda belirlenmektedir. Bu sayede öğrenciler hem İngilizce seviyelerini geliştirmekte hem de farklı kültürleri daha yakından tanıma imkanı bulmaktadır.'
        },
        {
          type: 'paragraph',
          text: "Yurt dışında alınan eğitimler Türkiye’deki lise eğitimine denk kabul edilir. Bu da öğrencilerin yurt dışı dönüşlerinde sene kaybetmeden eğitimlerini tamamlama imkanı vermektedir. Öğrenciler bu programlara 1 yıl süre ile katılabileceği gibi 2, 3 ve 4 yıllık sürelerde de katılabilirler."
        },
        {
          type: 'heading',
          text: "Amerika’da Lise Eğitimi"
        },
        {
          type: 'paragraph',
          text: 'Eğitim için seçenekler arasındaki en popüler ülke Amerika’dır. Özellikle Amerika burslu lise programları öğrencilerin en çok talep ettiği seçenektir. Burslu eğitim almak sanıldığı kadar zor değildir. Ancak kontenjanların sınırlı sayıda olması nedeni ile öğrencilerin başarıları ve kişisel özellikleri Amerika’daki okullarda yüzde 20 ile 50 arası bir oranda burs alma durumunu belirleyecektir.'
        },
        {
          type: 'paragraph',
          text: 'Amerika’da eğitim almak hem iyi bir vizyon elde etmek hem de kişisel gelişim açısından çok önemlidir. Başvuru yapmak isteyen öğrenciler, Türkiye’deki müfredatlarına ek olarak sosyal, spor ve sanat içerikli dersler de alabilirler.'
        },
        {
          type: 'heading',
          text: "Kanada’da Lise Eğitimi"
        },
        {
          type: 'paragraph',
          text: 'Son yıllarda en çok ön plana çıkan ülkelerden biri de Kanada’dır. Kanada’da lise değişim programı ülkemiz tarafından da desteklenmektedir. Bu ülkede eğitim almak isteyen öğrenciler bir dönem, bir yıl ya da daha uzun sürelerde lise eğitimi alabilmektedir. Diğer ülkelerin aksine Kanada, özel okulların yanı sıra devlet okullarına da öğrenci kabul etmektedir.'
        },
        {
          type: 'paragraph',
          text: 'Kanada’da yaşayan pek çok aile de eğitim için büyük çoğunlukla devlet okullarını tercih etmektedir. Bu da eğitim kalitesinin devlet okullarında da oldukça yüksek olduğunu göstermektedir.'
        },
        {
          type: 'heading',
          text: "Yurt Dışında Lise Eğitimi için Şartlar"
        },
        {
          type: 'paragraph',
          text: 'Her ülkenin şartları farklılık gösterse de genel olarak ülkemizdeki öğrencilerin yurt dışında lise değişim programlarından yararlanabilmesi için minimum 8. Sınıf öğrencisi olması gerekmektedir. Yıl sonu not ortalamalarının 70 ve üzeri olması ve ayrıca İngilizce becerilerinin de yeterli seviyede olması gerekmektedir.'
        },
        {
          type: 'paragraph',
          text: 'İngilizce seviyesi düşük olan öğrenciler için hazırlık programları uygulanmaktadır. Tercih ettiğiniz okullara göre ek kabul şartları da olabilmektedir. Eğer burslu lise araştırması yapıyorsanız başarı durumunuzun daha yüksek olması önemlidir. Kanada ve Amerika gibi ülkeler İngilizcenin ana dili olarak kullanıldığı yerler olarak öğrencilerin dil gelişimi için çok önemli katkılar sağlayacak ve büyük imkanlar sunacaktır.'
        },
        {
          type: 'heading',
          text: "YURT DIŞINDA LİSE OKUMAYA UYGUN MUYUM?"
        },
        {
          type: 'list',
          items: [
            'Örgün Öğrenci Olmak ✔',
            'Yıl Sonu Notlarında Zayıfı Bulunmamak ✔',
            'İngilizceyi Yeterince Anlamak ve Konuşabilmek ✔',
            'İngilizce Yeterlilik Sınavından Başarıyla Geçmek ✔',
          ]
        },
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'ozel-lise-degisim-programlari': {
      title: 'Özel Lise Değişim Programları',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        
        {
          type: 'paragraph',
          text: 'Kadrosunda alanında uzman öğretmenlerin ve danışmanların yer aldığı Edubucks birçok farklı alanda danışmanlık hizmeti vermektedir. Hizmet planları kapsamlı ve kısaltılmış olarak ikiye ayrılmaktadır. Aynı zamanda mezuniyet sonrası burslu üniversite başvurusu kapsamında saatlik danışmanlık hizmetleri almak isteyenlere özel hizmetler de sunulmaktadır.'
        },
        
        {
          type: 'heading',
          text: "Kolej ve Üniversite Kabul Danışmanlığı"
        },
        {
          type: 'paragraph',
          text: 'Öğrencilere özel lise değişim alanında verilen danışmanlık hizmetleri hem kolejleri hem de üniversiteleri kapsamaktadır. Lise 11. ve 12. sınıflarında okuyan ve ders seçimlerinde zorlanan öğrenciler bu alandaki danışmanlık hizmetlerinden faydalanabilmektedir. Aynı zamanda yaz tatilleri boyunca çözülecek test kitapları, okunacak kitaplar ve zamanı ekonomik kullanma gibi pratik bilgilendirmeler de uzman eğitmenler tarafından verilmektedir. Burs ve finansal yardımlar konusunda ayrıntılı ve doğru bir şekilde bilgi almak isteyenler de üç farklı serviste sunulan danışmanlık departmanlarına başvuru yapabilmektedir.'
        },

        {
          type: 'heading',
          text: "Özel Çocuklara Özel Danışmanlık Seçenekleri"
        },
        {
          type: 'paragraph',
          text: 'Özel çocuklara özel ilgi gösteren danışmanlık kademeleri hem akademik hem de psikolojik olarak destekleyici bulunmaktadır. Çocukların belli başlı problemlerine karşı ebeveynlerin ve eğitmenlerin nasıl davranması gerektiğine dair çözümler sunulmaktadır. Öğrenme güçlüğü çeken çocuklara da özel ilgi gösterilip sorunları aşma noktasında da yardımcı olunmaktadır.'
        },
        {
          type: 'paragraph',
          text: "Her yaş grubuna ait, çocukları için garanti gelecek beklentisi olan ailelere alternatif okullar da önerilmektedir. Yaşanılan ilçeye en yakın okullar öne çıkan özellikleri ve kurumsal avantajları ile birlikte listelenerek ilgililere arz edilmektedir. Şu an Türkiye'de özel çocuklar için geliştirilmiş olan eğitim paketleri hakkında bilgiler almak uzman kadrolara sahip danışmanlık firmalarında mevcuttur."
        },
        {
          type: 'paragraph',
          text: "Yapılan görüşmeler yüz yüze olup, öncesinde telefon ya da internet üzerinden randevu alınabilir. Sonuç olarak tüm özel çocukların özel bir ilgiye ve bu kapsamda uzman yönlendirmelere ihtiyacı vardır. Alınan bu yardımlar ile birlikte hem garanti gelecek hem de kaliteli eğitim programları güvence altına alınmış olur. Deneyimli uzmanlar bu alandaki çalışmaları ile binlerce çocuğun eğitim hayatını çok daha nitelikli bir konuma yükseltmeyi başarmıştır."
        },
        {
          type: 'heading',
          text: "K-12 Kabulleri ve Sunulan Diğer Hizmetler"
        },
        {
          type: 'paragraph',
          text: 'K-12 kabulleri de tıpkı mezuniyet sonrası burslu üniversite hizmetlerinde olduğu gibi tüm öğrencilere açık olan diğer bir danışmanlık seçeneğidir. K-12 hizmetlerinde temel amaç okul seçmekte zorlanan ve kararsızlık yaşayan öğrencilere rehberlik etmektir. Bu alanda tüm kaynaklar araştırılarak öğrencilere özel en doğru seçimlerin yapılması sağlanmaktadır. Bu alanda hizmet veren tüm danışmanlar yılların tecrübesi ile hareket etmektedir. Söz konusu okul seçimleri hem devlet hem de özel okulları kapsamaktadır. Yurt dışında eğitim görmek isteyen kişiler de K-12 kabulleri kapsamında danışmanlık hizmetlerinden yararlanabilir.'
        },
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'ossd-cift-diploma-programı': {
      title: 'OSSD+ Çift Diploma Programı',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: "OSSD+ Çift Diploma Programı"
        },
        {
          type: 'list',
          items: [
            'Toronto, Ontario, Kanada merkezli',
            'Ontario Eğitim Bakanlığı tarafından düzenli teftiş edilen özel lise statülü kuruluş',
            'Dünya genelinde 40’dan fazla partner okul',
            'Kanada Lise eğitimi ve İngilizce eğitimi konularında müfredatlar hazırlamada uzman',
          ]
        },
        {
          type: 'heading',
          text: "Küresel Olarak Tanınan Eğitim İle Dünyaya Açılan Sınıflar"
        },
        {
          type: 'paragraph',
          text: 'Türk öğrenciler lise eğitimlerinin bir yılını Amerika Devlet Değişim Programı (J1) sayesinde Amerika Birleşik Devletleri’nde geçirebilirler. Program dahilinde öğrenciler konaklamalarını tamamen gönüllü olarak programa dahil olmuş ve sıkı güvenlik kontrolünden geçmiş yerel host aileler yanında yaparlar.'
        },
        {
          type: 'paragraph',
          text: 'Host aile yanında kalan öğrencilerimiz ailelerin desteği ile yeni hayatlarına kolay adapte olmanın yanında İngilizce’ye de sadece okulda değil okul dışında da maruz kalırlar ve programdan dönen öğrencilerimiz unutulmaz ders ve anılarla geri dönmektedir.'
        },
        {
          type: 'paragraph',
          text: 'Program başvuru sürecinde öğrenciler ELTIS sınavından belirlenen puanları almalı ya da almak için gerekli olan hazırlık sürecine başlamayı kabul etmelidir. Akabinde gerçekleştirilecek mülakat sonunda değişime devam edecek öğrencilerin süreçleri başlatılır ve değişim öğrencisi olma yolundaki ilk adımı atmış olurlar.'
        },
        {
          type: 'heading',
          text: "Akranlarla Kültürlerarası Etkileşim ve Uluslararası Bir Deneyim"
        },
        {
          type: 'paragraph',
          text: 'OSSD kredi eğitimleriyle teorik kavramlar ve uygulamalar arasında köprü kurmaya yardımcı olmak ve öğrencilere bilgilerini uygulama fırsatları vermek için, ilgili alandan gerçek ve iyi bilinen örnek derslere dahil edilmiştir.'
        },
        {
          type: 'paragraph',
          text: "Tartışma panoları açıktır, böylece öğrenciler dünyanın her yerinden akranlarıyla etkileşim kurabilir."
        },
        {
          type: 'heading',
          text: "Güçlü Öğretim ve Öğretmen Kaynakları"
        },
        {
          type: 'paragraph',
          text: 'Ders planları öğretmenler için güçlü bir temel oluşturur. Öğrencilerin öğrenmesini desteklemek amacıyla, öğretmenlere ders planları, grup etkinlikleri ve her ders için farklılaştırılmış kaynaklar gibi öğretim materyalleri sağlanır.'
        },
        {
          type: 'paragraph',
          text: 'Beceri odaklı müfredat seçenekleri, kapsamlı öğretmen eğitimi ve kaynakları ile her öğrencinin en yüksek potansiyeline ulaşmasını sağlayan “öğretme” uzmanlığıyla öğrencilerin ilerlemesi takip edilir ve başarı için tam destek verilir.'
        },
        {
          type: 'heading',
          text: "Küresel Alanda Etkin Bir Eğitim Modeli"
        },
        {
          type: 'paragraph',
          text: 'Proje tabanlı OSSD lise diploma programına katılan öğrenciler, Türk lise eğitimine ek olarak toplamda 6 kredi fark dersi alarak programı tamamlamaktadır.'
        },
        {
          type: 'paragraph',
          text: '110 dersten oluşan her bir kredi, OSSD koordinatörleri eşliğinde yürütülür. Online içerikler, projeler, ödevler ve sonunda gerçekleştirilen final sınavıyla bir kredi eğitimi tamamlanır ve bir sonraki krediye geçiş sağlanır.'
        },
        {
          type: 'paragraph',
          text: '6 kredi dersini tamamlayan öğrenci, OSSLT okur-yazarlık sınavına katılım sağlayarak yurtdışında başvuracağı üniversiteler için puanını güçlendirir. Bu sınavdan yüksek puan alması, üniversite kabulü için önemlidir.'
        },
        {
          type: 'paragraph',
          text: 'Öğrencilerimizin programa katılımı için en az B2 seviyesinde İngilizce diline dört beceride hâkim olmaları gerekmektedir. Ancak İngilizce yeterliliği olmayan öğrenciler, 9. ve 10. sınıfların ilk döneminde kurumumuzdan destek alabilirler veya OSSD İngilizce Hazırlık Programı’na dahil olabilirler.'
        },
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },
    'lisans-yukseklisans-programları': {
      title: 'Lisans ve Yüksek Lisans Programları',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: "Yurt Dışında Lisans Eğitimi"
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında sınav zorunluluğu olmadan dilediği bölüme başvurabilmek ve istediği lisans eğitimini almak Türk öğrenciler için artık daha da kolay ve olası. Uzun yıllardır yapılan değişim programlarının yanı sıra üniversite programları da oldukça popüler tercihler arasında. Özellikle geçtiğimiz 5 yılda artış gösteren başvurular gösteriyor ki Türk liselerinden mezun olan öğrencilerin yurt dışında akademik olarak ve alanında çalışma imkanı olarak daha fazla fırsat sunan ülkelere ilgisi bir hayli arttı.'
        },
        {
          type: 'heading',
          text: "Hangi ülkeyi tercih etmeli, hangi üniversiteye başvurmalıyım?"
        },
        {
          type: 'paragraph',
          text: 'Dünya sıralamaları dikkate alındığında Dünya üzerinde en başarılı gösterilen ve eğitimde elit ülkeler olarak gösterilen Amerika, Kanada, Avustralya ve İngilterelistenin başında gelmektedir. Bu ülkelerin yanı sıra Almanya, Hollanda, İsveç, Danimarka, İtalya ülkeleri de bir hayli rağbet görmektedir. Avrupa Birliği’ne girdikten sonra akademik başarı grafiği hızla yükselişe geçen Polonya, Macaristan ve Estonya da son yıllar da bir çok öğrenci tarafından tercih edilen ülkeler olmuştur.'
        },
        {
          type: 'paragraph',
          text: 'Ülkelerin ve üniversitelerin eğitim kalitesi arttıkça öğrenci kabul kriterleri de doğru orantılı olarak katılaşmaktadır. Lise eğitimini Türkiye’de tamamlamış yada tamamlayacak olup, yurt dışında bir yüksek öğrenim kurumuna lisans eğitimi alma şartıyla başvuracak öğrencilerin öncelikle lise yıllarındaki not dökümlerini gösteren transkriptleri incelenmektedir. Diploma not ortalaması ne kadar yüksek ise öğrencilerin başvurabileceği üniversite sayısı da bir o kadar yüksek oluyor. Dünya sıralamalarında iyi yerlerde bulunan üniversitelerin de öğrencilerden yüksek diploma notu talep ettiklerini söyleyebiliriz bu durumda. Başvuracağınız üniversiteleri de lise yıllarında göstermiş olduğunuz başarıya göre seçmeniz gerekecektir.'
        },
        {
          type: 'heading',
          text: "Lisans Eğitimine başvurmak için ne gerekiyor?"
        },
        {
          type: 'paragraph',
          text: 'Öğrencilerin hazırlayacağı evraklar başvurulacak üniversite ve okumak istedikleri bölüme göre değişkenlik göstermektedir.'
        },
        {
          type: 'paragraph',
          text: "Yurt dışında üniversite eğitimi için başvuru yapacak öğrencilerin Türkiye’de lise 3 eğitimini tamamlamış ve 12. sınıfa başlamış olması gerekmektedir. Her ülkenin ve üniversitenin farklı bir başvuru süreci ve takvimi olduğundan 12. sınıfın ilk dönemi bitmeden başvuruların tamamlanması kabul sürecinde öğrenciye avantaj sağlamaktadır. Okunan liseden alınacak lise not dökümü yani transkript öğrencilerin edinmesi gereken ilk belge olacaktır. Yurt dışında bir üniversitede İngilizce lisans eğitimi almak isteyen öğrencilerin dil yeterlilik sınavına girmeleri ve İngilizce seviyelerini belgelendirmeleri gerekmektedir. Bu sınavları Türkiye sınırları içerisinde alabilirsiniz. Tüm Dünya üniversitelerinde kabul gören bu dil sınavlarının en popüler olanları IELTS ve TOEFL sınavlarıdır. Üniversite ve başvuracağınız bölümün gereksinimlerine göre bir puan hedeflemelisiniz. Özellikle Amerika üniversiteleri öğrencilerden bu sınavların dışında SAT ya da ACT sınavları da talep edebiliyor. Dil yeterliliği olmayan öğrenciler lisans eğitimi öncesinde üniversitelerin akademik İngilizce dil eğitimlerinden ya da öğrencileri akademik eğitime hazırlayan özel dil kurumlarında kendilerini hazırlayabilirler."
        },
        {
          type: 'paragraph',
          text: "Daha detaylı bilgilendirme için yol arkadaşınız olacak uzman danışmanlarımızla görüşmek için randevu alabilirsiniz."
        },
        {
          type: 'heading',
          text: "Alacağım Üniversite Diplomasının Denkliği Var Mı?"
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında başka bir ülkenin müfredatıyla eğitim veren üniversitelerin diplomalarının Türkiye’de geçerliliğinin olması için öğrencilerin diplomalarını YÖK’e başvurarak denkliğini almaları gerekmektedir. YÖK’ün yasalarına göre Türkiye sınırları dışında eğitim veren bir yüksek öğrenim kurumunun diplomasının Türkiye’de karşılığının olması için o üniversitenin dünya sıralamalarında ilk 1000’de yer alması gerekmektedir. Ancak, atılabilecek en güzel adım başvurulacak üniversiteler belirlendikten sonra YÖK’e resmi bir dilekçe ile başvurmak ve diplomaların Türkiye’de denkiliği olup olmadığı bilgisini edinmek olacaktır.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks olarak öğrencilerimizi zor durumda bırakacak hamleler yapmamak adına başvurulacak bölüm ve üniversite kararını öğrencilerimizle yapmış olduğumuz kişiye özel görüşmeler yaparak ilerletmekteyiz. Öğrencilerimizin eğitimlerini en iyi şekilde alabilmeleri için iyi bir analiz ediyor ve buna göre de bir yol haritası çıkarıyoruz.'
        },
        {
          type: 'heading',
          text: "Neden Edubucks ile başvurmalıyım?"
        },
        {
          type: 'paragraph',
          text: 'Üniversite başvuruları belli prosedürler takip edilerek yapılmalıdır. Hangi üniversite ve bölüme hangi şartlarda başvurulması gerektiği, öğrencinin kabulüne katkı sağlayacak destekleyici evrakların hazırlanması dikkat edilmesi gereken en mühim konudur. Doğru evrak hazırlanması, zaman yönetimi ve birinci kişiden edineceğiniz yaşam tecrübeleriyle doğru adımı atmanız için Edubucks danışmanlığı hizmetlerinden faydalanabilirsiniz.'
        },
        {
          type: 'heading',
          text: "Yurt Dışında Yüksek Lisans Eğitimi"
        },
        {
          type: 'paragraph',
          text: 'Lisans eğitimini Türkiye’de alan bir öğrencinin kariyeri göz önünde bulundurduğunda daha iyi bir yüksek öğrenim imkânı ve iş tecrübesi açısından yurt dışında yüksek lisans eğitimi alması eşsiz bir fırsattır. Hayallerini süsleyen mesleklerin ve eğitim alanlarının Türkiye’de yer almaması nedeniyle de son yıllar da birçok öğrencimiz yüksek lisans programları için yurt dışını tercih etmekte.'
        },
        {
          type: 'heading',
          text: "Hangi Ülkeyi Tercih Etmeli, Hangi Üniversiteye Başvurmalıyım?"
        },
        {
          type: 'paragraph',
          text: 'Lisans eğitimi sonrasında hayatın gidişatı biraz daha iş odaklı olmaya başlamaktadır. Okumuş olduğunuz bölümün yanı sıra ilerde profesyonel iş hayatında hangi sektörde ilerlemek istediğinize göre bir yüksek lisans program seçimi yapmanız gerekmektedir.'
        },
        {
          type: 'heading',
          text: "Kendinizi 2 yıl içerisinde hangi sektörde hangi pozisyonda hangi sorumlulukları alırken hayal ediyorsunuz?"
        },
        {
          type: 'paragraph',
          text: 'İş hayatında kuşkusuz en önemli konu tecrübedir. İngilizce yüksek lisans eğitimi veren ülkelerin size vereceği eğitim ve eğitim sonrasında tecrübe kazanmanıza imkân sağlayan çalışma izni de üniversite ve ülke seçiminde büyük rol oynamaktadır.'
        },
        {
          type: 'heading',
          text: "Yüksek Lisans Eğitimine Başvurmak İçin Ne Gerekiyor?"
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında her ne seviyede olursa olsun eğitim almak isteyen öğrencilerin bir önceki eğitiminde göstermiş olduğu başarı performansı dikkate alınır ve başvuran öğrenciler bu kriterlere göre değerlendirilir. Lisans eğitiminde olduğu gibi yüksek lisans programlarına da başvururken öğrencilerin mezun olduğu üniversitedeki transkriptleri incelenerek öğrencinin yüksek lisans programına yeterli olup olmadığı belirlenir. Her üniversite ve bölümün yeterlilikleri farklıdır.'
        },
        {
          type: 'paragraph',
          text: 'Öğrencilerin bu programlara kabul edilip yararlı bir şekilde mezun olabilmeleri için dil yeterlilik konusunda akademik olarak belli bir seviyeyi aşmış ve İngilizce ile bir eksiğinin olmaması gerekir ve önerilir. Öğrenciler üniversitelere IELTS ve TOEFL sınavlarından elde ettikleri dil yeterlilik belgeleriyle başvururlar. Bu sınavların yanı sıra başvurulacak üniversite, öğrencilerden GMAT ya da GRE tarzı sınavlara girmelerini ve bu sınavların da belgelendirilmesini talep edebilirler.'
        },
        {
          type: 'paragraph',
          text: 'Yüksek lisans programlarına başvurmak için spesifik olarak bazı bölümler için iş tecrübesi ve referans da gerekmektedir.'
        },
        {
          type: 'heading',
          text: "Alacağım Üniversite Diplomasının Denkliği Var Mı?"
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında başka bir ülkenin müfredatıyla eğitim veren üniversitelerin diplomalarının Türkiye’de geçerliliğinin olması için öğrencilerin diplomalarını YÖK’e başvurarak denkliğini almaları gerekmektedir. YÖK’ün yasalarına göre Türkiye sınırları dışında eğitim veren bir yüksek öğrenim kurumunun diplomasının Türkiye’de karşılığının olması için o üniversitenin dünya sıralamalarında ilk 1000’de yer alması gerekmektedir. Ancak, atılabilecek en güzel adım başvurulacak üniversiteler belirlendikten sonra YÖK’e resmi bir dilekçe ile başvurmak ve diplomaların Türkiye’de denkliğinin olup olmadığı bilgisini edinmek olacaktır.'
        },
        {
          type: 'paragraph',
          text: 'Edubucks olarak öğrencilerimizi zor durumda bırakacak hamleler yapmamak adına başvurulacak bölüm ve üniversite kararını öğrencilerimizle yapmış olduğumuz kişiye özel görüşmeler yaparak ilerletmekteyiz. Öğrencilerimizin eğitimlerini en iyi şekilde alabilmeleri için iyi bir analiz ediyor ve buna göre de bir yol haritası çıkarıyoruz.'
        },
        {
          type: 'heading',
          text: 'Başvuru Detayları:'
        },
        {
          type: 'list',
          items: [
            'Örgün Öğrenci olmak',
            'Mezuniyet Not Ortalamasının minimum 70 olması (Ülkeye göre değişiklik gösterir)',
            'IELTS/TOEFL resmi skoru',
            'Bölüme göre Portfolio',
          ]
        },
        
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'diploma-ve-sertifika-programları': {
      title: 'Diploma ve Sertifika Programları',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
       
        {
          type: 'paragraph',
          text: 'Amerika, Kanada ve Avustralya gibi ülkelerde üniversitelerin yanı sıra eğitim veren ve College adı verilen yüksek öğrenim kurumları da eğitimde aktif rol oynamaktadır. Türkiye’deki Kolej algısının epey dışında bir yapısı olan bu College’lar sundukları programlarla öğrencileri hem akademik eğitimlere hem de profesyonel iş hayatına hazırlar. Bu programlardan mezun olan öğrencilere sunulan çalışma imkanları da öğrencilerin bu programları seçmesindeki en önemli unsurlardan birisidir.'
        },
        {
          type: 'heading',
          text: "Diploma Programı Nedir, Kimler Başvurmalı?"
        },
        {
          type: 'paragraph',
          text: 'Diploma programları önlisans karşılığına gelen 2 ve 3 yıllık akademik programlardır. Özellikle Kanada’da iş piyasasındaki açıkları göz önünde bulundurup kendi hazırlattığı müfredatla eğitim veren bu College’lardaki diploma programlarından mezun olan öğrenciler eğitim sonrası direkt olarak iş hayatına da atılabilmektedir.'
        },
        {
          type: 'paragraph',
          text: '4 yıllık lisans programlarına başvurularda Amerika ve Kanada gibi ülkeler yurt dışından başvuran öğrencilerden genellikle 85 ve üstü bir not ortalaması beklemektedir. Bu şartları yerine getiremeyip daha düşük bir not ortalaması ile mezun olan lise öğrencileri bu ülkelerde üniversite programlarına başvuramadıklarından dolayı College’larda verilen diploma programlarında eğitimlerini yüksek notlarla tamamlayıp belirli üniversitelere transfer yapabilir ve lisans eğitimlerini tamamlayabilir.'
        },
        {
          type: 'heading',
          text: "Sertifika Programı Nedir, Kimler Başvurmalı?"
        },
        {
          type: 'paragraph',
          text: 'Kanada’da eğitim veren College’larda sunulan sertifika programları öğrencilere kendi uzmanlık alanlarında daha da gelişmeleri ve tecrübe kazanmaları açısından büyük fayda sağlar. College Certificate adı altında sunulan akademik eğitim 1 ve 2 yıllık seçenekler olarak öğrencilere sunulmaktadır. Bu kurumlardan alacağınız sertifikalar özellikle Kanada’da mezuniyet sonrası iş bulmanızda büyük avantaj sağlar ve size önemli kapılar açar.'
        },
        {
          type: 'paragraph',
          text: "Sertifika programları akademik programlardır ve sadece lisans mezunu öğrencilerin başvurabileceği seviyededir. Bu programlarda yer alabilmeniz için daha öncesinde geçerli bir üniversiteden diplomanız olması gerekiyor."
        },
        {
          type: 'heading',
          text: "Neden Edubucks ile başvurmalıyım?"
        },
        {
          type: 'paragraph',
          text: 'Üniversite başvuruları belli prosedürler takip edilerek yapılmalıdır. Hangi üniversite ve bölüme hangi şartlarda başvurulması gerektiği, öğrencinin kabulüne katkı sağlayacak destekleyici evrakların hazırlanması dikkat edilmesi gereken en mühim konudur. Doğru evrak hazırlanması, zaman yönetimi ve birinci kişiden edineceğiniz yaşam tecrübeleriyle doğru adımı atmanız için Edubucks danışmanlığı hizmetlerinden faydalanabilirsiniz.'
        },
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'akademik-yaz-okul-programlari': {
      title: 'Akademik Yaz Okulu Programları',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: "Akademik Yaz Okulları"
        },
        {
          type: 'paragraph',
          text: 'Standart yaz okulları programlarına nazaran daha çok İngilizce seviyesi akademik seviyede olan öğrencilerin tercih ettiği ve kabul gördüğü Akademik Yaz Okulları özellikle İngiltere’nin yanı sıra Amerika, Kanada, Avustralya gibi deniz aşırı ülkelerdeki üniversitelerin kampüslerinde düzenlenmektedir. Dünyanın önce gelen üniversitelerinin kampüslerinde sunulan programlar öğrencilerin hem lisans programları için o üniversitedeki eğitimi için planlama yapmasına yardımcı olur hem de üniversitelerdeki Akademik İngilizce seviyesi ile kendi seviyesini karşılaştırabileceği bir ortamda bulunmasına olanak sağlar.'
        },
        {
          type: 'paragraph',
          text: 'Dünyanın eğitimde önde gelen ülkelerin üniversitelerinde yaz aylarını dilediğiniz üniversitenin kampüsünde hem bilgilendirici eğitim alarak hem de programa katılan öğrenciler için hem kampüs içi hem de kampüs dışı etkinliklerle tecrübe edinmek yurt dışı eğitim için atabileceğiniz önemli bir adımdır.'
        },
        {
          type: 'paragraph',
          text: 'Programlara dahil olarak akademik yaz okuluna katıldığınız üniversitenin bütün akademik bölümlerini ziyaret edebilir, bölümler hakkında yetkililerden detaylı bilgi alabilir ve üniversitenin size sunduğu imkanları tartabilir ileriye yönelik başvuru süreciniz hakkında daha net kararlar alabilirsiniz.'
        },
        {
          type: 'paragraph',
          text: "Edubucks sizlere daha iyi bir gelecek planları yapmanızda size yol arkadaşlığı yapmakta ve en başarılı üniversitelerin kampüslerindeki akademik yaz okulu programlarına katılımda yol göstermektedir."
        },
        {
          type: 'flags',
          items: [
            { image: '/usaflag.jpg', name: 'Amerika' },
            { image: '/canadaflag.jpg', name: 'Kanada' },
            { image: '/englandflag.jpg', name: 'İngiltere' }
          ]
        },
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'spor-akademisi': {
      title: 'Spor Akademisi',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: "Spor Akademisi"
        },
        {
          type: 'paragraph',
          text: 'Türkiye’de herhangi bir spor alanında lisanslı takım oyuncusu olup, yurt dışında hem lise eğitimini alıp hem de spordaki yeteneklerini değerlendirmek, geliştirmek isteyen yetenekli öğrencilerin Amerika’da başarılara yürümesi sunulan imkanlarla daha da mümkün.'
        },
        {
          type: 'paragraph',
          text: "Yurt dışı eğitimi konusunda son yıllarda birçok başvuru yapılmaktadır. Başvuruların en çok yapıldığı ülkelerin başında ise Amerika geliyor. Amerika'da yıllık yaşam ve eğitim ücreti olarak dolar (USD) konusunda belli bir birikimi olan ve bu birikimini eğitim konusunda değerlendirmek isteyenler belirli prosedürleri yerine getirerek, yurt dışı eğitiminin kalitesinden yararlanıyor. Yurt dışı eğitiminde birçok kişi burslu lise olanakları konusunda araştırma yaparak, bu eğitim için verilen hizmetlerden yararlanmak istiyorlar."
        },
        {
          type: 'paragraph',
          text: 'Amerikan okullarının sunmuş olduğu burslu eğitim sayesinde yapılacak olan masrafların daha da azalmasını sağlaması açısından oldukça önemlidir. Amerika her yıl binlerce öğrenciye, derslerdeki ve sportif faaliyetlerdeki başarılarından dolayı burslu eğitim imkanları sağlıyor. Eğitimlerinin geri kalan kısımlarını Amerika ya da Kanada’da lise olanakları ile değerlendirmek isteyenler lise değişim başvuru prosedürünü yerine getirdikten sonra eğitim imkanlarından faydalanabiliyor.'
        },
        {
          type: 'heading',
          text: "Amerika'da Sunulan Spor Burslu Eğitim Hizmetleri"
        },
        {
          type: 'paragraph',
          text: "Amerika'da öğrenciler için sunulan burslar akademik ve atletizm bursları olarak ikiye ayrılıyor. Akademik burslarda belli bir eğitim ve öğretim seviyesinde olan öğrencilerin kendi eğitim düzeyleri konusunda lise değişim programlarından yararlanarak Amerika eğitim sisteminde geleceğe yönelik yatırım yapıyor. Atletizm konusunda verilen burslar ise, herhangi bir atletizm branşında uğraşı ve lisansı olan öğrenciler bu konuda yapacakları başvuru sayesinde Amerika'nın atletizm burslarından yararlanabiliyor. Aynı imkanlar Kanada’da lise eğitimlerinde de sunuluyor."
        },
        {
          type: 'heading',
          text: "Atletizm Spor Burslarının Şartları Nelerdir?"
        },
        {
          type: 'paragraph',
          text: "Amerika'daki eğitimler için verilen atletizm spor bursları, öğrencilerin okudukları okulların spor takımlarında çeşitli müsabakalara katılmaları için düzenlenmiş bir burs türüdür. Spor burslarının en büyük özelliği 18 ile 26 yaş arasındaki kişilere veriliyor olmasıdır. Bir başka önemli özelliği de sadece lisans eğitimi alacak öğrencilere verilmesidir."
        },
        {
          type: 'paragraph',
          text: "Atletizm burslarından yararlanmak isteyenlerin İngilizce bilmesi SAT sınavına girmesi ve başarı göstermesi, Türkiye'de lise ve dengi okul mezunu olması ve aynı zamanda üniversitenin ilk yılında olunması şartları aranıyor. Ancak İngilizce bilmeyen öğrenciler kendi imkanları doğrultusunda Amerika'da dil kurslarına giderek bu eksikliği tamamlamaları gerekiyor."
        },
        
        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'yaz-okullari': {
      title: 'Yaz Okulları (8-17 yaş)',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: "Yaz Okulları"
        },
        {
          type: 'paragraph',
          text: 'Ortaokul ve Lise öğrencilerinin dil yeteneklerini ve sosyal becerilerini geliştirebileceği, belli süreler içerisinde gittiği ülkenin havasını soluyup o ülkenin eğitim sistemi ile ilgili bilgi sahibi olmasını amaçlayan yaz okulu programları Edubucks ayrıcalığı ile sizlere sunulmaktadır. İngilizce eğitimin yanı sıra aynı zamanda da keyifli etkinliklere katılarak bulunduğu bölgenin eşsiz atmosferi ve tarihi dokusunu tecrübe edinme şansı yakalayan öğrenciler programlardan dönüşte son derece farklı bir algı ile dönmektedir.'
        },
        {
          type: 'paragraph',
          text: "Katılım yaşının minimum 10 maksimum 17 olduğu yaz okullarına bireysel olarak yada 15 kişilik gruplar halinde katılım gösterilmesi mümkündür. Konum açısından yakın olması ve ana dilinin İngilizce olmasından kaynaklı İngiltere ve İrlanda en çok tercih edilen ülkelerdir. Yaz okulu programını sunan birçok dil okulunun bünyesinde İngilizce eğitim alan öğrenciler program dahilinde hem mevcut şehir de hem de çevre şehirlerdeki etkinlik ve turlara katılım göstererek tarifsiz bir tecrübeye sahip olurlar. Genç yaşta yurt dışındaki programlara katılım gösterip bu ülke hakkında bilgi edinip diğer ülkelerden gelen diğer uluslararası öğrencilerle aynı havayı soluyan öğrencilerimiz bir Dünya İnsanı olma yolunda emin adımlar atarken proje yönetimi ve iletişim kurma becerilerini geliştirerek ülkemize dönmektedir."
        },
        {
          type: 'paragraph',
          text: 'Yaz okulu programlarına katılım gösteren öğrenciler programına katıldıkları kurumun sunduğu yurt ve aile yanı konaklama seçeneklerinden birinden faydalanmak durumundadır. Yaz okullarında aile yanında konaklayan öğrenciler o ülkenin yerel halkının günlük yaşantısını da tecrübe edinmekte ve kültürel açıdan da kendisine birçok yenilik katmaktadır. Aile yanında konaklayan öğrenciler ayrıca aile ile kahvaltı ve akşam yemeğini birlikte yemektedir. Kendi kültürümüzü de karşıya aktaran öğrencilerimiz aile ile birlikte iletişimini en üst seviyede tutarak İngilizce konuşma becerilerinin gelişimine ekstra katkıda bulunmaktadır.'
        },

        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'ingilizce-dil-okulu': {
      title: 'İngilizce Dil Okulu Programları',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YURT DIŞI PROGRAMLAR',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'paragraph',
          text: 'Örgün eğitimine Türkiye’de devam eden öğrencilerin hem lisans eğitimi hem de profesyonel iş hayatına hazırlanan bireylerin uluslararası alanda kendilerine başarı getirecek bir İngilizce dil yeterliliği sağlaması için ana dili İngilizce olan ülkelerde sunulan Dil Okulu programları oldukça yoğun ilgi görmektedir. İngiltere, Amerika, Kanada, Avustralya, İrlanda ve Malta’da kendin kanıtlamış ve başarılı akademik dil eğitimi veren kadrosuyla dil okullarında tercihinize göre 2 hafta ile 11 ay arasında bir süreçte İngilizce dil eğitimi almak mümkün. Çok fazla alternatif program sunan okullar öğrencilerin İngilizce dilini efektif kullanabilmeleri için ideal eğitim akışı ile sunmaktadır.'
        },
        {
          type: 'paragraph',
          text: "Öğrenciler eğitim seviyelerine göre Genel İngilizce programlarından faydalanabilmektedir. Akademik eğitim için İngilizce seviyesi daha üst seviyede olan öğrenciler için IELTS ve TOEFL eğitimleri de dil okulları tarafından sunulmaktadır. Bu eğitimlere katılım gösterebilmek için ise minimum Intermediate seviyesinde İngilizce bilginizin olması gerekmektedir."
        },
        {
          type: 'paragraph',
          text: 'Dil okulu vizesi ise ülkeden ülkeye değişkenlik göstermektedir. Bir çok ülke 6 aya kadar başvurulan dil okulları programları için turist vizesi ile eğitimin alınmasını mümkün kılmaktadır.'
        },

        {
          type: 'buttons',
          items: [
            {
              /* icon: '🏫', */
              title: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?',
              /* description: 'EDUBUCKS ile Yurt Dışı Eğitim Maceranı Başlatmak İstiyor Musun?', */
              link: '/edubucks-ai',
              buttonText: 'Hemen Başvur'
            },
          ]
        },

      ]
    },

    'yurt-disinda-beni-ne-bekliyor': {
      title: 'Yurt Dışında Beni Ne Bekliyor?',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YARARLI BİLGİLER',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: 'Yurt Dışında Beni Ne Bekliyor?'
        },
        {
          type: 'paragraph',
          text: 'Son yıllarda yapılan araştırmalara bakıldığında, yurt dışında eğitim almak isteyen Türk öğrencilerin sayısında ciddi bir artış yaşanmıştır. Eğitim ve kariyer hayatında daha başarılı olmayı hedefleyen öğrenciler eğitim hayatlarından sonra kariyerlerini de devam ettirmek için yurt dışını tercih ediyorlar. Peki yurt dışında sizi neler bekliyor?'
        },
        {
          type: 'heading',
          text: 'Uluslararası eğitim standartlarında eğitim görmek'
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında bir liseden veya üniversiteden mezun olmak; sağladığı iyi eğitim, kattığı tecrübe, kazandırdığı kültürel etkileşim ve toplum tarafından kabul gören prestijli bir diploma ile kişi sosyal statü açısından çok şey kazanır.'
        },
        {
          type: 'heading',
          text: 'Kişisel gelişim'
        },
        {
          type: 'paragraph',
          text: 'Daha önce ailelerinden ayrı yaşamayan gençler için yurt dışında okumak, kendi başlarına yaşamayı öğrenmelerini ve kendi ayakları üzerinde durmalarını sağlamaktadır. Yurt dışında geçirecekleri süre boyunca, yeni yetenekler keşfetmelerine, kendilerini daha iyi tanımalarına ve diğer kültürler ile kendi kültürleri arasındaki farklılık ve benzerlikleri fark etmelerine yardımcı olacaktır. Bunların yanı sıra ister istemez yeni durumlara ve ortamlara adapte olmak zorunda kalacaklar ve farklı deneyimler kazanacaklar. Bu da mezuniyet sonrası hayata karşı daha hazırlıklı olmalarını ve bu konuda kendilerini geliştirmelerini ve olgunlaşmalarını sağlayacaktır.'
        },
        {
          type: 'heading',
          text: 'Dünya’nın birçok ülkesinden yeni arkadaşlara sahip olmak'
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında eğitimin en büyük fırsatlarından birisi de farklı kökenlerden gelen yeni arkadaşlarla yaşam boyu bir arkadaşlık kurmaktır. Yurt dışında eğitim görürken aynı sınıf içerisinde birden çok farklı milliyete sahip olan kişilerle arkadaşlık edeceksiniz ve böylece uzun süre kalıcı arkadaşlıkların temelini oluşturacaksınız. Genelde yabancı dil bilgimizi kullanmadığımız için bazı bilgileri unuttuğumuzu düşünürüz, ancak bu arkadaşlıklar ile yurt dışı eğitim programı sona erdikten sonra bile temasa geçerek yabancı dilinizi ilerletebilirsiniz.'
        },
        {
          type: 'heading',
          text: 'Yabancı dil bilginizi geliştirmek'
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında eğitim alırken etrafınızda günlük yaşantılarında öğrenmek istediğiniz dili konuşan birçok insan bulunur. Bu şartlar altında dil öğrenimi daha kolay ve hızlı gelişebilir. Günümüzde iyi bir iş sahibi olmak için, işverenler en az 2 dil bilen mezunları tercih etmektedir. Yurt dışında dilini geliştiren bireyler diğer adaylara göre daha avantajlı konumda olurlar ve daha rahat iş sahibi olabilmektedirler.'
        },
        {
          type: 'heading',
          text: 'Kariyer fırsatları elde etmek'
        },
        {
          type: 'paragraph',
          text: 'Akademik hayatlarında ve gelecekteki kariyerlerinde onlara yol gösterecek insanlarla özel ilişkiler kurabilmeleri konusunda da onlar için faydalı olacaktır. Okudukları okullarda katıldıkları seminerler, projeler ve araştırmalar mezuniyet sonrasında kariyerleri açısından büyük bir fırsat sağlayacaktır. Yurt dışında kazanacakları deneyimler, dil becerileri ve kültürler arası iletişim kurma yetenekleri ile iş hayatında rekabet edebilirlikleri yükselecek ve bu da onlar için avantaj olacaktır.'
        },
        {
          type: 'heading',
          text: 'Yeni bakış açıları kazanmak'
        },
        {
          type: 'paragraph',
          text: 'Farklı kültürlere sahip insanlarla iletişim kurmak, farklı politik ve ekonomik yapıları, sosyal ve kültürel normları öğrenmek küresel meseleler hakkında daha geniş bir bakış açısı geliştirmelerine yardımcı olacaktır. Sorunların tek bir çözümünün olmadığını, farklı gibi görünen pek çok şeyin aslında eşit olduğunu anlayacak; dünyaya daha açık bir düşünce yapısı ile bakmaya ve hayatı bu şekilde değerlendirmeye başlayacaksınız.'
        },
        {
          type: 'heading',
          text: 'Yeni kültürler tanımak'
        },
        {
          type: 'paragraph',
          text: 'Yurt dışında eğitim almayı tercih birçok öğrenci genelde ilk kez kendi evlerini terk ederek başka bir ülkede yaşamaya başlıyorlar. Gittikleri yeni ülkelerde karşılaştıkları farklı kültürlere karşı bakış açıları değişiyor. Daha önce o ülkeye ve kültürüne karşı olan düşüncelerin aslında öyle olmadığını görüyorlar. Yurt dışında eğitim aldıkları süreç boyunca yeni gıdalar, o ülkenin örf, gelenekleri ve sosyal atmosferleri ile karşılaşacaklar.'
        },

      ]
    },

    'oryantasyon': {
      title: 'Oryantasyon',
      subtitle: '',
      author: 'Edubucks Team',
      date: 'Ağustos 2025',
      category: 'YARARLI BİLGİLER',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'paragraph',
          text: 'Öğrencilerinin yurt dışı tecrübelerinin eksiksiz ve en doğru şekilde geçmesi konusunda son derece dikkatli davranan Edubucks, her eğitim sezonunun sonunda bir oryantasyon kampı düzenleyerek öğrencilerini yolculukları öncesinde bilgilendirmektedir.'
        },
        
        {
          type: 'paragraph',
          text: 'Geçtiğimiz yıllarda yurt dışı değişim programlarına katılım gösteren öğrencilerimizin de katılım gösterdiği ve önümüzdeki eğitim öğretim dönemini Amerika ve Kanada’da geçirecek öğrencilerimiz ile bir araya gelip tecrübelerini paylaştığı Oryantasyon Kampında çeşitli etkinliklere de katılarak gidecek öğrencilerin motivasyonunu güçlendiren bilgiler verilir.'
        },
        
        {
          type: 'paragraph',
          text: 'Daha önceden Edubuck ile bu yola çıkmış ve büyük başarılar elde eden öğrenciilerimizin de Amerika ve Kanada’dan Skype ile katılım gösterdiği kampımızda öğrencilere karşılaşacakları imkanlardan nasıl en iyi şekilde faydalanabilecekleri hususunda fikir ve tecrübelerini paylaşması öğrencilerin özgüvenlerini daha da sağlamlaştırdığı bir gerçektir.'
        },
        
        {
          type: 'paragraph',
          text: 'Sosyalleşerek son derece keyifli etkinliklere katılım gösteren öğrencilerimiz oryantasyon kampının son gününde evlerine dönerken gidecekleri ülke hakkında detaylı bilgiler aldıktan sonra daha temiz bir psikolojiye sahip olmakta ve beklentilerini duruma göre belirlemektedir.'
        },
      ]
    },

    'hemen-basvur': {
      title: 'Hemen Başvur',
      subtitle: 'Başvuru formunu doldurun, sizinle en kısa sürede iletişime geçelim',
      author: 'Edubucks Team',
      date: 'Ekim 2025',
      category: 'Anasayfa',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'paragraph',
          text: 'Yurt dışı eğitim hayalinize bir adım daha yaklaşmak için formu doldurun. Uzman danışmanlarımız en kısa sürede sizinle iletişime geçecektir.'
        },
        {
          type: 'form'
        },
        
      ]
      
    },

    'sss': {
      title: 'S.S.S',
      subtitle: 'En çok merak edilenler',
      author: 'Edubucks Team',
      date: 'Ekim 2025',
      category: 'Anasayfa',
      image: '/blog-placeholder.jpg',
      content: [
        {
          type: 'heading',
          text: 'Edubucks Sisteminin Özellikleri'
        },
        {
          type: 'paragraph',
          text: 'Eğitimlerini yurt dışında devam ettirmek isteyen öğrencilerin yurt dışında bulundukları süre içerisinde gönüllü aileler tarafından misafir edilmeleri ve belirlenen okullarda eğitimlerine devam etmeleri Edubucks sistemi ile gerçekleşmektedir. Sunulan bu hizmet ile birlikte öğrenciler gönüllü ailelerin yanında kalarak gönüllü aileler ile bağ kurarak yabancı bir kültürü öğrenirler. Bu sayede öğrencilerin o toplumu öğrenerek o toplumun bir bireyi olarak yaşamalarına olanak sağlanmaktadır.'
        },
        {
          type: 'paragraph',
          text: 'Bu sistem ile birlikte öğrencilerin öz ailelerinin dengi bir aile yerine Edubucks programlarının standartlarının koşullarına uygun ailelerin yanlarına yerleştirilmeleri sağlanıyor. Bu sistem ile birlikte öğrenciler gönüllü ailelerin yanına yerleştiklerinde birer misafir olarak değil o ailenin bir bireyi olarak görülmesi beklenmektedir. Bu sayede öğrenciler gitmiş oldukları ülkelerin dillerini ve kültürlerini ileri derecede öğrenmiş olurlar.'
        },
        {
          type: 'faq',
          items: [
            {
              question: 'Öğrencilerin Gidecekleri Ülkeler Nasıl Belirleniyor?',
              answer: ['Öncelikle öğrencilerin girmiş oldukları sınavlarda belli bir oranda başarı göstermeleri gerekmektedir. Sınavlarda başarı gösteren öğrenciler Edubucks için aday öğrenci konumunda yer alırlar. Bu süreç ile birlikte öğrencilerin gidecekleri ülkeler yapacakları tercihlere göre belirlenir. Öğrenciler tercih yaparken hangi dili ve kültürü öğrenmek istiyorlar ise o dile ve kültüre ait ülkeler için tercihte bulunabilme şansına sahiptirler.',
              'Ancak öğrencilerin tercih konusunda dikkat etmeleri gereken en önemli konu tercih etmek istedikleri yerlerde kendilerine uygun okulların bulunup bulunmadığının araştırılmasıdır. Ülkemiz genelinde öğrenciler yaklaşık olarak 40 ülkeye bu programlar için gidebilmektedir. Bu ülkelerin eğitim sistemleri ve başvuru koşulları birbirinden farklılık gösterebilmektedir.'
              ]
            },
            {
              question: 'Öğrencilerin Aile ve Okul Yerleştirmeleri Nasıl Oluyor?',
              answer: "Öğrencilerin okul ve aile yerleştirmeleri gidecekleri ülkelerin sorumluluğu içerisinde yer almaktadır. Bu nedenle ilgili ülkelerin bu konudaki kuralları geçerli olmaktadır. Türkiye'deki hiçbir kuruluş yabancı bir ülkede öğrenciler için aile ve okul yerleştirmesi işlemleri yapmıyor. Sadece başvuru işlemleri yapılarak başvuru işlemlerinin yabancı ülke kuruluşları tarafından incelenmesi sağlanıyor. Yurt dışında okumak ve bir ailenin yanına yerleşmek isteyen öğrenciler tercih ettikleri ülkelerde eyalet, şehir ve okul tercihlerinde bulunamazlar. Tüm öğrenciler gönüllü bir aile ile birlikte yaşamaya başlarlar."
            },
            {
              question: 'Öğrencilerin Gönüllü Ailelerin Yanına Yerleştirilmelerinin Yararları',
              answer: 'Öğrencilerin yurt dışı eğitimi ve gönüllü ailelerin yanına yerleşmeleri konusunda ailelerin özenle incelenmesi Edubucks tarafından seçilerek öğrencilere aileler hakkında bilgiler verilmektedir. Öğrencilerin gönüllü ailelerin yanına yerleşmelerine kadar geçen süre içerisinde tüm ince detaylar Edubucks tarafından yerine getirilmektedir. Bu sayede öğrenciler gönüllü ailelerin bir bireyi olarak yaşamaya başlarlar ve yeni bir kültüre tanık olurlar. Bu durumun birçok kazanımı söz konusudur. Özellikle yabancı bir kültürü öğrenmenin yanı sıra ilgili kültürün dilini de ana dili gibi öğrenmek mümkün olmaktadır.'
            },
            {
              question: 'Yurt Dışı Eğitimi İçin Gönüllü Ailenin Yanında Kalmak Mecburi Mi?',
              answer: 'Öğrencilerin yurt dışı eğitimi almaları için gönüllü ailelerin yanlarında kalmaları zorunlu bir durum değildir. Bazı öğrenciler belirledikleri yurtlarda kalabildikleri gibi hafta sonları gönüllü ailelerin yanlarına gidebilmektedir. Kısa dönem eğitim programlarında bir takım kamp programları düzenlenerek öğrencilerin buralarda kalmaları da sağlanabilmektedir. Öğrencilerin başvuruları kabul edildikten sonra gidecekleri ülkelerdeki gönüllü aileler öğrenciler için okul araştırmalarına başlıyorlar. Öğrencilerin yerleştirme konularında esnek ve açık fikirli olmaları oldukça önemli.'
            },
            {
              question: 'Yurt Dışı Eğitimi İçin Yabancı Dil Koşulları Nelerdir?',
              answer: 'Öğrencilerin Edubucks sisteminden yararlanabilmeleri için bir yabancı dil bilme zorunlulukları söz konusu değildir. Öğrenciler yabancı dili hiç bilmeseler de gitmiş oldukları ülkelerdeki gönüllü aileler ile yaşamaları ile birlikte yabancı dili çok kaliteli bir şekilde öğrenmeye başlıyorlar. Ancak Amerika, Kanada, Fransa, İsviçre, Avusturya ve Almanya gibi ülkelerde başlangıç ya da orta düzeyde yabancı dil bilgisi istenebilmektedir.'
            },
            {
              question: 'Üniversite ve Lise Denklik İşlemleri Nasıl Yapılıyor',
              answer: ["Ara sınıflarda okuyan öğrencilerin yurt dışına eğitim amacı ile gitmeleri neticesine okudukları alan ve seviye konusunda denklik işlemleri yapılmaktadır. Öğrencilerin Türkiye'de okumuş oldukları okul ve bölümler gidecekleri yabancı ülkelerdeki seviyelerden farklı olabilmektedir. Öğrenciler hakkında alınan denklik kararları ile ilgili tüm işlemler Milli Eğitim Bakanlığı tarafından yerine getirilmektedir. Bu sistem sadece öğrenciler için yönlendirme ve bilgilendirme işlemlerini yapmaktadır. Denklik işlemleri programa başlamadan yapılmamaktadır. Ancak ve ancak öğrencilerin belirlenen programları bitirdikten sonra denklik işlemleri yerine getirilmektedir.",
              "Lise son sınıfta okuyan öğrencilerin Edubucks hizmetlerinden yararlanabilmeleri için öncelikle üniversite sınavına girerek gösterecekleri başarı ile birlikte tercih ettikleri üniversitelere önce kayıt olup sonra 1 sene süre ile kayıt işlemlerini dondurabilmektedirler. Öğrencilerin kayıtlarını dondurmaları ile birlikte ilgili bölümü okuma hakları saklı kalır. Öğrenciler ülkemizde mezun olmuş olsalar bile yurt dışı için almış oldukları eğitimleri bitirmek zorundadırlar."
              ]
            },
            {
              question: 'Yurt Dışı Eğitiminin Maddi Koşulları Nelerdir?',
              answer: ["Yapılan araştırmada dünya genelinde 13.000 civarı öğrenci Edubucks sisteminden yararlanarak yurt dışı eğitimi tecrübelerinden yararlanabiliyorlar. Bu programlar her ülkede sayıca fazla koordinatör ve aktif gönüllü aileler tarafından organize ediliyor. Maddi anlamda sıkıntılı olan öğrenciler bu durumlarını beyan etmeleri ile birlikte kendilerinin bu hizmetlerden yararlanabilmeleri için sponsor arayışları başlatılıyor. Öğrencilerin yurt dışında bulundukları süre içerisinde yeme içme, barınma, ulaşım, sağlık sigortası, uluslar arası ulaşım masrafları temin edilen sponsorlar aracılığı ile gideriliyor.",
              "Yapılan uluslar arası anlaşmalara göre öğrencilerin bu ihtiyaçlarını karşılayacak olan kuruluşların ticari bir menfaatlerinin olmayacağı konusunda mutabık kalınıyor. Tüm bu hizmetler yabancı ülkelerde olduğu gibi ülkemizde de sponsorluk yapan kuruluşlar ve katılımcıların katılım ücretleri ile yerine getiriliyor. Öğrencilerin yurt dışında gönüllü aile yanında kalma ve eğitim işlemleri için yılık olarak 15.000 ABD doları yatırmaları gerekiyor."
              ]
            },
            {
              question: 'Başarılı Öğrencilere Verilen Burslar Neledir?',
              answer: ["Öğrenciler edubucks sisteminden yararlanırken elde ettikleri başarılar da kendilerine büyük avantajlar sağlıyor. Özellikle başarılı öğrenciler için yıllık istenen maddi talepler de büyük indirimler yapılabiliyor. Bunun yanı sıra sponsorlar da başarılı öğrenciler için ekstra destek kampanyaları başlatabiliyorlar. Başarılı öğrencilere sağlanan burslar kısmi ve tam burslar olarak ikiye ayrılıyor. Başarı ortalaması çok yüksek olan öğrenciler için tam burs hizmetleri verilirken belli bir başarı kriterini yakalayan öğrenciler için de kısmi burs imkanları sağlanıyor. Başarılı olan öğrencilerin burs imkanlarından yararlanabilmeleri için burs başvurusu yapmaları gerekiyor. Yapılan başvuru neticesinde öğrencilerin başarı durumları incelenerek burs almaya hak kazandıkları tescillendiğinde belirlenen burslardan yararlanabiliyorlar."
              ]
            },
            {
              question: 'Neden Yurt Dışı Eğitimi Tercih Edilmeli?',
              answer: ["- Öğrencilerin kendi kültürlerinin dışında başka kültürleri yakından tanıması, yeni bir dil öğrenmesi hem sosyal gelişimleri hem de ilerideki akademik kariyerleri için oldukça büyük bir önem arz ediyor.",
                "- Yurt dışı eğitimi sayesinde öğrencilerin kendilerine olan güvenleri de oldukça yükseliyor.",
                "- Bu eğitim sayesinde öğrenciler kendi kültürlerinden sıyrılarak bir dünya vatandaşı olabiliyorlar.",
                "- Farklı kültürlere sahip insanlar ile tanışarak onlarla sağlıklı iletişim kurulabildiği gibi aynı zamanda ortak bir iş yapma olanağı yaratılabiliyor.",
                "- Yeni bir dil öğrenerek dünyaya farklı bir pencereden bakılmasına imkan sağlıyor.",
                "- Öğrencilerin gönüllü aileler ile bir aile ortamında yaşamaları o ailelerin kültürlerini öğrenebilmelerini sağladığı gibi onların yaşantılarına saygı duyulmasını da öğretmesi açısından oldukça önemlidir.",
                "- Gelecek planlaması yapan öğrenciler için alternatif sayısının bir hayli fazla olmasını sağlıyor."
              ]
            },
            {
              question: 'Edubucks Öğrencilerin Yeni Ailelerine Uyum Sağlamasında Yardımcı Oluyor Mu?',
              answer: ["Öğrenciler edubucks sayesinde öğrencilerin gönüllü aileleri ile ilgili detaylı araştırmalar yaparak onlar ile sağlıklı bir iletişim ve uyum sağlamaları için yoğun bir çalışma yapıyor. Bu sistem, öğrencilerin yeni aileleri ve yeni eğitim öğretim olanaklarında neler yapmaları gerektiği konusunda öğrencilere detaylı bilgi vererek, öğrencilerin yabancılık çekmemesini sağlıyor. Böylelikle öğrenciler yabancı bir ülkede yabancılık çekmeyerek orada sunulan imkanlardan azami bir şekilde yararlanma imkanını elde edebiliyorlar. Öğrencilerin tüm bu çalışmalar neticesinde yeni arkadaşlıklar kurması onlar için verilen bu hizmetlerin çok daha kaliteli olmasına olanak sağıyor.",
              ]
            },
            {
              question: 'Yurt Dışı Eğitimi ile Eğitim Alanında Elde Edilecek Kazanımlar',
              answer: ["Öğrenciler başlangıçta alışık olmadıkları bu durum için bulundukları ortamı yadırgayabiliyorlar. Ancak belli bir süre sonra uyum sağlamaya başladıklarında öğrenciler daha esnek bir birey olduklarının farkına varıyorlar. Karşılaştıkları problemleri çok daha farklı bir bakış açısı ile çözme yeteneklerini belirgin bir şekilde geliştiriyorlar. Farklı kültürler ile birlikte yaşamayı öğrendiklerinden insan sevgisi merkezinde yaşamlarını şekillendire biliyorlar. Dünyadaki farklılıklara saygı duymayı ve her daim bu farklılıklar işe iç içe olmak gerektiğini anlıyorlar.",
              ]
            },
            {
              question: 'Başka Bir Ülkedeki Gençler ile Nasıl Uyum Sağlanır?',
              answer: ["Öğrencilerin en çok tedirgin oldukları konuların başında gitmiş oldukları yabancı bir ülkede o ülkeye ait dili bilmediklerinden hem yaşıtları ile hem de diğer bireyler ile nasıl anlaşabilecekleri konusu geliyor. Aslında zorlukların üstesinden gelmek bu tedirginliğin en önemli amacıdır. Uyum sorunu çok kısa sürdükten sonra öğrenciler bulundukları çevrede adapte olarak bulundukları ülkenin dilini öğrenmeye başlıyorlar. Dil öğrenimi gerçekleşince de yaşıtları ile daha sağlıklı iletişimler kurabiliyorlar.",
              ]
            },
            {
              question: "Türkiye'ye Dönüldüğünde Edubucks Hizmetleri Sona Eriyor Mu?",
              answer: ["Öğrenciler yurt dışı deneyimi sayesinde gönüllü aileler ile kurdukları iletişim ve bağ sayesinde eğitim ve öğretim programları bitip yurda döndükten sonra da bu aileler ile iletişim içerisinde kalıyorlar. Bu da kültürler arası diyaloğun sürekli gelişmesine olanak sağlıyor.",
              ]
            },

          ]
        }
      ]
      
    },

    'iletisim': {
  title: 'İletişim',
  subtitle: 'Bize Ulaşın',
  author: 'Edubucks Team',
  date: 'Ekim 2025',
  category: 'Anasayfa',
  image: '/blog-placeholder.jpg',
  content: [
    {
      type: 'paragraph',
      text: 'Sorularınız ve talepleriniz için bize ulaşabilirsiniz. Uzman ekibimiz size en kısa sürede geri dönüş yapacaktır.'
    },
    {
      type: 'contact',
      contactInfo: [
        {
          icon: '📍',
          label: 'Adres',
          value: 'Bahçeşehir 2. Kısım Mah. Turgut Özal Blv No:74M/1, Karya Villaları , 34488 Başakşehir / İstanbul'
        },
        {
          icon: '📍',
          label: 'Adres',
          value: 'Yalı, 143. Sk. No:38, 35430 Güzelbahçe/İzmir'
        },
        {
          icon: '📞',
          label: 'Telefon',
          value: '+90 212 465 4 475'
        },
        {
          icon: '📞',
          label: 'Telefon',
          value: '+90 543 368 09 11'
        },
        {
          icon: '✉️',
          label: 'E-posta',
          value: 'info@edubucks.org'
        },
      ],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.814249562699!2d26.8833638!3d38.3764183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbebea3f524919%3A0x40e6905b71d36a53!2zRWR1YnVja3MgRGFuxLHFn21hbmzEsWsgdmUgT3JnYW5pemFzeW9uIMSwem1pciDFnnViZXNp!5e0!3m2!1str!2str!4v1761146507146!5m2!1str!2str'
    }
  ]
}

    // You can add more blog content here for other topics
  };

  const currentBlog = blogContent[slug] || blogContent['neler-yapiyoruz'];

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: themeConfig.colors.bgPrimary,
        color: themeConfig.colors.textPrimary,
      }}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at top left, rgba(205, 173, 125, 0.05) 0%, ${themeConfig.colors.bgPrimary} 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar logo="/logo.webp" />

        <article
          className="pt-32 pb-20 px-6"
          style={{
            paddingTop: `calc(${themeConfig.spacing.navbarHeight} + 4rem)`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg"
              style={{
                color: themeConfig.colors.accent,
                backgroundColor: 'rgba(205, 173, 125, 0.1)',
                border: `1px solid ${themeConfig.colors.accent}30`,
              }}
              whileHover={{
                backgroundColor: 'rgba(205, 173, 125, 0.15)',
                x: -5,
              }}
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Blog</span>
            </motion.button>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `${themeConfig.colors.accent}20`,
                    color: themeConfig.colors.accent,
                    border: `1px solid ${themeConfig.colors.accent}40`,
                  }}
                >
                  <Tag size={16} />
                  {currentBlog.category}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                {currentBlog.title}
              </h1>

              {/* Subtitle */}
              <p
                className="text-xl md:text-2xl mb-8"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                {currentBlog.subtitle}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div
                  className="flex items-center gap-2"
                  style={{ color: themeConfig.colors.textMuted }}
                >
                  <User size={18} />
                  <span>{currentBlog.author}</span>
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ color: themeConfig.colors.textMuted }}
                >
                  <Calendar size={18} />
                  <span>{currentBlog.date}</span>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mt-8 h-px"
                style={{
                  background: `linear-gradient(to right, ${themeConfig.colors.accent}, transparent)`,
                }}
              />
            </motion.header>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="prose prose-invert max-w-none"
            >
              {currentBlog.content.map((section, index) => {
                switch (section.type) {
                  case 'heading':
                    return (
                      <motion.h2
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-2xl md:text-3xl font-bold mt-12 mb-6"
                        style={{ color: themeConfig.colors.accent }}
                      >
                        {section.text}
                      </motion.h2>
                    );

                  case 'paragraph':
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="text-lg leading-relaxed mb-6"
                        style={{ color: themeConfig.colors.textSecondary }}
                      >
                        {section.text}
                      </motion.p>
                    );

                  case 'list':
                    return (
                      <motion.ul
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 mb-8"
                      >
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-lg"
                            style={{ color: themeConfig.colors.textSecondary }}
                          >
                            <span
                              className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                              style={{ backgroundColor: themeConfig.colors.accent }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    );

                  case 'quote':
                    return (
                      <motion.blockquote
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="my-8 p-6 rounded-xl border-l-4"
                        style={{
                          backgroundColor: 'rgba(205, 173, 125, 0.05)',
                          borderColor: themeConfig.colors.accent,
                        }}
                      >
                        <p
                          className="text-xl italic mb-3"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          &ldquo;{section.text}&rdquo;
                        </p>
                        {section.author && (
                          <footer
                            className="text-sm"
                            style={{ color: themeConfig.colors.textMuted }}
                          >
                            — {section.author}
                          </footer>
                        )}
                      </motion.blockquote>
                    );

                  case 'stats':
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-16 p-8 rounded-2xl"
                        style={{
                          backgroundColor: 'rgba(205, 173, 125, 0.05)',
                          border: `1px solid ${themeConfig.colors.accent}30`,
                        }}
                      >
                        {section.items.map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            className="text-center space-y-2"
                          >
                            <div
                              className="text-5xl md:text-6xl font-extrabold"
                              style={{ color: themeConfig.colors.accent }}
                            >
                              {stat.value}
                            </div>
                            <div
                              className="text-base md:text-lg font-medium"
                              style={{ color: themeConfig.colors.textPrimary }}
                            >
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    );

                  case 'buttons':
                    const isSingleButton = section.items.length === 1;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className={isSingleButton ? "flex justify-center my-12" : "grid grid-cols-1 md:grid-cols-2 gap-6 my-12"}
                      >
                        {section.items.map((button, i) => (
                          <motion.a
                            key={i}
                            href={button.link}
                            initial={{ opacity: 0, x: isSingleButton ? 0 : (i === 0 ? -20 : 20), y: isSingleButton ? 20 : 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            className={`group relative p-6 rounded-2xl cursor-pointer overflow-hidden ${isSingleButton ? 'max-w-2xl w-full' : ''}`}
                            style={{
                              backgroundColor: 'rgba(205, 173, 125, 0.05)',
                              border: `2px solid ${themeConfig.colors.accent}40`,
                              transition: themeConfig.animation.transition.normal,
                            }}
                            whileHover={{
                              scale: 1.02,
                              backgroundColor: 'rgba(205, 173, 125, 0.1)',
                              borderColor: themeConfig.colors.accent,
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="relative z-10">
                              {button.icon && (
                                <div
                                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                  style={{ backgroundColor: `${themeConfig.colors.accent}20` }}
                                >
                                  <span className="text-2xl">{button.icon}</span>
                                </div>
                              )}
                              <h3
                                className="text-xl md:text-2xl font-bold mb-2"
                                style={{ color: themeConfig.colors.accent }}
                              >
                                {button.title}
                              </h3>
                              <p
                                className="text-base mb-4"
                                style={{ color: themeConfig.colors.textSecondary }}
                              >
                                {button.description}
                              </p>
                              <div
                                className="inline-flex items-center gap-2 font-semibold"
                                style={{ color: themeConfig.colors.accent }}
                              >
                                <span>{button.buttonText || 'Learn More'}</span>
                                <motion.span
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  →
                                </motion.span>
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    );

                  case 'flags':
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12"
                      >
                        {section.items.map((country, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer overflow-hidden"
                            style={{
                              backgroundColor: 'rgba(205, 173, 125, 0.05)',
                              border: `2px solid ${themeConfig.colors.accent}30`,
                              transition: themeConfig.animation.transition.normal,
                            }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: 'rgba(205, 173, 125, 0.1)',
                              borderColor: themeConfig.colors.accent,
                            }}
                          >
                            {/* Flag Image */}
                            <div className="w-full h-64 lg:h-96 flex items-center justify-center overflow-hidden rounded-lg">
                              <img
                                src={country.image}
                                alt={country.name}
                                className="w-full h-full object-cover"
                                style={{
                                  transition: themeConfig.animation.transition.normal,
                                }}
                              />
                            </div>
                            
                            {/* Country Name - Shows on Hover */}
                            <motion.div
                              className="text-center"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 0, y: 10 }}
                              whileHover={{ opacity: 1, y: 0 }}
                            >
                              <span
                                className="text-lg font-bold px-4 py-2 rounded-lg inline-block"
                                style={{
                                  color: themeConfig.colors.accent,
                                  backgroundColor: 'rgba(205, 173, 125, 0.2)',
                                }}
                              >
                                {country.name}
                              </span>
                            </motion.div>
                            
                            {/* Overlay on hover */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                              style={{
                                background: `linear-gradient(to bottom, transparent, rgba(28, 50, 74, 0.8))`,
                              }}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    );

                  case 'faq':
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="my-12 space-y-4"
                      >
                        {section.items.map((faq, i) => {
                          const faqKey = `${index}-${i}`;
                          const isOpen = openFaqIndex === faqKey;
                          
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="rounded-2xl overflow-hidden"
                              style={{
                                backgroundColor: 'rgba(205, 173, 125, 0.05)',
                                border: `2px solid ${isOpen ? themeConfig.colors.accent : `${themeConfig.colors.accent}30`}`,
                                transition: themeConfig.animation.transition.normal,
                              }}
                            >
                              {/* Question */}
                              <button
                                onClick={() => setOpenFaqIndex(isOpen ? null : faqKey)}
                                className="w-full p-6 flex items-center justify-between cursor-pointer text-left"
                                style={{
                                  backgroundColor: isOpen ? 'rgba(205, 173, 125, 0.1)' : 'transparent',
                                  transition: themeConfig.animation.transition.normal,
                                }}
                              >
                                <h3
                                  className="text-lg md:text-xl font-bold pr-4"
                                  style={{ color: isOpen ? themeConfig.colors.accent : themeConfig.colors.textPrimary }}
                                >
                                  {faq.question}
                                </h3>
                                <motion.div
                                  animate={{ rotate: isOpen ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown
                                    size={24}
                                    style={{ color: themeConfig.colors.accent }}
                                  />
                                </motion.div>
                              </button>

                              {/* Answer */}
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                  >
                                    <div
                                      className="p-6 pt-6"
                                      style={{
                                        color: themeConfig.colors.textSecondary,
                                        borderTop: `1px solid ${themeConfig.colors.accent}20`,
                                      }}
                                    >
                                      {Array.isArray(faq.answer) ? (
                                        <div className="space-y-4">
                                          {faq.answer.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-base md:text-lg leading-relaxed">
                                              {paragraph}
                                            </p>
                                          ))}
                                        </div>
                                      ) : (
                                        <p className="text-base md:text-lg leading-relaxed">
                                          {faq.answer}
                                        </p>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    );

                  case 'contact':
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="my-12 space-y-8"
                      >
                        {/* Contact Info & Map Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Contact Information */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl space-y-6"
                            style={{
                              backgroundColor: 'rgba(205, 173, 125, 0.05)',
                              border: `1px solid ${themeConfig.colors.accent}30`,
                            }}
                          >
                            <h3
                              className="text-2xl font-bold mb-6"
                              style={{ color: themeConfig.colors.accent }}
                            >
                              İletişim Bilgileri
                            </h3>
                            
                            {section.contactInfo?.map((info, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div
                                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${themeConfig.colors.accent}20` }}
                                >
                                  <span className="text-2xl">{info.icon}</span>
                                </div>
                                <div>
                                  <h4
                                    className="font-semibold mb-1"
                                    style={{ color: themeConfig.colors.textPrimary }}
                                  >
                                    {info.label}
                                  </h4>
                                  <p
                                    className="text-base"
                                    style={{ color: themeConfig.colors.textSecondary }}
                                  >
                                    {info.value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </motion.div>

                          {/* Google Maps */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden"
                            style={{
                              border: `1px solid ${themeConfig.colors.accent}30`,
                            }}
                          >
                            <iframe
                              src={section.mapUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Google Maps Location"
                            />
                          </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="p-8 rounded-2xl"
                          style={{
                            backgroundColor: 'rgba(205, 173, 125, 0.05)',
                            border: `1px solid ${themeConfig.colors.accent}30`,
                          }}
                        >
                          <h3
                            className="text-2xl font-bold mb-6"
                            style={{ color: themeConfig.colors.accent }}
                          >
                            Bize Ulaşın
                          </h3>

                          <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            alert('Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağız.');
                          }}>
                            {/* Name-Surname */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                            >
                              <label
                                className="block text-sm font-semibold mb-2"
                                style={{ color: themeConfig.colors.textPrimary }}
                              >
                                Ad Soyad *
                              </label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg outline-none"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: `2px solid ${themeConfig.colors.accent}30`,
                                  color: themeConfig.colors.textPrimary,
                                  transition: themeConfig.animation.transition.normal,
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = themeConfig.colors.accent;
                                  e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }}
                                placeholder="Ad Soyad"
                              />
                            </motion.div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                              >
                                <label
                                  className="block text-sm font-semibold mb-2"
                                  style={{ color: themeConfig.colors.textPrimary }}
                                >
                                  E-posta *
                                </label>
                                <input
                                  type="email"
                                  required
                                  className="w-full px-4 py-3 rounded-lg outline-none"
                                  style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    border: `2px solid ${themeConfig.colors.accent}30`,
                                    color: themeConfig.colors.textPrimary,
                                    transition: themeConfig.animation.transition.normal,
                                  }}
                                  onFocus={(e) => {
                                    e.target.style.borderColor = themeConfig.colors.accent;
                                    e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                  }}
                                  onBlur={(e) => {
                                    e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                  }}
                                  placeholder="ornek@email.com"
                                />
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                              >
                                <label
                                  className="block text-sm font-semibold mb-2"
                                  style={{ color: themeConfig.colors.textPrimary }}
                                >
                                  Telefon *
                                </label>
                                <input
                                  type="tel"
                                  required
                                  className="w-full px-4 py-3 rounded-lg outline-none"
                                  style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    border: `2px solid ${themeConfig.colors.accent}30`,
                                    color: themeConfig.colors.textPrimary,
                                    transition: themeConfig.animation.transition.normal,
                                  }}
                                  onFocus={(e) => {
                                    e.target.style.borderColor = themeConfig.colors.accent;
                                    e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                  }}
                                  onBlur={(e) => {
                                    e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                  }}
                                  placeholder="+90 555 123 4567"
                                />
                              </motion.div>
                            </div>

                            {/* Message */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7 }}
                            >
                              <label
                                className="block text-sm font-semibold mb-2"
                                style={{ color: themeConfig.colors.textPrimary }}
                              >
                                Mesaj *
                              </label>
                              <textarea
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg outline-none resize-none"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: `2px solid ${themeConfig.colors.accent}30`,
                                  color: themeConfig.colors.textPrimary,
                                  transition: themeConfig.animation.transition.normal,
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = themeConfig.colors.accent;
                                  e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }}
                                placeholder="Mesajınızı buraya yazın..."
                              />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                              type="submit"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.8 }}
                              className="w-full px-8 py-4 rounded-full font-bold text-lg"
                              style={{
                                backgroundColor: themeConfig.colors.accent,
                                color: themeConfig.colors.primary,
                                boxShadow: themeConfig.effects.shadow.accent,
                              }}
                              whileHover={{
                                scale: 1.02,
                                boxShadow: `0 20px 40px ${themeConfig.colors.accent}60`,
                              }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Mesaj Gönder
                            </motion.button>
                          </form>
                        </motion.div>
                      </motion.div>
                    );

                  case 'form':
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="my-12 p-8 rounded-2xl"
                        style={{
                          backgroundColor: 'rgba(205, 173, 125, 0.05)',
                          border: `1px solid ${themeConfig.colors.accent}30`,
                        }}
                      >
                        <form className="space-y-6" onSubmit={(e) => {
                          e.preventDefault();
                          alert('Form başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
                        }}>
                          {/* Name-Surname */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            <label
                              className="block text-sm font-semibold mb-2"
                              style={{ color: themeConfig.colors.textPrimary }}
                            >
                              Ad Soyad *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-4 py-3 rounded-lg outline-none"
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: `2px solid ${themeConfig.colors.accent}30`,
                                color: themeConfig.colors.textPrimary,
                                transition: themeConfig.animation.transition.normal,
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = themeConfig.colors.accent;
                                e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                              }}
                              placeholder="Ad Soyad"
                            />
                          </motion.div>

                          {/* Email & Phone */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                            >
                              <label
                                className="block text-sm font-semibold mb-2"
                                style={{ color: themeConfig.colors.textPrimary }}
                              >
                                E-posta *
                              </label>
                              <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg outline-none"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: `2px solid ${themeConfig.colors.accent}30`,
                                  color: themeConfig.colors.textPrimary,
                                  transition: themeConfig.animation.transition.normal,
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = themeConfig.colors.accent;
                                  e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }}
                                placeholder="ornek@email.com"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                            >
                              <label
                                className="block text-sm font-semibold mb-2"
                                style={{ color: themeConfig.colors.textPrimary }}
                              >
                                Telefon *
                              </label>
                              <input
                                type="tel"
                                required
                                className="w-full px-4 py-3 rounded-lg outline-none"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: `2px solid ${themeConfig.colors.accent}30`,
                                  color: themeConfig.colors.textPrimary,
                                  transition: themeConfig.animation.transition.normal,
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = themeConfig.colors.accent;
                                  e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }}
                                placeholder="+90 555 123 4567"
                              />
                            </motion.div>
                          </div>

                          {/* School & City */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                            >
                              <label
                                className="block text-sm font-semibold mb-2"
                                style={{ color: themeConfig.colors.textPrimary }}
                              >
                                Okul *
                              </label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg outline-none"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: `2px solid ${themeConfig.colors.accent}30`,
                                  color: themeConfig.colors.textPrimary,
                                  transition: themeConfig.animation.transition.normal,
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = themeConfig.colors.accent;
                                  e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }}
                                placeholder="Okul Adı"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                            >
                              <label
                                className="block text-sm font-semibold mb-2"
                                style={{ color: themeConfig.colors.textPrimary }}
                              >
                                Şehir *
                              </label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg outline-none"
                                style={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  border: `2px solid ${themeConfig.colors.accent}30`,
                                  color: themeConfig.colors.textPrimary,
                                  transition: themeConfig.animation.transition.normal,
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = themeConfig.colors.accent;
                                  e.target.style.backgroundColor = 'rgba(205, 173, 125, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }}
                                placeholder="Şehir"
                              />
                            </motion.div>
                          </div>

                          {/* Interested Program */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          >
                            <label
                              className="block text-sm font-semibold mb-2"
                              style={{ color: themeConfig.colors.textPrimary }}
                            >
                              İlgilendiğiniz Program *
                            </label>
                            <select
                              required
                              className="w-full px-4 py-3 rounded-lg outline-none cursor-pointer"
                              style={{
                                backgroundColor: themeConfig.colors.bgSecondary,
                                border: `2px solid ${themeConfig.colors.accent}30`,
                                color: themeConfig.colors.textPrimary,
                                transition: themeConfig.animation.transition.normal,
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = themeConfig.colors.accent;
                                e.target.style.backgroundColor = themeConfig.colors.primary;
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = `${themeConfig.colors.accent}30`;
                                e.target.style.backgroundColor = themeConfig.colors.bgSecondary;
                              }}
                            >
                              <option value="" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textSecondary }}>Program Seçiniz</option>
                              <option value="lise-degisim" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Lise Değişim</option>
                              <option value="akademik-ay" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Akademik Ay</option>
                              <option value="lisans" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Lisans</option>
                              <option value="yuksek-lisans" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Yüksek Lisans</option>
                              <option value="diploma-sertifika" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Diploma & Sertifika</option>
                              <option value="dil-okulu" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Dil Okulu</option>
                              <option value="yaz-okulu" style={{ backgroundColor: themeConfig.colors.bgSecondary, color: themeConfig.colors.textPrimary }}>Yaz Okulu</option>
                            </select>
                          </motion.div>

                          {/* Submit Button */}
                          <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="w-full px-8 py-4 rounded-full font-bold text-lg"
                            style={{
                              backgroundColor: themeConfig.colors.accent,
                              color: themeConfig.colors.primary,
                              boxShadow: themeConfig.effects.shadow.accent,
                            }}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: `0 20px 40px ${themeConfig.colors.accent}60`,
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Başvuru Gönder
                          </motion.button>
                        </form>
                      </motion.div>
                    );

                  default:
                    return null;
                }
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-2xl text-center"
              style={{
                backgroundColor: 'rgba(205, 173, 125, 0.05)',
                border: `1px solid ${themeConfig.colors.accent}30`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                Daha Fazla Bilgi Almak İster Misiniz?
              </h3>
              <p
                className="mb-6"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Edubucks AI hakkında daha fazla bilgi edinin ve demo talep edin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/edubucks-ai"
                  className="px-6 py-3 rounded-full font-bold"
                  style={{
                    backgroundColor: themeConfig.colors.accent,
                    color: themeConfig.colors.primary,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Edubucks AI'yı Keşfet
                </motion.a>
                <motion.a
                  href="/book-a-demo"
                  className="px-6 py-3 rounded-full font-bold"
                  style={{
                    backgroundColor: 'transparent',
                    color: themeConfig.colors.accent,
                    border: `2px solid ${themeConfig.colors.accent}`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo Talep Et
                </motion.a>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;

