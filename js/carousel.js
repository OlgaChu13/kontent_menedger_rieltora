/* ===== Карусель 9:16 — 9 слайдов ===== */

const SLIDE_W = 1080;
const SLIDE_H = 1920;

const PHOTOS = {
  profile: 'assets/images/profile.png',
  portrait: 'assets/images/portrait-beige.png',
  beige: 'assets/images/gallery-beige.png',
  black: 'assets/images/gallery-black.png'
};

const CAROUSEL_THEMES = {
  property: {
    name: 'Объект недвижимости',
    fields: [
      { id: 'title', label: 'Заголовок', placeholder: '3-комн. квартира вашей мечты' },
      { id: 'location', label: 'Район', placeholder: 'Центральный район' },
      { id: 'area', label: 'Площадь', placeholder: '85 м²' },
      { id: 'price', label: 'Цена', placeholder: '12 500 000 ₽' },
      { id: 'feat1', label: 'Преимущество 1', placeholder: 'Евроремонт' },
      { id: 'feat2', label: 'Преимущество 2', placeholder: 'Панорамные окна' },
      { id: 'feat3', label: 'Преимущество 3', placeholder: 'Паркинг в подарок' },
      { id: 'reason', label: 'Почему сейчас', placeholder: 'Цена ниже рынка на 8% — окно возможностей' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '🏠', title: d.title || '3-комн. квартира вашей мечты', subtitle: 'Листайте → узнайте все детали', usePhoto: true },
      { role: 'content', emoji: '📍', title: 'Локация', text: d.location || 'Центральный район\n5 мин до метро · школы · парки' },
      { role: 'content', emoji: '📐', title: 'Площадь', text: d.area || '85 м²\nПродуманная планировка · просторная кухня-гостиная' },
      { role: 'content', emoji: '💰', title: 'Стоимость', text: d.price || '12 500 000 ₽\nВыгоднее аналогов в этом районе' },
      { role: 'content', emoji: '✨', title: 'Плюс №1', text: d.feat1 || 'Евроремонт — заезжай и живи' },
      { role: 'content', emoji: '✨', title: 'Плюс №2', text: d.feat2 || 'Панорамные окна с видом на город' },
      { role: 'content', emoji: '✨', title: 'Плюс №3', text: d.feat3 || 'Паркинг в подарок' },
      { role: 'content', emoji: '🔥', title: 'Почему сейчас', text: d.reason || 'Цена ниже рынка — такие варианты уходят за 2–3 недели' },
      { role: 'cta', emoji: '📞', title: 'Запишитесь на просмотр', text: 'Напишите в direct — покажу лично\nи отвечу на все вопросы', usePhoto: true }
    ],
    caption: (d) => `🏠 ${d.title || 'Новый объект'} — листайте карусель!\n\n📍 ${d.location || ''}\n📐 ${d.area || ''}\n💰 ${d.price || ''}\n\n📩 Запись на просмотр — в direct`,
    hashtags: '#недвижимость #квартира #карусель #риэлтор #новостройка #объект'
  },
  mistakes: {
    name: '5 ошибок покупателя',
    fields: [
      { id: 'hook', label: 'Заголовок', placeholder: '5 ошибок при покупке квартиры' },
      { id: 'e1', label: 'Ошибка 1', placeholder: 'Не проверили юридическую чистоту' },
      { id: 'e2', label: 'Ошибка 2', placeholder: 'Не сравнили ипотечные программы' },
      { id: 'e3', label: 'Ошибка 3', placeholder: 'Не оценили инфраструктуру района' },
      { id: 'e4', label: 'Ошибка 4', placeholder: 'Поверили словам без документов' },
      { id: 'e5', label: 'Ошибка 5', placeholder: 'Торопились с решением' },
      { id: 'solution', label: 'Решение', placeholder: 'Риэлтор проверит всё за вас — бесплатно на первой консультации' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '⚠️', title: d.hook || '5 ошибок при покупке квартиры', subtitle: 'Листай → не повтори их', usePhoto: true },
      { role: 'content', emoji: '1️⃣', title: 'Ошибка №1', text: d.e1 || 'Не проверили юридическую чистоту объекта' },
      { role: 'content', emoji: '2️⃣', title: 'Ошибка №2', text: d.e2 || 'Не сравнили ипотечные программы банков' },
      { role: 'content', emoji: '3️⃣', title: 'Ошибка №3', text: d.e3 || 'Не оценили инфраструктуру района' },
      { role: 'content', emoji: '4️⃣', title: 'Ошибка №4', text: d.e4 || 'Поверили словам продавца без документов' },
      { role: 'content', emoji: '5️⃣', title: 'Ошибка №5', text: d.e5 || 'Торопились — и переплатили' },
      { role: 'content', emoji: '💡', title: 'Как избежать', text: 'Проверка документов · сравнение цен · осмотр с экспертом' },
      { role: 'content', emoji: '🛡️', title: 'Моя роль', text: d.solution || 'Я проверю всё за вас — первая консультация бесплатно' },
      { role: 'cta', emoji: '💬', title: 'Сохрани и отправь другу', text: 'Кто планирует покупку —\nнапиши мне в direct', usePhoto: true }
    ],
    caption: (d) => `${d.hook || '5 ошибок при покупке квартиры'} ⚠️\n\nЛистайте карусель — сохраните, чтобы не потерять!\n\n💬 Вопросы? Пишите в direct`,
    hashtags: '#советыриэлтора #недвижимость #карусель #ошибки #покупкаквартиры'
  },
  checklist: {
    name: 'Чек-лист покупки',
    fields: [
      { id: 'title', label: 'Заголовок', placeholder: 'Чек-лист перед покупкой квартиры' },
      { id: 'i1', label: 'Пункт 1', placeholder: 'Выписка из ЕГРН' },
      { id: 'i2', label: 'Пункт 2', placeholder: 'Проверка долгов и обременений' },
      { id: 'i3', label: 'Пункт 3', placeholder: 'Осмотр с экспертом' },
      { id: 'i4', label: 'Пункт 4', placeholder: 'Сравнение цен в районе' },
      { id: 'i5', label: 'Пункт 5', placeholder: 'Проверка застройщика' },
      { id: 'i6', label: 'Пункт 6', placeholder: 'Расчёт полной стоимости' },
      { id: 'i7', label: 'Пункт 7', placeholder: 'Изучение инфраструктуры' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '✅', title: d.title || 'Чек-лист перед покупкой', subtitle: '7 шагов → листай', usePhoto: true },
      { role: 'content', emoji: '☑️', title: 'Шаг 1', text: d.i1 || 'Заказать выписку из ЕГРН' },
      { role: 'content', emoji: '☑️', title: 'Шаг 2', text: d.i2 || 'Проверить долги и обременения' },
      { role: 'content', emoji: '☑️', title: 'Шаг 3', text: d.i3 || 'Осмотреть квартиру с экспертом' },
      { role: 'content', emoji: '☑️', title: 'Шаг 4', text: d.i4 || 'Сравнить цены в районе' },
      { role: 'content', emoji: '☑️', title: 'Шаг 5', text: d.i5 || 'Проверить репутацию застройщика' },
      { role: 'content', emoji: '☑️', title: 'Шаг 6', text: d.i6 || 'Рассчитать полную стоимость сделки' },
      { role: 'content', emoji: '☑️', title: 'Шаг 7', text: d.i7 || 'Изучить инфраструктуру района' },
      { role: 'cta', emoji: '📌', title: 'Сохрани себе', text: 'Этот чек-лист сэкономит время\nи деньги — напишите за помощью', usePhoto: true }
    ],
    caption: (d) => `✅ ${d.title || 'Чек-лист покупки квартиры'}\n\nСохраните карусель! 📌\n\n#полезное #недвижимость`,
    hashtags: '#чеклист #недвижимость #карусель #покупка #полезное #риэлтор'
  },
  mortgage: {
    name: 'Ипотека: 7 шагов',
    fields: [
      { id: 'title', label: 'Заголовок', placeholder: 'Ипотека без стресса' },
      { id: 'rate', label: 'Ставка от', placeholder: '7.5%' },
      { id: 's1', label: 'Шаг 1', placeholder: 'Определить бюджет и первый взнос' },
      { id: 's2', label: 'Шаг 2', placeholder: 'Подобрать программу банка' },
      { id: 's3', label: 'Шаг 3', placeholder: 'Собрать документы' },
      { id: 's4', label: 'Шаг 4', placeholder: 'Подать заявку на одобрение' },
      { id: 's5', label: 'Шаг 5', placeholder: 'Выбрать квартиру' },
      { id: 's6', label: 'Шаг 6', placeholder: 'Провести сделку' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '🏦', title: d.title || 'Ипотека без стресса', subtitle: `Ставки от ${d.rate || '7.5%'} · листай →`, usePhoto: true },
      { role: 'content', emoji: '1️⃣', title: 'Шаг 1', text: d.s1 || 'Определить бюджет и размер первого взноса' },
      { role: 'content', emoji: '2️⃣', title: 'Шаг 2', text: d.s2 || 'Подобрать выгодную программу банка' },
      { role: 'content', emoji: '3️⃣', title: 'Шаг 3', text: d.s3 || 'Собрать пакет документов' },
      { role: 'content', emoji: '4️⃣', title: 'Шаг 4', text: d.s4 || 'Подать заявку и получить одобрение' },
      { role: 'content', emoji: '5️⃣', title: 'Шаг 5', text: d.s5 || 'Выбрать квартиру мечты' },
      { role: 'content', emoji: '6️⃣', title: 'Шаг 6', text: d.s6 || 'Провести сделку безопасно' },
      { role: 'content', emoji: '💰', title: 'Мой бонус', text: 'Бесплатный расчёт платежа\nи помощь с одобрением' },
      { role: 'cta', emoji: '📩', title: 'Рассчитаю бесплатно', text: 'Напишите сумму и срок —\nответ за 15 минут', usePhoto: true }
    ],
    caption: (d) => `🏦 ${d.title || 'Ипотека без стресса'}\n\nСтавки от ${d.rate || '7.5%'} — листайте все 9 шагов!\n\n📩 Расчёт бесплатно — direct`,
    hashtags: '#ипотека #недвижимость #карусель #банк #ставка #риэлтор'
  },
  story: {
    name: 'История клиента',
    fields: [
      { id: 'client', label: 'Кто клиент', placeholder: 'Семья с двумя детьми' },
      { id: 'problem', label: 'Проблема', placeholder: '6 месяцев искали сами — без результата' },
      { id: 'turn', label: 'Переломный момент', placeholder: 'Обратились ко мне за помощью' },
      { id: 'search', label: 'Что сделали', placeholder: 'За 3 недели нашли 3 идеальных варианта' },
      { id: 'object', label: 'Объект', placeholder: '3 комнаты · школа рядом · тихий двор' },
      { id: 'deal', label: 'Сделка', placeholder: 'Оформили без стресса за 2 недели' },
      { id: 'result', label: 'Результат', placeholder: 'Счастливая семья в новом доме' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '📖', title: 'История клиента', subtitle: 'Листай → как мы нашли дом мечты', usePhoto: true },
      { role: 'content', emoji: '👨‍👩‍👧‍👦', title: 'Знакомьтесь', text: d.client || 'Семья с двумя детьми' },
      { role: 'content', emoji: '😔', title: 'Было', text: d.problem || '6 месяцев искали квартиру сами — устали и разочаровались' },
      { role: 'content', emoji: '🤝', title: 'Решение', text: d.turn || 'Решили обратиться к профессионалу' },
      { role: 'content', emoji: '🔍', title: 'Поиск', text: d.search || 'За 3 недели подобрали 3 идеальных варианта' },
      { role: 'content', emoji: '🏠', title: 'Объект', text: d.object || '3 комнаты · школа в 5 мин · тихий двор' },
      { role: 'content', emoji: '📝', title: 'Сделка', text: d.deal || 'Оформили всё без стресса за 2 недели' },
      { role: 'content', emoji: '🎉', title: 'Итог', text: d.result || 'Счастливая семья в новом доме!' },
      { role: 'cta', emoji: '✨', title: 'Ваша история — следующая', text: 'Напишите мне —\nнайдём ваш дом', usePhoto: true }
    ],
    caption: (d) => `📖 История клиента\n\n${d.client || ''} — от проблемы к дому мечты.\n\nЛистайте все 9 слайдов!\n\n💬 Хотите так же? Direct`,
    hashtags: '#история #клиенты #недвижимость #карусель #риэлтор #отзыв'
  },
  market: {
    name: 'Обзор рынка',
    fields: [
      { id: 'period', label: 'Период', placeholder: 'Итоги месяца' },
      { id: 't1', label: 'Тренд 1', placeholder: 'Спрос на 2-3 комн. +12%' },
      { id: 't2', label: 'Тренд 2', placeholder: 'Цена за м² стабилизировалась' },
      { id: 't3', label: 'Тренд 3', placeholder: '5 новых стартов продаж' },
      { id: 't4', label: 'Тренд 4', placeholder: 'Ипотека: ставки без изменений' },
      { id: 'forecast', label: 'Прогноз', placeholder: 'Умеренный рост в комфорт-классе' },
      { id: 'advice', label: 'Совет', placeholder: 'Лучшее время для покупки — сейчас' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '📊', title: `Рынок: ${d.period || 'итоги месяца'}`, subtitle: '9 фактов — листай →', usePhoto: true },
      { role: 'content', emoji: '📈', title: 'Тренд 1', text: d.t1 || 'Спрос на 2-3 комнатные квартиры вырос на 12%' },
      { role: 'content', emoji: '📉', title: 'Тренд 2', text: d.t2 || 'Средняя цена за м² стабилизировалась' },
      { role: 'content', emoji: '🏗️', title: 'Тренд 3', text: d.t3 || '5 новых стартов продаж в городе' },
      { role: 'content', emoji: '🏦', title: 'Тренд 4', text: d.t4 || 'Ипотечные ставки остаются стабильными' },
      { role: 'content', emoji: '🔮', title: 'Прогноз', text: d.forecast || 'Ожидается умеренный рост в сегменте комфорт-класса' },
      { role: 'content', emoji: '💡', title: 'Мой совет', text: d.advice || 'Окно возможностей открыто — действуйте сейчас' },
      { role: 'content', emoji: '📌', title: 'Сохрани', text: 'Актуальная аналитика\nкаждую неделю — подписывайся' },
      { role: 'cta', emoji: '📩', title: 'Персональный разбор', text: 'Напишите — сделаю\nанализ под вашу ситуацию', usePhoto: true }
    ],
    caption: (d) => `📊 Рынок недвижимости: ${d.period || 'итоги месяца'}\n\nЛистайте 9 слайдов с аналитикой!\n\n📩 Персональный разбор — в direct`,
    hashtags: '#рынокнедвижимости #аналитика #карусель #тренды #инвестиции'
  },
  day: {
    name: 'День риэлтора',
    fields: [
      { id: 'morning', label: 'Утро', placeholder: 'Кофе и план на день' },
      { id: 'showing1', label: 'Показ 1', placeholder: 'Просмотр 3-комн. в центре' },
      { id: 'docs', label: 'Документы', placeholder: 'Проверка договора для клиента' },
      { id: 'showing2', label: 'Показ 2', placeholder: 'Новостройка с семьёй' },
      { id: 'call', label: 'Звонки', placeholder: 'Консультации в direct' },
      { id: 'evening', label: 'Вечер', placeholder: 'Подбор вариантов на завтра' },
      { id: 'quote', label: 'Фраза дня', placeholder: 'Каждый клиент заслуживает дом мечты' }
    ],
    buildSlides: (d) => [
      { role: 'cover', emoji: '☀️', title: 'День риэлтора', subtitle: 'Загляни за кулисы →', usePhoto: true },
      { role: 'content', emoji: '☕', title: 'Утро', text: d.morning || 'Кофе, план на день и свежие объявления' },
      { role: 'content', emoji: '🏠', title: 'Показ №1', text: d.showing1 || 'Просмотр 3-комнатной в центре города' },
      { role: 'content', emoji: '📋', title: 'Документы', text: d.docs || 'Проверка договора — защита интересов клиента' },
      { role: 'content', emoji: '🔑', title: 'Показ №2', text: d.showing2 || 'Новостройка с молодой семьёй' },
      { role: 'content', emoji: '📱', title: 'Связь', text: d.call || 'Ответы на вопросы в direct и мессенджерах' },
      { role: 'content', emoji: '🌆', title: 'Вечер', text: d.evening || 'Подбор лучших вариантов на завтра' },
      { role: 'content', emoji: '💫', title: 'Фраза дня', text: `"${d.quote || 'Каждый клиент заслуживает дом мечты'}"` },
      { role: 'cta', emoji: '🤝', title: 'Хотите так же?', text: 'Доверьте поиск профессионалу\n— напишите мне', usePhoto: true }
    ],
    caption: (d) => `☀️ День риэлтора — листайте 9 слайдов!\n\n"${d.quote || 'Каждый клиент заслуживает дом мечты'}"\n\n💬 Пишите — помогу найти ваш дом`,
    hashtags: '#риэлтор #деньриэлтора #недвижимость #карусель #закулисье #блог'
  }
};

