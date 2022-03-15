Testaufgabe Frontend 2022 - Meine Herangehensweise.

Gesamtdauer: 8std

Terminalbefehle: npm install
npm run storybook  
 npm run client:dev

Arbeitsablauf:

Zuerst habe ich mir Gedanken darüber gemacht welche Komponenten die Seite benötigt.
Diese habe ich mir aufgeschrieben und dann nacheinander erstellt. Die "Besonderheiten" bzw. Herangehensweise an die einzelnen Komponenten folgen.

Header: Hier habe ich die zur Unterstreichung der einzelnen Kategorien einen ::hover genutzt um die jeweiligen Wörter zu highlighten.
(Das Logo für den Header konnte ich den Assets leider nicht entnehmen).

Formular: Hier galt es ein einfaches Form Element zu erstellen. Die einzelnen Spalten habe ich mittels display:grid; angeordnet.

Hintergrund: Bei diesem Element hatte ich leichte Schwierigkeiten. Es gelang mir nicht das Bild vollkommen responsive du gestalten und gleichzeitig das Formular
darauf zu plazieren.

Text: Zwei einfach Texte - eine Überschrift. Relativ selbserklärend.

Collage: Mit dieser Collage hatte ich bei weitem die größten Schwierigkeiten. Ich habe unglaublich viel Zeit dabei verloren diese einigermaßen richtig anzuorden.
Beim nächsten Mal würde ich diese Collage lediglich grob anordnen und dann weiter zum nächsten Element springen. Hier für gingen wahrscheinlich 2Std. drauf.
Im Endeffekt konnte ich diese Aufgabe einigermaßen lösen indem ich grid-template-areas genutzt habe.

Haus-Karten: Bei den "Haus-Karten" war die größte Schwierigkeit für mich die schriften auf den Elementen zu plazieren und gleichzeitg responsive zu bleiben. Dies ist mir nicht in Gänze gelungen.
Bei den roten Linies musste ich ein bisschen kreativ werden, in dem ich "unsichtbare" div's erstellt habe, denen eine border-bottom verpasst habe, den Text entweder links/rechts- bündig
plaziert habe und den Namen der Residenz darunter plaziert habe.

Carousel: Das Bilder "Carousel" war der nächste grpße Zeitfresser. Hier habe ich auch mindestens 2Std. verloren. Im Endeffekt habe ich mich dafür entschieden auf die Bootstrap-React-Library zurückzugreifen
und habe ein Carousel gefunden, was einigermaßen meinen Ansprüchen genügt und habe dies - soweit möglich an die Anforderungen angepasst.

Footer: Der Footer besteht auf zwei einfach div's, welche ich übereinander plaziert habe. Das Logo des Footers konnte ich den Assets ebenfalls nicht entnehmen.

Abschlussworte: Mir ist bewusst, das ich viel Zeit damit verloren habe mir über bestimmte Komponenten den Kopf zu zerbrechen anstatt diese "vorzeigbar" zu machen und zum nächsten Task zu springen. Für die Mobile Viewports hatte ich am Ende keine Zeit mehr, da ich mich strikt an die maximalen 8Std. halten wollte.
Diese hätte ich mit @keyframes-mobile und dementsprechenden Viewports umgesetzt. Dies stellte für mich keine Schwierigkeit dar, sondern ein Fleißaufgabe, weshalb ich mich an die "tricky"- Komponenten gemacht habe.
Ich hoffe ich habe die Aufgabe einigermaßen zufriedenstellen erledigt. EDIT: Ich habe für jede einzelne Komponente eine dazugehörige Story auf Storybook.com erstellt und diese isoliert von den anderen Komponenten testen zu können.
