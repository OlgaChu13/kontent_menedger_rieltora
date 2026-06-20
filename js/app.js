/* ===== Контент-менеджер риэлтора — логика ===== */

const POST_TEMPLATES = {
  property: {
    name: 'Объект недвижимости',
    fields: ['rooms', 'area', 'price', 'location', 'features'],
    template: (d) => `🏠 ${d.rooms || '3-комнатная'} квартира — ваш новый дом!

📍 ${d.location || 'Центральный район'}
📐 ${d.area || '85'} м²
💰 ${d.price || '12 500 000'} ₽

${d.features || '✅ Ремонт\n✅ Панорамные окна\n✅ Паркинг'}

Это не просто квартира — это пространство, где начинается ваша новая история.

📞 Запишитесь на просмотр — покажу лично и отвечу на все вопросы!`,
    hashtags: '#недвижимость #квартира #новостройка #риэлтор #покупкаквартиры #жильё #инвестиции'
  },
  tips: {
    name: 'Экспертный совет',
    fields: ['topic', 'tip'],
    template: (d) => `💡 ${d.topic || 'Как не переплатить при покупке квартиры'}

${d.tip || 'Перед подписанием договора обязательно проверьте:\n\n1️⃣ Юридическую чистоту объекта\n2️⃣ Наличие всех документов\n3️⃣ Реальную рыночную стоимость\n4️⃣ Скрытые платежи и комиссии\n\nЯ помогаю клиентам избежать ошибок на каждом этапе сделки. Это моя работа — защитить ваши интересы.'}

Сохраните пост, чтобы не потерять! 📌`,
    hashtags: '#советыриэлтора #недвижимость #покупкаквартиры #эксперт #риэлторсовет'
  },
  personal: {
    name: 'Личный бренд',
    fields: ['message'],
    template: (d) => `${d.message || 'Каждый день я помогаю людям найти дом их мечты.\n\nЗа 10+ лет в недвижимости я поняла главное: покупка квартиры — это не просто сделка. Это одно из самых важных решений в жизни.\n\nИ я здесь, чтобы это решение было правильным, спокойным и радостным. 💫'}

С уважением, ваш риэлтор 🤝`,
    hashtags: '#риэлтор #недвижимость #личныйбренд #доверие #профессионал'
  },
  story: {
    name: 'История клиента',
    fields: ['clientStory', 'result'],
    template: (d) => `📖 История, которой хочется поделиться

${d.clientStory || 'Семья с двумя детьми искала квартиру 6 месяцев самостоятельно. Устали от бесконечных просмотров и разочарований.'}

✨ Результат: ${d.result || 'За 3 недели мы нашли идеальный вариант — 3 комнаты, школа в 5 минутах, тихий двор. Сделка прошла без стресса.'}

Ваша история может быть следующей. Напишите мне! 💬`,
    hashtags: '#отзыв #клиенты #недвижимость #риэлтор #успех #история'
  },
  market: {
    name: 'Обзор рынка',
    fields: ['period', 'trend', 'forecast'],
    template: (d) => `📊 Рынок недвижимости: ${d.period || 'итоги месяца'}

${d.trend || '📈 Спрос на 2-3 комнатные квартиры вырос на 12%\n📉 Средняя цена за м² стабилизировалась\n🏗 Новые проекты: 5 стартов продаж'}

🔮 Прогноз: ${d.forecast || 'Ожидается умеренный рост цен в сегменте комфорт-класса. Лучшее время для покупки — сейчас, пока ставки стабильны.'}

Хотите персональный анализ для вашей ситуации? Обращайтесь! 📩`,
    hashtags: '#рынокнедвижимости #аналитика #инвестиции #новости #тренды'
  },
  reels: {
    name: 'Идея для Reels',
    fields: ['idea', 'hook'],
    template: (d) => `🎬 Идея для Reels/Stories:

🪝 Хук: "${d.hook || '3 ошибки при покупке квартиры, которые стоят вам миллионы'}"

📝 Сценарий:
${d.idea || '1. Показать документы — "Не проверили обременения"\n2. Показать калькулятор — "Не сравнили ипотечные программы"\n3. Показать дом — "Не оценили инфраструктуру района"\n\nФинал: "Подпишись — спасу от ошибок!"'}

⏱ Длительность: 30-60 сек
🎵 Музыка: трендовый трек + текст на экране`,
    hashtags: '#reels #рилс #недвижимость #контент #видео #советы'
  },
  mortgage: {
    name: 'Ипотека',
    fields: ['rate', 'bank', 'benefit'],
    template: (d) => `🏦 Ипотека: выгодные условия!

📉 Ставка от ${d.rate || '7.5'}%
🏛 ${d.bank || 'Ведущие банки-партнёры'}

${d.benefit || '✅ Одобрение за 1 день\n✅ Субсидированные программы\n✅ Помощь с документами'}

Рассчитаю ваш платёж бесплатно — напишите в директ! 💬`,
    hashtags: '#ипотека #кредит #недвижимость #банк #ставка #покупкаквартиры'
  },
  checklist: {
    name: 'Чек-лист',
    fields: ['title', 'items'],
    template: (d) => `✅ ${d.title || 'Чек-лист перед покупкой квартиры'}

${d.items || '☑️ Проверить выписку из ЕГРН\n☑️ Убедиться в отсутствии долгов\n☑️ Осмотреть квартиру с экспертом\n☑️ Сравнить цены в районе\n☑️ Проверить застройщика\n☑️ Рассчитать полную стоимость\n☑️ Изучить инфраструктуру'}

Сохраните себе и отправьте тем, кто планирует покупку! 📌`,
    hashtags: '#чеклист #недвижимость #покупка #советы #полезное'
  }
};