let imageCache = {};
let currentSlides = [];
let currentTheme = 'property';
let currentPhoto = 'portrait';
let currentFormat = 'carousel';

function loadImage(src) {
  if (imageCache[src]) return imageCache[src];
  imageCache[src] = new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
  return imageCache[src];
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const paragraphs = text.split('\n');
  let line = 0;
  for (const para of paragraphs) {
    const words = para.split(' ');
    let current = '';
    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        if (maxLines && line >= maxLines) return y + line * lineHeight;
        ctx.fillText(current, x, y + line * lineHeight);
        current = word;
        line++;
      } else {
        current = test;
      }
    }
    if (current) {
      if (maxLines && line >= maxLines) return y + line * lineHeight;
      ctx.fillText(current, x, y + line * lineHeight);
      line++;
    }
  }
  return y + line * lineHeight;
}

function drawGradientBg(ctx, w, h) {
  const grad = ctx.createLinearGradient(0, 0, w * 0.3, h);
  grad.addColorStop(0, '#061220');
  grad.addColorStop(0.35, '#0a1f3d');
  grad.addColorStop(0.65, '#1a4a7a');
  grad.addColorStop(0.85, '#3d8fd1');
  grad.addColorStop(1, '#5ba3db');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

function drawGoldDecor(ctx, w, h) {
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(60, 120);
  ctx.lineTo(w - 60, 120);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(60, h - 120);
  ctx.lineTo(w - 60, h - 120);
  ctx.stroke();

  const corner = 80;
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
  [[60, 160, 1, 1], [w - 60, 160, -1, 1], [60, h - 160, 1, -1], [w - 60, h - 160, -1, -1]].forEach(([cx, cy, dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + dx * corner, cy);
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, cy + dy * corner);
    ctx.stroke();
  });
}

