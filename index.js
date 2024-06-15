/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  // статичне поле count, яке відслідковує кількість музикантів, початкове значення 0
  // Об'являємо приватні поля #name; #instrument;

  // Статичне поле count, яке відслідковує кількість музикантів, початкове значення 0
  static count = 0;

  // Об'являємо приватні поля #name та #instrument
  #name;
  #instrument;

  constructor(name, instrument) {
    // Конструктор приймає два параметри: name та instrument
    // присвоєння вхідного значення name до приватного поля #name
    // присвоєння вхідного значення instrument до приватного поля #instrument
    // збільшення значення статичного поля на 1
    // Конструктор приймає два параметри: name та instrument
    // Присвоєння вхідного значення name до приватного поля #name
    this.#name = name;
    // Присвоєння вхідного значення instrument до приватного поля #instrument
    this.#instrument = instrument;
    // Збільшення значення статичного поля на 1
    Musician.count++;
  }

  get name() {
    // гетер для приватного поля #name
    // повертає значення приватного поля #name
    return this.#name;
  }

  get instrument() {
    // гетер для приватного поля #instrument
    // повертає значення приватного поля #instrument
    return this.#instrument;
  }

  set name(newName) {
    // сетер для приватного поля #name
    // присвоює нове значення приватному полю #name
    this.#name = newName;
  }

  set instrument(newInstrument) {
    // сетер для приватного поля #instrument
    // присвоює нове значення приватному полю #instrument
    this.#instrument = newInstrument;
  }

  play() {
    // метод, що виводить рядок в консоль <#name> грає на <#instrument>
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  // Об'являємо приватні поля #band;
  // Конструктор приймає три параметри: name, instrument та band
  // виклик конструктора батьківського класу super з двома параметрами name, instrument
  // присвоєння вхідного значення band до приватного поля #band
  // гетер для приватного поля #band
  // повертає значення приватного поля #band
  // сетер для приватного поля #band
  // присвоює нове значення приватному полю #band
  // метод joinBand, що змінює значення #band, this.#band = band
  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}

  // Об'являємо приватне поле #band
  #band;

  // Конструктор приймає три параметри: name, instrument та band
  constructor(name, instrument, band) {
    // Виклик конструктора батьківського класу з двома параметрами: name та instrument
    super(name, instrument);
    // Присвоєння вхідного значення band до приватного поля #band
    this.#band = band;
  }

  // Гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // Сетер для приватного поля #band
  set band(newBand) {
    this.#band = newBand;
  }

  // Метод joinBand, що змінює значення #band
  joinBand(newBand) {
    this.#band = newBand;
  }

  // Перевизначений метод play(), що виводить рядок в консоль
  play() {
    console.log(
      `${this.name} грає на ${this.instrument} в групі ${this.#band}`
    );
  }
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  // Об'являємо приватні поля  #band;
  // Конструктор приймає три параметри: name, instrument та band
  // виклик конструктора батьківського класу super з двома параметрами name, instrument
  // присвоєння вхідного значення band до приватного поля #band
  // гетер для приватного поля #band
  // повертає значення приватного поля #band
  // сетер для приватного поля #band
  // присвоює нове значення приватному полю #band
  // метод joinBand, що змінює значення #band,this.#band = band
  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}

  // Об'являємо приватне поле #band
  #band;

  // Конструктор приймає три параметри: name, instrument та band
  constructor(name, instrument, band) {
    // Виклик конструктора батьківського класу з двома параметрами: name та instrument
    super(name, instrument);
    // Присвоєння вхідного значення band до приватного поля #band
    this.#band = band;
  }

  // Гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // Сетер для приватного поля #band
  set band(newBand) {
    this.#band = newBand;
  }

  // Метод joinBand, що змінює значення #band
  joinBand(newBand) {
    this.#band = newBand;
  }

  // Перевизначений метод play(), що виводить рядок в консоль
  play() {
    console.log(
      `${this.name} грає на ${this.instrument} в групі ${this.#band}`
    );
  }
}

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.band = newBand

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  // Об'являємо приватні поля #name; #members;
  /*
   * Створюємо конструктор з двома вхідними параметрами: #name і #members
   * #members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
   */
  // Створюємо getter для #name, що повертає приватну властивість #name
  // Створюємо getter для #members, що повертає приватну властивість #members
  // Створюємо сетер для #name
  // Створюємо метод addMember(), що додає нового учасника до гурту
  // Перевіряємо чи Musician є прототипом newMember
  // Ось тут ми використовуємо сетер band класу Musician
  // До приватного поля #members яке є масивом додаємо мового музиканта
  // Якщо ні виводимо в консоль повідомлення Новий учасник повинен бути екземпляром класу Musician
  // Створюємо метод playMusic(), за допомогою forEach перебираємо масив і викликаємо метод play() для кожного учасника гурту
  // Об'являємо приватні поля #name та #members
  #name;
  #members;

  // Конструктор приймає два параметри: name і members (масив об'єктів)
  constructor(name, members = []) {
    this.#name = name;
    this.#members = members;
  }

  // Гетер для приватного поля #name
  get name() {
    return this.#name;
  }

  // Гетер для приватного поля #members
  get members() {
    return this.#members;
  }

  // Сетер для приватного поля #name
  set name(newName) {
    this.#name = newName;
  }

  // Метод addMember, що додає нового учасника до гурту
  addMember(newMember) {
    // Перевіряємо, чи newMember є екземпляром класу Musician або його нащадків
    if (newMember instanceof Musician) {
      // Додаємо нового музиканта до масиву members
      this.#members.push(newMember);
      // Використовуємо сетер band класу Musician для встановлення гурту новому учаснику
      newMember.band = this.#name;
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }

  // Метод playMusic(), що викликає метод play() для кожного учасника гурту
  playMusic() {
    this.#members.forEach((member) => member.play());
  }
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  // Об'являємо приватні поля #band; #location; #date;
  // Створюємо конструктор з трьома вхідними параметрами: #band, #location та #date
  // Створюємо getter для #band, що повертає приватну властивість #band
  // Створюємо getter для #location, що повертає приватну властивість #location
  // Створюємо getter для #date, що повертає приватну властивість #date
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`

  // Об'являємо приватні поля #band, #location та #date
  #band;
  #location;
  #date;

  // Конструктор приймає три параметри: band, location та date
  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  // Гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // Гетер для приватного поля #location
  get location() {
    return this.#location;
  }

  // Гетер для приватного поля #date
  get date() {
    return this.#date;
  }

  // Метод info(), що виводить рядок в консоль
  info() {
    console.log(
      `Гурт ${this.#band.name} виступить в ${
        this.#location
      } ${this.#date.toLocaleDateString()}`
    );
  }
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  // Об'являємо приватні поля #ticketPrice;
  // Створюємо конструктор з чотирма вхідними параметрами: #band, #location, #date та #ticketPrice
  // використання super для виклику конструктора базового класу
  // Створюємо getter для #ticketPrice, що повертає приватну властивість #ticketPrice
  // Створюємо setter для #ticketPrice, що дозволяє змінити приватну властивість #ticketPrice
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
  // Об'являємо приватне поле #ticketPrice
  #ticketPrice;

  // Конструктор приймає чотири параметри: band, location, date та ticketPrice
  constructor(band, location, date, ticketPrice) {
    // Виклик конструктора базового класу Performance
    super(band, location, date);
    // Присвоєння вхідного значення ticketPrice до приватного поля #ticketPrice
    this.#ticketPrice = ticketPrice;
  }

  // Гетер для приватного поля #ticketPrice
  get ticketPrice() {
    return this.#ticketPrice;
  }

  // Сетер для приватного поля #ticketPrice
  set ticketPrice(newPrice) {
    this.#ticketPrice = newPrice;
  }

  // Перевизначений метод info(), що виводить рядок в консоль
  info() {
    console.log(
      `Гурт ${super.band.name} виступить в ${
        super.location
      } ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
    );
  }
}

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  // Об'являємо приватні поля #name; #band;
  // Створюємо конструктор з двома вхідними параметрами: #name та #band
  // Створюємо getter для #name, що повертає приватну властивість #name
  // Створюємо getter для #band, що повертає приватну властивість #band
  // Створюємо setter для #name, що дозволяє змінити приватну властивість #name
  // Створюємо setter для #band, що дозволяє змінити приватну властивість #band
  // Визначаємо метод info(), який виводить інформацію про вокаліста
  // Виводимо інформацію у форматі: "Вокаліст ${this.name} є членом гурту ${this.band}"
  // Об'являємо приватні поля #name та #band
  #name;
  #band;

  // Конструктор приймає два параметри: name та band
  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }

  // Гетер для приватного поля #name
  get name() {
    return this.#name;
  }

  // Гетер для приватного поля #band
  get band() {
    return this.#band;
  }

  // Сетер для приватного поля #name
  set name(newName) {
    this.#name = newName;
  }

  // Сетер для приватного поля #band
  set band(newBand) {
    this.#band = newBand;
  }

  // Метод info(), що виводить інформацію про вокаліста
  info() {
    console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`);
  }
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  // Об'являємо приватні поля #songs;
  // Створюємо конструктор з одним вхідним параметром: #songs
  // Створюємо getter для #songs, що повертає приватну властивість #songs
  // Створюємо метод addSong для додавання нової пісні до масиву #songs
  // Визначаємо метод info(), який виводить інформацію про автора пісень
  // Виводимо інформацію у форматі: "Написав ${this.songs.length} пісень"
  // Об'являємо приватне поле #songs
  #songs;

  // Конструктор приймає один параметр: songs (масив пісень)
  constructor(songs = []) {
    this.#songs = songs;
  }

  // Гетер для приватного поля #songs
  get songs() {
    return this.#songs;
  }

  // Метод addSong для додавання нової пісні до масиву #songs
  addSong(song) {
    this.#songs.push(song);
  }

  // Метод info(), що виводить інформацію про автора пісень
  info() {
    console.log(`Написав ${this.#songs.length} пісень`);
  }
}

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  // Створюємо конструктор з двома вхідними параметрами: name, band
  // super(name, band);
  // Об'являємо приватне поле #songs
  #songs;

  // Конструктор приймає три параметри: name, band, songs
  constructor(name, band, songs = []) {
    // Виклик конструктора базового класу Vocalist
    super(name, band);
    // Присвоєння вхідного значення songs до приватного поля #songs
    this.#songs = songs;
  }

  // Гетер для приватного поля #songs
  get songs() {
    return this.#songs;
  }

  // Метод addSong для додавання нової пісні до масиву #songs
  addSong(song) {
    this.#songs.push(song);
  }

  // Перевизначений метод info(), що виводить інформацію про вокаліста і пісні
  info() {
    console.log(
      `Вокаліст ${this.name} є членом гурту ${this.band}. Написав ${
        this.#songs.length
      } пісень`
    );
  }
}

/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */

/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */

/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */

// Створення band екземпляру класу Band
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */

// Додаємо guitarist до band за допомогою addMember

/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */

/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */

// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype

/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */

/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Створення екземпляра класу Musician
const musician = new Musician("John", "Guitarist");

// Створення екземпляра класу Guitarist
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");

// Створення екземпляра класу Bassist
const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");

// Створення екземпляра класу Band
const band = new Band("The Beatles", [bassist]);

// Додавання guitarist до band за допомогою addMember
band.addMember(guitarist);

// Створення екземпляра класу Vocalist
const vocalist = new Vocalist("Freddie Mercury", "Queen");

// Створення екземпляра класу SongWriter
const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

// Створення екземпляра класу Performance
const performance = new Performance(band, "Liverpool", new Date("2023-08-01"));

// Використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype
Object.assign(LeadSinger.prototype, songwriter);

// Створення екземпляра класу Concert
const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);

// Створення екземпляра класу LeadSinger
const leadSinger = new LeadSinger("Mick Jagger", "The Rolling Stones", [
  "Yesterday",
  "Hey Jude",
  "Let It Be",
]);

// Методи для тестування
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadSinger.info();
