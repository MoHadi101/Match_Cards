# 🎴 Memory Match

Ein modernes Memory-Spiel im Browser – mit Vorschau-Phase, 3D-Flip-Animationen,
Timer, Fehlerzähler und Konfetti beim Gewinnen. Gebaut mit reinem **HTML, CSS und JavaScript**
(keine Bibliotheken, kein Build-Tool nötig).


![Status](https://img.shields.io/badge/status-fertig-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
[![Live Demo](https://img.shields.io/badge/🎮_Live_Demo-Jetzt_spielen!-brightgreen?style=for-the-badge)](https://memory-match-cards.netlify.app)

---

## ✨ Features

- 👀 **Vorschau-Phase** – Alle Karten werden kurz aufgedeckt, damit du sie dir einprägen kannst
- 🎚️ **3 Schwierigkeitsgrade** – Einfach (5s), Normal (3s), Schwer (1,5s)
- 🎬 **3D-Flip-Animationen** – Karten drehen sich realistisch um
- ⏱️ **Timer, Züge- & Fehlerzähler** – Live in der Statusleiste
- 🏆 **Gewinn-Overlay mit Konfetti** – Plus Statistik am Ende
- 📱 **Responsive** – Funktioniert auf Desktop, Tablet und Handy
- 🎨 **Modernes Glassmorphism-Design** – Dunkler Farbverlauf, verschwommene Panels
- 🧠 **Faires Spielprinzip** – Kein Schummeln möglich während der Vorschau
- 🚫 **Keine externen Abhängigkeiten** – Kein CDN, keine Bilder, keine Fonts nötig

---

## 🎮 Spielanleitung
Spiel starten – Beim Laden wird automatisch ein neues Spiel erstellt.

Vorschau-Phase – Alle 20 Karten werden für ein paar Sekunden aufgedeckt.
Ein Banner oben zeigt den Countdown, ein Balken unten den Fortschritt.

Karten drehen sich um – Nach Ablauf der Vorschau werden alle Karten verdeckt.

Jetzt spielen! – Klicke zwei Karten an:

✅ Gleiche Symbole → sie bleiben offen (grün markiert)

❌ Unterschiedliche Symbole → sie drehen sich nach 0,9s zurück (Fehler +1)

Gewinnen – Sobald alle 10 Paare gefunden sind, erscheint ein Konfetti-Regen
mit deiner Statistik (Zeit, Züge, Fehler).

## 🎚️ Schwierigkeitsgrade
😌 Einfach ->	5 Sekunden ->	Anfänger, Kinder
🙂 Normal -> 3 Sekunden	-> Standard / Klassisch
😈 Schwer -> 	1,5 Sekunden ->	Profis & Gedächtniskünstler

💡 Die Auswahl wird beim Klick auf 🔄 Neues Spiel übernommen.

## 🎨 Anpassungen
Andere Symbole verwenden
In script.js oben die ICONS-Liste ändern:
const ICONS = ["🍎","🍌","🍇","🍒","🍓","🥝","🍑","🍍","🥥","🍉"];
⚠️ Es müssen 10 verschiedene Symbole sein, weil das Board 4×5 = 20 Karten hat (= 10 Paare).

Board-Größe ändern
Für ein kleineres Spielfeld z. B. 4×4 = 16 Karten (= 8 Paare):
const ICONS = ["🔥","💧","⚡","🌿","❄️","🌙","⭐","💎"]; // 8 Stück
const ROWS = 4;
const COLS = 4;
Und in style.css:
#board {
  grid-template-columns: repeat(4, 1fr);
}
Farben anpassen
In style.css die Farbverläufe ändern, z. B.:


body {
  background: linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9);
}
Vorschau-Zeiten anpassen
In index.html bei den <option>-Werten (in Millisekunden):


<option value="8000">😌 Sehr einfach (8s)</option>
<option value="3000" selected>🙂 Normal (3s)</option>
<option value="1000">😈 Hardcore (1s)</option>

## 💡 Ideen für Erweiterungen
□ 🔊 Sound-Effekte – Flip, Match, Win (mit new Audio())
□ 🏆 Highscore-Liste – Top 5 Zeiten im localStorage
□ 👥 2-Spieler-Modus – Abwechselnd am selben Gerät
□ 💡 Tipp-Button – Zeigt kurz 2 Karten (kostet 1 Fehler)
□ 🌓 Dark/Light-Mode-Umschalter
□ 🎨 Theme-Auswahl – Emojis, Tiere, Pokéball-Symbole
□ 📊 Statistik-Seite – Beste Zeit, durchschnittliche Züge
□ 🌐 Mehrsprachigkeit – Deutsch / Englisch

##🙏 Danksagungen

Inspiration: klassisches Memory / Concentration (seit 1959)

Design-Ideen: Glassmorphism-Trend, moderne Web-Apps

Emojis: Unicode-Standard

##👤 Autor

Erstellt mit ❤️ als modernes Beispiel für ein Browser-Memory-Spiel.

Wenn dir das Spiel gefällt, gib dem Projekt gerne einen ⭐ auf GitHub!