function drawSlideNumber(ctx, index, total, w, h) {
  const dots = 9;
  const startX = w / 2 - (dots * 28) / 2;
  for (let i = 0; i < dots; i++) {
    ctx.beginPath();
    ctx.arc(startX + i * 28 + 14, h - 80, i === index ? 8 : 5, 0, Math.PI * 2);
    ctx.fillStyle = i === index ? '#f0d060' : 'rgba(255,255,255,0.35)';
    ctx.fill();
  }
  ctx.font = '500 28px Segoe UI, system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.textAlign = 'center';
  ctx.fillText(`${index + 1} / ${total}`, w / 2, h - 40);
}

async function renderSlide(canvas, slide, index, total, photoSrc) {
  const ctx = canvas.getContext('2d');
  canvas.width = SLIDE_W;
  canvas.height = SLIDE_H;
  const w = SLIDE_W;
  const h = SLIDE_H;

  if (slide.usePhoto && photoSrc) {
    try {
      const img = await loadImage(photoSrc);
      const scale = Math.max(w / img.width, h / img.height);
      const sw = img.width * scale;
      const sh = img.height * scale;
      ctx.drawImage(img, (w - sw) / 2, (h - sh) / 2, sw, sh);
      const overlay = ctx.createLinearGradient(0, 0, 0, h);
      overlay.addColorStop(0, 'rgba(6,18,32,0.75)');
      overlay.addColorStop(0.5, 'rgba(6,18,32,0.55)');
      overlay.addColorStop(1, 'rgba(6,18,32,0.85)');
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, w, h);
    } catch {
      drawGradientBg(ctx, w, h);
    }
  } else {
    drawGradientBg(ctx, w, h);
  }

  drawGoldDecor(ctx, w, h);

  ctx.textAlign = 'center';

  if (slide.emoji) {
    ctx.font = '120px Segoe UI Emoji, sans-serif';
    ctx.fillText(slide.emoji, w / 2, slide.role === 'cover' ? 420 : 380);
  }

  if (slide.role === 'cover') {
    ctx.font = 'bold 72px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    wrapText(ctx, slide.title, w / 2, 560, w - 120, 86, 4);

    ctx.font = '400 40px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#f0d060';
    wrapText(ctx, slide.subtitle || '', w / 2, 820, w - 140, 52, 2);

    ctx.font = '500 32px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('→ ЛИСТАЙ', w / 2, h - 200);
  } else if (slide.role === 'cta') {
    ctx.font = 'bold 64px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#f0d060';
    wrapText(ctx, slide.title, w / 2, 520, w - 120, 76, 3);

    ctx.font = '400 42px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    wrapText(ctx, slide.text, w / 2, 760, w - 140, 58, 5);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    const btnW = 520;
    const btnH = 90;
    const btnX = (w - btnW) / 2;
    const btnY = h - 340;
    ctx.strokeRect(btnX, btnY, btnW, btnH);
    ctx.font = '600 36px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#f0d060';
    ctx.fillText('НАПИСАТЬ В DIRECT', w / 2, btnY + 58);
  } else {
    ctx.font = '600 44px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#f0d060';
    ctx.fillText(slide.title, w / 2, 480);

    ctx.font = '400 48px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    wrapText(ctx, slide.text, w / 2, 600, w - 140, 64, 8);
  }

  drawSlideNumber(ctx, index, total, w, h);
}

