

$(document).ready(function () {
  // init formstyler
  $("select").styler({
    locale: "ru",
    locales: {
      ru: {
        selectPlaceholder: "не выбрано",
        selectSearchNotFound: "не найдено совпадений",
        selectSearchPlaceholder: "Поиск"
      }
    },
    selectVisibleOptions: 5.8
  });

  // add custom scrollbar
  $(".jq-selectbox ul").each(function () {
    // init scrollbar
    var scrollBar = new SimpleBar($(this)[0], {
      autoHide: false
    });
    var content = $(scrollBar.getScrollElement());

    // add mousewheel handler
    content.bind("mousewheel", function (e) {
      var offset = content.scrollTop();
      var delta = 26;
      if (e.originalEvent.wheelDelta / 120 > 0) {
        if (!(offset == offset - delta)) {
          offset -= delta;
          content.scrollTop(offset);
        }
      } else {
        if (!(offset == offset + delta)) {
          offset += delta;
          content.scrollTop(offset);
        }
      }
    });
  });

  // filter logic
  (function () {
    var props = {
      size: $(".result").width() * 0.32
    };

    var model = {
      items: [{
          title: "Dubai Airport Free Zone",
          description: 'Подходит для компаний, занимающихся aircargo, логистикой и торговлей дорогостоящей продукцией, требующей быстрой таможенной очистки и сопровождения.',
          img: "img/caz_logo/Dubai Airport Free Zone (DAFZ).jpg",
          activity: ["import", "industry_production", "trades", "services"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Multi Commodities Centre (DMCC Free Zone",
          description: 'Оформление всех видов торговых лицензий, в т.ч. на драгоценные металлы, камни. В ряде случаев допускаются смарт-офисы. Включает популярную JLT Free Zone.',
          img: "img/caz_logo/Dubai Multi Commodities Centre (DMCC Free Zone).jpg",
          activity: ["consulting", "logistics", "finance_management", "jewelery_business"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai International Financial Centre (DIFC)",
          description: 'Престижный финансовый центр. Только здесь можно получить лицензию на банковскую, финансовую, страховую деятельность, управление активами.',
          img: "img/caz_logo/Dubai International Financial Centre (DIFC).jpg",
          activity: ["finance_management"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Silicon Oasis",
          description: 'СЭЗ популярная для регистрации компаний в области IT и высоких технологий, инжиниринга, а также для торговли и консалтинга. Шикарные и недорогие офисы.',
          img: "img/caz_logo/Dubai Silicon Oasis.jpg",
          activity: ["information_technologies", "finance_management"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Technology and Media Free Zone",
          description: '',
          img: "img/caz_logo/Dubai Technology and Media Free Zone.jpg",
          activity: ["information_technologies", "marketing_media", "science"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Jebel Ali Free Zone",
          description: '',
          img: "img/caz_logo/Jebel Ali Free Zone.jpg",
          activity: ["consulting", "industry_production", "trades", "services"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Internet City",
          description: 'Зона, деятельность которой сконцентрирована вокруг информационных технологий. Среди известных компаний в этой зоне можно назвать Facebook и LinkedIn. ',
          img: "img/caz_logo/Dubai Internet City.jpg",
          activity: ["information_technologies", "consulting", "marketing_media"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Media City (DMC)",
          description: "Оформление всех видов торговых лицензий, в т.ч. на драгоценные металлы, камни. В ряде случаев допускаются смарт-офисы. Включает популярную JLT Free Zone.'Деятельность СЭЗ сконцентрирована вокруг медиа индустрии. Здесь находятся филиалы компаний CNN, BBC и др. Зона располагается в самом центре 'Нового Дубая'.",
          img: "img/caz_logo/Dubai Media City (DMC) .jpg",
          activity: ["marketing_media", "consulting"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Knowledge Village  (DKV)",
          description: 'Единственная в мире зона по предоставлению образовательных услуг высокого качества. Здесь находятся филиалы самых известных университетов мира.',
          img: "img/caz_logo/Dubai Knowledge Village  (DKV).jpg",
          activity: ["science"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Auto Parts City",
          description: '',
          img: "img/banks/1.png",
          activity: ["transport"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Healthcare City (DHCC)",
          description: 'Основное направление деятельности - развитие здравоохранения, объединение ведущих специалистов и организаций в области медицины и здравоохранения.',
          img: "img/caz_logo/Dubai Healthcare City (DHCC).jpg",
          activity: ["medicine"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai International Academic City (DIAC)",
          description: '',
          img:  "img/caz_logo/Dubai International Academic City (DIAC).jpg",
          activity: ["science"],
          license: ["license_services", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Car and Automotive City Free Zone (DUCAMZ)",
          description: 'Коммерческая площадка, созданная для поддержания и развития национальной автомобильной промышленности. Идеальная зона для тех, кто связан с торговлей авто. ',
          img: "img/banks/1.png",
          activity: ["transport"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Carpet Free Zone",
          description: '',
          img: "img/caz_logo/Dubai Carpet Free Zone.jpg",
          activity: ["carpet_products"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Biotech Research Park (DuBiotech)",
          description: '',
          img: "img/caz_logo/Dubai Biotech Research Park.jpg",
          activity: ["import", "marketing_media", "medicine", "industry_production"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Flower Center",
          description: 'Центр развития бизнес-проектов, связанных с цветоводством. Зона расположена в стратегической зоне международного аэропорта Дубая. ',
          img: "img/caz_logo/Dubai Flower Center.jpg",
          activity: ["floriculture"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Logistics City (DLC)",
          description: 'Интегрированная логистическая база со всеми видами транспорта. Это преимущество позволяет компаниям сосредоточиться на оптимизации своих цепочек поставок.',
          img: "img/caz_logo/Dubai Logistics City (DLC).jpg",
          activity: ["logistics"],
          license: ["trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Maritime City",
          description: 'DMCA запланирован на развитие и продвижение морской деятельности в ОАЭ. А также на создание безопасного и динамичного сектора морского судоходства. ',
          img: "img/caz_logo/Dubai Maritime City.jpg",
          activity: ["chartering_shipping"],
          license: ["trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Textile Village",
          description: '',
          img: "img/caz_logo/Dubai Textile Village.jpg",
          activity: ["textile"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title:  "EnPark",
          description: '',
          img: "img/caz_logo/EnPark .jpg",
          activity: ["energy_efficiency"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Outsource Zone  (DOZ)",
          description: 'Основное направление деятельности зоны: аутсорсинг, тренинг, консалтинговые услуги, выработка и поддержание высоких стандартов обслуживания в данной сфере.',
          img: "img/caz_logo/Dubai Outsource Zone  (DOZ).jpg",
          activity: ["consulting"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Studio City",
          description: 'Является частью Tecom Group. Основные направления: студии, площадки для выступлений, сцены, академии кино и телевидения, торговые помещения, гостиницы.',
          img: "img/caz_logo/Dubai Studio City.jpg",
          activity: ["marketing_media"],
          license: [ "license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Techno Park",
          description: 'Одна из СЭЗ, имеющих особый статус. Обеспечивает развитие по следующим направлениям: нефть, газ, опреснение воды, здравоохранение, инженерия и логистика.',
          img: "img/caz_logo/Dubai Techno Park.png",
          activity: ["import", "industry_production", "trades"],
          license: ["industrial", "trade_license"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai Gold and Diamond Park",
          description: 'Расположен на шоссе Sheikh Zayed. Состоит из производственного блока и торгового центра: 37 пунктов розничной торговли и 118 производственных единиц.',
          img: "img/caz_logo/Dubai Gold and Diamond Park.jpg",
          activity: ["jewelery_business"],
          license: ["industrial"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Dubai International Arbitration Center",
          description: '',
          img: "img/caz_logo/Dubai International Arbitration Center.JPG",
          activity: ["arbitration_services"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "International Media Production Zone",
          description: '',
          img: "img/caz_logo/International Media Production Zone.jpg",
          activity: ["marketing_media"],
          license: ["license_services"],
          emirate: ["dubai"],
          isActive: false
        },
        {
          title: "Masdar City",
          description: '',
          img: "img/caz_logo/Masdar City.jpg",
          activity: ["consulting", "marketing_media", "services"],
          license: ["trade_license", "license_services"],
          emirate: ["aby-dabi"],
          isActive: false
        },
        {
          title: "Abu Dhabi Airport Free Zone",
          description: '',
          img: "img/caz_logo/Abu Dhabi Airport Free Zone.jpg",
          activity: ["logistics", "industry_production", "trades", "services"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["aby-dabi"],
          isActive: false
        },
        {
          title: "Khalifa Industrial Zone",
          description: 'Расположена возле порта Халифа. Зона инфраструктуры мирового класса, интегрированного торгового, логистического и промышленного центра Абу-Даби.',
          img: "img/caz_logo/Khalifa Industrial Zone.jpg",
          activity: ["logistics", "industry_production", "trades"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["aby-dabi"],
          isActive: false
        },
        {
          title: "twofour54",
          description: '',
          img: "img/caz_logo/twofour54.jpg",
          activity: ["marketing_media"],
          license: ["license_services"],
          emirate: ["aby-dabi"],
          isActive: false
        },
        {
          title: "Ajman Free Zone Authority",
          description: 'Самая дешевая СЭЗ для торговых, консалтинговых, производственных компаний. Удачная логистическая сеть. Возможность регистрации IBC компании.',
          img: "img/caz_logo/Ajman Free Zone Authority.jpg",
          activity: ["consulting", "industry_production", "trades"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["abjman"],
          isActive: false
        },
        {
          title: "Fujairah Free Zone",
          description: 'Регистрация компаний с виртуальным офисом для торговых и консалтинговых агентов. Производственная деятельность - бюджетные склады и размещение персонала.',
          img: "img/caz_logo/Fujairah Free Zone.jpg",
          activity: ["logistics", "industry_production", "trades", "services"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["fujeira"],
          isActive: false
        },
        {
          title: "Fujeirah  Creative City",
          description: 'Широкий спектр областей бизнеса: СМИ, мероприятия, консультации, образование, коммуникации и маркетинг, музыку и развлечения, дизайн и технологии и пр.',
          img: "img/caz_logo/Fujairah Creative City.jpg",
          activity: ["consulting", "marketing_media"],
          license: ["license_services"],
          emirate: ["fujeira"],
          isActive: false
        },
        {
          title: "RAK Investment Authority",
          description: '',
          img: "img/caz_logo/RAK Investment Authority (2).jpg",
          activity: ["import", "consulting", "industry_production", "trades"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["ras-al-haima"],
          isActive: false
        },
        {
          title: "Ras Al Khaimah Media Free Zone",
          description: '',
          img: "img/caz_logo/Ras Al Khaimah Media Free Zone.jpg",
          activity: ["marketing_media"],
          license: ["license_services"],
          emirate: ["ras-al-haima"],
          isActive: false
        },
        {
          title: "RAK Free Zone",
          description: '',
          img: "img/caz_logo/RAK Investment Authority.jpg",
          activity: ["industry_production", "trades", "services"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["ras-al-haima"],
          isActive: false
        },
        {
          title: "RAK Maritime City",
          description: '',
          img: "img/caz_logo/RAK Maritime City.png",
          activity: ["chartering_shipping"],
          license: ["trade_license", "license_services"],
          emirate: ["ras-al-haima"],
          isActive: false
        },
        {
          title: "Sharjah Airport Free Zone",
          description: 'Главное преимущество возможность получения логистической лицензии на смарт офис. Недорогое обслуживание, быстрота регистрации, отличная инфраструктура.',
          img: "img/caz_logo/Sharjah Airport Free Zone.jpg",
          activity: ["industry_production", "trades", "services"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["sharja"],
          isActive: false
        },
        {
          title: "Hamriyah Free Zone",
          description: 'Большая ориентация на малые и средние предприятия. Возможность открытия компании на е-офис. Имеется 7 подразделений, работающих в разных направлениях.',
          img: "img/caz_logo/Hamriyah Free Zone.png",
          activity: ["industry_production", "trades", "services"],
          license: ["industrial", "trade_license", "license_services"],
          emirate: ["sharja"],
          isActive: false
        },
        // {
        //   title: "Dubai Multi Commodities Centre (DMCC Free Zone",
        //   description: 'Оформление всех видов торговых лицензий, в т.ч. на драгоценные металлы, камни. В ряде случаев допускаются смарт-офисы. Включает популярную JLT Free Zone.',
        //   img: "img/caz_logo/Dubai Multi Commodities Centre (DMCC Free Zone).jpg",
        //   activity: ["business"],
        //   license: ["a", "b"],
        //   emirate: ["dubai"],
        //   isActive: false
        // },
        // {
        //   title: "Dubai Multi Commodities Centre (DMCC Free Zone",
        //   description: 'Оформление всех видов торговых лицензий, в т.ч. на драгоценные металлы, камни. В ряде случаев допускаются смарт-офисы. Включает популярную JLT Free Zone.',
        //   img: "img/caz_logo/Dubai Multi Commodities Centre (DMCC Free Zone).jpg",
        //   activity: ["business"],
        //   license: ["a", "b"],
        //   emirate: ["dubai"],
        //   isActive: false
        // }
      ]
    };

    var view = function (model) {
      var item = $("<div/>", {
          class: model.isActive ? "item active" : "item"
        })
        .appendTo(".result .wrapper");
      var title = $("<div/>", {
        class: "title",
        text: model.title
      }).appendTo(item);
      var image = $("<img/>", {
        src: model.img
      }).appendTo(item);

      // Add Handler
      item.on('click', function() {
        $('#filter-modal .title').text(model.title);
        $('#filter-modal .description').text(model.description);
        $('#filter-modal').fadeIn(150);
        $('#filter-modal .modal-body').css({
          'transform': 'translateY(-50%)'
        });
      });
      return item;
    };

    var chevron = function (num, cur, direction, state) {
      var remaining = direction == 'next' ? num - cur - Math.ceil((num-cur)/8) : num;
      if (remaining == 0) {
        return;
      }
      var item = $("<div/>", {
          class: state ? "item nav active" : "item nav"
        })
        .appendTo(".result .wrapper");
      var title = $("<div/>", {
        class: "title",
        text: direction == 'next' ? "еще " + remaining + " " + declOfNum(remaining, ["зона", "зоны", "зон"]) : "вернуться назад"
      }).appendTo(item);
      var image = $("<img/>", {
        src: "img/chevron-" + direction + ".png"
      }).appendTo(item);
      item.on('click', function () {
        var result = $('.result');
        var wrapper = result.children('.wrapper');
        var height = wrapper.height();
        var top = direction == 'next' ? parseFloat(wrapper.css('top')) - height * 1.02 : parseFloat(wrapper.css('top')) + height * 1.02;
        wrapper.css({
          'top': top + 'px'
        });
        wrapper.children(".item").removeClass('animate');
        setTimeout(function () {
          wrapper.children(".item").addClass('animate');
        }, 300)
      });
      return item;
    };

    var render = function (items) {
      var length = items.length;
      var activeCount = 0;
      items.forEach(function (item) {
        item.isActive ? activeCount++ : '';
      });
      $.each(items, function (index, item) {
        if (index % 8 === 0 && index !== 0) {
          chevron(length, index, 'next', activeCount > index);
          chevron(length, index, 'prev', activeCount > index);
        } else {
          view(item);
        }
      });
    };

    // Add Handlers
    var filterControl = {
      activity: $("#activity"),
      license: $("#license"),
      emirate: $("#emirate")
    };

    $('body').on('click', '.jqselect', function(e) {
      var id = '#' + $(this).attr('id').slice(0, -7);
      var parent = $(id);
      if ($(this).hasClass('changed') && e.target.classList[0] === 'jq-selectbox__trigger' ) {
        parent.val('');
        parent.trigger('refresh');
        $(".result .wrapper").empty();
        render(
          matchItems(
            model.items,
            $("#activity").val(),
            $("#license").val(),
            $("#emirate").val()
          )
        );
        setResultHeight();
      }
    });

    for (var key in filterControl) {
      filterControl[key].on("change", function () {
        $(".result .wrapper").empty();
        render(
          matchItems(
            model.items,
            filterControl["activity"].val(),
            filterControl["license"].val(),
            filterControl["emirate"].val()
          )
        );
        setResultHeight();
      });
    }

    $('#filter-modal, #filter-modal .close, #filter-modal .btn').on('click', function() {
      $('#filter-modal').fadeOut();
      $('#filter-modal .modal-body').css({
        'transform': 'translateY(-75%)'
      });
    });

    $('#filter-modal .modal-body').on('click', function(e) {
      e.stopPropagation();
    });

    $(window).on('resize', function() {
      if ($(this).width() > 991) {
        props.size = $(".result").width() * 0.32;
        $('.complex-filter .control .item').css({
          'height': props.size + 'px',
          'margin-top': props.size / 0.32 * 0.02 + 'px'
        });
      }
      setResultHeight();
    })


    // Init
    render(
      matchItems(
        model.items,
        filterControl["activity"].val(),
        filterControl["license"].val(),
        filterControl["emirate"].val()
      )
    );
    if ($(window).width() > 991) {
      $('.complex-filter .control .item').css({
        'height': props.size + 'px',
        'margin-top': props.size / 0.32 * 0.02 + 'px'
      });
    }
    setResultHeight();
  })();
});

function matchItems(items, activity, license, emirate) {
  if (activity == 0 && license == 0 && emirate == 0) {
    return items;
  }
  var matched = [];
  items.forEach(function (item) {
    if (
      matchFilter(item, activity, "activity") == true &&
      matchFilter(item, license, "license") == true &&
      matchFilter(item, emirate, "emirate") == true
    ) {
      matched.push(Object.assign({}, item, {
        isActive: true
      }));
    } else {
      matched.push(Object.assign({}, item, {
        isActive: false
      }));
    }
  });
  matched.sort(function (a, b) {
    return (a.isActive === b.isActive) ? 0 : a.isActive ? -1 : 1;
  });
  return matched;
}

function matchFilter(item, filterProp, filterName) {
  if (item[filterName].indexOf(filterProp) > -1) {
    return true;
  } else if (filterProp == 0) {
    return 1;
  }
  return false;
}

function setResultHeight() {
  var result = $(".result");
  var wrapper = result.children('.wrapper');
  var width = result.width();
  var num = wrapper.children(".item").length;
  wrapper.css({
    'top': 0
  });
  if (num > 6) {
    result.height(width);
    wrapper.height(width);
  } else if (num > 3 && num < 7) {
    result.height(width * 0.66);
    wrapper.height(width * 0.66);
  } else {
    result.height(width * 0.32);
    wrapper.height(width * 0.32);
  }
  wrapper.children(".item").addClass('animate');
}

function declOfNum(number, titles) {
  var cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ?
    2 :
    cases[number % 10 < 5 ? number % 10 : 5]
  ];
}