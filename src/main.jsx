import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Badge,
  BadgeSizes,
  BadgeVariants,
  Button,
  Chip,
  SegmentedButtons,
  TextField,
  buttonWidthEnum,
} from '../dist/dist/index.jsx';
import '../dist/dist/theming/booking-form.css';
import './styles.css';
import standardRoomImage from '../img/638905038895238797-b2a3803f-0648-417b-959d-0f86c6768e8b.jpg';
import suiteRoomImage from '../img/638905039312398814-82a5d543-224a-4524-8a0f-b513be82f9bc.jpg';
import foodIcon from '../img/svg/food.svg';
import cancellationIcon from '../img/svg/cancellation-rule.svg';
import paymentIcon from '../img/svg/purse.svg';
import serviceIcon from '../img/svg/service-placeholder-default.svg';
import galleryIcon from '../img/svg/gallery.svg';
import calendarIcon from '../img/svg/calendar.svg';
import guestsIcon from '../img/svg/guests-group.svg';
import areaIcon from '../img/svg/area.svg';
import adultIcon from '../img/svg/adult.svg';
import arrowDownIcon from '../img/svg/arrow-down.svg';
import arrowLeftIcon from '../img/svg/arrow-left.svg';
import crossIcon from '../img/svg/cross.svg';
import bathroomIcon from '../img/svg/features/bathroom.svg';
import doubleBedIcon from '../img/svg/features/double_bed.svg';
import balconyIcon from '../img/svg/features/balcony.svg';
import airConditioningIcon from '../img/svg/features/air_conditioning.svg';
import hairdryerIcon from '../img/svg/features/hairdryer.svg';
import viewIcon from '../img/svg/features/view.svg';
import kingBedIcon from '../img/svg/features/king_bed.svg';
import lockIcon from '../img/svg/features/electronic_locks.svg';
import wifiIcon from '../img/svg/features/wifi.svg';

const listPath = '/prototype/mobile-price-constructor';

const filters = [
  {
    key: 'bedType',
    label: 'Тип кровати',
    type: 'multi',
    options: [
      { value: 'mixed', label: 'Разные кровати' },
      { value: 'double', label: '1 двуспальная' },
    ],
  },
  {
    key: 'boardType',
    label: 'Питание',
    type: 'multi',
    options: [
      { value: 'roomOnly', label: 'Без питания' },
      { value: 'breakfast', label: 'Завтрак' },
    ],
  },
  { key: 'freeCancellation', label: 'Бесплатная отмена', type: 'single' },
  { key: 'noPrepayment', label: 'Без предоплаты', type: 'single' },
  { key: 'balcony', label: 'Балкон', type: 'single' },
  {
    key: 'view',
    label: 'Вид из окна',
    type: 'multi',
    options: [
      { value: 'standard', label: 'Обычный' },
      { value: 'city', label: 'На город' },
    ],
  },
];

const initialFilterState = {
  bedType: [],
  boardType: [],
  freeCancellation: false,
  noPrepayment: false,
  balcony: false,
  view: [],
};