function getFormData() {
  const data = {};
  document.querySelectorAll('#carousel-fields [data-field]').forEach(el => {
    data[el.dataset.field] = el.value.trim();
  });
  return data;
}

async function renderAllSlides() {
  const theme = CAROUSEL_THEMES[currentTheme];
  const data = getFormData();
  currentSlides = theme.buildSlides(data);
  const photoSrc = PHOTOS[currentPhoto];
  const grid = document.getElementById('slides-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const captionEl = document.getElementById('carousel-caption');
  const hashtagsEl = document.getElementById('carousel-hashtags');
  if (captionEl) captionEl.textContent = theme.caption(data);
  if (hashtagsEl) hashtagsEl.textContent = theme.hashtags;

  for (let i = 0; i < currentSlides.length; i++) {
    const wrap = document.createElement('div');
    wrap.className = 'slide-card';
    wrap.innerHTML = `
      <div class="slide-preview-wrap">
        <canvas class="slide-canvas" data-index="${i}"></canvas>
        <span class="slide-label">${i + 1} / 9</span>
      </div>
      <div class="slide-actions">
        <button class="btn btn-sm btn-secondary download-slide" data-index="${i}">⬇ Слайд</button>
      </div>`;
    grid.appendChild(wrap);
    const canvas = wrap.querySelector('canvas');
    await renderSlide(canvas, currentSlides[i], i, 9, currentSlides[i].usePhoto ? photoSrc : null);
  }

  grid.querySelectorAll('.download-slide').forEach(btn => {
    btn.addEventListener('click', () => downloadSlide(+btn.dataset.index));
  });
}

function downloadSlide(index) {
  const canvas = document.querySelector(`.slide-canvas[data-index="${index}"]`);
  if (!canvas) return;
  const link = document.createElement('a');
  const theme = CAROUSEL_THEMES[currentTheme];
  link.download = `carousel-${currentTheme}-slide-${index + 1}-9x16.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast(`✓ Слайд ${index + 1} сохранён (1080×1920)`);
}

async function downloadAllSlides() {
  for (let i = 0; i < 9; i++) {
    downloadSlide(i);
    await new Promise(r => setTimeout(r, 400));
  }
  showToast('✓ Все 9 слайдов сохранены!');
}

function renderThemeFields() {
  const container = document.getElementById('carousel-fields');
  if (!container) return;
  const theme = CAROUSEL_THEMES[currentTheme];
  container.innerHTML = theme.fields.map(f => `
    <div class="form-group">
      <label for="cf-${f.id}">${f.label}</label>
      <input type="text" id="cf-${f.id}" data-field="${f.id}" placeholder="${f.placeholder}">
    </div>`).join('');
  container.querySelectorAll('input').forEach(el => {
    el.addEventListener('input', () => renderAllSlides());
  });
}

function initCarousel() {
  const page = document.getElementById('carousel-page');
  if (!page) return;

  document.querySelectorAll('.carousel-theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.carousel-theme-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTheme = btn.dataset.theme;
      renderThemeFields();
      renderAllSlides();
    });
  });

  document.querySelectorAll('.photo-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.photo-pick').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPhoto = btn.dataset.photo;
      renderAllSlides();
    });
  });

  document.querySelectorAll('.format-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFormat = btn.dataset.format;
      const hint = document.getElementById('format-hint');
      if (hint) {
        hint.textContent = currentFormat === 'stories'
          ? 'Stories: публикуйте все 9 слайдов подряд в Instagram / VK Stories'
          : 'Карусель: загрузите 9 слайдов как альбом в ленту Instagram или VK';
      }
    });
  });

  document.getElementById('download-all')?.addEventListener('click', downloadAllSlides);
  document.getElementById('copy-caption')?.addEventListener('click', () => {
    const cap = document.getElementById('carousel-caption')?.textContent || '';
    const tags = document.getElementById('carousel-hashtags')?.textContent || '';
    copyToClipboard(cap + '\n\n' + tags);
  });

  document.querySelector('.carousel-theme-btn')?.classList.add('active');
  document.querySelector('.photo-pick')?.classList.add('active');
  document.querySelector('.format-btn')?.classList.add('active');

  renderThemeFields();
  renderAllSlides();
}

document.addEventListener('DOMContentLoaded', initCarousel);
