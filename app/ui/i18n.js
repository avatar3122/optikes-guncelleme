/* OptiKes - arayüz dili (Türkçe / English)
   Kaynak metinler Türkçe yazılır; İngilizce seçiliyse ekrana gelen her yazı (metin düğümleri, title, placeholder)
   bu sözlükle çevrilir. Değişken içeren yazılar {0}, {1} yer tutucularıyla eşleşir; yakalanan parçalar da çevrilir.
   Yeni bir Türkçe yazı eklediğinizde buraya İngilizcesini de ekleyin (eksikler CLO_DEV'de konsola yazılır). */
(function () {
  'use strict';
  const KEY = 'optikes.lang';
  let saved = null; try { saved = localStorage.getItem(KEY); } catch (e) { }
  const sys = window.api && window.api.defaultLang ? window.api.defaultLang : (/^tr/i.test(navigator.language || '') ? 'tr' : 'en');
  const LANG = saved === 'en' || saved === 'tr' ? saved : sys;
  window.LANG = LANG;
  window.okLoc = () => LANG === 'en' ? 'en-US' : 'tr-TR';
  window.setLang = l => { try { localStorage.setItem(KEY, l); } catch (e) { } location.reload(); };

  const EN = {
    // ---- Üst çubuk ve menüler ----
    'Dikdörtgen parçalar, boydan boya kesim': 'Rectangular parts, edge-to-edge (guillotine) cuts',
    "DXF'ten şekilli parçalar, CNC yerleşim planı": 'Shaped parts from DXF, CNC nesting layout',
    'Panel Kesim': 'Panel Cutting',
    'Yeni sürüm hazır: kurmak için tıklayın (program yeniden başlar)': 'New version ready: click to install (the program restarts)',
    'Güncelle': 'Update', 'Güncelle {0}': 'Update {0}', 'Güncelle ({0})': 'Update ({0})',
    'Güncelleme indiriliyor %{0}': 'Downloading update {0}%',
    'Hesapla': 'Calculate', 'Hesapla (Ctrl+Enter)': 'Calculate (Ctrl+Enter)',
    'Yeterli, sonucu al': 'Enough, show result', 'Durduruluyor…': 'Stopping…',
    'Aramayı durdur ve o ana kadar bulunan en iyi planı göster': 'Stop searching and show the best plan found so far',
    'Kaydet': 'Save', 'Projeyi kaydet (Ctrl+S)': 'Save project (Ctrl+S)', 'Diğer seçenekler': 'More options',
    'Projeyi kaydet (Ctrl+S) — {0} Son kayıt: {1}': 'Save project (Ctrl+S) — {0} Last saved: {1}',
    'Projeyi kaydet (.oks)': 'Save project (.oks)', 'Proje aç…': 'Open project…',
    'PDF olarak dışa aktar': 'Export as PDF', 'Yazdır': 'Print',
    'Yerleşim planı (DXF, CNC için)': 'Nesting layout (DXF, for CNC)',
    'Kesim listesi (CSV)': 'Cut list (CSV)', 'Parça listesi (CSV)': 'Parts list (CSV)',
    'Kesim planı görseli (PNG)': 'Cutting plan image (PNG)', 'Son projeler': 'Recent projects',
    'Ayarlar': 'Settings', 'Lisans durumu': 'License status', 'Oturum aç': 'Sign in', 'Menü': 'Menu',
    'Yeni proje': 'New project', 'Örnek proje yükle': 'Load sample project', 'Kullanım rehberi': 'User guide',
    'Lisans / Üyelik': 'License / Membership', 'İstek ve öneri gönder': 'Send a request or suggestion',
    'Lisans satın al (Telegram)': 'Buy a license (Telegram)', 'Güncellemeleri denetle': 'Check for updates',
    'Hakkında': 'About', 'Uzat': 'Extend', 'Bu oturumda gizle': 'Hide for this session',
    'Dil / Language': 'Dil / Language',

    // ---- Sol panel ----
    'Parçalar': 'Parts', 'Malzeme Levhaları': 'Stock Sheets', 'Malzeme levhaları': 'Stock sheets', 'Seçenekler': 'Options',
    "DXF'ten ekle": 'Add from DXF', 'Levha yükle (DXF)': 'Load sheet (DXF)',
    'AutoCAD vb. ile çizilmiş parçaları DXF olarak ekleyin; ölçüler çizimden okunur (birden fazla dosya seçebilirsiniz)': 'Add parts drawn in AutoCAD etc. as DXF; sizes are read from the drawing (you can select several files)',
    'AutoCAD vb. ile çizilmiş, eksik ya da kullanılmış bölgesi olan levhayı DXF olarak yükleyin': 'Load a sheet drawn in AutoCAD etc. with missing or used areas as DXF',
    'Kesim / testere bıçağı kalınlığı': 'Kerf / saw blade thickness', 'Parça etiketleri': 'Part labels',
    'Malzemeden sadece bir tane levha kullan': 'Use only one sheet per material', 'Malzemeyi dikkate al': 'Consider material',
    'Kenar bantlama': 'Edge banding', 'Damar yönünü dikkate al': 'Consider grain direction',
    'Artık stoğunu kullan (önce artıklar)': 'Use offcut stock (offcuts first)', 'Fire azaltma seviyesi': 'Waste reduction level',
    'Hızlı': 'Fast', 'Normal': 'Normal', 'Derin': 'Deep', 'Maksimum': 'Maximum',
    'Hızlı (3 sn)': 'Fast (3 s)', 'Normal (10 sn)': 'Normal (10 s)', 'Derin (30 sn)': 'Deep (30 s)', 'Maksimum (90 sn)': 'Maximum (90 s)',
    'Özel ({0} ms)': 'Custom ({0} ms)', 'Özel ({0} sn)': 'Custom ({0} s)',
    'Uzunluk': 'Length', 'Genişlik': 'Width', 'Adet': 'Qty', 'Etiket': 'Label', 'Malzeme': 'Material', 'Damar': 'Grain',
    'Kenar bandı': 'Edge band', 'Tümünü seç': 'Select all', 'Etkin/pasif': 'Enable/disable', 'Etkin / pasif': 'Enable / disable', 'Sil': 'Delete',
    "DXF'ten yüklenen levha: kullanılamaz bölgeleri var": 'Sheet loaded from DXF: has unusable areas',
    'Boyuna ↕': 'Lengthwise ↕', 'Enine ↔': 'Crosswise ↔', 'Uzun kenar {0}': 'Long edge {0}', 'Kısa kenar {0}': 'Short edge {0}',
    'Uzun kenar': 'Long edge', 'Kısa kenar': 'Short edge',
    '{0} satır seçili': '{0} rows selected', 'Toplu düzenle…': 'Bulk edit…', 'Seçimi kaldır': 'Clear selection',
    '{0} satır silindi (geri almak için Ctrl+Z)': '{0} rows deleted (Ctrl+Z to undo)',
    '{0} satırı düzenle': 'Edit {0} rows', 'Boş bıraktığınız alanlar değişmez.': 'Fields you leave empty are not changed.',
    'Uzunluk ({0})': 'Length ({0})', 'Genişlik ({0})': 'Width ({0})', 'ör. 4 veya *2': 'e.g. 4 or *2',
    'Damar yönü': 'Grain direction', 'Değiştirme': "Don't change", 'Bant yok': 'No band', 'Dört kenar': 'All four edges',
    'İki uzun kenar': 'Both long edges', 'İki kısa kenar': 'Both short edges', 'İptal': 'Cancel', 'Uygula': 'Apply',
    'Geçersiz ölçü': 'Invalid size', 'Geçersiz sayı': 'Invalid number',
    'Not: malzemeye göre hesap için "Malzemeyi dikkate al" seçeneğini açın': 'Note: turn on "Consider material" to calculate by material',
    'Tablo işlemleri:': 'Table actions:', "CSV / Excel'den içe aktar…": 'Import from CSV / Excel…', 'Panodan yapıştır': 'Paste from clipboard',
    'Alana göre sırala': 'Sort by area', 'Tümünü temizle': 'Clear all',
    "CSV biçimi: Uzunluk;Genişlik;Adet;Etiket;Malzeme (Excel'den kopyalanan sütunlar da yapıştırılabilir).": 'CSV format: Length;Width;Qty;Label;Material (columns copied from Excel can also be pasted).',
    'Panoya erişilemedi': 'Could not access the clipboard', '{0} satır içe aktarıldı': '{0} rows imported',

    // ---- Araç çubuğu ----
    'Geri al (Ctrl+Z)': 'Undo (Ctrl+Z)', 'Yinele (Ctrl+Y)': 'Redo (Ctrl+Y)', 'Tabloları kilitle': 'Lock tables',
    'Sığdır': 'Fit', 'Yakınlaştır': 'Zoom in', 'Uzaklaştır': 'Zoom out', 'Yazıyı büyüt': 'Larger text', 'Yazıyı küçült': 'Smaller text',
    'Renkli parçalar': 'Colored parts', 'Ölçüleri göster': 'Show dimensions', 'Kesim sırası numaraları': 'Cut order numbers',
    'Artık alanları tarama ile göster': 'Hatch waste areas', 'Parça numaraları': 'Part numbers',
    'Elle düzenle: parçaları sürükleyin (aynı ölçüdeki parçalarla yer değiştirme veya boş alana taşıma)': 'Edit manually: drag parts (swap with same-size parts or move into free space)',
    'Elle düzenle: parçaları sürükleyin; R veya sağ tık ile döndürün': 'Edit manually: drag parts; rotate with R or right-click',
    'Otomatik yer algılama: açıkken parça boşluğa kendiliğinden oturur, kapalıyken bıraktığınız yerde kalır': 'Auto placement: when on, the part snaps into the free space; when off, it stays where you drop it',
    'Oto. yer': 'Auto place',
    'Plandaki son elle düzenleme geri alındı': 'Last manual edit on the plan undone', 'Geri alındı': 'Undone', 'Yinelendi': 'Redone',
    'Yinelenecek işlem yok': 'Nothing to redo', 'Geri alınacak işlem yok': 'Nothing to undo',
    'Otomatik yer algılama açık: parça bırakıldığı boşluğun en yakın köşesine oturur': 'Auto placement on: the part snaps to the nearest corner of the free space',
    'Otomatik yer algılama kapalı: parça bırakıldığı yerde kalır, gereken kesimler eklenir': 'Auto placement off: the part stays where dropped; required cuts are added',
    'Elle düzenleme açık: parçayı aynı ölçüdeki bir parçanın üstüne bırakın (yer değiştirir) veya kesikli çizgili boş alana taşıyın.': 'Manual editing on: drop a part onto a same-size part (they swap) or move it into a dashed free area.',
    'Otomatik yer algılama açık: çakışan konumda parça en yakın uygun yere kayar': 'Auto placement on: on overlap the part moves to the nearest valid spot',
    'Otomatik yer algılama kapalı: parça yalnızca bıraktığınız yerde kalır': 'Auto placement off: the part only stays where you drop it',
    'Elle düzenleme açık: parçayı sürükleyin; R tuşu veya sağ tık ile döndürün. Çakışan konum kırmızı görünür ve kabul edilmez.': 'Manual editing on: drag a part; rotate with R or right-click. Overlapping positions show red and are not accepted.',
    'Önce hesaplayın': 'Calculate first',

    // ---- Çizim alanı ----
    'Parçaları ve malzeme levhalarını girip': 'Enter the parts and stock sheets, then press', "'ya basın.": '.',
    'DXF parçalarını yükleyin, levha ölçüsünü girin ve': 'Load DXF parts, enter the sheet size and press',
    'Hiçbir parça yerleştirilemedi. Ölçüleri ve levha adetlerini kontrol edin.': 'No parts could be placed. Check the sizes and sheet quantities.',
    'Hiçbir parça yerleştirilemedi. Parça ve levha ölçülerini kontrol edin.': 'No parts could be placed. Check the part and sheet sizes.',
    'Levha {0} / {1}': 'Sheet {0} / {1}', '%{0} dolu': '{0}% full', 'elle düzenlendi': 'edited manually', 'Artık': 'Offcut',
    'Yerleştirilemeyen parçalar ({0}):': 'Parts that could not be placed ({0}):', 'Kullanılamaz': 'Unusable',
    '{0}. Levha adedini artırın veya ölçüleri kontrol edin.': '{0}. Increase the sheet quantity or check the sizes.',
    '{0} parça': '{0} parts',

    // ---- Sağ panel ----
    'Genel istatistikler': 'General statistics', 'Levha istatistikleri': 'Sheet statistics', 'Akıllı öneriler': 'Smart suggestions',
    'Hesaplamadan sonra öneriler burada görünür.': 'Suggestions appear here after calculation.', 'Artık stoğu': 'Offcut stock', 'Kesimler': 'Cuts',
    'Kullanılan malzeme levhası': 'Stock sheets used', 'Toplam kullanılan alan': 'Total used area', 'Toplam boş alan': 'Total waste area',
    'Toplam kesim': 'Total cuts', 'Toplam kesim uzunluğu': 'Total cut length', 'Kenar payı': 'Edge trim', 'Optimizasyon önceliği': 'Optimization priority',
    'En az kesim': 'Fewest cuts', 'En az boş alan': 'Least waste', 'Toplam kenar bandı': 'Total edge band', 'Yerleşen parça': 'Placed parts',
    'Yerleştirilemeyen': 'Not placed', 'Kullanılan alan': 'Used area', 'Boş alan': 'Waste area', 'Kesim uzunluğu': 'Cut length',
    'Boş parça': 'Waste pieces', 'Parça': 'Part', 'Kesim': 'Cut', 'Sonuç': 'Result',
    "Plan elle düzenlendi. Öneriler ilk hesaplanan plana göreydi; güncel öneriler için tekrar Hesapla'ya basın.": 'The plan was edited manually. Suggestions were for the original plan; press Calculate again for current suggestions.',
    'Karşılaştır': 'Compare', 'Öneri yok.': 'No suggestions.',
    'Stokta': 'In stock:', 'artık parça var.': 'offcuts.', 'artık parça var (toplam {0}).': 'offcuts (total {0}).',
    "Kısa kenarı {0}'den küçük artıklar saklanmaz.": 'Offcuts with a short side under {0} are not kept.',
    "Kısa kenarı {0}'dan küçük artıklar saklanmaz.": 'Offcuts with a short side under {0} are not kept.',
    'Bu plandan': 'This plan produces', 'yeni artık çıkıyor.': 'new offcuts.', 'yeni artık çıkıyor,': 'new offcuts,', 'stok artığı kullanıldı.': 'stock offcuts used.',
    'Stoğu güncelle': 'Update stock', 'Listeyi aç': 'Open list',
    '{0} artık stoğa eklendi': '{0} offcuts added to stock', '{0} artık stoğa eklendi, {1} kullanılan artık stoktan düşüldü': '{0} offcuts added to stock, {1} used offcuts removed from stock',
    "Kaydedilen artıklar, Seçenekler'de": 'Saved offcuts are used first in later calculations when', 'Artık stoğunu kullan': 'Use offcut stock',
    'açıksa sonraki hesaplamalarda önce kullanılır.': 'is on in Options.', 'Stokta artık yok.': 'No offcuts in stock.',
    'Ölçü ({0})': 'Size ({0})', 'Tarih': 'Date', 'Elle eklemek için:': 'To add manually:', 'Ekle': 'Add', 'Tümünü sil': 'Delete all',
    'Artık stoğu temizlendi': 'Offcut stock cleared', 'Ölçüleri girin': 'Enter the sizes',

    // ---- Öneri / karşılaştırma ----
    "Öneri uygulandı: {0}. Daha derin arama için tekrar Hesapla'ya basabilirsiniz.": 'Suggestion applied: {0}. Press Calculate again for a deeper search.',
    'Karşılaştırma: şimdiki plan ve öneri': 'Comparison: current plan vs. suggestion', 'Şimdiki plan': 'Current plan', 'Öneri': 'Suggestion',
    'Kullanılan levha': 'Sheets used', 'Doluluk': 'Utilization', 'Kesim sayısı': 'Number of cuts', 'Yerleşmeyen parça': 'Unplaced parts',
    'Kapat': 'Close', 'Öneriyi uygula': 'Apply suggestion',
    'Fire azaltma araması {0} varyasyonu değerlendirdi; seçilen yöntem: {1} ({2} sn).': 'The waste reduction search evaluated {0} variations; chosen method: {1} ({2} s).',
    'Son levha (L{0}) sadece %{1} dolu. Kalan alan başka bir iş için artık olarak saklanabilir.': 'The last sheet (S{0}) is only {1}% full. The remaining area can be kept as an offcut for another job.',
    'Son levhadaki boşluklara fazladan sığabilecek parçalar: {0}': 'Extra parts that would fit in the free space of the last sheet: {0}',
    'Değerlendirilebilir artık parçalar: {0}': 'Usable offcuts: {0}',
    'Damar yönü kısıtı kaldırılırsa {0} → {1} levha, boş alan {2} → {3} olur.': 'Without the grain direction constraint: {0} → {1} sheets, waste {2} → {3}.',
    'Damar yönü kısıtı kaldırılmış': 'Grain direction constraint removed',
    '"En az kesim" önceliği aynı levha sayısıyla kesimi {0} → {1} adede, kesim uzunluğunu {2} → {3} değerine düşürüyor.': 'The "Fewest cuts" priority reduces cuts {0} → {1} and cut length {2} → {3} with the same number of sheets.',
    '"En az kesim" önceliği': '"Fewest cuts" priority',
    'Kenar payı ({0}) olmadan {1} levha yeterli olurdu.': 'Without the edge trim ({0}), {1} sheets would be enough.', 'Kenar payı olmadan': 'Without edge trim',
    '{0} parça yerleştirilemedi. Levha adedini artırın veya ölçüleri kontrol edin.': '{0} parts could not be placed. Increase the sheet quantity or check the sizes.',

    // ---- Elle düzenleme ----
    'Sığmıyor: parça {0}×{1}, boşluk {2}×{3} {4}': "Doesn't fit: part {0}×{1}, space {2}×{3} {4}",
    'Sığmıyor: parça {0}×{1}, boşluk {2}×{3} {4} — döndürürseniz sığar (R, sağ tık veya fare tekerleği)': "Doesn't fit: part {0}×{1}, space {2}×{3} {4} — fits if rotated (R, right-click or mouse wheel)",
    'Sığmıyor: parça {0}×{1}, boşluk {2}×{3} {4} — döndürülse sığardı ama parçanın damar yönü var': "Doesn't fit: part {0}×{1}, space {2}×{3} {4} — would fit if rotated, but the part has a grain direction",
    'Burada boş alan yok': 'No free space here', 'Levhanın dışına taşıyor': 'Goes outside the sheet', 'Kullanılamaz bölgeye giriyor': 'Enters an unusable area',
    'Başka bir parçanın üstüne geliyor': 'Overlaps another part',
    'Bu konumda boydan boya kesimle ayrılamıyor (parçalar arasında en az {0} testere payı ve düz bir kesim hattı olmalı)': 'Cannot be separated by edge-to-edge cuts here (parts need at least {0} kerf and a straight cut line between them)',
    'Sadece aynı ölçüdeki parçalarla yer değiştirilebilir': 'Can only be swapped with parts of the same size', 'Parça farklı malzemeli levhaya taşınamaz': 'A part cannot be moved to a sheet of a different material',
    '{0} — döndürürseniz olur (R, sağ tık veya tekerlek)': '{0} — works if rotated (R, right-click or wheel)',
    'Parçalar yer değiştirdi': 'Parts swapped', 'Parça taşındı; kesim planı güncellendi': 'Part moved; cutting plan updated',
    "Parça Levha {0}'e taşındı": 'Part moved to Sheet {0}', "Parça Levha {0}'a taşındı": 'Part moved to Sheet {0}', "Parça Levha {0}'ye taşındı": 'Part moved to Sheet {0}', "Parça Levha {0}'ya taşındı": 'Part moved to Sheet {0}',
    "Parça Levha {0}'e taşındı; Levha {1} boşaldı ve plandan çıkarıldı": 'Part moved to Sheet {0}; Sheet {1} became empty and was removed from the plan',
    "Parça Levha {0}'a taşındı; Levha {1} boşaldı ve plandan çıkarıldı": 'Part moved to Sheet {0}; Sheet {1} became empty and was removed from the plan',
    "Parça Levha {0}'ye taşındı; Levha {1} boşaldı ve plandan çıkarıldı": 'Part moved to Sheet {0}; Sheet {1} became empty and was removed from the plan',
    "Parça Levha {0}'ya taşındı; Levha {1} boşaldı ve plandan çıkarıldı": 'Part moved to Sheet {0}; Sheet {1} became empty and was removed from the plan',
    'İpucu: tutarken R tuşu, sağ tık veya fare tekerleği parçayı 90° döndürür': 'Tip: while holding, R, right-click or the mouse wheel rotates the part 90°',
    'Bu parçanın damar yönü işaretli; damar korunduğu için döndürülemez': 'This part has a grain direction; it cannot be rotated because the grain is kept',
    'Bu parçanın damar yönü işaretli; döndürülemez': 'This part has a grain direction; it cannot be rotated',
    'Parça 90° döndürüldü': 'Part rotated 90°', 'Döndürülemedi: {0}': 'Could not rotate: {0}',
    'Parça {0}': 'Part {0}', 'Parça {0} (döndürüldü)': 'Part {0} (rotated)', '(döndürüldü)': '(rotated)',

    // ---- Hesaplama ----
    'Hesaplama sadece masaüstü uygulamasında yapılabilir': 'Calculation is only available in the desktop app',
    'Lütfen en az bir parça girin': 'Please enter at least one part', 'Lütfen en az bir malzeme levhası girin': 'Please enter at least one stock sheet',
    'Hesaplama hatası: {0}': 'Calculation error: {0}', 'Arama durduruldu; o ana kadar bulunan en iyi plan gösteriliyor': 'Search stopped; showing the best plan found so far',
    'Ücretsiz deneme: {0} hesaplama hakkınız kaldı': 'Free trial: {0} calculations left', 'Son ücretsiz deneme hesaplamanızı yaptınız': 'You have used your last free trial calculation',
    'Öneri motoru hatası: {0}': 'Suggestion engine error: {0}',

    // ---- DXF ----
    'Sadece masaüstü uygulamasında': 'Only in the desktop app', 'DXF çizimi': 'DXF drawing', 'DXF okunamadı: {0}': 'Could not read DXF: {0}',
    'DXF levha': 'DXF sheet', 'Levha eklendi: {0}, {1} kullanılamaz alan': 'Sheet added: {0}, {1} unusable area', 'Levha eklendi: {0}': 'Sheet added: {0}',
    'Levha eklendi: {0}.': 'Sheet added: {0}.', 'Levha eklendi: {0}, {1} kullanılamaz alan.': 'Sheet added: {0}, {1} unusable area.',
    'Levha yüklendi': 'Sheet loaded',
    'Panel kesimde eksik bölgeler, giyotin kesime uygun olacak şekilde dikdörtgenlere yuvarlanır (güvenli tarafta kalır). Kesim planında taralı gösterilir.': 'In panel cutting, missing areas are rounded to rectangles suitable for guillotine cutting (on the safe side). They are shown hatched in the cutting plan.',
    'Çizimdeki en büyük şekil levha kabul edildi; dışındaki {0} şekil yok sayıldı.': 'The largest shape in the drawing was taken as the sheet; {0} other shapes were ignored.',
    '{0}: okunamadı ({1})': '{0}: could not be read ({1})', '{0}: kapalı şekil bulunamadı': '{0}: no closed shape found',
    "{0}: dikdörtgen değil, dış ölçüsüyle ({1}) alındı; bu dikdörtgenin %{2}'i parça. Daha az fire için CNC Nesting sekmesini deneyin.": '{0}: not a rectangle, taken by its outer size ({1}); the part is {2}% of this rectangle. Try the CNC Nesting tab for less waste.',
    "{0}: dikdörtgen değil, dış ölçüsüyle ({1}) alındı; bu dikdörtgenin %{2}'ı parça. Daha az fire için CNC Nesting sekmesini deneyin.": '{0}: not a rectangle, taken by its outer size ({1}); the part is {2}% of this rectangle. Try the CNC Nesting tab for less waste.',
    "{0}: dikdörtgen değil, dış ölçüsüyle ({1}) alındı; bu dikdörtgenin %{2}'si parça. Daha az fire için CNC Nesting sekmesini deneyin.": '{0}: not a rectangle, taken by its outer size ({1}); the part is {2}% of this rectangle. Try the CNC Nesting tab for less waste.',
    "{0}: dikdörtgen değil, dış ölçüsüyle ({1}) alındı; bu dikdörtgenin %{2}'sı parça. Daha az fire için CNC Nesting sekmesini deneyin.": '{0}: not a rectangle, taken by its outer size ({1}); the part is {2}% of this rectangle. Try the CNC Nesting tab for less waste.',
    '{0}: pah, oyuk gibi ayrıntılar dış ölçünün ({1}) içinde kalır; onlar ayrıca işlenir.': '{0}: details such as chamfers and pockets stay within the outer size ({1}); they are machined separately.',
    '{0}: ikili (binary) DXF desteklenmiyor': '{0}: binary DXF is not supported',
    '{0} parça eklendi: {1}': '{0} parts added: {1}', 'Parça eklenemedi.': 'No parts could be added.', "DXF'ten parça": 'Parts from DXF', '{0} parça eklendi': '{0} parts added',
    'İkili (binary) DXF desteklenmiyor; çizimi ASCII DXF olarak kaydedin': 'Binary DXF is not supported; save the drawing as ASCII DXF',
    'DXF içe aktarma': 'DXF import', 'Bu dosyada kapalı bir şekil bulunamadı.': 'No closed shape was found in this file.',
    "Ölçüler çok büyük görünüyor; Seçenekler'den": 'The sizes look too large; change the', "Ölçüler çok küçük görünüyor; Seçenekler'den": 'The sizes look too small; change the',
    'DXF birimi': 'DXF unit', 'ni değiştirip dosyayı yeniden yükleyin.': 'in Options and reload the file.',
    'DXF içe aktarıldı': 'DXF imported', '{0} farklı şekil, toplam {1} parça eklendi (birim: {2}).': '{0} different shapes, {1} parts in total added (unit: {2}).',
    '{0} şekil eklendi ({1} adet) · {2}': '{0} shapes added ({1} pcs) · {2}', 'Hilal': 'Crescent',
    'Parçalar eksik bölgelere ve dış hattın dışına yerleştirilmez; kenar payı bu bölgelerin çevresinde de uygulanır.': 'Parts are not placed in missing areas or outside the outline; the edge margin is also applied around these areas.',
    '{0} çizgi parçaların dışında kaldığı için alınmadı.': '{0} lines were skipped because they are outside the parts.',
    'Desteklenmeyen çizim öğeleri atlandı: {0}': 'Unsupported drawing entities skipped: {0}', 'Çizimde kapalı şekil bulunamadı.': 'No closed shape found in the drawing.',

    // ---- Proje ve dışa aktarma ----
    'Levha;Levha ölçüsü;#;Parça;Kesim;Sonuç;Etiket': 'Sheet;Sheet size;#;Piece;Cut;Result;Label', 'Uzunluk;Genişlik;Adet;Etiket;Malzeme': 'Length;Width;Qty;Label;Material',
    'OptiKes projesi': 'OptiKes project', 'Kaydedildi': 'Saved', 'Kaydedildi: {0}': 'Saved: {0}',
    'Dosya bulunamadı (taşınmış veya silinmiş olabilir); listeden çıkarıldı': 'File not found (it may have been moved or deleted); removed from the list',
    'Proje yüklendi': 'Project loaded', 'Proje dosyası okunamadı': 'Could not read the project file',
    'PDF kaydedildi': 'PDF saved', 'DXF kaydedildi: {0}': 'DXF saved: {0}',
    'OptiKes — Kesim Raporu': 'OptiKes — Cutting Report', 'OptiKes — CNC Yerleşim Raporu': 'OptiKes — CNC Nesting Report',
    'Genel': 'General', 'Levhalar': 'Sheets', 'Yerleşmeyen': 'Unplaced', 'Kesim yolu': 'Cut path', 'Boşluk / kenar payı': 'Spacing / margin',
    'Levha {0} / {1} — {2}': 'Sheet {0} / {1} — {2}',
    'Kullanılan alan: {0} ({1}) · Boş alan: {2} · Kesim: {3} · Kesim uzunluğu: {4} · Parça: {5} · Testere: {6}': 'Used area: {0} ({1}) · Waste area: {2} · Cuts: {3} · Cut length: {4} · Parts: {5} · Kerf: {6}',
    'Parça: {0} · Doluluk: {1}': 'Parts: {0} · Utilization: {1}',

    // ---- Ayarlar ----
    'Ölçü birimi (gösterim ve giriş)': 'Unit of measure (display and input)', 'inç': 'in',
    'Kenar payı (levha kenarından kırpma,': 'Edge trim (trimmed from sheet edges,', 'Fire azaltma arama süresi (ms)': 'Waste reduction search time (ms)',
    'Değişiklikte otomatik hesapla': 'Recalculate automatically on change', 'Kaydedilmiş projeyi otomatik kaydet': 'Auto-save saved projects',
    'Ölçüler seçili birimle girilir. Hücrelere': 'Sizes are entered in the selected unit. You can type expressions like',
    'gibi işlemler yazabilirsiniz. Ctrl+Enter: Hesapla, Ctrl+S: Kaydet, Ctrl+O: Aç, Ctrl+P: PDF.': 'into cells. Ctrl+Enter: Calculate, Ctrl+S: Save, Ctrl+O: Open, Ctrl+P: PDF.',

    // ---- Lisans ----
    'Lisans: {0} gün': 'License: {0} days', 'Deneme: {0}/{1} hesaplama': 'Trial: {0}/{1} calculations', 'Deneme sürümü': 'Trial version',
    'Lisanslı': 'Licensed', 'Lisans sahibi:': 'Licensed to:', 'Lisans sahibi: {0}': 'Licensed to: {0}', 'Lisans anahtarı gir': 'Enter license key',
    'Lisansınızın süresi bugün doluyor.': 'Your license expires today.', 'Kesintisiz kullanım için süreyi uzatın.': 'Extend it for uninterrupted use.',
    'Lisansınızın bitmesine {0} gün kaldı': 'Your license expires in {0} days', '({0}). Kesintisiz kullanım için süreyi uzatın.': '({0}). Extend it for uninterrupted use.',
    'Lisans süresini uzat': 'Extend license',
    'Süreyi uzatmak için bize yazın; mevcut anahtarınızın süresi uzatılır, yeni anahtar girmeniz gerekmez.': "Write to us to extend; your current key's term is extended, no new key needed.",
    'Telegram:': 'Telegram:', 'E-posta:': 'Email:',
    'Mesajınıza lisans anahtarınızın son 4 hanesini ekleyin:': 'Include the last 4 characters of your license key in your message:',
    "Telegram'dan yaz": 'Message on Telegram',
    'Ücretsiz deneme sona erdi': 'Free trial ended', 'Lisans süreniz doldu': 'Your license has expired', 'Lisans iptal edildi': 'License revoked',
    'Cihaz lisanstan çıkarıldı': 'Device removed from license', 'Bilgisayar saati hatalı': 'Computer clock is wrong', 'İnternet bağlantısı gerekli': 'Internet connection required',
    'Lisans gerekli': 'License required', 'Devam etmek için lisans anahtarınızı girin.': 'Enter your license key to continue.',
    'Etkinleştir': 'Activate', 'Cihaz kimliği:': 'Device ID:', 'Cihaz kimliği': 'Device ID', 'Kopyala': 'Copy', 'Yeniden dene': 'Retry', 'Programı kapat': 'Quit program',
    '{0} cihaz': '{0} devices', '1 cihaz': '1 device', 'Tanıtım %50 · son {0}': 'Launch offer 50% · {0} left',
    '1 Ay': '1 Month', '3 Ay': '3 Months', '6 Ay': '6 Months', '12 Ay': '12 Months', 'Tanıtım indirimi %50': 'Launch discount 50%',
    'Doğrulanıyor…': 'Verifying…', 'Lisans etkinleştirildi: {0}, {1} gün': 'License activated: {0}, {1} days', 'Etkinleştirilemedi': 'Could not activate',
    'Lisans işlemleri masaüstü uygulamasında yapılır': 'License actions are done in the desktop app',
    'Durum': 'Status', 'Müşteri': 'Customer', 'Paket': 'Plan', 'Bitiş': 'Expires', '{0} ({1} gün kaldı)': '{0} ({1} days left)', 'Cihaz': 'Devices',
    'Anahtar': 'Key', 'Son doğrulama': 'Last verified', 'Bağlı cihazlar': 'Connected devices', 'Yükleniyor…': 'Loading…',
    'Farklı bir lisans anahtarı girmek için:': 'To enter a different license key:', 'Lisans anahtarınızı girin:': 'Enter your license key:',
    'Ücretsiz deneme sürümünü kullanıyorsunuz.': 'You are using the free trial.', 'Ücretsiz deneme sürümünü kullanıyorsunuz (': 'You are using the free trial (',
    '/ {0} hesaplama hakkı kaldı).': '/ {0} calculations left).',
    'Şimdi doğrula': 'Verify now', 'Lisans doğrulandı': 'License verified', 'Doğrulanamadı': 'Could not verify', 'Bu cihazdan kaldır': 'Remove from this device',
    'Lisans bu bilgisayardan kaldırılsın mı? Tekrar kullanmak için anahtarı yeniden girmeniz gerekir.': 'Remove the license from this computer? You will need to enter the key again to use it.',
    'Lisans satın al': 'Buy a license', 'Anahtarı girin': 'Enter the key',
    'Cihaz listesi için internet bağlantısı gerekli.': 'An internet connection is needed for the device list.', 'Cihaz listesi alınamadı.': 'Could not get the device list.',
    'bugün': 'today', 'dün': 'yesterday', '{0} gün önce': '{0} days ago', 'Bu cihaz': 'This device',
    'Son görülme: {0}': 'Last seen: {0}', 'Son görülme: {0} · sürüm {1}': 'Last seen: {0} · version {1}',
    '{0} / {1} cihaz kullanılıyor · 30 günde kalan kaldırma hakkı: {2}': '{0} / {1} devices in use · removals left in 30 days: {2}',
    'Kaldır': 'Remove',
    '"{0}" bu lisanstan kaldırılsın mı? O bilgisayarda program kilitlenir; yeniden kullanmak için anahtar tekrar girilmelidir.': 'Remove "{0}" from this license? The program will lock on that computer; the key must be entered again to use it there.',
    'Cihaz kaldırıldı': 'Device removed', 'Kaldırılamadı': 'Could not remove', 'Cihaz kimliği kopyalandı': 'Device ID copied', 'Lisans anahtarını girin': 'Enter the license key',
    'Kontrol ediliyor…': 'Checking…', 'Lisans sürenizin bitmesine {0} gün kaldı': 'Your license expires in {0} days',
    // lisans istemcisi ve sunucu iletileri
    'Lisans anahtarı girilmemiş.': 'No license key entered.',
    'Lisans süreniz doldu. Programı kullanmaya devam etmek için yeni lisans anahtarı girin.': 'Your license has expired. Enter a new license key to keep using the program.',
    'Bu lisans iptal edilmiş. Yeni lisans anahtarı girin.': 'This license has been revoked. Enter a new license key.',
    'Bu bilgisayar lisanstan çıkarılmış. Lisans anahtarını yeniden girin.': 'This computer was removed from the license. Enter the license key again.',
    'Bu lisansın cihaz limiti dolu.': 'This license has reached its device limit.', 'Lisans anahtarı geçersiz.': 'Invalid license key.',
    'Ücretsiz deneme hakkınız (3 hesaplama) doldu. Devam etmek için lisans anahtarı girin.': 'Your free trial (3 calculations) is used up. Enter a license key to continue.',
    'Ücretsiz deneme hakkınız doldu. Devam etmek için lisans anahtarı girin.': 'Your free trial is used up. Enter a license key to continue.',
    'Bilgisayarın saati geri alınmış görünüyor. Saati düzeltip internete bağlanın.': "The computer's clock appears to have been set back. Fix the clock and connect to the internet.",
    'Lisans doğrulaması için internet bağlantısı gerekiyor (7 günden uzun süredir bağlanılmadı).': 'License verification needs an internet connection (not connected for more than 7 days).',
    'Lisans doğrulaması için internete bağlanın.': 'Connect to the internet to verify the license.',
    'Ücretsiz deneme için internet bağlantısı gerekiyor.': 'The free trial needs an internet connection.',
    'Lisans sunucusuna ulaşılamadı. İnternet bağlantınızı kontrol edin.': 'Could not reach the license server. Check your internet connection.',
    'Anahtar biçimi hatalı. Örnek: OPTK-XXXX-XXXX-XXXX-XXXX': 'Invalid key format. Example: OPTK-XXXX-XXXX-XXXX-XXXX',
    'Lisans satın almak için Telegram: @Optikes · e-posta: satis@cengoist.com': 'To buy a license, Telegram: @Optikes · email: satis@cengoist.com',
    'Lisans satın almak için Telegram: @Optikes · e-posta: satis@cengoist.com ·': 'To buy a license, Telegram: @Optikes · email: satis@cengoist.com ·',
    'Geçersiz veri': 'Invalid data',
    'İnternet bağlantısı yok. Mesajınız kaydedildi; bağlantı gelince otomatik gönderilecek.': 'No internet connection. Your message was saved and will be sent automatically when you are online.',
    'Mesajınız iletildi. Teşekkür ederiz!': 'Your message was sent. Thank you!',

    // ---- Sözleşme ----
    'Kullanım Sözleşmesi': 'License Agreement', 'Sözleşmeyi okudum ve kabul ediyorum.': 'I have read and accept the agreement.',
    'Kabul etmiyorum': 'I do not accept', 'Kabul et ve devam et': 'Accept and continue',

    // ---- İstek ve öneri ----
    'Bu özellik masaüstü uygulamasında kullanılabilir': 'This feature is available in the desktop app',
    'Hata bildirimi': 'Bug report', 'İstek': 'Request', 'Mesajınız': 'Your message', 'İletişim bilginiz (isteğe bağlı)': 'Your contact info (optional)',
    'Ne öneriyorsunuz, ne istiyorsunuz veya hangi sorunu yaşadınız? Hata ise neyi yaptığınızda olduğunu yazın.': 'What do you suggest or need, or what problem did you have? For a bug, describe what you were doing when it happened.',
    'Telefon veya Telegram kullanıcı adı': 'Phone or Telegram username', 'Ekran görüntüsü ekle': 'Attach screenshot',
    "Mesajınızla birlikte program sürümü, cihaz kimliği ve lisans bilginiz gönderilir; yalnızca destek amacıyla kullanılır. İsterseniz Telegram'dan (@Optikes) veya destek@cengoist.com adresinden de yazabilirsiniz.": 'Your program version, device ID and license info are sent with your message and used only for support. You can also write to us on Telegram (@Optikes) or at destek@cengoist.com.',
    'Gönder': 'Send', 'Lütfen mesajınızı yazın.': 'Please write your message.', 'Gönderiliyor…': 'Sending…', 'Mesajınız iletildi': 'Your message was sent', 'Gönderilemedi.': 'Could not send.',

    // ---- Hakkında / güncelleme ----
    'sürüm {0}': 'version {0}', 'Lisanslı: {0} · {1}, bitiş {2}': 'Licensed: {0} · {1}, expires {2}', 'Ücretsiz deneme sürümü': 'Free trial version',
    "Giyotin kesim optimizasyonu, şerit tabanlı dinamik programlama, sezgisel yöntemler, levha azaltma adımı ve tavlama araması ile fire kaybını en aza indirir. CNC Nesting sekmesinde DXF'ten şekilli parçaları gerçek şekilleriyle yerleştirir.": 'Minimizes waste with guillotine cut optimization, strip-based dynamic programming, heuristics, a sheet reduction step and annealing search. The CNC Nesting tab places shaped parts from DXF using their true shapes.',
    'Destek ve lisans: Telegram': 'Support and licensing: Telegram', 'OptiKes bir': 'OptiKes is a', 'ürünüdür · cengoist.com': 'product · cengoist.com',
    'Denetleniyor…': 'Checking…', 'Güncelleme sunucusuna ulaşılamadı.': 'Could not reach the update server.',
    'Taşınabilir sürüm kendini güncelleyemez; kurulum dosyasıyla kurulan sürümü kullanın.': 'The portable version cannot update itself; use the version installed with the setup file.',
    'Geliştirme sürümü.': 'Development version.', 'Yeni sürüm ({0}) indiriliyor; hazır olunca bildirim çıkacak.': 'New version ({0}) is downloading; you will be notified when it is ready.',
    'Program güncel (sürüm {0}).': 'The program is up to date (version {0}).',
    'Yeni sürüm ({0}) indiriliyor… %{1}': 'Downloading new version ({0})… {1}%', 'Yeni sürüm ({0}) hazır.': 'New version ({0}) is ready.',
    'Yeni sürüm ({0}) hazır. Bu güncelleme zorunludur.': 'New version ({0}) is ready. This update is mandatory.',
    'Güncelleme indirilemedi.': 'Could not download the update.', 'Güncelleme kuruluyor; program yeniden başlayacak…': 'Installing update; the program will restart…',
    'Yeniden başlat': 'Restart',

    // ---- Rehber ----
    'Kesilecek parçaların uzunluk, genişlik ve adedini yazın. Hücreye': 'Enter the length, width and quantity of the parts to cut. You can also type an expression like',
    'gibi işlem de yazabilirsiniz. Satırları seçip toplu düzenleyebilirsiniz.': 'into a cell. Select rows to edit them in bulk.',
    'Elinizdeki levhaların ölçüsünü ve adedini girin. Bir kısmı eksik ya da kullanılmış levhayı': 'Enter the size and quantity of the sheets you have. A partly missing or used sheet can be added from a drawing with',
    'ile çizimden ekleyebilirsiniz.': '.',
    'Testere bıçağı kalınlığı, damar yönü, kenar bandı ve': 'Saw blade thickness, grain direction, edge banding and the',
    'buradan ayarlanır. "Artık stoğunu kullan" açıksa önce kayıtlı artıklar kullanılır.': 'are set here. If "Use offcut stock" is on, saved offcuts are used first.',
    'Kesim planını çıkarır (Ctrl+Enter). Arama sürerken düğme': 'Creates the cutting plan (Ctrl+Enter). While searching the button becomes',
    'olur; basarsanız o ana kadarki en iyi plan gösterilir.': '; press it to see the best plan so far.',
    'Plan araçları': 'Plan tools',
    'Yakınlaştırma, renkli parçalar, ölçüler ve kesim sırası. Dört oklu düğmeyle': 'Zoom, colored parts, dimensions and cut order. The four-arrow button turns on',
    'elle düzenleme': 'manual editing', 'açılır: parçaları sürükleyin, R / sağ tık / tekerlekle döndürün, Ctrl+Z ile geri alın.': ': drag parts, rotate with R / right-click / wheel, undo with Ctrl+Z.',
    'Hesaplamadan sonra fireyi azaltacak öneriler burada çıkar.': 'After calculation, suggestions to reduce waste appear here.',
    'ile yan yana görün,': 'to see them side by side,', 'ile tek tıkla geçin.': 'to switch with one click.',
    'Şekilli parçalar için ikinci sekme: DXF çizimlerinizi yükleyin, program gerçek şekilleriyle iç içe yerleştirsin ve CNC için DXF çıktısı versin.': 'The second tab for shaped parts: load your DXF drawings, the program nests them by their true shapes and outputs DXF for CNC.',
    'Kaydet ve dışa aktar': 'Save and export', 'Projeyi kaydedin, PDF / CSV / DXF / PNG çıktısı alın.': 'Save the project, export PDF / CSV / DXF / PNG.',
    'de bu menüde. Kaydedilmiş proje değişince otomatik kaydedilir.': 'are in this menu too. A saved project is saved automatically when it changes.',
    'Örnek proje, lisans,': 'Sample project, license,', 'istek ve öneri': 'requests and suggestions',
    'gönderme ve bu rehber burada. İyi çalışmalar!': 'and this guide are here. Happy cutting!',
    'Rehberi kapat': 'Close guide', 'Geri': 'Back', 'İleri': 'Next', 'Bitir': 'Finish',

    // ---- CNC Nesting ----
    'Şekilli Parçalar (DXF)': 'Shaped Parts (DXF)', 'DXF yükle…': 'Load DXF…', 'DXF yükle': 'Load DXF', 'Örnek: Hilal': 'Sample: Crescent',
    'veya DXF dosyasını buraya sürükleyin': 'or drag a DXF file here',
    'Parçalar arası boşluk (freze çapı dahil,': 'Spacing between parts (incl. cutter diameter,', 'Levha kenar payı (': 'Sheet edge margin (',
    'Delik içine yerleştir': 'Place inside holes', 'Otomatik': 'Automatic', 'Gelişmiş': 'Advanced', 'Serbest dönüş adımı': 'Free rotation step',
    '90° (önerilen)': '90° (recommended)',
    'Büyük parçaların deliklerine küçük parçalar yerleştirilir. DXF çıktısında içteki parçalar önce kesilecek sırayla yazılır.': 'Small parts are placed inside the holes of large parts. In the DXF output, inner parts are written in the order to be cut first.',
    "Yönü 'Serbest' olan parçalar bu adımlarla döndürülerek denenir. Küçük adımlar daha sıkı yerleşim verebilir ama hesaplama uzar.": "Parts with direction 'Free' are tried rotated in these steps. Smaller steps can nest tighter but take longer.",
    'Proje çok büyük; tarayıcı belleğine kaydedilemedi, dosyaya kaydedin': 'The project is too large to keep in browser storage; save it to a file',
    'Şekil': 'Shape', 'Ad / ölçü': 'Name / size', 'Yön': 'Direction', 'Serbest': 'Free', 'Sabit': 'Fixed',
    'Serbest: program parçayı en iyi sığacak şekilde döndürür. Sabit: parçanın yönü korunur (kanal, damar), yalnızca ters çevrilebilir.': 'Free: the program rotates the part for the best fit. Fixed: the part keeps its direction (grooves, grain) and can only be turned 180°.',
    'Serbest: en iyi sığacak şekilde döner · Sabit: yönü korunur, yalnızca ters çevrilir': 'Free: rotates for the best fit · Fixed: keeps its direction, only turned 180°',
    'Henüz parça yok.': 'No parts yet.', 'ile çizim ekleyin.': 'to add a drawing.', 'Alan {0}': 'Area {0}',
    '{0} × {1} · {2} delik': '{0} × {1} · {2} holes', '{0} × {1} · {2} kanal': '{0} × {1} · {2} grooves', '{0} × {1} · {2} delik · {3} kanal': '{0} × {1} · {2} holes · {3} grooves',
    'Lütfen DXF ile en az bir parça ekleyin': 'Please add at least one part from DXF',
    'Levha kenar payının dışına taşıyor': 'Goes beyond the sheet edge margin', 'Başka bir parçaya çok yakın veya çakışıyor': 'Too close to or overlapping another part',
    'İptal edildi': 'Cancelled', 'Çakışan konum yerine en yakın uygun yere yerleştirildi': 'Placed at the nearest valid spot instead of the overlapping position',
    '{0} — parça eski yerine döndü': '{0} — part returned to its previous position',
    'Parça açısı': 'Part angle', 'Açı (derece, 0–360)': 'Angle (degrees, 0–360)',
    'Parça merkezinin etrafında döndürülür. Çakışırsa en yakın uygun yere kaydırılır.': 'Rotated around the part center. On overlap it is moved to the nearest valid spot.',
    'Parça merkezinin etrafında döndürülür. Çakışırsa kabul edilmez.': 'Rotated around the part center. On overlap it is not accepted.',
    'Parça alanı (net)': 'Part area (net)', 'Toplam kesim yolu': 'Total cut path', '{0} inç': '{0} in', 'Parçalar arası boşluk': 'Spacing between parts',
    'Döndürme': 'Rotation', 'Serbest ({0}° adımlarla)': 'Free ({0}° steps)', 'Yön sabit (0° / 180°)': 'Direction fixed (0° / 180°)',
    '{0} şekil serbest ({1}° adımlarla), {2} şekil yön sabit': '{0} shapes free ({1}° steps), {2} shapes fixed', 'Arama': 'Search', '{0} deneme · {1} sn': '{0} attempts · {1} s',
    'Levha': 'Sheet', 'Sağda kalan boş şerit': 'Free strip on the right', 'Ölçü': 'Size', 'Yerleşen': 'Placed', 'Levha {0}': 'Sheet {0}',
    'Levha {0} / {1} — {2}×{3}': 'Sheet {0} / {1} — {2}×{3}', 'Yapılacak işlem yok': 'Nothing to do', '%{0}': '{0}%',
    'Açı {0}° · x={1} y={2}': 'Angle {0}° · x={1} y={2}',
    // motor denetim iletileri
    'L{0}: parça {1} levha dışında': 'S{0}: part {1} outside the sheet', 'L{0}: parça {1} kullanılamaz bölgede': 'S{0}: part {1} in an unusable area',
    'L{0}: parça {1} ölçü hatası': 'S{0}: part {1} size error', 'L{0}: parça {1} ve {2} çakışıyor/kerf ihlali': 'S{0}: parts {1} and {2} overlap/kerf violation',
    'L{0}: kesim {1} var olmayan parçadan': 'S{0}: cut {1} from a nonexistent piece', 'L{0}: kesim {1} sırası hatalı': 'S{0}: cut {1} out of order',
    'L{0}: parça kesimle oluşmuyor': 'S{0}: part not produced by cuts', 'L{0}: alan aşımı': 'S{0}: area exceeded',
    'Parça {0}: {1} istendi, {2} hesaplandı': 'Part {0}: {1} requested, {2} calculated', 'Levha {0}: stok aşıldı': 'Sheet {0}: stock exceeded',
    'L{0} parça {1} levha dışına taşıyor': 'S{0} part {1} goes outside the sheet', 'L{0}: parça {1} kullanılamaz bölgede ({2} mm²)': 'S{0}: part {1} in an unusable area ({2} mm²)',
    'L{0}: parça {1} ve {2} çakışıyor ({3} mm²)': 'S{0}: parts {1} and {2} overlap ({3} mm²)', 'Adet uyuşmuyor: {0} / {1}': 'Quantity mismatch: {0} / {1}'
  };
  // Yakalanan parçalardaki teknik ifadeler (yöntem adları, adetler)
  const WORDS = [[/şerit-yatay/g, 'strip-horizontal'], [/şerit-dikey/g, 'strip-vertical'], [/çevir/g, 'rotate'], [/levha azaltma/g, 'sheet reduction'], [/boşluk doldurma/g, 'gap filling'], [/giyotin/g, 'guillotine'], [/^arama/, 'search'],
    [/ → (\d+) adet/g, ' → $1 pcs'], [/ ve (\d+) adet daha/g, ' and $1 more'], [/\(L(\d+)\)/g, '(S$1)']];

  const norm = s => s.replace(/\s+/g, ' ').trim();
  const SING = /(?<![\d.,])1 (rows|parts|shapes|devices|days|sheets|offcuts|calculations|holes|grooves|attempts|lines|variations|stock offcuts|new offcuts|used offcuts)\b/g;
  const PATS = [];
  const DICT = new Map();
  for (const k in EN) {
    const nk = norm(k);
    if (/\{\d+\}/.test(nk)) {
      const order = []; const src = nk.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\\?\{(\d+)\\?\}/g, (_, n) => { order.push(+n); return '(.+?)'; });
      PATS.push({ re: new RegExp('^' + src + '$'), order, en: EN[k], len: nk.replace(/\{\d+\}/g, '').length });
    } else DICT.set(nk, EN[k]);
  }
  PATS.sort((a, b) => b.len - a.len);
  const missing = new Set();
  function T(s) {
    if (LANG !== 'en' || s == null) return s;
    const raw = String(s), n = norm(raw); if (!n) return raw;
    const lead = raw.match(/^\s*/)[0], tail = raw.match(/\s*$/)[0];
    let out = DICT.get(n);
    if (out == null) {
      for (const p of PATS) {
        const m = n.match(p.re); if (!m) continue;
        const vals = {}; p.order.forEach((num, i) => { vals[num] = sub(m[i + 1]); });
        out = p.en.replace(/\{(\d+)\}/g, (_, d) => vals[d] != null ? vals[d] : '');
        break;
      }
    }
    if (out == null) { if (window.OK_I18N_DEBUG && /[ğüşıöçĞÜŞİÖÇ]/.test(n)) missing.add(n); return raw; }
    out = out.replace(SING, (m, w) => '1 ' + w.replace(/ies$/, 'y').replace(/s$/, '')); // 1 rows -> 1 row
    return lead + out + tail;
  }
  function sub(v) { const t = DICT.get(norm(v)); if (t != null) return t; let r = T(v); WORDS.forEach(([re, to]) => { r = r.replace(re, to); }); return r; }
  window.T = T;
  window.OK_I18N = { lang: LANG, T, missing, EN };

  if (LANG !== 'en') return;
  document.documentElement.lang = 'en';
  // Ekrana gelen yazıları çevir (sözleşme metni ve kullanıcının yazdığı alanlar hariç)
  const ATTRS = ['title', 'placeholder', 'alt', 'aria-label'];
  const SKIP = el => el && el.closest && el.closest('#eulaText, textarea, [data-noi18n], .nm input');
  const done = new WeakMap();
  function textNode(t) {
    if (done.get(t) === t.nodeValue) return;
    const p = t.parentElement; if (!p || SKIP(p) || /^(SCRIPT|STYLE|CODE)$/.test(p.tagName)) return;
    const v = T(t.nodeValue); if (v !== t.nodeValue) t.nodeValue = v; done.set(t, t.nodeValue);
  }
  function attrs(el) {
    if (el.closest && el.closest('#eulaText, [data-noi18n]')) return;
    for (const a of ATTRS) { const v = el.getAttribute(a); if (v) { const x = T(v); if (x !== v) el.setAttribute(a, x); } }
  }
  function walk(root) {
    if (root.nodeType === 3) return textNode(root);
    if (root.nodeType !== 1 && root.nodeType !== 11) return;
    if (root.nodeType === 1) attrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) { if (n.nodeType === 3) textNode(n); else attrs(n); }
  }
  window.OK_I18N.apply = walk;
  const obs = new MutationObserver(list => {
    for (const m of list) {
      if (m.type === 'childList') m.addedNodes.forEach(walk);
      else if (m.type === 'characterData') textNode(m.target);
      else if (m.type === 'attributes') attrs(m.target);
    }
  });
  const start = () => { walk(document.body); obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS }); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  // Yazdırma ve PDF: içerik yazılır yazılmaz (gözlemci beklenmeden) çevrilir
  const _print = window.print; window.print = function () { walk(document.body); return _print.apply(window, arguments); };
  const _confirm = window.confirm; window.confirm = m => _confirm.call(window, T(m));
  const _alert = window.alert; window.alert = m => _alert.call(window, T(m));
})();