const rooms = [
  {
    id: 'standard-family',
    image: standardRoomImage,
    photoCount: 8,
    name: 'Трехместный семейный номер Standard',
    size: '30 кв.м',
    capacity: 'до 5 мест',
    bedSummary: 'Разные типы кроватей',
    bedTypes: ['mixed'],
    balcony: false,
    view: 'standard',
    photoFeatures: [bathroomIcon, doubleBedIcon, airConditioningIcon, hairdryerIcon],
    priceCaption: 'Итого за 1 ночь',
    taxes: 'Налоги и сборы включены',
    basePrice: 14010,
    options: {
      meal: [
        { id: 'roomOnly', label: 'Без питания', price: 0, icon: foodIcon },
        { id: 'breakfast', label: 'Завтрак', price: 3500, icon: foodIcon, benefit: true },
      ],
      cancellation: [
        { id: 'policy', label: 'Условия отмены', price: 0, icon: cancellationIcon },
        { id: 'free', label: 'Бесплатная отмена', price: 0, icon: cancellationIcon, benefit: true },
      ],
      payment: [
        { id: 'prepayment', label: 'Нужна предоплата', price: 0, icon: paymentIcon },
        { id: 'postpay', label: 'Без предоплаты', price: 0, icon: paymentIcon, benefit: true },
      ],
      extras: [
        { id: 'crib', label: 'Детская кроватка', price: 700, icon: serviceIcon },
        { id: 'lateCheckout', label: 'Поздний выезд', price: 1500, icon: serviceIcon },
      ],
    },
    defaults: {
      meal: 'roomOnly',
      cancellation: 'free',
      payment: 'postpay',
      extras: [],
    },
  },
  {
    id: 'suite',
    image: suiteRoomImage,
    photoCount: 12,
    name: 'Люкс',
    size: '32 кв.м',
    capacity: 'до 3 мест',
    bedSummary: '1 двуспальная кровать',
    bedTypes: ['double'],
    balcony: true,
    view: 'city',
    photoFeatures: [viewIcon, kingBedIcon, balconyIcon, lockIcon, wifiIcon],
    priceCaption: 'Итого за 1 ночь',
    taxes: 'Налоги и сборы включены',
    basePrice: 22100,
    options: {
      meal: [
        { id: 'roomOnly', label: 'Без питания', price: 0, icon: foodIcon },
        { id: 'breakfast', label: 'Завтрак', price: 2700, icon: foodIcon, benefit: true },
      ],
      cancellation: [
        { id: 'policy', label: 'Условия отмены', price: 0, icon: cancellationIcon },
        { id: 'free', label: 'Бесплатная отмена', price: 1200, icon: cancellationIcon, benefit: true },
      ],
      payment: [
        { id: 'prepayment', label: 'Нужна предоплата', price: 0, icon: paymentIcon },
        { id: 'postpay', label: 'Без предоплаты', price: 900, icon: paymentIcon, benefit: true },
      ],
      extras: [
        { id: 'parking', label: 'Парковка', price: 1000, icon: serviceIcon },
        { id: 'lateCheckout', label: 'Поздний выезд', price: 2000, icon: serviceIcon },
      ],
    },
    defaults: {
      meal: 'roomOnly',
      cancellation: 'policy',
      payment: 'prepayment',
      extras: [],
    },
  },
];

const bookingForItems = [
  { id: 'self', label: 'Для себя', value: 'self' },
  { id: 'other', label: 'Для другого', value: 'other' },
];