const FIELD_LABELS = {
  rooms: 'Комнаты',
  area: 'Площадь (м²)',
  price: 'Цена',
  location: 'Расположение',
  features: 'Преимущества',
  topic: 'Тема совета',
  tip: 'Текст совета',
  message: 'Ваше сообщение',
  clientStory: 'История клиента',
  result: 'Результат',
  period: 'Период',
  trend: 'Тренды',
  forecast: 'Прогноз',
  idea: 'Сценарий',
  hook: 'Зацепка (хук)',
  rate: 'Ставка (%)',
  bank: 'Банк',
  benefit: 'Преимущества',
  title: 'Заголовок',
  items: 'Пункты чек-листа'
};

const PLATFORM_HASHTAGS = {
  instagram: '#недвижимость #realestate #риэлтор #квартира #доммечты #новостройка #ипотека #инвестиции #жильё #недвижимостьмосква',
  vk: '#недвижимость #риэлтор #квартира #новостройка #ипотека #жильё #покупкаквартиры',
  telegram: '#недвижимость #риэлтор #квартира #ипотека'
};

function initNav() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('✓ Скопировано в буфер обмена!');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✓ Скопировано!');
  });
}

function initGenerator() {
  const typeButtons = document.querySelectorAll('.post-type-btn');
  const formFields = document.getElementById('form-fields');
  const outputBox = document.getElementById('output');
  const hashtagsBox = document.getElementById('hashtags');
  const generateBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const copyAllBtn = document.getElementById('copy-all-btn');
  const platformSelect = document.getElementById('platform');

  if (!formFields) return;

  let currentType = 'property';

  function renderFields(type) {
    const config = POST_TEMPLATES[type];
    formFields.innerHTML = config.fields.map(field => {
      const isTextarea = ['features', 'tip', 'message', 'clientStory', 'trend', 'idea', 'items', 'benefit'].includes(field);
      return `
        <div class="form-group">
          <label for="field-${field}">${FIELD_LABELS[field] || field}</label>
          ${isTextarea
            ? `<textarea id="field-${field}" data-field="${field}"></textarea>`
            : `<input type="text" id="field-${field}" data-field="${field}">`
          }
        </div>`;
    }).join('');
  }

  function getFormData() {
    const data = {};
    formFields.querySelectorAll('[data-field]').forEach(el => {
      data[el.dataset.field] = el.value.trim();
    });
    return data;
  }

  function generate() {
    const config = POST_TEMPLATES[currentType];
    const data = getFormData();
    const text = config.template(data);
    outputBox.textContent = text;

    const platform = platformSelect ? platformSelect.value : 'instagram';
    const baseTags = config.hashtags;
    const platformTags = PLATFORM_HASHTAGS[platform] || '';
    hashtagsBox.textContent = baseTags + ' ' + platformTags;
  }

  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      typeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentType = btn.dataset.type;
      renderFields(currentType);
      generate();
    });
  });

  if (generateBtn) generateBtn.addEventListener('click', generate);
  if (platformSelect) platformSelect.addEventListener('change', generate);

  if (copyBtn) {
    copyBtn.addEventListener('click', () => copyToClipboard(outputBox.textContent));
  }

  if (copyAllBtn) {
    copyAllBtn.addEventListener('click', () => {
      const full = outputBox.textContent + '\n\n' + hashtagsBox.textContent;
      copyToClipboard(full);
    });
  }

  formFields.addEventListener('input', generate);

  typeButtons[0]?.classList.add('active');
  renderFields(currentType);
  generate();
}

function initTemplates() {
  const grid = document.getElementById('templates-grid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (!grid) return;

  function renderTemplates(filter = 'all') {
    grid.innerHTML = Object.entries(POST_TEMPLATES).map(([key, config]) => {
      if (filter !== 'all' && key !== filter) return '';
      const sample = config.template({});
      return `
        <div class="template-card" data-type="${key}">
          <div class="template-header">
            <h3>${config.name}</h3>
            <span class="template-badge">${key}</span>
          </div>
          <div class="template-body">${sample}</div>
          <div class="template-footer">
            <button class="btn btn-sm btn-secondary copy-template" data-type="${key}">📋 Копировать</button>
            <a href="generator.html" class="btn btn-sm btn-primary" style="margin-left: 8px;">✏️ Редактировать</a>
          </div>
        </div>`;
    }).join('');

    grid.querySelectorAll('.copy-template').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const text = POST_TEMPLATES[type].template({}) + '\n\n' + POST_TEMPLATES[type].hashtags;
        copyToClipboard(text);
      });
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderTemplates(tab.dataset.filter);
    });
  });

  renderTemplates();
}

function initCalendar() {
  const plan = [
    { time: 'Пн 10:00', text: 'Экспертный совет — полезный пост с советом по покупке' },
    { time: 'Вт 12:00', text: 'Stories — закулисье рабочего дня, показ офиса' },
    { time: 'Ср 18:00', text: 'Карусель 9:16 — объект или чек-лист в ленте' },
    { time: 'Чт 11:00', text: 'Reels — короткое видео с ошибками покупателей' },
    { time: 'Пт 19:00', text: 'Личный бренд — история из практики, эмоциональный пост' },
    { time: 'Сб 10:00', text: 'Обзор рынка — аналитика за неделю' },
    { time: 'Вс 15:00', text: 'Чек-лист — сохраняемый полезный контент' }
  ];

  const planList = document.getElementById('content-plan');
  if (planList) {
    planList.innerHTML = plan.map(item => `
      <li>
        <span class="plan-time">${item.time}</span>
        <span class="plan-text">${item.text}</span>
      </li>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initGenerator();
  initTemplates();
  initCalendar();
});
