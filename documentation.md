Expense Tracker App NextJS 13 + Firebase + Tailwind CSS (2023)

-kreiramo npx create-next-app (ime aplikacije)
-otvaramo page.js i brisemo nepotrebne HTML elementa
-dodajemo h1 i div element
-dodajemo input elemente
-stiliziramo dodane elemente
-importujemo 'use client' na pocetku page.js fajla
-importujemo useState React hook
-kreiramo  const [items, setItems] = useState([ {...}])
-kreiramo const [total, setTotal] = useState(0)
-kreiramo ul element i unutar dodajemo items.map() metodu
-ispod ul elementa dodajemo uslov items.length < 1
-kreiramo Firebase projekt
-kliknemo na web
-registrujemo aplikaciju
-npm i firebase
-u app folderu kreiramo firebase.js fajl
-kopiramo kod sa firebase u firebase.js fajl
-u firebase.js fajl importujemo getFirestore
-u firebase.js fajl kreiramo i eksportujemo db varijablu
-u page.js fajlu importujemo collection i addDoc 
-kreiramo addItem async funkciju
-input elementima dodajemo atribut value
-kreiramo const [newItem, setNewItem] = useState({name: '', price: ''})
-input elementima dodajemo onChange dogadaj
-button elementu dodajemo onClick dogadaj i proslijedujemo addItem funkciju
-u addItem funkciji dodajemo if uslov koji provjerava da li su polja prazna
-u page.js fajl importujemo db
-u funkciji addItem, kreiramo await addDoc funkciju
-kreiramo database
-u page.js fajl importujemo getDoc, querySnapshot
-kreiramo useEffect React hook
-u useEffect React hook, unutar callback funkcije, kreiramo q i unsubscribe varijable
-kreiramo varijablu itemsArr prazan niz
-dodajemo querySnapshot.forEach
-kreiramo calculateTotal funkciju
-unutar calculateTotal funkcije kreiramo varijablu totalPrice
-dodajemo setTotal(totalPrice)
-pozivamo calculateTotal funkciju
-dodajemo return () => unsubscribe()
-kreiramo deleteItem funkciju
-button elementu X dodajemo onClick dogadaj kojem proslijedujemo deleteItem funkciju