function App() {
  const [screen, setScreen] = React.useState('list');
  const [bookingFor, setBookingFor] = React.useState('self');
  const [activeFilters, setActiveFilters] = React.useState(initialFilterState);
  const [openFilterKey, setOpenFilterKey] = React.useState(null);
  const [roomSelections, setRoomSelections] = React.useState(() =>
    Object.fromEntries(
      rooms.map((room) => [room.id, { ...room.defaults, extras: [...room.defaults.extras] }]),
    ),
  );
  const [selectedOffer, setSelectedOffer] = React.useState(() => buildOffer(rooms[0], rooms[0].defaults));

  React.useEffect(() => {
    const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);

    if (isLocalHost && (window.location.pathname === '/' || window.location.pathname === '/index.html')) {
      window.history.replaceState({}, '', listPath);
    }
  }, []);

  const filteredRooms = React.useMemo(
    () => rooms.filter((room) => roomMatchesFilters(room, activeFilters)),
    [activeFilters],
  );

  const handleFilterChipClick = (filter) => {
    if (filter.type === 'single') {
      setActiveFilters((prev) => ({
        ...prev,
        [filter.key]: !prev[filter.key],
      }));
      setOpenFilterKey(null);
      return;
    }

    setOpenFilterKey((prev) => (prev === filter.key ? null : filter.key));
  };

  const handleToggleMultiFilterOption = (filterKey, optionValue) => {
    setActiveFilters((prev) => {
      const nextValues = prev[filterKey].includes(optionValue)
        ? prev[filterKey].filter((value) => value !== optionValue)
        : [...prev[filterKey], optionValue];

      return {
        ...prev,
        [filterKey]: nextValues,
      };
    });
  };

  const handleClearFilter = (filterKey) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: Array.isArray(prev[filterKey]) ? [] : false,
    }));

    if (openFilterKey === filterKey) {
      setOpenFilterKey(null);
    }
  };

  const handleOptionChange = (roomId, groupKey, optionId) => {
    setRoomSelections((prev) => ({
      ...prev,
      [roomId]: {
        ...prev[roomId],
        [groupKey]: optionId,
      },
    }));
  };

  const handleExtraToggle = (roomId, extraId) => {
    setRoomSelections((prev) => {
      const extras = prev[roomId].extras.includes(extraId)
        ? prev[roomId].extras.filter((item) => item !== extraId)
        : [...prev[roomId].extras, extraId];

      return {
        ...prev,
        [roomId]: {
          ...prev[roomId],
          extras,
        },
      };
    });
  };

  const handleBookRoom = (room) => {
    const selection = sanitizeSelection(room, roomSelections[room.id], activeFilters);
    setSelectedOffer(buildOffer(room, selection));
    setScreen('checkout');
    if (window.location.pathname !== listPath) {
      window.history.replaceState({}, '', listPath);
    }
  };

  const handleResetFilters = () => {
    setActiveFilters(initialFilterState);
    setOpenFilterKey(null);
  };

  return (
    <div className="prototype-shell">
      <div className="phone-frame">
        <TopUtilityBar />
        <SearchSummary muted={screen === 'checkout'} />

        {screen === 'list' ? (
          <>
            <SectionHeader title="Доступные варианты" />
            <div className="filters-block">
              <div className="filters-row">
                {filters.map((filter) => (
                  <FilterChip
                    active={isFilterActive(filter, activeFilters)}
                    filter={filter}
                    key={filter.key}
                    onClear={handleClearFilter}
                    onClick={handleFilterChipClick}
                    open={openFilterKey === filter.key}
                    value={activeFilters[filter.key]}
                  />
                ))}
              </div>
              {openFilterKey ? (
                <FilterDropdown
                  filter={filters.find((filter) => filter.key === openFilterKey)}
                  onToggleOption={handleToggleMultiFilterOption}
                  selectedValues={activeFilters[openFilterKey]}
                />
              ) : null}
            </div>

            <div className="rooms-list">
              {filteredRooms.map((room) => {
                const selection = sanitizeSelection(room, roomSelections[room.id], activeFilters);
                return (
                  <RoomCard
                    activeFilters={activeFilters}
                    key={room.id}
                    onBook={handleBookRoom}
                    onExtraToggle={handleExtraToggle}
                    onOptionChange={handleOptionChange}
                    room={room}
                    selection={selection}
                  />
                );
              })}
              {filteredRooms.length === 0 ? <EmptyState onReset={handleResetFilters} /> : null}
            </div>
          </>
        ) : (
          <CheckoutScreen
            bookingFor={bookingFor}
            onBack={() => setScreen('list')}
            onBookingForChange={setBookingFor}
            selectedOffer={selectedOffer}
          />
        )}
      </div>
    </div>
  );
}

function TopUtilityBar() {
  return (
    <div className="top-utility-bar">
      <div className="utility-chip flag-chip">
        <span className="flag-icon" aria-hidden="true" />
      </div>
      <div className="utility-chip currency-chip">RUB</div>
      <div className="utility-actions">
        <div className="utility-icon lock-icon" aria-hidden="true" />
        <div className="utility-icon user-icon" aria-hidden="true" />
      </div>
    </div>
  );
}

