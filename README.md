# 🎴 Memory Match

Ein modernes Memory-Spiel im Browser – mit Vorschau-Phase, 3D-Flip-Animationen, Timer, Fehlerzähler und Konfetti beim Gewinnen.

Gebaut mit reinem **HTML, CSS und JavaScript** – keine Bibliotheken und kein Build-Tool erforderlich.

![Status](https://img.shields.io/badge/status-fertig-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)
[![Live Demo](https://img.shields.io/badge/🎮_Live_Demo-Jetzt_spielen!-brightgreen?style=for-the-badge)](https://memory-match-cards.netlify.app)

---

## ✨ Features

* 👀 **Vorschau-Phase** – Alle Karten werden kurz aufgedeckt, damit du sie dir einprägen kannst.
* 🎚️ **3 Schwierigkeitsgrade** – Einfach (5 s), Normal (3 s), Schwer (1,5 s).
* 🎬 **3D-Flip-Animationen** – Die Karten drehen sich realistisch um.
* ⏱️ **Timer, Züge- & Fehlerzähler** – Alles wird live in der Statusleiste angezeigt.
* 🏆 **Gewinn-Overlay mit Konfetti** – Inklusive Statistik am Ende des Spiels.
* 📱 **Responsive** – Funktioniert auf Desktop, Tablet und Smartphone.
* 🎨 **Modernes Glassmorphism-Design** – Dunkler Farbverlauf mit verschwommenen Panels.
* 🧠 **Faires Spielprinzip** – Während der Vorschau können keine Karten ausgewählt werden.
* 🚫 **Keine externen Abhängigkeiten** – Kein CDN, keine Bilder und keine Fonts erforderlich.

---

## 🎮 Spielanleitung

**Spiel starten**
Beim Laden wird automatisch ein neues Spiel erstellt.

**Vorschau-Phase**
Alle 20 Karten werden für einige Sekunden aufgedeckt. Ein Banner oben zeigt den Countdown, während ein Balken unten den Fortschritt anzeigt.

**Karten drehen sich um**
Nach Ablauf der Vorschau werden alle Karten wieder verdeckt.

**Jetzt spielen!**
Klicke nacheinander auf zwei Karten:

* ✅ **Gleiche Symbole** → Die Karten bleiben offen und werden grün markiert.
* ❌ **Unterschiedliche Symbole** → Die Karten drehen sich nach 0,9 Sekunden wieder zurück und der Fehlerzähler wird um 1 erhöht.

**Gewinnen**
Sobald alle 10 Paare gefunden wurden, erscheint ein Konfetti-Regen mit deiner Statistik:

* ⏱️ Zeit
* 🔄 Züge
* ❌ Fehler

---

## 🎚️ Schwierigkeitsgrade

| Schwierigkeit | Vorschauzeit | Geeignet für                |
| ------------- | -----------: | --------------------------- |
| 😌 Einfach    |   5 Sekunden | Anfänger & Kinder           |
| 🙂 Normal     |   3 Sekunden | Standard / Klassisch        |
| 😈 Schwer     | 1,5 Sekunden | Profis & Gedächtniskünstler |

💡 Die Auswahl wird beim Klick auf **🔄 Neues Spiel** übernommen.

---

## 🎨 Anpassungen

### Andere Symbole verwenden

In `script.js` kann oben die `ICONS`-Liste geändert werden:

```javascript
const ICONS = ["🍎", "🍌", "🍇", "🍒", "🍓", "🥝", "🍑", "🍍", "🥥", "🍉"];
```

⚠️ Es müssen **10 verschiedene Symbole** sein, da das Board aus **4 × 5 = 20 Karten** besteht und somit **10 Paare** benötigt.

### Board-Größe ändern

Für ein kleineres Spielfeld mit **4 × 4 = 16 Karten** (= 8 Paare):

```javascript
const ICONS = ["🔥", "💧", "⚡", "🌿", "❄️", "🌙", "⭐", "💎"]; // 8 Stück
const ROWS = 4;
const COLS = 4;
```

Anschließend muss in `style.css` das Grid angepasst werden:

```css
#board {
  grid-template-columns: repeat(4, 1fr);
}
```

### Farben anpassen

In `style.css` können die Farbverläufe geändert werden, zum Beispiel:

```css
body {
  background: linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9);
}
```

### Vorschau-Zeiten anpassen

In `index.html` können bei den `<option>`-Werten die Vorschauzeiten angepasst werden.

Die Werte werden in **Millisekunden** angegeben:

```html
<option value="8000">😌 Sehr einfach (8 s)</option>
<option value="3000" selected>🙂 Normal (3 s)</option>
<option value="1000">😈 Hardcore (1 s)</option>
```

---

## 💡 Ideen für Erweiterungen

* [ ] 🔊 **Sound-Effekte** – Flip, Match, Win (mit `new Audio()`)
* [ ] 🏆 **Highscore-Liste** – Top 5 Zeiten mit `localStorage`
* [ ] 👥 **2-Spieler-Modus** – Abwechselnd am selben Gerät
* [ ] 💡 **Tipp-Button** – Zeigt kurz 2 Karten (kostet 1 Fehler)
* [ ] 🌓 **Dark-/Light-Mode-Umschalter**
* [ ] 🎨 **Theme-Auswahl** – Emojis, Tiere, Pokéball-Symbole
* [ ] 📊 **Statistik-Seite** – Beste Zeit, durchschnittliche Züge
* [ ] 🌐 **Mehrsprachigkeit** – Deutsch / Englisch

---

## 🙏 Danksagungen

**Inspiration:** Klassisches Memory / Concentration (seit 1959)

**Design-Ideen:** Glassmorphism-Trend und moderne Web-Apps

**Emojis:** Unicode-Standard

---

## 👤 Autor

Erstellt mit ❤️ als modernes Beispiel für ein Browser-Memory-Spiel.

Wenn dir das Spiel gefällt, gib dem Projekt gerne einen ⭐ auf GitHub!
