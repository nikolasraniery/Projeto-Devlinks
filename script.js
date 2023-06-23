function toggleMode() {
  const html = document.documentElement

  /* Metodo 1

   if(html.classList.contains('light')) {
     html.classList.remove('light')
   } else {
     html.classList.add('light')
   }*/

  /* Metodo 2*/

  html.classList.toggle("light")
}