function SearchSummary({ muted }) {
  return (
    <div className={`search-summary ${muted ? 'search-summary-muted' : ''}`}>
      <div className="search-field-block">
        <div className="search-label">Заезд - Выезд</div>
        <div className="search-value-row">
          <div className="search-value">24 декабря - 25 декабря</div>
          <SvgMaskIcon className="summary-icon" icon={calendarIcon} />
        </div>
      </div>
      <div className="search-field-block">
        <div className="search-label">Гости</div>
        <div className="search-value-row">
          <div className="search-value">2 взрослых</div>
          <SvgMaskIcon className="summary-icon" icon={arrowDownIcon} />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, onBack }) {
  return (
    <div className="section-header-wrap">
      <div className="section-header">
        {onBack ? (
          <button className="back-button" onClick={onBack} type="button" aria-label="Назад">
            <SvgMaskIcon className="back-button-icon" icon={arrowLeftIcon} />
          </button>
        ) : null}
        <h1>{title}</h1>
      </div>
      <div className="section-divider" />
    </div>
  );
}

function RoomCard({ activeFilters, onBook, onExtraToggle, onOptionChange, room, selection }) {
  const totalPrice = getTotalPrice(room, selection);
  const groupConfigs = [
    { key: 'meal', title: 'Питание' },
    { key: 'cancellation', title: 'Отмена' },
    { key: 'payment', title: 'Оплата' },
  ];

  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <div className="room-features-overlay">
          {room.photoFeatures.map((icon, index) => (
            <div className="room-feature-tile" key={`${room.id}-feature-${index}`}>
              <SvgMaskIcon className="room-feature-svg" icon={icon} />
            </div>
          ))}
        </div>
        <div className="room-photo-count">
          <SvgMaskIcon className="room-photo-count-icon" icon={galleryIcon} />
          <span>{room.photoCount}</span>
        </div>
        <img alt={room.name} className="room-image" src={room.image} />
      </div>

      <div className="room-card-body">
        <div className="room-title-row">
          <h2>{room.name}</h2>
          <button className="circle-toggle" type="button" aria-label="Открыть детали">
            <SvgMaskIcon className="room-toggle-icon" icon={arrowDownIcon} />
          </button>
        </div>

        <div className="room-meta-grid">
          <MetaItem icon={guestsIcon} text={room.capacity} />
          <MetaItem icon={areaIcon} text={room.size} />
          <MetaItem icon={adultIcon} text={room.bedSummary} />
        </div>

        <div className="builder-block">
          <div className="builder-title">Соберите предложение</div>
          {groupConfigs.map((group) => (
            <OptionGroup
              activeFilters={activeFilters}
              autoAppliedOption={getAutoAppliedOption(room, group.key)}
              groupKey={group.key}
              key={group.key}
              onChange={(optionId) => onOptionChange(room.id, group.key, optionId)}
              options={room.options[group.key]}
              selectedId={selection[group.key]}
              title={group.title}
            />
          ))}

          {room.options.extras.length > 0 ? (
            <div className="option-group option-group-extras">
              <div className="option-group-header">
                <div className="option-group-title">Дополнительные услуги</div>
              </div>
              <div className="extras-list">
                {room.options.extras.map((extra) => {
                  const selected = selection.extras.includes(extra.id);
                  return (
                    <button
                      className={`extra-option ${selected ? 'extra-option-selected' : ''}`}
                      key={extra.id}
                      onClick={() => onExtraToggle(room.id, extra.id)}
                      type="button"
                    >
                      <div className="option-label-row">
                        <SvgMaskIcon className="option-icon" icon={extra.icon} />
                        <span>{extra.label}</span>
                      </div>
                      <Badge size={BadgeSizes.Xs} variant={BadgeVariants.Default}>
                        {formatDeltaPrice(extra.price)}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="room-total-block">
          <div>
            <div className="room-total-caption">{room.priceCaption}</div>
            <div className="room-total-price">{formatPrice(totalPrice)}</div>
            <div className="room-total-taxes">{room.taxes}</div>
          </div>
          <div className="room-total-cta">
            <Button form="round" onClick={() => onBook(room)} size="m" variant="primary" width={buttonWidthEnum.full}>
              Забронировать
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaItem({ icon, text }) {
  return (
    <div className="room-meta-item">
      <SvgMaskIcon className="room-meta-icon" icon={icon} />
      <span>{text}</span>
    </div>
  );
}

function OptionGroup({ activeFilters, autoAppliedOption, groupKey, onChange, options, selectedId, title }) {
  if (autoAppliedOption) {
    return (
      <div className="option-group">
        <div className="option-group-header">
          <div className="option-group-title">{title}</div>
        </div>
        <div className="option-card option-card-selected option-card-static">
          <div className="option-main">
            <div className="option-label-row">
              <SvgMaskIcon className={`option-icon ${autoAppliedOption.benefit ? 'option-icon-benefit' : ''}`} icon={autoAppliedOption.icon} />
              <span>{autoAppliedOption.label}</span>
            </div>
            <span className="option-applied-mark">Включено</span>
          </div>
          <div className="option-side">
            <span className="option-included">Без доплаты</span>
          </div>
        </div>
      </div>
    );
  }

  const allowedIds = getAllowedOptionIds(groupKey, activeFilters);

  return (
    <div className={`option-group option-group-${groupKey}`}>
      <div className="option-group-header">
        <div className="option-group-title">{title}</div>
      </div>
      <div className="option-list">
        {options.map((option) => {
          const selected = option.id === selectedId;
          const disabled = allowedIds !== null && !allowedIds.includes(option.id);

          return (
            <button
              className={`option-card ${selected ? 'option-card-selected' : ''} ${disabled ? 'option-card-disabled' : ''}`}
              disabled={disabled}
              key={option.id}
              onClick={() => onChange(option.id)}
              type="button"
            >
              <div className="option-main">
                <div className="option-label-row">
                  <SvgMaskIcon
                    className={`option-icon ${selected && option.benefit ? 'option-icon-benefit' : ''}`}
                    icon={option.icon}
                  />
                  <span>{option.label}</span>
                </div>
                <span className={`option-radio ${selected ? 'option-radio-selected' : ''}`} />
              </div>
              <div className="option-side">
                {option.price > 0 ? (
                  <Badge size={BadgeSizes.Xs} variant={selected ? BadgeVariants.AccentLight : BadgeVariants.Default}>
                    {formatDeltaPrice(option.price)}
                  </Badge>
                ) : (
                  <span className="option-included">Без доплаты</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CheckoutScreen({ bookingFor, onBack, onBookingForChange, selectedOffer }) {
  return (
    <>
      <SectionHeader onBack={onBack} title="Введите данные гостей" />
      <div className="checkout-content">
        <div className="checkout-card guest-form-card">
          <h2>Введите свои данные</h2>
          <div className="selected-offer-inline">
            <div className="selected-offer-room">{selectedOffer.roomName}</div>
            <div className="selected-offer-summary">
              <SummaryLine label="Питание" value={selectedOffer.labels.meal} />
              <SummaryLine label="Отмена" value={selectedOffer.labels.cancellation} />
              <SummaryLine label="Оплата" value={selectedOffer.labels.payment} />
              {selectedOffer.labels.extras.length > 0 ? (
                <SummaryLine label="Доп. услуги" value={selectedOffer.labels.extras.join(', ')} />
              ) : null}
            </div>
          </div>

          <div className="field-caption">Я бронирую</div>
          <SegmentedButtons
            fullWidth
            hasError={false}
            items={bookingForItems}
            name="booking-for"
            onChangeAction={onBookingForChange}
            value={bookingFor}
          />

          <div className="auth-copy">
            Авторизуйтесь удобным способом - данные заполнятся автоматически. Или введите их вручную.
          </div>

          <div className="auth-icons-row">
            <div className="auth-icon vk">VK</div>
            <div className="auth-icon tbank">T</div>
            <div className="auth-icon sber">S</div>
            <div className="auth-icon alfa">A</div>
          </div>

          <div className="text-fields-stack">
            <TextField placeholder="Фамилия" showTooltip={false} />
            <TextField placeholder="Имя" showTooltip={false} />
            <TextField placeholder="Отчество" showTooltip={false} />
            <TextField placeholder="Телефон" showTooltip={false} />
            <TextField placeholder="Электронная почта" showTooltip={false} />
          </div>

          <div className="checkout-total-card">
            <div className="checkout-total-row">
              <span>{selectedOffer.priceCaption}</span>
              <strong>{formatPrice(selectedOffer.totalPrice)}</strong>
            </div>
            <div className="checkout-total-taxes">{selectedOffer.taxes}</div>
          </div>

          <Button form="round" size="m" variant="primary" width={buttonWidthEnum.full}>
            Забронировать
          </Button>
        </div>
      </div>

      <div className="checkout-bottom-bar">
        <div className="checkout-stay-meta">
          <div className="stay-dates">24 дек. - 25 дек.</div>
          <div className="stay-guests">2 взрослых, 1 ночь</div>
        </div>
        <div className="checkout-price-summary">
          <div className="checkout-price">{formatPrice(selectedOffer.totalPrice)}</div>
          <div className="checkout-price-taxes">{selectedOffer.taxes}</div>
        </div>
        <button className="checkout-collapse" onClick={onBack} type="button" aria-label="Назад к выбору">
          <SvgMaskIcon className="checkout-collapse-icon" icon={arrowLeftIcon} />
        </button>
      </div>
    </>
  );
}

function SummaryLine({ label, value }) {
  return (
    <div className="summary-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SvgMaskIcon({ className, icon }) {
  return <span aria-hidden="true" className={className} style={{ '--icon-url': `url(${icon})` }} />;
}

function FilterChip({ active, filter, onClear, onClick, open, value }) {
  const count = Array.isArray(value) ? value.length : 0;
  const label = filter.type === 'multi' && count > 0 ? `${filter.label}: ${count}` : filter.label;

  return (
    <div className="filter-chip-wrap">
      <Chip
        className={`filter-chip ${active ? 'filter-chip-active' : ''} ${open ? 'filter-chip-open' : ''}`}
        endIcon={
          active ? (
            <span
              aria-hidden="true"
              className="filter-chip-clear"
              onClick={(event) => {
                event.stopPropagation();
                onClear(filter.key);
              }}
            >
              <SvgMaskIcon className="filter-chip-clear-icon" icon={crossIcon} />
            </span>
          ) : filter.type === 'multi' ? (
            <SvgMaskIcon className={`filter-chip-arrow ${open ? 'filter-chip-arrow-open' : ''}`} icon={arrowDownIcon} />
          ) : null
        }
        label={label}
        onClick={() => onClick(filter)}
        selected={active || open}
      />
    </div>
  );
}

function FilterDropdown({ filter, onToggleOption, selectedValues }) {
  if (!filter || filter.type !== 'multi') {
    return null;
  }

  return (
    <div className={`filter-dropdown filter-dropdown-${filter.key}`}>
      {filter.options.map((option) => {
        const checked = selectedValues.includes(option.value);

        return (
          <label className="filter-dropdown-option" key={option.value}>
            <input checked={checked} onChange={() => onToggleOption(filter.key, option.value)} type="checkbox" />
            <span className={`filter-dropdown-checkbox ${checked ? 'filter-dropdown-checkbox-checked' : ''}`}>✓</span>
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function EmptyState({ onReset }) {
  return (
    <div className="empty-state-card">
      <div className="empty-state-title">Нет вариантов с выбранными условиями</div>
      <button className="empty-state-reset" onClick={onReset} type="button">
        Сбросить фильтры
      </button>
    </div>
  );
}

function roomMatchesFilters(room, activeFilters) {
  if (activeFilters.balcony && !room.balcony) {
    return false;
  }

  if (activeFilters.bedType.length > 0 && !activeFilters.bedType.some((value) => room.bedTypes.includes(value))) {
    return false;
  }

  if (activeFilters.view.length > 0 && !activeFilters.view.includes(room.view)) {
    return false;
  }

  if (activeFilters.boardType.length > 0 && !activeFilters.boardType.some((value) => room.options.meal.some((option) => option.id === value))) {
    return false;
  }

  if (activeFilters.freeCancellation && !room.options.cancellation.some((option) => option.id === 'free')) {
    return false;
  }

  if (activeFilters.noPrepayment && !room.options.payment.some((option) => option.id === 'postpay')) {
    return false;
  }

  return true;
}

function sanitizeSelection(room, selection, activeFilters) {
  const nextSelection = {
    ...selection,
    extras: selection?.extras ? [...selection.extras] : [],
  };

  ['meal', 'cancellation', 'payment'].forEach((groupKey) => {
    const autoAppliedOption = getAutoAppliedOption(room, groupKey);

    if (autoAppliedOption) {
      nextSelection[groupKey] = autoAppliedOption.id;
      return;
    }

    const allowedIds = getAllowedOptionIds(groupKey, activeFilters);
    const fallbackId = room.defaults[groupKey];
    const currentValue = nextSelection[groupKey] || fallbackId;

    if (allowedIds !== null && !allowedIds.includes(currentValue)) {
      nextSelection[groupKey] = allowedIds[0];
      return;
    }

    nextSelection[groupKey] = currentValue;
  });

  nextSelection.extras = nextSelection.extras.filter((extraId) => room.options.extras.some((extra) => extra.id === extraId));

  return nextSelection;
}

function getAllowedOptionIds(groupKey, activeFilters) {
  if (groupKey === 'meal') {
    return activeFilters.boardType.length > 0 ? activeFilters.boardType : null;
  }

  if (groupKey === 'cancellation') {
    return activeFilters.freeCancellation ? ['free'] : null;
  }

  if (groupKey === 'payment') {
    return activeFilters.noPrepayment ? ['postpay'] : null;
  }

  return null;
}

function getAutoAppliedOption(room, groupKey) {
  const options = room.options[groupKey];

  if (!options || options.length < 2) {
    return null;
  }

  const benefitOption = options.find((option) => option.benefit);
  if (!benefitOption) {
    return null;
  }

  const minPrice = Math.min(...options.map((option) => option.price));
  return benefitOption.price === minPrice ? benefitOption : null;
}

function buildOffer(room, selection) {
  const chosenMeal = getOptionById(room.options.meal, selection.meal);
  const chosenCancellation = getOptionById(room.options.cancellation, selection.cancellation);
  const chosenPayment = getOptionById(room.options.payment, selection.payment);
  const chosenExtras = room.options.extras.filter((extra) => selection.extras.includes(extra.id));

  return {
    roomId: room.id,
    roomName: room.name,
    priceCaption: room.priceCaption,
    taxes: room.taxes,
    totalPrice: getTotalPrice(room, selection),
    labels: {
      meal: chosenMeal.label,
      cancellation: chosenCancellation.label,
      payment: chosenPayment.label,
      extras: chosenExtras.map((extra) => extra.label),
    },
  };
}

function getTotalPrice(room, selection) {
  const baseSelection = [
    getOptionById(room.options.meal, selection.meal),
    getOptionById(room.options.cancellation, selection.cancellation),
    getOptionById(room.options.payment, selection.payment),
  ];

  const extraPrice = room.options.extras
    .filter((extra) => selection.extras.includes(extra.id))
    .reduce((sum, extra) => sum + extra.price, 0);

  return room.basePrice + baseSelection.reduce((sum, option) => sum + option.price, 0) + extraPrice;
}

function getOptionById(options, optionId) {
  return options.find((option) => option.id === optionId) || options[0];
}

function isFilterActive(filter, activeFilters) {
  const value = activeFilters[filter.key];
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}

function formatDeltaPrice(value) {
  return `+${new Intl.NumberFormat('ru-RU').format(value)} ₽`;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
